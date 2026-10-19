// Inhalt der /llms.txt: eine kompakte, maschinenlesbare Zusammenfassung für KI-Assistenten
// (Format nach llmstxt.org). Wird aus denselben Inhalten erzeugt wie die Seiten, damit nichts auseinanderläuft.

import { SITE } from '@/lib/content/site';
import { INDUSTRIES, industryHref } from '@/lib/content/branchen';
import { ARTICLES } from '@/lib/content/articles';
import { publishedArticles } from '@/lib/content/publishing';
import { EXPERIENCE, FACTS, FAQS, GUARANTEE, WEEKS } from '@/lib/content/home';
import { KI_BERATUNG_PATH, KI_BERATUNG_SEO } from '@/lib/content/ki-beratung';

function link(title: string, path: string, note?: string): string {
  return `- [${title}](${SITE.url}${path})${note ? `: ${note}` : ''}`;
}

function section(title: string, lines: string[]): string {
  return [`## ${title}`, '', ...lines].join('\n');
}

export function buildLlmsTxt(): string {
  const intro = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.owner}, der KI-Realist, automatisiert für Inhaber kleiner Betriebe in Deutschland den Ablauf, der jede Woche am meisten Zeit kostet. Ein Ablauf, 4 Wochen, Festpreis. Läuft er danach nicht, arbeitet er kostenlos weiter.`,
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
    link('KI-Beratung', KI_BERATUNG_PATH, KI_BERATUNG_SEO.description),
    link('Über mich', '/ueber-mich', 'Werdegang, Stationen und Zertifikate von Marco Gundlach'),
    link('Kontakt', '/kontakt', 'Ablauf schildern oder 30 Minuten Gespräch buchen'),
    link('Wissen', '/wissen', 'Praxisartikel zu Automatisierung und KI ohne Hype'),
  ]);

  const industries = section(
    'Branchen',
    INDUSTRIES.map((industry) => link(industry.seo.title, industryHref(industry.slug), industry.seo.description)),
  );

  const articles = section(
    'Wissen-Artikel',
    publishedArticles(ARTICLES).map((article) => link(article.title.replace(/\.$/, ''), `/wissen/${article.slug}`, article.lead)),
  );

  const faqs = section(
    'Häufige Fragen',
    FAQS.map((faq) => `- ${faq.q} ${faq.a}`),
  );

  return [intro, person, offer, process, pages, industries, articles, faqs].join('\n\n') + '\n';
}
