import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { NavLink } from '@/lib/content/site';

interface AboutTeaserProps {
  content: { title: string; text: readonly string[]; photoAlt: string; extraLink?: NavLink };
  /** Weiterer Teil unter dem Porträt, im selben Abschnitt. */
  children?: ReactNode;
}

export default function AboutTeaser({ content, children }: AboutTeaserProps) {
  return (
    <section className="section tone-white" id="ueber-mich" aria-labelledby="about-title">
      <div className="container about">
        <figure className="about__photo">
          <Image
            src="/marco-gundlach-portrait.jpg"
            alt={content.photoAlt}
            width={1254}
            height={1254}
            sizes="(min-width: 1000px) 40vw, 100vw"
          />
        </figure>
        <div className="about__copy">
          <h2 id="about-title">{content.title}</h2>
          {content.text.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link className="text-link" href="/ueber-mich">
            Mehr über mich
          </Link>
          {content.extraLink ? (
            <Link className="text-link" href={content.extraLink.href}>
              {content.extraLink.label}
            </Link>
          ) : null}
        </div>
      </div>
      {children ? <div className="container">{children}</div> : null}
    </section>
  );
}
