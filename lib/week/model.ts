// Gemeinsames Modell der Wochen-Grafik „Die Woche, die leerer wird“.
// 3D-Szene (Desktop) und 2D-Version (Mobil, Abschluss) nutzen dieselben Funktionen,
// damit beide exakt gleich ablaufen.

import type { WeekBlockLabel } from '@/lib/content/types';

export const DAY_NAMES = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'] as const;
export const DAY_SHORT = ['Mo', 'Di', 'Mi', 'Do', 'Fr'] as const;
export const SLOTS_PER_DAY = 4;
export const FRIDAY = 4;
/** Freitagnachmittag = die unteren beiden Plätze in der Freitagsspalte. */
export const AFTERNOON_FIRST_SLOT = 2;
export const FREED_LABEL = 'Wieder Ihrer.';

/** Zeitfenster innerhalb des Scroll-Fortschritts (0 bis 1). */
const CLEAR_START = 0.04;
const CLEAR_END = 0.84;
const OVERLAP = 2.4;
const GLOW_START = 0.86;
const GLOW_END = 0.98;
const CHECK_SHARE = 0.32;
const LEAVE_START = 0.4;

export interface PlacedBlock {
  id: string;
  label: string;
  day: number;
  slot: number;
  /** Reihenfolge, in der der Block abgehakt wird. Freitag kommt zuletzt. */
  order: number;
}

export interface BlockState {
  /** 0 bis 1: Haken erscheint. */
  check: number;
  /** 0 bis 1: Block kippt weg und verschwindet. */
  leave: number;
}

export function clamp01(value: number): number {
  if (Number.isNaN(value)) return 0;
  return Math.min(1, Math.max(0, value));
}

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

/** Ordnet die Blöcke ihren Plätzen zu und legt die Abhak-Reihenfolge fest. */
export function placeBlocks(blocks: readonly WeekBlockLabel[]): PlacedBlock[] {
  const slotCounter = [0, 0, 0, 0, 0];
  const placed = blocks.map((block, index) => {
    const slot = slotCounter[block.day];
    slotCounter[block.day] = slot + 1;
    return { id: `b${index}`, label: block.label, day: block.day, slot, order: 0 };
  });

  // Erst die Tage Mo bis Do, Zeile für Zeile durchmischt, dann der Freitag.
  const sorted = [...placed].sort((a, b) => {
    const aFriday = a.day === FRIDAY ? 1 : 0;
    const bFriday = b.day === FRIDAY ? 1 : 0;
    if (aFriday !== bFriday) return aFriday - bFriday;
    if (a.slot !== b.slot) return a.slot - b.slot;
    return a.day - b.day;
  });
  const orderById = new Map(sorted.map((block, order) => [block.id, order]));

  return placed
    .filter((block) => block.slot < SLOTS_PER_DAY)
    .map((block) => ({ ...block, order: orderById.get(block.id) ?? 0 }));
}

/** Zustand eines Blocks bei gegebenem Scroll-Fortschritt. */
export function blockStateAt(progress: number, order: number, total: number): BlockState {
  if (total <= 0) return { check: 0, leave: 0 };
  const span = CLEAR_END - CLEAR_START;
  const duration = Math.min(span, (span / total) * OVERLAP);
  // Starts gleichmäßig verteilen, sodass der letzte Block genau bei CLEAR_END fertig ist.
  const gap = total > 1 ? (span - duration) / (total - 1) : 0;
  const start = CLEAR_START + order * gap;
  const local = clamp01((progress - start) / duration);

  return {
    check: clamp01(local / CHECK_SHARE),
    leave: easeInOut(clamp01((local - LEAVE_START) / (1 - LEAVE_START))),
  };
}

/** 0 bis 1: Der freie Freitagnachmittag leuchtet in Bordeaux auf. */
export function freedStateAt(progress: number): number {
  return easeInOut(clamp01((progress - GLOW_START) / (GLOW_END - GLOW_START)));
}
