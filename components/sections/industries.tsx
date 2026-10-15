import { INDUSTRIES } from '@/lib/content/branchen';
import { CheckIcon } from '@/components/ui/icons';
import SectionHead from '@/components/ui/section-head';
import Slider from '@/components/ui/slider';

interface IndustriesProps {
  intro: { eyebrow: string; title: string; lead: string };
}

/**
 * Branchen als Slider. Neue Branchen in lib/content/branchen.ts erscheinen hier automatisch.
 * Bewusst ohne Links: Die Landingpages werden gezielt beworben, nicht von der Startseite verlinkt.
 */
export default function Industries({ intro }: IndustriesProps) {
  const list = INDUSTRIES;
  return (
    <section className="section tone-gray" id="branchen" aria-labelledby="industries-title">
      <div className="container">
        <SectionHead label={intro.eyebrow} title={intro.title} lead={intro.lead} id="industries-title" split />
        <Slider label="Branchen">
          {list.map((industry) => (
            <li key={industry.slug} className="slider__item">
              <article className="card card--hover industry-card">
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
              </article>
            </li>
          ))}
        </Slider>
      </div>
    </section>
  );
}
