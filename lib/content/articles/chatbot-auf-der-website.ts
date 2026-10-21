import type { Article } from '@/lib/types';
import { PUBLISHED, PUBLISHED_ISO } from './dates';

export const chatbotAufDerWebsite: Article = {
  id: 9,
  slug: 'chatbot-auf-der-website',
  title: 'Chatbot auf der Website? Meistens nicht.',
  date: PUBLISHED,
  datePublished: PUBLISHED_ISO,
  read_minutes: 4,
  category: 'KI ohne Hype',
  lead: 'Kaum etwas wird kleinen Betrieben gerade so oft angeboten wie der KI-Chatbot. Ich rate in den meisten Fällen davon ab.',
  body: [
    { kind: 'h2', text: 'Was ein Chatbot verspricht' },
    { kind: 'p', text: 'Rund um die Uhr erreichbar, beantwortet Fragen, sammelt Anfragen ein. Klingt gut. Wer aber die Seite eines Handwerkers oder einer Kanzlei besucht, hat selten eine Frage, die ein Bot beantworten kann. Er will einen Termin oder ein Angebot.' },
    { kind: 'h2', text: 'Was dabei schiefgehen kann' },
    { kind: 'p', text: 'Ein Chatbot, der falsche Auskünfte gibt, schadet mehr als gar keiner. Er nennt einen Preis, den es nicht gibt, oder verspricht einen Termin, der nicht frei ist. Und viele Ihrer Kunden schließen so ein Fenster ohnehin sofort.' },
    { kind: 'q', text: 'Ein gutes Kontaktformular mit drei Feldern bringt meistens mehr als ein Chatbot mit hundert Antworten.' },
    { kind: 'h2', text: 'Wann es doch passt' },
    { kind: 'p', text: 'Wenn sehr viele gleiche Fragen kommen, etwa zu Öffnungszeiten oder benötigten Unterlagen, kann ein Bot entlasten. Dann aber mit klaren Grenzen: Er beantwortet nur, was er sicher weiß, und gibt alles andere an einen Menschen weiter.' },
  ],
  notes: ['Bevor Sie einen Chatbot kaufen: Zählen Sie eine Woche lang, welche Fragen wirklich gestellt werden.'],
  related: [
    { label: 'Ablauf: Kontaktformular direkt ins CRM', href: '/ablaeufe/kontaktformular-ins-crm' },
    { label: 'KI im Betrieb: Was hilft und was nur gut klingt', href: '/wissen/ki-im-betrieb-ohne-hype' },
  ],
};
