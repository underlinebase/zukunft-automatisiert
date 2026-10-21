// Media Queries für Bewegung. Eigene Datei ohne GSAP-Import,
// damit Komponenten sie nutzen können, ohne GSAP sofort mitzuladen.

/** Bewegung nur, wenn das System keine reduzierte Bewegung verlangt. */
export const MOTION_OK = '(prefers-reduced-motion: no-preference)';
export const DESKTOP = '(min-width: 1024px)';
