import Link from 'next/link';
import LiveTicker from './live-ticker';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-12">
          <div className="col-span-8">
            <div className="eyebrow">
              <span className="sect" style={{ color: 'var(--bone)' }}>§</span> KONTAKT
            </div>
            <h2 className="tight" style={{ marginTop: 24, maxWidth: '14ch' }}>
              Bereit für einen Eingriff statt eines Workshops?
            </h2>
            <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/kontakt" className="btn" style={{ borderColor: 'var(--bone)', color: 'var(--bone)' }}>
                Diagnose-Termin <span className="arr">→</span>
              </Link>
            </div>
          </div>
          <div className="col-span-4" style={{ alignSelf: 'end', textAlign: 'right' }}>
            <LiveTicker items={['SYS_OK', 'VERFÜGBARKEIT Q4 / 2026']} />
          </div>
        </div>

        <div className="footer-cols">
          <div>
            <h4>STANDORT</h4>
            <ul className="meta">
              <li>Marco Gundlach</li>
              <li>22769 Hamburg · Remote DACH</li>
              <li>marco@zukunft-automatisiert.de</li>
            </ul>
          </div>
          <div>
            <h4>LEISTUNGEN</h4>
            <ul>
              <li><Link href="/leistungen/diagnose">Diagnose</Link></li>
              <li><Link href="/leistungen/implementation">Implementation</Link></li>
              <li><Link href="/leistungen/gedaechtnis">Gedächtnis</Link></li>
            </ul>
          </div>
          <div>
            <h4>FIRMA</h4>
            <ul>
              <li><Link href="/cases">Cases</Link></li>
              <li><Link href="/wissen">Wissen</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/ueber-mich">Über mich</Link></li>
            </ul>
          </div>
          <div>
            <h4>RECHT</h4>
            <ul>
              <li><Link href="/impressum">Impressum</Link></li>
              <li><Link href="/datenschutz">Datenschutz</Link></li>
              <li><a href="https://www.linkedin.com/in/marcogundlach/" target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline" style={{ marginTop: 64 }} />
        <div className="footer-bottom">
          <span>© 2026 · MARCO GUNDLACH · ZUKUNFT. AUTOMATISIERT.</span>
          <span>HAMBURG · DACH</span>
        </div>
      </div>
    </footer>
  );
}
