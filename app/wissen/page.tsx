import type { Metadata } from 'next';
import { getArticles } from '@/lib/db';
import WissenTabs from '@/components/wissen-tabs';

export const metadata: Metadata = {
  title: 'Wissen',
  description: 'Notizen, Methodik-Texte, technische Vermerke. Schreibstil akademisch-pragmatisch, ohne Begeisterungs-Rhetorik.',
  alternates: { canonical: '/wissen' },
};

export default async function WissenPage() {
  const articles = await getArticles();
  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <a href="/">START</a><span className="sep">/</span><span>WISSEN</span>
          </div>
          <div className="eyebrow" style={{ marginTop: 40 }}><span className="sect">§</span> WISSEN</div>
          <h1 className="tight">Operations-Berichte aus der Werkstatt.</h1>
          <p className="lead">
            Notizen, Methodik-Texte, technische Vermerke. Keine Trend-Beiträge, keine Listicles.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <WissenTabs articles={articles} />
        </div>
      </section>
    </main>
  );
}
