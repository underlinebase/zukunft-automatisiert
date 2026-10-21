import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import StepCompare from '@/components/ablaeufe/step-compare';
import FaqSection from '@/components/sections/faq-section';
import Closing from '@/components/sections/closing';
import { ArrowIcon } from '@/components/ui/icons';
import { CLOSING } from '@/lib/content/home';
import { ABLAEUFE_PAGE, CHECK_PAGE, GARANTIE_PAGE } from '@/lib/content/pages';
import { KI_BERATUNG_PATH } from '@/lib/content/ki-beratung';
import { monthLabel } from '@/lib/content/articles/dates';
import { ablaufHref, findAblauf, publishedAblaeufe } from '@/lib/content/ablaeufe';
import { ablaufSavings } from '@/lib/content/ablaeufe/savings';
import { BRANCHEN, STUFEN } from '@/lib/content/ablaeufe/types';
import { formatEuro, formatHours } from '@/lib/calculator';
import { metaDescription, pageMetadata } from '@/lib/seo/meta';
import { markdownHref } from '@/lib/seo/markdown';
import { ablaufSchema, breadcrumbSchema, faqSchema, graph, organizationSchema, personSchema, webPageSchema } from '@/lib/seo/schema';
import { SITE } from '@/lib/content/site';
import KeepCompounds from '@/components/ui/keep-compounds';

// Stündlich neu erzeugen. Geplante Abläufe werden ab ihrem Erscheinungstag beim ersten Aufruf erzeugt.
export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return publishedAblaeufe().map((ablauf) => ({ slug: ablauf.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ablauf = findAblauf(slug);
  if (!ablauf) return {};
  const path = ablaufHref(slug);
  const base = pageMetadata({ title: ablauf.seoTitle ?? ablauf.title, description: metaDescription(ablauf.lead), path });
  return { ...base, alternates: { ...base.alternates, types: { 'text/markdown': markdownHref(path) } } };
}

export default async function AblaufPage({ params }: PageProps) {
  const { slug } = await params;
  const ablauf = findAblauf(slug);
  if (!ablauf) notFound();

  const path = ablaufHref(ablauf.slug);
  const savings = ablaufSavings(ablauf.beispiel);
  const { beispiel } = ablauf;
  const schema = graph(
    webPageSchema({ path, name: ablauf.title, description: ablauf.lead, mainEntity: `${SITE.url}${path}#ablauf` }),
    ablaufSchema(ablauf, path),
    personSchema(),
    organizationSchema(),
    faqSchema(ablauf.faqs),
    breadcrumbSchema([
      { name: 'Start', path: '/' },
      { name: ABLAEUFE_PAGE.name, path: ABLAEUFE_PAGE.path },
      { name: ablauf.title, path },
    ]),
  );

  return (
    <>
      <JsonLd data={schema} />
      <section className="page-hero">
        <div className="container page-hero__inner">
          <Breadcrumbs items={[{ name: ABLAEUFE_PAGE.name, path: ABLAEUFE_PAGE.path }, { name: ablauf.title }]} />
          <span className="label">{BRANCHEN[ablauf.branche]}</span>
          <h1><KeepCompounds text={ablauf.title} /></h1>
          <p className="ablauf-byline">
            Von <Link href="/ueber-mich">{SITE.owner}</Link>, dem KI-Realisten
            <span aria-hidden="true"> · </span>
            <time dateTime={ablauf.datePublished}>{monthLabel(ablauf.datePublished)}</time>
          </p>
          <p className="lead">{ablauf.lead}</p>
          <dl className="ablauf-facts">
            <div><dt>Im Beispiel gespart</dt><dd>{formatHours(savings.minutesPerWeek)} pro Woche</dd></div>
            <div><dt>Nutzen</dt><dd>{STUFEN[ablauf.nutzen]}</dd></div>
            <div><dt>Aufwand</dt><dd>{STUFEN[ablauf.aufwand]}</dd></div>
            <div><dt>Werkzeuge</dt><dd>{ablauf.werkzeuge.join(', ')}</dd></div>
          </dl>
        </div>
      </section>

      <section className="section tone-white" aria-labelledby="ablauf-heute">
        <div className="container ablauf-body">
          <h2 id="ablauf-heute">So läuft es heute.</h2>
          {ablauf.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <StepCompare heute={ablauf.heute} danach={ablauf.danach} />

          <h2>Was Sie weiter selbst machen.</h2>
          <p>{ablauf.mensch}</p>

          <h2>{ablauf.ki ? 'Wo KI dabei hilft.' : 'Braucht es dafür KI?'}</h2>
          <p>{ablauf.ki ?? 'Nein. Dieser Ablauf folgt festen Regeln. Das ist günstiger, schneller und leichter zu warten als eine KI-Lösung.'}</p>

          <h2>Rechenbeispiel.</h2>
          <p className="muted">Annahme: {beispiel.annahme}</p>
          <div className="ablauf-calc">
            <div><span className="ablauf-calc__value">{beispiel.minutesBefore} → {beispiel.minutesAfter} Min.</span><span>pro Vorgang</span></div>
            <div><span className="ablauf-calc__value">{beispiel.perWeek} ×</span><span>pro Woche</span></div>
            <div><span className="ablauf-calc__value">{formatHours(savings.minutesPerWeek)}</span><span>gespart pro Woche</span></div>
            <div><span className="ablauf-calc__value">{formatEuro(savings.euroPerYear)}</span><span>im Jahr bei {formatEuro(beispiel.hourlyRate)} pro Stunde</span></div>
          </div>
          <p className="muted">
            Gerechnet mit rund 46 Arbeitswochen im Jahr. Ihre eigenen Zahlen rechnen Sie mit dem <Link href="/#garantie">Zeitrechner auf der Startseite</Link> nach.
          </p>
          <p>
            Welcher Ablauf bei Ihnen am meisten Zeit kostet, zeigt der <Link href={CHECK_PAGE.path}>Automatisierungs-Check</Link>.
          </p>

          <h2>Grenzen und Voraussetzungen.</h2>
          <ul className="ablauf-limits">{ablauf.grenzen.map((item) => <li key={item}>{item}</li>)}</ul>

          <p className="ablauf-offer">
            Diesen Ablauf automatisiere ich in 4 Wochen zum Festpreis, mit{' '}
            <Link href={GARANTIE_PAGE.path}>Garantie für den vereinbarten Umfang</Link>. So läuft{' '}
            <Link href={KI_BERATUNG_PATH}>Prozessautomatisierung mit einem KI-Berater</Link> bei mir.
          </p>

          {ablauf.related && ablauf.related.length > 0 ? (
            <nav className="article__related" aria-label="Passend dazu">
              <h2>Passend dazu</h2>
              <ul>
                {ablauf.related.map((link) => (
                  <li key={link.href}><Link href={link.href} className="text-link">{link.label} <ArrowIcon /></Link></li>
                ))}
              </ul>
            </nav>
          ) : null}
          <p><Link href={ABLAEUFE_PAGE.path} className="text-link">Weitere Abläufe zum Automatisieren <ArrowIcon /></Link></p>
        </div>
      </section>

      <FaqSection intro={{ eyebrow: 'Fragen', title: 'Häufige Fragen zu diesem Ablauf.' }} items={ablauf.faqs} />
      <Closing content={CLOSING} />
    </>
  );
}
