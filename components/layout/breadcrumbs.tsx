import Link from 'next/link';

export interface Crumb {
  name: string;
  /** Ohne Pfad: aktuelle Seite, wird nicht verlinkt. */
  path?: string;
}

interface BreadcrumbsProps {
  items: readonly Crumb[];
  className?: string;
}

/**
 * Brotkrumen-Navigation für alle Unterseiten. „Start“ steht immer vorn.
 * Auf dem Handy bleibt sie einzeilig: Die aktuelle Seite wird bei Platzmangel gekürzt.
 * Das passende Schema liefert breadcrumbSchema() aus lib/seo/schema.ts.
 */
export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const trail: Crumb[] = [{ name: 'Start', path: '/' }, ...items];
  return (
    <nav className={className ? `crumbs ${className}` : 'crumbs'} aria-label="Brotkrumen">
      <ol className="crumbs__list">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={`${crumb.name}-${index}`} className="crumbs__item">
              {crumb.path && !isLast ? (
                <Link href={crumb.path}>{crumb.name}</Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined}>{crumb.name}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
