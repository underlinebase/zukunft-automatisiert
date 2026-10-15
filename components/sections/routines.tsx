import type { Routine } from '@/lib/content/types';
import SectionHead from '@/components/ui/section-head';

interface RoutinesProps {
  audience: string;
  routines: readonly Routine[];
}

/** Typische Abläufe einer Branche (nur auf den Branchenseiten). */
export default function Routines({ audience, routines }: RoutinesProps) {
  return (
    <section className="section tone-gray" aria-labelledby="routines-title">
      <div className="container">
        <SectionHead
          label="Typische Abläufe"
          title={`Was ich für ${audience} oft automatisiere.`}
          lead="Eine Auswahl. Welcher Ablauf bei Ihnen der richtige ist, klären wir im ersten Gespräch."
          id="routines-title"
          split
        />
        <div className="grid-2">
          {routines.map((routine, index) => (
            <article className="card card--hover routine-card" key={routine.title}>
              <span className="principle__num num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <h3>{routine.title}</h3>
              <p className="muted">{routine.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
