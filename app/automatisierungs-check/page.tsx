import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { CHECK_PAGE } from '@/lib/content/pages';
import { seoTitle } from '@/lib/seo/meta';

// Platzhalter: wird im eigenen Branch ausgebaut.
export const metadata: Metadata = {
  title: seoTitle(CHECK_PAGE.name),
  description: CHECK_PAGE.description,
  alternates: { canonical: CHECK_PAGE.path },
  robots: CHECK_PAGE.listed ? undefined : { index: false, follow: true },
};

export default function CheckPage() {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <Breadcrumbs items={[{ name: CHECK_PAGE.name }]} />
        <h1>{CHECK_PAGE.name}</h1>
        <p className="lead">{CHECK_PAGE.description}</p>
      </div>
    </section>
  );
}
