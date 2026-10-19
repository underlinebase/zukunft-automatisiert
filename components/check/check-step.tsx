import type { RefObject } from 'react';

export interface StepOption {
  id: string;
  label: string;
}

interface CheckStepProps {
  id: string;
  title: string;
  hint?: string;
  options: readonly StepOption[];
  selected?: string;
  /** Zwei Spalten ab Tablet, für kurze Antworten wie die Branchen. */
  grid?: boolean;
  headingRef: RefObject<HTMLHeadingElement | null>;
  onSelect: (optionId: string) => void;
}

/** Eine Frage mit Antwort-Buttons. Gewählt ist, was aria-pressed trägt; ein Klick führt weiter. */
export default function CheckStep({ id, title, hint, options, selected, grid = false, headingRef, onSelect }: CheckStepProps) {
  const headingId = `${id}-frage`;
  const hintId = `${id}-hinweis`;
  return (
    <div className="check-step">
      <h2 id={headingId} ref={headingRef} tabIndex={-1} className="check-step__title">
        {title}
      </h2>
      {hint ? (
        <p id={hintId} className="check-step__hint muted">
          {hint}
        </p>
      ) : null}
      <div
        className={grid ? 'check-options check-options--grid' : 'check-options'}
        role="group"
        aria-labelledby={headingId}
        aria-describedby={hint ? hintId : undefined}
      >
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className="check-option"
            aria-pressed={selected === option.id}
            onClick={() => onSelect(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
