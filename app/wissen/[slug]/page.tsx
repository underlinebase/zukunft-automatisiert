import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticle, getArticles } from '@/lib/db';

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = await getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.lead.slice(0, 160),
    alternates: { canonical: `/wissen/${slug}` },
    openGraph: { type: 'article', publishedTime: a.date },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [a, all] = await Promise.all([getArticle(slug), getArticles()]);
  if (!a) notFound();
  const idx = all.findIndex(x => x.slug === slug);
  const next = all[(idx + 1) % all.length];

  return (
    <main className="page">
      <div className="container" style={{ paddingTop: 64, paddingBottom: 0 }}>
        <div className="crumbs">
          <Link href="/">START</Link><span className="sep">/</span>
          <Link href="/wissen">WISSEN</Link><span className="sep">/</span>
          <span>{a.category}</span>
        </div>
      </div>

      <article className="article">
        <div className="article__body">
          <div className="eyebrow"><span className="sect">§</span> {a.category} · {a.date} · {a.read_minutes} MIN</div>
          <h1 className="tight" style={{ marginTop: 24 }}>{a.title}</h1>
          <p className="lead">{a.lead}</p>
          {a.body.map((b, i) => {
            if (b.kind === 'h2') return <h2 key={i}>{b.text}</h2>;
            if (b.kind === 'q') return <blockquote key={i}>{b.text}</blockquote>;
            return <p key={i}>{b.text}</p>;
          })}
          <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 24 }}>
            <Link href={`/wissen/${next.slug}`} className="link-mono">NÄCHSTE NOTIZ <span aria-hidden="true">→</span></Link>
            <Link href="/kontakt" className="link-mono">MIT MARCO SPRECHEN <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <aside className="marginalia">
          <h4>NOTIZEN</h4>
          <ol>{a.notes.map((n, i) => <li key={i}>{n}</li>)}</ol>
          <h4>METADATEN</h4>
          <div>STAND: {a.date}</div>
          <div>LESEZEIT: {a.read_minutes} MIN</div>
          <div>KATEGORIE: {a.category}</div>
        </aside>
      </article>
    </main>
  );
}
