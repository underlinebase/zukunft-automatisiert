import type { CalculatorDefaults } from '@/lib/content/types';
import TimeCalculator from './time-calculator';

interface GuaranteeProps {
  content: {
    eyebrow: string;
    title: string;
    lead: string;
    points: readonly { label: string; text: string }[];
  };
  calculator: CalculatorDefaults;
}

export default function Guarantee({ content, calculator }: GuaranteeProps) {
  return (
    <section className="section tone-brand guarantee" id="garantie" aria-labelledby="guarantee-title">
      <div className="container guarantee__grid">
        <div className="guarantee__copy">
          <span className="label">{content.eyebrow}</span>
          <h2 id="guarantee-title">{content.title}</h2>
          <p className="guarantee__lead">{content.lead}</p>
          <dl className="guarantee__points">
            {content.points.map((point) => (
              <div className="guarantee__point" key={point.label}>
                <dt>{point.label}</dt>
                <dd>{point.text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <TimeCalculator defaults={calculator} />
      </div>
    </section>
  );
}
