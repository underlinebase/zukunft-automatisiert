'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONTACT_ANCHOR, NAV_ITEMS } from '@/lib/content/site';
import type { NavItem } from '@/lib/content/site';
import Logo from './logo';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);

  // Menü bei Seitenwechsel schließen (State-Anpassung während des Renderns statt Effekt).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  // Aktiv: echte Seiten (z. B. /wissen/…) und Unterseiten eines Menüpunkts (z. B. /branchen/…).
  const isActive = (item: NavItem) => {
    if (!item.href.startsWith('/#') && (pathname === item.href || pathname.startsWith(`${item.href}/`))) return true;
    return item.children?.some((child) => pathname === child.href) ?? false;
  };

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
          <Link href={CONTACT_ANCHOR} className="btn btn--primary site-nav__cta" onClick={close}>
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
