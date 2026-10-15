import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { INDUSTRIES, getIndustry, industryHref } from '@/lib/content/branchen';
import {
  ABOUT,
  CLOSING,
  FACTS,
  FAQ_INTRO,
  FIT,
  GUARANTEE,
  INDUSTRIES_INTRO,
  LANDING_GENERAL_FAQS,
  PRINCIPLES,
  PRINCIPLES_INTRO,
  WEEKS,
  WEEKS_INTRO,
} from '@/lib/content/home';
import { breadcrumbSchema, faqSchema, graph, organizationSchema, personSchema, serviceSchema } from '@/lib/seo/schema';
import JsonLd from '@/components/seo/json-ld';
import Hero from '@/components/sections/hero';
import FactsBar from '@/components/sections/facts-bar';
import Scenes from '@/components/sections/scenes';
import Routines from '@/components/sections/routines';
import Principles from '@/components/sections/principles';
import FourWeeks from '@/components/sections/four-weeks';
import BeforeAfter from '@/components/sections/before-after';
import Guarantee from '@/components/sections/guarantee';
import FitCheck from '@/components/sections/fit-check';
import AboutTeaser from '@/components/sections/about-teaser';
import Industries from '@/components/sections/industries';
import FaqSection from '@/components/sections/faq-section';
import Closing from '@/components/sections/closing';

interface PageProps {
  params: Promise<{ branche: string }>;
}

// Nur die angelegten Branchen sind gültig; alles andere ergibt 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ branche: industry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { branche } = await params;
  const industry = getIndustry(branche);
  if (!industry) return {};
  const path = industryHref(industry.slug);
  return {
    title: industry.seo.title,
    description: industry.seo.description,
    alternates: { canonical: path },
    openGraph: { type: 'website', url: path, title: industry.seo.title, description: industry.seo.description },
  };
}

export default async function LandingPage({ params }: PageProps) {
  const { branche } = await params;
  const industry = getIndustry(branche);
  if (!industry) notFound();

  const path = industryHref(industry.slug);
  const faqs = [...industry.faqs, ...LANDING_GENERAL_FAQS];
  const schema = graph(
    organizationSchema(),
    personSchema(),
    serviceSchema(industry, path),
    breadcrumbSchema([
      { name: 'Start', path: '/' },
      { name: industry.name, path },
    ]),
    faqSchema(faqs),
  );

  return (
    <>
      <JsonLd data={schema} />
      <Hero
        eyebrow={industry.trades}
        kicker={industry.hero.kicker}
        title={industry.hero.title}
        lead={industry.hero.lead}
        weekBlocks={industry.weekBlocks}
      />
      <FactsBar facts={FACTS} />
      <Scenes
        intro={{
          eyebrow: 'Kennen Sie das?',
          title: `Drei Szenen aus dem Alltag von ${industry.audienceDative}.`,
          lead: 'Wo die Zeit hingeht, bevor es Feierabend wird.',
        }}
        scenes={industry.scenes}
      />
      <Routines audience={industry.audience} routines={industry.moreRoutines} />
      <BeforeAfter example={industry.example} />
      <FourWeeks intro={WEEKS_INTRO} weeks={WEEKS} />
      <Guarantee content={GUARANTEE} calculator={industry.calculator} />
      <Principles intro={PRINCIPLES_INTRO} principles={PRINCIPLES} />
      <AboutTeaser content={ABOUT} />
      <FitCheck content={FIT} />
      <FaqSection intro={{ ...FAQ_INTRO, title: `Was ${industry.audience} mich vorher fragen.` }} items={faqs} />
      <Industries intro={{ ...INDUSTRIES_INTRO, title: 'Auch für diese Betriebe.' }} exclude={industry.slug} />
      <Closing content={CLOSING} />
    </>
  );
}
