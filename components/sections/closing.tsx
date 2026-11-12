import { SITE } from '@/lib/content/site';
import WeekClosing from '@/components/week/week-closing';
import ContactPerson from '@/components/landing/contact-person';
import InquiryForm from './inquiry-form';

interface ClosingProps {
  content: { title: string; lead: string; callTitle: string; callText: string };
  /** Ansprechpartner statt Wochengrafik (Landingpages). */
  withPerson?: boolean;
}

export default function Closing({ content, withPerson = false }: ClosingProps) {
  return (
    <section className="section tone-dark closing" id="kontakt" aria-labelledby="closing-title">
      <div className="container closing__grid">
        <div className="closing__copy">
          <h2 id="closing-title">{content.title}</h2>
          <p className="lead">{content.lead}</p>
          {withPerson ? <ContactPerson /> : <WeekClosing />}
          <div className="closing__call">
            <h3>{content.callTitle}</h3>
            <p className="muted">{content.callText}</p>
            <a className="btn btn--inverse" href={SITE.calUrl} target="_blank" rel="noopener noreferrer">
              30 Minuten sprechen
            </a>
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
  );
}
