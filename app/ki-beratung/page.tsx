import type { Metadata } from 'next';
import Link from 'next/link';
import { CLOSING, EXPERIENCE, GUARANTEE, HOME_CALCULATOR, WEEKS, WEEKS_INTRO } from '@/lib/content/home';
import {
  KI_BERATUNG_FLOW,
  KI_BERATUNG_ABOUT,
  KI_BERATUNG_CONNECT,
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
  KI_BERATUNG_SEO,
  KI_BERATUNG_SERVICES,
} from '@/lib/content/ki-beratung';
import { CONTACT_ANCHOR, CONTACT_PAGE } from '@/lib/content/site';
import { breadcrumbSchema, faqSchema, graph, offerSchema, organizationSchema, personSchema } from '@/lib/seo/schema';
import { DEFAULT_OG_IMAGE, seoTitle } from '@/lib/seo/meta';
import JsonLd from '@/components/seo/json-ld';
import ConnectGraphic from '@/components/ki-beratung/connect-graphic';
import SectionHead from '@/components/ui/section-head';
import Principles from '@/components/sections/principles';
import StepsCompact from '@/components/landing/steps-compact';
import Guarantee from '@/components/sections/guarantee';
import FitCheck from '@/components/sections/fit-check';
import AboutTeaser from '@/components/sections/about-teaser';
import FaqSection from '@/components/sections/faq-section';
import Closing from '@/components/sections/closing';
import { ArrowIcon } from '@/components/ui/icons';
import FlowHero from '@/components/flow/flow-hero';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import KeepCompounds from '@/components/ui/keep-compounds';

const PROCESS_ANCHOR = 'ablauf';

export const metadata: Metadata = {
  title: seoTitle(KI_BERATUNG_SEO.title),
  description: KI_BERATUNG_SEO.description,
  alternates: { canonical: KI_BERATUNG_PATH },
  openGraph: {
    type: 'website',
    url: KI_BERATUNG_PATH,
    title: KI_BERATUNG_SEO.title,
    description: KI_BERATUNG_SEO.description,
    images: [DEFAULT_OG_IMAGE],
  },
};

const SCHEMA = graph(
  offerSchema({
    name: KI_BERATUNG_SEO.serviceName,
    serviceType: KI_BERATUNG_SEO.serviceType,
    description: KI_BERATUNG_SEO.description,
    audience: KI_BERATUNG_SEO.audience,
    path: KI_BERATUNG_PATH,
  }),
  organizationSchema(),
  personSchema(),
  breadcrumbSchema([
    { name: 'Start', path: '/' },
    { name: KI_BERATUNG_SEO.breadcrumb, path: KI_BERATUNG_PATH },
  ]),
  faqSchema(KI_BERATUNG_FAQS),
);

/** Hauptseite für „KI-Berater“ und „KI-Beratung“. Baut auf den Abschnitten der Startseite auf. */
export default function KiBeratungPage() {
  return (
    <>
      <JsonLd data={SCHEMA} />
      <section className="page-hero">
        <div className="container page-hero__split">
        <div className="page-hero__inner">
          <Breadcrumbs items={[{ name: KI_BERATUNG_SEO.breadcrumb }]} />
          <span className="label">{KI_BERATUNG_HERO.eyebrow}</span>
          <h1><KeepCompounds text={KI_BERATUNG_HERO.title} /></h1>
          <p className="lead">{KI_BERATUNG_HERO.lead}</p>
          <div className="hero__actions">
            <Link className="btn btn--primary" href={CONTACT_PAGE}>
              {KI_BERATUNG_HERO.primaryCta} <ArrowIcon />
            </Link>
            <a className="btn btn--outline" href={`#${PROCESS_ANCHOR}`}>
              {KI_BERATUNG_HERO.secondaryCta}
            </a>
          </div>
        </div>
        <FlowHero steps={KI_BERATUNG_FLOW} />
        </div>
      </section>

      <section className="section tone-white" aria-labelledby="leistung-title">
        <div className="container">
          <SectionHead label={KI_BERATUNG_SERVICES.eyebrow} title={KI_BERATUNG_SERVICES.title} id="leistung-title" />
          <div className="ki-services__split">
            <div className="ki-copy">
              {KI_BERATUNG_SERVICES.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ConnectGraphic content={KI_BERATUNG_CONNECT} />
          </div>
          <p className="ki-services__examples"><strong>{KI_BERATUNG_SERVICES.examplesTitle}</strong></p>
          <ul className="grid-3 ki-cards">
            {KI_BERATUNG_SERVICES.examples.map((example) => (
              <li className="card scene-card" key={example.label}>
                <span className="label">{example.label}</span>
                <h3>{example.title}</h3>
                <p className="muted">{example.text}</p>
              </li>
            ))}
          </ul>
          <p className="footnote">{KI_BERATUNG_SERVICES.footnote}</p>
        </div>
      </section>

      <Principles intro={KI_BERATUNG_NOT_INTRO} principles={KI_BERATUNG_NOT} />
      <StepsCompact steps={WEEKS} total={WEEKS_INTRO.total} intro={KI_BERATUNG_PROCESS_INTRO} id={PROCESS_ANCHOR} />
      <Guarantee content={GUARANTEE} calculator={HOME_CALCULATOR} />
      <FitCheck content={KI_BERATUNG_FIT} />

      <section className="section tone-gray" id="kosten" aria-labelledby="kosten-title">
        <div className="container experience">
          <div className="experience__main">
            <span className="label">{KI_BERATUNG_COSTS.eyebrow}</span>
            <h2 id="kosten-title">{KI_BERATUNG_COSTS.title}</h2>
            {KI_BERATUNG_COSTS.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link className="text-link" href={KI_BERATUNG_COSTS.link.href}>
              {KI_BERATUNG_COSTS.link.label} <ArrowIcon />
            </Link>
          </div>
          <aside className="pilot">
            <span className="label pilot__label">{EXPERIENCE.pilot.label}</span>
            <h3>{EXPERIENCE.pilot.title}</h3>
            <p className="muted">{EXPERIENCE.pilot.text}</p>
            <Link className="text-link" href={CONTACT_ANCHOR}>
              {EXPERIENCE.pilot.cta} <ArrowIcon />
            </Link>
          </aside>
        </div>
      </section>

      <AboutTeaser content={KI_BERATUNG_ABOUT} />

      <section className="section tone-gray" aria-labelledby="remote-title">
        <div className="container">
          <SectionHead label={KI_BERATUNG_REMOTE.eyebrow} title={KI_BERATUNG_REMOTE.title} id="remote-title" />
          <div className="ki-copy">
            {KI_BERATUNG_REMOTE.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <FaqSection intro={KI_BERATUNG_FAQ_INTRO} items={KI_BERATUNG_FAQS} />

      <section className="section tone-gray" aria-labelledby="weiterlesen-title">
        <div className="container">
          <SectionHead label={KI_BERATUNG_READING.eyebrow} title={KI_BERATUNG_READING.title} id="weiterlesen-title" />
          <ul className="ki-links">
            {KI_BERATUNG_READING.links.map((link) => (
              <li key={link.href}>
                <Link className="text-link" href={link.href}>
                  {link.label} <ArrowIcon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Closing content={CLOSING} />
    </>
  );
}
