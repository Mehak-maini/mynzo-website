'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ─── Team data ───────────────────────────────────────────────────────────────
const S3 = 'https://mynzocarbon-website.s3.ap-south-1.amazonaws.com';
const TEAM = [
  { name: 'James Abraham', role: 'Founder', img: `${S3}/James_abraham.png`, bio: "Saving our planet from the brink of a climate catastrophe is a responsibility that falls on all of us." },
  { name: 'Tanya Singhal', role: 'Advisor', img: `${S3}/Tanya_singhal.png`, bio: "Climate change is a crisis now. Our platform empowers you to cut your carbon footprint and build a sustainable future—one action at a time." },
  { name: 'Jagmal Singh', role: 'Advisor', img: `${S3}/Jagmal_singh.png`, bio: "AI isn't a silver bullet, but it will accelerate net zero goals. Harnessed responsibly, it helps optimize resources and shape a sustainable future." },
  { name: 'Konark Murarka', role: 'Chief of Staff', img: `${S3}/Konark_murarka.png`, bio: "Strategic operations leader driving organizational excellence and cross-functional coordination across Mynzo's initiatives." },
  { name: 'R. Ravi Kiran', role: 'Product Lead', img: `${S3}/r_ravi_kiran.png`, bio: "Product strategy expert leading the development of innovative forest monitoring solutions and user experience design." },
  { name: 'Amit Gupta', role: 'Head of Technology', img: `${S3}/amit_gupta.png`, bio: "Technology leader designing robust AI systems and satellite data processing frameworks to power Mynzo's forest intelligence platform." },
  { name: 'Jitendra Gadhwal', role: 'Tech Lead', img: `${S3}/jitendra_gadhwal.png`, bio: "Engineering leader overseeing architecture and delivery of scalable systems at the core of Mynzo's platform." },
  { name: 'Ayush Chandrakar', role: 'Senior Data Scientist', img: `${S3}/ayush_chandrakar.png`, bio: "Data science expert building the models and pipelines that turn satellite signals into actionable forest insights." },
  { name: 'Shivang Tripathi', role: 'Full Stack Engineer', img: `${S3}/shivang_tripathi.png`, bio: "Full-stack engineer crafting seamless end-to-end experiences across Mynzo's web platform and data interfaces." },
  { name: 'Abhishek Tripathi', role: 'Full Stack Engineer', img: `${S3}/abhishek_tripathi.png`, bio: "Versatile engineer bridging front-end and back-end development to deliver robust, performant features at scale." },
  { name: 'Srishti Purohit', role: 'QA Engineer', img: `${S3}/srishti_purohit.png`, bio: "Quality assurance engineer ensuring every feature meets the highest standards of reliability and precision before it reaches our users." },
  { name: 'Mehak Maini', role: 'UX/UI Designer', img: `${S3}/mehak_maini.png`, bio: "Designer translating complex environmental data into intuitive, elegant interfaces that make forest intelligence accessible to all." },
  { name: 'Ahilya Dang', role: 'Storyteller', img: `${S3}/ahilya_dang.png`, bio: "Communicator and narrative strategist bringing Mynzo's climate mission to life through compelling stories and purposeful content." },
];

// ─── Blog posts — imported from shared data so slugs stay in sync ────────────
import { STATIC_POSTS as BLOG_POSTS } from '@/data/blogPosts';

// ─── Standards tape data ──────────────────────────────────────────────────────
const STANDARDS = [
  { src: `${S3}/science_based_targets_initiative_sbti.png`,    name: 'Science Based Targets initiative (SBTi)' },
  { src: `${S3}/verra.png`,                                    name: 'Verra' },
  { src: `${S3}/gold_standard.png`,                           name: 'Gold Standard' },
  { src: `${S3}/intergovernmental_panel_on_climate_change_ipcc.png`, name: 'IPCC' },
  { src: `${S3}/ghg_protocol.png`,                            name: 'GHG Protocol' },
  { src: `${S3}/un_sustainable_development_goals_sgds.png`,   name: 'UN Sustainable Development Goals (SDGs)' },
];

export default function HomePage() {
  const teamTrackRef = useRef<HTMLDivElement>(null);
  const teamViewportRef = useRef<HTMLDivElement>(null);
  const teamDotsRef = useRef<HTMLDivElement>(null);
  const platCanvasRef = useRef<HTMLCanvasElement>(null);
  const platSecRef = useRef<HTMLElement>(null);
  const reniCanvasRef = useRef<HTMLCanvasElement>(null);
  const reniSecRef = useRef<HTMLElement>(null);
  const reniMsgsRef = useRef<HTMLDivElement>(null);
  const reniInputRef = useRef<HTMLInputElement>(null);

  // ── Homepage blog posts — fetch latest 3 from CMS, fall back to static ─────
  const [homePosts, setHomePosts] = useState<any[]>(BLOG_POSTS.slice(0, 3));
  useEffect(() => {
    fetch('/api/posts?where[status][equals]=published&sort=-publishedAt&limit=3&depth=1')
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data?.docs?.length > 0) setHomePosts(data.docs);
      })
      .catch(() => { });
  }, []);

  // ── Scroll to top on mount (prevent browser scroll-restoration) ───────────
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  // ── Stats count-up — replays every time the bar enters view ───────────────
  useEffect(() => {
    const statEls = document.querySelectorAll<HTMLElement>('.stat-num');
    const targets = Array.from(statEls).map(el =>
      parseInt(el.textContent!.replace(/[^0-9]/g, ''), 10)
    );
    let running = false;

    function countUp(el: HTMLElement, target: number, duration: number) {
      const start = performance.now();
      function tick(now: number) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target).toLocaleString();
        if (p < 1) requestAnimationFrame(tick);
        else running = false;
      }
      requestAnimationFrame(tick);
    }

    const statsBar = document.querySelector('.stats');
    if (!statsBar) return;

    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !running) {
        running = true;
        statEls.forEach((el, i) => { el.textContent = '0'; countUp(el, targets[i], 2200); });
      }
    }, { threshold: 0.4 });

    obs.observe(statsBar);
    return () => obs.disconnect();
  }, []);

  // ── Scroll-reveal ──────────────────────────────────────────────────────────
  useEffect(() => {
    const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';
    const DUR = 680;
    function applyHidden(el: HTMLElement) {
      const type = el.dataset.revealType || 'up';
      el.style.transition = 'none';
      el.style.opacity = '0';
      if (type === 'up') el.style.transform = 'translateY(36px)';
      if (type === 'left') el.style.transform = 'translateX(-44px)';
      if (type === 'right') el.style.transform = 'translateX(44px)';
      if (type === 'scale') el.style.transform = 'scale(0.88)';
      if (type === 'fade') el.style.transform = 'none';
    }
    function animIn(el: HTMLElement) {
      const delay = parseInt(el.dataset.revealDelay || '0');
      el.offsetHeight;
      el.style.transition = `opacity ${DUR}ms ${EASE} ${delay}ms, transform ${DUR}ms ${EASE} ${delay}ms`;
      el.style.opacity = '1';
      el.style.transform = 'none';
    }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) animIn(e.target as HTMLElement);
        else applyHidden(e.target as HTMLElement);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    function register(el: Element | null, type: string, delay: number) {
      if (!el) return;
      const h = el as HTMLElement;
      h.dataset.revealType = type;
      h.dataset.revealDelay = String(delay);
      applyHidden(h);
      obs.observe(h);
    }
    function registerAll(selector: string, type: string, stagger: number) {
      document.querySelectorAll(selector).forEach((el, i) => register(el, type, stagger * i));
    }

    register(document.querySelector('.hero-title'), 'up', 100);
    register(document.querySelector('.btn-hero'), 'up', 260);
    register(document.querySelector('.why .sec-title'), 'up', 0);
    register(document.querySelector('.why .sec-sub'), 'up', 80);
    registerAll('.why-card', 'up', 90);
    register(document.querySelector('.plat-sec-hdr'), 'up', 0);
    register(document.querySelector('.plat-strip:nth-child(3) .plat-strip-text'), 'left', 100);
    register(document.querySelector('.plat-strip:nth-child(3) .plat-strip-img'), 'right', 200);
    register(document.querySelector('.plat-strip:nth-child(4) .plat-strip-img'), 'left', 100);
    register(document.querySelector('.plat-strip:nth-child(4) .plat-strip-text'), 'right', 200);
    register(document.querySelector('.plat-strip:nth-child(5) .plat-strip-text'), 'left', 100);
    register(document.querySelector('.plat-strip:nth-child(5) .plat-strip-img'), 'right', 200);
    registerAll('.process-step', 'up', 80);
    registerAll('.accuracy-item', 'up', 90);
    register(document.querySelector('.serve-content-col'), 'left', 0);
    register(document.querySelector('.serve-img-col'), 'right', 100);
    registerAll('.serve-item', 'up', 90);
    register(document.querySelector('.reni-sub'), 'up', 0);
    register(document.querySelector('.reni-chat'), 'up', 120);
    register(document.querySelector('.team2-title'), 'up', 0);
    register(document.querySelector('.team2-sub'), 'up', 80);
    registerAll('.team2-card', 'up', 55);
    register(document.querySelector('.cta-title'), 'scale', 0);
    register(document.querySelector('.cta-sec p'), 'up', 120);
    register(document.querySelector('.foot-brand'), 'up', 0);
    registerAll('.foot-col', 'up', 80);

    return () => obs.disconnect();
  }, []);

  // ── Holo card tilt ─────────────────────────────────────────────────────────
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.why-card');
    const handlers: Array<{ el: HTMLElement; mm: (e: MouseEvent) => void; ml: () => void }> = [];
    cards.forEach(card => {
      const mm = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        card.style.setProperty('--mx', (x * 100) + '%');
        card.style.setProperty('--my', (y * 100) + '%');
        const rx = (y - 0.5) * -14;
        const ry = (x - 0.5) * 14;
        card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px) scale(1.03)`;
      };
      const ml = () => {
        card.style.setProperty('--mx', '50%');
        card.style.setProperty('--my', '50%');
        card.style.transform = '';
      };
      card.addEventListener('mousemove', mm);
      card.addEventListener('mouseleave', ml);
      handlers.push({ el: card, mm, ml });
    });
    return () => handlers.forEach(({ el, mm, ml }) => {
      el.removeEventListener('mousemove', mm);
      el.removeEventListener('mouseleave', ml);
    });
  }, []);

  // ── Process step highlight — synced to video currentTime ──────────────────
  useEffect(() => {
    const section = document.querySelector<HTMLElement>('.process-sec');
    const video = document.querySelector<HTMLVideoElement>('.process-video-wrap video');
    const steps = document.querySelectorAll<HTMLElement>('.process-step');
    if (!section || !steps.length) return;

    const NUM_STEPS = steps.length; // 5
    let lastStep = -1;

    function setActive(i: number) {
      if (i === lastStep) return;
      lastStep = i;
      steps.forEach((s, j) => {
        s.querySelector('.process-step-num')?.classList.toggle('active', j === i);
        s.querySelector('.process-step-text')?.classList.toggle('active', j === i);
      });
    }

    // Point 2 gets double weight; others get 1 unit each → total 6 units
    const WEIGHTS = [1, 2, 1.5, 1];
    const totalWeight = WEIGHTS.reduce((a, b) => a + b, 0);
    const thresholds = WEIGHTS.reduce<number[]>((acc, w) => {
      acc.push((acc.length ? acc[acc.length - 1] : 0) + w / totalWeight);
      return acc;
    }, []);

    function onTimeUpdate() {
      if (!video || !video.duration || isNaN(video.duration)) return;
      const progress = video.currentTime / video.duration;
      let idx = thresholds.findIndex(t => progress < t);
      if (idx === -1) idx = NUM_STEPS - 1;
      setActive(idx);
    }

    function startVideo() {
      if (video) { video.currentTime = 0; video.play().catch(() => {}); }
      setActive(0);
    }

    function stopVideo() {
      if (video) video.pause();
    }

    video?.addEventListener('timeupdate', onTimeUpdate);

    const procObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) startVideo(); else stopVideo();
    }, { threshold: 0.35 });
    procObs.observe(section);

    return () => {
      procObs.disconnect();
      video?.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, []);

  // ── Platform constellation canvas ──────────────────────────────────────────
  useEffect(() => {
    const section = platSecRef.current as HTMLElement;
    const canvas = platCanvasRef.current as HTMLCanvasElement;
    if (!section || !canvas) return;
    const ctx = canvas.getContext('2d')!;
    let W = 0, H = 0;
    let stars: Star[] = [];
    let mx = -9999, my = -9999;
    const N = 110;
    const HUES = [195, 200, 205, 210, 188, 215];
    let rafId: number;

    class Star {
      ox!: number; oy!: number; x!: number; y!: number;
      vx!: number; vy!: number; r!: number; hue!: number;
      twinkle!: number; baseAlpha!: number;
      constructor() { this.init(); }
      init() {
        this.ox = Math.random() * W; this.oy = Math.random() * H;
        this.x = this.ox; this.y = this.oy;
        this.vx = (Math.random() - 0.5) * 0.22;
        this.vy = (Math.random() - 0.5) * 0.22;
        this.r = Math.random() * 1.4 + 0.5;
        this.hue = HUES[Math.floor(Math.random() * HUES.length)];
        this.twinkle = Math.random() * Math.PI * 2;
        this.baseAlpha = 0.14 + Math.random() * 0.18;
      }
      update() {
        this.twinkle += 0.022;
        const dx = this.x - mx, dy = this.y - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < 200 * 200 && d2 > 20 * 20) {
          const d = Math.sqrt(d2);
          const f = (1 - d2 / (200 * 200)) * 0.38;
          this.vx -= dx / d * f; this.vy -= dy / d * f;
        }
        if (d2 < 50 * 50) {
          const d = Math.sqrt(d2) || 1;
          this.vx += dx / d * 2.8; this.vy += dy / d * 2.8;
        }
        this.vx += (this.ox - this.x) * 0.0018;
        this.vy += (this.oy - this.y) * 0.0018;
        this.vx *= 0.97; this.vy *= 0.97;
        this.x += this.vx; this.y += this.vy;
      }
      draw() {
        const pulse = 0.65 + 0.35 * Math.sin(this.twinkle);
        const dist = Math.sqrt((this.x - this.ox) ** 2 + (this.y - this.oy) ** 2);
        const excited = dist > 8;
        const alpha = this.baseAlpha * pulse + (excited ? 0.18 : 0);
        ctx.save();
        if (excited) { ctx.shadowColor = `hsla(${this.hue},45%,58%,0.35)`; ctx.shadowBlur = 6; }
        ctx.fillStyle = `hsla(${this.hue},40%,${excited ? 55 : 65}%,${Math.min(alpha, 0.45)})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r * (1 + dist * 0.014), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    function resize() {
      const r = section.getBoundingClientRect();
      W = canvas.width = Math.round(r.width) || section.offsetWidth;
      H = canvas.height = Math.round(r.height) || section.offsetHeight;
      stars = Array.from({ length: N }, () => new Star());
    }

    const onMouseMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      mx = e.clientX - r.left; my = e.clientY - r.top;
    };
    const onMouseLeave = () => { mx = -9999; my = -9999; };
    const onResize = () => resize();
    section.addEventListener('mousemove', onMouseMove);
    section.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', onResize);

    function draw() {
      ctx.clearRect(0, 0, W, H);
      stars.forEach(s => s.update());
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x, dy = stars[i].y - stars[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 80) {
            const d1m = Math.sqrt((stars[i].x - mx) ** 2 + (stars[i].y - my) ** 2);
            const d2m = Math.sqrt((stars[j].x - mx) ** 2 + (stars[j].y - my) ** 2);
            const near = d1m < 200 || d2m < 200;
            ctx.save();
            ctx.globalAlpha = (1 - d / 80) * (near ? 0.18 : 0.05);
            const avgHue = (stars[i].hue + stars[j].hue) / 2;
            ctx.strokeStyle = `hsl(${avgHue},35%,60%)`;
            ctx.lineWidth = near ? 0.75 : 0.25;
            if (near) { ctx.shadowColor = `hsl(${avgHue},35%,62%)`; ctx.shadowBlur = 3; }
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
        if (mx > 0) {
          const dx = stars[i].x - mx, dy = stars[i].y - my;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 155) {
            ctx.save();
            ctx.globalAlpha = (1 - d / 155) * 0.16;
            ctx.strokeStyle = `hsl(${stars[i].hue},35%,62%)`;
            ctx.lineWidth = 0.6;
            ctx.shadowColor = `hsl(${stars[i].hue},35%,62%)`; ctx.shadowBlur = 4;
            ctx.beginPath(); ctx.moveTo(stars[i].x, stars[i].y); ctx.lineTo(mx, my);
            ctx.stroke(); ctx.restore();
          }
        }
      }
      stars.forEach(s => s.draw());
      if (mx > 0 && mx < W) {
        ctx.save();
        const cg = ctx.createRadialGradient(mx, my, 0, mx, my, 95);
        cg.addColorStop(0, 'rgba(89,132,147,0.10)');
        cg.addColorStop(1, 'rgba(89,132,147,0)');
        ctx.fillStyle = cg;
        ctx.beginPath(); ctx.arc(mx, my, 95, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      }
      rafId = requestAnimationFrame(draw);
    }

    requestAnimationFrame(() => { resize(); draw(); });
    return () => {
      cancelAnimationFrame(rafId);
      section.removeEventListener('mousemove', onMouseMove);
      section.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // ── Reni silk-warp canvas ──────────────────────────────────────────────────
  useEffect(() => {
    const canvas = reniCanvasRef.current;
    const section = reniSecRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext('2d')!;
    const GAP = 32;
    let W = 0, H = 0;
    let pts: { ox: number; oy: number; x: number; y: number; vx: number; vy: number; hue: number }[] = [];
    let mx = -9999, my = -9999;
    let rafId: number;

    function resize() {
      const r = section.getBoundingClientRect();
      W = canvas.width = Math.round(r.width) || window.innerWidth;
      H = canvas.height = Math.round(r.height) || 700;
      pts = [];
      for (let y = GAP / 2; y < H; y += GAP)
        for (let x = GAP / 2; x < W; x += GAP)
          pts.push({ ox: x, oy: y, x, y, vx: 0, vy: 0, hue: 190 + Math.random() * 80 });
    }
    const onMouseMove = (e: MouseEvent) => { const r = section.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; };
    const onMouseLeave = () => { mx = -9999; my = -9999; };
    const onResize = () => resize();
    section.addEventListener('mousemove', onMouseMove);
    section.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', onResize);

    function draw() {
      if (!W || !H) { rafId = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        const dx = p.x - mx, dy = p.y - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < 180 * 180) {
          const d = Math.sqrt(d2) || 1;
          const f = (1 - d2 / (180 * 180)) * 14;
          p.vx += dx / d * f; p.vy += dy / d * f;
          p.hue = (p.hue + 1) % 360;
        }
        p.vx += (p.ox - p.x) * 0.06; p.vy += (p.oy - p.y) * 0.06;
        p.vx *= 0.82; p.vy *= 0.82;
        p.x += p.vx; p.y += p.vy;
        const dist = Math.sqrt((p.x - p.ox) ** 2 + (p.y - p.oy) ** 2);
        const r = Math.max(1, 2.5 - dist * 0.02);
        ctx.save();
        ctx.shadowColor = `hsl(${p.hue},100%,60%)`;
        ctx.shadowBlur = dist > 2 ? 10 : 0;
        ctx.fillStyle = `hsl(${p.hue},100%,${50 + dist}%)`;
        ctx.globalAlpha = 0.5 + Math.min(dist * 0.015, 0.5);
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      });
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        if ((p.x - mx) ** 2 + (p.y - my) ** 2 > 220 * 220) continue;
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < GAP * 1.6) {
            const disp = (Math.sqrt((p.x - p.ox) ** 2 + (p.y - p.oy) ** 2) + Math.sqrt((q.x - q.ox) ** 2 + (q.y - q.oy) ** 2)) / 2;
            if (disp < 2) continue;
            ctx.save();
            ctx.globalAlpha = Math.min(disp * 0.015, 0.3);
            ctx.strokeStyle = `hsl(${(p.hue + q.hue) / 2},100%,60%)`;
            ctx.lineWidth = 0.5;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
            ctx.restore();
          }
        }
      }
      rafId = requestAnimationFrame(draw);
    }
    requestAnimationFrame(() => { resize(); draw(); });

    // Leaf cursor
    const leafSVG = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><text y="30" font-size="28">🌿</text></svg>');
    const styleEl = document.createElement('style');
    styleEl.textContent = `#reni-sec, #reni-sec * { cursor: url("data:image/svg+xml,${leafSVG}") 4 30, auto !important; }`;
    document.head.appendChild(styleEl);

    return () => {
      cancelAnimationFrame(rafId);
      section.removeEventListener('mousemove', onMouseMove);
      section.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
      styleEl.remove();
    };
  }, []);

  // ── Reni chat ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const MSGS: { role: string; text: string }[] = [
      { role: 'reni', text: 'Reni v2.4 online — nature asset intelligence active.' },
      { role: 'user', text: 'What is survivability across my sites?' },
      { role: 'reni', text: 'Scanning 3 active sites… Avg survivability: 87.4%. ⚠ Site B (mangroves) at 74% — recommend ground validation sweep in Q2.' },
    ];
    const KEYWORD_REPLIES: { keywords: string[]; reply: string }[] = [
      {
        keywords: ['hi', 'hello', 'hey', 'namaste', 'good morning', 'good afternoon', 'good evening', 'greetings'],
        reply: 'Hello! I\'m Reni, your nature asset intelligence analyst. Ask me about survivability, tree growth, carbon sequestration, plantation health, land coverage, or carbon credits. How can I help?',
      },
      {
        keywords: ['who are you', 'what are you', 'who is reni', 'what is reni', 'tell me about yourself', 'introduce yourself', 'your name', 'what do you do', 'are you an ai', 'are you a bot', 'are you human'],
        reply: 'I\'m Reni — Mynzo\'s nature asset intelligence analyst. I process satellite imagery, ground sensor data, and Mynzo\'s proprietary models to deliver real-time insights on forest health, carbon sequestration, survivability, and credit projections. Think of me as your always-on analyst for your nature portfolio.',
      },
      {
        keywords: ['how can you help', 'how will you help', 'how do you help', 'can you help me', 'what can you do', 'what can reni do', 'how is it useful', 'how is this useful', 'useful to me', 'how does this help', 'what is the use', 'why should i use', 'benefit', 'benefits'],
        reply: 'I can help you track forest survivability, monitor tree growth and biomass, calculate carbon sequestration, flag boundary risks, project carbon credit issuance, and analyse species performance — all in real time using satellite data. For corporates, I turn nature assets into audit-ready carbon intelligence. For project developers, I replace costly field surveys with continuous monitoring.',
      },
      {
        keywords: ['how are you', 'how r u', 'how do you do', 'are you ok', 'are you good', 'how\'s it going', 'hows it going'],
        reply: 'All systems operational 🟢 Satellite feeds live, ground sensors synced, models running at 99.2% uptime. Ready to analyse your nature asset portfolio — what would you like to explore?',
      },
      {
        keywords: ['plantation', 'planting', 'planted', 'plant'],
        reply: 'Plantation monitoring across active sites shows avg canopy closure at 68%. Site A (Teak & Eucalyptus) leads at 82%. Seasonal planting cycles are on track for Q3 targets. 284,000 trees planted to date.',
      },
      {
        keywords: ['sampling', 'sample', 'ground truth', 'field survey', 'field sample'],
        reply: 'Last field sampling campaign: Feb 2025. 124 sample plots validated across 3 sites. Satellite-predicted biomass vs field measurements: R² = 0.94. Next recommended campaign: Q2 2025 for mangrove validation at Site B.',
      },
      {
        keywords: ['growth', 'grow', 'growth rate', 'biomass'],
        reply: 'Current avg Above Ground Biomass growth rate: 4.3 t/ha/yr. Site C (Bamboo-Agroforestry) leads at 6.1 t/ha/yr. Projected trajectory is 9% above baseline model estimates — strong performance.',
      },
      {
        keywords: ['land', 'area', 'hectare', 'coverage', 'land area', 'how much land'],
        reply: 'Total monitored land: 2,840 ha across 3 active sites. Effective forested cover: 2,210 ha (77.8%). Buffer zones: 630 ha. Land-use change risk index: Low (0.12 on a 0–1 scale).',
      },
      {
        keywords: ['sequestration', 'sequester', 'co2', 'carbon capture', 'carbon removal'],
        reply: 'Cumulative carbon sequestration: 38,420 tCO₂e. Annual rate: 12,640 tCO₂e/yr. At current trajectory, portfolio hits 50,000 tCO₂e by Q4 2025. All figures are MRV-ready for Verra VCS submission.',
      },
      {
        keywords: ['trees', 'total trees', 'how many trees', 'tree count', 'trees planted'],
        reply: 'Total trees planted: 284,000. Verified survivors: 247,800 (87.3% survivability). Species breakdown — 42% Teak, 28% Bamboo, 18% Melia dubia, 12% mixed native species.',
      },
      {
        keywords: ['survivability', 'survival', 'survive', 'survival rate', 'survivability across my sites'],
        reply: 'Avg survivability across sites: 87.4%. ⚠ Site B (mangroves) at 74% — recommend ground validation sweep in Q2. Site A: 93.2%. Site C: 88.7%. All sites tracked via bi-weekly satellite passes.',
      },
      {
        keywords: ['credit', 'credits', 'carbon credit', 'issuable', 'offset', 'credits i can issue'],
        reply: 'Models project 4,200 verified carbon credits issuable in FY2025 at 95% confidence. Site B credits on hold pending MRV validation. Estimated credit value at $18/tCO₂e: ~$75,600.',
      },
      {
        keywords: ['underperform', 'underperforming', 'assets are underperforming', 'risk', 'alert', 'warning', 'problem', 'concern', 'flag'],
        reply: 'Underperforming assets flagged: Site B (mangroves) — survivability at 74%, below 80% threshold. Boundary leakage risk in 2 eastern zones. Satellite encroachment activity detected. Field inspection recommended within 30 days.',
      },
      {
        keywords: ['portfolio', 'overview', 'overall', 'summary', 'glance', 'snapshot', 'dashboard'],
        reply: 'Portfolio snapshot — 3 active sites | 2,840 ha monitored | 284,000 trees planted | 247,800 verified survivors (87.3%) | 38,420 tCO₂e sequestered | 4,200 credits issuable in FY2025. Site A & C performing above baseline. Site B (mangroves) flagged for review.',
      },
      {
        keywords: ['best performing', 'top performing', 'best forest', 'best project', 'top project', 'best site', 'performing well', 'highest'],
        reply: 'Top performer: Site A (Teak & Eucalyptus) — 93.2% survivability, 82% canopy closure, biomass growth at 5.1 t/ha/yr, zero boundary alerts. Site C (Bamboo-Agroforestry) is close behind with the fastest growth rate at 6.1 t/ha/yr. Both are on track for Q4 credit issuance.',
      },
      {
        keywords: ['boundary', 'boundaries', 'encroachment', 'border', 'perimeter', 'leakage'],
        reply: 'Boundary integrity report: Site A — secure, no alerts. Site C — secure, minor buffer zone activity (low risk). Site B — ⚠ leakage risk flagged in 2 eastern zones, encroachment activity detected via satellite. Field inspection recommended within 30 days.',
      },
      {
        keywords: ['what is mynzo', 'what does mynzo do', 'about mynzo', 'who is mynzo', 'mynzo do', 'what mynzo'],
        reply: 'Mynzo Carbon is a precision forest monitoring company. We use AI-powered satellite technology and ground sensor data to measure, verify, and monitor carbon sequestration in forests and agroforestry projects — delivering audit-ready carbon credits for corporates, project developers, and governments.',
      },
      {
        keywords: ['office', 'location', 'address', 'where are you', 'where is mynzo', 'headquarter', 'based'],
        reply: 'Mynzo\'s office is located at Park Centra, Sector 30, Gurugram, Haryana. You can also reach the team at support@mynzocarbon.com.',
      },
      {
        keywords: ['get started', 'start', 'contact', 'reach out', 'sign up', 'how to begin', 'onboard', 'join'],
        reply: 'Getting started with Mynzo is easy — visit the Get Started page on our website, fill in your details, and our team will reach out within 24 hours. You can also email us directly at support@mynzocarbon.com.',
      },
      {
        keywords: ['which data', 'what data', 'sort of data', 'kind of data', 'type of data', 'what is this data', 'is this real', 'real data', 'is this accurate', 'where is this data', 'source of data', 'data source', 'what information', 'what numbers', 'whose data', 'whose data is this', 'who does this data belong', 'where does this data come from', 'where is the data from'],
        reply: 'The data shown here is illustrative — it represents the kind of real-time insights Mynzo generates for live projects. Actual metrics (survivability, sequestration, species mix, credit projections) are pulled from satellite feeds and ground sensors specific to each client\'s forest or agroforestry project.',
      },
      {
        keywords: ['what project', 'which project', 'what forest', 'which forest', 'which site', 'what site', 'which plantation', 'what is this project', 'whose project', 'which project is this', 'what does this show', 'what is this showing', 'what is being shown', 'where is this project', 'where is this forest', 'where is this site', 'where is the project', 'location of this project'],
        reply: 'This is a sample portfolio built to demonstrate Mynzo\'s capabilities. Our live platform monitors real forests across India — from mangrove restoration in coastal zones to agroforestry on smallholder farmland. Want to see what your project would look like? Head to Get Started and our team will set up a demo with your actual sites.',
      },
      {
        keywords: ['my data', 'is this my', 'my project', 'my forest', 'my portfolio', 'my site'],
        reply: 'Not yet! This is a demo environment. Once you onboard with Mynzo, RENI will pull live satellite data, survivability metrics, and carbon projections specific to your forests and projects — updated continuously. Visit Get Started to kick things off.',
      },
      {
        keywords: ['i am a project developer', 'i\'m a project developer', 'project developer', 'i am a developer', 'i develop projects', 'i have a forest project', 'i have a carbon project', 'i am a corporate', 'i\'m a corporate', 'corporate sustainability', 'i am an investor', 'i\'m an investor', 'fund manager', 'i am a researcher', 'i\'m a researcher', 'government', 'institution', 'ngo', 'i work in sustainability'],
        reply: 'Great to have you here! Whatever your role — project developer, corporate, investor, or institution — Mynzo can help you monitor, verify, and maximise your nature assets. Head to the Get Started page on our website, fill in your details, and our team will reach out within 24 hours to understand your needs. You can also write directly to support@mynzocarbon.com.',
      },
      {
        keywords: ['species', 'tree species', 'what trees', 'which trees', 'species mix', 'native species', 'teak', 'bamboo', 'melia'],
        reply: 'Current species mix across monitored sites: 42% Teak (high commercial value, excellent carbon density), 28% Bamboo (fastest growth, strong SOC contribution), 18% Melia dubia (rapid canopy closure), 12% mixed native species (biodiversity buffer). Species selection is optimised for regional climate resilience.',
      },
    ];

    function getReniReply(userText: string): string {
      const lower = userText.toLowerCase();
      // Tier 1: exact word-boundary matching
      const wordMatch = (kw: string) => new RegExp('(?:^|\\s|[^a-z])' + kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?:$|\\s|[^a-z])').test(' ' + lower + ' ');
      for (const { keywords, reply } of KEYWORD_REPLIES) {
        if (keywords.some(kw => wordMatch(kw))) return reply;
      }
      // Tier 2: intent + topic word pairing — catches varied natural language
      const has = (...words: string[]) => words.some(w => lower.includes(w));
      const INTENT = has('what', 'where', 'whose', 'how', 'which', 'who', 'tell me', 'show me', 'can you', 'are you', 'is this', 'does this', 'do you', 'will you', 'why');
      if (INTENT) {
        if (has('data', 'numbers', 'figures', 'stats', 'information', 'metrics', 'belong', 'owner', 'source'))
          return 'The data shown here is illustrative — it represents the kind of real-time insights Mynzo generates for live projects. Actual metrics are pulled from satellite feeds and ground sensors specific to each client\'s forest or agroforestry project.';
        if (has('project', 'forest', 'site', 'plantation', 'location', 'located', 'based', 'india', 'region', 'place', 'area', 'this showing'))
          return 'This is a sample portfolio built to demonstrate Mynzo\'s capabilities. Our live platform monitors real forests across India — from mangrove restoration to agroforestry on smallholder farmland. Head to Get Started to see what your project would look like.';
        if (has('help', 'useful', 'use', 'benefit', 'assist', 'do for me', 'work', 'function', 'purpose', 'value'))
          return 'I can help you track forest survivability, monitor tree growth and biomass, calculate carbon sequestration, flag boundary risks, project carbon credit issuance, and analyse species performance — all in real time. For corporates I turn nature assets into audit-ready carbon intelligence. For project developers I replace costly field surveys with continuous satellite monitoring.';
        if (has('you', 'reni', 'yourself', 'bot', 'ai', 'analyst', 'name', 'built', 'made', 'created', 'developed'))
          return 'I\'m Reni — Mynzo\'s nature asset intelligence analyst. I process satellite imagery, ground sensor data, and Mynzo\'s proprietary models to deliver real-time insights on forest health, carbon sequestration, survivability, and credit projections.';
        if (has('start', 'begin', 'onboard', 'sign', 'contact', 'reach', 'try', 'use mynzo', 'work with mynzo'))
          return 'Getting started is easy — visit the Get Started page, fill in your details, and our team will reach out within 24 hours. You can also email support@mynzocarbon.com directly.';
        if (has('office', 'address', 'gurgaon', 'gurugram', 'headquarter', 'find you', 'visit'))
          return 'Mynzo\'s office is at Park Centra, Sector 30, Gurugram, Haryana. You can also reach the team at support@mynzocarbon.com.';
      }
      // Tier 3: generic fallback
      return 'I can answer questions about survivability, tree growth, sequestration, species, land area, carbon credits, plantation health, Mynzo\'s platform, and more. Try asking something like "how can you help me?" or "what is survivability?"';
    }

    const msgsEl = reniMsgsRef.current;
    if (!msgsEl) return;

    function msgHTML(m: { role: string; text: string }) {
      if (m.role === 'reni') return `<div class="reni-msg-reni"><div class="reni-msg-sender">RENI · AI ANALYST</div><div class="reni-bubble-reni">${m.text}</div></div>`;
      return `<div class="reni-msg-user"><div class="reni-bubble-user">${m.text}</div></div>`;
    }
    function typingHTML() {
      return `<div class="reni-msg-reni" id="reni-typing-el"><div class="reni-msg-sender">RENI · AI ANALYST</div><div class="reni-typing-dots"><span class="reni-typing-dot" style="animation:reniDot 1.1s ease-in-out infinite 0s"></span><span class="reni-typing-dot" style="animation:reniDot 1.1s ease-in-out infinite .22s"></span><span class="reni-typing-dot" style="animation:reniDot 1.1s ease-in-out infinite .44s"></span></div></div>`;
    }
    function render() {
      msgsEl.innerHTML = MSGS.map(msgHTML).join('');
      msgsEl.scrollTop = msgsEl.scrollHeight;
    }
    function send(text: string) {
      if (!text.trim()) return;
      MSGS.push({ role: 'user', text });
      render();
      msgsEl.insertAdjacentHTML('beforeend', typingHTML());
      msgsEl.scrollTop = msgsEl.scrollHeight;
      setTimeout(() => {
        document.getElementById('reni-typing-el')?.remove();
        MSGS.push({ role: 'reni', text: getReniReply(text) });
        render();
      }, 1100);
    }
    render();
    const chips = document.querySelectorAll<HTMLButtonElement>('.reni-chip');
    chips.forEach(c => c.addEventListener('click', () => send(c.dataset.query || '')));
    return () => {};
  }, []);

  // ── Typewriter for Reni heading ────────────────────────────────────────────
  useEffect(() => {
    const titleEl = document.querySelector<HTMLElement>('.reni-title');
    const reniEl = document.getElementById('reni-sec');
    if (!titleEl || !reniEl) return;
    const SEG = [
      { text: 'Meet ', g: false },
      { text: 'Reni', g: true },
      { text: ' — Your Nature Asset', g: false },
      { br: true },
      { text: 'Intelligence Engine', g: false },
    ] as Array<{ text?: string; g?: boolean; br?: boolean }>;
    const chars: Array<{ ch?: string; g?: boolean; br?: boolean }> = [];
    SEG.forEach(s => {
      if (s.br) { chars.push({ br: true }); return; }
      for (const ch of s.text!) chars.push({ ch, g: s.g });
    });
    titleEl.style.opacity = '1';
    titleEl.style.transform = 'none';
    titleEl.style.minHeight = '2.2em';
    let revealed = 0;
    let typeTimer: ReturnType<typeof setInterval> | null = null;

    function rebuildDOM() {
      titleEl.innerHTML = '';
      let gradSpan: HTMLSpanElement | null = null;
      for (let i = 0; i < revealed; i++) {
        const c = chars[i];
        if (c.br) { gradSpan = null; titleEl.appendChild(document.createElement('br')); }
        else if (c.g) {
          if (!gradSpan) { gradSpan = document.createElement('span'); gradSpan.className = 'reni-gradient-text'; titleEl.appendChild(gradSpan); }
          gradSpan.textContent += c.ch;
        } else {
          gradSpan = null;
          const last = titleEl.lastChild;
          if (last && last.nodeType === Node.TEXT_NODE) (last as Text).textContent += c.ch;
          else titleEl.appendChild(document.createTextNode(c.ch!));
        }
      }
      if (revealed < chars.length) {
        const cur = document.createElement('span');
        cur.textContent = '|';
        cur.style.cssText = 'animation:twBlink .7s steps(1) infinite;color:#7ab8cc;margin-left:1px;font-weight:300;';
        titleEl.appendChild(cur);
      }
    }
    function startTyping() {
      if (typeTimer) clearInterval(typeTimer);
      revealed = 0; rebuildDOM();
      typeTimer = setInterval(() => { revealed++; rebuildDOM(); if (revealed >= chars.length && typeTimer) clearInterval(typeTimer); }, 40);
    }
    function resetTyping() {
      if (typeTimer) clearInterval(typeTimer);
      revealed = 0; titleEl.innerHTML = '';
    }
    const twObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) startTyping(); else resetTyping();
    }, { threshold: 0.25 });
    twObs.observe(reniEl);
    return () => { twObs.disconnect(); if (typeTimer) clearInterval(typeTimer); };
  }, []);

  // ── Team carousel — starts auto-play only when section enters view ─────────
  useEffect(() => {
    const track = teamTrackRef.current;
    const viewport = teamViewportRef.current;
    const dotsWrap = teamDotsRef.current;
    const prevBtn = document.getElementById('teamPrev') as HTMLButtonElement | null;
    const nextBtn = document.getElementById('teamNext') as HTMLButtonElement | null;
    const section = document.getElementById('team');
    if (!track || !viewport || !dotsWrap) return;

    const GAP = 20, AUTO_MS = 4000;
    const cards = Array.from(track.children) as HTMLElement[];
    const total = cards.length;
    const getVisible = () => window.innerWidth <= 600 ? 1 : 3;
    let VISIBLE = getVisible();
    let pages = Math.ceil(total / VISIBLE);
    let current = 0;
    let autoTimer: ReturnType<typeof setInterval> | null = null;

    function buildDots() {
      dotsWrap.innerHTML = '';
      for (let i = 0; i < pages; i++) {
        const d = document.createElement('button');
        d.className = 'team-dot' + (i === 0 ? ' active' : '');
        d.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(d);
      }
    }
    buildDots();

    function cardWidth() { return (viewport.offsetWidth - GAP * (VISIBLE - 1)) / VISIBLE; }
    function goTo(page: number) {
      current = Math.max(0, Math.min(page, pages - 1));
      const offset = current * VISIBLE * (cardWidth() + GAP);
      track.style.transform = `translateX(-${offset}px)`;
      dotsWrap.querySelectorAll('.team-dot').forEach((d, i) => d.classList.toggle('active', i === current));
      if (prevBtn) prevBtn.disabled = current === 0;
      if (nextBtn) nextBtn.disabled = current === pages - 1;
    }
    function stopAuto() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }
    function startAuto() { stopAuto(); autoTimer = setInterval(() => goTo(current < pages - 1 ? current + 1 : 0), AUTO_MS); }

    const prevHandler = () => { stopAuto(); goTo(current - 1); startAuto(); };
    const nextHandler = () => { stopAuto(); goTo(current + 1); startAuto(); };
    prevBtn?.addEventListener('click', prevHandler);
    nextBtn?.addEventListener('click', nextHandler);

    function layout() {
      const newVisible = getVisible();
      if (newVisible !== VISIBLE) {
        VISIBLE = newVisible;
        pages = Math.ceil(total / VISIBLE);
        current = 0;
        buildDots();
      }
      const w = cardWidth();
      cards.forEach(c => { c.style.flex = `0 0 ${w}px`; });
      goTo(current);
    }

    // Pause on hover, resume on leave — but only if auto was running
    const enterH = () => stopAuto();
    const leaveH = () => { if (section && sectionVisible) startAuto(); };
    viewport.addEventListener('mouseenter', enterH);
    viewport.addEventListener('mouseleave', leaveH);
    window.addEventListener('resize', layout);
    layout(); goTo(0);

    // Start / stop based on visibility
    let sectionVisible = false;
    const visObs = new IntersectionObserver(entries => {
      sectionVisible = entries[0].isIntersecting;
      if (sectionVisible) startAuto();
      else stopAuto();
    }, { threshold: 0.2 });
    if (section) visObs.observe(section);

    return () => {
      stopAuto();
      visObs.disconnect();
      prevBtn?.removeEventListener('click', prevHandler);
      nextBtn?.removeEventListener('click', nextHandler);
      viewport.removeEventListener('mouseenter', enterH);
      viewport.removeEventListener('mouseleave', leaveH);
      window.removeEventListener('resize', layout);
    };
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <video autoPlay muted loop playsInline>
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Precision Forest <span>Monitoring</span></h1>
          <Link href="/get-started" className="btn-hero" style={{ textDecoration: 'none' }}>
            Get Started
            <svg width="10" height="10" viewBox="0 0 10 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L9 7L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats">
        <div className="stat">
          <span className="stat-num">21075370</span>
          <div className="stat-lbl">
            <Image src="https://mynzocarbon-website.s3.ap-south-1.amazonaws.com/trees_planted.png" alt="" width={20} height={18} unoptimized />
            Trees Planted
          </div>
        </div>
        <div className="stat-div"></div>
        <div className="stat">
          <span className="stat-num">31379</span>
          <div className="stat-lbl">
            <Image src="https://mynzocarbon-website.s3.ap-south-1.amazonaws.com/hectares_covered.png" alt="" width={20} height={18} unoptimized />
            Hectares Covered
          </div>
        </div>
        <div className="stat-div"></div>
        <div className="stat">
          <span className="stat-num">373112</span>
          <div className="stat-lbl">
            <Image src="https://mynzocarbon-website.s3.ap-south-1.amazonaws.com/tons_co2_sequestered.png" alt="" width={20} height={18} unoptimized />
            Tons CO₂ Sequestered
          </div>
        </div>
      </div>

      {/* ── WHY IT MATTERS ── */}
      <section className="why">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center' }}>
          <h2 className="sec-title">Why it matters ?</h2>
          <p className="sec-sub">Forests are crucial for climate stability and biodiversity, but monitoring them has been challenging. Mynzo uses precision AI and satellite intelligence to provide real-time insights into global ecosystems.</p>
        </div>
        <div className="why-cards">
          {[
            { title: 'Satellite Remote Sensing', desc: 'Multi-spectral imagery aids forest health assessment.', vid: '/satellite_remote_sensing.mp4', radar: true },
            { title: 'Machine Learning Models', desc: 'Deep learning detects deforestation with 98.5% accuracy.', vid: '/machine_learning_models.mp4' },
            { title: 'Carbon Sequestration Analysis', desc: 'Algorithms convert forest data into carbon metrics.', vid: '/tree_analysis.mp4' },
            { title: 'Temporal Insights', desc: 'Analyze ecosystem shifts, disturbances, and long-term environmental changes across time.', vid: '/temporal_insight.mp4' },
          ].map((c, i) => (
            <article className="why-card" key={i}>
              <div className="why-card-top">
                <p className="why-card-title">{c.title}</p>
                <p className="why-card-desc">{c.desc}</p>
              </div>
              <div className="why-card-media">
                <div className="card-vid-wrap">
                  <video autoPlay muted loop playsInline><source src={c.vid} type="video/mp4" /></video>
                </div>
                {c.radar && (
                  <div className="radar-wrap">
                    <div className="radar-ring"></div>
                    <div className="radar-ring"></div>
                    <div className="radar-ring"></div>
                    <div className="radar-dot"></div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── PLATFORM ── */}
      <section id="platform" className="plat-sec" ref={platSecRef}>
        <canvas id="plat-canvas" ref={platCanvasRef}></canvas>
        <div className="plat-sec-hdr">
          <h2 className="sec-title">The Mynzo Platform</h2>
          <p className="sec-sub">A unified system to analyze, control, and manage nature assets</p>
        </div>
        <div className="plat-strip plat-strip-a">
          <div className="plat-strip-text plat-strip-text-left">
            <p className="plat-strip-label">Asset Analysis</p>
            <h3 className="plat-strip-title">Understand ecosystems through data, science, and validation</h3>
            <ul className="plat-strip-list">
              <li>Forest health, density, growth, and risk insights</li>
              <li>Carbon stock and sequestration tracking</li>
              <li>Soil carbon and land health analysis</li>
              <li>Forest change and temporal monitoring</li>
              <li>Ground-truth validation through field data</li>
            </ul>
          </div>
          <div className="plat-strip-img plat-strip-img-right">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${S3}/Asset_analysis.png`} alt="Asset Analysis" />
          </div>
        </div>
        <div className="plat-strip plat-strip-b">
          <div className="plat-strip-img plat-strip-img-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${S3}/asset_control.png`} alt="Asset Control" />
          </div>
          <div className="plat-strip-text plat-strip-text-right">
            <p className="plat-strip-label">Asset Control</p>
            <h3 className="plat-strip-title">Ensure transparency, integrity, and ownership</h3>
            <ul className="plat-strip-list">
              <li>Standards-aligned, auditable data systems</li>
              <li>Ownership traceability and tokenisation</li>
              <li>Enterprise MIS integration</li>
            </ul>
          </div>
        </div>
        <div className="plat-strip plat-strip-a">
          <div className="plat-strip-text plat-strip-text-left">
            <p className="plat-strip-label">Asset Management</p>
            <h3 className="plat-strip-title">Turn natural assets into actionable portfolios</h3>
            <ul className="plat-strip-list">
              <li>Portfolio design and forecasting</li>
              <li>Carbon credit validation and verification</li>
              <li>Marketplace for projects and credits</li>
            </ul>
          </div>
          <div className="plat-strip-img plat-strip-img-right">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${S3}/Asset_management.png`} alt="Asset Management" />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="process-sec">
        <div className="process-hdr">
          <h2 className="sec-title">From Land to Verified Credits</h2>
          <p className="sec-sub">A rigorous, transparent pipeline that turns raw forest data into auditable carbon credits.</p>
        </div>
        <div className="process-inner">
          <div className="process-video-wrap">
            <video autoPlay muted loop playsInline>
              <source src="https://mynzocarbon-website.s3.ap-south-1.amazonaws.com/process_from_land_to_verified_credits.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <div className="process-steps">
              <div className="process-steps-line"></div>
              {['Satellite-Based Forest Mapping', 'Ground-Truth Ecological Sampling', 'AI-Driven Monitoring & Recalibration', 'Standards-Aligned Verification'].map((text, i) => (
                <div className="process-step" key={i}>
                  <div className="process-step-num">{i + 1}</div>
                  <div className="process-step-text">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STANDARDS TAPE ── */}
      <div className="standards-tape">
        <div className="tape-inner">
          {[0, 1].map(set => (
            <div className="tape-set" key={set}>
              {STANDARDS.map((s, i) => (
                <div className="tape-item" key={i}>
                  <div className="tape-logo">
                    <Image src={s.src} alt={s.name} width={30} height={30} unoptimized style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <span className="tape-name">{s.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── ACCURACY ── */}
      <section className="accuracy-sec">
        <div className="accuracy-inner">
          <h2 className="accuracy-title">Built for accuracy, scale,<br />and verifiable results.</h2>
          <div className="accuracy-grid">
            <div className="accuracy-item">
              <div className="accuracy-icon">
                <svg width="52" height="60" viewBox="0 0 52 60" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M26 3L4 13v16c0 14 9.8 26.5 22 30C38.2 55.5 48 43 48 29V13L26 3z" />
                  <polyline points="17,31 23,37 35,25" />
                </svg>
              </div>
              <div className="accuracy-label">Audit-Grade<br />Data</div>
              <p className="accuracy-desc">Every data point is traceable, defensible, and ready for third-party review.</p>
            </div>
            <div className="accuracy-item">
              <div className="accuracy-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                  <circle cx="30" cy="30" r="21" /><circle cx="30" cy="30" r="9" />
                  <line x1="30" y1="4" x2="30" y2="17" /><line x1="30" y1="43" x2="30" y2="56" />
                  <line x1="4" y1="30" x2="17" y2="30" /><line x1="43" y1="30" x2="56" y2="30" />
                </svg>
              </div>
              <div className="accuracy-label">High-Resolution<br />Monitoring</div>
              <p className="accuracy-desc">Tree-level and species-level insights delivered at scale across your entire portfolio.</p>
            </div>
            <div className="accuracy-item">
              <div className="accuracy-icon">
                <svg width="44" height="64" viewBox="0 0 44 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="27,4 8,36 22,36 17,60 36,28 22,28 27,4" />
                </svg>
              </div>
              <div className="accuracy-label">Operational<br />Efficiency</div>
              <p className="accuracy-desc">Reduce reliance on ground teams and drones while improving data quality and coverage.</p>
            </div>
            <div className="accuracy-item">
              <div className="accuracy-icon">
                <svg width="64" height="60" viewBox="0 0 64 60" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                  <circle cx="32" cy="30" r="6" /><circle cx="9" cy="11" r="5" /><circle cx="55" cy="11" r="5" />
                  <circle cx="9" cy="49" r="5" /><circle cx="55" cy="49" r="5" />
                  <line x1="27" y1="26" x2="14" y2="16" /><line x1="37" y1="26" x2="50" y2="16" />
                  <line x1="27" y1="34" x2="14" y2="44" /><line x1="37" y1="34" x2="50" y2="44" />
                </svg>
              </div>
              <div className="accuracy-label">Enterprise-Ready<br />Integration</div>
              <p className="accuracy-desc">Seamless integration into existing MIS, ERP, and reporting systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="serve-sec">
        <div className="serve-inner">
          <div className="serve-content-col">
            <div className="serve-label">Who We Serve</div>
            <h2 className="serve-title">Built for Every Stakeholder</h2>
            <div className="serve-items">
              {[
                { idx: '01', title: 'Corporates', desc: 'Manage net-zero portfolios with full visibility and control' },
                { idx: '02', title: 'Project Developers', desc: 'Monitor, verify, and scale nature-based projects' },
                { idx: '03', title: 'Governments & Institutions', desc: 'Track biodiversity and carbon across large ecosystems' },
              ].map((item, i) => (
                <div className="serve-item" key={i}>
                  <div className="serve-item-idx">{item.idx}</div>
                  <div className="serve-item-body">
                    <div className="serve-item-title">{item.title}</div>
                    <p className="serve-item-desc">{item.desc}</p>
                  </div>
                  <svg className="serve-item-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 9h10M10 5l4 4-4 4" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
          <div className="serve-img-col">
            <Image src={`${S3}/who_we_serve.png`} alt="Solutions for every stakeholder" width={640} height={640} unoptimized style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      {/* ── RENI AI ── */}
      <section className="reni-sec" id="reni-sec" ref={reniSecRef}>
        <canvas id="reni-canvas" ref={reniCanvasRef}></canvas>
        <div className="reni-vignette"></div>
        <div className="reni-topline"></div>
        <div className="reni-content">
          <div className="reni-text-backdrop">
            <h2 className="reni-title"></h2>
            <p className="reni-sub">Reni processes live satellite feeds, ground sensor data, and Mynzo&apos;s proprietary models to deliver audit-ready intelligence — in seconds.</p>
          </div>
          <div className="reni-chat">
            <div className="reni-titlebar">
              <div className="reni-dots">
                <div className="reni-dot-mac" style={{ background: '#ff5f57' }}></div>
                <div className="reni-dot-mac" style={{ background: '#febc2e' }}></div>
                <div className="reni-dot-mac" style={{ background: '#28c840' }}></div>
              </div>
              <div className="reni-window-title">reni — nature asset analyst</div>
              <div className="reni-avatar">
                <div className="reni-ring"></div>
                <div className="reni-avatar-inner" style={{ background: 'transparent', boxShadow: 'none', overflow: 'hidden', padding: '0' }}>
                  <img src={`${S3}/reni_logo.JPG`} alt="Reni" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', display: 'block' }} />
                </div>
              </div>
            </div>
            <div className="reni-msgs" id="reni-messages" ref={reniMsgsRef}></div>
            <div className="reni-chips">
              <button className="reni-chip" data-query="Survivability across my sites?">Survivability across my sites?</button>
              <button className="reni-chip" data-query="Which assets are underperforming?">Which assets are underperforming?</button>
              <button className="reni-chip" data-query="Credits I can issue this year?">Credits I can issue this year?</button>
              <button className="reni-chip" data-query="What does Mynzo do?">What does Mynzo do?</button>
              <button className="reni-chip" data-query="Total trees planted?">Total trees planted?</button>
              <button className="reni-chip" data-query="How can you help me?">How can Reni help?</button>
              <button className="reni-chip" data-query="What is sequestration?">Carbon sequestration?</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" className="team2-sec">
        <div className="team2-inner">
          <div className="team2-label">Our Team</div>
          <h2 className="team2-title">Meet Our Expert Team</h2>
          <p className="team2-sub">Passionate experts combining cutting-edge technology with deep environmental knowledge.</p>
          <div className="team-carousel-wrap">
            <button className="team-nav team-prev" id="teamPrev" aria-label="Previous">&#8592;</button>
            <div className="team-viewport" id="teamViewport" ref={teamViewportRef}>
              <div className="team-track" id="teamTrack" ref={teamTrackRef}>
                {TEAM.map((member, i) => (
                  <div className="team2-card" key={i}>
                    <div className="team2-card-bar"></div>
                    <div className="team2-avatar">
                      <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
                    </div>
                    <div className="team2-name">{member.name}</div>
                    <div className="team2-role">{member.role}</div>
                    <div className="team2-div"></div>
                    <div className="team2-bio">{member.bio}</div>
                  </div>
                ))}
              </div>
            </div>
            <button className="team-nav team-next" id="teamNext" aria-label="Next">&#8594;</button>
          </div>
          <div className="team-dots" id="teamDots" ref={teamDotsRef}></div>
        </div>
      </section>

      {/* ── BLOGS ── */}
      <section id="blogs" className="blogs2-sec">
        <div className="blogs2-inner">
          <div className="blogs2-toprow">
            <div>
              <div className="blogs2-label">Insights</div>
              <h2 className="blogs2-title">Mynzo Talks</h2>
            </div>
            <Link href="/blog" className="blogs2-viewall">View all posts →</Link>
          </div>
          <div className="blogs2-grid" id="blogs-grid">
            {homePosts.map((p: any, i: number) => {
              const isCms = !!p.publishedAt;
              const tag = isCms ? (p.category || 'Research') : p.tag;
              const tagBg = isCms ? '#EBF7F0' : p.tagBg;
              const tagColor = isCms ? '#1A7A4A' : p.tagColor;
              const date = isCms ? (p.publishedAt || '') : p.date;
              const readTime = p.readTime;
              const imgSrc = isCms ? (p.coverImage?.url || p.coverImageUrl || null) : p.img;
              return (
                <Link href={`/blog/${p.slug}`} className="blog2-card" key={i}>
                  <div className="blog2-img">
                    {imgSrc
                      ? <img src={imgSrc} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      : <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#d6ebf1,rgba(89,132,147,0.12))' }} />
                    }
                  </div>
                  <div className="blog2-body">
                    <span className="blog2-tag" style={{ background: tagBg, color: tagColor }}>{tag}</span>
                    <div className="blog2-title-txt">{p.title}</div>
                    <div className="blog2-excerpt">{p.excerpt}</div>
                    <div className="blog2-meta">
                      {date && <span>{date}</span>}
                      {readTime && <span style={{ color: 'var(--teal)' }}>· {readTime}</span>}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-sec" id="cta-sec">
        <div className="cta-card">
          <div className="cta-img">
            <Image src="https://mynzocarbon-website.s3.ap-south-1.amazonaws.com/transform_forest_monitoring.png" alt="Transform Forest Monitoring" width={160} height={200} unoptimized style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="cta-body">
            <h3 className="cta-title">Transform Forest Monitoring</h3>
            <p className="cta-desc">Schedule a demo to see how mynzo revolutionizes forest intelligence.</p>
            <Link href="/get-started" className="btn-cta" style={{ textDecoration: 'none' }}>Get Started</Link>
          </div>
        </div>
      </section>
    </>
  );
}
