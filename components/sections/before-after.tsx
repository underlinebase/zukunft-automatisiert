'use client';

import { useRef } from 'react';
import type { BeforeAfterExample } from '@/lib/content/types';
import { formatHours, minutesPerCase, savedMinutesPerWeek } from '@/lib/calculator';
import { useMotion } from '@/lib/motion/use-motion';

interface BeforeAfterProps {
  example: BeforeAfterExample;
}

function StepCheck() {
  return (
    <svg className="ba-step__check" viewBox="0 0 24 24" aria-hidden="true">
      <circle className="ba-step__ring" cx="12" cy="12" r="11" fill="none" strokeWidth="1.5" />
      <circle className="ba-step__fill" cx="12" cy="12" r="12" />
      <path className="ba-step__tick" d="M7.5 12.5l3 3 6-6.5" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Vorher/Nachher: Beim Scrollen bekommen die Schritte nacheinander einen Haken und rücken in Grau zurück.
 * Ohne Animation wird direkt der Endzustand gezeigt.
 */
export default function BeforeAfter({ example }: BeforeAfterProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const before = minutesPerCase(example, 'before');
  const after = minutesPerCase(example, 'after');
  const saved = savedMinutesPerWeek(example);

  useMotion(sectionRef, ({ gsap }) => {
    const rows = gsap.utils.toArray<HTMLElement>('.ba-step');
    const minutesEl = sectionRef.current?.querySelector('.ba-minutes');
    const savedEl = sectionRef.current?.querySelector('.ba-saved__value');
    const counter = { minutes: before, saved: 0 };
    const render = () => {
      if (minutesEl) minutesEl.textContent = String(Math.round(counter.minutes));
      if (savedEl) savedEl.textContent = formatHours(counter.saved);
    };

    const timeline = gsap.timeline({
      defaults: { ease: 'power1.out' },
      scrollTrigger: { trigger: '.ba-list', start: 'top 72%', end: 'bottom 50%', scrub: 0.5 },
      onUpdate: render,
    });
    rows.forEach((row, index) => {
      const at = index;
      timeline.from(row.querySelector('.ba-step__fill'), { scale: 0, transformOrigin: '50% 50%', duration: 0.35 }, at);
      timeline.from(row.querySelector('.ba-step__tick'), { opacity: 0, duration: 0.2 }, at + 0.15);
      timeline.from(row, { '--done': 0, duration: 0.5 }, at + 0.2);
      timeline.from(row.querySelector('.ba-step__after'), { opacity: 0, y: -4, duration: 0.4 }, at + 0.35);
    });
    timeline.fromTo(counter, { minutes: before }, { minutes: after, duration: rows.length, ease: 'none' }, 0);
    timeline.fromTo(counter, { saved: 0 }, { saved, duration: 0.8 }, rows.length - 0.4);
    render();

    // Beim Zurücksetzen (Breakpoint, reduzierte Bewegung) wieder die Endwerte zeigen.
    return () => {
      if (minutesEl) minutesEl.textContent = String(after);
      if (savedEl) savedEl.textContent = formatHours(saved);
    };
  });

  return (
    <section className="section tone-gray" ref={sectionRef} aria-labelledby="ba-title">
      <div className="container before-after">
        <div className="before-after__intro">
          <span className="label">Vorher und nachher</span>
          <h2 id="ba-title">{example.title}</h2>
          <p className="muted">{example.context}</p>
          <div className="ba-summary">
            <p className="ba-summary__row">
              <span>Zeit pro Vorgang</span>
              <strong className="num"><span className="ba-minutes">{after}</span> Min.</strong>
            </p>
            <p className="ba-summary__row ba-summary__row--muted">
              <span>Vorher</span>
              <span className="num">{before} Min.</span>
            </p>
            <p className="ba-saved">
              <span className="ba-saved__label">Gespart bei {example.perWeek} {example.unit}</span>
              <strong className="ba-saved__value num">{formatHours(saved)}</strong>
              <span className="ba-saved__unit">pro Woche</span>
            </p>
          </div>
        </div>
        <ol className="ba-list">
          {example.steps.map((step) => (
            <li className={`ba-step${step.minutesAfter > 0 ? ' ba-step--partial' : ''}`} key={step.text}>
              <StepCheck />
              <div className="ba-step__body">
                <span className="ba-step__text">{step.text}</span>
                {step.afterText ? <span className="ba-step__after">{step.afterText}</span> : null}
              </div>
              <span className="ba-step__minutes num">
                <span className="ba-step__before">{step.minutesBefore} Min.</span>
                <span className="ba-step__now">{step.minutesAfter > 0 ? `${step.minutesAfter} Min.` : 'läuft allein'}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
