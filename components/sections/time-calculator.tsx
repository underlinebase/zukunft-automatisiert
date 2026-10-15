'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import type { CalculatorDefaults } from '@/lib/content/types';
import { WORK_WEEKS_PER_YEAR, formatNumber, yearlyCost } from '@/lib/calculator';
import { CONTACT_ANCHOR } from '@/lib/content/site';
import { MOTION_OK, ensureGsap } from '@/lib/motion/gsap';

interface TimeCalculatorProps {
  defaults: CalculatorDefaults;
}

const HOURS = { min: 1, max: 30, step: 1 };
const RATE = { min: 30, max: 250, step: 5 };
const COUNT_DURATION = 0.6;

/**
 * Zahl, die bei Änderungen weich hochzählt. Bei reduzierter Bewegung wird sie sofort gesetzt.
 * React rendert nur den Startwert; danach schreibt ausschließlich der Effekt in den Knoten.
 */
function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const current = useRef({ value });
  const [initialText] = useState(() => formatNumber(value));

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    const state = current.current;
    const render = () => { element.textContent = formatNumber(state.value); };
    if (!window.matchMedia(MOTION_OK).matches) {
      state.value = value;
      render();
      return undefined;
    }
    const { gsap } = ensureGsap();
    const tween = gsap.to(state, { value, duration: COUNT_DURATION, ease: 'power2.out', onUpdate: render });
    return () => { tween.kill(); };
  }, [value]);

  return <span ref={ref}>{initialText}</span>;
}

export default function TimeCalculator({ defaults }: TimeCalculatorProps) {
  const [hoursPerWeek, setHours] = useState(defaults.hoursPerWeek);
  const [hourlyRate, setRate] = useState(defaults.hourlyRate);
  const { hoursPerYear, costPerYear } = yearlyCost({ hoursPerWeek, hourlyRate });
  const hoursId = useId();
  const rateId = useId();

  return (
    <div className="calculator">
      <span className="label">Zeitrechner</span>
      <h3 className="calculator__title">Was kostet Sie der Ablauf heute?</h3>

      <div className="calculator__field">
        <div className="calculator__row">
          <label htmlFor={hoursId}>Stunden pro Woche</label>
          <output htmlFor={hoursId} className="num">{hoursPerWeek} Std.</output>
        </div>
        <input
          id={hoursId}
          type="range"
          min={HOURS.min}
          max={HOURS.max}
          step={HOURS.step}
          value={hoursPerWeek}
          aria-valuetext={`${hoursPerWeek} Stunden pro Woche`}
          onChange={(event) => setHours(Number(event.target.value))}
        />
      </div>

      <div className="calculator__field">
        <div className="calculator__row">
          <label htmlFor={rateId}>Ihr Stundensatz</label>
          <output htmlFor={rateId} className="num">{hourlyRate} €</output>
        </div>
        <input
          id={rateId}
          type="range"
          min={RATE.min}
          max={RATE.max}
          step={RATE.step}
          value={hourlyRate}
          aria-valuetext={`${hourlyRate} Euro pro Stunde`}
          onChange={(event) => setRate(Number(event.target.value))}
        />
      </div>

      <div className="calculator__result" aria-live="polite">
        <p className="calculator__formula num">
          {hoursPerWeek} Std. × {hourlyRate} € × {WORK_WEEKS_PER_YEAR} Arbeitswochen
        </p>
        <div className="calculator__numbers">
          <p>
            <span className="calculator__big num"><CountUp value={hoursPerYear} /> Std.</span>
            <span className="calculator__caption">pro Jahr</span>
          </p>
          <p>
            <span className="calculator__big calculator__big--brand num"><CountUp value={costPerYear} /> €</span>
            <span className="calculator__caption">Kosten pro Jahr</span>
          </p>
        </div>
        <p className="calculator__note">Ihre eigene Rechnung mit Ihren Werten. Keine Zusage von mir.</p>
      </div>

      <Link href={CONTACT_ANCHOR} className="btn btn--primary btn--block">
        Diesen Ablauf schildern
      </Link>
    </div>
  );
}
