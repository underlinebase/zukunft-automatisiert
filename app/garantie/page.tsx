import '../styles/garantie.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import JsonLd from '@/components/seo/json-ld';
import SectionHead from '@/components/ui/section-head';
import FaqSection from '@/components/sections/faq-section';
import Closing from '@/components/sections/closing';
import DecisionPath from '@/components/garantie/decision-path';
import { garantieSchema } from '@/components/garantie/schema';
import { ArrowIcon, CheckIcon, CrossIcon } from '@/components/ui/icons';
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
import { GARANTIE_PAGE } from '@/lib/content/pages';
import { CONTACT_ANCHOR } from '@/lib/content/site';
import { DEFAULT_OG_IMAGE, seoTitle } from '@/lib/seo/meta';
import { markdownHref } from '@/lib/seo/markdown';
import KeepCompounds from '@/components/ui/keep-compounds';

const PATH_ANCHOR = 'pruefung';

export const metadata: Metadata = {
  // Suchbegriff vorn, das Versprechen gleich im Titel.
  title: seoTitle('Garantie: Läuft der Ablauf nicht, bessere ich nach'),
  description: GARANTIE_PAGE.description,
  alternates: { canonical: GARANTIE_PAGE.path, types: { 'text/markdown': markdownHref(GARANTIE_PAGE.path) } },
  robots: GARANTIE_PAGE.listed ? undefined : { index: false, follow: true },
  openGraph: {
    type: 'website',
    url: GARANTIE_PAGE.path,
    title: GARANTIE_HERO.title,
    description: GARANTIE_PAGE.description,
    images: [DEFAULT_OG_IMAGE],
  },
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
          <span className="label">{GARANTIE_HERO.eyebrow}</span>
          <h1><KeepCompounds text={GARANTIE_HERO.title} /></h1>
          <p className="lead">{GARANTIE_HERO.lead}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={CONTACT_ANCHOR}>
              {GARANTIE_HERO.primaryCta} <ArrowIcon />
            </a>
            <a className="btn btn--outline" href={`#${PATH_ANCHOR}`}>
              {GARANTIE_HERO.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className="section tone-white" aria-labelledby="zusage-title">
        <div className="container">
          <SectionHead label={GARANTIE_PROMISE.eyebrow} title={GARANTIE_PROMISE.title} id="zusage-title" />
          <div className="ki-copy">
            {GARANTIE_PROMISE.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="muted">{GARANTIE_PROMISE.pilotNote}</p>
          </div>
        </div>
      </section>

      <section className="section tone-gray" id={PATH_ANCHOR} aria-labelledby="weg-title">
        <div className="container">
          <SectionHead label={GARANTIE_PATH.eyebrow} title={GARANTIE_PATH.title} id="weg-title" />
          <DecisionPath content={GARANTIE_PATH} />
        </div>
      </section>

      <section className="section tone-white" aria-labelledby="laeuft-title">
        <div className="container g-meaning">
          <div className="g-meaning__main">
            <SectionHead
              label={GARANTIE_MEANING.eyebrow}
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

      <section className="section tone-gray" aria-labelledby="grenzen-title">
        <div className="container">
          <SectionHead
            label={GARANTIE_EXCLUDED.eyebrow}
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

      <section className="section tone-white" aria-labelledby="ablauf-title">
        <div className="container">
          <SectionHead label={GARANTIE_PROCESS.eyebrow} title={GARANTIE_PROCESS.title} id="ablauf-title" />
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

      <section className="section tone-gray" aria-labelledby="warum-title">
        <div className="container experience">
          <div className="experience__main">
            <span className="label">{GARANTIE_WHY.eyebrow}</span>
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
              <ul className="ki-links">
                {GARANTIE_LINKS.links.map((link) => (
                  <li key={link.href}>
                    <Link className="text-link" href={link.href}>
                      {link.label} <ArrowIcon />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <FaqSection intro={GARANTIE_FAQ_INTRO} items={GARANTIE_FAQS} />
      <Closing content={CLOSING} />
    </>
  );
}
