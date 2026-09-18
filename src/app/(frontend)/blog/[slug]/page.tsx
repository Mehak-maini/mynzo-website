import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPost } from '@/lib/posts';
import { pageMetadata, SITE_URL, organization } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

export const revalidate = 300;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const metadata = pageMetadata(`/blog/${encodeURIComponent(slug)}`, `${post.title} – Mynzo Talks`, post.excerpt || `Read ${post.title} on Mynzo Talks.`, post.img || undefined);
  return { ...metadata, openGraph: { ...metadata.openGraph, type: 'article', publishedTime: post.publishedAt, modifiedTime: post.updatedAt, authors: [post.author] } };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const { tag, tagBg, tagColor, date, readTime, author, img: imgSrc, content } = post;
  const url = `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`;
  const isBiodiversityGuide = post.slug === 'biodiversity-metrics-for-restoration-projects';
  const enquiryHref = isBiodiversityGuide
    ? '/get-started?interest=biodiversity-monitoring&source=biodiversity-guide'
    : '/get-started';

  return (
    <div style={{ background: '#fff' }}>
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': [organization, {
        '@type': 'BlogPosting', '@id': `${url}#article`, mainEntityOfPage: url, url,
        headline: post.title, description: post.excerpt || undefined,
        image: imgSrc?.startsWith('/') ? `${SITE_URL}${imgSrc}` : imgSrc || undefined, datePublished: post.publishedAt, dateModified: post.updatedAt,
        author: author === 'Mynzo Team' ? { '@id': `${SITE_URL}/#organization` } : { '@type': 'Person', name: author },
        publisher: { '@id': `${SITE_URL}/#organization` },
      }] }} />

      {/* Cover image */}
      {imgSrc && (
        <div style={{ width: '100%', height: '420px', overflow: 'hidden', position: 'relative' }}>
          {imgSrc.startsWith('/') ? (
            <Image src={imgSrc} alt={post.title} fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
          ) : (
            <img src={imgSrc} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
          )}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.45))' }} />
        </div>
      )}

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '56px 32px 100px' }}>

        {/* Back link */}
        <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--teal)', textDecoration: 'none', fontSize: '14px', fontFamily: 'var(--font-nunito)', fontWeight: 600, marginBottom: '32px' }}>
          ← Back to Mynzo Talks
        </Link>

        {/* Tag */}
        <div style={{ marginBottom: '16px' }}>
          <span className="blog2-tag" style={{ background: tagBg, color: tagColor, fontSize: '12px' }}>{tag}</span>
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: 'var(--font-nunito)', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#0D1F2D', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '20px' }}>
          {post.title}
        </h1>

        {/* Meta */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', fontSize: '14px', color: '#7A96A8', fontFamily: 'var(--font-nunito)', marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid #E2EAF0' }}>
          {author   && <span>By <strong style={{ color: '#3D5A70' }}>{author}</strong></span>}
          {date     && <time dateTime={post.publishedAt}>{date}</time>}
          {post.updatedAt && post.updatedAt !== post.publishedAt && <span>Updated <time dateTime={post.updatedAt}>{new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${post.updatedAt}T00:00:00Z`))}</time></span>}
          {readTime && <span style={{ color: 'var(--teal)', fontWeight: 600 }}>{readTime} min read</span>}
        </div>

        {/* Excerpt */}
        {post.excerpt && (
          <p style={{ fontFamily: 'var(--font-nunito)', fontSize: '20px', color: '#3D5A70', lineHeight: 1.65, marginBottom: '36px', fontWeight: 500 }}>
            {post.excerpt}
          </p>
        )}

        {/* Body content */}
        {content && (
          <div
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}

        {/* CTA footer */}
        <div style={{ marginTop: '64px', padding: '36px', background: 'linear-gradient(135deg,#eaf4f7,#dff0f5)', borderRadius: '16px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-nunito)', fontSize: '20px', fontWeight: 700, color: '#0D1F2D', marginBottom: '8px' }}>{isBiodiversityGuide ? 'Define your biodiversity monitoring scope' : 'Ready to monitor your forest assets?'}</p>
          <p style={{ fontSize: '14px', color: '#3D5A70', marginBottom: '20px', fontFamily: 'var(--font-nunito)' }}>{isBiodiversityGuide ? 'Share your sites, ecological questions and existing field evidence.' : 'Discuss satellite monitoring, field validation and reporting for your project.'}</p>
          <Link href={enquiryHref} style={{ display: 'inline-block', background: 'var(--teal)', color: '#fff', padding: '12px 32px', borderRadius: '28px', textDecoration: 'none', fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: '14px', letterSpacing: '0.5px' }}>
            {isBiodiversityGuide ? 'Discuss biodiversity monitoring' : 'Get Started'}
          </Link>
        </div>

      </div>
    </div>
  );
}
