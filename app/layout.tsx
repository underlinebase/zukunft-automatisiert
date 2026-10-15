import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import CustomCursor from '@/components/custom-cursor';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://zukunft-automatisiert.de'),
  title: {
    default: 'Zukunft. Automatisiert. - Prozess-Surgeon für Mittelständler',
    template: '%s · Zukunft. Automatisiert.',
  },
  description: 'Prozess-Diagnose, Automatisierung mit n8n und Unternehmensgedächtnis für Mittelständler. Marco Gundlach. 14+ Jahre Digitalisierung.',
  keywords: ['Prozessautomatisierung', 'n8n', 'Mittelstand', 'Prozessdiagnose', 'Unternehmensgedächtnis', 'RAG', 'Marco Gundlach'],
  authors: [{ name: 'Marco Gundlach' }],
  creator: 'Marco Gundlach',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Zukunft. Automatisiert.',
    title: 'Zukunft. Automatisiert. - Prozess-Surgeon für Mittelständler',
    description: 'Prozess-Diagnose, Automatisierung mit n8n und Unternehmensgedächtnis für Mittelständler.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zukunft. Automatisiert.',
    description: 'Prozess-Diagnose, Automatisierung mit n8n und Unternehmensgedächtnis für Mittelständler.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <CustomCursor />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
