import type { Ablauf } from './types';

export const fristenErinnerungenMandanten: Ablauf = {
  id: 2004,
  slug: 'fristen-erinnerungen-mandanten',
  branche: 'steuerberater',
  themen: ['termine', 'kommunikation', 'nachfassen'],
  title: 'Fristen-Erinnerungen an Mandanten',
  lead: 'Mandanten automatisch an Fristen erinnern: rechtzeitig und mit klarer Liste der Unterlagen. Ihr Team sieht auf einen Blick, wer noch nicht geliefert hat.',
  datePublished: '2026-10-19',
  problem: [
    'Jede Kanzlei kennt die Termine: Belege für die Umsatzsteuer-Voranmeldung, Lohnänderungen vor der Abrechnung, die Unterlagen zur Einkommensteuer im Frühjahr. Die Voranmeldung ist am 10. des Folgemonats fällig, mit Dauerfristverlängerung einen Monat später. Damit das klappt, braucht Ihr Team die Belege ein paar Tage vorher.',
    'Wer erinnert wann? In vielen Kanzleien hängt das an einzelnen Mitarbeitern, an Serienterminen in Outlook oder an einer Excel-Liste, die nur eine Person versteht. Hat diese Person Urlaub, wird nicht erinnert. Dann kommen die Belege am 9., und alle arbeiten unter Druck.',
    'Die Erinnerungen selbst sind Routine. Sie unterscheiden sich nur im Namen, im Termin und in den Unterlagen. Das ist genau die Art Arbeit, die ein fester Ablauf zuverlässiger erledigt als ein Mensch, der nebenher an zehn anderen Dingen sitzt.',
  ],
  heute: [
    'Im Kalender oder in der Liste nachsehen, welche Termine anstehen.',
    'Prüfen, ob die Unterlagen schon da sind.',
    'Jedem Mandanten einzeln eine Erinnerung schreiben.',
    'Notieren, wer geantwortet hat.',
    'Kurz vor dem Termin alle anrufen, von denen noch nichts kam.',
  ],
  danach: [
    'Grundlage ist eine Terminliste je Mandant, gepflegt in Ihrer Kanzleisoftware oder in einer einfachen Tabelle.',
    'Der Ablauf schaut jeden Morgen, welche internen Abgabetermine näher rücken.',
    'Liegen die Unterlagen noch nicht vor, bekommt der Mandant eine Erinnerung mit Termin und Liste.',
    'Kurz vor dem Termin folgt eine zweite, knappere Nachricht.',
    'Ihr Team bekommt jeden Montag eine Übersicht: wer geliefert hat, wer nicht, wer einen Anruf braucht.',
  ],
  mensch:
    'Ihr Team pflegt die Termine und legt fest, bis wann Unterlagen in der Kanzlei sein sollen. Es entscheidet, wer nach der zweiten Erinnerung angerufen wird, und kümmert sich um Mandanten mit Sonderregeln. Die gesetzlichen Fristen und die Fristenkontrolle der Kanzlei, etwa für Einsprüche, bleiben vollständig in Ihrer Verantwortung. Der Ablauf erinnert Mandanten an Unterlagen. Ein Fristenbuch führt er nicht.',
  werkzeuge: ['n8n', 'Terminliste als Export oder Tabelle', 'Outlook oder Gmail'],
  nutzen: 'mittel',
  aufwand: 'klein',
  beispiel: {
    perWeek: 25,
    minutesBefore: 6,
    minutesAfter: 1,
    hourlyRate: 85,
    annahme:
      'Etwa 25 Erinnerungen pro Woche über alle Mandanten. Gerechnet sind Nachsehen, Schreiben und Notieren je Mandant, danach bleibt der Blick auf die Montagsübersicht. Typische Werte, kein Kundenfall.',
  },
  grenzen: [
    'Der Ablauf weiß nur, was in der Terminliste steht. Eine veraltete Liste erzeugt falsche Erinnerungen.',
    'Er ersetzt keine Fristenkontrolle der Kanzlei für Einspruchs- oder Abgabefristen gegenüber dem Finanzamt.',
    'Ob Unterlagen schon da sind, kann er nur prüfen, wenn er den Belegeingang sehen darf. Sonst geht die Erinnerung an alle, mit dem Hinweis, sie zu ignorieren, wenn schon alles geschickt ist.',
  ],
  faqs: [
    {
      q: 'Nervt das die Mandanten nicht?',
      a: 'Nicht, wenn die Erinnerung nur kommt, solange wirklich etwas fehlt. Wer schon geliefert hat, bekommt nichts. Zwei Nachrichten pro Termin reichen meistens. Die Abstände legen Sie fest.',
    },
    {
      q: 'Was ist mit Dauerfristverlängerung und Sonderfällen?',
      a: 'Gilt für einen Mandanten eine Dauerfristverlängerung, steht das in der Terminliste, und der Ablauf rechnet mit dem späteren Termin. Ändert sich etwas, pflegt Ihr Team das an einer Stelle, nicht in drei Kalendern.',
    },
    {
      q: 'Reicht dafür nicht ein Serientermin in Outlook?',
      a: 'Für drei Mandanten ja. Bei hundert merkt ein Serientermin nicht, wer schon geliefert hat, und er schreibt keine persönliche Liste. Sobald Sie anfangen, Ausnahmen von Hand zu verwalten, lohnt sich ein Ablauf.',
    },
  ],
  related: [
    { label: 'Ablauf: Fehlende Belege anfordern', href: '/ablaeufe/fehlende-belege-anfordern' },
    { label: 'Excel ist nicht das Problem', href: '/wissen/excel-ist-nicht-das-problem' },
    { label: 'Ablauf: Unterlagen für den Jahresabschluss', href: '/ablaeufe/jahresabschluss-unterlagen-checkliste' },
  ],
};
