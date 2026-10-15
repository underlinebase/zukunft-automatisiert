// GSAP einmalig mit den benötigten Plugins registrieren.
// Nur in Client-Komponenten importieren.

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

let registered = false;

export function ensureGsap() {
  if (!registered && typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    registered = true;
  }
  return { gsap, ScrollTrigger, SplitText };
}

/** Bewegung nur, wenn das System keine reduzierte Bewegung verlangt. */
export const MOTION_OK = '(prefers-reduced-motion: no-preference)';
export const DESKTOP = '(min-width: 1024px)';
