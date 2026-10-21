import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import SectionHead from '@/components/ui/section-head';
import FaqSection from '@/components/sections/faq-section';
import Closing from '@/components/sections/closing';
import WorkflowNodes from '@/components/vorlagen/workflow-nodes';
import { ArrowIcon } from '@/components/ui/icons';
import { CLOSING } from '@/lib/content/home';
import { VORLAGEN_PAGE, pageSeoTitle } from '@/lib/content/pages';
import { SITE } from '@/lib/content/site';
import { BRANCHEN } from '@/lib/content/ablaeufe/types';
import { ANLEITUNG, VORLAGEN, VORLAGEN_FAQS, VORLAGEN_MUSTER, vorlageHref, vorlageStatus } from '@/lib/content/vorlagen';
import { pageMetadata } from '@/lib/seo/meta';
import { breadcrumbSchema, faqSchema, graph, organizationSchema, personSchema } from '@/lib/seo/schema';

// Bleibt noindex und ohne Link in Navigation und Sitemap, bis die erste Vorlage getestet ist (VORLAGEN_PAGE.listed).
export const metadata: Metadata = {
  ...pageMetadata({ title: pageSeoTitle(VORLAGEN_PAGE), description: VORLAGEN_PAGE.description, path: VORLAGEN_PAGE.path }),
  robots: VORLAGEN_PAGE.listed ? undefined : { index: false, follow: true },
};

export default function VorlagenPage() {
  const hasUntested = VORLAGEN.some((vorlage) => !vorlage.getestet);
  const schema = graph(
    {
      '@type': 'CollectionPage',
      '@id': `${SITE.url}${VORLAGEN_PAGE.path}#seite`,
      name: VORLAGEN_PAGE.name,
      url: `${SITE.url}${VORLAGEN_PAGE.path}`,
      description: VORLAGEN_PAGE.description,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: VORLAGEN.map((vorlage, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: vorlage.title,
          url: `${SITE.url}${vorlageHref(vorlage.slug)}`,
        })),
      },
    },
    organizationSchema(),
    personSchema(),
    faqSchema(VORLAGEN_FAQS),
    breadcrumbSchema([
      { name: 'Start', path: '/' },
      { name: VORLAGEN_PAGE.name, path: VORLAGEN_PAGE.path },
    ]),
  );

  return (
    <>
      <JsonLd data={schema} />
      <section className="page-hero">
        <div className="container page-hero__inner">
          <Breadcrumbs items={[{ name: VORLAGEN_PAGE.name }]} />
          <span className="label">n8n-Vorlagen</span>
          <h1>Kostenlose n8n-Vorlagen für kleine Betriebe.</h1>
          <p className="lead">
            Fertige Workflows zum Herunterladen, mit Anleitung auf Deutsch: Import in n8n, Zugangsdaten anlegen, testen.
            Jede Vorlage übernimmt einen einfachen Ablauf aus dem Büroalltag.
          </p>
          {hasUntested ? (
            <p className="vorlagen-note">
              Ich teste die Vorlagen gerade selbst in n8n. Sobald eine Vorlage bei mir sauber durchgelaufen ist, steht auf
              ihrer Seite der Download.
            </p>
          ) : null}
        </div>
      </section>

      <section className="section tone-white" aria-labelledby="vorlagen-liste">
        <div className="container">
          <h2 id="vorlagen-liste" className="vorlagen-heading">Die Vorlagen</h2>
          <ul className="vorlagen-grid">
            {VORLAGEN.map((vorlage) => (
              <li key={vorlage.slug} className="card card--hover vorlage-card">
                <Link href={vorlageHref(vorlage.slug)} className="vorlage-card__link">
                  <span className="label">{BRANCHEN[vorlage.branche]}</span>
                  <h3>{vorlage.title}</h3>
                  <p className="muted">{vorlage.lead}</p>
                  <span className={`vorlage-badge${vorlage.getestet ? ' vorlage-badge--ok' : ''}`}>{vorlageStatus(vorlage)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section tone-gray" aria-labelledby="vorlagen-muster">
        <div className="container">
          <SectionHead
            id="vorlagen-muster"
            label="So sind die Vorlagen gebaut"
            title="Ein Auslöser, ein paar Prüfungen, ein Ergebnis."
            lead="Jede Vorlage folgt demselben Muster. Etwas löst den Ablauf aus, n8n prüft und sortiert, legt das Ergebnis ab und gibt Ihnen Bescheid. Wer das einmal verstanden hat, kann die Vorlagen selbst erweitern."
          />
          <WorkflowNodes nodes={VORLAGEN_MUSTER} label="Grundmuster einer Vorlage" />
        </div>
      </section>

      <section className="section tone-white" aria-labelledby="vorlagen-anleitung">
        <div className="container vorlage-body">
          <h2 id="vorlagen-anleitung">So setzen Sie eine Vorlage ein.</h2>
          <ol className="vorlage-steps">
            {ANLEITUNG.map((schritt) => (
              <li key={schritt.titel}>
                <h3>{schritt.titel}</h3>
                <p>{schritt.text}</p>
              </li>
            ))}
          </ol>
          <p className="muted">
            Eine Vorlage ist ein Startpunkt, kein fertiges System für Ihren Betrieb. Wenn Sie lieber einen Ablauf passend zu
            Ihren Programmen hätten, mit Sonderfällen und Garantie, lesen Sie, <Link href="/ki-beratung">wie ich als KI-Berater arbeite</Link>.
          </p>
          <p>
            <Link href="/kontakt" className="text-link">Ablauf schildern <ArrowIcon /></Link>
          </p>
        </div>
      </section>

      <FaqSection intro={{ eyebrow: 'Fragen', title: 'Häufige Fragen zu den Vorlagen.' }} items={VORLAGEN_FAQS} />
      <Closing content={CLOSING} />
    </>
  );
}
