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
import { CONTACT_PAGE, SITE } from '@/lib/content/site';
import { breadcrumbSchema, faqSchema, graph, offerSchema, webPageSchema } from '@/lib/seo/schema';
import { DEFAULT_OG_IMAGE, seoTitle } from '@/lib/seo/meta';
import { markdownHref } from '@/lib/seo/markdown';
import JsonLd from '@/components/seo/json-ld';
import ConnectGraphic from '@/components/ki-beratung/connect-graphic';
import SectionHead from '@/components/ui/section-head';
import { PrinciplesList } from '@/components/sections/principles';
import StepsCompact from '@/components/landing/steps-compact';
import Guarantee from '@/components/sections/guarantee';
import { FitColumns } from '@/components/sections/fit-check';
import AboutTeaser from '@/components/sections/about-teaser';
import FaqSection from '@/components/sections/faq-section';
import Closing from '@/components/sections/closing';
import FlowHero from '@/components/flow/flow-hero';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import KeepCompounds from '@/components/ui/keep-compounds';

const PROCESS_ANCHOR = 'ablauf';

export const metadata: Metadata = {
  title: seoTitle(KI_BERATUNG_SEO.title),
  description: KI_BERATUNG_SEO.description,
  alternates: { canonical: KI_BERATUNG_PATH, types: { 'text/markdown': markdownHref(KI_BERATUNG_PATH) } },
  openGraph: {
    type: 'website',
    url: KI_BERATUNG_PATH,
    title: KI_BERATUNG_SEO.title,
    description: KI_BERATUNG_SEO.description,
    images: [DEFAULT_OG_IMAGE],
  },
};

const SCHEMA = graph(
  webPageSchema({
    path: KI_BERATUNG_PATH,
    name: KI_BERATUNG_SEO.title,
    description: KI_BERATUNG_SEO.description,
    mainEntity: `${SITE.url}${KI_BERATUNG_PATH}#leistung`,
  }),
  offerSchema({
    name: KI_BERATUNG_SEO.serviceName,
    serviceType: KI_BERATUNG_SEO.serviceType,
    description: KI_BERATUNG_SEO.description,
    audience: KI_BERATUNG_SEO.audience,
    path: KI_BERATUNG_PATH,
    pilotOffer: true,
  }),
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
          <h1><KeepCompounds text={KI_BERATUNG_HERO.title} /></h1>
          <p className="lead">{KI_BERATUNG_HERO.lead}</p>
          <div className="hero__actions">
            <Link className="btn btn--primary" href={CONTACT_PAGE}>
              {KI_BERATUNG_HERO.primaryCta}
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
          <SectionHead title={KI_BERATUNG_SERVICES.title} id="leistung-title" />
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
                <h3>{example.title}</h3>
                <p className="muted">{example.text}</p>
                <p className="card-caption">{example.label}</p>
              </li>
            ))}
          </ul>
          <p className="footnote">
            <Link className="text-link" href={KI_BERATUNG_SERVICES.libraryLink.href}>
              {KI_BERATUNG_SERVICES.libraryLink.label}
            </Link>
          </p>
          <p className="footnote">{KI_BERATUNG_SERVICES.footnote}</p>
        </div>
      </section>

      <section className="section tone-gray" aria-labelledby="principles-title">
        <div className="container">
          <SectionHead title={KI_BERATUNG_NOT_INTRO.title} lead={KI_BERATUNG_NOT_INTRO.lead} id="principles-title" split />
          <PrinciplesList principles={KI_BERATUNG_NOT} />
          <div className="section-part" aria-labelledby="fit-title">
            <div className="section-part__head">
              <h2 id="fit-title" className="section-part__title">{KI_BERATUNG_FIT.title}</h2>
              <p className="lead">{KI_BERATUNG_FIT.lead}</p>
            </div>
            <FitColumns content={KI_BERATUNG_FIT} />
          </div>
        </div>
      </section>

      <StepsCompact steps={WEEKS} total={WEEKS_INTRO.total} intro={KI_BERATUNG_PROCESS_INTRO} id={PROCESS_ANCHOR} />

      <Guarantee content={GUARANTEE} calculator={HOME_CALCULATOR} pilot={EXPERIENCE.pilot}>
        <div className="section-part" id="kosten" aria-labelledby="kosten-title">
          <div className="section-part__head">
            <h2 id="kosten-title" className="section-part__title">{KI_BERATUNG_COSTS.title}</h2>
          </div>
          <div className="ki-copy">
            {KI_BERATUNG_COSTS.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link className="text-link guarantee__link" href={KI_BERATUNG_COSTS.link.href}>
              {KI_BERATUNG_COSTS.link.label}
            </Link>
          </div>
        </div>
      </Guarantee>

      <AboutTeaser content={KI_BERATUNG_ABOUT}>
        <div className="section-part" aria-labelledby="remote-title">
          <div className="section-part__head">
            <h2 id="remote-title" className="section-part__title">{KI_BERATUNG_REMOTE.title}</h2>
          </div>
          <div className="ki-copy">
            {KI_BERATUNG_REMOTE.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </AboutTeaser>

      <FaqSection intro={KI_BERATUNG_FAQ_INTRO} items={KI_BERATUNG_FAQS} reading={KI_BERATUNG_READING} tone="gray" />

      <Closing content={CLOSING} />
    </>
  );
}
