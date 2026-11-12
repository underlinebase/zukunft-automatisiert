import Link from 'next/link';
import type { NavLink } from '@/lib/content/site';
import { CheckIcon, CrossIcon } from '@/components/ui/icons';

interface FitContent {
  title: string;
  lead: string;
  yes: readonly string[];
  no: readonly string[];
  /** Satz unter den Spalten mit einem Link, z. B. zum Automatisierungs-Check. */
  note?: { text: string; link: NavLink };
}

interface FitColumnsProps {
  content: FitContent;
  /** 4, wenn die Spalten unter einer h3 stehen. */
  headingLevel?: 3 | 4;
}

/** Die beiden Spalten samt Hinweis, ohne Abschnitt (Startseite: im Abschnitt Über mich). */
export function FitColumns({ content, headingLevel = 3 }: FitColumnsProps) {
  const Heading = headingLevel === 4 ? 'h4' : 'h3';
  return (
    <>
      <div className="fit">
        <div className="fit__col">
          <Heading>Das passt gut</Heading>
          <ul className="check-list">
            {content.yes.map((item) => (
              <li key={item}><CheckIcon />{item}</li>
            ))}
          </ul>
        </div>
        <div className="fit__col fit__col--no">
          <Heading>Das passt eher nicht</Heading>
          <ul className="check-list">
            {content.no.map((item) => (
              <li key={item}><CrossIcon />{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {content.note ? (
        <p className="footnote">
          {content.note.text} <Link href={content.note.link.href}>{content.note.link.label}</Link>
        </p>
      ) : null}
    </>
  );
}
