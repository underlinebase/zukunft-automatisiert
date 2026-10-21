import type { Article } from '@/lib/types';
import { PUBLISHED, PUBLISHED_ISO } from './dates';

export const excelIstNichtDasProblem: Article = {
  id: 13,
  slug: 'excel-ist-nicht-das-problem',
  title: 'Excel ist nicht das Problem.',
  date: PUBLISHED,
  datePublished: PUBLISHED_ISO,
  read_minutes: 4,
  category: 'Werkzeuge',
  seoDescription:
    'Excel bekommt oft die Schuld, dabei hakt es meist am Abtippen. Die Tabelle darf bleiben: Sie wird automatisch gefüllt, und die Daten wandern von dort weiter.',
  lead: 'Wenn von Digitalisierung die Rede ist, bekommt Excel oft die Schuld. Dabei arbeiten viele Betriebe seit Jahren gut damit.',
  body: [
    { kind: 'h2', text: 'Wo es wirklich hakt' },
    { kind: 'p', text: 'Das Problem ist selten die Tabelle selbst. Es ist das Abtippen. Daten kommen per E-Mail, werden von Hand in die Tabelle übertragen und von dort wieder in ein anderes Programm. Jeder dieser Schritte kostet Zeit und bringt Tippfehler mit sich.' },
    { kind: 'h2', text: 'Die Tabelle darf bleiben' },
    { kind: 'p', text: 'Ich muss Ihnen keine neue Software verkaufen, damit es besser wird. Oft reicht es, die Tabelle automatisch zu füllen und dafür zu sorgen, dass die Daten von dort weiterwandern. Ihr Team arbeitet in der gewohnten Tabelle weiter, nur das Abtippen fällt weg.' },
    { kind: 'p', text: 'Irgendwann kommt jede Tabelle an ihre Grenzen. Arbeiten mehrere Leute gleichzeitig darin, oder wird sie so groß, dass sie langsam reagiert, lohnt sich ein anderes Werkzeug. Das ist aber eine eigene Entscheidung, und sie muss nicht am Anfang stehen.' },
  ],
  notes: ['Tabellen in Google oder Microsoft 365 lassen sich gut anbinden. Lokale Dateien auf einem einzelnen Rechner sind schwieriger.'],
};
