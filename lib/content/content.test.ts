import { describe, expect, test } from 'vitest';
import { INDUSTRIES, INDUSTRY_LINKS, industryHref } from './branchen';
import { FAQS, LANDING_GENERAL_FAQS } from './home';
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
