import '../styles/garantie.css';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import JsonLd from '@/components/seo/json-ld';
import SectionHead from '@/components/ui/section-head';
import FaqSection from '@/components/sections/faq-section';
import Closing from '@/components/sections/closing';
import DecisionPath from '@/components/garantie/decision-path';
import { garantieSchema } from '@/components/garantie/schema';
import { CheckIcon, CrossIcon } from '@/components/ui/icons';
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
import { CLOSING } from '@/lib/content/home';
import { GARANTIE_PAGE, pageSeoTitle } from '@/lib/content/pages';
import { CONTACT_ANCHOR } from '@/lib/content/site';
import { pageMetadata } from '@/lib/seo/meta';
import { markdownHref } from '@/lib/seo/markdown';
import KeepCompounds from '@/components/ui/keep-compounds';
import LinkList from '@/components/ui/link-list';

const PATH_ANCHOR = 'pruefung';

export const metadata: Metadata = {
  ...pageMetadata({
    title: pageSeoTitle(GARANTIE_PAGE),
    markdown: markdownHref(GARANTIE_PAGE.path),
    description: GARANTIE_PAGE.description,
    path: GARANTIE_PAGE.path,
    ogTitle: GARANTIE_HERO.title,
  }),
  robots: GARANTIE_PAGE.listed ? undefined : { index: false, follow: true },
};

const SCHEMA = garantieSchema();

/** Die Garantie im Detail: was „läuft“ heißt, wo sie aufhört und wie es weitergeht, wenn etwas hakt. */
export default function GarantiePage() {
  return (
    <>
      <JsonLd data={SCHEMA} />
      <section className="page-hero">
        <div className="container page-hero__inner">
          <Breadcrumbs items={[{ name: GARANTIE_PAGE.name }]} />
          <h1><KeepCompounds text={GARANTIE_HERO.title} /></h1>
          <p className="lead">{GARANTIE_HERO.lead}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={CONTACT_ANCHOR}>
              {GARANTIE_HERO.primaryCta}
            </a>
            <a className="btn btn--outline" href={`#${PATH_ANCHOR}`}>
              {GARANTIE_HERO.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className="section tone-white" aria-labelledby="zusage-title">
        <div className="container">
          <SectionHead title={GARANTIE_PROMISE.title} id="zusage-title" />
          <div className="ki-copy">
            {GARANTIE_PROMISE.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="muted">{GARANTIE_PROMISE.pilotNote}</p>
          </div>
          <div className="g-path" id={PATH_ANCHOR}>
            <h3 className="g-subtitle" id="weg-title">{GARANTIE_PATH.title}</h3>
            <DecisionPath content={GARANTIE_PATH} />
          </div>
        </div>
      </section>

      <section className="section tone-gray" aria-labelledby="laeuft-title">
        <div className="container g-meaning">
          <div className="g-meaning__main">
            <SectionHead
              title={GARANTIE_MEANING.title}
              lead={GARANTIE_MEANING.lead}
              id="laeuft-title"
            />
            <ul className="check-list g-meaning__criteria">
              {GARANTIE_MEANING.criteria.map((item) => (
                <li key={item}>
                  <CheckIcon /> <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="g-subtitle">{GARANTIE_MEANING.measureTitle}</h3>
            <div className="ki-copy">
              {GARANTIE_MEANING.measure.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="card g-example" aria-labelledby="beispiel-title">
            <h3 id="beispiel-title">{GARANTIE_MEANING.exampleTitle}</h3>
            <p className="muted">{GARANTIE_MEANING.exampleNote}</p>
            <ol className="g-example__list">
              {GARANTIE_MEANING.example.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className="section tone-white" aria-labelledby="grenzen-title">
        <div className="container">
          <SectionHead
            title={GARANTIE_EXCLUDED.title}
            lead={GARANTIE_EXCLUDED.lead}
            id="grenzen-title"
          />
          <ul className="grid-3 g-excluded">
            {GARANTIE_EXCLUDED.items.map((item) => (
              <li className="card" key={item.label}>
                <CrossIcon />
                <h3>{item.label}</h3>
                <p className="muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section tone-gray" aria-labelledby="ablauf-title">
        <div className="container">
          <SectionHead title={GARANTIE_PROCESS.title} id="ablauf-title" />
          <ol className="g-steps">
            {GARANTIE_PROCESS.steps.map((step, index) => (
              <li className="card g-steps__item" key={step.title}>
                <span className="g-steps__number" aria-hidden="true">{index + 1}</span>
                <h3>{step.title}</h3>
                <p className="muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section tone-white" aria-labelledby="warum-title">
        <div className="container experience">
          <div className="experience__main">
            <h2 id="warum-title">{GARANTIE_WHY.title}</h2>
            {GARANTIE_WHY.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="g-why__side">
            <blockquote className="g-quote">
              <p>{GARANTIE_WHY.quote}</p>
            </blockquote>
            <nav aria-labelledby="weiterlesen-title">
              <h3 id="weiterlesen-title" className="g-subtitle">{GARANTIE_LINKS.title}</h3>
              <LinkList links={GARANTIE_LINKS.links} />
            </nav>
          </div>
        </div>
      </section>

      <FaqSection intro={GARANTIE_FAQ_INTRO} items={GARANTIE_FAQS} tone="gray" />
      <Closing content={CLOSING} />
    </>
  );
}
