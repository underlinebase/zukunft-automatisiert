import type { Scene } from '@/lib/content/types';

interface PainPointsProps {
  audienceDative: string;
  scenes: readonly Scene[];
}

/** „Kennen Sie das?“ als große Aussagen mit Zeitangabe, statt Karten wie auf der Startseite. */
export default function PainPoints({ audienceDative, scenes }: PainPointsProps) {
  return (
    <section className="section tone-white" aria-labelledby="pain-title">
      <div className="container pain">
        <div className="pain__head">
          <span className="label">Kennen Sie das?</span>
          <h2 id="pain-title">Drei Szenen aus dem Alltag von {audienceDative}.</h2>
        </div>
        <ol className="pain__list">
          {scenes.map((scene, index) => (
            <li className="pain__item" key={scene.title}>
              <span className="pain__num num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className="pain__body">
                <span className="label">{scene.tag}</span>
                <h3 className="pain__quote">{scene.title}</h3>
                <p className="muted">{scene.text}</p>
              </div>
              <p className="pain__hours num">{scene.hours}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
