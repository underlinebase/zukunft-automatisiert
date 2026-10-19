'use client';

import { useRef } from 'react';
import { useMotion } from '@/lib/motion/use-motion';

interface WorkflowNodesProps {
  nodes: readonly string[];
  /** Beschreibung der Kette für Screenreader, z. B. „Ablauf der Vorlage“. */
  label: string;
}

const NODE_DURATION = 0.35;
const LINK_DURATION = 0.4;

/**
 * Workflow als Kette von Knoten wie in n8n. Beim Scrollen erscheinen die Knoten nacheinander,
 * die Verbindungslinien zeichnen sich von Knoten zu Knoten.
 * Ohne JavaScript oder bei reduzierter Bewegung steht die Kette fertig verbunden da.
 */
export default function WorkflowNodes({ nodes, label }: WorkflowNodesProps) {
  const ref = useRef<HTMLOListElement>(null);

  useMotion(ref, ({ gsap }) => {
    const root = ref.current;
    if (!root) return undefined;
    const items = Array.from(root.querySelectorAll<HTMLElement>('.wf__node'));
    const lines = Array.from(root.querySelectorAll<SVGPathElement>('.wf__line'));
    const arrows = Array.from(root.querySelectorAll<SVGPathElement>('.wf__arrow'));
    const timeline = gsap.timeline({ scrollTrigger: { trigger: root, start: 'top 75%', once: true } });

    items.forEach((node, index) => {
      timeline.from(node, { opacity: 0, scale: 0.85, duration: NODE_DURATION, ease: 'back.out(1.6)' });
      if (!lines[index]) return;
      timeline
        .from(lines[index], { strokeDashoffset: 1, duration: LINK_DURATION, ease: 'power1.inOut' })
        .from(arrows[index], { opacity: 0, duration: 0.15 }, '-=0.1');
    });
    return () => timeline.kill();
  });

  return (
    <ol className="wf" ref={ref} aria-label={label} data-own-motion="">
      {nodes.map((node, index) => (
        <li key={node} className="wf__item">
          <span className="wf__node">
            <span className="wf__index" aria-hidden="true">{index + 1}</span>
            {node}
          </span>
          {index < nodes.length - 1 ? (
            <svg className="wf__link" viewBox="0 0 48 12" aria-hidden="true" focusable="false">
              <path className="wf__line" d="M2 6 H42" pathLength={1} />
              <path className="wf__arrow" d="M38 1.5 L45 6 L38 10.5" />
            </svg>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
