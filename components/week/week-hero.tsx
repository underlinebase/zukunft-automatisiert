'use client';

import { useEffect, useRef } from 'react';
import type { WeekBlockLabel } from '@/lib/content/types';
import { DESKTOP, MOTION_OK, ensureGsap } from '@/lib/motion/gsap';
import { placeBlocks } from '@/lib/week/model';
import type { WeekScene } from '@/lib/week/scene';
import WeekFlat, { applyFlatProgress } from './week-flat';

interface WeekHeroProps {
  blocks: readonly WeekBlockLabel[];
}

/** Scrollstrecke, über die der Hero gepinnt bleibt (wie im Design-Entwurf). */
const PIN_LENGTH = '+=1500';
const IDLE_TIMEOUT_MS = 1500;

type IdleHandle = { cancel: () => void };

function whenIdle(callback: () => void): IdleHandle {
  if (typeof window.requestIdleCallback === 'function') {
    const id = window.requestIdleCallback(callback, { timeout: IDLE_TIMEOUT_MS });
    return { cancel: () => window.cancelIdleCallback(id) };
  }
  const id = window.setTimeout(callback, 300);
  return { cancel: () => window.clearTimeout(id) };
}

/**
 * Hero-Grafik „Die Woche, die leerer wird“.
 * Desktop: Three.js-Szene, Hero wird beim Scrollen kurz gepinnt.
 * Mobil: flache Version mit derselben Animation, ohne Pin.
 * Bewegung reduziert: statische, aufgeräumte Woche.
 */
export default function WeekHero({ blocks }: WeekHeroProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const host = hostRef.current;
    // Gepinnt wird der innere Wrapper, nie die von React verwaltete Section selbst.
    const pinTarget = root?.closest<HTMLElement>('[data-pin]');
    if (!root || !host || !pinTarget) return undefined;

    const flat = root.querySelector('.week-flat');
    const placed = placeBlocks(blocks);
    const { gsap } = ensureGsap();
    const mm = gsap.matchMedia();
    let unmounted = false;

    mm.add({ desktop: DESKTOP, motion: MOTION_OK }, (context) => {
      const { desktop, motion } = context.conditions as { desktop: boolean; motion: boolean };
      const proxy = { p: 0 };

      if (!motion) {
        applyFlatProgress(flat, 1);
        return undefined;
      }

      let scene: WeekScene | null = null;
      let active = true;
      const apply = () => {
        if (scene) scene.setProgress(proxy.p);
        else applyFlatProgress(flat, proxy.p);
      };

      const header = document.querySelector<HTMLElement>('.site-header');
      const headerOffset = header?.offsetHeight ?? 0;
      const tween = gsap.to(proxy, {
        p: 1,
        ease: 'none',
        onUpdate: apply,
        scrollTrigger: desktop
          ? { trigger: pinTarget, start: `top top+=${headerOffset}`, end: PIN_LENGTH, pin: true, scrub: 0.6 }
          : { trigger: flat, start: 'top 80%', end: 'bottom 30%', scrub: 0.5 },
      });
      apply();

      // GPU-Kontext verloren: Szene abbauen und auf die flache Ansicht zurückfallen.
      const fallBackToFlat = () => {
        scene?.dispose();
        scene = null;
        root.classList.remove('is-3d');
        applyFlatProgress(flat, proxy.p);
      };

      let idle: IdleHandle | null = null;
      if (desktop) {
        idle = whenIdle(() => {
          import('@/lib/week/scene')
            .then(({ createWeekScene }) => createWeekScene(host, placed, fallBackToFlat))
            .then((created) => {
              if (!active || unmounted) {
                created.dispose();
                return;
              }
              scene = created;
              // Nach einem Breakpoint-Wechsel kann der Tween hinterherhinken: echten Scrollstand übernehmen.
              proxy.p = tween.scrollTrigger?.progress ?? proxy.p;
              scene.setProgress(proxy.p);
              root.classList.add('is-3d');
            })
            .catch((error: unknown) => {
              // Ohne WebGL bleibt die flache Ansicht aktiv. Kein Fehler für Besucher.
              console.warn('Wochen-Grafik: 3D nicht verfügbar, nutze 2D.', error);
            });
        });
      }

      return () => {
        active = false;
        idle?.cancel();
        tween.scrollTrigger?.kill();
        tween.kill();
        scene?.dispose();
        scene = null;
        root.classList.remove('is-3d');
      };
    }, root);

    return () => {
      unmounted = true;
      mm.revert();
    };
  }, [blocks]);

  return (
    <div className="week-hero" ref={rootRef}>
      <WeekFlat blocks={blocks} variant="hero" />
      <div className="week-3d" ref={hostRef} aria-hidden="true" />
    </div>
  );
}
