// Rechenlogik für Zeitrechner und Vorher/Nachher-Beispiel.

import type { BeforeAfterExample, CalculatorDefaults } from '@/lib/content/types';

/** 52 Wochen abzüglich Urlaub und Feiertage. */
export const WORK_WEEKS_PER_YEAR = 46;

export interface YearlyCost {
  hoursPerYear: number;
  costPerYear: number;
}

const safe = (value: number) => (Number.isFinite(value) && value > 0 ? value : 0);

export function yearlyCost({ hoursPerWeek, hourlyRate }: CalculatorDefaults): YearlyCost {
  const hoursPerYear = safe(hoursPerWeek) * WORK_WEEKS_PER_YEAR;
  return { hoursPerYear, costPerYear: hoursPerYear * safe(hourlyRate) };
}

export function minutesPerCase(example: BeforeAfterExample, phase: 'before' | 'after'): number {
  return example.steps.reduce((sum, step) => sum + (phase === 'before' ? step.minutesBefore : step.minutesAfter), 0);
}

export function savedMinutesPerWeek(example: BeforeAfterExample): number {
  return (minutesPerCase(example, 'before') - minutesPerCase(example, 'after')) * example.perWeek;
}

const euro = new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 });
const hours = new Intl.NumberFormat('de-DE', { maximumFractionDigits: 1 });

export function formatEuro(value: number): string {
  return `${euro.format(Math.round(value))} €`;
}

export function formatNumber(value: number): string {
  return euro.format(Math.round(value));
}

export function formatHours(minutes: number): string {
  return `${hours.format(minutes / 60)} Std.`;
}
