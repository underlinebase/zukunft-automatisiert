import type { Fact } from '@/lib/content/types';

interface FactsBarProps {
  facts: readonly Fact[];
}

export default function FactsBar({ facts }: FactsBarProps) {
  return (
    <section className="facts tone-gray" id="angebot" aria-label="Das Angebot kurz gesagt">
      <div className="container">
        <span className="label facts__title">Kurz gesagt</span>
        <dl className="facts__list">
          {facts.map((fact) => (
            <div className="facts__item" key={fact.label}>
              <dt className="label">{fact.label}</dt>
              <dd>
                <strong className="facts__value">{fact.value}</strong>
                <span className="facts__text">{fact.text}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
