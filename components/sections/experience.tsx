import Link from 'next/link';
import { CONTACT_ANCHOR } from '@/lib/content/site';
import { ArrowIcon } from '@/components/ui/icons';

interface ExperienceProps {
  content: {
    eyebrow: string;
    title: string;
    note: string;
    companies: readonly string[];
    certificates: readonly string[];
    pilot: { label: string; title: string; text: string; cta: string };
  };
}

export default function Experience({ content }: ExperienceProps) {
  return (
    <section className="section tone-gray" aria-labelledby="experience-title">
      <div className="container experience">
        <div className="experience__main">
          <span className="label">{content.eyebrow}</span>
          <h2 id="experience-title">{content.title}</h2>
          <p className="muted">{content.note}</p>
          <ul className="companies" aria-label="Frühere Projekte">
            {content.companies.map((company) => (
              <li key={company}>{company}</li>
            ))}
          </ul>
          <p className="certificates">
            <span className="label">Zertifikate</span>{' '}
            {content.certificates.join(' · ')}
          </p>
        </div>
        <aside className="pilot">
          <span className="label pilot__label">{content.pilot.label}</span>
          <h3>{content.pilot.title}</h3>
          <p className="muted">{content.pilot.text}</p>
          <Link className="text-link" href={CONTACT_ANCHOR}>
            {content.pilot.cta} <ArrowIcon />
          </Link>
        </aside>
      </div>
    </section>
  );
}
