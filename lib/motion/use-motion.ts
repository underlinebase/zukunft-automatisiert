'use client';

import { useEffect } from 'react';
import type { RefObject } from 'react';
import { DESKTOP, MOTION_OK, ensureGsap } from './gsap';

type Tools = ReturnType<typeof ensureGsap>;

export interface MotionContext extends Tools {
  isDesktop: boolean;
}

type MotionSetup = (ctx: MotionContext) => void | (() => void);

/**
 * Richtet GSAP-Animationen für einen Bereich ein.
 * Läuft nur ohne „Bewegung reduzieren“; bei Wechsel von Breakpoint oder Einstellung
 * werden alle Animationen automatisch zurückgesetzt und neu aufgebaut.
 */
export function useMotion(scope: RefObject<HTMLElement | null>, setup: MotionSetup): void {
  useEffect(() => {
    const element = scope.current;
    if (!element) return undefined;

    const tools = ensureGsap();
    const mm = tools.gsap.matchMedia();
    mm.add(
      { motion: MOTION_OK, desktop: DESKTOP },
      (context) => {
        const { motion, desktop } = context.conditions as { motion: boolean; desktop: boolean };
        if (!motion) return undefined;
        return setup({ ...tools, isDesktop: desktop });
      },
      element,
    );
    return () => mm.revert();
    // Setup wird bewusst nur beim Einhängen ausgeführt.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
