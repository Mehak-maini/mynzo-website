import Link from 'next/link';
import { STATIC_POSTS } from '@/data/blogPosts';

export const dynamic = 'force-dynamic';

// Fetch from Payload REST API — much faster than importing Payload directly
async function getPosts() {
  try {
    const base = process.env.NEXT_PUBLIC_SERVER_URL || 'https://mynzo-website-khaki.vercel.app';
    const res = await fetch(
      `${base}/api/posts?where[status][equals]=published&sort=-publishedAt&limit=50&depth=1`,
      { cache: 'no-store' }
    );
    if (!res.ok) throw new Error(`API ${res.status}`);
    const data = await res.json();
    if (data.docs?.length > 0) return { source: 'cms' as const, docs: data.docs };
  } catch (e) {
    console.error('Blog fetch error:', e);
  }
  return { source: 'static' as const, docs: STATIC_POSTS };
}

export const metadata = { title: 'Mynzo Talks – All Posts' };

export default async function BlogPage() {
  const { source, docs } = await getPosts();

  return (
    <div style={{ background: '#fff' }}>
      <div className="hero-banner">
        <h1>Mynzo Talks</h1>
        <p>Insights on forests, carbon markets, and precision monitoring</p>
      </div>

      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '64px 64px 100px' }}>
        <div className="blogs2-grid">
          {docs.map((post: any) => {
            const slug     = post.slug;
            const tag      = source === 'static' ? post.tag      : (post.category || 'Research');
            const tagBg    = source === 'static' ? post.tagBg    : '#EBF7F0';
            const tagColor = source === 'static' ? post.tagColor : '#1A7A4A';
            const excerpt  = post.excerpt || '';
            const date     = source === 'static' ? post.date : (post.publishedAt || '');
            const readTime = post.readTime;
            const imgSrc   = source === 'static' ? post.img : (post.coverImageUrl || null);

            return (
              <Link href={`/blog/${slug}`} className="blog2-card" key={slug}>
                <div className="blog2-img">
                  {imgSrc
                    ? <img src={imgSrc} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    : <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#d6ebf1,rgba(89,132,147,0.12))' }} />
                  }
                </div>
                <div className="blog2-body">
                  <span className="blog2-tag" style={{ background: tagBg, color: tagColor }}>{tag}</span>
                  <div className="blog2-title-txt">{post.title}</div>
                  {excerpt && <div className="blog2-excerpt">{excerpt}</div>}
                  <div className="blog2-meta">
                    {date && <span>{date}</span>}
                    {readTime && <span style={{ color: 'var(--teal)' }}>· {readTime} min read</span>}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
