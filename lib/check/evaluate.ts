// Auswertung des Automatisierungs-Checks. Reine Funktionen: gleiche Antworten, gleiches Ergebnis.

import type { Thema } from '@/lib/content/ablaeufe/types';
import { CHECK_QUESTIONS } from '@/lib/content/check';
import type {
  BranchenText,
  CheckAnswers,
  CheckBranche,
  CheckEffort,
  CheckQuestion,
  CheckResult,
  EffortLine,
  ThemaResult,
} from './types';

/** So viele Zeitfresser zeigt das Ergebnis. */
export const TOP_COUNT = 3;
/** Durchschnittliche Wochen pro Monat (52 ÷ 12, gerundet). */
export const WEEKS_PER_MONTH = 4.3;

const MINUTES_PER_HOUR = 60;
/** Kleine Werte werden auf 5 Minuten gerundet, größere auf halbe Stunden. */
const MINUTE_STEP = 5;
const HOUR_STEP = 0.5;

const decimal = new Intl.NumberFormat('de-DE', { maximumFractionDigits: 1 });

export function textFor(text: BranchenText, branche: CheckBranche): string {
  return text[branche] ?? text.standard;
}

export function effortMinutesPerWeek(effort: CheckEffort): number {
  const minutes = effort.count * effort.minutes;
  return effort.period === 'monat' ? Math.round(minutes / WEEKS_PER_MONTH) : minutes;
}

export function effortLine(effort: CheckEffort, questionId: string): EffortLine {
  const minutesPerWeek = effortMinutesPerWeek(effort);
  const base = `${effort.count} ${effort.unit} × ${effort.minutes} Min.`;
  const text =
    effort.period === 'monat'
      ? `${base} im Monat ÷ ${decimal.format(WEEKS_PER_MONTH)} Wochen ≈ ${minutesPerWeek} Min. pro Woche`
      : `${base} = ${minutesPerWeek} Min. pro Woche`;
  return { questionId, text, minutesPerWeek };
}

/** Gewählte Antwort einer Frage oder null, wenn keine oder eine unbekannte Antwort vorliegt. */
function chosenOption(question: CheckQuestion, answers: CheckAnswers) {
  const optionId = answers.choices[question.id];
  return question.options.find((option) => option.id === optionId) ?? null;
}

function addLine(totals: ReadonlyMap<Thema, ThemaResult>, thema: Thema, line: EffortLine): Map<Thema, ThemaResult> {
  const current = totals.get(thema);
  const next = current
    ? { thema, minutesPerWeek: current.minutesPerWeek + line.minutesPerWeek, lines: [...current.lines, line] }
    : { thema, minutesPerWeek: line.minutesPerWeek, lines: [line] };
  return new Map(totals).set(thema, next);
}

/**
 * Summiert die Minuten je Thema über alle beantworteten Fragen und liefert die größten Zeitfresser.
 * Gleichstand: Das Thema, das früher im Fragebogen vorkommt, steht vorn.
 */
export function evaluateCheck(answers: CheckAnswers, questions: readonly CheckQuestion[] = CHECK_QUESTIONS): CheckResult {
  const chosen = questions.flatMap((question) => {
    const option = chosenOption(question, answers);
    return option ? [{ question, option }] : [];
  });

  const totals = chosen.reduce(
    (acc, { question, option }) =>
      option.efforts.reduce((inner, effort) => addLine(inner, effort.thema, effortLine(effort, question.id)), acc),
    new Map<Thema, ThemaResult>(),
  );

  const top = [...totals.values()]
    .filter((item) => item.minutesPerWeek > 0)
    .sort((a, b) => b.minutesPerWeek - a.minutesPerWeek)
    .slice(0, TOP_COUNT);

  return {
    top,
    totalTopMinutes: top.reduce((sum, item) => sum + item.minutesPerWeek, 0),
    owner: chosen.some(({ option }) => option.owner === true),
  };
}

export interface EstimateParts {
  value: number;
  unit: 'Min.' | 'Std.';
  decimals: 0 | 1;
}

/** Gerundeter Anzeigewert: unter einer Stunde in 5-Minuten-Schritten, sonst in halben Stunden. */
export function estimateParts(minutes: number): EstimateParts {
  if (minutes < MINUTES_PER_HOUR) {
    const value = Math.max(MINUTE_STEP, Math.round(minutes / MINUTE_STEP) * MINUTE_STEP);
    return { value, unit: 'Min.', decimals: 0 };
  }
  const value = Math.round(minutes / MINUTES_PER_HOUR / HOUR_STEP) * HOUR_STEP;
  return { value, unit: 'Std.', decimals: Number.isInteger(value) ? 0 : 1 };
}

export function formatValue(value: number, decimals: 0 | 1): string {
  return value.toLocaleString('de-DE', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

export function formatEstimate(minutes: number): string {
  const parts = estimateParts(minutes);
  return `${formatValue(parts.value, parts.decimals)} ${parts.unit}`;
}
