import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { VORLAGEN_PAGE } from '@/lib/content/pages';
import { seoTitle } from '@/lib/seo/meta';

// Platzhalter: wird im eigenen Branch ausgebaut.
export const metadata: Metadata = {
  title: seoTitle(VORLAGEN_PAGE.name),
  description: VORLAGEN_PAGE.description,
  alternates: { canonical: VORLAGEN_PAGE.path },
  robots: VORLAGEN_PAGE.listed ? undefined : { index: false, follow: true },
};

export default function VorlagenPage() {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <Breadcrumbs items={[{ name: VORLAGEN_PAGE.name }]} />
        <h1>{VORLAGEN_PAGE.name}</h1>
        <p className="lead">{VORLAGEN_PAGE.description}</p>
      </div>
    </section>
  );
}
