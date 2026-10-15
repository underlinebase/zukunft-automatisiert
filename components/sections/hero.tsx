import Link from 'next/link';
import type { WeekBlockLabel } from '@/lib/content/types';
import { CONTACT_ANCHOR, SITE } from '@/lib/content/site';
import HeroTitle from '@/components/motion/hero-title';
import WeekHero from '@/components/week/week-hero';
import { ArrowIcon } from '@/components/ui/icons';

interface HeroProps {
  eyebrow: string;
  title: string;
  lead: string;
  weekBlocks: readonly WeekBlockLabel[];
}

export default function Hero({ eyebrow, title, lead, weekBlocks }: HeroProps) {
  return (
    <section className="hero tone-white" aria-labelledby="hero-title-label">
      {/* Gepinnt wird dieses innere Element, nicht die Section selbst (React-sicher). */}
      <div className="hero__pin" data-pin>
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="label" id="hero-title-label">{eyebrow}</span>
          <HeroTitle text={title} />
          <p className="hero__lead">{lead}</p>
          <div className="hero__actions">
            <div className="hero__primary">
              <Link href={CONTACT_ANCHOR} className="btn btn--primary">
                Ablauf in 3 Sätzen schildern <ArrowIcon />
              </Link>
              <span className="hero__hint">Antwort in {SITE.responseTime}</span>
            </div>
            <a href={SITE.calUrl} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
              30 Minuten sprechen
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <WeekHero blocks={weekBlocks} />
        </div>
      </div>
      </div>
    </section>
  );
}
