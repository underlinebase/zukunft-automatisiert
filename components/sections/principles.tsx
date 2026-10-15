import type { Principle } from '@/lib/content/types';
import SectionHead from '@/components/ui/section-head';

interface PrinciplesProps {
  intro: { eyebrow: string; title: string; lead: string };
  principles: readonly Principle[];
}

export default function Principles({ intro, principles }: PrinciplesProps) {
  return (
    <section className="section tone-gray" aria-labelledby="principles-title">
      <div className="container">
        <SectionHead label={intro.eyebrow} title={intro.title} lead={intro.lead} id="principles-title" split />
        <ol className="principles">
          {principles.map((principle, index) => (
            <li className="principle" key={principle.title}>
              <span className="principle__num num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <h3>{principle.title}</h3>
              <p className="muted">{principle.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
