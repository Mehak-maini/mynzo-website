import Link from 'next/link';
import { getPublishedPosts } from '@/lib/posts';
import { pageMetadata } from '@/lib/seo';

export const revalidate = 300;
export const metadata = pageMetadata('/blog', 'Forest Monitoring & Carbon Insights | Mynzo Talks', 'Explore Mynzo insights on forest monitoring, carbon accounting, agroforestry, soil carbon and climate action.');

export default async function BlogPage() {
  const docs = await getPublishedPosts();

  return (
    <div style={{ background: '#fff' }}>
      <div className="hero-banner">
        <h1>Mynzo Talks</h1>
        <p>Insights on forests, carbon markets, and precision monitoring</p>
      </div>

      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '64px 64px 100px' }}>
        <div className="blogs2-grid">
          {docs.map(post => {
            const { slug, tag, tagBg, tagColor, excerpt, date, readTime, img: imgSrc } = post;

            return (
              <Link href={`/blog/${slug}`} className="blog2-card" key={slug}>
                <div className="blog2-img">
                  {imgSrc
                    ? <img loading="lazy" decoding="async" src={imgSrc} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
