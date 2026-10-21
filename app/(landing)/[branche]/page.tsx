import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { INDUSTRIES, getIndustry, industryHref } from '@/lib/content/branchen';
import { CLOSING, FAQ_INTRO, GUARANTEE, LANDING_GENERAL_FAQS, WEEKS, WEEKS_INTRO } from '@/lib/content/home';
import { breadcrumbSchema, faqSchema, graph, serviceSchema, webPageSchema } from '@/lib/seo/schema';
import { SITE } from '@/lib/content/site';
import JsonLd from '@/components/seo/json-ld';
import { pageMetadata } from '@/lib/seo/meta';
import LandingHero from '@/components/landing/landing-hero';
import PainPoints from '@/components/landing/pain-points';
import RoutineCompare from '@/components/landing/routine-compare';
import StepsCompact from '@/components/landing/steps-compact';
import ContactPerson from '@/components/landing/contact-person';
import BeforeAfter from '@/components/sections/before-after';
import Guarantee from '@/components/sections/guarantee';
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
  // Vorschaubild kommt aus opengraph-image.tsx dieser Route.
  return pageMetadata({ title: industry.seo.title, description: industry.seo.description, path, images: 'route' });
}

/**
 * Eigenständige Landingpage pro Branche. Bewusst anders aufgebaut als die Startseite
 * und nicht von ihr verlinkt; Zugang über Anzeigen, Mailings oder Suchmaschinen.
 */
export default async function LandingPage({ params }: PageProps) {
  const { branche } = await params;
  const industry = getIndustry(branche);
  if (!industry) notFound();

  const path = industryHref(industry.slug);
  const faqs = [...industry.faqs, ...LANDING_GENERAL_FAQS];
  const schema = graph(
    webPageSchema({ path, name: industry.seo.title, description: industry.seo.description, mainEntity: `${SITE.url}${path}#leistung` }),
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
      <LandingHero industry={industry} />
      <PainPoints audienceDative={industry.audienceDative} scenes={industry.scenes} />
      <RoutineCompare audience={industry.audience} routines={industry.routineDetails} />
      <BeforeAfter example={industry.example} />
      <StepsCompact steps={WEEKS} total={WEEKS_INTRO.total} />
      <Guarantee content={GUARANTEE} calculator={industry.calculator} />
      <ContactPerson />
      <FaqSection intro={{ ...FAQ_INTRO, title: `Was ${industry.audience} mich vorher fragen.` }} items={faqs} />
      <Closing content={CLOSING} />
    </>
  );
}
