import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/content/site';
import { ArrowIcon } from '@/components/ui/icons';

/** Kompakter Ansprechpartner-Block für Landingpages. */
export default function ContactPerson() {
  return (
    <section className="section tone-white" aria-labelledby="person-title">
      <div className="container person">
        <Image
          className="person__photo"
          src="/marco-gundlach-portrait.jpg"
          alt="Marco Gundlach"
          width={1254}
          height={1254}
          sizes="200px"
        />
        <div className="person__copy">
          <span className="label">Ihr Ansprechpartner · Der KI-Realist</span>
          <h2 id="person-title">Sie arbeiten direkt mit mir, Marco Gundlach.</h2>
          <p>
            Seit über 14 Jahren leite ich Digitalisierungsprojekte, unter anderem für Hugo Boss, Fressnapf und Aktion Mensch.
            Ich setze KI täglich ein und sage Ihnen trotzdem, wann eine einfache Regel besser ist.
          </p>
          <div className="person__links">
            <Link className="text-link" href="/ueber-mich">Mehr über mich <ArrowIcon /></Link>
            <a className="text-link" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowIcon /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
