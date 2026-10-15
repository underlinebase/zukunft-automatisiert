import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticle, getArticles } from '@/lib/db';
import { CONTACT_PAGE } from '@/lib/content/site';
import { ArrowIcon } from '@/components/ui/icons';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.lead.slice(0, 160),
    alternates: { canonical: `/wissen/${slug}` },
    openGraph: { type: 'article' },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const [article, all] = await Promise.all([getArticle(slug), getArticles()]);
  if (!article) notFound();
  const index = all.findIndex((item) => item.slug === slug);
  const next = all[(index + 1) % all.length];

  return (
    <div className="container">
      <article className="article">
        <div className="article__body">
          <nav className="crumbs" aria-label="Brotkrumen" style={{ marginBottom: 24 }}>
            <Link href="/">Start</Link><span aria-hidden="true">/</span>
            <Link href="/wissen">Wissen</Link><span aria-hidden="true">/</span>
            <span>{article.category}</span>
          </nav>
          <span className="label" style={{ marginBottom: 16 }}>{article.category} · {article.read_minutes} Min. Lesezeit</span>
          <h1>{article.title}</h1>
          <p className="lead">{article.lead}</p>
          {article.body.map((block, i) => {
            if (block.kind === 'h2') return <h2 key={i}>{block.text}</h2>;
            if (block.kind === 'q') return <blockquote key={i}>{block.text}</blockquote>;
            return <p key={i}>{block.text}</p>;
          })}
          <div className="article__footer">
            {next && next.slug !== article.slug ? (
              <Link href={`/wissen/${next.slug}`} className="text-link">Nächste Notiz <ArrowIcon /></Link>
            ) : <span />}
            <Link href={CONTACT_PAGE} className="text-link">Ablauf schildern <ArrowIcon /></Link>
          </div>
        </div>
        {article.notes.length > 0 ? (
          <aside className="marginalia">
            <h2>Anmerkungen</h2>
            <ol>{article.notes.map((note) => <li key={note}>{note}</li>)}</ol>
            <h2>Stand</h2>
            <p>{article.date}</p>
          </aside>
        ) : null}
      </article>
    </div>
  );
}
