import Link from 'next/link';
import { getPublishedPosts } from '@/lib/posts';
import { pageMetadata } from '@/lib/seo';
import { EDUCATION_TOPICS, PRACTICAL_GUIDES } from '@/lib/education-guides';

export const revalidate = 300;
export const metadata = pageMetadata('/blog', 'Forests, Biodiversity & Climate Guides | Mynzo Talks', 'Learn about biodiversity, forests, soil carbon, farming, wetlands and climate terms, with practical examples and sources from India and around the world.');

export default async function BlogPage() {
  const docs = await getPublishedPosts();

  return (
    <div style={{ background: '#fff' }}>
      <div className="hero-banner">
        <h1>Mynzo Talks</h1>
        <p>Clear guides to forests, biodiversity, soil and climate</p>
      </div>

      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '64px clamp(20px, 5vw, 64px) 100px' }}>
        <nav aria-label="Explore educational topics" style={{ marginBottom: '36px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {EDUCATION_TOPICS.map(topic => (
            <Link key={topic.href} href={topic.href} style={{ color: '#3D5A70', background: '#eaf4f7', padding: '10px 16px', borderRadius: '24px', fontFamily: 'var(--font-nunito)', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>
              {topic.label}
            </Link>
          ))}
        </nav>
        <section aria-labelledby="practical-guides" style={{ marginBottom: '48px' }}>
          <h2 id="practical-guides" style={{ fontFamily: 'var(--font-nunito)', color: '#0D1F2D', fontSize: '26px', marginBottom: '12px' }}>Put the ideas to work</h2>
          <p style={{ color: '#3D5A70', marginBottom: '24px', lineHeight: 1.7 }}>Start with the question your site assessment needs to answer.</p>
          <div className="blogs2-grid">
            {PRACTICAL_GUIDES.map(guide => (
              <Link key={guide.href} href={guide.href} className="blog2-card">
                <div className="blog2-body">
                  <h3 className="blog2-title-txt" style={{ margin: 0 }}>{guide.title}</h3>
                  <p className="blog2-excerpt" style={{ margin: 0 }}>{guide.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <h2 style={{ fontFamily: 'var(--font-nunito)', color: '#0D1F2D', fontSize: '26px', marginBottom: '24px' }}>All guides and stories</h2>
        <div className="blogs2-grid">
          {docs.map(post => {
            const { slug, tag, tagBg, tagColor, excerpt, date, readTime, img: imgSrc } = post;

            return (
              <Link href={`/blog/${slug}`} className="blog2-card" key={slug}>
                <div className="blog2-img">
                  {imgSrc
                    ? <img loading="lazy" decoding="async" src={imgSrc} alt={post.imgAlt || post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
