import { describe, expect, test } from 'vitest';
import { INDUSTRIES, INDUSTRY_LINKS, industryHref } from './branchen';
import { FAQS, LANDING_GENERAL_FAQS } from './home';
import { ARTICLES } from './articles';
import { isPublished, todayIso } from './publishing';
import { aiPatternHits } from './style';
import * as KI_BERATUNG from './ki-beratung';
import { SITE } from './site';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/seo/schema';
import { seoTitle, TITLE_SEPARATOR } from '@/lib/seo/meta';

const RESERVED_PATHS = ['ueber-mich', 'kontakt', 'wissen', 'impressum', 'datenschutz', 'api', 'ki-beratung', 'ablaeufe', 'garantie', 'automatisierungs-check', 'ki-im-kleinbetrieb', 'vorlagen'];
const SEO_TITLE_MAX = 60;
const SEO_DESCRIPTION_MAX = 160;

describe('industries', () => {
  test('use unique slugs that do not clash with other pages', () => {
    const slugs = INDUSTRIES.map((industry) => industry.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    slugs.forEach((slug) => expect(RESERVED_PATHS).not.toContain(slug));
  });

  test('have SEO texts within the usual length limits', () => {
    INDUSTRIES.forEach((industry) => {
      expect(industry.seo.title.length).toBeLessThanOrEqual(SEO_TITLE_MAX);
      expect(industry.seo.description.length).toBeLessThanOrEqual(SEO_DESCRIPTION_MAX);
      expect(industry.hero.kicker.length).toBeGreaterThan(0);
    });
  });

  test('include the landing pages for agencies and coaches', () => {
    const slugs = INDUSTRIES.map((industry) => industry.slug);
    expect(slugs).toEqual(expect.arrayContaining(['agenturen', 'coaches']));
  });

  test('have their own FAQ entries', () => {
    INDUSTRIES.forEach((industry) => expect(industry.faqs.length).toBeGreaterThanOrEqual(3));
  });

  test('link to top-level landing pages', () => {
    expect(industryHref('steuerberater')).toBe('/steuerberater');
    expect(INDUSTRY_LINKS.map((link) => link.href)).toEqual(INDUSTRIES.map((industry) => `/${industry.slug}`));
  });
});

describe('landing FAQs', () => {
  test('resolve every selected general question', () => {
    expect(LANDING_GENERAL_FAQS.length).toBeGreaterThan(0);
    LANDING_GENERAL_FAQS.forEach((faq) => expect(FAQS).toContain(faq));
  });

  test('contain no placeholders for prices', () => {
    [...FAQS, ...INDUSTRIES.flatMap((industry) => industry.faqs)].forEach((faq) => {
      expect(faq.a).not.toContain('[PREIS]');
    });
  });
});

describe('structured data', () => {
  test('numbers breadcrumb items from one', () => {
    const schema = breadcrumbSchema([
      { name: 'Start', path: '/' },
      { name: 'Handwerk', path: '/handwerk' },
    ]);
    const items = schema.itemListElement as { position: number; item: string }[];
    expect(items.map((item) => item.position)).toEqual([1, 2]);
    expect(items[1].item).toBe('https://www.zukunft-automatisiert.de/handwerk');
  });

  test('mirrors the visible FAQ texts', () => {
    const schema = faqSchema(FAQS.slice(0, 2));
    const entities = schema.mainEntity as { name: string; acceptedAnswer: { text: string } }[];
    expect(entities[0].name).toBe(FAQS[0].q);
    expect(entities[0].acceptedAnswer.text).toBe(FAQS[0].a);
  });

  test('describes the service of a landing page', () => {
    const industry = INDUSTRIES[0];
    const schema = serviceSchema(industry, industryHref(industry.slug));
    expect(schema.serviceType).toBe(industry.seo.serviceType);
    expect(schema.url).toBe(`https://www.zukunft-automatisiert.de/${industry.slug}`);
  });
});

describe('Wissen-Artikel: keine typischen KI-Muster', () => {
  test.each(ARTICLES.map((article) => [article.slug, article] as const))('%s', (_slug, article) => {
    const text = [
      article.title,
      article.seoTitle ?? '',
      article.seoDescription ?? '',
      article.lead,
      ...article.body.map((block) => block.text),
      ...article.notes,
    ].join('\n');
    expect(aiPatternHits(text)).toEqual([]);
  });

  test('have unique slugs and ids', () => {
    expect(new Set(ARTICLES.map((article) => article.slug)).size).toBe(ARTICLES.length);
    expect(new Set(ARTICLES.map((article) => article.id)).size).toBe(ARTICLES.length);
  });

  test('link only to articles that are already out and never to landing pages', () => {
    const bySlug = new Map(ARTICLES.map((article) => [article.slug, article]));
    const landingPaths = INDUSTRIES.map((industry) => industryHref(industry.slug));
    ARTICLES.forEach((article) => {
      article.related?.forEach((link) => {
        // Landingpages werden nur vom Startseiten-Slider verlinkt.
        expect(landingPaths).not.toContain(link.href);
        if (!link.href.startsWith('/wissen/')) return;
        const target = bySlug.get(link.href.replace('/wissen/', ''));
        expect(target, `${article.slug} → ${link.href}`).toBeDefined();
        expect(target!.datePublished <= article.datePublished, `${article.slug} → ${link.href}`).toBe(true);
      });
    });
  });

  test('have valid dates and internal links', () => {
    ARTICLES.forEach((article) => {
      expect(article.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      if (article.dateModified) expect(article.dateModified >= article.datePublished).toBe(true);
      article.related?.forEach((link) => expect(link.href).toMatch(/^\/[a-z0-9/#-]*$/));
    });
  });
});

describe('Landingpages: keine typischen KI-Muster', () => {
  test.each(INDUSTRIES.map((industry) => [industry.slug, industry] as const))('%s', (_slug, industry) => {
    const text = [
      industry.teaser,
      industry.hero.title,
      industry.hero.lead,
      ...industry.heroBenefits,
      ...industry.routines.flatMap((routine) => [routine.title, routine.text]),
      ...industry.scenes.flatMap((scene) => [scene.title, scene.text]),
      ...industry.routineDetails.flatMap((detail) => [detail.title, detail.today, detail.after]),
      ...industry.faqs.flatMap((faq) => [faq.q, faq.a]),
      industry.example.title,
      ...industry.example.steps.flatMap((step) => [step.text, step.afterText ?? '', step.keeps ?? '']),
    ].join('\n');
    expect(aiPatternHits(text)).toEqual([]);
  });
});

/** Sammelt alle sichtbaren Texte eines Inhaltsmoduls ein; Pfade (beginnen mit „/“) zählen nicht dazu. */
function collectTexts(value: unknown): string[] {
  if (typeof value === 'string') return value.startsWith('/') ? [] : [value];
  if (Array.isArray(value)) return value.flatMap(collectTexts);
  if (value && typeof value === 'object') return Object.values(value).flatMap(collectTexts);
  return [];
}

describe('KI-Beratung: keine typischen KI-Muster', () => {
  test('über alle Texte der Seite', () => {
    const texts = collectTexts(KI_BERATUNG);
    expect(texts.length).toBeGreaterThan(20);
    expect(aiPatternHits(texts.join('\n'))).toEqual([]);
  });

  test('Titel und Beschreibung passen in die Suchergebnisse', () => {
    const result = seoTitle(KI_BERATUNG.KI_BERATUNG_SEO.title);
    const rendered = typeof result === 'string' ? `${result}${TITLE_SEPARATOR}${SITE.name}` : result.absolute;
    expect(rendered.length).toBeLessThanOrEqual(SEO_TITLE_MAX);
    expect(KI_BERATUNG.KI_BERATUNG_SEO.description.length).toBeLessThanOrEqual(SEO_DESCRIPTION_MAX);
    expect(KI_BERATUNG.KI_BERATUNG_SEO.title).toContain('KI-Berater');
  });

  test('nennt die Branchen ohne Links und spiegelt die FAQ im Schema', () => {
    // Landingpages werden nur vom Startseiten-Slider verlinkt.
    expect(KI_BERATUNG.KI_BERATUNG_SERVICES.examples.map((example) => example.label)).toHaveLength(INDUSTRIES.length);
    const schema = faqSchema(KI_BERATUNG.KI_BERATUNG_FAQS);
    const entities = schema.mainEntity as { name: string; acceptedAnswer: { text: string } }[];
    expect(entities.map((entity) => entity.name)).toEqual(KI_BERATUNG.KI_BERATUNG_FAQS.map((faq) => faq.q));
    expect(entities.map((entity) => entity.acceptedAnswer.text)).toEqual(KI_BERATUNG.KI_BERATUNG_FAQS.map((faq) => faq.a));
  });
});

describe('zeitgesteuerte Veröffentlichung', () => {
  test('uses the calendar day in Germany', () => {
    // 23:30 UTC am 19.10. ist in Deutschland schon der 20.10.
    expect(todayIso(new Date('2026-10-19T23:30:00Z'))).toBe('2026-10-20');
  });

  test('shows an article from its publication day on', () => {
    const article = { datePublished: '2026-10-22' };
    expect(isPublished(article, new Date('2026-10-21T12:00:00Z'))).toBe(false);
    expect(isPublished(article, new Date('2026-10-22T05:00:00Z'))).toBe(true);
  });
});
