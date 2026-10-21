import { describe, expect, test } from 'vitest';
import { dayLabel, monthLabel, visibleModifiedDate } from './dates';

describe('dayLabel', () => {
  test('zeigt ein ISO-Datum tagesgenau auf Deutsch', () => {
    expect(dayLabel('2026-10-15')).toBe('15. Oktober 2026');
    expect(dayLabel('2026-03-01')).toBe('1. März 2026');
  });

  test('passt zum Monatsnamen von monthLabel', () => {
    expect(dayLabel('2026-12-31').endsWith(monthLabel('2026-12-31'))).toBe(true);
  });
});

describe('visibleModifiedDate', () => {
  test('liefert das Überarbeitungsdatum, wenn es abweicht', () => {
    expect(visibleModifiedDate({ datePublished: '2026-10-15', dateModified: '2026-10-19' })).toBe('2026-10-19');
  });

  test('liefert nichts ohne Überarbeitung oder am selben Tag', () => {
    expect(visibleModifiedDate({ datePublished: '2026-10-15' })).toBeUndefined();
    expect(visibleModifiedDate({ datePublished: '2026-10-15', dateModified: '2026-10-15' })).toBeUndefined();
  });
});
