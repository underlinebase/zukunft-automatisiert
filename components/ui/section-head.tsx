import Link from 'next/link';
import type { NavLink } from '@/lib/content/site';
import KeepCompounds from '@/components/ui/keep-compounds';

interface SectionHeadProps {
  title: string;
  lead?: string;
  /** Weiterführender Link unter dem Vorspann, z. B. zur Ablauf-Bibliothek. */
  link?: NavLink;
  split?: boolean;
  id?: string;
}

export default function SectionHead({ title, lead, link, split = false, id }: SectionHeadProps) {
  const leadText = lead ? <p className="lead">{lead}</p> : null;
  return (
    <div className={`section-head${split ? ' section-head--split' : ''}`}>
      <h2 id={id}><KeepCompounds text={title} /></h2>
      {link ? (
        <div className="section-head__aside">
          {leadText}
          <Link className="text-link" href={link.href}>
            {link.label}
          </Link>
          {link.note ? <span className="link-note">{link.note}</span> : null}
        </div>
      ) : (
        leadText
      )}
    </div>
  );
}
