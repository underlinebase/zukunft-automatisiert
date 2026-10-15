import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { INDUSTRIES, getIndustry } from '@/lib/content/branchen';
import {
  CLOSING,
  FACTS,
  FAQS,
  FAQ_INTRO,
  FIT,
  GUARANTEE,
  INDUSTRIES_INTRO,
  PRINCIPLES,
  PRINCIPLES_INTRO,
  WEEKS,
  WEEKS_INTRO,
} from '@/lib/content/home';
import Hero from '@/components/sections/hero';
import FactsBar from '@/components/sections/facts-bar';
import Scenes from '@/components/sections/scenes';
import Routines from '@/components/sections/routines';
import Principles from '@/components/sections/principles';
import FourWeeks from '@/components/sections/four-weeks';
import BeforeAfter from '@/components/sections/before-after';
import Guarantee from '@/components/sections/guarantee';
import FitCheck from '@/components/sections/fit-check';
import Industries from '@/components/sections/industries';
import FaqSection from '@/components/sections/faq-section';
import Closing from '@/components/sections/closing';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `Automatisierung für ${industry.name}`,
    description: industry.metaDescription,
    alternates: { canonical: `/branchen/${industry.slug}` },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <Hero
        eyebrow={industry.hero.eyebrow}
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
      <FourWeeks intro={WEEKS_INTRO} weeks={WEEKS} />
      <BeforeAfter example={industry.example} />
      <Guarantee content={GUARANTEE} calculator={industry.calculator} />
      <Principles intro={PRINCIPLES_INTRO} principles={PRINCIPLES} />
      <FitCheck content={FIT} />
      <FaqSection intro={FAQ_INTRO} items={FAQS} />
      <Industries intro={{ ...INDUSTRIES_INTRO, title: 'Auch für diese Betriebe.' }} exclude={industry.slug} />
      <Closing content={CLOSING} />
    </>
  );
}
