import { describe, expect, test } from 'vitest';
import { SITE } from '@/lib/content/site';
import { ARTICLES } from '@/lib/content/articles';
import { isPublished, publishedArticles } from '@/lib/content/publishing';
import { INDUSTRIES } from '@/lib/content/branchen';
import { EXTRA_PAGES, pageSeoTitle } from '@/lib/content/pages';
import robots from '@/app/robots';
import { DEFAULT_OG_IMAGE, DESCRIPTION_MAX, metaDescription, pageMetadata, renderedTitle, seoTitle, TITLE_MAX } from './meta';
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

describe('article descriptions', () => {
  const SEO_DESCRIPTION_MIN = 110;

  test('own seoDescription fits between 110 and 160 characters', () => {
    ARTICLES.filter((article) => article.seoDescription).forEach((article) => {
      const length = article.seoDescription!.length;
      expect(length, article.slug).toBeGreaterThanOrEqual(SEO_DESCRIPTION_MIN);
      expect(length, article.slug).toBeLessThanOrEqual(DESCRIPTION_MAX);
    });
  });

  test('without seoDescription the lead is not cut off', () => {
    ARTICLES.filter((article) => !article.seoDescription).forEach((article) => {
      expect(metaDescription(article.lead).endsWith('…'), article.slug).toBe(false);
    });
  });
});

describe('extra pages', () => {
  test('titles fit into search results', () => {
    EXTRA_PAGES.forEach((page) => {
      expect(renderedTitle(pageSeoTitle(page)).length, page.path).toBeLessThanOrEqual(TITLE_MAX);
    });
  });

  test('descriptions stay below the cut-off', () => {
    EXTRA_PAGES.forEach((page) => expect(page.description.length, page.path).toBeLessThanOrEqual(DESCRIPTION_MAX));
  });

  test('use a search title instead of the bare navigation name where it is too short', () => {
    const titles = new Map(EXTRA_PAGES.map((page) => [page.path, pageSeoTitle(page)]));
    expect(titles.get('/automatisierungs-check')).toBe('Automatisierungs-Check: 10 Fragen, 3 Minuten');
    expect(titles.get('/ki-im-kleinbetrieb')).toBe('KI in kleinen Unternehmen 2026: Zahlen und Studien');
  });
});

describe('pageMetadata', () => {
  const input = {
    title: 'Kontakt: Ablauf schildern oder 30 Minuten sprechen',
    description: 'Schildern Sie mir Ihren Ablauf in drei Sätzen.',
    path: '/kontakt',
  };

  test('sets title, description and canonical of the page', () => {
    const meta = pageMetadata(input);
    expect(meta.title).toEqual(seoTitle(input.title));
    expect(meta.description).toBe(input.description);
    expect(meta.alternates?.canonical).toBe('/kontakt');
  });

  test('gives every page its own Open Graph data instead of the homepage values', () => {
    const og = pageMetadata(input).openGraph as Record<string, unknown>;
    expect(og.url).toBe('/kontakt');
    expect(og.title).toBe(input.title);
    expect(og.description).toBe(input.description);
    expect(og.type).toBe('website');
    expect(og.locale).toBe('de_DE');
    expect(og.siteName).toBe(SITE.name);
    expect(og.images).toEqual([DEFAULT_OG_IMAGE]);
  });

  test('mirrors title and description for Twitter', () => {
    const twitter = pageMetadata(input).twitter as Record<string, unknown>;
    expect(twitter).toEqual({ card: 'summary_large_image', title: input.title, description: input.description });
  });

  test('uses the headline for shared links when given and drops a trailing period otherwise', () => {
    expect((pageMetadata({ ...input, ogTitle: 'Schildern Sie mir Ihren Ablauf.' }).openGraph as { title: string }).title).toBe(
      'Schildern Sie mir Ihren Ablauf.',
    );
    expect((pageMetadata({ ...input, title: 'Wo Ihre Woche hingeht.' }).openGraph as { title: string }).title).toBe(
      'Wo Ihre Woche hingeht',
    );
  });

  test('leaves images out when the route has its own opengraph-image file', () => {
    const og = pageMetadata({ ...input, images: 'route' }).openGraph as Record<string, unknown>;
    expect(Object.hasOwn(og, 'images')).toBe(false);
  });

  test('adds article fields and type for articles', () => {
    const og = pageMetadata({
      ...input,
      article: { publishedTime: '2026-10-15', authors: [SITE.owner], section: 'Methodik' },
    }).openGraph as Record<string, unknown>;
    expect(og.type).toBe('article');
    expect(og.publishedTime).toBe('2026-10-15');
    expect(og.authors).toEqual([SITE.owner]);
    expect(og.section).toBe('Methodik');
  });
});

describe('robots.txt', () => {
  const result = robots();
  const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
  const ruleFor = (agent: string) => rules.find((rule) => rule.userAgent === agent);

  test('keeps the general rule and the sitemap', () => {
    expect(ruleFor('*')).toEqual({ userAgent: '*', allow: '/', disallow: ['/api/'] });
    expect(result.sitemap).toBe(`${SITE.url}/sitemap.xml`);
  });

  test.each([
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'PerplexityBot',
    'Perplexity-User',
    'ClaudeBot',
    'Claude-SearchBot',
    'Claude-User',
    'Google-Extended',
    'Applebot-Extended',
    'CCBot',
    'Bingbot',
    'Googlebot',
  ])('allows %s explicitly, except the API', (agent) => {
    expect(ruleFor(agent)).toEqual({ userAgent: agent, allow: '/', disallow: ['/api/'] });
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
    expect(schema.mainEntityOfPage).toEqual({ '@id': `${SITE.url}/wissen/${article.slug}#seite` });
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
