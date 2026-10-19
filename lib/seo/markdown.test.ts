import { describe, expect, test } from 'vitest';
import type { Article } from '@/lib/types';
import type { Ablauf } from '@/lib/content/ablaeufe/types';
import { SITE } from '@/lib/content/site';
import { ARTICLES } from '@/lib/content/articles';
import { isPublished, publishedArticles } from '@/lib/content/publishing';
import { aiPatternHits } from '@/lib/content/style';
import {
  MARKDOWN_CONTENT_TYPE,
  ablaufMarkdown,
  articleMarkdown,
  buildLlmsFullTxt,
  escapeLineStart,
  markdownHref,
  markdownResponse,
  notFoundResponse,
} from './markdown';
import { buildLlmsTxt } from './llms';

const ARTICLE: Article = {
  id: 999,
  slug: 'test-artikel',
  title: 'Ein Testartikel.',
  date: 'Oktober 2026',
  datePublished: '2026-10-01',
  dateModified: '2026-10-10',
  read_minutes: 3,
  category: 'Methodik',
  lead: 'Der Lead des Testartikels.',
  body: [
    { kind: 'p', text: 'Erster Absatz.' },
    { kind: 'h2', text: 'Eine Zwischenüberschrift' },
    { kind: 'q', text: 'Ein Zitat aus dem Text.' },
    { kind: 'p', text: '- kein Listenpunkt' },
  ],
  notes: ['Erste Anmerkung.', 'Zweite Anmerkung.'],
  related: [{ label: 'Kontakt', href: '/kontakt' }],
};

const ABLAUF: Ablauf = {
  id: 999,
  slug: 'test-ablauf',
  branche: 'handwerk',
  themen: ['angebote'],
  title: 'Angebote nachfassen',
  lead: 'Offene Angebote bekommen nach einer Woche eine Erinnerung.',
  datePublished: '2026-10-01',
  problem: ['Heute fasst niemand nach.'],
  heute: ['Liste durchsehen', 'Mail schreiben'],
  danach: ['n8n prüft die Liste', 'Entwurf liegt bereit'],
  mensch: 'Sie lesen den Entwurf und schicken ihn ab.',
  werkzeuge: ['n8n', 'Google Sheets'],
  nutzen: 'mittel',
  aufwand: 'klein',
  beispiel: { perWeek: 10, minutesBefore: 12, minutesAfter: 2, hourlyRate: 60, annahme: 'ein Betrieb mit 10 Angeboten pro Woche' },
  grenzen: ['Die Liste muss gepflegt sein.'],
  faqs: [{ q: 'Geht das auch mit Outlook?', a: 'Ja.' }],
};

describe('markdownHref', () => {
  test('appends .md to the page path', () => {
    expect(markdownHref('/wissen/abc')).toBe('/wissen/abc.md');
  });
});

describe('escapeLineStart', () => {
  test('escapes characters that would start a list, quote or heading', () => {
    expect(escapeLineStart('- Punkt')).toBe('\\- Punkt');
    expect(escapeLineStart('# Titel')).toBe('\\# Titel');
    expect(escapeLineStart('1. Schritt')).toBe('1\\. Schritt');
  });

  test('leaves normal text unchanged', () => {
    expect(escapeLineStart('Normaler Satz - mit Strich.')).toBe('Normaler Satz - mit Strich.');
  });
});

describe('articleMarkdown', () => {
  const md = articleMarkdown(ARTICLE);

  test('starts with the title as top-level heading', () => {
    expect(md.startsWith('# Ein Testartikel.\n')).toBe(true);
  });

  test('names author, dates and the source URL of the HTML page', () => {
    expect(md).toContain(`Autor: ${SITE.owner}, KI-Berater`);
    expect(md).toContain('Veröffentlicht: 2026-10-01');
    expect(md).toContain('Zuletzt überarbeitet: 2026-10-10');
    expect(md).toContain(`Quelle: ${SITE.url}/wissen/test-artikel`);
  });

  test('converts h2 to ## and q to >', () => {
    expect(md).toContain('\n## Eine Zwischenüberschrift\n');
    expect(md).toContain('\n> Ein Zitat aus dem Text.\n');
  });

  test('keeps the lead, escapes list-like paragraphs and lists the notes', () => {
    expect(md).toContain('**Der Lead des Testartikels.**');
    expect(md).toContain('\\- kein Listenpunkt');
    expect(md).toContain('## Anmerkungen\n\n1. Erste Anmerkung.\n2. Zweite Anmerkung.');
  });

  test('links related pages with absolute URLs', () => {
    expect(md).toContain(`- [Kontakt](${SITE.url}/kontakt)`);
  });

  test('leaves out the modified line when there is none', () => {
    expect(articleMarkdown({ ...ARTICLE, dateModified: undefined })).not.toContain('Zuletzt überarbeitet');
  });
});

describe('ablaufMarkdown', () => {
  const md = ablaufMarkdown(ABLAUF);

  test('contains title, branch, steps and the source URL', () => {
    expect(md.startsWith('# Angebote nachfassen\n')).toBe(true);
    expect(md).toContain('Branche: Handwerk');
    expect(md).toContain('1. Liste durchsehen\n2. Mail schreiben');
    expect(md).toContain(`Quelle: ${SITE.url}/ablaeufe/test-ablauf`);
  });

  test('says that no AI is needed when the ki field is missing', () => {
    expect(md).toContain('## Braucht es dafür KI?');
    expect(ablaufMarkdown({ ...ABLAUF, ki: 'KI schreibt den Entwurf.' })).toContain('## Wo KI dabei hilft\n\nKI schreibt den Entwurf.');
  });

  test('shows the calculation as an assumption', () => {
    expect(md).toContain('Annahme: ein Betrieb mit 10 Angeboten pro Woche');
    expect(md).toContain('12 statt 2 Minuten');
  });

  test('renders FAQs as questions with answers', () => {
    expect(md).toContain('### Geht das auch mit Outlook?\n\nJa.');
  });
});

describe('real articles as Markdown', () => {
  test('every published article converts with title and without empty fields', () => {
    publishedArticles(ARTICLES).forEach((article) => {
      const md = articleMarkdown(article);
      expect(md, article.slug).toContain(`# ${article.title}`);
      expect(md, article.slug).not.toContain('undefined');
    });
  });
});

describe('llms-full.txt', () => {
  const text = buildLlmsFullTxt([ARTICLE], [ABLAUF]);

  test('starts with a heading and contains every document', () => {
    expect(text.startsWith(`# ${SITE.name}`)).toBe(true);
    expect(text).toContain('# Ein Testartikel.');
    expect(text).toContain('# Angebote nachfassen');
  });

  test('separates documents with a horizontal rule', () => {
    expect(text.split('\n---\n')).toHaveLength(3);
  });
});

describe('llms.txt links to Markdown versions', () => {
  const text = buildLlmsTxt();

  test('points published articles to their .md file', () => {
    publishedArticles(ARTICLES).forEach((article) => expect(text).toContain(`${SITE.url}/wissen/${article.slug}.md)`));
  });

  test('leaves out scheduled articles and links the full text file', () => {
    ARTICLES.filter((article) => !isPublished(article)).forEach((article) =>
      expect(text).not.toContain(`/wissen/${article.slug}.md`),
    );
    expect(text).toContain(`${SITE.url}/llms-full.txt`);
  });
});

describe('responses', () => {
  test('markdown response sets content type and canonical link header', () => {
    const response = markdownResponse('# Titel\n', `${SITE.url}/wissen/x`);
    expect(response.headers.get('Content-Type')).toBe(MARKDOWN_CONTENT_TYPE);
    expect(response.headers.get('Link')).toBe(`<${SITE.url}/wissen/x>; rel="canonical"`);
  });

  test('not found response has status 404', () => {
    expect(notFoundResponse().status).toBe(404);
  });
});

describe('style of the added Markdown texts', () => {
  test('labels and fixed sentences contain no AI patterns', () => {
    const fixed = [ablaufMarkdown(ABLAUF), articleMarkdown(ARTICLE), buildLlmsFullTxt([], [])].join('\n');
    expect(aiPatternHits(fixed)).toEqual([]);
  });
});
