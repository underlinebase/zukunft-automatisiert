import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import AblaufFilter from '@/components/ablaeufe/ablauf-filter';
import Closing from '@/components/sections/closing';
import { CLOSING } from '@/lib/content/home';
import { ABLAEUFE_PAGE, CHECK_PAGE, pageSeoTitle } from '@/lib/content/pages';
import { ablaeufeByBranche, ablaufHref, publishedAblaeufe } from '@/lib/content/ablaeufe';
import { pageMetadata } from '@/lib/seo/meta';
import { breadcrumbSchema, graph, organizationSchema, personSchema } from '@/lib/seo/schema';
import { SITE } from '@/lib/content/site';

// Stündlich neu erzeugen, damit geplante Abläufe am Erscheinungstag auftauchen.
export const revalidate = 3600;

export const metadata: Metadata = pageMetadata({
  title: pageSeoTitle(ABLAEUFE_PAGE),
  description: ABLAEUFE_PAGE.description,
  path: ABLAEUFE_PAGE.path,
});

export default function AblaeufePage() {
  const items = publishedAblaeufe();
  const groups = ablaeufeByBranche(items);
  const schema = graph(
    {
      '@type': 'CollectionPage',
      '@id': `${SITE.url}${ABLAEUFE_PAGE.path}#seite`,
      name: ABLAEUFE_PAGE.name,
      url: `${SITE.url}${ABLAEUFE_PAGE.path}`,
      description: ABLAEUFE_PAGE.description,
      inLanguage: 'de-DE',
      isPartOf: { '@id': `${SITE.url}/#website` },
      breadcrumb: { '@id': `${SITE.url}${ABLAEUFE_PAGE.path}#breadcrumb` },
      publisher: { '@id': `${SITE.url}/#organisation` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: items.map((ablauf, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: ablauf.title,
          url: `${SITE.url}${ablaufHref(ablauf.slug)}`,
        })),
      },
    },
    organizationSchema(),
    personSchema(),
    breadcrumbSchema([
      { name: 'Start', path: '/' },
      { name: ABLAEUFE_PAGE.name, path: ABLAEUFE_PAGE.path },
    ]),
  );

  return (
    <>
      <JsonLd data={schema} />
      <section className="page-hero">
        <div className="container page-hero__inner">
          <Breadcrumbs items={[{ name: ABLAEUFE_PAGE.name }]} />
          <span className="label">Ablauf-Bibliothek</span>
          <h1>Was sich in Ihrem Betrieb automatisieren lässt.</h1>
          <p className="lead">
            Jeder Ablauf auf einer Seite: wie er heute läuft, wie danach, was Sie weiter selbst machen und was er im
            Beispiel an Zeit bringt. Nach Branche sortiert.
          </p>
          <p className="page-hero__more">
            Unsicher, wo Sie anfangen? <Link href={CHECK_PAGE.path}>Zum Automatisierungs-Check</Link>. Ob sich ein Ablauf
            rechnet, lesen Sie in <Link href="/wissen/wann-sich-automatisierung-lohnt">Wann sich eine Automatisierung lohnt</Link>.
          </p>
        </div>
      </section>
      <section className="section tone-white">
        <div className="container">
          <AblaufFilter groups={groups} />
        </div>
      </section>
      <Closing content={CLOSING} />
    </>
  );
}
