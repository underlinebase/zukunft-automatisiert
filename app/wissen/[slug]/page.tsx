import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticle, getArticles } from '@/lib/db';
import { CONTACT_PAGE, SITE } from '@/lib/content/site';
import JsonLd from '@/components/seo/json-ld';
import { metaDescription, seoTitle } from '@/lib/seo/meta';
import { markdownHref } from '@/lib/seo/markdown';
import { articleSchema, breadcrumbSchema, graph, organizationSchema, personSchema } from '@/lib/seo/schema';
import { ArrowIcon } from '@/components/ui/icons';
import Breadcrumbs from '@/components/layout/breadcrumbs';

// Stündlich neu erzeugen. Geplante Artikel sind beim Build nicht dabei und werden ab ihrem Erscheinungstag
// beim ersten Aufruf erzeugt (dynamicParams ist standardmäßig an).
export const revalidate = 3600;

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
  const path = `/wissen/${slug}`;
  const description = metaDescription(article.lead);
  return {
    title: seoTitle(article.seoTitle ?? article.title),
    description,
    alternates: { canonical: path, types: { 'text/markdown': markdownHref(path) } },
    openGraph: {
      type: 'article',
      url: path,
      title: article.title,
      description,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [SITE.owner],
      section: article.category,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const [article, all] = await Promise.all([getArticle(slug), getArticles()]);
  if (!article) notFound();
  const index = all.findIndex((item) => item.slug === slug);
  const next = all[(index + 1) % all.length];
  const schema = graph(
    articleSchema(article),
    personSchema(),
    organizationSchema(),
    breadcrumbSchema([
      { name: 'Start', path: '/' },
      { name: 'Wissen', path: '/wissen' },
      { name: article.title, path: `/wissen/${article.slug}` },
    ]),
  );

  return (
    <div className="container">
      <JsonLd data={schema} />
      <article className="article">
        <div className="article__body">
          <Breadcrumbs className="crumbs--spaced" items={[{ name: 'Wissen', path: '/wissen' }, { name: article.title }]} />
          <span className="label" style={{ marginBottom: 16 }}>{article.category} · {article.read_minutes} Min. Lesezeit</span>
          <h1>{article.title}</h1>
          <p className="article__byline">
            Von <Link href="/ueber-mich">{SITE.owner}</Link>, dem KI-Realisten
            <span aria-hidden="true"> · </span>
            <time dateTime={article.datePublished}>{article.date}</time>
          </p>
          <p className="lead">{article.lead}</p>
          {article.body.map((block, i) => {
            if (block.kind === 'h2') return <h2 key={i}>{block.text}</h2>;
            if (block.kind === 'q') return <blockquote key={i}>{block.text}</blockquote>;
            return <p key={i}>{block.text}</p>;
          })}
          {article.related && article.related.length > 0 ? (
            <nav className="article__related" aria-label="Passend dazu">
              <h2>Passend dazu</h2>
              <ul>
                {article.related.map((link) => (
                  <li key={link.href}><Link href={link.href} className="text-link">{link.label} <ArrowIcon /></Link></li>
                ))}
              </ul>
            </nav>
          ) : null}
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
