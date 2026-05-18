import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(160deg,#f0f7f9 0%,#e8f4f7 40%,#f5fafb 100%)', padding: '80px 24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px', background: '#fff', borderRadius: '20px', padding: '52px 48px', maxWidth: '480px', width: '100%', boxShadow: '0 8px 40px rgba(89,132,147,0.13)' }}>
        <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg,#598493,#92d3e1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h2 style={{ fontFamily: 'var(--font-nunito)', fontSize: '26px', fontWeight: 700, color: '#101828', margin: 0 }}>Request sent!</h2>
        <p style={{ fontSize: '16px', color: '#4a5565', maxWidth: '320px', lineHeight: 1.6, margin: 0 }}>Thank you! Our team will reach out to you at your email address within 24 hours.</p>
        <Link href="/" style={{ marginTop: '8px', color: '#598493', textDecoration: 'underline', fontSize: '14px' }}>← Back to Home</Link>
      </div>
    </div>
  );
}
