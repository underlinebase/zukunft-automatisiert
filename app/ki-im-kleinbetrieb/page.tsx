import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { DATEN_PAGE } from '@/lib/content/pages';
import { seoTitle } from '@/lib/seo/meta';

// Platzhalter: wird im eigenen Branch ausgebaut.
export const metadata: Metadata = {
  title: seoTitle(DATEN_PAGE.name),
  description: DATEN_PAGE.description,
  alternates: { canonical: DATEN_PAGE.path },
  robots: DATEN_PAGE.listed ? undefined : { index: false, follow: true },
};

export default function DatenPage() {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <Breadcrumbs items={[{ name: DATEN_PAGE.name }]} />
        <h1>{DATEN_PAGE.name}</h1>
        <p className="lead">{DATEN_PAGE.description}</p>
      </div>
    </section>
  );
}
