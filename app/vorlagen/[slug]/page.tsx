import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import Closing from '@/components/sections/closing';
import WorkflowNodes from '@/components/vorlagen/workflow-nodes';
import { ArrowIcon, CheckIcon } from '@/components/ui/icons';
import { CLOSING } from '@/lib/content/home';
import { VORLAGEN_PAGE } from '@/lib/content/pages';
import { BRANCHEN } from '@/lib/content/ablaeufe/types';
import type { Vorlage } from '@/lib/content/vorlagen';
import { ANLEITUNG, VORLAGEN, findVorlage, vorlageHref, vorlageStatus } from '@/lib/content/vorlagen';
import { metaDescription, seoTitle } from '@/lib/seo/meta';
import { breadcrumbSchema, graph, organizationSchema, personSchema } from '@/lib/seo/schema';

// Alle Vorlagen stehen im Code, andere Pfade gibt es nicht.
export const dynamicParams = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams(): { slug: string }[] {
  return VORLAGEN.map((vorlage) => ({ slug: vorlage.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const vorlage = findVorlage(slug);
  if (!vorlage) return {};
  return {
    title: seoTitle(vorlage.seoTitle ?? `n8n-Vorlage: ${vorlage.title}`),
    description: metaDescription(vorlage.lead),
    alternates: { canonical: vorlageHref(slug) },
    // Ungetestete Vorlagen haben noch keinen Download und bleiben aus dem Index.
    robots: vorlage.getestet ? undefined : { index: false, follow: true },
  };
}

/** Download nur für getestete Vorlagen. Sonst ein Hinweis, dass der Test noch läuft. */
function DownloadBox({ vorlage }: { vorlage: Vorlage }) {
  if (vorlage.getestet) {
    return (
      <div className="vorlage-download">
        <a className="btn btn--primary" href={vorlage.datei} download>
          Vorlage herunterladen (JSON)
        </a>
        <p className="muted">n8n-Workflow ohne Zugangsdaten. Platzhalter sind klar benannt.</p>
      </div>
    );
  }
  return (
    <div className="vorlage-download vorlage-download--pending">
      <span className="vorlage-badge">{vorlageStatus(vorlage)}</span>
      <p className="muted">
        Ich lasse diese Vorlage gerade selbst in n8n mit Testdaten laufen. Erst wenn sie dort sauber durchläuft, gibt es
        hier den Download.
      </p>
    </div>
  );
}

export default async function VorlagePage({ params }: PageProps) {
  const { slug } = await params;
  const vorlage = findVorlage(slug);
  if (!vorlage) notFound();

  const path = vorlageHref(vorlage.slug);
  const schema = graph(
    personSchema(),
    organizationSchema(),
    breadcrumbSchema([
      { name: 'Start', path: '/' },
      { name: VORLAGEN_PAGE.name, path: VORLAGEN_PAGE.path },
      { name: vorlage.title, path },
    ]),
  );

  return (
    <>
      <JsonLd data={schema} />
      <section className="page-hero">
        <div className="container page-hero__inner">
          <Breadcrumbs items={[{ name: VORLAGEN_PAGE.name, path: VORLAGEN_PAGE.path }, { name: vorlage.title }]} />
          <span className="label">n8n-Vorlage · {BRANCHEN[vorlage.branche]}</span>
          <h1>{vorlage.title}</h1>
          <p className="lead">{vorlage.lead}</p>
          <DownloadBox vorlage={vorlage} />
        </div>
      </section>

      <section className="section tone-white" aria-labelledby="vorlage-was">
        <div className="container vorlage-body">
          <h2 id="vorlage-was">Was die Vorlage macht.</h2>
          {vorlage.beschreibung.map((absatz) => <p key={absatz}>{absatz}</p>)}

          <WorkflowNodes nodes={vorlage.schritte.map((schritt) => schritt.name)} label={`Ablauf der Vorlage ${vorlage.title}`} />

          <h2>Die Schritte im Einzelnen.</h2>
          <ol className="vorlage-steps vorlage-steps--compact">
            {vorlage.schritte.map((schritt) => (
              <li key={schritt.name}>
                <h3>{schritt.name}</h3>
                <p>{schritt.text}</p>
              </li>
            ))}
          </ol>

          <h2>Was Sie brauchen.</h2>
          <ul className="check-list">
            {vorlage.benoetigt.map((item) => (
              <li key={item}><CheckIcon /><span>{item}</span></li>
            ))}
          </ul>

          <h2>Diese Platzhalter ersetzen Sie.</h2>
          <dl className="vorlage-placeholders">
            {vorlage.platzhalter.map((platzhalter) => (
              <div key={platzhalter.name}>
                <dt><code>{platzhalter.name}</code></dt>
                <dd>{platzhalter.text}</dd>
              </div>
            ))}
          </dl>

          <h2>So richten Sie die Vorlage ein.</h2>
          <ol className="vorlage-steps">
            {ANLEITUNG.map((schritt) => (
              <li key={schritt.titel}>
                <h3>{schritt.titel}</h3>
                <p>{schritt.text}</p>
              </li>
            ))}
          </ol>
          {vorlage.getestet ? <DownloadBox vorlage={vorlage} /> : null}

          <h2>Grenzen.</h2>
          <ul className="vorlage-limits">
            {vorlage.grenzen.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <p className="muted">
            Eine Vorlage deckt den einfachen Fall ab. Soll der Ablauf zu Ihren Programmen passen und auch Sonderfälle
            abfangen, ist das ein Fall für mein Angebot: <Link href="/ki-beratung">so arbeite ich als KI-Berater</Link>.
          </p>
          <p className="vorlage-links">
            <Link href={VORLAGEN_PAGE.path} className="text-link">Alle Vorlagen ansehen <ArrowIcon /></Link>
            <Link href="/kontakt" className="text-link">Ablauf schildern <ArrowIcon /></Link>
          </p>
        </div>
      </section>

      <Closing content={CLOSING} />
    </>
  );
}
