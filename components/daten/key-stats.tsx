'use client';

import { useRef } from 'react';
import { useMotion } from '@/lib/motion/use-motion';
import { decimalsOf, setupCountUp } from './count-up';

export interface KeyStatView {
  id: string;
  value: number;
  display: string;
  label: string;
  context: string;
  sourceName: string;
  sourceHref: string;
}

interface KeyStatsProps {
  stats: readonly KeyStatView[];
}

/** Kennzahlen als Kacheln. Die Zahlen zählen beim Hereinscrollen von 0 hoch. */
export default function KeyStats({ stats }: KeyStatsProps) {
  const ref = useRef<HTMLUListElement>(null);

  useMotion(ref, (ctx) => {
    const root = ref.current;
    if (!root) return undefined;
    return setupCountUp(root, ctx);
  });

  return (
    <ul className="stat-grid" ref={ref}>
      {stats.map((stat) => (
        <li className="card stat" key={stat.id}>
          <p className="stat__value">
            <span aria-hidden="true">
              <span className="stat__number" data-count={stat.value} data-decimals={decimalsOf(stat.value)}>
                {stat.display}
              </span>
              <span className="stat__unit"> %</span>
            </span>
            <span className="visually-hidden">{stat.display} Prozent</span>
          </p>
          <p className="stat__label">{stat.label}</p>
          <p className="stat__context">{stat.context}</p>
          <a className="stat__source" href={stat.sourceHref}>
            Quelle: {stat.sourceName}
          </a>
        </li>
      ))}
    </ul>
  );
}
