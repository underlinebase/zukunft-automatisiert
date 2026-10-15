import { describe, expect, test } from 'vitest';
import { FRIDAY, blockStateAt, clamp01, freedStateAt, placeBlocks } from './model';
import { HOME_WEEK_BLOCKS } from '@/lib/content/home';

describe('placeBlocks', () => {
  test('assigns consecutive slots per day', () => {
    const placed = placeBlocks([
      { day: 0, label: 'A' },
      { day: 1, label: 'B' },
      { day: 0, label: 'C' },
    ]);
    expect(placed.map((b) => [b.label, b.day, b.slot])).toEqual([
      ['A', 0, 0],
      ['B', 1, 0],
      ['C', 0, 1],
    ]);
  });

  test('clears friday blocks last', () => {
    const placed = placeBlocks(HOME_WEEK_BLOCKS);
    const fridayOrders = placed.filter((b) => b.day === FRIDAY).map((b) => b.order);
    const otherOrders = placed.filter((b) => b.day !== FRIDAY).map((b) => b.order);
    expect(Math.min(...fridayOrders)).toBeGreaterThan(Math.max(...otherOrders));
  });

  test('gives every block a unique order', () => {
    const placed = placeBlocks(HOME_WEEK_BLOCKS);
    expect(new Set(placed.map((b) => b.order)).size).toBe(placed.length);
  });

  test('drops blocks that do not fit into a day column', () => {
    const tooMany = Array.from({ length: 6 }, (_, i) => ({ day: 2 as const, label: `X${i}` }));
    expect(placeBlocks(tooMany)).toHaveLength(4);
  });

  test('fills the friday afternoon at the start', () => {
    const fridaySlots = placeBlocks(HOME_WEEK_BLOCKS)
      .filter((b) => b.day === FRIDAY)
      .map((b) => b.slot);
    expect(fridaySlots).toEqual([0, 1, 2, 3]);
  });
});

describe('blockStateAt', () => {
  const total = 16;

  test('shows every block untouched at the start', () => {
    for (let order = 0; order < total; order += 1) {
      expect(blockStateAt(0, order, total)).toEqual({ check: 0, leave: 0 });
    }
  });

  test('has every block gone at the end', () => {
    for (let order = 0; order < total; order += 1) {
      expect(blockStateAt(1, order, total)).toEqual({ check: 1, leave: 1 });
    }
  });

  test('checks a block before it leaves', () => {
    let sawCheckedButPresent = false;
    for (let p = 0; p <= 1; p += 0.005) {
      const state = blockStateAt(p, 3, total);
      if (state.check === 1 && state.leave === 0) sawCheckedButPresent = true;
      if (state.leave > 0) expect(state.check).toBe(1);
    }
    expect(sawCheckedButPresent).toBe(true);
  });

  test('clears earlier blocks before later ones', () => {
    const p = 0.4;
    expect(blockStateAt(p, 2, total).leave).toBeGreaterThanOrEqual(blockStateAt(p, 10, total).leave);
  });

  test('handles an empty week', () => {
    expect(blockStateAt(0.5, 0, 0)).toEqual({ check: 0, leave: 0 });
  });
});

describe('freedStateAt', () => {
  test('stays dark while blocks are still clearing', () => {
    expect(freedStateAt(0.5)).toBe(0);
  });

  test('glows fully at the end', () => {
    expect(freedStateAt(1)).toBe(1);
  });
});

describe('clamp01', () => {
  test('clamps and handles NaN', () => {
    expect(clamp01(-1)).toBe(0);
    expect(clamp01(2)).toBe(1);
    expect(clamp01(Number.NaN)).toBe(0);
  });
});
