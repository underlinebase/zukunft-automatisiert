import { describe, expect, test } from 'vitest';
import {
  effortLine,
  effortMinutesPerWeek,
  estimateParts,
  evaluateCheck,
  formatEstimate,
  textFor,
  TOP_COUNT,
  WEEKS_PER_MONTH,
} from './evaluate';
import { libraryBranche, matchAblaeufe, toCheckAblauf } from './library';
import type { CheckAblauf, CheckQuestion } from './types';
import * as CHECK_CONTENT from '@/lib/content/check';
import { CHECK_BRANCHEN, CHECK_FAQS, CHECK_QUESTIONS, THEMA_IDEEN, THEMA_LABELS } from '@/lib/content/check';
import { aiPatternHits } from '@/lib/content/style';
import { INDUSTRIES, industryHref } from '@/lib/content/branchen';
import type { Ablauf } from '@/lib/content/ablaeufe/types';

const SAMPLE_QUESTIONS: readonly CheckQuestion[] = [
  {
    id: 'q1',
    title: { standard: 'Frage eins', handwerk: 'Frage eins im Handwerk' },
    options: [
      { id: 'a', label: 'A', efforts: [{ thema: 'anfragen', count: 10, unit: 'Anfragen', minutes: 10 }] },
      { id: 'b', label: 'B', efforts: [] },
    ],
  },
  {
    id: 'q2',
    title: { standard: 'Frage zwei' },
    options: [
      {
        id: 'a',
        label: 'A',
        efforts: [
          { thema: 'angebote', count: 4, unit: 'Angebote', minutes: 45 },
          { thema: 'anfragen', count: 5, unit: 'Rückrufe', minutes: 6 },
        ],
      },
    ],
  },
  {
    id: 'q3',
    title: { standard: 'Frage drei' },
    options: [
      { id: 'a', label: 'A', efforts: [{ thema: 'reporting', count: 1, unit: 'Monatsauswertung', minutes: 172, period: 'monat' }] },
      { id: 'b', label: 'B', efforts: [{ thema: 'termine', count: 8, unit: 'Termine', minutes: 5 }] },
    ],
  },
  {
    id: 'q4',
    title: { standard: 'Frage vier' },
    options: [
      { id: 'chef', label: 'Ich', owner: true, efforts: [{ thema: 'wissen', count: 2, unit: 'Rückfragen', minutes: 5 }] },
      { id: 'team', label: 'Team', efforts: [] },
    ],
  },
];

function sampleAblauf(slug: string, branche: Ablauf['branche'], themen: Ablauf['themen']): CheckAblauf {
  return { slug, title: slug, href: `/ablaeufe/${slug}`, branche, themen };
}

const SAMPLE_LIBRARY: readonly CheckAblauf[] = [
  sampleAblauf('alle-anfragen', 'alle', ['anfragen']),
  sampleAblauf('handwerk-anfragen', 'handwerk', ['anfragen', 'termine']),
  sampleAblauf('makler-anfragen', 'immobilienmakler', ['anfragen']),
  sampleAblauf('handwerk-angebote', 'handwerk', ['angebote', 'nachfassen']),
  sampleAblauf('handwerk-anfragen-2', 'handwerk', ['anfragen']),
  sampleAblauf('handwerk-anfragen-3', 'handwerk', ['anfragen']),
];

/** Sammelt alle Texte eines Inhaltsobjekts (Strings in Objekten und Listen). */
function collectStrings(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(collectStrings);
  return [];
}

describe('Rechenweg je Annahme', () => {
  test('rechnet Wochenwerte direkt', () => {
    expect(effortMinutesPerWeek({ thema: 'anfragen', count: 10, unit: 'Anfragen', minutes: 10 })).toBe(100);
  });

  test('rechnet Monatswerte mit 4,3 Wochen auf die Woche um', () => {
    expect(WEEKS_PER_MONTH).toBe(4.3);
    expect(effortMinutesPerWeek({ thema: 'reporting', count: 1, unit: 'Auswertung', minutes: 172, period: 'monat' })).toBe(40);
  });

  test('beschreibt den Rechenweg in Worten', () => {
    expect(effortLine({ thema: 'anfragen', count: 10, unit: 'Anfragen', minutes: 10 }, 'q1').text).toBe(
      '10 Anfragen × 10 Min. = 100 Min. pro Woche',
    );
    expect(effortLine({ thema: 'reporting', count: 1, unit: 'Monatsauswertung', minutes: 172, period: 'monat' }, 'q3').text).toBe(
      '1 Monatsauswertung × 172 Min. im Monat ÷ 4,3 Wochen ≈ 40 Min. pro Woche',
    );
  });
});

describe('Auswertung', () => {
  test('summiert Minuten je Thema über alle Fragen und sortiert absteigend', () => {
    // Arrange
    const answers = { branche: 'handwerk' as const, choices: { q1: 'a', q2: 'a', q3: 'a', q4: 'team' } };

    // Act
    const result = evaluateCheck(answers, SAMPLE_QUESTIONS);

    // Assert
    expect(result.top.map((item) => item.thema)).toEqual(['angebote', 'anfragen', 'reporting']);
    expect(result.top[0].minutesPerWeek).toBe(180);
    expect(result.top[1].minutesPerWeek).toBe(130);
    expect(result.top[1].lines.map((line) => line.questionId)).toEqual(['q1', 'q2']);
    expect(result.totalTopMinutes).toBe(350);
    expect(result.owner).toBe(false);
  });

  test('liefert höchstens drei Zeitfresser', () => {
    const result = evaluateCheck({ branche: 'andere', choices: { q1: 'a', q2: 'a', q3: 'b', q4: 'chef' } }, SAMPLE_QUESTIONS);
    expect(TOP_COUNT).toBe(3);
    expect(result.top).toHaveLength(3);
    expect(result.top.map((item) => item.thema)).not.toContain('wissen');
  });

  test('merkt sich, wenn der Inhaber die Arbeit selbst macht', () => {
    expect(evaluateCheck({ branche: 'coaches', choices: { q4: 'chef' } }, SAMPLE_QUESTIONS).owner).toBe(true);
  });

  test('lässt Themen ohne Aufwand weg und ignoriert unbekannte Antworten', () => {
    const result = evaluateCheck({ branche: 'handwerk', choices: { q1: 'b', q2: 'gibt-es-nicht', unbekannt: 'a' } }, SAMPLE_QUESTIONS);
    expect(result.top).toEqual([]);
    expect(result.totalTopMinutes).toBe(0);
  });

  test('wertet die echten Fragen aus: höchste Antworten ergeben drei Zeitfresser', () => {
    const choices = Object.fromEntries(CHECK_QUESTIONS.map((question) => [question.id, question.options[question.options.length - 1].id]));
    const result = evaluateCheck({ branche: 'handwerk', choices });
    expect(result.top).toHaveLength(3);
    result.top.forEach((item) => expect(item.minutesPerWeek).toBeGreaterThan(0));
  });
});

describe('Anzeige der Schätzung', () => {
  test('zeigt kleine Werte in Minuten, gerundet auf 5', () => {
    expect(estimateParts(7)).toEqual({ value: 5, unit: 'Min.', decimals: 0 });
    expect(estimateParts(42)).toEqual({ value: 40, unit: 'Min.', decimals: 0 });
    expect(estimateParts(2)).toEqual({ value: 5, unit: 'Min.', decimals: 0 });
  });

  test('zeigt ab einer Stunde halbe Stunden', () => {
    expect(estimateParts(100)).toEqual({ value: 1.5, unit: 'Std.', decimals: 1 });
    expect(estimateParts(120)).toEqual({ value: 2, unit: 'Std.', decimals: 0 });
    expect(formatEstimate(100)).toBe('1,5 Std.');
    expect(formatEstimate(45)).toBe('45 Min.');
  });
});

describe('Texte je Branche', () => {
  test('nimmt die Branchenfassung, sonst den Standard', () => {
    expect(textFor(SAMPLE_QUESTIONS[0].title, 'handwerk')).toBe('Frage eins im Handwerk');
    expect(textFor(SAMPLE_QUESTIONS[0].title, 'coaches')).toBe('Frage eins');
  });
});

describe('Zuordnung zur Ablauf-Bibliothek', () => {
  test('„Andere Branche“ zeigt Abläufe für alle Betriebe', () => {
    expect(libraryBranche('andere')).toBe('alle');
    expect(libraryBranche('steuerberater')).toBe('steuerberater');
  });

  test('filtert nach Thema und Branche, eigene Branche zuerst, dann „alle“', () => {
    const matches = matchAblaeufe(SAMPLE_LIBRARY, 'handwerk', 'anfragen', 5);
    expect(matches.map((item) => item.slug)).toEqual(['handwerk-anfragen', 'handwerk-anfragen-2', 'handwerk-anfragen-3', 'alle-anfragen']);
  });

  test('begrenzt die Treffer', () => {
    expect(matchAblaeufe(SAMPLE_LIBRARY, 'handwerk', 'anfragen')).toHaveLength(3);
  });

  test('zeigt keine Abläufe fremder Branchen', () => {
    expect(matchAblaeufe(SAMPLE_LIBRARY, 'andere', 'anfragen').map((item) => item.slug)).toEqual(['alle-anfragen']);
    expect(matchAblaeufe(SAMPLE_LIBRARY, 'immobilienmakler', 'angebote')).toEqual([]);
  });

  test('liefert bei leerer Bibliothek eine leere Liste', () => {
    expect(matchAblaeufe([], 'handwerk', 'anfragen')).toEqual([]);
  });

  test('übernimmt nur die nötigen Felder eines Ablaufs', () => {
    const ablauf = { slug: 'x', title: 'X', branche: 'alle', themen: ['wissen'], lead: 'lang' } as unknown as Ablauf;
    expect(toCheckAblauf(ablauf, '/ablaeufe/x')).toEqual({ slug: 'x', title: 'X', href: '/ablaeufe/x', branche: 'alle', themen: ['wissen'] });
  });
});

describe('Inhalte des Checks', () => {
  test('hat zehn Schritte: Branche plus neun Fragen mit je drei bis vier Antworten', () => {
    expect(CHECK_BRANCHEN).toHaveLength(6);
    expect(CHECK_QUESTIONS).toHaveLength(9);
    CHECK_QUESTIONS.forEach((question) => {
      expect(question.options.length).toBeGreaterThanOrEqual(3);
      expect(question.options.length).toBeLessThanOrEqual(4);
      expect(new Set(question.options.map((option) => option.id)).size).toBe(question.options.length);
    });
    expect(new Set(CHECK_QUESTIONS.map((question) => question.id)).size).toBe(CHECK_QUESTIONS.length);
  });

  test('rechnet nur mit positiven Annahmen und bekannten Themen', () => {
    CHECK_QUESTIONS.flatMap((question) => question.options.flatMap((option) => option.efforts)).forEach((effort) => {
      expect(effort.count).toBeGreaterThan(0);
      expect(effort.minutes).toBeGreaterThan(0);
      expect(THEMA_LABELS[effort.thema]).toBeDefined();
      expect(THEMA_IDEEN[effort.thema]).toBeDefined();
    });
  });

  test('hat drei bis vier FAQ', () => {
    expect(CHECK_FAQS.length).toBeGreaterThanOrEqual(3);
    expect(CHECK_FAQS.length).toBeLessThanOrEqual(4);
  });

  test('alle Texte ohne KI-Muster', () => {
    const text = collectStrings(CHECK_CONTENT).join('\n');
    expect(text.length).toBeGreaterThan(1000);
    expect(aiPatternHits(text)).toEqual([]);
  });

  test('verlinkt keine Landingpages', () => {
    const text = collectStrings(CHECK_CONTENT).join('\n');
    INDUSTRIES.map((industry) => industryHref(industry.slug)).forEach((href) => expect(text).not.toContain(href));
  });
});
