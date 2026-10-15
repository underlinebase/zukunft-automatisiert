'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONTACT_ANCHOR, CONTACT_PAGE } from '@/lib/content/site';
import type { NavItem } from '@/lib/content/site';
import Logo from './logo';

interface SiteHeaderProps {
  nav: NavItem[];
  /** Seiten, auf denen nur Logo und Kontakt-Button erscheinen (Landingpages). */
  minimalPaths?: readonly string[];
}

export default function SiteHeader({ nav: NAV_ITEMS, minimalPaths = [] }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);
  const firstRender = useRef(true);

  // Menü bei Seitenwechsel schließen (State-Anpassung während des Renderns statt Effekt).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Beim Wechsel zwischen gleich aufgebauten Seiten (z. B. zwei Landingpages) oben beginnen,
  // sonst wirkt der Klick, als sei nichts passiert. Sprungmarken (#…) bleiben unberührt.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  // Hat die Seite ein Abschluss-Formular (#kontakt), dorthin springen; sonst zur Kontaktseite.
  const goToContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
    close();
    const form = document.getElementById(CONTACT_ANCHOR.slice(1));
    if (!form) return;
    event.preventDefault();
    form.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    window.history.replaceState(null, '', CONTACT_ANCHOR);
  };

  // Aktiv: echte Seiten (z. B. /wissen/…) und Unterseiten eines Menüpunkts (z. B. /steuerberater).
  const isActive = (item: NavItem) => {
    if (!item.href.startsWith('/#') && (pathname === item.href || pathname.startsWith(`${item.href}/`))) return true;
    return item.children?.some((child) => pathname === child.href) ?? false;
  };

  // Landingpages: kein Menü, damit Besucher beim Angebot bleiben.
  if (minimalPaths.includes(pathname)) {
    return (
      <header className="site-header site-header--minimal">
        <div className="container site-header__inner">
          <Logo />
          <Link href={CONTACT_PAGE} className="btn btn--primary site-header__cta" onClick={goToContact}>
            Ablauf schildern
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className={`site-header${open ? ' is-open' : ''}`}>
      <div className="container site-header__inner">
        <Logo />
        <nav className="site-nav" id="hauptnavigation" aria-label="Hauptnavigation">
          <ul className="site-nav__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className={item.children ? 'site-nav__item has-sub' : 'site-nav__item'}>
                <Link
                  href={item.href}
                  className={`site-nav__link${isActive(item) ? ' is-active' : ''}`}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  onClick={close}
                >
                  <span>{item.label}</span>
                  {item.hint ? <span className="site-nav__hint">{item.hint}</span> : null}
                </Link>
                {item.children ? (
                  <ul className="site-nav__sub" aria-label={item.label}>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="site-nav__sublink"
                          aria-current={pathname === child.href ? 'page' : undefined}
                          onClick={close}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <Link href={CONTACT_PAGE} className="btn btn--primary site-nav__cta" onClick={goToContact}>
            Ablauf schildern
          </Link>
        </nav>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="hauptnavigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="visually-hidden">{open ? 'Menü schließen' : 'Menü öffnen'}</span>
          <span className="menu-toggle__bars" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
