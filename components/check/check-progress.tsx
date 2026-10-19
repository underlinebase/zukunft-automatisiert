interface CheckProgressProps {
  /** Anzahl erledigter Schritte (0 bis total). */
  done: number;
  total: number;
  label: string;
}

/**
 * Fortschrittsbalken. Die Breite gleitet per CSS-Übergang auf den neuen Wert
 * (bei „Bewegung reduzieren“ springt sie, siehe app/styles/check.css).
 */
export default function CheckProgress({ done, total, label }: CheckProgressProps) {
  const share = total > 0 ? Math.min(1, done / total) : 0;
  return (
    <div className="check-progress">
      <p className="check-progress__label" aria-hidden="true">{label}</p>
      <div
        className="check-progress__track"
        role="progressbar"
        aria-label="Fortschritt"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={done}
        aria-valuetext={label}
      >
        <span className="check-progress__fill" style={{ transform: `scaleX(${share})` }} />
      </div>
    </div>
  );
}
