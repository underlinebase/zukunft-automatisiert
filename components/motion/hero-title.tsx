interface HeroTitleProps {
  text: string;
  /** Optionale erste Zeile der H1 mit dem Suchbegriff (Landingpages). Wird nicht animiert. */
  kicker?: string;
}

/**
 * Hero-Überschrift: steht ab dem ersten Bild da und gleitet per CSS nur leicht nach oben.
 * Kein JavaScript nötig, damit sie früh als größter sichtbarer Inhalt (LCP) zählt.
 * Bei „Bewegung reduzieren“ steht der Text ohne Bewegung da (siehe sections.css).
 */
export default function HeroTitle({ text, kicker }: HeroTitleProps) {
  return (
    <h1 className={`hero-title${kicker ? ' hero-title--kicker' : ''}`}>
      {kicker ? <span className="hero-title__kicker">{kicker} </span> : null}
      <span className="hero-title__main">{text}</span>
    </h1>
  );
}
