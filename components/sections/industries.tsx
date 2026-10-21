import Link from 'next/link';
import type { NavLink } from '@/lib/content/site';
import { INDUSTRIES, industryHref } from '@/lib/content/branchen';
import { ArrowIcon, CheckIcon } from '@/components/ui/icons';
import SectionHead from '@/components/ui/section-head';
import Slider from '@/components/ui/slider';

interface IndustriesProps {
  intro: { eyebrow: string; title: string; lead: string; link?: NavLink };
}

/**
 * Branchen als Slider. Neue Branchen in lib/content/branchen.ts erscheinen hier automatisch.
 * Dies ist die einzige Stelle der Website, die auf die Landingpages verlinkt
 * (Menü und Footer bewusst nicht). Die ganze Karte ist klickbar. Der Link im Vorspann führt zur Ablauf-Bibliothek.
 */
export default function Industries({ intro }: IndustriesProps) {
  return (
    <section className="section tone-gray" id="branchen" aria-labelledby="industries-title">
      <div className="container">
        <SectionHead label={intro.eyebrow} title={intro.title} lead={intro.lead} link={intro.link} id="industries-title" split />
        <Slider label="Branchen">
          {INDUSTRIES.map((industry) => (
            <li key={industry.slug} className="slider__item">
              <article className="card card--hover industry-card">
                <span className="label">{industry.trades}</span>
                <h3>
                  <Link className="industry-card__title-link" href={industryHref(industry.slug)}>
                    {industry.name}
                  </Link>
                </h3>
                <p className="muted">{industry.teaser}</p>
                <ul className="check-list industry-card__list">
                  {industry.routines.map((routine) => (
                    <li key={routine.title}>
                      <CheckIcon />
                      <span><strong>{routine.title}.</strong> {routine.text}</span>
                    </li>
                  ))}
                </ul>
                <span className="text-link industry-card__link" aria-hidden="true">
                  Mehr für {industry.short} <ArrowIcon />
                </span>
              </article>
            </li>
          ))}
        </Slider>
      </div>
    </section>
  );
}
