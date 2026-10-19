import Image from 'next/image';
import Link from 'next/link';
import type { NavLink } from '@/lib/content/site';
import { ArrowIcon } from '@/components/ui/icons';

interface AboutTeaserProps {
  content: { eyebrow: string; title: string; text: readonly string[]; photoAlt: string; extraLink?: NavLink };
}

export default function AboutTeaser({ content }: AboutTeaserProps) {
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
          <span className="label">{content.eyebrow}</span>
          <h2 id="about-title">{content.title}</h2>
          {content.text.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link className="text-link" href="/ueber-mich">
            Mehr über mich <ArrowIcon />
          </Link>
          {content.extraLink ? (
            <Link className="text-link" href={content.extraLink.href}>
              {content.extraLink.label} <ArrowIcon />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
