import Link from 'next/link';
import { SITE } from '@/lib/content/site';
import { listedPages } from '@/lib/content/pages';
import Logo from './logo';

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Logo inverse />
            <p>
              {SITE.owner}, der KI-Realist. KI-Berater für Prozessautomatisierung, remote für Inhaber in ganz Deutschland. Ein Ablauf, 4 Wochen, Festpreis.
            </p>
          </div>
          <nav aria-label="Weitere Seiten">
            <h2 className="site-footer__title">Mehr</h2>
            <ul>
              <li><Link href="/ki-beratung">KI-Beratung</Link></li>
              <li><Link href="/ueber-mich">Über mich</Link></li>
              <li><Link href="/wissen">Wissen</Link></li>
              <li><Link href="/kontakt">Kontakt</Link></li>
            </ul>
          </nav>
          <nav aria-label="Angebot und Wissen">
            <h2 className="site-footer__title">Angebot &amp; Wissen</h2>
            <ul>
              {listedPages().map((page) => (
                <li key={page.path}><Link href={page.path}>{page.name}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="site-footer__title">Kontakt</h2>
            <ul>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {year} {SITE.owner} · {SITE.name}</span>
          <span className="site-footer__legal">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
