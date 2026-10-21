'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { MOTION_OK } from '@/lib/motion/media';
import { onIdle } from '@/lib/motion/idle';

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

type Tools = ReturnType<typeof import('@/lib/motion/gsap').ensureGsap>;

/** Blendet Bausteine unterhalb des sichtbaren Bereichs beim Hineinscrollen ein. */
function setupReveal({ gsap, ScrollTrigger }: Tools, main: HTMLElement): () => void {
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
}

/**
 * Lässt Abschnitte auf allen Seiten beim Scrollen einblenden.
 * GSAP wird erst geladen, wenn der Browser nach dem Laden Zeit hat: Reine Textseiten
 * brauchen es nicht für den ersten Aufbau. Was zu diesem Zeitpunkt schon sichtbar ist,
 * bleibt stehen (kein Flackern, kein Einfluss auf LCP). Bei „Bewegung reduzieren“ passiert nichts.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.getElementById('inhalt');
    if (!main || !window.matchMedia(MOTION_OK).matches) return undefined;

    let active = true;
    let revert: (() => void) | undefined;
    const cancelIdle = onIdle(() => {
      import('@/lib/motion/gsap')
        .then(({ ensureGsap }) => {
          if (active) revert = setupReveal(ensureGsap(), main);
        })
        .catch(() => {
          // Ohne GSAP bleibt einfach alles sichtbar; die Seite funktioniert weiter.
        });
    });
    return () => {
      active = false;
      cancelIdle();
      revert?.();
    };
  }, [pathname]);

  return null;
}
