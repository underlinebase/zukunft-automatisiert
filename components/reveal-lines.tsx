'use client';
import { useEffect } from 'react';

export default function RevealLines() {
  useEffect(() => {
    const lines = document.querySelectorAll<HTMLElement>('.reveal-line:not(.in)');
    if (!lines.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    lines.forEach(l => io.observe(l));
    return () => io.disconnect();
  });
  return null;
}
