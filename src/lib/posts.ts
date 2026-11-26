import { cache } from 'react';
import { STATIC_POSTS } from '@/data/blogPosts';
import { biodiversityBaselinePost } from '@/data/biodiversityBaselinePost';
import { mergePosts, normalizePost } from './post-data';

const blogOnlyPosts = [biodiversityBaselinePost];
const blogOnlySlugs = new Set(blogOnlyPosts.map(post => post.slug));
const allStaticPosts = [...STATIC_POSTS, ...blogOnlyPosts];

// Keep the existing CMS origin until its production hosting dependency is migrated.
function cmsOrigin() {
  return process.env.CMS_API_URL || process.env.NEXT_PUBLIC_SERVER_URL || 'https://mynzo-website-khaki.vercel.app';
}

export const getPublishedPosts = cache(async (scope: 'homepage' | 'blog' = 'homepage') => {
  const docs: Record<string, any>[] = [];
  let page = 1;
  for (;;) {
    const url = new URL('/api/posts', cmsOrigin());
    url.search = new URLSearchParams({ 'where[status][equals]': 'published', limit: '100', depth: '1', page: String(page) }).toString();
    const response = await fetch(url, { next: { revalidate: 300 }, signal: AbortSignal.timeout(15000) });
    if (!response.ok) throw new Error(`Published posts unavailable (HTTP ${response.status})`);
    const data = await response.json();
    if (!Array.isArray(data.docs)) throw new Error('Invalid published-post response');
    docs.push(...data.docs);
    if (!data.hasNextPage) break;
    if (data.nextPage !== page + 1) throw new Error('Invalid published-post pagination');
    page += 1;
  }
  if (scope === 'blog') return mergePosts(docs, allStaticPosts);
  // The homepage feed excludes guides published only in the blog catalogue.
  return mergePosts(docs.filter(post => !blogOnlySlugs.has(post.slug)), STATIC_POSTS);
});

export const getPost = cache(async (slug: string) => {
  try {
    return (await getPublishedPosts('blog')).find(post => post.slug === slug) || null;
  } catch (error) {
    // Known bundled articles remain available during CMS outages. Unknown CMS
    // URLs must fail temporarily, not return a false permanent 404.
    const fallback = allStaticPosts.find(post => post.slug === slug);
    if (fallback) return normalizePost(fallback, 'static');
    throw error;
  }
});
