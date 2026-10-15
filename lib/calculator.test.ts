import { describe, expect, test } from 'vitest';
import { WORK_WEEKS_PER_YEAR, formatEuro, formatHours, savedMinutesPerWeek, yearlyCost } from './calculator';
import { HOME_EXAMPLE } from '@/lib/content/home';

describe('yearlyCost', () => {
  test('multiplies hours, rate and working weeks', () => {
    expect(yearlyCost({ hoursPerWeek: 6, hourlyRate: 80 })).toEqual({
      hoursPerYear: 6 * WORK_WEEKS_PER_YEAR,
      costPerYear: 6 * 80 * WORK_WEEKS_PER_YEAR,
    });
  });

  test('treats negative or invalid input as zero', () => {
    expect(yearlyCost({ hoursPerWeek: -3, hourlyRate: Number.NaN })).toEqual({ hoursPerYear: 0, costPerYear: 0 });
  });
});

describe('savedMinutesPerWeek', () => {
  test('sums the minutes saved per case and multiplies by weekly volume', () => {
    const before = HOME_EXAMPLE.steps.reduce((sum, s) => sum + s.minutesBefore, 0);
    const after = HOME_EXAMPLE.steps.reduce((sum, s) => sum + s.minutesAfter, 0);
    expect(savedMinutesPerWeek(HOME_EXAMPLE)).toBe((before - after) * HOME_EXAMPLE.perWeek);
  });
});

describe('formatting', () => {
  test('formats euros the German way', () => {
    expect(formatEuro(22080)).toBe('22.080 €');
  });

  test('formats minutes as hours with one decimal', () => {
    expect(formatHours(320)).toBe('5,3 Std.');
    expect(formatHours(60)).toBe('1 Std.');
  });
});
