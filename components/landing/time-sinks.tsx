'use client';

import { useRef } from 'react';
import type { TimeSink } from '@/lib/content/types';
import { useMotion } from '@/lib/motion/use-motion';

interface TimeSinksProps {
  audienceDative: string;
  sinks: readonly TimeSink[];
}

const formatRange = (min: number, max: number) => `${min} bis ${max} Std.`;

/**
 * Hero-Grafik der Landingpages: Wo die Woche hingeht, als Balken je Zeitfresser.
 * Der größte Zeitfresser ist in Bordeaux markiert. Die Balken wachsen einmal beim Laden.
 */
export default function TimeSinks({ audienceDative, sinks }: TimeSinksProps) {
  const ref = useRef<HTMLDivElement>(null);
  const sorted = [...sinks].sort((a, b) => b.max - a.max);
  const scale = Math.max(...sorted.map((sink) => sink.max), 1);
  const totalMin = sorted.reduce((sum, sink) => sum + sink.min, 0);
  const totalMax = sorted.reduce((sum, sink) => sum + sink.max, 0);

  useMotion(ref, ({ gsap }) => {
    gsap.from('.time-sinks__fill', {
      scaleX: 0,
      transformOrigin: '0 50%',
      duration: 0.9,
      ease: 'power2.out',
      stagger: 0.15,
      delay: 0.3,
    });
    gsap.from('.time-sinks__note', { opacity: 0, y: 8, duration: 0.5, delay: 1.1 });
  });

  return (
    <div className="time-sinks" ref={ref}>
      <span className="label">Typische Woche</span>
      <h2 className="time-sinks__title">Wo die Zeit bei {audienceDative} hingeht</h2>
      <ul className="time-sinks__list">
        {sorted.map((sink, index) => (
          <li key={sink.label} className={`time-sinks__row${index === 0 ? ' is-top' : ''}`}>
            <div className="time-sinks__head">
              <span>{sink.label}</span>
              <span className="num">{formatRange(sink.min, sink.max)}</span>
            </div>
            <div className="time-sinks__track" aria-hidden="true">
              <span className="time-sinks__fill" style={{ width: `${(sink.max / scale) * 100}%` }} />
            </div>
          </li>
        ))}
      </ul>
      <p className="time-sinks__total num">
        Zusammen: <strong>{formatRange(totalMin, totalMax)} pro Woche</strong>
      </p>
      <p className="time-sinks__note">Den größten Brocken nehme ich Ihnen in 4 Wochen ab.</p>
      <p className="time-sinks__source">Grobe Werte aus Gesprächen, keine Messung in Ihrem Betrieb.</p>
    </div>
  );
}
