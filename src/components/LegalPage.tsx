import Link from 'next/link';

interface Section {
  title: string;
  content: string | string[];
}

interface LegalPageProps {
  title: string;
  subtitle: string;
  intro: string;
  sections: Section[];
}

export default function LegalPage({ title, subtitle, intro, sections }: LegalPageProps) {
  return (
    <>
      <div className="hero-banner">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="content-wrap">
        <div className="highlight-box">
          <p>{intro}</p>
        </div>
        {sections.map((s, i) => (
          <div className="policy-card" key={i}>
            <h2>{s.title}</h2>
            {Array.isArray(s.content)
              ? s.content.map((para, j) => <p key={j} style={{ marginBottom: j < s.content.length - 1 ? '12px' : 0 }}>{para}</p>)
              : <p>{s.content}</p>
            }
          </div>
        ))}
        <div style={{ marginTop: '40px', textAlign: 'center', fontSize: '14px', color: '#64748b' }}>
          Questions? Email us at{' '}
          <a href="mailto:support@mynzocarbon.com" style={{ color: 'var(--teal)' }}>support@mynzocarbon.com</a>
        </div>
      </div>
    </>
  );
}
