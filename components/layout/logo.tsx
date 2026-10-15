import Link from 'next/link';

interface LogoProps {
  inverse?: boolean;
}

/** Wortmarke „Zukunft. Automatisiert.“ mit Bordeaux-Punkt. */
export default function Logo({ inverse = false }: LogoProps) {
  return (
    <Link href="/" className={`logo${inverse ? ' logo--inverse' : ''}`} aria-label="Zukunft. Automatisiert. Zur Startseite">
      Zukunft<span className="logo__dot">.</span> Automatisiert<span className="logo__dot">.</span>
    </Link>
  );
}
