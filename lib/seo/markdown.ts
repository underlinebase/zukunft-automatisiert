// Markdown-Fassungen der Wissen-Artikel und Abläufe für KI-Crawler (GEO).
// Konvention nach llmstxt.org: dieselbe Adresse wie die HTML-Seite, mit angehängtem „.md“.
// Reine Funktionen ohne Seiteneffekte, damit sie sich ohne Server testen lassen.

import type { Article, ArticleBlock, ArticleLink } from '@/lib/types';
import type { Ablauf } from '@/lib/content/ablaeufe/types';
import { BRANCHEN, STUFEN } from '@/lib/content/ablaeufe/types';
import { ablaufSavings } from '@/lib/content/ablaeufe/savings';
import { formatEuro, formatHours } from '@/lib/calculator';
import { SITE } from '@/lib/content/site';

export const MARKDOWN_CONTENT_TYPE = 'text/markdown; charset=utf-8';
export const MARKDOWN_EXTENSION = '.md';

const AUTHOR_LINE = `${SITE.owner}, KI-Berater („der KI-Realist“)`;
const DOCUMENT_SEPARATOR = '\n\n---\n\n';
/** Gleicher Satz wie auf der Ablaufseite, wenn ein Ablauf ohne KI auskommt. */
const NO_AI_TEXT = 'Nein. Dieser Ablauf folgt festen Regeln. Das ist günstiger, schneller und leichter zu warten als eine KI-Lösung.';

/** Pfad der Markdown-Fassung zu einer HTML-Seite, z. B. /wissen/x → /wissen/x.md. */
export function markdownHref(path: string): string {
  return `${path}${MARKDOWN_EXTENSION}`;
}

function absoluteUrl(href: string): string {
  return href.startsWith('http') ? href : `${SITE.url}${href}`;
}

/** Fließtext darf am Zeilenanfang nicht versehentlich als Markdown-Steuerzeichen gelesen werden. */
export function escapeLineStart(text: string): string {
  return text.replace(/^(\s*)([#>+\-*])(\s)/, '$1\\$2$3').replace(/^(\s*\d+)([.)])(\s)/, '$1\\$2$3');
}

function blockToMarkdown(block: ArticleBlock): string {
  if (block.kind === 'h2') return `## ${block.text}`;
  if (block.kind === 'q') return `> ${block.text}`;
  return escapeLineStart(block.text);
}

function metaLines(lines: readonly (string | null)[]): string {
  return lines.filter((line): line is string => line !== null).map((line) => `- ${line}`).join('\n');
}

function relatedSection(related: readonly ArticleLink[] | undefined): string[] {
  if (!related || related.length === 0) return [];
  return ['## Passend dazu', related.map((link) => `- [${link.label}](${absoluteUrl(link.href)})`).join('\n')];
}

function join(parts: readonly string[]): string {
  return `${parts.filter((part) => part.length > 0).join('\n\n')}\n`;
}

export function articleUrl(article: Pick<Article, 'slug'>): string {
  return `${SITE.url}/wissen/${article.slug}`;
}

export function articleMarkdown(article: Article): string {
  const meta = metaLines([
    `Autor: ${AUTHOR_LINE}`,
    `Veröffentlicht: ${article.datePublished}`,
    article.dateModified ? `Zuletzt überarbeitet: ${article.dateModified}` : null,
    `Kategorie: ${article.category}`,
    `Lesezeit: ${article.read_minutes} Minuten`,
    `Quelle: ${articleUrl(article)}`,
  ]);
  const notes =
    article.notes.length > 0
      ? ['## Anmerkungen', article.notes.map((note, index) => `${index + 1}. ${note}`).join('\n')]
      : [];
  return join([
    `# ${article.title}`,
    meta,
    `**${article.lead}**`,
    ...article.body.map(blockToMarkdown),
    ...notes,
    ...relatedSection(article.related),
  ]);
}

export function ablaufUrl(ablauf: Pick<Ablauf, 'slug'>): string {
  return `${SITE.url}/ablaeufe/${ablauf.slug}`;
}

function numbered(items: readonly string[]): string {
  return items.map((item, index) => `${index + 1}. ${item}`).join('\n');
}

function ablaufCalculation(ablauf: Ablauf): string {
  const { beispiel } = ablauf;
  const savings = ablaufSavings(beispiel);
  return [
    `Annahme: ${beispiel.annahme}`,
    '',
    `- Pro Vorgang: ${beispiel.minutesBefore} statt ${beispiel.minutesAfter} Minuten`,
    `- Vorgänge pro Woche: ${beispiel.perWeek}`,
    `- Gespart pro Woche: ${formatHours(savings.minutesPerWeek)}`,
    `- Wert im Jahr: ${formatEuro(savings.euroPerYear)} bei ${formatEuro(beispiel.hourlyRate)} pro Stunde und rund 46 Arbeitswochen`,
  ].join('\n');
}

export function ablaufMarkdown(ablauf: Ablauf): string {
  const meta = metaLines([
    `Branche: ${BRANCHEN[ablauf.branche]}`,
    `Autor: ${AUTHOR_LINE}`,
    `Veröffentlicht: ${ablauf.datePublished}`,
    `Werkzeuge: ${ablauf.werkzeuge.join(', ')}`,
    `Wirkung: ${STUFEN[ablauf.nutzen]}, Aufwand: ${STUFEN[ablauf.aufwand]}`,
    `Quelle: ${ablaufUrl(ablauf)}`,
  ]);
  const faqs = ablauf.faqs.length > 0 ? ['## Häufige Fragen', ...ablauf.faqs.map((faq) => `### ${faq.q}\n\n${escapeLineStart(faq.a)}`)] : [];
  return join([
    `# ${ablauf.title}`,
    meta,
    `**${ablauf.lead}**`,
    '## So läuft es heute',
    ...ablauf.problem.map(escapeLineStart),
    `Schritte heute:\n\n${numbered(ablauf.heute)}`,
    `Schritte mit Automatisierung:\n\n${numbered(ablauf.danach)}`,
    '## Was Sie weiter selbst machen',
    escapeLineStart(ablauf.mensch),
    ablauf.ki ? '## Wo KI dabei hilft' : '## Braucht es dafür KI?',
    escapeLineStart(ablauf.ki ?? NO_AI_TEXT),
    '## Rechenbeispiel',
    ablaufCalculation(ablauf),
    '## Grenzen und Voraussetzungen',
    ablauf.grenzen.map((item) => `- ${item}`).join('\n'),
    ...faqs,
    ...relatedSection(ablauf.related),
  ]);
}

/** Inhalt der /llms-full.txt: alle veröffentlichten Artikel und Abläufe im Volltext. */
export function buildLlmsFullTxt(articles: readonly Article[], ablaeufe: readonly Ablauf[]): string {
  const intro = [
    `# ${SITE.name}: alle Inhalte im Volltext`,
    '',
    `> Wissen-Artikel und Abläufe von ${SITE.owner}, KI-Berater für kleine Betriebe in Deutschland. Jeder Abschnitt nennt seine Quelle. Die kompakte Übersicht steht unter ${SITE.url}/llms.txt.`,
  ].join('\n');
  const documents = [...articles.map(articleMarkdown), ...ablaeufe.map(ablaufMarkdown)].map((doc) => doc.trimEnd());
  return `${[intro, ...documents].join(DOCUMENT_SEPARATOR)}\n`;
}

/** Antwort mit Markdown-Inhalt. Der Link-Header verweist Suchmaschinen auf die HTML-Seite als Original. */
export function markdownResponse(body: string, canonicalUrl: string): Response {
  return new Response(body, {
    headers: {
      'Content-Type': MARKDOWN_CONTENT_TYPE,
      Link: `<${canonicalUrl}>; rel="canonical"`,
    },
  });
}

export function notFoundResponse(): Response {
  return new Response('Nicht gefunden.\n', { status: 404, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
