import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '@/components/ui/icons';

interface AboutTeaserProps {
  content: { eyebrow: string; title: string; text: readonly string[]; photoAlt: string };
}

export default function AboutTeaser({ content }: AboutTeaserProps) {
  return (
    <section className="section tone-white" id="ueber-mich" aria-labelledby="about-title">
      <div className="container about">
        <figure className="about__photo">
          <Image
            src="/marco-gundlach.jpg"
            alt={content.photoAlt}
            width={800}
            height={1000}
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
        </div>
      </div>
    </section>
  );
}
