import type { ReactNode } from 'react';
import Link from 'next/link';
import type { NavLink } from '@/lib/content/site';
import type { CalculatorDefaults } from '@/lib/content/types';
import TimeCalculator from './time-calculator';
import { PilotOffer, type PilotContent } from './experience';

interface GuaranteeProps {
  content: {
    title: string;
    lead: string;
    points: readonly { label: string; text: string }[];
    /** Link zur ausführlichen Garantie-Seite. */
    link?: NavLink;
  };
  calculator: CalculatorDefaults;
  /** Pilotangebot unter dem Zeitrechner (Startseite). */
  pilot?: PilotContent;
  /** Weiterer Teil unter Garantie und Zeitrechner, im selben Abschnitt (z. B. Kosten auf /ki-beratung). */
  children?: ReactNode;
}

export default function Guarantee({ content, calculator, pilot, children }: GuaranteeProps) {
  return (
    <section className="section tone-brand guarantee" id="garantie" aria-labelledby="guarantee-title">
      <div className="container guarantee__grid">
        <div className="guarantee__copy">
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
              {content.link.label}
            </Link>
          ) : null}
        </div>
        <div className="guarantee__side">
          <TimeCalculator defaults={calculator} />
          {pilot ? <PilotOffer pilot={pilot} /> : null}
        </div>
      </div>
      {children ? <div className="container guarantee__extra">{children}</div> : null}
    </section>
  );
}
