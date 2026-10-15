import Link from 'next/link';
import type { Industry } from '@/lib/content/types';
import { CONTACT_ANCHOR, SITE } from '@/lib/content/site';
import HeroTitle from '@/components/motion/hero-title';
import { ArrowIcon, CheckIcon } from '@/components/ui/icons';
import TimeSinks from './time-sinks';

interface LandingHeroProps {
  industry: Industry;
}

/** Hero der Landingpages: Suchbegriff in der H1, drei Branchenvorteile, Zeitfresser-Grafik. */
export default function LandingHero({ industry }: LandingHeroProps) {
  return (
    <section className="landing-hero tone-gray">
      <div className="container landing-hero__grid">
        <div className="landing-hero__copy">
          <span className="label">{industry.trades}</span>
          <HeroTitle kicker={industry.hero.kicker} text={industry.hero.title} />
          <p className="hero__lead">{industry.hero.lead}</p>
          <ul className="check-list landing-hero__benefits">
            {industry.heroBenefits.map((benefit) => (
              <li key={benefit}><CheckIcon />{benefit}</li>
            ))}
          </ul>
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
        <TimeSinks audienceDative={industry.audienceDative} sinks={industry.timeSinks} />
      </div>
    </section>
  );
}
