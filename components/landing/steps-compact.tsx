import type { WeekStep } from '@/lib/content/types';

interface StepsCompactProps {
  steps: readonly WeekStep[];
  total: string;
}

/** Die 4 Wochen in kompakter Form (ohne Pin), für Landingpages. */
export default function StepsCompact({ steps, total }: StepsCompactProps) {
  return (
    <section className="section tone-white" aria-labelledby="steps-title">
      <div className="container">
        <div className="section-head section-head--split">
          <span className="label">So läuft es</span>
          <h2 id="steps-title">In 4 Wochen von der Aufnahme bis zur Übergabe.</h2>
          <p className="lead">{total}. Den Rest erledige ich.</p>
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
