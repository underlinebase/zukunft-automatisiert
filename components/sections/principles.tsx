import type { Principle } from '@/lib/content/types';

interface PrinciplesListProps {
  principles: readonly Principle[];
  /** 4, wenn die Liste unter einer h3 steht. */
  headingLevel?: 3 | 4;
}

/** Die Grundsätze als Liste, ohne Abschnitt (Startseite: im Abschnitt Über mich). */
export function PrinciplesList({ principles, headingLevel = 3 }: PrinciplesListProps) {
  const Heading = headingLevel === 4 ? 'h4' : 'h3';
  return (
    <ul className="principles">
      {principles.map((principle) => (
        <li className="principle" key={principle.title}>
          <Heading>{principle.title}</Heading>
          <p className="muted">{principle.text}</p>
        </li>
      ))}
    </ul>
  );
}
