import { notFound } from 'next/navigation';
import Link from 'next/link';
import { STATIC_POSTS } from '@/data/blogPosts';

export const dynamic = 'force-dynamic';

const base = process.env.NEXT_PUBLIC_SERVER_URL || 'https://mynzo-website-khaki.vercel.app';

// Fetch from Payload REST API
async function getPost(slug: string) {
  try {
    const res = await fetch(
      `${base}/api/posts?where[slug][equals]=${encodeURIComponent(slug)}&where[status][equals]=published&limit=1&depth=1`,
      { cache: 'no-store' }
    );
    if (!res.ok) throw new Error(`API ${res.status}`);
    const data = await res.json();
    if (data.docs?.length > 0) return { source: 'cms' as const, post: data.docs[0] };
  } catch (e) {
    console.error('Post fetch error:', e);
  }

  const staticPost = STATIC_POSTS.find(p => p.slug === slug);
  if (staticPost) return { source: 'static' as const, post: staticPost };
  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = await getPost(slug);
  if (!result) return { title: 'Post Not Found – Mynzo' };
  return {
    title: `${result.post.title} – Mynzo Talks`,
    description: result.post.excerpt,
  };
}

const TAG_STYLES: Record<string, { bg: string; color: string }> = {
  'Carbon Markets': { bg: '#EBF7F0', color: '#1A7A4A' },
  'Agroforestry':   { bg: '#E8F3FA', color: '#1A5A7A' },
  'Soil Science':   { bg: '#F5F0FF', color: '#5A1A7A' },
  'Technology':     { bg: '#FFF3E8', color: '#7A4A1A' },
  'Policy':         { bg: '#F0F5FF', color: '#1A3A7A' },
  'Research':       { bg: '#F5F5F0', color: '#3A4A1A' },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = await getPost(slug);
  if (!result) notFound();

  const { source, post } = result;

  // Normalise fields across CMS and static
  const tag      = source === 'static' ? post.tag      : ((post as any).category || 'Research');
  const tagBg    = source === 'static' ? post.tagBg    : (TAG_STYLES[tag]?.bg    ?? '#EBF7F0');
  const tagColor = source === 'static' ? post.tagColor : (TAG_STYLES[tag]?.color ?? '#1A7A4A');
  const date     = source === 'static' ? post.date : ((post as any).publishedAt || '');
  const readTime = post.readTime;
  const author   = post.author || 'Mynzo Team';
  const imgSrc   = source === 'static'
    ? post.img
    : (typeof (post as any).coverImage === 'object' && (post as any).coverImage
        ? (post as any).coverImage.url
        : null);
  const content  = source === 'static'
    ? post.content
    : (typeof (post as any).content === 'string' ? (post as any).content : '');

  return (
    <div style={{ background: '#fff' }}>

      {/* Cover image */}
      {imgSrc && (
        <div style={{ width: '100%', height: '420px', overflow: 'hidden', position: 'relative' }}>
          <img src={imgSrc} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
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
          {date     && <span>{date}</span>}
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
          <p style={{ fontFamily: 'var(--font-nunito)', fontSize: '20px', fontWeight: 700, color: '#0D1F2D', marginBottom: '8px' }}>Ready to monitor your forest assets?</p>
          <p style={{ fontSize: '14px', color: '#3D5A70', marginBottom: '20px', fontFamily: 'var(--font-nunito)' }}>See how Mynzo turns satellite data into verified carbon intelligence.</p>
          <Link href="/get-started" style={{ display: 'inline-block', background: 'var(--teal)', color: '#fff', padding: '12px 32px', borderRadius: '28px', textDecoration: 'none', fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: '14px', letterSpacing: '0.5px' }}>
            Get Started
          </Link>
        </div>

      </div>
    </div>
  );
}
