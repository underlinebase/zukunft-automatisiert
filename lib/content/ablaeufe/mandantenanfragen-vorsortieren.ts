import type { Ablauf } from './types';

export const mandantenanfragenVorsortieren: Ablauf = {
  id: 2005,
  slug: 'mandantenanfragen-vorsortieren',
  branche: 'steuerberater',
  themen: ['anfragen', 'kommunikation'],
  title: 'Mandantenanfragen vorsortieren',
  seoTitle: 'Mandantenanfragen mit KI sortieren',
  lead: 'Das Kanzleipostfach mit KI vorsortieren: Belege, Bescheide, Fragen und Terminwünsche landen bei der richtigen Person, mit kurzer Zusammenfassung.',
  datePublished: '2026-10-19',
  problem: [
    'Im gemeinsamen Postfach der Kanzlei liegen am Montag achtzig neue E-Mails. Dazwischen ein weitergeleiteter Steuerbescheid, zwei Fragen zur Pendlerpauschale, eine Kündigung, viele Belege und ein Schreiben vom Finanzamt, das der Mandant „nur zur Info“ schickt.',
    'Jemand muss das sichten, bevor die Fachkräfte loslegen können. Oft ist es die Person am Empfang, manchmal die Inhaberin selbst. Jede E-Mail öffnen, verstehen, weiterleiten. Wichtiges wird manchmal spät gesehen, weil es zwischen Routinepost steckt.',
    'Bei einem Bescheid läuft ab Bekanntgabe die Einspruchsfrist von einem Monat. Eine E-Mail, die drei Tage ungelesen im Sammelpostfach liegt, kostet davon drei Tage. Und niemand hat etwas falsch gemacht, es war nur zu viel Post.',
  ],
  heute: [
    'Jede E-Mail im Sammelpostfach öffnen und lesen.',
    'Entscheiden, wer zuständig ist.',
    'Weiterleiten, oft mit ein paar erklärenden Worten.',
    'Bescheide gesondert markieren und an die Fristenkontrolle geben.',
    'Belege herauslösen und ablegen.',
  ],
  danach: [
    'Der Ablauf liest neue E-Mails im Sammelpostfach mit.',
    'Ein KI-Modell ordnet jede E-Mail einer Art zu: Beleg, Bescheid, Frage, Terminwunsch oder Sonstiges.',
    'Über die Absenderadresse findet der Ablauf den Mandanten und die zuständige Person.',
    'Die E-Mail bekommt eine Kategorie und eine Zusammenfassung in zwei Sätzen und landet im Ordner der zuständigen Person.',
    'Bescheide meldet er sofort, damit Ihr Team die Frist erfasst.',
    'Was der Ablauf nicht sicher einordnen kann, bleibt im Sammelpostfach, markiert mit „bitte ansehen“.',
  ],
  mensch:
    'Die Antworten schreibt Ihr Team. Der Ablauf schreibt Mandanten nichts Fachliches, er sortiert und fasst zusammen. Fristen trägt Ihr Team selbst ein, nachdem es den Bescheid angesehen hat. Die Kategorien und Zuständigkeiten legen Sie fest, und in den ersten Wochen sehen Sie jede Zuordnung, bis Sie dem Ablauf trauen.',
  ki: 'Beim Einordnen. E-Mails von Mandanten folgen keinem Schema. „Anbei das Schreiben vom Amt, was soll ich tun?“ ist Bescheid und Frage zugleich. Ein KI-Modell erkennt das besser als jede Stichwortregel. Für Mandantendaten kommen nur Dienste in Frage, die keine Daten zum Training verwenden und mit denen ein Vertrag zur Auftragsverarbeitung besteht. Auf Wunsch entfernt der Ablauf Steuernummern, Steuer-IDs und IBANs aus dem Text, bevor er an die KI geht.',
  werkzeuge: ['n8n', 'Outlook oder Gmail', 'Claude oder ein OpenAI-Modell', 'Mandantenliste als Export'],
  nutzen: 'mittel',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 100,
    minutesBefore: 3,
    minutesAfter: 1,
    hourlyRate: 85,
    annahme:
      'Ein Sammelpostfach mit etwa 100 Mandanten-E-Mails pro Woche. Gerechnet sind Lesen, Zuordnen und Weiterleiten, nicht das Beantworten. Typische Werte, kein Kundenfall.',
  },
  grenzen: [
    'Die KI irrt sich manchmal. Deshalb bleibt alles Unsichere im Sammelpostfach, und in den ersten Wochen prüft Ihr Team jede Zuordnung.',
    'Ob ein KI-Dienst Mandanten-E-Mails lesen darf, ist eine berufsrechtliche Frage. Die klären wir vor dem Start. Ohne Freigabe sortiert der Ablauf nur nach festen Regeln, etwa nach Absender und Art des Anhangs.',
    'Der Ablauf führt kein Fristenbuch. Er meldet Bescheide schnell, erfassen und kontrollieren muss die Frist Ihr Team.',
  ],
  faqs: [
    {
      q: 'Liest die KI alle E-Mails mit?',
      a: 'Sie liest die E-Mails im Sammelpostfach, das Sie dafür freigeben, und zwar nur zum Einordnen. Persönliche Postfächer bleiben außen vor. Welcher Dienst das macht, wo er die Daten verarbeitet und dass er sie nicht zum Training verwendet, halten wir schriftlich fest, bevor etwas läuft.',
    },
    {
      q: 'Was passiert, wenn die Zuordnung falsch ist?',
      a: 'Dann landet eine E-Mail bei der falschen Kollegin, die sie mit einem Klick weitergibt. Der Ablauf lernt aus solchen Korrekturen nicht von selbst. Häufen sie sich, passe ich die Regeln oder die Anweisung an die KI an.',
    },
    {
      q: 'Kann der Ablauf auch gleich antworten?',
      a: 'Eine Eingangsbestätigung ja, fachliche Antworten nein. Was ein Mandant zu seinem Bescheid hören muss, entscheidet eine Fachkraft.',
    },
  ],
  related: [
    { label: 'ChatGPT im Betrieb', href: '/wissen/chatgpt-im-betrieb' },
    { label: 'Ablauf: Belege benennen und zuordnen', href: '/ablaeufe/belege-benennen-zuordnen' },
    { label: 'Datenschutz bei Automatisierung', href: '/wissen/datenschutz-bei-automatisierung' },
  ],
};
