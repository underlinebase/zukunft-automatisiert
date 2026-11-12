import type { Metadata } from 'next';
import {
  ABOUT,
  CLOSING,
  EXPERIENCE,
  FAQS,
  FAQ_INTRO,
  FIT,
  GUARANTEE,
  HERO,
  HOME_CALCULATOR,
  HOME_EXAMPLE,
  HOME_READING,
  HOME_WEEK_BLOCKS,
  INDUSTRIES_INTRO,
  PRINCIPLES,
  PRINCIPLES_INTRO,
  WEEKS,
  WEEKS_INTRO,
} from '@/lib/content/home';
import Hero from '@/components/sections/hero';
import Industries from '@/components/sections/industries';
import BeforeAfter from '@/components/sections/before-after';
import FourWeeks from '@/components/sections/four-weeks';
import Guarantee from '@/components/sections/guarantee';
import AboutHome from '@/components/sections/about-home';
import FaqSection from '@/components/sections/faq-section';
import Closing from '@/components/sections/closing';
import JsonLd from '@/components/seo/json-ld';
import { faqSchema, graph, webPageSchema } from '@/lib/seo/schema';
import { HOME_SEO, SITE } from '@/lib/content/site';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const SCHEMA = graph(
  webPageSchema({ path: '/', name: HOME_SEO.title, description: HOME_SEO.description, about: `${SITE.url}/#organisation`, breadcrumb: false }),
  faqSchema(FAQS),
);

export default function HomePage() {
  return (
    <>
      <JsonLd data={SCHEMA} />
      <Hero title={HERO.title} lead={HERO.lead} guarantee={HERO.guarantee} weekBlocks={HOME_WEEK_BLOCKS} />
      <Industries intro={INDUSTRIES_INTRO} />
      <BeforeAfter example={HOME_EXAMPLE} tone="white" />
      <FourWeeks intro={WEEKS_INTRO} weeks={WEEKS} />
      <Guarantee content={GUARANTEE} calculator={HOME_CALCULATOR} pilot={EXPERIENCE.pilot} />
      <AboutHome
        about={ABOUT}
        experience={EXPERIENCE}
        principles={{ ...PRINCIPLES_INTRO, items: PRINCIPLES }}
        fit={FIT}
      />
      <FaqSection intro={FAQ_INTRO} items={FAQS} reading={HOME_READING} tone="gray" />
      <Closing content={CLOSING} />
    </>
  );
}
