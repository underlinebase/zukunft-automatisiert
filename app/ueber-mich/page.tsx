import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CLOSING, EXPERIENCE } from '@/lib/content/home';
import { CONTACT_ANCHOR } from '@/lib/content/site';
import Experience from '@/components/sections/experience';
import Closing from '@/components/sections/closing';
import { ArrowIcon } from '@/components/ui/icons';

export const metadata: Metadata = {
  title: 'Über mich',
  description:
    'Marco Gundlach: 14 Jahre Digitalisierung und IT-Projektleitung, heute Berater für Prozessautomatisierung für Inhaber im DACH-Raum. Der KI-Realist.',
  alternates: { canonical: '/ueber-mich' },
};

const ESSAY = [
  'Viele Jahre habe ich IT-Projekte geleitet, oft in großen Unternehmen wie Hugo Boss, Fressnapf oder am Flughafen Düsseldorf. Dort ging es um viele Beteiligte, lange Abstimmungen und große Budgets. Ich habe gelernt, wie man Abläufe sauber aufnimmt und so umsetzt, dass sie im Alltag funktionieren.',
  'Ich habe auch gesehen, wie viel Zeit in Projekte fließt, die am Ende niemand nutzt. Folien, Workshops, Konzepte. Für einen Betrieb mit zehn oder zwanzig Leuten passt das nicht. Dort zählt, ob am Freitag weniger Papierkram auf dem Tisch liegt.',
  'Deshalb arbeite ich heute anders. Ein Ablauf, 4 Wochen, ein fester Preis. Sie sprechen die ganze Zeit mit mir, nicht mit einem Team, das Sie nie sehen.',
  'Zur KI habe ich eine nüchterne Haltung. Sie kann Texte lesen, sortieren und Entwürfe schreiben. Sie kann aber längst nicht alles, was gerade versprochen wird. Wenn ein Ablauf ohne KI zuverlässiger läuft, bauen wir ihn ohne.',
  '[PERSÖNLICHER SATZ, z. B. wo Sie leben oder was Sie neben der Arbeit machen]',
];

const VITA = [
  { year: '2026', text: 'Zukunft. Automatisiert.: Automatisierung für Inhaber im DACH-Raum.' },
  { year: '2024', text: 'FlowResults: Automatisierung für mittelständische Betriebe.' },
  { year: '2022', text: 'Lawsearch24: Aufbau einer juristischen Suchplattform.' },
  { year: '2018', text: 'Zertifizierter Product Owner und Scrum Master.' },
  { year: '2014', text: 'Wechsel in die Beratung, Schwerpunkt Digitalisierung im Mittelstand.' },
  { year: '2010', text: 'Erste Programmier-Aufträge parallel zum Studium.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <nav className="crumbs" aria-label="Brotkrumen"><Link href="/">Start</Link><span aria-hidden="true">/</span><span>Über mich</span></nav>
          <span className="label">Über mich</span>
          <h1>Ich bin Marco Gundlach. Sie arbeiten direkt mit mir.</h1>
          <p className="lead">14 Jahre Digitalisierung und IT-Projektleitung. Heute automatisiere ich Abläufe für Inhaber im DACH-Raum.</p>
        </div>
      </section>

      <section className="container about-page">
        <div className="about-page__aside">
          <figure className="about-page__photo" style={{ margin: 0 }}>
            <Image src="/marco-gundlach.jpg" alt="Marco Gundlach" width={800} height={1000} sizes="(min-width: 1000px) 35vw, 100vw" priority />
          </figure>
          <div className="vita">
            <span className="label">Stationen</span>
            {VITA.map((entry) => (
              <div className="vita__row" key={entry.year}>
                <span className="vita__year">{entry.year}</span>
                <span>{entry.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-page__essay">
          {ESSAY.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link className="btn btn--primary" href={CONTACT_ANCHOR}>
            Ablauf schildern <ArrowIcon />
          </Link>
        </div>
      </section>

      <Experience content={EXPERIENCE} />
      <Closing content={CLOSING} />
    </>
  );
}
