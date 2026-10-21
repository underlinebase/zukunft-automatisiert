import { dayLabel, visibleModifiedDate } from '@/lib/content/articles/dates';

interface ArticleDatesProps {
  datePublished: string;
  dateModified?: string;
}

/** Erscheinungs- und Überarbeitungsdatum unter der Autorenzeile, tagesgenau und maschinenlesbar. */
export default function ArticleDates({ datePublished, dateModified }: ArticleDatesProps) {
  const modified = visibleModifiedDate({ datePublished, dateModified });
  return (
    <p className="article__dates">
      Veröffentlicht am <time dateTime={datePublished}>{dayLabel(datePublished)}</time>
      {modified ? (
        <>
          <span aria-hidden="true"> · </span>
          Aktualisiert am <time dateTime={modified}>{dayLabel(modified)}</time>
        </>
      ) : null}
    </p>
  );
}
