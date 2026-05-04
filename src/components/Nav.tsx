'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

type Section = 'platform' | 'reni' | 'blogs' | null;

export default function Nav() {
  const pathname                          = usePathname();
  const isHome                            = pathname === '/';
  const [scrolled, setScrolled]           = useState(!isHome); // solid immediately on sub-pages
  const [activeSection, setActiveSection] = useState<Section>(null);

  useEffect(() => {
    // On sub-pages the nav is always solid — no scroll listener needed
    if (!isHome) {
      setScrolled(true);
      setActiveSection(null);
      return;
    }

    // ── Home: transparent → solid on scroll ──
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // ── Home: highlight section in view ──
    const visible = new Set<string>();

    function updateActive() {
      if (visible.has('blogs'))    { setActiveSection('blogs');    return; }
      if (visible.has('reni-sec')) { setActiveSection('reni');     return; }
      if (visible.has('platform')) { setActiveSection('platform'); return; }
      setActiveSection(null); // at top → no highlight
    }

    const observers: IntersectionObserver[] = [];
    ['platform', 'reni-sec', 'blogs'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        entries => {
          entries.forEach(e => e.isIntersecting ? visible.add(id) : visible.delete(id));
          updateActive();
        },
        { threshold: 0.25 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach(o => o.disconnect());
    };
  }, [isHome]);

  // HOME is active only when on home page and no section is in view (top of page)
  const homeActive    = isHome && activeSection === null;
  const cls = (s: Section) => isHome && activeSection === s ? 'active' : '';

  return (
    <header className={`site-nav${scrolled ? ' scrolled' : ''}`} id="site-nav">
      {/* Logo — always links back to home */}
      <Link href="/" className="nav-logo" style={{ textDecoration: 'none' }}>
        <Image
          src="https://www.figma.com/api/mcp/asset/8ca18933-1aaf-4239-a801-40b288202774"
          alt="Mynzo"
          width={90}
          height={24}
          style={{ height: '24px', width: 'auto' }}
          unoptimized
        />
      </Link>
      <div className="nav-sep"></div>
      <nav className="links">
        <Link href="/"          className={homeActive ? 'active' : ''}>HOME</Link>
        <Link href="/#platform" className={cls('platform')}>PLATFORM</Link>
        <Link href="/#reni-sec" className={cls('reni')}>RENI</Link>
        <Link href="/#blogs"    className={cls('blogs')}>BLOGS</Link>
      </nav>
      <Link href="/get-started" className="nav-cta" style={{ textDecoration: 'none' }}>
        Get Started
      </Link>
    </header>
  );
}
