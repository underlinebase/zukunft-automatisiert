import type { RoutineDetail } from '@/lib/content/types';
import { CheckIcon, CrossIcon } from '@/components/ui/icons';

interface RoutineCompareProps {
  audience: string;
  routines: readonly RoutineDetail[];
}

/** Typische Abläufe der Branche als Vergleich „heute“ und „danach“. */
export default function RoutineCompare({ audience, routines }: RoutineCompareProps) {
  return (
    <section className="section tone-gray" aria-labelledby="routines-title">
      <div className="container">
        <div className="section-head section-head--split">
          <span className="label">Typische Abläufe</span>
          <h2 id="routines-title">Was ich für {audience} automatisiere.</h2>
          <p className="lead">Eine Auswahl. Welcher Ablauf bei Ihnen der richtige ist, klären wir im ersten Gespräch.</p>
        </div>
        <div className="compare">
          {routines.map((routine) => (
            <article className="compare__card" key={routine.title}>
              <h3>{routine.title}</h3>
              <div className="compare__cols">
                <div className="compare__col">
                  <span className="compare__tag"><CrossIcon /> Heute</span>
                  <p>{routine.today}</p>
                </div>
                <div className="compare__col compare__col--after">
                  <span className="compare__tag"><CheckIcon /> Danach</span>
                  <p>{routine.after}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
