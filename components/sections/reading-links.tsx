import Link from 'next/link';
import type { NavLink } from '@/lib/content/site';
import { ArrowIcon } from '@/components/ui/icons';
import SectionHead from '@/components/ui/section-head';

interface ReadingLinksProps {
  content: { eyebrow: string; title: string; links: readonly NavLink[] };
  tone?: 'white' | 'gray';
}

/** Kurze Linkliste „Weiterlesen“, z. B. vor den Fragen auf der Startseite und auf /ki-beratung. */
export default function ReadingLinks({ content, tone = 'gray' }: ReadingLinksProps) {
  return (
    <section className={`section tone-${tone}`} aria-labelledby="weiterlesen-title">
      <div className="container">
        <SectionHead label={content.eyebrow} title={content.title} id="weiterlesen-title" />
        <ul className="ki-links">
          {content.links.map((link) => (
            <li key={link.href}>
              <Link className="text-link" href={link.href}>
                {link.label} <ArrowIcon />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
