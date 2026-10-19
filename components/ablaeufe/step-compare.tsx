'use client';

import { useRef } from 'react';
import { useMotion } from '@/lib/motion/use-motion';

interface StepCompareProps {
  heute: readonly string[];
  danach: readonly string[];
}

/**
 * Heute und danach nebeneinander. Beim Scrollen werden die Handgriffe von heute
 * nacheinander durchgestrichen, danach gleiten die automatisierten Schritte herein.
 * Ohne JavaScript oder bei reduzierter Bewegung steht alles fertig da.
 */
export default function StepCompare({ heute, danach }: StepCompareProps) {
  const ref = useRef<HTMLDivElement>(null);

  useMotion(ref, ({ gsap }) => {
    const root = ref.current;
    if (!root) return undefined;
    const before = root.querySelectorAll('.step-compare__col--heute li');
    const strikes = root.querySelectorAll('.step-compare__strike');
    const after = root.querySelectorAll('.step-compare__col--danach li');
    const timeline = gsap.timeline({ scrollTrigger: { trigger: root, start: 'top 70%', once: true } });
    timeline
      .from(before, { opacity: 0, x: -16, duration: 0.4, stagger: 0.08, ease: 'power2.out' })
      .to(strikes, { '--strike': 1, color: 'var(--c-text-muted)', duration: 0.35, stagger: 0.12, ease: 'power1.inOut' }, '+=0.2')
      .from(after, { opacity: 0, x: 16, duration: 0.45, stagger: 0.1, ease: 'power2.out' }, '-=0.3');
    return () => timeline.kill();
  });

  return (
    <div className="step-compare" ref={ref}>
      <div className="step-compare__col step-compare__col--heute">
        <h3>Heute</h3>
        <ol>{heute.map((step) => <li key={step}><span className="step-compare__strike">{step}</span></li>)}</ol>
      </div>
      <div className="step-compare__col step-compare__col--danach">
        <h3>Danach</h3>
        <ol>{danach.map((step) => <li key={step}>{step}</li>)}</ol>
      </div>
    </div>
  );
}
