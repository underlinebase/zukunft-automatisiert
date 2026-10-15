import type { Metadata } from 'next';
import { Figtree, Fraunces } from 'next/font/google';
import './globals.css';
import './styles/sections.css';
import './styles/week.css';
import './styles/pages.css';
import './styles/landing.css';
import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';
import { NAV_ITEMS, SITE } from '@/lib/content/site';

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['SOFT', 'WONK', 'opsz'],
  variable: '--font-fraunces',
  display: 'swap',
});
const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree', display: 'swap' });

const TITLE = 'Prozessautomatisierung in 4 Wochen, vom KI-Realisten';
const DESCRIPTION =
  'Marco Gundlach, der KI-Realist, automatisiert den Ablauf, der Ihren Betrieb jede Woche am meisten Zeit kostet. In 4 Wochen, zum Festpreis. Läuft es nicht, arbeitet er kostenlos weiter.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${TITLE} · ${SITE.name}`, template: `%s · ${SITE.name}` },
  description: DESCRIPTION,
  authors: [{ name: SITE.owner }],
  creator: SITE.owner,
  openGraph: { type: 'website', locale: 'de_DE', siteName: SITE.name, title: TITLE, description: DESCRIPTION },
  twitter: { card: 'summary_large_image', title: SITE.name, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

// Markiert, dass JavaScript läuft. Erst dann wird der Hero-Titel für die Einblendung versteckt.
const JS_FLAG = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${figtree.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
        <a className="skip-link" href="#inhalt">Zum Inhalt springen</a>
        <SiteHeader nav={NAV_ITEMS} />
        <main id="inhalt">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
