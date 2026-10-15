'use client';

import { useRef } from 'react';
import type { WeekStep } from '@/lib/content/types';
import { useMotion } from '@/lib/motion/use-motion';
import SectionHead from '@/components/ui/section-head';

interface FourWeeksProps {
  intro: { eyebrow: string; title: string; lead: string; total: string };
  weeks: readonly WeekStep[];
}

const PIN_LENGTH = '+=140%';

/**
 * „So laufen die 4 Wochen“.
 * Desktop: Abschnitt wird kurz gepinnt, eine Bordeaux-Linie füllt sich von Woche 1 bis 4.
 * Mobil: senkrechte Linie füllt sich mit dem Scrollen, kein Pin.
 */
export default function FourWeeks({ intro, weeks }: FourWeeksProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useMotion(sectionRef, ({ gsap, isDesktop }) => {
    // Gepinnt wird der innere Wrapper, nie die von React verwaltete Section selbst.
    const pinTarget = sectionRef.current?.querySelector<HTMLElement>('[data-pin]');
    if (!pinTarget) return;
    const cards = gsap.utils.toArray<HTMLElement>('.week-card');
    const dots = gsap.utils.toArray<HTMLElement>('.week-card__dot');
    // GSAP kann var() in Farb-Tweens nicht auflösen, daher die Werte einmal auslesen.
    const css = getComputedStyle(document.documentElement);
    const reached = { backgroundColor: css.getPropertyValue('--c-brand').trim(), borderColor: css.getPropertyValue('--c-brand').trim() };
    const open = { backgroundColor: css.getPropertyValue('--c-bg').trim(), borderColor: css.getPropertyValue('--c-line').trim() };
    gsap.set(dots, open);

    if (isDesktop) {
      const headerOffset = document.querySelector<HTMLElement>('.site-header')?.offsetHeight ?? 0;
      // Nur pinnen, wenn der Abschnitt vollständig in den Bildschirm passt. Sonst normal mitscrollen.
      const fits = pinTarget.offsetHeight + headerOffset <= window.innerHeight;
      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: fits
          ? { trigger: pinTarget, start: `top top+=${headerOffset}`, end: PIN_LENGTH, pin: true, scrub: 0.6 }
          : { trigger: '.weeks-grid', start: 'top 80%', end: 'bottom 70%', scrub: 0.6 },
      });
      timeline.fromTo('.weeks-line__fill', { scaleX: 0 }, { scaleX: 1, duration: cards.length - 1 }, 0);
      cards.forEach((card, index) => {
        const at = Math.max(0, index - 0.25);
        // Karte blendet ein, nur der Inhalt gleitet. Der Punkt bleibt auf der Linie.
        timeline.from(card, { opacity: 0.15, duration: 0.5 }, at);
        timeline.from(card.querySelectorAll(':scope > :not(.week-card__dot)'), { y: 24, duration: 0.5, ease: 'power2.out' }, at);
        timeline.to(dots[index], { ...reached, duration: 0.1 }, index);
      });
      return;
    }

    gsap.fromTo(
      '.weeks-line__fill',
      { scaleY: 0 },
      { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.weeks-grid', start: 'top 70%', end: 'bottom 60%', scrub: 0.4 } },
    );
    cards.forEach((card, index) => {
      const reveal = { trigger: card, start: 'top 85%', once: true };
      gsap.from(card, { opacity: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: reveal });
      gsap.from(card.querySelectorAll(':scope > :not(.week-card__dot)'), {
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: reveal,
      });
      gsap.to(dots[index], {
        ...reached,
        scrollTrigger: { trigger: card, start: 'top 65%', toggleActions: 'play none none reverse' },
      });
    });
  });

  return (
    <section className="tone-white four-weeks" id="so-laeuft-es" ref={sectionRef} aria-labelledby="weeks-title">
      <div className="section four-weeks__pin" data-pin>
      <div className="container">
        <div className="four-weeks__head">
          <SectionHead label={intro.eyebrow} title={intro.title} lead={intro.lead} id="weeks-title" />
          <p className="four-weeks__total">{intro.total}</p>
        </div>
        <div className="weeks-track">
          <div className="weeks-line" aria-hidden="true">
            <div className="weeks-line__fill" />
          </div>
          <ol className="weeks-grid">
            {weeks.map((week) => (
              <li className="week-card" key={week.week}>
                <span className="week-card__dot" aria-hidden="true" />
                <span className="label">{week.week}</span>
                <h3>{week.title}</h3>
                <p className="muted">{week.text}</p>
                <dl className="week-card__meta">
                  <div>
                    <dt>Sie bekommen</dt>
                    <dd>{week.youGet}</dd>
                  </div>
                  <div>
                    <dt>Ihre Zeit</dt>
                    <dd className="num">{week.yourTime}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ol>
        </div>
      </div>
      </div>
    </section>
  );
}
