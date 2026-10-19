// Datenmodell des Automatisierungs-Checks. Inhalte stehen in lib/content/check.ts, die Auswertung in evaluate.ts.

import type { Branche, Thema } from '@/lib/content/ablaeufe/types';

/** Branchen im Check. „andere“ zeigt im Ergebnis die Abläufe für alle Betriebe. */
export type CheckBranche = Exclude<Branche, 'alle'> | 'andere';

/** Zeitraum, auf den sich eine Annahme bezieht. Monatswerte werden auf die Woche umgerechnet. */
export type CheckPeriod = 'woche' | 'monat';

/** Eine Annahme hinter einer Antwort: so viele Fälle mal so viele Minuten. */
export interface CheckEffort {
  thema: Thema;
  /** Angenommene Anzahl im Zeitraum, z. B. 10. */
  count: number;
  /** Einheit passend zur Anzahl, z. B. „Anfragen“. */
  unit: string;
  /** Angenommene Minuten je Fall. */
  minutes: number;
  /** Standard: pro Woche. */
  period?: CheckPeriod;
}

export interface CheckOption {
  id: string;
  label: string;
  /** Leer, wenn die Antwort keinen nennenswerten Aufwand bedeutet. */
  efforts: readonly CheckEffort[];
  /** Die Antwort heißt: Der Inhaber macht die Arbeit selbst. */
  owner?: boolean;
}

/** Text mit optionaler Fassung je Branche. Fehlt sie, gilt `standard`. */
export type BranchenText = { standard: string } & Partial<Record<CheckBranche, string>>;

export interface CheckQuestion {
  id: string;
  title: BranchenText;
  hint?: BranchenText;
  options: readonly CheckOption[];
}

export interface CheckBrancheOption {
  id: CheckBranche;
  label: string;
}

export interface CheckAnswers {
  branche: CheckBranche;
  /** Frage-ID → Options-ID. */
  choices: Readonly<Record<string, string>>;
}

/** Eine Zeile im Rechenweg, z. B. „10 Anfragen × 10 Min. = 100 Min. pro Woche“. */
export interface EffortLine {
  questionId: string;
  text: string;
  minutesPerWeek: number;
}

export interface ThemaResult {
  thema: Thema;
  minutesPerWeek: number;
  lines: readonly EffortLine[];
}

export interface CheckResult {
  /** Die bis zu drei größten Zeitfresser, größter zuerst. */
  top: readonly ThemaResult[];
  totalTopMinutes: number;
  owner: boolean;
}

/** Schlanke Fassung eines Ablaufs für die Client-Komponente. */
export interface CheckAblauf {
  slug: string;
  title: string;
  href: string;
  branche: Branche;
  themen: readonly Thema[];
}
