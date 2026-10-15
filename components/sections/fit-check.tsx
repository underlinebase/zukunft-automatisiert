import { CheckIcon, CrossIcon } from '@/components/ui/icons';
import SectionHead from '@/components/ui/section-head';

interface FitCheckProps {
  content: { eyebrow: string; title: string; lead: string; yes: readonly string[]; no: readonly string[] };
}

export default function FitCheck({ content }: FitCheckProps) {
  return (
    <section className="section tone-white" aria-labelledby="fit-title">
      <div className="container">
        <SectionHead label={content.eyebrow} title={content.title} lead={content.lead} id="fit-title" />
        <div className="fit">
          <div className="fit__col">
            <h3>Das passt gut</h3>
            <ul className="check-list">
              {content.yes.map((item) => (
                <li key={item}><CheckIcon />{item}</li>
              ))}
            </ul>
          </div>
          <div className="fit__col fit__col--no">
            <h3>Das passt eher nicht</h3>
            <ul className="check-list">
              {content.no.map((item) => (
                <li key={item}><CrossIcon />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
