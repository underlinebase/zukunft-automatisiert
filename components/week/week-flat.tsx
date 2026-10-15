// Flache Wochenansicht in HTML/CSS. Gleiche Logik wie die 3D-Szene (lib/week/model.ts).

import type { WeekBlockLabel } from '@/lib/content/types';
import { DAY_NAMES, DAY_SHORT, FREED_LABEL, blockStateAt, freedStateAt, placeBlocks } from '@/lib/week/model';

interface WeekFlatProps {
  blocks: readonly WeekBlockLabel[];
  variant?: 'hero' | 'compact';
  /** full = volle Woche, clean = aufgeräumt mit freiem Freitagnachmittag */
  initial?: 'full' | 'clean';
  label?: string;
}

const DEFAULT_LABEL =
  'Wochenkalender von Montag bis Freitag. Routineaufgaben werden abgehakt und verschwinden, am Ende ist der Freitagnachmittag wieder frei.';

function SmallCheck() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="currentColor" />
      <path d="M5.8 10.4l2.7 2.6 5.6-6" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WeekFlat({ blocks, variant = 'hero', initial = 'full', label = DEFAULT_LABEL }: WeekFlatProps) {
  const placed = placeBlocks(blocks);

  return (
    <div className={`week-flat week-flat--${variant}`} data-state={initial} role="img" aria-label={label}>
      {DAY_NAMES.map((day, dayIndex) => (
        <div className="week-day" key={day}>
          <div className="week-day__name">
            <span className="week-day__long">{day}</span>
            <span className="week-day__short">{DAY_SHORT[dayIndex]}</span>
          </div>
          <div className="week-day__slots">
            {placed
              .filter((block) => block.day === dayIndex)
              .map((block) => (
                <div
                  className="week-block"
                  key={block.id}
                  data-order={block.order}
                  style={{ gridRow: block.slot + 1 }}
                >
                  <span className="week-block__label">{block.label}</span>
                  <span className="week-block__check">
                    <SmallCheck />
                  </span>
                </div>
              ))}
            {dayIndex === DAY_NAMES.length - 1 ? (
              <div className="week-freed">
                <span>{FREED_LABEL}</span>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Setzt den Animationsstand der flachen Ansicht über CSS-Variablen. */
export function applyFlatProgress(root: Element | null, progress: number): void {
  if (!root) return;
  const blocks = root.querySelectorAll<HTMLElement>('.week-block');
  const total = blocks.length;
  blocks.forEach((element) => {
    const order = Number(element.dataset.order ?? 0);
    const { check, leave } = blockStateAt(progress, order, total);
    element.style.setProperty('--check', String(check));
    element.style.setProperty('--leave', String(leave));
  });
  const freed = root.querySelector<HTMLElement>('.week-freed');
  freed?.style.setProperty('--freed', String(freedStateAt(progress)));
  root.setAttribute('data-state', 'animated');
}
