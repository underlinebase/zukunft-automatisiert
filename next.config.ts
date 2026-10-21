import type { NextConfig } from "next";

const MARKDOWN_PAGE_SLUGS = ['ki-beratung', 'garantie', 'ueber-mich', 'ki-im-kleinbetrieb'];

const nextConfig: NextConfig = {
  // Entfernte Seiten des alten Auftritts dauerhaft umleiten, damit alte Links nicht ins Leere laufen.
  async redirects() {
    return [
      { source: '/leistungen', destination: '/#angebot', permanent: true },
      { source: '/leistungen/:slug', destination: '/#angebot', permanent: true },
      { source: '/cases', destination: '/', permanent: true },
      { source: '/cases/:slug', destination: '/', permanent: true },
      { source: '/news', destination: '/', permanent: true },
      // Landingpages liegen jetzt direkt unter der Domain (/steuerberater statt /branchen/steuerberater).
      { source: '/branchen', destination: '/#branchen', permanent: true },
      { source: '/branchen/:slug', destination: '/:slug', permanent: true },
      // Alte Wissen-Artikel wurden durch neue ersetzt.
      { source: '/wissen/warum-workshops-nichts-bauen', destination: '/wissen', permanent: true },
      { source: '/wissen/warum-rag-systeme-meist-scheitern', destination: '/wissen', permanent: true },
      { source: '/wissen/die-vier-engpaesse', destination: '/wissen/wo-ihre-woche-hingeht', permanent: true },
      { source: '/wissen/n8n-statt-zapier', destination: '/wissen/warum-ich-meistens-n8n-einsetze', permanent: true },
    ];
  },
  // Markdown-Fassungen für KI-Crawler unter derselben Adresse wie die HTML-Seite plus „.md“ (llmstxt.org).
  // Als afterFiles-Rewrite greifen sie vor den dynamischen Seiten /wissen/[slug] und /ablaeufe/[slug].
  async rewrites() {
    return [
      { source: '/wissen/:slug.md', destination: '/md/wissen/:slug' },
      { source: '/ablaeufe/:slug.md', destination: '/md/ablaeufe/:slug' },
      // Hauptseiten mit Markdown-Fassung (app/md/[page]/route.ts, lib/seo/page-markdown.ts).
      ...MARKDOWN_PAGE_SLUGS.map((slug) => ({ source: `/${slug}.md`, destination: `/md/${slug}` })),
    ];
  },
};

export default nextConfig;
