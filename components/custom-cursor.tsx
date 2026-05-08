'use client';
import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || window.matchMedia('(hover: none)').matches) return;
    document.body.classList.add('has-cursor');
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    const move = (e: MouseEvent) => {
      const t = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
      if (dot) dot.style.transform = t;
      if (ring) ring.style.transform = t;
    };
    const over = (e: MouseEvent) => {
      const interactive = (e.target as Element)?.closest('a, button, input, [data-cursor]');
      document.body.classList.toggle('cursor-active', !!interactive);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      document.body.classList.remove('has-cursor', 'cursor-active');
    };
  }, []);
  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </>
  );
}
