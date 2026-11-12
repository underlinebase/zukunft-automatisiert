import Link from 'next/link';
import { CONTACT_ANCHOR } from '@/lib/content/site';

export interface PilotContent {
  title: string;
  text: string;
  cta: string;
}

interface ExperienceContent {
  title: string;
  note: string;
  companies: readonly string[];
  certificates: readonly string[];
  pilot: PilotContent;
}

/** Frühere Projekte und Zertifikate, ohne eigene Überschrift (Startseite: im Abschnitt Über mich). */
export function ExperienceFacts({ content }: { content: Pick<ExperienceContent, 'note' | 'companies' | 'certificates'> }) {
  return (
    <div className="experience-facts">
      <p className="muted">{content.note}</p>
      <ul className="companies" aria-label="Frühere Projekte">
        {content.companies.map((company) => (
          <li key={company}>{company}</li>
        ))}
      </ul>
      <p className="certificates">Zertifikate</p>
      <ul className="certificates__list">
        {content.certificates.map((certificate) => (
          <li key={certificate}>{certificate}</li>
        ))}
      </ul>
    </div>
  );
}

/** Pilotangebot als Kasten, z. B. neben dem Zeitrechner. */
export function PilotOffer({ pilot }: { pilot: PilotContent }) {
  return (
    <aside className="pilot" aria-labelledby="pilot-title">
      <h3 id="pilot-title">{pilot.title}</h3>
      <p className="muted">{pilot.text}</p>
      <Link className="text-link" href={CONTACT_ANCHOR}>
        {pilot.cta}
      </Link>
    </aside>
  );
}

export default function Experience({ content }: { content: ExperienceContent }) {
  return (
    <section className="section tone-gray" aria-labelledby="experience-title">
      <div className="container experience">
        <div className="experience__main">
          <h2 id="experience-title">{content.title}</h2>
          <ExperienceFacts content={content} />
        </div>
        <PilotOffer pilot={content.pilot} />
      </div>
    </section>
  );
}
