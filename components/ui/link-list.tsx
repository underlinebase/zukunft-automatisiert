import Link from 'next/link';
import type { NavLink } from '@/lib/content/site';

/** Linkliste „Weiterlesen“. Eine Erläuterung steht neben dem Link, damit der Linktext kurz bleibt. */
export default function LinkList({ links }: { links: readonly NavLink[] }) {
  return (
    <ul className="ki-links">
      {links.map((link) => (
        <li key={link.href}>
          <Link className="text-link" href={link.href}>
            {link.label}
          </Link>
          {link.note ? <span className="link-note">{link.note}</span> : null}
        </li>
      ))}
    </ul>
  );
}
