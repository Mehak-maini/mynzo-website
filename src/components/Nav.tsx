'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

type Section = 'platform' | 'reni' | 'blogs' | null;

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(!isHome); // solid immediately on sub-pages
  const [activeSection, setActiveSection] = useState<Section>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const platformRef = useRef<HTMLDivElement>(null);
  const platformButtonRef = useRef<HTMLButtonElement>(null);

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
      if (visible.has('blogs')) { setActiveSection('blogs'); return; }
      if (visible.has('reni-sec')) { setActiveSection('reni'); return; }
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

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); setPlatformOpen(false); }, [pathname]);

  useEffect(() => {
    if (!platformOpen) return;
    const outside = (event: PointerEvent) => {
      if (!platformRef.current?.contains(event.target as Node)) setPlatformOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPlatformOpen(false);
        platformButtonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
    };
  }, [platformOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // HOME is active only when on home page and no section is in view (top of page)
  const homeActive = isHome && activeSection === null;
  const cls = (s: Section) => isHome && activeSection === s ? 'active' : '';

  const closeMenu = () => { setMenuOpen(false); setPlatformOpen(false); };

  return (
    <header className={`site-nav${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`} id="site-nav">
      {/* Logo — always links back to home */}
      <Link href="/" className="nav-logo" style={{ textDecoration: 'none' }} onClick={closeMenu}>
        <Image
          src="https://mynzocarbon-website.s3.ap-south-1.amazonaws.com/mynzo_logo.png"
          alt="Mynzo"
          width={90}
          height={24}
          style={{ height: '24px', width: 'auto' }}
          unoptimized
        />
      </Link>
      <div className="nav-sep"></div>

      {/* Desktop nav */}
      <nav className="links" aria-label="Main navigation">
        <Link href="/" className={homeActive ? 'active' : ''}>HOME</Link>
        <div className="nav-platform" ref={platformRef} onBlur={event => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPlatformOpen(false);
        }}>
          <button ref={platformButtonRef} className={`nav-platform-toggle ${pathname.startsWith('/platform/') || pathname.startsWith('/solutions/') ? 'active' : cls('platform')}`} aria-expanded={platformOpen} aria-controls="platform-navigation" onClick={() => setPlatformOpen(open => !open)}>
            PLATFORM <span aria-hidden="true">⌄</span>
          </button>
          <div className="nav-platform-panel" id="platform-navigation" hidden={!platformOpen}>
            <Link href="/#platform" onClick={closeMenu}>Platform overview</Link>
            <Link href="/platform/forest-monitoring" onClick={closeMenu} aria-current={pathname === '/platform/forest-monitoring' ? 'page' : undefined}>Forest monitoring</Link>
            <Link href="/platform/digital-mrv" onClick={closeMenu} aria-current={pathname === '/platform/digital-mrv' ? 'page' : undefined}>Digital MRV</Link>
            <Link href="/platform/biodiversity-monitoring" onClick={closeMenu} aria-current={pathname === '/platform/biodiversity-monitoring' ? 'page' : undefined}>Biodiversity monitoring</Link>
            <Link href="/solutions/project-developers" onClick={closeMenu} aria-current={pathname === '/solutions/project-developers' ? 'page' : undefined}>For project developers</Link>
          </div>
        </div>
        <Link href="/#reni-sec" className={cls('reni')}>RENI</Link>
        <Link href="/#team">TEAM</Link>
        <Link href="/#blogs" className={cls('blogs')}>BLOGS</Link>
      </nav>
      <Link href="/get-started" className="nav-cta" style={{ textDecoration: 'none' }}>
        Get Started
      </Link>

      {/* Hamburger button — only visible on mobile */}
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span className={`ham-bar${menuOpen ? ' open' : ''}`}></span>
        <span className={`ham-bar${menuOpen ? ' open' : ''}`}></span>
        <span className={`ham-bar${menuOpen ? ' open' : ''}`}></span>
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu">
          <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <nav className="mobile-links">
            <Link href="/" className={homeActive ? 'active' : ''} onClick={closeMenu}>HOME</Link>
            <Link href="/#platform" className={cls('platform')} onClick={closeMenu}>PLATFORM</Link>
            <Link href="/platform/forest-monitoring" className="mobile-platform-link" onClick={closeMenu}>Forest monitoring</Link>
            <Link href="/platform/digital-mrv" className="mobile-platform-link" onClick={closeMenu}>Digital MRV</Link>
            <Link href="/platform/biodiversity-monitoring" className="mobile-platform-link" onClick={closeMenu}>Biodiversity monitoring</Link>
            <Link href="/solutions/project-developers" className="mobile-platform-link" onClick={closeMenu}>For project developers</Link>
            <Link href="/#reni-sec" className={cls('reni')} onClick={closeMenu}>RENI</Link>
            <Link href="/#team" onClick={closeMenu}>TEAM</Link>
            <Link href="/#blogs" className={cls('blogs')} onClick={closeMenu}>BLOGS</Link>
            <Link href="/get-started" className="mobile-cta" onClick={closeMenu}>Get Started</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
