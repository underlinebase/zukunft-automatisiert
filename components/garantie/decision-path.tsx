'use client';

import { useRef } from 'react';
import { useMotion } from '@/lib/motion/use-motion';

interface PathNode {
  label: string;
  title: string;
}

interface Outcome extends PathNode {
  text: string;
}

export interface DecisionPathContent {
  start: PathNode & { weeks: readonly { week: string; title: string }[] };
  check: PathNode;
  yes: Outcome;
  no: Outcome & { loop: string };
}

interface DecisionPathProps {
  content: DecisionPathContent;
}

/** Wie stark die Animation dem Scrollen nachläuft (Sekunden). */
const SCRUB_LAG = 0.6;

/**
 * Entscheidungsweg nach den 4 Wochen: Wochen → Prüfung → Übergabe oder kostenlose Nacharbeit.
 * Beim Scrollen zeichnen sich die Verbindungen, die Knoten erscheinen nacheinander.
 * Ohne JavaScript oder bei reduzierter Bewegung steht alles fertig da. Es werden nur
 * Deckkraft und Transformationen animiert, damit nichts im Layout springt.
 */
export default function DecisionPath({ content }: DecisionPathProps) {
  const ref = useRef<HTMLDivElement>(null);

  useMotion(ref, ({ gsap }) => {
    const root = ref.current;
    if (!root) return undefined;
    const q = gsap.utils.selector(root);
    const timeline = gsap.timeline({
      defaults: { ease: 'power2.out' },
      scrollTrigger: { trigger: root, start: 'top 78%', end: 'bottom 70%', scrub: SCRUB_LAG },
    });
    timeline
      .from(q('.decision__node--start'), { autoAlpha: 0, y: 24, duration: 0.5 })
      .from(q('.decision__weeks li'), { autoAlpha: 0, x: -12, duration: 0.3, stagger: 0.12 }, '<0.15')
      .from(q('.decision__seg--trunk'), { scaleY: 0, duration: 0.5, ease: 'none' })
      .from(q('.decision__node--check'), { autoAlpha: 0, scale: 0.92, duration: 0.45 })
      .from(q('.decision__seg--stem'), { scaleY: 0, duration: 0.25, ease: 'none' })
      .from(q('.decision__seg--bar'), { scaleX: 0, duration: 0.35, ease: 'none' })
      .from(q('.decision__seg--leg'), { scaleY: 0, duration: 0.3, ease: 'none' })
      .from(q('.decision__node--yes, .decision__node--no'), { autoAlpha: 0, y: 20, duration: 0.45, stagger: 0.18 })
      .fromTo(q('.decision__loop-path'), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.4, ease: 'none' });
    return () => timeline.kill();
  });

  const { start, check, yes, no } = content;

  return (
    <div className="decision" ref={ref} data-own-motion>
      <div className="decision__node decision__node--start">
        <span className="decision__tag">{start.label}</span>
        <h3>{start.title}</h3>
        <ol className="decision__weeks">
          {start.weeks.map((week) => (
            <li key={week.week}>
              <span>{week.week}</span> {week.title}
            </li>
          ))}
        </ol>
      </div>

      <div className="decision__connector" aria-hidden="true">
        <span className="decision__seg decision__seg--trunk" />
      </div>

      <div className="decision__node decision__node--check">
        <span className="decision__tag">{check.label}</span>
        <h3>{check.title}</h3>
      </div>

      <div className="decision__fork" aria-hidden="true">
        <span className="decision__seg decision__seg--stem" />
        <span className="decision__seg decision__seg--bar" />
        <span className="decision__seg decision__seg--leg decision__seg--leg-yes" />
        <span className="decision__seg decision__seg--leg decision__seg--leg-no" />
      </div>

      <div className="decision__outcomes">
        <div className="decision__node decision__node--yes">
          <span className="decision__tag">{yes.label}</span>
          <h3>{yes.title}</h3>
          <p>{yes.text}</p>
        </div>
        <div className="decision__node decision__node--no">
          <span className="decision__tag">{no.label}</span>
          <h3>{no.title}</h3>
          <p>{no.text}</p>
          <span className="decision__loop">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path className="decision__loop-path" pathLength="1" d="M20 12a8 8 0 1 1-2.34-5.66" />
              <path className="decision__loop-head" d="M20 3v4.5h-4.5" />
            </svg>
            {no.loop}
          </span>
        </div>
      </div>
    </div>
  );
}
