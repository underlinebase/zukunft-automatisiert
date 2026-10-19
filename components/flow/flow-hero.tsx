'use client';

import { useEffect, useRef } from 'react';
import { DESKTOP, MOTION_OK, ensureGsap } from '@/lib/motion/gsap';
import type { FlowScene, FlowStep } from '@/lib/flow/scene';

interface FlowHeroProps {
  steps: readonly FlowStep[];
}

const IDLE_TIMEOUT_MS = 1500;

function whenIdle(callback: () => void): () => void {
  if (typeof window.requestIdleCallback === 'function') {
    const id = window.requestIdleCallback(callback, { timeout: IDLE_TIMEOUT_MS });
    return () => window.cancelIdleCallback(id);
  }
  const id = window.setTimeout(callback, 300);
  return () => window.clearTimeout(id);
}

/**
 * 3D-Grafik im Kopf von /ki-beratung: ein Ablauf, durch den Datenpunkte laufen.
 * Nur auf dem Desktop. Bei „Bewegung reduzieren“ steht die Szene still.
 * Ohne WebGL bleibt die Fläche leer, der Text daneben trägt die Seite allein.
 */
export default function FlowHero({ steps }: FlowHeroProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const hero = host?.closest<HTMLElement>('.page-hero');
    if (!host || !hero) return undefined;

    const { gsap } = ensureGsap();
    const mm = gsap.matchMedia();
    mm.add({ desktop: DESKTOP, motion: MOTION_OK }, (context) => {
      const { desktop, motion } = context.conditions as { desktop: boolean; motion: boolean };
      if (!desktop) return undefined;

      let scene: FlowScene | null = null;
      let active = true;
      let visible = true;

      const sync = () => {
        if (!scene) return;
        if (motion && visible && !document.hidden) scene.start();
        else scene.stop();
      };
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        sync();
      });
      observer.observe(host);
      document.addEventListener('visibilitychange', sync);

      const onPointer = (event: PointerEvent) => {
        scene?.setPointer((event.clientX / window.innerWidth) * 2 - 1, (event.clientY / window.innerHeight) * 2 - 1);
      };
      if (motion) window.addEventListener('pointermove', onPointer, { passive: true });

      const proxy = { p: 0 };
      const tween = motion
        ? gsap.to(proxy, {
            p: 1,
            ease: 'none',
            onUpdate: () => scene?.setProgress(proxy.p),
            scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.6 },
          })
        : null;

      const cancelIdle = whenIdle(() => {
        import('@/lib/flow/scene')
          .then(({ createFlowScene }) =>
            createFlowScene(host, steps, () => {
              scene?.dispose();
              scene = null;
            }),
          )
          .then((created) => {
            if (!active) {
              created.dispose();
              return;
            }
            scene = created;
            host.classList.add('is-ready');
            sync();
          })
          .catch((error: unknown) => {
            // Ohne WebGL bleibt die Fläche leer. Kein Fehler für Besucher.
            console.warn('Ablauf-Grafik: 3D nicht verfügbar.', error);
          });
      });

      return () => {
        active = false;
        cancelIdle();
        observer.disconnect();
        document.removeEventListener('visibilitychange', sync);
        window.removeEventListener('pointermove', onPointer);
        tween?.scrollTrigger?.kill();
        tween?.kill();
        scene?.dispose();
        scene = null;
        host.classList.remove('is-ready');
      };
    }, host);

    return () => mm.revert();
  }, [steps]);

  return <div className="flow-hero" ref={hostRef} aria-hidden="true" />;
}
