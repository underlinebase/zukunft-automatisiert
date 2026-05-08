'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const path = usePathname();
  const active = (p: string) =>
    p === '/' ? path === '/' : path === p || path.startsWith(p + '/');

  return (
    <header className="topbar">
      <div className="container topbar__inner">
        <Link href="/" className="brand brand-link">
          <span className="dot" aria-hidden="true" />
          <span><b>ZUKUNFT.</b> AUTOMATISIERT.</span>
        </Link>
        <nav className="nav" aria-label="Hauptnavigation">
          {[
            ['/leistungen', 'Leistungen'],
            ['/cases', 'Cases'],
            ['/wissen', 'Wissen'],
            ['/news', 'News'],
            ['/ueber-mich', 'Über mich'],
          ].map(([href, label]) => (
            <Link key={href} href={href} className={active(href) ? 'active' : ''}>
              {label}
            </Link>
          ))}
          <Link href="/kontakt" className="cta">
            Diagnose-Termin →
          </Link>
        </nav>
      </div>
    </header>
  );
}
