import Link from 'next/link';
import type { NavLink } from '@/lib/content/site';
import type { HomeScene, Industry } from '@/lib/content/types';
import { INDUSTRIES, industryHref } from '@/lib/content/branchen';
import { HOME_SCENES } from '@/lib/content/home';
import SectionHead from '@/components/ui/section-head';
import Slider from '@/components/ui/slider';
import { CheckIcon } from '@/components/ui/icons';

interface IndustriesProps {
  intro: { title: string; lead: string; link?: NavLink };
}

function ClockMark() {
  return (
    <svg className="scene-card__clock" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Szene der Startseite, sonst die erste Szene der Landingpage. */
function sceneFor(industry: Industry): HomeScene {
  return HOME_SCENES[industry.slug] ?? industry.scenes[0];
}

/**
 * Branchen als Slider: jede Karte mit einer typischen Szene aus dem Alltag und dem, was ich dagegen automatisiere.
 * Neue Branchen in lib/content/branchen.ts erscheinen hier automatisch.
 * Dies ist die einzige Stelle der Website, die auf die Landingpages verlinkt
 * (Menü und Footer bewusst nicht). Die ganze Karte ist klickbar. Der Link im Vorspann führt zur Ablauf-Bibliothek.
 */
export default function Industries({ intro }: IndustriesProps) {
  return (
    <section className="section tone-gray" id="branchen" aria-labelledby="industries-title">
      <div className="container">
        <SectionHead title={intro.title} lead={intro.lead} link={intro.link} id="industries-title" split />
        <Slider label="Branchen">
          {INDUSTRIES.map((industry) => {
            const scene = sceneFor(industry);
            return (
              <li key={industry.slug} className="slider__item">
                <article className="card card--hover industry-card">
                  <div className="industry-card__head">
                    <h3>
                      <Link className="industry-card__title-link" href={industryHref(industry.slug)}>
                        {industry.name}
                      </Link>
                    </h3>
                    <p className="industry-card__trades">{industry.trades}</p>
                  </div>
                  <p className="industry-card__scene">
                    <strong>{scene.title}</strong> {scene.text}
                  </p>
                  <p className="scene-card__hours">
                    <ClockMark />
                    <span>{scene.hours}</span>
                  </p>
                  <div className="industry-card__fix">
                    <p className="industry-card__teaser">{industry.teaser}</p>
                    <ul className="check-list industry-card__list">
                      {industry.routines.map((routine) => (
                        <li key={routine.title}>
                          <CheckIcon />
                          <span><strong>{routine.title}.</strong> {routine.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="text-link industry-card__link" aria-hidden="true">
                    Mehr für {industry.short}
                  </span>
                </article>
              </li>
            );
          })}
        </Slider>
        <p className="footnote">Grobe Werte aus Gesprächen mit Inhabern. Bei Ihnen kann es mehr oder weniger sein.</p>
      </div>
    </section>
  );
}
