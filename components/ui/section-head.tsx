import KeepCompounds from '@/components/ui/keep-compounds';

interface SectionHeadProps {
  label: string;
  title: string;
  lead?: string;
  split?: boolean;
  id?: string;
}

export default function SectionHead({ label, title, lead, split = false, id }: SectionHeadProps) {
  return (
    <div className={`section-head${split ? ' section-head--split' : ''}`}>
      <span className="label">{label}</span>
      <h2 id={id}><KeepCompounds text={title} /></h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}
