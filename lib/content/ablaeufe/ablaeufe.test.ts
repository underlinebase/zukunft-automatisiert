import { describe, expect, test } from 'vitest';
import { ABLAEUFE, ablaeufeByBranche } from './index';
import { ablaufSavings } from './savings';
import { BRANCHEN } from './types';
import { aiPatternHits } from '@/lib/content/style';
import { INDUSTRIES, industryHref } from '@/lib/content/branchen';
import { seoTitle, TITLE_SEPARATOR } from '@/lib/seo/meta';
import { SITE } from '@/lib/content/site';

const TITLE_MAX = 60;
const DESCRIPTION_MAX = 160;

describe('Ablauf-Bibliothek', () => {
  test('rechnet das Beispiel mit 46 Arbeitswochen', () => {
    const result = ablaufSavings({ perWeek: 10, minutesBefore: 20, minutesAfter: 5, hourlyRate: 60, annahme: 'Test' });
    expect(result.minutesPerWeek).toBe(150);
    expect(result.hoursPerYear).toBe(115);
    expect(result.euroPerYear).toBe(6900);
  });

  test('hat eindeutige Slugs und IDs', () => {
    expect(new Set(ABLAEUFE.map((a) => a.slug)).size).toBe(ABLAEUFE.length);
    expect(new Set(ABLAEUFE.map((a) => a.id)).size).toBe(ABLAEUFE.length);
  });

  test('gruppiert nach bekannten Branchen', () => {
    ablaeufeByBranche(ABLAEUFE).forEach((group) => expect(BRANCHEN[group.branche]).toBeDefined());
  });

  test.each(ABLAEUFE.map((a) => [a.slug, a] as const))('%s: vollständig, im Rahmen und ohne KI-Muster', (_slug, a) => {
    const rendered = (() => {
      const title = seoTitle(a.seoTitle ?? a.title);
      return typeof title === 'string' ? `${title}${TITLE_SEPARATOR}${SITE.name}` : title.absolute;
    })();
    expect(rendered.length).toBeLessThanOrEqual(TITLE_MAX);
    expect(a.lead.length).toBeLessThanOrEqual(DESCRIPTION_MAX);
    expect(a.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(a.heute.length).toBeGreaterThanOrEqual(3);
    expect(a.danach.length).toBeGreaterThanOrEqual(3);
    expect(a.faqs.length).toBeGreaterThanOrEqual(2);
    expect(a.beispiel.minutesAfter).toBeLessThan(a.beispiel.minutesBefore);
    const landing = INDUSTRIES.map((industry) => industryHref(industry.slug));
    // Landingpages werden nur vom Startseiten-Slider verlinkt.
    a.related?.forEach((link) => expect(landing).not.toContain(link.href));
    const text = [
      a.title, a.lead, ...a.problem, ...a.heute, ...a.danach, a.mensch, a.ki ?? '', ...a.grenzen,
      a.beispiel.annahme, ...a.faqs.flatMap((faq) => [faq.q, faq.a]), ...(a.related ?? []).map((link) => link.label),
    ].join('\n');
    expect(aiPatternHits(text)).toEqual([]);
  });
});
