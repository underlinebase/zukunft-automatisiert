// Markdown-Fassungen der Hauptseiten, die KI-Assistenten am häufigsten zitieren (GEO):
// /ki-beratung, /garantie, /ueber-mich und /ki-im-kleinbetrieb.
// Gebaut aus denselben Inhalten wie die HTML-Seiten, damit nichts auseinanderläuft. Keine eigenen Texte außer Überschriften,
// die auch auf der Seite stehen. Erreichbar unter <Seitenadresse>.md (Rewrites in next.config.ts).

import { EXPERIENCE, GUARANTEE, WEEKS } from '@/lib/content/home';
import {
  KI_BERATUNG_ABOUT,
  KI_BERATUNG_COSTS,
  KI_BERATUNG_FAQS,
  KI_BERATUNG_FAQ_INTRO,
  KI_BERATUNG_FIT,
  KI_BERATUNG_HERO,
  KI_BERATUNG_NOT,
  KI_BERATUNG_NOT_INTRO,
  KI_BERATUNG_PATH,
  KI_BERATUNG_PROCESS_INTRO,
  KI_BERATUNG_READING,
  KI_BERATUNG_REMOTE,
  KI_BERATUNG_SERVICES,
} from '@/lib/content/ki-beratung';
import {
  GARANTIE_EXCLUDED,
  GARANTIE_FAQS,
  GARANTIE_FAQ_INTRO,
  GARANTIE_HERO,
  GARANTIE_LINKS,
  GARANTIE_MEANING,
  GARANTIE_PATH,
  GARANTIE_PROCESS,
  GARANTIE_PROMISE,
  GARANTIE_WHY,
} from '@/lib/content/garantie';
import { ABOUT_PAGE, CREDENTIALS, STATIONS } from '@/lib/content/about';
import {
  BAR_GROUPS,
  BRANCHEN_INTRO,
  DATEN_FAQS,
  DATEN_FAQ_INTRO,
  DATEN_HERO,
  DATEN_STAND,
  KEY_STATS,
  KEY_STATS_INTRO,
  MEANING,
  METHOD,
  REASONS,
  SOURCES,
  WHY_INTRO,
  formatPercent,
  shortSourceName,
} from '@/lib/content/daten';
import type { BarGroup, DataSource, KeyStat } from '@/lib/content/daten';
import { DATEN_PAGE, GARANTIE_PAGE } from '@/lib/content/pages';
import type { Faq } from '@/lib/content/types';
import { SITE } from '@/lib/content/site';
import { AUTHOR_LINE, absoluteUrl, escapeLineStart, joinBlocks, metaLines, numbered } from './markdown';

export const ABOUT_PATH = '/ueber-mich';

interface MarkdownLink {
  label: string;
  href: string;
}

export interface MarkdownPage {
  path: string;
  /** Öffentlich verlinkt? Nicht gelistete Seiten fehlen in llms.txt und llms-full.txt. */
  listed: boolean;
  build: () => string;
}

// ---------- Bausteine ----------

function paragraphs(texts: readonly string[]): string[] {
  return texts.map(escapeLineStart);
}

function bullets(items: readonly string[]): string {
  return items.map((item) => `- ${item}`).join('\n');
}

function linkList(links: readonly MarkdownLink[]): string {
  return bullets(links.map((link) => `[${link.label}](${absoluteUrl(link.href)})`));
}

function faqSection(title: string, faqs: readonly Faq[]): string[] {
  return [`## ${title}`, ...faqs.map((faq) => `### ${faq.q}\n\n${escapeLineStart(faq.a)}`)];
}

function pageMeta(path: string, extra: readonly string[] = []): string {
  return metaLines([`Autor: ${AUTHOR_LINE}`, ...extra, `Quelle: ${SITE.url}${path}`]);
}

// ---------- /ki-beratung ----------

function kiBeratungServices(): string[] {
  const examples = KI_BERATUNG_SERVICES.examples.map((example) => `**${example.label}: ${example.title}** ${example.text}`);
  return [
    `## ${KI_BERATUNG_SERVICES.title}`,
    ...paragraphs(KI_BERATUNG_SERVICES.text),
    KI_BERATUNG_SERVICES.examplesTitle,
    bullets(examples),
    KI_BERATUNG_SERVICES.footnote,
  ];
}

function kiBeratungProcess(): string[] {
  const steps = WEEKS.map((step) => `**${step.week}, ${step.title}:** ${step.youGet} Ihre Zeit: ${step.yourTime}`);
  return [`## ${KI_BERATUNG_PROCESS_INTRO.title}`, KI_BERATUNG_PROCESS_INTRO.lead, bullets(steps)];
}

function guaranteeSection(): string[] {
  const points = GUARANTEE.points.map((point) => `**${point.label}:** ${point.text}`);
  return [`## ${GUARANTEE.eyebrow}: ${GUARANTEE.title}`, GUARANTEE.lead, bullets(points)];
}

function kiBeratungFit(): string[] {
  return [
    `## ${KI_BERATUNG_FIT.title}`,
    KI_BERATUNG_FIT.lead,
    `Das passt gut:\n\n${bullets(KI_BERATUNG_FIT.yes)}`,
    `Das passt eher nicht:\n\n${bullets(KI_BERATUNG_FIT.no)}`,
  ];
}

function kiBeratungCosts(): string[] {
  return [
    `## ${KI_BERATUNG_COSTS.title}`,
    ...paragraphs(KI_BERATUNG_COSTS.text),
    `**${EXPERIENCE.pilot.title}** ${EXPERIENCE.pilot.text}`,
    linkList([KI_BERATUNG_COSTS.link]),
  ];
}

export function kiBeratungMarkdown(): string {
  const principles = KI_BERATUNG_NOT.map((principle) => `**${principle.title}** ${principle.text}`);
  return joinBlocks([
    `# ${KI_BERATUNG_HERO.title}`,
    pageMeta(KI_BERATUNG_PATH),
    `**${KI_BERATUNG_HERO.lead}**`,
    ...kiBeratungServices(),
    `## ${KI_BERATUNG_NOT_INTRO.title}`,
    KI_BERATUNG_NOT_INTRO.lead,
    bullets(principles),
    ...kiBeratungProcess(),
    ...guaranteeSection(),
    ...kiBeratungFit(),
    ...kiBeratungCosts(),
    `## ${KI_BERATUNG_ABOUT.title}`,
    ...paragraphs(KI_BERATUNG_ABOUT.text),
    `## ${KI_BERATUNG_REMOTE.title}`,
    ...paragraphs(KI_BERATUNG_REMOTE.text),
    ...faqSection(KI_BERATUNG_FAQ_INTRO.title, KI_BERATUNG_FAQS),
    `## ${KI_BERATUNG_READING.title}`,
    linkList(KI_BERATUNG_READING.links),
  ]);
}

// ---------- /garantie ----------

function garantiePath(): string[] {
  const { start, check, yes, no } = GARANTIE_PATH;
  const weeks = start.weeks.map((week) => `${week.week}: ${week.title}`).join(', ');
  return [
    `## ${GARANTIE_PATH.title}`,
    bullets([
      `**${start.label}:** ${start.title} (${weeks}).`,
      `**${check.label}:** ${check.title}`,
      `**${yes.label}:** ${yes.title}. ${yes.text}`,
      `**${no.label}:** ${no.title}. ${no.text}`,
    ]),
  ];
}

function garantieMeaning(): string[] {
  return [
    `## ${GARANTIE_MEANING.title}`,
    GARANTIE_MEANING.lead,
    bullets(GARANTIE_MEANING.criteria),
    `### ${GARANTIE_MEANING.measureTitle}`,
    ...paragraphs(GARANTIE_MEANING.measure),
    `### ${GARANTIE_MEANING.exampleTitle}`,
    GARANTIE_MEANING.exampleNote,
    numbered(GARANTIE_MEANING.example),
  ];
}

export function garantieMarkdown(): string {
  const excluded = GARANTIE_EXCLUDED.items.map((item) => `**${item.label}:** ${item.text}`);
  const steps = GARANTIE_PROCESS.steps.map((step) => `**${step.title}** ${step.text}`);
  return joinBlocks([
    `# ${GARANTIE_HERO.title}`,
    pageMeta(GARANTIE_PAGE.path),
    `**${GARANTIE_HERO.lead}**`,
    `## ${GARANTIE_PROMISE.title}`,
    ...paragraphs(GARANTIE_PROMISE.text),
    GARANTIE_PROMISE.pilotNote,
    ...garantiePath(),
    ...garantieMeaning(),
    `## ${GARANTIE_EXCLUDED.title}`,
    GARANTIE_EXCLUDED.lead,
    bullets(excluded),
    `## ${GARANTIE_PROCESS.title}`,
    numbered(steps),
    `## ${GARANTIE_WHY.title}`,
    ...paragraphs(GARANTIE_WHY.text),
    `> ${GARANTIE_WHY.quote}`,
    ...faqSection(GARANTIE_FAQ_INTRO.title, GARANTIE_FAQS),
    `## ${GARANTIE_LINKS.title.replace(/\.$/, '')}`,
    linkList(GARANTIE_LINKS.links),
  ]);
}

// ---------- /ueber-mich ----------

export function ueberMichMarkdown(): string {
  const stations = STATIONS.map((station) => `**${station.period}:** ${station.role}, ${station.org}. ${station.text}`);
  const credentials = CREDENTIALS.map(
    (credential) => `${credential.name} (${credential.issuer}${credential.year ? `, ${credential.year}` : ''})`,
  );
  return joinBlocks([
    `# ${ABOUT_PAGE.title}`,
    metaLines([`LinkedIn: ${SITE.linkedin}`, `Quelle: ${SITE.url}${ABOUT_PATH}`]),
    `**${ABOUT_PAGE.lead}**`,
    ...paragraphs(ABOUT_PAGE.essay),
    '## Stationen',
    bullets(stations),
    '## Zertifikate',
    bullets(credentials),
    `## ${EXPERIENCE.title}`,
    EXPERIENCE.note,
    bullets(EXPERIENCE.companies),
    `**${EXPERIENCE.pilot.title}** ${EXPERIENCE.pilot.text}`,
  ]);
}

// ---------- /ki-im-kleinbetrieb ----------

function keyStatLine(stat: KeyStat): string {
  return `**${formatPercent(stat.value)} Prozent** ${stat.label}. ${stat.context} (Quelle: ${shortSourceName(stat.sourceId)})`;
}

function barGroupSection(group: BarGroup): string[] {
  const bars = group.bars.map((bar) => `${bar.label}: ${formatPercent(bar.value)} Prozent`);
  return [`### ${group.title}`, group.lead, bullets(bars), group.footnote];
}

function sourceLine(source: DataSource): string {
  const note = source.note ? ` ${source.note}` : '';
  return `**${source.publisher}:** [${source.title}](${source.url}), ${source.publishedLabel}. ${METHOD.sampleLabel}: ${source.sample}. ${METHOD.periodLabel}: ${source.period}.${note}`;
}

export function datenMarkdown(): string {
  const reasons = REASONS.flatMap((reason) => [`### ${reason.title}`, ...paragraphs(reason.text)]);
  return joinBlocks([
    `# ${DATEN_HERO.title}`,
    pageMeta(DATEN_PAGE.path, [`${DATEN_HERO.standLabel}: ${DATEN_STAND.label}`]),
    `**${DATEN_HERO.lead}**`,
    `## ${KEY_STATS_INTRO.title}`,
    KEY_STATS_INTRO.lead,
    bullets(KEY_STATS.map(keyStatLine)),
    `## ${BRANCHEN_INTRO.title}`,
    BRANCHEN_INTRO.lead,
    ...BAR_GROUPS.flatMap(barGroupSection),
    `## ${WHY_INTRO.title}`,
    WHY_INTRO.lead,
    ...reasons,
    `## ${MEANING.title}`,
    ...paragraphs(MEANING.text),
    linkList(MEANING.links),
    `## ${METHOD.title}`,
    ...paragraphs(METHOD.text),
    `${METHOD.accessedLabel} ${DATEN_STAND.label}.`,
    numbered(SOURCES.map(sourceLine)),
    ...faqSection(DATEN_FAQ_INTRO.title, DATEN_FAQS),
  ]);
}

// ---------- Verzeichnis ----------

/** Alle Hauptseiten mit Markdown-Fassung. Reihenfolge = Reihenfolge in llms-full.txt. */
export const MARKDOWN_PAGES: readonly MarkdownPage[] = [
  { path: KI_BERATUNG_PATH, listed: true, build: kiBeratungMarkdown },
  { path: GARANTIE_PAGE.path, listed: GARANTIE_PAGE.listed, build: garantieMarkdown },
  { path: ABOUT_PATH, listed: true, build: ueberMichMarkdown },
  { path: DATEN_PAGE.path, listed: DATEN_PAGE.listed, build: datenMarkdown },
];

/** Seite zu einem Pfad ohne führenden Schrägstrich, z. B. „garantie“. */
export function findMarkdownPage(slug: string): MarkdownPage | undefined {
  return MARKDOWN_PAGES.find((page) => page.path === `/${slug}`);
}

export function hasMarkdownPage(path: string): boolean {
  return MARKDOWN_PAGES.some((page) => page.listed && page.path === path);
}

export function listedMarkdownPages(): MarkdownPage[] {
  return MARKDOWN_PAGES.filter((page) => page.listed);
}
