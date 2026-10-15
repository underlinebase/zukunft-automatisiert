'use client';

import { useRef } from 'react';
import { useMotion } from '@/lib/motion/use-motion';

interface HeroTitleProps {
  text: string;
  /** Optionale erste Zeile der H1 mit dem Suchbegriff (Landingpages). Wird nicht animiert. */
  kicker?: string;
}

/** Ab dieser Zeit nach dem Laden ist der Titel per CSS-Fallback schon sichtbar. Dann nicht mehr animieren. */
const LATE_START_MS = 1200;

/**
 * Hero-Überschrift: Zeilen gleiten einmalig nacheinander herein.
 * Ohne JavaScript oder bei reduzierter Bewegung steht der Text sofort da.
 */
export default function HeroTitle({ text, kicker }: HeroTitleProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useMotion(ref, ({ gsap, SplitText }) => {
    const element = ref.current;
    if (!element) return undefined;
    if (performance.now() > LATE_START_MS) {
      gsap.set(element, { visibility: 'visible' });
      return undefined;
    }

    const split = SplitText.create(element, {
      type: 'lines',
      mask: 'lines',
      linesClass: 'hero-title__line',
      autoSplit: true,
      // Nur Zeilen, keine Einzelbuchstaben: Der Text bleibt für Screenreader lesbar.
      // Kein aria-label auf dem <span>, das ist dort laut ARIA nicht erlaubt.
      aria: 'none',
      onSplit(self) {
        gsap.set(element, { visibility: 'visible' });
        return gsap.from(self.lines, {
          yPercent: 100,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.09,
        });
      },
    });
    return () => split.revert();
  });

  return (
    <h1 className={`hero-title${kicker ? ' hero-title--kicker' : ''}`}>
      {kicker ? <span className="hero-title__kicker">{kicker} </span> : null}
      <span className="hero-title__main" ref={ref}>
        {text}
      </span>
    </h1>
  );
}
