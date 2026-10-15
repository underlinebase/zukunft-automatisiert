import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticles } from '@/lib/db';
import WissenTabs from '@/components/wissen-tabs';
import NewsletterForm from '@/components/newsletter-form';
import JsonLd from '@/components/seo/json-ld';
import { seoTitle } from '@/lib/seo/meta';
import { breadcrumbSchema, collectionSchema, graph, organizationSchema, personSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: seoTitle('Wissen: Automatisierung und KI ohne Hype'),
  description:
    'Praxisartikel für Inhaber kleiner Betriebe: wann sich Automatisierung lohnt, wo KI hilft und wo nicht, und was im Alltag wirklich Zeit spart.',
  alternates: { canonical: '/wissen' },
};

export default async function WissenPage() {
  const articles = await getArticles();
  const schema = graph(
    collectionSchema(articles),
    organizationSchema(),
    personSchema(),
    breadcrumbSchema([
      { name: 'Start', path: '/' },
      { name: 'Wissen', path: '/wissen' },
    ]),
  );
  return (
    <>
      <JsonLd data={schema} />
      <section className="page-hero">
        <div className="container page-hero__inner">
          <nav className="crumbs" aria-label="Brotkrumen"><Link href="/">Start</Link><span aria-hidden="true">/</span><span>Wissen</span></nav>
          <span className="label">Wissen</span>
          <h1>Notizen aus der Praxis.</h1>
          <p className="lead">Was im Alltag wirklich Zeit spart, und wo KI nur nach Fortschritt klingt.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <WissenTabs articles={articles} />
          <div className="newsletter-box">
            <h2>Neue Notizen per E-Mail</h2>
            <p className="muted">Eine kurze E-Mail, wenn ein neuer Beitrag erscheint. Abmelden geht jederzeit mit einem Klick.</p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
