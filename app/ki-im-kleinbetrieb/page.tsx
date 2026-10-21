import '../styles/daten.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import JsonLd from '@/components/seo/json-ld';
import SectionHead from '@/components/ui/section-head';
import FaqSection from '@/components/sections/faq-section';
import Closing from '@/components/sections/closing';
import KeyStats from '@/components/daten/key-stats';
import type { KeyStatView } from '@/components/daten/key-stats';
import BarChart from '@/components/daten/bar-chart';
import type { BarView } from '@/components/daten/bar-chart';
import SourceList from '@/components/daten/source-list';
import { datenSchema } from '@/components/daten/schema';
import { ArrowIcon } from '@/components/ui/icons';
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
  sourceAnchor,
} from '@/lib/content/daten';
import type { Bar, KeyStat } from '@/lib/content/daten';
import { CLOSING } from '@/lib/content/home';
import { DATEN_PAGE } from '@/lib/content/pages';
import { DEFAULT_OG_IMAGE, seoTitle } from '@/lib/seo/meta';
import { markdownHref } from '@/lib/seo/markdown';
import KeepCompounds from '@/components/ui/keep-compounds';

export const metadata: Metadata = {
  title: seoTitle(DATEN_PAGE.name),
  description: DATEN_PAGE.description,
  alternates: { canonical: DATEN_PAGE.path, types: { 'text/markdown': markdownHref(DATEN_PAGE.path) } },
  robots: DATEN_PAGE.listed ? undefined : { index: false, follow: true },
  openGraph: {
    type: 'article',
    url: DATEN_PAGE.path,
    title: DATEN_HERO.title,
    description: DATEN_PAGE.description,
    images: [DEFAULT_OG_IMAGE],
  },
};

const SCHEMA = datenSchema();

function toStatView(stat: KeyStat): KeyStatView {
  return {
    id: stat.id,
    value: stat.value,
    display: formatPercent(stat.value),
    label: stat.label,
    context: stat.context,
    sourceName: shortSourceName(stat.sourceId),
    sourceHref: `#${sourceAnchor(stat.sourceId)}`,
  };
}

function toBarView(bar: Bar): BarView {
  return {
    label: bar.label,
    value: bar.value,
    display: formatPercent(bar.value),
    sourceHref: `#${sourceAnchor(bar.sourceId)}`,
    reference: bar.reference,
  };
}

/** KI im Kleinbetrieb: Studienzahlen mit Quellen, Widersprüchen und Einordnung. */
export default function DatenPage() {
  return (
    <>
      <JsonLd data={SCHEMA} />
      <section className="page-hero">
        <div className="container page-hero__inner">
          <Breadcrumbs items={[{ name: 'Wissen', path: '/wissen' }, { name: DATEN_PAGE.name }]} />
          <span className="label">{DATEN_HERO.eyebrow}</span>
          <h1><KeepCompounds text={DATEN_HERO.title} /></h1>
          <p className="lead">{DATEN_HERO.lead}</p>
          <p className="daten-stand">
            {DATEN_HERO.standLabel}: <time dateTime={DATEN_STAND.iso}>{DATEN_STAND.label}</time>
          </p>
        </div>
      </section>

      <section className="section tone-white" aria-labelledby="kernzahlen-title">
        <div className="container">
          <SectionHead
            label={KEY_STATS_INTRO.eyebrow}
            title={KEY_STATS_INTRO.title}
            lead={KEY_STATS_INTRO.lead}
            id="kernzahlen-title"
          />
          <KeyStats stats={KEY_STATS.map(toStatView)} />
        </div>
      </section>

      <section className="section tone-gray" aria-labelledby="branchen-title">
        <div className="container">
          <SectionHead
            label={BRANCHEN_INTRO.eyebrow}
            title={BRANCHEN_INTRO.title}
            lead={BRANCHEN_INTRO.lead}
            id="branchen-title"
          />
          <div className="bars-stack">
            {BAR_GROUPS.map((group) => (
              <BarChart
                key={group.id}
                title={group.title}
                lead={group.lead}
                bars={group.bars.map(toBarView)}
                footnote={group.footnote}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section tone-white" aria-labelledby="warum-title">
        <div className="container daten-body">
          <SectionHead label={WHY_INTRO.eyebrow} title={WHY_INTRO.title} lead={WHY_INTRO.lead} id="warum-title" />
          {REASONS.map((reason, index) => (
            <div className="daten-reason" key={reason.title}>
              <h3>
                <span className="daten-reason__number" aria-hidden="true">{index + 1}</span>
                {reason.title}
              </h3>
              {reason.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section tone-gray" aria-labelledby="bedeutung-title">
        <div className="container experience">
          <div className="experience__main">
            <span className="label">{MEANING.eyebrow}</span>
            <h2 id="bedeutung-title">{MEANING.title}</h2>
            {MEANING.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <nav aria-label="Weiterlesen">
            <ul className="ki-links">
              {MEANING.links.map((link) => (
                <li key={link.href}>
                  <Link className="text-link" href={link.href}>
                    {link.label} <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className="section tone-white" id="quellen" aria-labelledby="quellen-title">
        <div className="container daten-body">
          <SectionHead label={METHOD.eyebrow} title={METHOD.title} id="quellen-title" />
          {METHOD.text.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="daten-stand">
            {METHOD.accessedLabel} <time dateTime={DATEN_STAND.iso}>{DATEN_STAND.label}</time>.
          </p>
          <SourceList sources={SOURCES} sampleLabel={METHOD.sampleLabel} periodLabel={METHOD.periodLabel} />
        </div>
      </section>

      <FaqSection intro={DATEN_FAQ_INTRO} items={DATEN_FAQS} />
      <Closing content={CLOSING} />
    </>
  );
}
