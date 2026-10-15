import type { Scene } from '@/lib/content/types';
import SectionHead from '@/components/ui/section-head';

interface ScenesProps {
  intro: { eyebrow: string; title: string; lead: string };
  scenes: readonly Scene[];
}

function ClockMark() {
  return (
    <svg className="scene-card__clock" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Scenes({ intro, scenes }: ScenesProps) {
  return (
    <section className="section tone-white" aria-labelledby="scenes-title">
      <div className="container">
        <SectionHead label={intro.eyebrow} title={intro.title} lead={intro.lead} id="scenes-title" split />
        <div className="grid-3">
          {scenes.map((scene) => (
            <article className="card card--hover scene-card" key={scene.title}>
              <span className="label">{scene.tag}</span>
              <h3>{scene.title}</h3>
              <p className="muted">{scene.text}</p>
              <p className="scene-card__hours">
                <ClockMark />
                <span>{scene.hours}</span>
              </p>
            </article>
          ))}
        </div>
        <p className="footnote">Grobe Werte aus Gesprächen mit Inhabern. Bei Ihnen kann es mehr oder weniger sein.</p>
      </div>
    </section>
  );
}
