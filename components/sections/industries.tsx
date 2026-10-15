import Link from 'next/link';
import { INDUSTRIES } from '@/lib/content/branchen';
import { CheckIcon, ArrowIcon } from '@/components/ui/icons';
import SectionHead from '@/components/ui/section-head';

interface IndustriesProps {
  intro: { eyebrow: string; title: string; lead: string };
  /** Auf einer Branchenseite die eigene Branche ausblenden. */
  exclude?: string;
}

export default function Industries({ intro, exclude }: IndustriesProps) {
  const list = INDUSTRIES.filter((industry) => industry.slug !== exclude);
  return (
    <section className="section tone-gray" id="branchen" aria-labelledby="industries-title">
      <div className="container">
        <SectionHead label={intro.eyebrow} title={intro.title} lead={intro.lead} id="industries-title" split />
        <div className={list.length === 3 ? 'grid-3' : 'grid-2'}>
          {list.map((industry) => (
            <article className="card card--hover industry-card" key={industry.slug}>
              <span className="label">{industry.trades}</span>
              <h3>{industry.name}</h3>
              <p className="muted">{industry.teaser}</p>
              <ul className="check-list industry-card__list">
                {industry.routines.map((routine) => (
                  <li key={routine.title}>
                    <CheckIcon />
                    <span><strong>{routine.title}.</strong> {routine.text}</span>
                  </li>
                ))}
              </ul>
              <Link className="text-link industry-card__link" href={`/branchen/${industry.slug}`}>
                Mehr für {industry.short} <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
