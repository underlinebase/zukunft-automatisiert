import { describe, expect, test } from 'vitest';
import { INDUSTRIES, INDUSTRY_LINKS, industryHref } from './branchen';
import { FAQS, LANDING_GENERAL_FAQS } from './home';
import { ARTICLES } from './articles';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/seo/schema';

const RESERVED_PATHS = ['ueber-mich', 'kontakt', 'wissen', 'impressum', 'datenschutz', 'api'];
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
    expect(items[1].item).toBe('https://zukunft-automatisiert.de/handwerk');
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
    expect(schema.url).toBe(`https://zukunft-automatisiert.de/${industry.slug}`);
  });
});

// Quelle: Wikipedia „Anzeichen für KI-generierte Inhalte“ und die Stilregeln aus dem Briefing.
const FORBIDDEN: RegExp[] = [
  /—/,
  /\bnahtlos/i, /ganzheitlich/i, /holistisch/i, /maßgeschneidert/i, /essenziell/i, /\bzentral/i,
  /tiefgreifend/i, /transformativ/i, /optimier/i, /\bnutz(e|en|t|te|ten)?\b/i, /ermöglich/i, /landschaft/i,
  /in der heutigen/i, /es ist wichtig/i, /zusammenfassend/i, /abschließend/i, /tauchen wir/i,
  /kein geheimnis/i, /nicht nur\b/i, /darüber hinaus/i, /\bzudem\b/i, /des weiteren/i, /\brobust/i,
  /umfassend/i, /maximier/i, /\bförder/i, /entscheidend/i, /bahnbrechend/i, /nächste level/i, /unterm strich/i,
];

function aiPatternHits(text: string): string[] {
  return FORBIDDEN.filter((pattern) => pattern.test(text)).map(String);
}

describe('Wissen-Artikel: keine typischen KI-Muster', () => {
  test.each(ARTICLES.map((article) => [article.slug, article] as const))('%s', (_slug, article) => {
    const text = [article.title, article.lead, ...article.body.map((block) => block.text), ...article.notes].join('\n');
    expect(aiPatternHits(text)).toEqual([]);
  });

  test('have unique slugs', () => {
    expect(new Set(ARTICLES.map((article) => article.slug)).size).toBe(ARTICLES.length);
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
