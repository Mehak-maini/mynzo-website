import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeDate, mergePosts } from '../src/lib/post-data';
import { getPublishedPosts, getPost } from '../src/lib/posts';
import { pageMetadata, serializeJsonLd, SITE_URL } from '../src/lib/seo';
import { trackLead } from '../src/lib/analytics';
import sitemap from '../src/app/sitemap';

test('normalizes live legacy date formats and rejects impossible/ambiguous dates', () => {
  for (const [input, expected] of [['aug 5, 2026', '2026-08-05'], ['Sep 2, 2026', '2026-09-02'], ['June 24,2026', '2026-06-24'], ['July 8,2026', '2026-07-08'], ['2026-09-02T12:30:00Z', '2026-09-02']]) {
    assert.equal(normalizeDate(input), expected);
  }
  for (const value of ['02/03/2026', 'February 30, 2026', 'Septemberish 2, 2026', '2026-13-01', '', null]) assert.equal(normalizeDate(value), undefined);
});

test('archive retains static posts, lets published CMS override slugs, excludes drafts, and sorts dates', () => {
  const result = mergePosts([
    { slug: 'older', title: 'CMS title', status: 'published', publishedAt: 'aug 5, 2026' },
    { slug: 'newer', title: 'September', status: 'published', publishedAt: 'Sep 2, 2026' },
    { slug: 'draft', title: 'Private', status: 'draft', publishedAt: 'Sep 9, 2026' },
  ], [
    { slug: 'older', title: 'Fallback title', date: 'April 12, 2025' },
    { slug: 'retained', title: 'Retained', date: 'March 28, 2025' },
  ]);
  assert.deepEqual(result.map(p => p.slug), ['newer', 'older', 'retained']);
  assert.equal(result[1].title, 'CMS title');
  assert.equal(result[0].date, 'September 2, 2026');
});

test('fetches every CMS page with published-only query and deduplicates', async t => {
  const original = globalThis.fetch;
  t.after(() => { globalThis.fetch = original; });
  const pages: string[] = [];
  globalThis.fetch = async input => {
    const url = new URL(String(input));
    assert.equal(url.searchParams.get('where[status][equals]'), 'published');
    const page = url.searchParams.get('page')!; pages.push(page);
    return Response.json({ docs: [{ slug: `page-${page}`, title: `Page ${page}`, status: 'published', publishedAt: 'Sep 2, 2026' }], hasNextPage: page === '1', nextPage: 2 });
  };
  const posts = await getPublishedPosts();
  assert.deepEqual(pages, ['1', '2']);
  assert.equal(posts.length, 5);
  assert.ok(posts.some(p => p.slug === 'how-ai-is-revolutionising-forest-carbon-accounting'));
});

test('CMS outage does not publish a partial sitemap or turn unknown articles into false 404s', async t => {
  const original = globalThis.fetch;
  t.after(() => { globalThis.fetch = original; });
  globalThis.fetch = async () => new Response('Unavailable', { status: 503 });
  await assert.rejects(sitemap, /503/);
  await assert.rejects(() => getPost('existing-cms-slug'), /503/);
  assert.ok(await getPost('how-ai-is-revolutionising-forest-carbon-accounting'));
});

test('empty healthy CMS retains bundled content and returns null for a truly missing slug', async t => {
  const original = globalThis.fetch;
  t.after(() => { globalThis.fetch = original; });
  globalThis.fetch = async () => Response.json({ docs: [], hasNextPage: false });
  assert.equal((await getPublishedPosts()).length, 3);
  assert.equal(await getPost('does-not-exist'), null);
  const entries = await sitemap();
  assert.equal(entries.length, 10);
  assert.ok(entries.every(p => p.url.startsWith(SITE_URL)));
  assert.ok(entries.every(p => !/thank-you|\/admin|\/api/.test(p.url)));
  assert.equal(entries[0].lastModified, undefined);
});

test('metadata is specific to the page and JSON-LD cannot terminate its script element', () => {
  const metadata = pageMetadata('/blog/example', 'Example', 'Description');
  assert.equal(metadata.alternates?.canonical, `${SITE_URL}/blog/example`);
  assert.equal(metadata.openGraph?.url, `${SITE_URL}/blog/example`);
  const serialized = serializeJsonLd({ headline: '</script><script>alert(1)</script>' });
  assert.equal(serialized.includes('<'), false);
  assert.equal(JSON.parse(serialized).headline, '</script><script>alert(1)</script>');
});

test('lead analytics excludes localhost and preview and includes no personal fields', t => {
  const prior = Object.getOwnPropertyDescriptor(globalThis, 'window');
  t.after(() => { if (prior) Object.defineProperty(globalThis, 'window', prior); else Reflect.deleteProperty(globalThis, 'window'); });
  for (const hostname of ['localhost', 'preview.vercel.app', 'www.mynzocarbon.com']) {
    const browser = { location: { hostname }, dataLayer: [] as unknown[] };
    Object.defineProperty(globalThis, 'window', { configurable: true, value: browser });
    trackLead();
    assert.equal(browser.dataLayer.length, hostname === 'www.mynzocarbon.com' ? 1 : 0);
    if (browser.dataLayer.length) assert.deepEqual(Array.from(browser.dataLayer[0] as ArrayLike<unknown>), ['event', 'generate_lead', { form_id: 'get_started', method: 'website_form' }]);
  }
});
