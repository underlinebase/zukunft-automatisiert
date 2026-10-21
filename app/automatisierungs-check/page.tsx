import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import FaqSection from '@/components/sections/faq-section';
import CheckQuiz from '@/components/check/check-quiz';
import { CHECK_FAQ_INTRO, CHECK_FAQS, CHECK_HERO, CHECK_INTRO, CHECK_NOSCRIPT } from '@/lib/content/check';
import { ABLAEUFE_PAGE, CHECK_PAGE, pageSeoTitle } from '@/lib/content/pages';
import { CONTACT_PAGE, SITE } from '@/lib/content/site';
import { ablaufHref, publishedAblaeufe } from '@/lib/content/ablaeufe';
import { toCheckAblauf } from '@/lib/check/library';
import { pageMetadata } from '@/lib/seo/meta';
import { breadcrumbSchema, faqSchema, graph, organizationSchema, personSchema, webPageSchema } from '@/lib/seo/schema';
import KeepCompounds from '@/components/ui/keep-compounds';

// Stündlich neu erzeugen, damit neu erschienene Abläufe im Ergebnis auftauchen.
export const revalidate = 3600;

const PAGE_URL = `${SITE.url}${CHECK_PAGE.path}`;
const INTRO_TITLE_ID = 'check-intro-title';
/** Ohne JavaScript bleibt der Fragebogen verborgen; stattdessen steht dort der Hinweis mit Links. */
const NOSCRIPT_STYLE = '.check-quiz{display:none}';

export const metadata: Metadata = {
  ...pageMetadata({ title: pageSeoTitle(CHECK_PAGE), description: CHECK_PAGE.description, path: CHECK_PAGE.path }),
  robots: CHECK_PAGE.listed ? undefined : { index: false, follow: true },
};

function checkSchema() {
  const organization = organizationSchema();
  return graph(
    webPageSchema({ path: CHECK_PAGE.path, name: CHECK_PAGE.name, description: CHECK_PAGE.description, mainEntity: `${PAGE_URL}#check` }),
    {
      '@type': 'WebApplication',
      '@id': `${PAGE_URL}#check`,
      name: CHECK_PAGE.name,
      url: PAGE_URL,
      description: CHECK_PAGE.description,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Webbrowser',
      browserRequirements: 'JavaScript',
      inLanguage: 'de-DE',
      isAccessibleForFree: true,
      provider: { '@id': organization['@id'] },
    },
    organization,
    personSchema(),
    breadcrumbSchema([
      { name: 'Start', path: '/' },
      { name: CHECK_PAGE.name, path: CHECK_PAGE.path },
    ]),
    faqSchema(CHECK_FAQS),
  );
}

export default function CheckPage() {
  const ablaeufe = publishedAblaeufe().map((ablauf) => toCheckAblauf(ablauf, ablaufHref(ablauf.slug)));

  return (
    <>
      <JsonLd data={checkSchema()} />
      <section className="page-hero">
        <div className="container page-hero__inner">
          <Breadcrumbs items={[{ name: CHECK_PAGE.name }]} />
          <span className="label">{CHECK_HERO.eyebrow}</span>
          <h1><KeepCompounds text={CHECK_HERO.title} /></h1>
          <p className="lead">{CHECK_HERO.lead}</p>
          <ul className="check-facts">
            {CHECK_HERO.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section tone-gray" aria-labelledby={INTRO_TITLE_ID}>
        <div className="container check-layout">
          <div className="check-intro">
            <span className="label">{CHECK_INTRO.eyebrow}</span>
            <h2 id={INTRO_TITLE_ID}>{CHECK_INTRO.title}</h2>
            {CHECK_INTRO.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="check-box" id="check" data-own-motion>
            <noscript>
              <style>{NOSCRIPT_STYLE}</style>
              <div className="check-noscript">
                <h2 className="check-step__title">{CHECK_NOSCRIPT.title}</h2>
                <p>{CHECK_NOSCRIPT.text}</p>
                <p className="check-noscript__links">
                  <Link className="btn btn--primary" href={ABLAEUFE_PAGE.path}>
                    {CHECK_NOSCRIPT.library}
                  </Link>
                  <Link className="btn btn--outline" href={CONTACT_PAGE}>
                    {CHECK_NOSCRIPT.contact}
                  </Link>
                </p>
              </div>
            </noscript>
            <CheckQuiz ablaeufe={ablaeufe} />
          </div>
        </div>
      </section>

      <FaqSection intro={CHECK_FAQ_INTRO} items={CHECK_FAQS} />
    </>
  );
}
