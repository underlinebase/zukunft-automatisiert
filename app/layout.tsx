import type { Metadata } from 'next';
import { Figtree, Fraunces } from 'next/font/google';
import './globals.css';
import './styles/sections.css';
import './styles/week.css';
import './styles/pages.css';
// Seitenspezifische Stile laden die jeweiligen Routen selbst (z. B. app/garantie/page.tsx).
import ScrollReveal from '@/components/motion/scroll-reveal';
import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';
import { NAV_ITEMS, SITE, HOME_SEO } from '@/lib/content/site';
import { INDUSTRIES, industryHref } from '@/lib/content/branchen';

const fraunces = Fraunces({
  subsets: ['latin'],
  // Nur die optische Größe: hält die Überschriften kompakt. SOFT und WONK kosten ~55 KB und fallen kaum auf.
  axes: ['opsz'],
  variable: '--font-fraunces',
  display: 'swap',
});
const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree', display: 'swap' });

const HOME_TITLE = HOME_SEO.title;
const TITLE = HOME_SEO.ogTitle;
const DESCRIPTION = HOME_SEO.description;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: HOME_TITLE, template: `%s · ${SITE.name}` },
  description: DESCRIPTION,
  authors: [{ name: SITE.owner }],
  creator: SITE.owner,
  openGraph: { type: 'website', locale: 'de_DE', siteName: SITE.name, url: '/', title: TITLE, description: DESCRIPTION },
  // Nur die Kartenart: Titel und Beschreibung übernimmt Next.js aus openGraph der jeweiligen Seite.
  twitter: { card: 'summary_large_image' },
  // Bestätigt die Inhaberschaft in der Google Search Console.
  verification: { google: 'vPhsYaig5pPE5IPqUtGZHMCBGpuiQSXWTg88V26CkXU' },
};

// Markiert, dass JavaScript läuft. Erst dann wird der Hero-Titel für die Einblendung versteckt.
const JS_FLAG = "document.documentElement.classList.add('js')";

// Landingpages zeigen im Kopf nur Logo und Kontakt-Button.
const LANDING_PATHS = INDUSTRIES.map((industry) => industryHref(industry.slug));

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${figtree.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
        <a className="skip-link" href="#inhalt">Zum Inhalt springen</a>
        <SiteHeader nav={NAV_ITEMS} minimalPaths={LANDING_PATHS} />
        <main id="inhalt">{children}</main>
        <ScrollReveal />
        <SiteFooter />
      </body>
    </html>
  );
}
