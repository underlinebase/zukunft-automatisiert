import type { Ablauf } from './types';

export const teamWissenFragenKi: Ablauf = {
  id: 3013,
  slug: 'team-wissen-fragen-ki',
  branche: 'alle',
  themen: ['wissen'],
  title: 'Interne Wissenssuche mit KI',
  lead: 'Ihr Team fragt in normaler Sprache und bekommt Antworten aus Ihren eigenen Anleitungen und Dokumenten, immer mit Quelle. Und ehrlich, wenn nichts da ist.',
  datePublished: '2026-10-19',
  problem: [
    'Die neue Kollegin ist seit drei Wochen da. Sie fragt, wie man eine Reklamation erfasst. Am nächsten Tag, wo die Vorlage für das Abnahmeprotokoll liegt. Dann, welcher Lieferant für Sonderanfertigungen zuständig ist. Jede Frage ist berechtigt, jede Antwort dauert zwei Minuten. Aber jedes Mal reißt sie Sie oder einen erfahrenen Kollegen aus der Arbeit.',
    'Die Antworten gibt es eigentlich. Es gibt ein Handbuch von 2021, einen Ordner mit Anleitungen, ein paar Seiten im Wiki und viele E-Mails, in denen jemand etwas erklärt hat. Nur sucht darin niemand, weil die Suche im Dateisystem bei „Reklamation“ 80 Dateien findet und keine davon die richtige zu sein scheint.',
    'Also wird gefragt. Das Wissen bleibt in drei Köpfen. Und wenn einer dieser Köpfe in Urlaub ist oder kündigt, merken Sie, wie viel davon nirgends aufgeschrieben ist.',
  ],
  heute: [
    'Neue und erfahrene Mitarbeiter fragen bei Kollegen nach.',
    'Anleitungen liegen verstreut in Ordnern, im Wiki und in E-Mails.',
    'Die Dateisuche findet viel, aber selten das Richtige.',
    'Wissen, das nirgends steht, bleibt bei einzelnen Personen.',
  ],
  danach: [
    'Ihre Anleitungen, Vorlagen und Regeln werden einmal gesammelt und durchsuchbar gemacht.',
    'Mitarbeiter stellen ihre Frage im Chat, etwa in Teams oder auf einer internen Seite.',
    'Die KI sucht die passenden Stellen in Ihren Dokumenten und formuliert daraus eine Antwort.',
    'Unter jeder Antwort steht, aus welchem Dokument sie stammt, mit Link.',
    'Findet sich nichts, sagt die KI das und nennt, wen man fragen kann.',
    'Fragen ohne Antwort werden gesammelt. So sehen Sie, was noch aufgeschrieben werden muss.',
  ],
  mensch:
    'Sie und Ihr Team schreiben das Wissen auf und halten es aktuell. Das ist der Teil, der am meisten Arbeit macht und den keine KI übernimmt. Veraltete Dokumente müssen raus, sonst antwortet die KI mit dem Stand von 2021. Bei allem, was Geld, Sicherheit oder Recht betrifft, prüfen Mitarbeiter die Quelle, bevor sie handeln.',
  ki:
    'Die KI macht hier zwei Dinge. Sie findet zu einer Frage die passenden Abschnitte, auch wenn andere Wörter benutzt werden, als im Dokument stehen. Und sie formuliert aus diesen Abschnitten eine kurze Antwort. Sie darf dabei nur verwenden, was in Ihren Dokumenten steht, und muss die Quelle nennen. Das senkt das Risiko erfundener Antworten deutlich, beseitigt es aber nicht. Darum steht die Quelle immer dabei. Ich setze Claude oder ein OpenAI-Modell ein.',
  werkzeuge: ['Google Drive, SharePoint oder Notion', 'n8n', 'Claude oder OpenAI-Modell', 'eine Suchdatenbank für die Texte', 'Microsoft Teams, Slack oder eine interne Webseite'],
  nutzen: 'mittel',
  aufwand: 'gross',
  beispiel: {
    perWeek: 25,
    minutesBefore: 5,
    minutesAfter: 2,
    hourlyRate: 60,
    annahme:
      'Ein Team, in dem pro Woche 25 Fragen an Kollegen gehen. Jede kostet heute rund 5 Minuten, zusammen für den, der fragt, und den, der antwortet. Danach bleiben etwa 2 Minuten zum Lesen und Prüfen der Quelle. 60 Euro pro Stunde sind ein angenommener Wert für eine Arbeitsstunde im Betrieb.',
  },
  grenzen: [
    'Die KI weiß nur, was aufgeschrieben ist. Ist Ihr Wissen bisher vor allem in Köpfen, beginnt das Projekt mit Aufschreiben, nicht mit Technik.',
    'Die KI kann eine Stelle falsch verstehen oder zwei Dokumente vermischen. Sie ist eine Suchhilfe, kein Ersatz für das Nachlesen bei wichtigen Fragen.',
    'Zugriffsrechte müssen stimmen. Lohnlisten oder Personalakten gehören nicht in den Bestand, den alle durchsuchen können.',
    'Unter etwa zehn Mitarbeitern oder bei wenigen Dokumenten lohnt sich der Aufwand selten. Dann ist ein gut gepflegter Ordner mit klaren Namen die bessere Lösung.',
  ],
  faqs: [
    {
      q: 'Ist das nicht einfach ChatGPT mit unseren Dateien?',
      a: 'Im Kern ähnlich, mit wichtigen Unterschieden. Die KI antwortet nur aus Ihren Dokumenten, nennt die Quelle und sagt, wenn sie nichts findet. Sie läuft über eine Schnittstelle ohne Training auf Ihren Daten. Und Sie bestimmen, welche Dokumente überhaupt drin sind.',
    },
    {
      q: 'Was passiert, wenn sich eine Anleitung ändert?',
      a: 'Sie ändern das Dokument an seinem gewohnten Platz. Der Ablauf liest geänderte Dateien regelmäßig neu ein, zum Beispiel jede Nacht. Ab dem nächsten Morgen antwortet die KI mit dem neuen Stand.',
    },
    {
      q: 'Wie viel muss vorher aufgeräumt werden?',
      a: 'Mehr, als die meisten denken. Doppelte und veraltete Dokumente sind das größte Problem, weil die KI nicht weiß, welche Version gilt. Ich empfehle, mit einem Bereich anzufangen, etwa Reklamationen oder Einarbeitung, und den gründlich aufzuräumen.',
    },
  ],
  related: [
    { label: 'Dokumente automatisch ablegen', href: '/ablaeufe/dokumente-ablegen-umbenennen' },
    { label: 'Wenn der Mitarbeiter geht', href: '/wissen/wenn-der-mitarbeiter-geht' },
    { label: 'KI im Betrieb ohne Hype', href: '/wissen/ki-im-betrieb-ohne-hype' },
  ],
};
