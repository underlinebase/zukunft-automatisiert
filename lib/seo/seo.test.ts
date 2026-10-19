import { describe, expect, test } from 'vitest';
import { SITE } from '@/lib/content/site';
import { ARTICLES } from '@/lib/content/articles';
import { isPublished, publishedArticles } from '@/lib/content/publishing';
import { INDUSTRIES } from '@/lib/content/branchen';
import { metaDescription, seoTitle, TITLE_MAX } from './meta';
import { articleSchema, collectionSchema } from './schema';
import { buildLlmsTxt } from './llms';

const BRAND_SUFFIX = ` · ${SITE.name}`;

describe('seoTitle', () => {
  test('keeps the brand suffix when the full title fits', () => {
    expect(seoTitle('Kontakt')).toBe('Kontakt');
  });

  test('drops the brand suffix when the full title would be too long', () => {
    const long = 'Automatisierung für Handwerksbetriebe (SHK, Elektro, Dach)';
    expect(seoTitle(long)).toEqual({ absolute: long });
  });

  test('removes a trailing period from headline-style titles', () => {
    expect(seoTitle('Wo Ihre Woche hingeht.')).toBe('Wo Ihre Woche hingeht');
  });

  test('never produces a rendered title above the limit for short inputs', () => {
    const result = seoTitle('Warum ich meistens n8n einsetze.');
    const rendered = typeof result === 'string' ? result + BRAND_SUFFIX : result.absolute;
    expect(rendered.length).toBeLessThanOrEqual(TITLE_MAX);
  });
});

describe('article titles', () => {
  test('fit into search results', () => {
    ARTICLES.forEach((article) => {
      const result = seoTitle(article.seoTitle ?? article.title);
      const rendered = typeof result === 'string' ? result + BRAND_SUFFIX : result.absolute;
      expect(rendered.length, article.slug).toBeLessThanOrEqual(TITLE_MAX);
    });
  });
});

describe('metaDescription', () => {
  test('returns short texts unchanged', () => {
    expect(metaDescription('Kurzer Text.')).toBe('Kurzer Text.');
  });

  test('cuts long texts at a word boundary with an ellipsis', () => {
    const text = 'Wort '.repeat(60).trim();
    const result = metaDescription(text);
    expect(result.length).toBeLessThanOrEqual(160);
    expect(result.endsWith('…')).toBe(true);
    expect(result).toMatch(/Wort…$/);
  });
});

describe('articleSchema', () => {
  const article = ARTICLES[0];
  const schema = articleSchema(article);

  test('describes the article with author, publisher and ISO date', () => {
    expect(schema['@type']).toBe('BlogPosting');
    expect(schema.headline).toBe(article.title);
    expect(schema.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(schema.author).toEqual({ '@id': `${SITE.url}/#marco-gundlach` });
    expect(schema.mainEntityOfPage).toBe(`${SITE.url}/wissen/${article.slug}`);
  });
});

describe('collectionSchema', () => {
  test('lists every article of the Wissen page', () => {
    const schema = collectionSchema(ARTICLES);
    const list = schema.mainEntity as { itemListElement: { url: string }[] };
    expect(list.itemListElement).toHaveLength(ARTICLES.length);
    expect(list.itemListElement[0].url).toBe(`${SITE.url}/wissen/${ARTICLES[0].slug}`);
  });
});

describe('llms.txt', () => {
  const text = buildLlmsTxt();

  test('starts with the site name as top-level heading', () => {
    expect(text.startsWith(`# ${SITE.name}`)).toBe(true);
  });

  test('links every landing page and every published article with absolute URLs', () => {
    INDUSTRIES.forEach((industry) => expect(text).toContain(`${SITE.url}/${industry.slug}`));
    publishedArticles(ARTICLES).forEach((article) => expect(text).toContain(`${SITE.url}/wissen/${article.slug}`));
  });

  test('leaves out scheduled articles', () => {
    ARTICLES.filter((article) => !isPublished(article)).forEach((article) =>
      expect(text).not.toContain(`/wissen/${article.slug}`),
    );
  });

  test('names the person behind the offer', () => {
    expect(text).toContain(SITE.owner);
  });

  test('links the main page for KI-Beratung', () => {
    expect(text).toContain(`${SITE.url}/ki-beratung`);
  });
});

describe('site URL', () => {
  test('uses the www host that the live domain redirects to', () => {
    expect(SITE.url).toBe('https://www.zukunft-automatisiert.de');
  });
});
