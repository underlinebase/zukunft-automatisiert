import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { GARANTIE_PAGE } from '@/lib/content/pages';
import { seoTitle } from '@/lib/seo/meta';

// Platzhalter: wird im eigenen Branch ausgebaut.
export const metadata: Metadata = {
  title: seoTitle(GARANTIE_PAGE.name),
  description: GARANTIE_PAGE.description,
  alternates: { canonical: GARANTIE_PAGE.path },
  robots: GARANTIE_PAGE.listed ? undefined : { index: false, follow: true },
};

export default function GarantiePage() {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <Breadcrumbs items={[{ name: GARANTIE_PAGE.name }]} />
        <h1>{GARANTIE_PAGE.name}</h1>
        <p className="lead">{GARANTIE_PAGE.description}</p>
      </div>
    </section>
  );
}
