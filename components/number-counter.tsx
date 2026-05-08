'use client';
import { useEffect, useRef, useState } from 'react';

interface Props {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function NumberCounter({ value, suffix = '', duration = 1400 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!ref.current) return;
    if (reduced) { setShown(value); setDone(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !done) {
          setDone(true);
          const start = performance.now();
          function step(now: number) {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setShown(value * eased);
            if (t < 1) requestAnimationFrame(step);
            else setShown(value);
          }
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [value, duration, done]);

  return <span ref={ref}>{Math.round(shown).toLocaleString('de-DE')}{suffix}</span>;
}
