// Inhalt der /llms.txt: eine kompakte, maschinenlesbare Zusammenfassung für KI-Assistenten
// (Format nach llmstxt.org). Wird aus denselben Inhalten erzeugt wie die Seiten, damit nichts auseinanderläuft.
// Hauptseiten mit Markdown-Fassung, Artikel und Abläufe verlinken nach llmstxt.org-Konvention auf ihre Markdown-Fassung (Seitenadresse plus „.md“).

import { SITE } from '@/lib/content/site';
import { INDUSTRIES, industryHref } from '@/lib/content/branchen';
import { ARTICLES } from '@/lib/content/articles';
import { publishedArticles } from '@/lib/content/publishing';
import { listedPages } from '@/lib/content/pages';
import { BRANCHEN } from '@/lib/content/ablaeufe/types';
import { ablaufHref, publishedAblaeufe } from '@/lib/content/ablaeufe';
import { EXPERIENCE, FACTS, FAQS, GUARANTEE, WEEKS } from '@/lib/content/home';
import { KI_BERATUNG_PATH, KI_BERATUNG_SEO } from '@/lib/content/ki-beratung';
import { markdownHref } from './markdown';
import { ABOUT_PATH, hasMarkdownPage } from './page-markdown';

function link(title: string, path: string, note?: string): string {
  return `- [${title}](${SITE.url}${path})${note ? `: ${note}` : ''}`;
}

/** Hauptseiten mit Markdown-Fassung verlinken auf die .md-Datei (llmstxt.org), alle anderen auf die HTML-Seite. */
function pageLink(title: string, path: string, note?: string): string {
  return link(title, hasMarkdownPage(path) ? markdownHref(path) : path, note);
}

function section(title: string, lines: string[]): string {
  return [`## ${title}`, '', ...lines].join('\n');
}

export function buildLlmsTxt(): string {
  const intro = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.owner}, der KI-Realist, automatisiert für Inhaber kleiner Betriebe in Deutschland den Ablauf, der jede Woche am meisten Zeit kostet. Ein Ablauf, 4 Wochen, Festpreis. Läuft der vereinbarte Ablauf danach nicht, bessert er ohne Aufpreis nach. Was über den vereinbarten Umfang hinausgeht, wird nach Aufwand angeboten.`,
  ].join('\n');

  const person = section(`Über ${SITE.owner}`, [
    `- Seit über 14 Jahren Leitung von Digitalisierungsprojekten, heute Automatisierung für Inhaber. Sagt offen, wo KI hilft und wo nicht.`,
    `- Frühere Projekte als IT-Projektleiter: ${EXPERIENCE.companies.join(', ')}. Das sind keine Kunden dieses Angebots.`,
    `- Zertifikate: ${EXPERIENCE.certificates.join('; ')}.`,
    `- Arbeitet als KI-Berater remote für Betriebe in ganz Deutschland, meist per Video, bei Bedarf vor Ort.`,
    `- Kontakt: ${SITE.email}, LinkedIn: ${SITE.linkedin}`,
  ]);

  const offer = section('Angebot', [
    ...FACTS.map((fact) => `- ${fact.label}: ${fact.value}. ${fact.text}`),
    `- ${EXPERIENCE.pilot.title} ${EXPERIENCE.pilot.text}`,
    `- ${GUARANTEE.title} ${GUARANTEE.points.map((point) => `${point.label}: ${point.text}`).join(' ')}`,
  ]);

  const process = section(
    'Ablauf in 4 Wochen',
    WEEKS.map((step) => `- ${step.week}, ${step.title}: ${step.text} Ihr Aufwand: ${step.yourTime}`),
  );

  const pages = section('Seiten', [
    link('Startseite', '/', 'Angebot, Ablauf, Garantie, Zeitrechner, häufige Fragen'),
    pageLink('KI-Beratung', KI_BERATUNG_PATH, KI_BERATUNG_SEO.description),
    pageLink('Über mich', ABOUT_PATH, 'Werdegang, Stationen und Zertifikate von Marco Gundlach'),
    link('Kontakt', '/kontakt', 'Ablauf schildern oder 30 Minuten Gespräch buchen'),
    link('Wissen', '/wissen', 'Praxisartikel zu Automatisierung und KI ohne Hype'),
    ...listedPages().map((page) => pageLink(page.name, page.path, page.description)),
  ]);

  const industries = section(
    'Branchen',
    INDUSTRIES.map((industry) => link(industry.seo.title, industryHref(industry.slug), industry.seo.description)),
  );

  const articles = section(
    'Wissen-Artikel',
    publishedArticles(ARTICLES).map((article) => link(article.title.replace(/\.$/, ''), markdownHref(`/wissen/${article.slug}`), article.lead)),
  );

  const faqs = section(
    'Häufige Fragen',
    FAQS.map((faq) => `- ${faq.q} ${faq.a}`),
  );

  const ablaeufe = section(
    'Ablauf-Bibliothek',
    publishedAblaeufe().map((ablauf) => link(`${ablauf.title} (${BRANCHEN[ablauf.branche]})`, markdownHref(ablaufHref(ablauf.slug)), ablauf.lead)),
  );

  const optional = section('Optional', [
    link('Alle Hauptseiten, Artikel und Abläufe im Volltext', '/llms-full.txt', 'eine Datei mit allen veröffentlichten Inhalten als Markdown'),
  ]);

  return [intro, person, offer, process, pages, industries, articles, ablaeufe, faqs, optional].join('\n\n') + '\n';
}
