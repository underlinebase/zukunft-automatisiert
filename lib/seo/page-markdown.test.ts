import { describe, expect, test } from 'vitest';
import nextConfig from '@/next.config';
import { GET } from '@/app/md/[page]/route';
import { SITE } from '@/lib/content/site';
import { INDUSTRIES, industryHref } from '@/lib/content/branchen';
import { KI_BERATUNG_FAQS, KI_BERATUNG_HERO } from '@/lib/content/ki-beratung';
import { GARANTIE_FAQS, GARANTIE_HERO } from '@/lib/content/garantie';
import { ABOUT_PAGE, STATIONS } from '@/lib/content/about';
import { DATEN_HERO, SOURCES } from '@/lib/content/daten';
import { aiPatternHits } from '@/lib/content/style';
import { MARKDOWN_CONTENT_TYPE, buildLlmsFullTxt } from './markdown';
import { buildLlmsTxt } from './llms';
import {
  MARKDOWN_PAGES,
  datenMarkdown,
  findMarkdownPage,
  garantieMarkdown,
  hasMarkdownPage,
  kiBeratungMarkdown,
  listedMarkdownPages,
  ueberMichMarkdown,
} from './page-markdown';

const PILOT_PRICE = '1.999 €';

describe('Markdown-Fassungen der Hauptseiten', () => {
  test.each(MARKDOWN_PAGES.map((page) => [page.path, page] as const))('%s hat H1, Quelle und keine leeren Felder', (path, page) => {
    const md = page.build();
    expect(md.startsWith('# ')).toBe(true);
    expect(md.match(/^# /gm)).toHaveLength(1);
    expect(md).toContain(`Quelle: ${SITE.url}${path}`);
    expect(md).not.toMatch(/undefined|\[object Object\]|null/);
    expect(md.endsWith('\n')).toBe(true);
  });

  test.each(MARKDOWN_PAGES.map((page) => [page.path, page] as const))('%s verlinkt keine Landingpage und hat keine Gedankenstriche', (_path, page) => {
    const md = page.build();
    INDUSTRIES.forEach((industry) => expect(md).not.toContain(`${SITE.url}${industryHref(industry.slug)})`));
    expect(md).not.toContain('—');
  });

  test('Texte und Beschriftungen enthalten keine KI-Muster', () => {
    const texts = [kiBeratungMarkdown(), garantieMarkdown()].join('\n');
    expect(aiPatternHits(texts)).toEqual([]);
    // Quellentitel werden zitiert, die Vita-Texte stammen unverändert aus about.ts: beide hier ausgenommen.
    const daten = SOURCES.reduce((md, source) => md.replace(source.title, '').replace(source.url, ''), datenMarkdown());
    expect(aiPatternHits(daten)).toEqual([]);
    const aboutTexts = [...ABOUT_PAGE.essay, ...STATIONS.map((station) => station.text)];
    const about = aboutTexts.reduce((md, text) => md.replace(text, ''), ueberMichMarkdown());
    expect(aiPatternHits(about)).toEqual([]);
  });

  test('/ki-beratung enthält Titel, Pilotpreis und alle Fragen', () => {
    const md = kiBeratungMarkdown();
    expect(md).toContain(`# ${KI_BERATUNG_HERO.title}`);
    expect(md).toContain(PILOT_PRICE);
    KI_BERATUNG_FAQS.forEach((faq) => expect(md).toContain(`### ${faq.q}`));
  });

  test('/garantie enthält Titel und alle Fragen', () => {
    const md = garantieMarkdown();
    expect(md).toContain(`# ${GARANTIE_HERO.title}`);
    GARANTIE_FAQS.forEach((faq) => expect(md).toContain(`### ${faq.q}`));
  });

  test('/ueber-mich enthält Titel und alle Stationen', () => {
    const md = ueberMichMarkdown();
    expect(md).toContain(`# ${ABOUT_PAGE.title}`);
    STATIONS.forEach((station) => expect(md).toContain(station.role));
  });

  test('/ki-im-kleinbetrieb enthält Titel, Stand und jede Quelle mit Link', () => {
    const md = datenMarkdown();
    expect(md).toContain(`# ${DATEN_HERO.title}`);
    expect(md).toContain('Stand: ');
    SOURCES.forEach((source) => expect(md).toContain(`](${source.url})`));
  });
});

describe('Verzeichnis der Hauptseiten', () => {
  test('findet Seiten über den Pfad ohne Schrägstrich', () => {
    expect(findMarkdownPage('garantie')?.path).toBe('/garantie');
    expect(findMarkdownPage('wissen')).toBeUndefined();
  });

  test('jede Seite hat einen Rewrite von /<seite>.md auf die Route', async () => {
    const rewrites = await nextConfig.rewrites?.();
    const list = Array.isArray(rewrites) ? rewrites : [];
    MARKDOWN_PAGES.forEach((page) =>
      expect(list).toContainEqual({ source: `${page.path}.md`, destination: `/md${page.path}` }),
    );
  });
});

describe('Route /md/[page]', () => {
  test('liefert Markdown mit kanonischem Link auf die HTML-Seite', async () => {
    const response = await GET(new Request(`${SITE.url}/md/ki-beratung`), { params: Promise.resolve({ page: 'ki-beratung' }) });
    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe(MARKDOWN_CONTENT_TYPE);
    expect(response.headers.get('Link')).toBe(`<${SITE.url}/ki-beratung>; rel="canonical"`);
    expect(await response.text()).toContain(`# ${KI_BERATUNG_HERO.title}`);
  });

  test('antwortet bei unbekannten Seiten mit 404', async () => {
    const response = await GET(new Request(`${SITE.url}/md/kontakt`), { params: Promise.resolve({ page: 'kontakt' }) });
    expect(response.status).toBe(404);
  });
});

describe('llms.txt und llms-full.txt', () => {
  test('llms.txt verlinkt die Markdown-Fassung jeder gelisteten Hauptseite', () => {
    const text = buildLlmsTxt();
    listedMarkdownPages().forEach((page) => {
      expect(hasMarkdownPage(page.path)).toBe(true);
      expect(text).toContain(`(${SITE.url}${page.path}.md)`);
    });
  });

  test('llms.txt lässt Kontakt und Startseite auf der HTML-Fassung', () => {
    const text = buildLlmsTxt();
    expect(text).toContain(`(${SITE.url}/kontakt)`);
    expect(text).toContain(`(${SITE.url}/)`);
  });

  test('llms-full.txt stellt die Hauptseiten an den Anfang', () => {
    const pages = listedMarkdownPages().map((page) => page.build());
    const text = buildLlmsFullTxt([], [], pages);
    const documents = text.split('\n\n---\n\n');
    expect(documents).toHaveLength(pages.length + 1);
    expect(documents[1]).toContain(`# ${KI_BERATUNG_HERO.title}`);
  });
});
