import type { DataSource } from '@/lib/content/daten';
import { sourceAnchor } from '@/lib/content/daten';

interface SourceListProps {
  sources: readonly DataSource[];
  sampleLabel: string;
  periodLabel: string;
}

/** Vollständige Quellenliste mit Sprungmarken, auf die Kacheln und Balken verweisen. */
export default function SourceList({ sources, sampleLabel, periodLabel }: SourceListProps) {
  return (
    <ol className="sources">
      {sources.map((source) => (
        <li className="sources__item" id={sourceAnchor(source.id)} key={source.id}>
          <p className="sources__title">
            <strong>{source.publisher}:</strong>{' '}
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              {source.title}
            </a>
            , {source.publishedLabel}
          </p>
          <p className="sources__meta">
            {sampleLabel}: {source.sample}. {periodLabel}: {source.period}.
            {source.note ? ` ${source.note}` : null}
          </p>
        </li>
      ))}
    </ol>
  );
}
