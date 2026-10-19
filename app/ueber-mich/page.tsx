import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CLOSING, EXPERIENCE } from '@/lib/content/home';
import { ABOUT_PAGE, CREDENTIALS, STATIONS } from '@/lib/content/about';
import { CONTACT_ANCHOR } from '@/lib/content/site';
import { breadcrumbSchema, graph, organizationSchema, personSchema, profilePageSchema } from '@/lib/seo/schema';
import { seoTitle } from '@/lib/seo/meta';
import JsonLd from '@/components/seo/json-ld';
import Experience from '@/components/sections/experience';
import Closing from '@/components/sections/closing';
import { ArrowIcon } from '@/components/ui/icons';

export const metadata: Metadata = {
  title: seoTitle('Marco Gundlach: KI-Berater und KI-Realist'),
  description:
    'Marco Gundlach: über 14 Jahre Digitalisierungsprojekte, etwa für Hugo Boss, Fressnapf und Aktion Mensch. Heute automatisiert er als KI-Berater Abläufe für Inhaber.',
  alternates: { canonical: '/ueber-mich' },
};

const SCHEMA = graph(
  profilePageSchema(),
  personSchema(),
  organizationSchema(),
  breadcrumbSchema([
    { name: 'Start', path: '/' },
    { name: 'Über mich', path: '/ueber-mich' },
  ]),
);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={SCHEMA} />
      <section className="page-hero">
        <div className="container page-hero__inner">
          <nav className="crumbs" aria-label="Brotkrumen"><Link href="/">Start</Link><span aria-hidden="true">/</span><span>Über mich</span></nav>
          <span className="label">Über mich</span>
          <h1>{ABOUT_PAGE.title}</h1>
          <p className="lead">{ABOUT_PAGE.lead}</p>
        </div>
      </section>

      <section className="container about-page">
        <div className="about-page__aside">
          <figure className="about-page__photo" style={{ margin: 0 }}>
            <Image src="/marco-gundlach-portrait.jpg" alt="Marco Gundlach" width={1254} height={1254} sizes="(min-width: 1000px) 35vw, 100vw" priority />
          </figure>
        </div>
        <div className="about-page__essay">
          {ABOUT_PAGE.essay.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link className="btn btn--primary" href={CONTACT_ANCHOR}>
            Ablauf schildern <ArrowIcon />
          </Link>

          <div className="vita" aria-labelledby="stationen-title">
            <h2 id="stationen-title" className="vita__title">Stationen</h2>
            <ol className="vita__list">
              {STATIONS.map((station) => (
                <li className="vita__row" key={`${station.period}-${station.role}`}>
                  <span className="vita__year">{station.period}</span>
                  <span>
                    <strong>{station.role}</strong>, {station.org}
                    <span className="vita__text">{station.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="vita" aria-labelledby="zertifikate-title">
            <h2 id="zertifikate-title" className="vita__title">Zertifikate</h2>
            <ul className="vita__list">
              {CREDENTIALS.map((credential) => (
                <li className="vita__row" key={credential.name}>
                  <span className="vita__year">{credential.year ?? ''}</span>
                  <span>
                    <strong>{credential.name}</strong>
                    <span className="vita__text">{credential.issuer}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Experience content={EXPERIENCE} />
      <Closing content={CLOSING} />
    </>
  );
}
