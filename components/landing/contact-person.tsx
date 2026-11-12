import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/content/site';

/** Kompakter Ansprechpartner-Block, z. B. im Kontaktabschnitt der Landingpages. */
export default function ContactPerson() {
  return (
    <div className="person" aria-labelledby="person-title">
      <Image
        className="person__photo"
        src="/marco-gundlach-portrait.jpg"
        alt="Marco Gundlach"
        width={1254}
        height={1254}
        sizes="120px"
      />
      <div className="person__copy">
        <h3 id="person-title">Sie arbeiten direkt mit mir, Marco Gundlach.</h3>
        <p>
          Seit über 14 Jahren leite ich Digitalisierungsprojekte, unter anderem für Hugo Boss, Fressnapf und Aktion Mensch.
          Ich setze KI täglich ein und sage Ihnen trotzdem, wann eine einfache Regel besser ist.
        </p>
        <div className="person__links">
          <Link className="text-link" href="/ueber-mich">Mehr über mich</Link>
          <a className="text-link" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}
