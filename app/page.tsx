import type { Metadata } from 'next';
import {
  ABOUT,
  CLOSING,
  EXPERIENCE,
  FACTS,
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
  SCENES,
  SCENES_INTRO,
  WEEKS,
  WEEKS_INTRO,
} from '@/lib/content/home';
import Hero from '@/components/sections/hero';
import FactsBar from '@/components/sections/facts-bar';
import Scenes from '@/components/sections/scenes';
import Principles from '@/components/sections/principles';
import FourWeeks from '@/components/sections/four-weeks';
import BeforeAfter from '@/components/sections/before-after';
import Guarantee from '@/components/sections/guarantee';
import FitCheck from '@/components/sections/fit-check';
import Industries from '@/components/sections/industries';
import AboutTeaser from '@/components/sections/about-teaser';
import Experience from '@/components/sections/experience';
import FaqSection from '@/components/sections/faq-section';
import ReadingLinks from '@/components/sections/reading-links';
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
      <Hero eyebrow={HERO.eyebrow} kicker={HERO.kicker} title={HERO.title} lead={HERO.lead} weekBlocks={HOME_WEEK_BLOCKS} />
      <FactsBar facts={FACTS} />
      <Scenes intro={SCENES_INTRO} scenes={SCENES} />
      <Principles intro={PRINCIPLES_INTRO} principles={PRINCIPLES} />
      <FourWeeks intro={WEEKS_INTRO} weeks={WEEKS} />
      <BeforeAfter example={HOME_EXAMPLE} />
      <Guarantee content={GUARANTEE} calculator={HOME_CALCULATOR} />
      <FitCheck content={FIT} />
      <Industries intro={INDUSTRIES_INTRO} />
      <AboutTeaser content={ABOUT} />
      <Experience content={EXPERIENCE} />
      <ReadingLinks content={HOME_READING} tone="white" />
      <FaqSection intro={FAQ_INTRO} items={FAQS} />
      <Closing content={CLOSING} />
    </>
  );
}
