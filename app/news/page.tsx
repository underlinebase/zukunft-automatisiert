import type { Metadata } from 'next';
import Link from 'next/link';
import { getNews } from '@/lib/db';

export const metadata: Metadata = {
  title: 'News',
  description: 'Termine, Verfügbarkeit, Veröffentlichungen. Selten, kurz.',
  alternates: { canonical: '/news' },
};

export default async function NewsPage() {
  const news = await getNews();
  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">START</Link><span className="sep">/</span><span>NEWS</span>
          </div>
          <div className="eyebrow" style={{ marginTop: 40 }}><span className="sect">§</span> AKTUELLES</div>
          <h1 className="tight">Operative Hinweise. Selten, kurz.</h1>
          <p className="lead">Termine, Verfügbarkeit, Veröffentlichungen. Vier bis sechs Einträge pro Jahr — nicht mehr.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="wissen-list">
            {news.map((n, i) => (
              <div key={i} className="wissen-item" style={{ cursor: 'default', gridTemplateColumns: '120px 1fr 200px' }}>
                <div className="idx">{n.date}</div>
                <div>
                  <h3 className="tight" style={{ marginBottom: 8 }}>{n.title}</h3>
                  <p className="muted" style={{ margin: 0, fontSize: 16 }}>{n.body}</p>
                </div>
                <div className="read">№ {String(news.length - i).padStart(3, '0')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
