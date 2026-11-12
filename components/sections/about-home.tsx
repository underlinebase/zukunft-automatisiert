import type { ComponentProps } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { NavLink } from '@/lib/content/site';
import type { Principle } from '@/lib/content/types';
import { ExperienceFacts } from './experience';
import { FitColumns } from './fit-check';
import { PrinciplesList } from './principles';

interface AboutHomeProps {
  about: { title: string; text: readonly string[]; photoAlt: string; extraLink?: NavLink };
  experience: { note: string; companies: readonly string[]; certificates: readonly string[] };
  principles: { title: string; lead: string; items: readonly Principle[] };
  fit: ComponentProps<typeof FitColumns>['content'];
}

/**
 * Startseite: wer ich bin, wie ich arbeite und für wen das passt, in einem Abschnitt.
 * Die Teile gibt es auf anderen Seiten auch einzeln (Principles, FitCheck, Experience).
 */
export default function AboutHome({ about, experience, principles, fit }: AboutHomeProps) {
  return (
    <section className="section tone-white about-home" id="ueber-mich" aria-labelledby="about-title">
      <div className="container">
        <div className="about">
          <figure className="about__photo">
            <Image
              src="/marco-gundlach-portrait.jpg"
              alt={about.photoAlt}
              width={1254}
              height={1254}
              sizes="(min-width: 1000px) 40vw, 100vw"
            />
          </figure>
          <div className="about__copy">
            <h2 id="about-title">{about.title}</h2>
            {about.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="about__links">
              <Link className="text-link" href="/ueber-mich">
                Mehr über mich
              </Link>
              {about.extraLink ? (
                <Link className="text-link" href={about.extraLink.href}>
                  {about.extraLink.label}
                </Link>
              ) : null}
            </div>
            <ExperienceFacts content={experience} />
          </div>
        </div>
      </div>

      <div className="about-home__band">
        <div className="container">
          <div className="section-part" aria-labelledby="principles-title">
            <div className="section-part__head">
              <h3 id="principles-title" className="section-part__title">{principles.title}</h3>
              <p className="lead">{principles.lead}</p>
            </div>
            <PrinciplesList principles={principles.items} headingLevel={4} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section-part" aria-labelledby="fit-title">
          <div className="section-part__head">
            <h3 id="fit-title" className="section-part__title">{fit.title}</h3>
            <p className="lead">{fit.lead}</p>
          </div>
          <FitColumns content={fit} headingLevel={4} />
        </div>
      </div>
    </section>
  );
}
