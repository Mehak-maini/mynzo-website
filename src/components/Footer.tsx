import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-brand">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
            <Image
              className="foot-logo"
              src="/mynzo_logo.png"
              alt="Mynzo"
              width={90}
              height={15}
              style={{ height: '15px', width: 'auto', display: 'block', margin: '0' }}
            />
            <p className="foot-tag">
              Revolutionizing forest monitoring with AI-powered satellite technology to create a more transparent and sustainable future.
            </p>
          </div>
          <p className="foot-copy">© 2025 mynzo. All rights reserved.</p>
        </div>
        <div className="foot-nav">
          <nav className="foot-col">
            <p className="foot-col-h">Learn More</p>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
            <Link href="/data-processing">Data Processing Agreement</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
