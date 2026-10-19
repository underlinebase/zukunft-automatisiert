'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { MOTION_OK, ensureGsap } from '@/lib/motion/gsap';

/** Bausteine, die beim Scrollen sanft hereingleiten. */
const REVEAL_SELECTOR = [
  '.section-head',
  '.principle',
  '.fit__col',
  '.faq__list > *',
  '.guarantee__copy',
  '.guarantee__point',
  '.about__photo',
  '.about__copy',
  '.closing__copy',
  '.experience__main',
  '.card',
  '.steps > *',
  '.vita__row',
  '.article-list > li',
  '.ki-copy > p',
  '.newsletter-box',
].join(', ');

/** Bereiche mit eigener Animation (oder horizontalem Slider) bleiben unberührt. */
const SKIP_INSIDE = '.hero, .landing-hero, .four-weeks, .time-sinks, .calculator, .slider, [data-own-motion]';

const OFFSET_Y = 24;
const DURATION = 0.7;
const STAGGER = 0.08;
const START = 'top 92%';

/**
 * Lässt Abschnitte auf allen Seiten beim Scrollen einblenden.
 * Was beim Laden schon sichtbar ist, bleibt stehen (kein Flackern, kein Einfluss auf LCP).
 * Bei „Bewegung reduzieren“ passiert nichts.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.getElementById('inhalt');
    if (!main) return undefined;

    const { gsap, ScrollTrigger } = ensureGsap();
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const targets = gsap.utils
        .toArray<HTMLElement>(REVEAL_SELECTOR, main)
        .filter((element) => !element.closest(SKIP_INSIDE) && element.getBoundingClientRect().top > window.innerHeight);
      if (targets.length === 0) return undefined;

      gsap.set(targets, { opacity: 0, y: OFFSET_Y });
      ScrollTrigger.batch(targets, {
        start: START,
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, duration: DURATION, ease: 'power2.out', stagger: STAGGER, overwrite: true }),
      });
      // Gepinnte Abschnitte verschieben die Startpunkte: einmal neu berechnen.
      ScrollTrigger.refresh();
      return undefined;
    });
    return () => mm.revert();
  }, [pathname]);

  return null;
}
