'use client';

import { useRef } from 'react';
import { useMotion } from '@/lib/motion/use-motion';
import WeekFlat from './week-flat';

const CLOSING_LABEL = 'Aufgeräumter Wochenkalender. Der Freitagnachmittag ist frei und in Bordeaux markiert.';

/** Kleine, aufgeräumte Woche im Abschluss. Der freie Freitagnachmittag leuchtet beim Hineinscrollen auf. */
export default function WeekClosing() {
  const rootRef = useRef<HTMLDivElement>(null);

  useMotion(rootRef, ({ gsap }) => {
    gsap.from('.week-freed', {
      opacity: 0,
      scale: 0.96,
      duration: 1.1,
      ease: 'power2.out',
      scrollTrigger: { trigger: rootRef.current, start: 'top 85%', once: true },
    });
  });

  return (
    <div className="week-closing" ref={rootRef}>
      <WeekFlat blocks={[]} variant="compact" initial="clean" label={CLOSING_LABEL} />
    </div>
  );
}
