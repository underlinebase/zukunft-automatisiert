import type { WeekStep } from '@/lib/content/types';

interface StepsCompactProps {
  steps: readonly WeekStep[];
  total: string;
  /** Eigene Überschrift, etwa auf /ki-beratung. Ohne Angabe gilt der Text der Landingpages. */
  intro?: { label: string; title: string; lead: string };
  id?: string;
}

/** Die 4 Wochen in kompakter Form (ohne Pin), für Landingpages und /ki-beratung. */
export default function StepsCompact({ steps, total, intro, id }: StepsCompactProps) {
  const head = intro ?? {
    label: 'So läuft es',
    title: 'In 4 Wochen von der Aufnahme bis zur Übergabe.',
    lead: `${total}. Den Rest erledige ich.`,
  };
  return (
    <section className="section tone-white" id={id} aria-labelledby="steps-title">
      <div className="container">
        <div className="section-head section-head--split">
          <span className="label">{head.label}</span>
          <h2 id="steps-title">{head.title}</h2>
          <p className="lead">{head.lead}</p>
        </div>
        <ol className="steps">
          {steps.map((step) => (
            <li className="steps__item" key={step.week}>
              <span className="label">{step.week}</span>
              <h3>{step.title}</h3>
              <p className="muted">{step.youGet}</p>
              <span className="steps__time num">Ihre Zeit: {step.yourTime}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
