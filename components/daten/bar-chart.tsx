'use client';

import { useRef } from 'react';
import type { CSSProperties } from 'react';
import { useMotion } from '@/lib/motion/use-motion';
import { decimalsOf, setupCountUp } from './count-up';

export interface BarView {
  label: string;
  value: number;
  display: string;
  sourceHref: string;
  reference?: boolean;
}

interface BarChartProps {
  title: string;
  lead: string;
  bars: readonly BarView[];
  footnote: string;
}

const BAR_DURATION = 1.1;
const BAR_STAGGER = 0.12;

/**
 * Waagerechtes Balkendiagramm aus reinem HTML und CSS, Skala 0 bis 100 Prozent.
 * Beim Hereinscrollen wachsen die Balken von links, die Werte zählen mit.
 * Ohne JavaScript oder bei reduzierter Bewegung stehen die Balken in voller Länge da.
 */
export default function BarChart({ title, lead, bars, footnote }: BarChartProps) {
  const ref = useRef<HTMLElement>(null);

  useMotion(ref, (ctx) => {
    const root = ref.current;
    if (!root) return undefined;
    const fills = root.querySelectorAll('.bars__fill');
    const growth = ctx.gsap.from(fills, {
      scaleX: 0,
      duration: BAR_DURATION,
      ease: 'power2.out',
      stagger: BAR_STAGGER,
      scrollTrigger: { trigger: root, start: 'top 80%', once: true },
    });
    const resetCount = setupCountUp(root, ctx);
    return () => {
      growth.kill();
      resetCount();
    };
  });

  return (
    <figure className="bars" ref={ref} data-own-motion>
      <figcaption className="bars__caption">
        <h3>{title}</h3>
        <p className="muted">{lead}</p>
      </figcaption>
      <ul className="bars__list">
        {bars.map((bar) => (
          <li className={bar.reference ? 'bars__row bars__row--reference' : 'bars__row'} key={bar.label}>
            <span className="bars__label">
              {bar.label}{' '}
              <a className="bars__source" href={bar.sourceHref}>
                Quelle
              </a>
            </span>
            <span className="bars__track" aria-hidden="true">
              <span className="bars__fill" style={{ '--bar': `${bar.value}%` } as CSSProperties} />
            </span>
            <span className="bars__value">
              <span aria-hidden="true">
                <span data-count={bar.value} data-decimals={decimalsOf(bar.value)}>
                  {bar.display}
                </span>{' '}
                %
              </span>
              <span className="visually-hidden">{bar.display} Prozent</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="bars__footnote">{footnote}</p>
    </figure>
  );
}
