// GSAP einmalig mit den benötigten Plugins registrieren.
// Nur in Client-Komponenten importieren.

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

export function ensureGsap() {
  if (!registered && typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

export { MOTION_OK, DESKTOP } from './media';
