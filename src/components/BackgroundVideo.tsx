'use client';

import { useEffect, useRef, useState } from 'react';

export default function BackgroundVideo({ src, poster, eager = false }: { src: string; poster?: string; eager?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = eager;
    const update = () => {
      setEnabled(visible && !motion.matches);
      if (!visible || motion.matches) video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }, { rootMargin: '200px' });
    observer.observe(video);
    motion.addEventListener('change', update);
    update();
    return () => { observer.disconnect(); motion.removeEventListener('change', update); };
  }, [eager]);

  return <video ref={ref} src={enabled ? src : undefined} poster={poster} autoPlay={enabled} muted loop playsInline preload="none" aria-hidden="true" />;
}
