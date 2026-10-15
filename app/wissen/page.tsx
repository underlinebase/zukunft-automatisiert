import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticles } from '@/lib/db';
import WissenTabs from '@/components/wissen-tabs';
import NewsletterForm from '@/components/newsletter-form';

export const metadata: Metadata = {
  title: 'Wissen',
  description: 'Notizen aus der Praxis: Automatisierung, KI ohne Hype und was im Alltag wirklich Zeit spart.',
  alternates: { canonical: '/wissen' },
};

export default async function WissenPage() {
  const articles = await getArticles();
  return (
    <>
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
