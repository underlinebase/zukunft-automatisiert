'use client';

import { useLayoutEffect, useRef } from 'react';
import type { RefObject } from 'react';
import { MOTION_OK, ensureGsap } from '@/lib/motion/gsap';

export type StepDirection = 1 | -1;

const SHIFT_PX = 24;
const DURATION = 0.35;

/**
 * Bei jedem Schrittwechsel: Fokus auf die neue Überschrift, dann gleitet der neue Schritt
 * weich herein (vorwärts von rechts, zurück von links). Nur ohne „Bewegung reduzieren“.
 * Beim ersten Anzeigen passiert nichts, damit die Seite ruhig lädt und der Fokus bleibt, wo er ist.
 */
export function useStepTransition(
  panel: RefObject<HTMLElement | null>,
  focusTarget: RefObject<HTMLElement | null>,
  step: number,
  direction: StepDirection,
): void {
  const previousStep = useRef(step);

  useLayoutEffect(() => {
    if (previousStep.current === step) return undefined;
    previousStep.current = step;

    focusTarget.current?.focus();
    const element = panel.current;
    if (!element || !window.matchMedia(MOTION_OK).matches) return undefined;

    const { gsap } = ensureGsap();
    // Nur Deckkraft und Versatz: Ein unsichtbares (visibility: hidden) Element könnte keinen Fokus halten.
    const tween = gsap.fromTo(
      element,
      { opacity: 0, x: SHIFT_PX * direction },
      { opacity: 1, x: 0, duration: DURATION, ease: 'power2.out', clearProps: 'opacity,transform' },
    );
    return () => {
      tween.kill();
      gsap.set(element, { clearProps: 'opacity,transform' });
    };
  }, [panel, focusTarget, step, direction]);
}
