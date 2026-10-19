import { describe, expect, test } from 'vitest';
import * as GARANTIE from './garantie';
import { GARANTIE_FAQS, GARANTIE_LINKS, GARANTIE_PATH } from './garantie';
import * as DATEN from './daten';
import { BAR_GROUPS, DATEN_FAQS, DATEN_STAND, KEY_STATS, MEANING, SOURCES, findSource, formatPercent } from './daten';
import { GUARANTEE, WEEKS } from './home';
import { aiPatternHits } from './style';
import { INDUSTRIES, industryHref } from './branchen';
import { faqSchema } from '@/lib/seo/schema';
import { garantieSchema } from '@/components/garantie/schema';
import { datenSchema } from '@/components/daten/schema';

const DATE_PATTERN = /^\d{4}(-\d{2}(-\d{2})?)?$/;
const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;

/** Sammelt alle sichtbaren Texte eines Moduls ein. Pfade, URLs und Funktionen zählen nicht dazu. */
function collectTexts(value: unknown): string[] {
  if (typeof value === 'string') return value.startsWith('/') || value.startsWith('http') ? [] : [value];
  if (Array.isArray(value)) return value.flatMap(collectTexts);
  if (value && typeof value === 'object') return Object.values(value).flatMap(collectTexts);
  return [];
}

/** Originaltitel fremder Quellen werden zitiert und deshalb nicht auf Stilregeln geprüft. */
function withoutSourceTitles(module: Record<string, unknown>): Record<string, unknown> {
  return {
    ...module,
    SOURCES: SOURCES.map((source) => Object.fromEntries(Object.entries(source).filter(([key]) => key !== 'title'))),
  };
}

function collectHrefs(value: unknown): string[] {
  if (Array.isArray(value)) return value.flatMap(collectHrefs);
  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    const own = typeof record.href === 'string' ? [record.href] : [];
    return [...own, ...Object.values(record).flatMap(collectHrefs)];
  }
  return [];
}

const LANDING_PATHS = INDUSTRIES.map((industry) => industryHref(industry.slug));

describe('Garantie-Seite', () => {
  test('enthält keine typischen KI-Muster', () => {
    const texts = collectTexts(GARANTIE);
    expect(texts.length).toBeGreaterThan(30);
    expect(aiPatternHits(texts.join('\n'))).toEqual([]);
  });

  test('übernimmt Titel und Bedingungen wörtlich aus der Startseite', () => {
    expect(GARANTIE.GARANTIE_HERO.title).toBe(GUARANTEE.title);
    expect(GARANTIE.GARANTIE_MEANING.lead).toBe(GUARANTEE.points[0].text);
    expect(GARANTIE.GARANTIE_MEANING.measure[0]).toContain(GUARANTEE.points[1].text);
    expect(GARANTIE_PATH.start.weeks.map((week) => week.title)).toEqual(WEEKS.map((week) => week.title));
  });

  test('nennt keinen Euro-Preis außer dem Pilotpreis', () => {
    const euroAmounts = collectTexts(GARANTIE).join('\n').match(/\d[\d.]*\s?€/g) ?? [];
    euroAmounts.forEach((amount) => expect(amount.replace(/\s/g, '')).toBe('1.999€'));
  });

  test('hat 5 bis 8 Fragen, die ins FAQ-Schema übernommen werden', () => {
    expect(GARANTIE_FAQS.length).toBeGreaterThanOrEqual(5);
    expect(GARANTIE_FAQS.length).toBeLessThanOrEqual(8);
    const entities = faqSchema(GARANTIE_FAQS).mainEntity as { name: string }[];
    expect(entities.map((entity) => entity.name)).toEqual(GARANTIE_FAQS.map((faq) => faq.q));
  });

  test('verlinkt keine Landingpages', () => {
    collectHrefs(GARANTIE_LINKS).forEach((href) => expect(LANDING_PATHS).not.toContain(href));
  });

  test('beschreibt das Angebot mit Garantie im Schema', () => {
    const nodes = garantieSchema()['@graph'] as { '@type': string; warranty?: { name: string } }[];
    const types = nodes.map((node) => node['@type']);
    expect(types).toEqual(expect.arrayContaining(['WebPage', 'Offer', 'Service', 'FAQPage', 'BreadcrumbList']));
    expect(nodes.find((node) => node['@type'] === 'Offer')?.warranty?.name).toBe(GUARANTEE.title);
  });
});

describe('KI im Kleinbetrieb: Zahlen', () => {
  test('enthält keine typischen KI-Muster (ohne zitierte Quellentitel)', () => {
    const texts = collectTexts(withoutSourceTitles({ ...DATEN }));
    expect(texts.length).toBeGreaterThan(40);
    expect(aiPatternHits(texts.join('\n'))).toEqual([]);
  });

  test('jede Quelle hat Herausgeber, HTTPS-Adresse, Datum, Stichprobe und Zeitraum', () => {
    expect(new Set(SOURCES.map((source) => source.id)).size).toBe(SOURCES.length);
    SOURCES.forEach((source) => {
      expect(source.publisher.length, source.id).toBeGreaterThan(0);
      expect(source.url, source.id).toMatch(/^https:\/\/[^\s]+$/);
      expect(source.published, source.id).toMatch(DATE_PATTERN);
      expect(source.published <= DATEN_STAND.iso, source.id).toBe(true);
      expect(source.publishedLabel.length, source.id).toBeGreaterThan(0);
      expect(source.sample.length, source.id).toBeGreaterThan(0);
      expect(source.period.length, source.id).toBeGreaterThan(0);
    });
  });

  test('jede Kennzahl und jeder Balken verweist auf eine vorhandene Quelle', () => {
    const stats = [...KEY_STATS, ...BAR_GROUPS.flatMap((group) => group.bars)];
    expect(stats.length).toBeGreaterThan(10);
    stats.forEach((stat) => {
      const source = findSource(stat.sourceId);
      expect(source, stat.label).toBeDefined();
      expect(source!.url).toMatch(/^https:\/\//);
      expect(source!.published).toMatch(DATE_PATTERN);
      expect(stat.value).toBeGreaterThan(0);
      expect(stat.value).toBeLessThanOrEqual(100);
    });
  });

  test('jede Quelle wird auf der Seite auch verwendet oder erklärt', () => {
    const used = new Set([...KEY_STATS, ...BAR_GROUPS.flatMap((group) => group.bars)].map((stat) => stat.sourceId));
    // Quellen, die nur im Text (Gründe, Einordnung, FAQ) oder für die Methodik zitiert werden.
    const textOnly = ['bitkom-handwerk-2025', 'ki-index-nrw', 'destatis-gruende-2025', 'destatis-2024', 'destatis-methodik', 'bitkom-ki-2025-09', 'bitkom-digital-2026-03', 'jimdo-2024', 'kfw-fokus-554', 'dihk-2026'];
    SOURCES.forEach((source) => expect(used.has(source.id) || textOnly.includes(source.id), source.id).toBe(true));
  });

  test('hat ein Stand- und Abrufdatum', () => {
    expect(DATEN_STAND.iso).toMatch(ISO_DAY);
    expect(DATEN_STAND.label).toMatch(/\d{4}$/);
  });

  test('formatiert Prozentwerte deutsch', () => {
    expect(formatPercent(51.2)).toBe('51,2');
    expect(formatPercent(57)).toBe('57');
  });

  test('hat 3 bis 4 Fragen und verlinkt keine Landingpages', () => {
    expect(DATEN_FAQS.length).toBeGreaterThanOrEqual(3);
    expect(DATEN_FAQS.length).toBeLessThanOrEqual(4);
    collectHrefs(MEANING).forEach((href) => expect(LANDING_PATHS).not.toContain(href));
  });

  test('beschreibt die Seite als Artikel mit Quellenangaben', () => {
    const nodes = datenSchema()['@graph'] as { '@type': string; citation?: unknown[] }[];
    const article = nodes.find((node) => node['@type'] === 'Article');
    expect(article?.citation).toHaveLength(SOURCES.length);
    expect(nodes.map((node) => node['@type'])).toEqual(expect.arrayContaining(['FAQPage', 'BreadcrumbList']));
  });
});
