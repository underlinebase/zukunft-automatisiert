'use client';

import { useRef } from 'react';
import type { BeforeAfterExample } from '@/lib/content/types';
import { formatHours, minutesPerCase, progressAfterEachStep, savedMinutesPerWeek } from '@/lib/calculator';
import { useMotion } from '@/lib/motion/use-motion';

interface BeforeAfterProps {
  example: BeforeAfterExample;
}

/** Sekunden, die das einmalige Hochzählen auf dem Handy dauert. */
const MOBILE_COUNT_DURATION = 1.4;

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
  const stepProgress = progressAfterEachStep(example);
  // Schritte, die nicht komplett wegfallen, offen benennen (z. B. Prüfen und Freigeben).
  const remaining = example.steps
    .filter((step) => step.minutesAfter > 0)
    .map((step) => `${step.keeps ?? step.text} (ca. ${step.minutesAfter} Min.)`);

  useMotion(sectionRef, ({ gsap, isDesktop }) => {
    const rows = gsap.utils.toArray<HTMLElement>('.ba-step');
    const minutesEl = sectionRef.current?.querySelector('.ba-minutes');
    const savedEl = sectionRef.current?.querySelector('.ba-saved__value');
    const counter = { minutes: before, saved: 0 };
    const render = () => {
      if (minutesEl) minutesEl.textContent = String(Math.round(counter.minutes));
      if (savedEl) savedEl.textContent = formatHours(counter.saved);
    };

    // Desktop: Der Zusammenfassungs-Kasten steht daneben und ist während des ganzen Ablaufs sichtbar.
    // Die Zahlen wachsen dort mit jedem Haken mit.
    const timeline = gsap.timeline({
      defaults: { ease: 'power1.out' },
      scrollTrigger: isDesktop
        ? { trigger: '.ba-list', start: 'top 40%', end: 'bottom 65%', scrub: 0.5 }
        : { trigger: '.ba-list', start: 'top 80%', end: 'bottom 75%', scrub: 0.5 },
      onUpdate: isDesktop ? render : undefined,
    });
    rows.forEach((row, index) => {
      const at = index;
      timeline.from(row.querySelector('.ba-step__fill'), { scale: 0, transformOrigin: '50% 50%', duration: 0.35 }, at);
      timeline.from(row.querySelector('.ba-step__tick'), { opacity: 0, duration: 0.2 }, at + 0.15);
      timeline.from(row, { '--done': 0, duration: 0.5 }, at + 0.2);
      timeline.from(row.querySelector('.ba-step__after'), { opacity: 0, y: -4, duration: 0.4 }, at + 0.35);
      const reached = stepProgress[index];
      if (isDesktop && reached) {
        timeline.to(counter, { minutes: reached.minutesPerCase, saved: reached.savedPerWeek, duration: 0.5 }, at + 0.2);
      }
    });
    // Mobil steht der Kasten über der Liste: Zahlen einmal hochzählen, sobald er ins Bild kommt.
    if (!isDesktop) {
      gsap.to(counter, {
        minutes: after,
        saved,
        duration: MOBILE_COUNT_DURATION,
        ease: 'power2.out',
        onUpdate: render,
        scrollTrigger: { trigger: '.ba-saved', start: 'bottom 90%', once: true },
      });
    }
    render();

    // Beim Zurücksetzen (Breakpoint, reduzierte Bewegung) wieder die Endwerte zeigen.
    return () => {
      if (minutesEl) minutesEl.textContent = String(after);
      if (savedEl) savedEl.textContent = formatHours(saved);
    };
  });

  return (
    <section className="section tone-gray" ref={sectionRef} aria-labelledby="ba-title" data-own-motion>
      <div className="container before-after">
        <div className="before-after__intro">
          <span className="label">Vorher und nachher</span>
          <h2 id="ba-title">{example.title}</h2>
          <p className="muted">{example.context}</p>
          <div className="ba-summary">
            <p className="ba-summary__row ba-summary__row--muted">
              <span>Vorher, pro Vorgang</span>
              <span className="num">{before} Min.</span>
            </p>
            <p className="ba-summary__row">
              <span>Nachher, pro Vorgang</span>
              <strong className="num"><span className="ba-minutes">{after}</span> Min.</strong>
            </p>
            {remaining.length > 0 ? (
              <p className="ba-summary__keeps">Was bei Ihnen bleibt: {remaining.join(', ')}.</p>
            ) : null}
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
