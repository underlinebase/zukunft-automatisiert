// Gemeinsame Hochzähl-Animation für Kennzahlen und Balken.
// Im HTML steht immer der Endwert; erst die Animation setzt ihn kurz auf 0 und zählt hoch.

import type { MotionContext } from '@/lib/motion/use-motion';

const COUNT_DURATION = 1.4;
const COUNT_START = 'top 88%';

function formatValue(value: number, decimals: number): string {
  return value.toFixed(decimals).replace('.', ',');
}

/**
 * Zählt alle Elemente mit `data-count` innerhalb von `root` beim Hereinscrollen hoch.
 * Gibt eine Aufräumfunktion zurück, die die Endwerte wiederherstellt.
 */
export function setupCountUp(root: HTMLElement, { gsap }: MotionContext): () => void {
  const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-count]'));
  const tweens = elements.map((element) => {
    const target = Number(element.dataset.count);
    const decimals = Number(element.dataset.decimals ?? 0);
    const state = { value: 0 };
    element.textContent = formatValue(0, decimals);
    return gsap.to(state, {
      value: target,
      duration: COUNT_DURATION,
      ease: 'power2.out',
      scrollTrigger: { trigger: element, start: COUNT_START, once: true },
      onUpdate: () => {
        element.textContent = formatValue(state.value, decimals);
      },
    });
  });

  return () => {
    tweens.forEach((tween) => tween.kill());
    elements.forEach((element) => {
      element.textContent = formatValue(Number(element.dataset.count), Number(element.dataset.decimals ?? 0));
    });
  };
}

/** Nachkommastellen für die Anzeige: 51.2 → 1, 57 → 0. */
export function decimalsOf(value: number): number {
  return Number.isInteger(value) ? 0 : 1;
}
