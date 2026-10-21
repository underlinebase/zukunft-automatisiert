import Link from 'next/link';
import type { NavLink } from '@/lib/content/site';
import type { CalculatorDefaults } from '@/lib/content/types';
import { ArrowIcon } from '@/components/ui/icons';
import TimeCalculator from './time-calculator';

interface GuaranteeProps {
  content: {
    eyebrow: string;
    title: string;
    lead: string;
    points: readonly { label: string; text: string }[];
    /** Link zur ausführlichen Garantie-Seite. */
    link?: NavLink;
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
          {content.link ? (
            <Link className="text-link guarantee__link" href={content.link.href}>
              {content.link.label} <ArrowIcon />
            </Link>
          ) : null}
        </div>
        <TimeCalculator defaults={calculator} />
      </div>
    </section>
  );
}
