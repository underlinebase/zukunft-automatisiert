// Texte der Seite /garantie. Grundlage sind GUARANTEE, WEEKS, FAQS und EXPERIENCE aus home.ts:
// Hier steht nichts, was dort nicht angelegt ist. Offene Punkte klärt Marco, bevor sie hier auftauchen.

import { GUARANTEE, HOME_EXAMPLE, WEEKS } from './home';
import type { Faq } from './types';

const [MEANING, MEASURE, NOT_PROMISED, OUT_OF_SCOPE] = GUARANTEE.points;

export const GARANTIE_HERO = {
  eyebrow: 'Garantie',
  title: GUARANTEE.title,
  lead: 'Sie zahlen einen Festpreis für einen Ablauf, der im vereinbarten Umfang läuft. Schafft er das nach den 4 Wochen nicht, bessere ich ohne Aufpreis nach. Hier steht, was zum Umfang gehört und was nicht.',
  primaryCta: 'Ablauf schildern',
  secondaryCta: 'So prüfen wir am Ende',
};

export const GARANTIE_PROMISE = {
  eyebrow: 'Die Zusage',
  title: 'Was ich Ihnen verspreche.',
  text: [
    'Nach dem Erstgespräch bekommen Sie einen Festpreis, schriftlich. Dafür automatisiere ich in 4 Wochen den einen Ablauf, der Sie jede Woche am meisten Zeit kostet.',
    'Was der Ablauf können soll, halten wir in Woche 1 schriftlich fest. Das ist der vereinbarte Umfang. Erfüllt der Ablauf diesen Umfang am Ende nicht, bessere ich nach, bis er es tut. Am Festpreis ändert das nichts.',
    'Üblich ist so eine Zusage nicht. Oft wird nach Aufwand abgerechnet: Dauert es länger, zahlen Sie mehr. Bei mir trägt das Risiko für den vereinbarten Umfang der, der ihn gebaut hat. Neue Wünsche, die unterwegs dazukommen, biete ich Ihnen getrennt an, mit Preis vorab.',
  ],
  pilotNote: 'Das gilt auch für die drei Pilotplätze zum Pilotpreis von 1.999 € netto. Gleiche Garantie, gleicher Maßstab.',
};

/** Entscheidungsweg nach den 4 Wochen. Die Grafik baut sich beim Scrollen auf. */
export const GARANTIE_PATH = {
  eyebrow: 'Nach 4 Wochen',
  title: 'Am Ende gibt es zwei Ausgänge. Für den vereinbarten Umfang kostet keiner mehr.',
  start: {
    label: '4 Wochen',
    title: 'Aufnehmen, bauen, testen, einweisen',
    weeks: WEEKS.map((week) => ({ week: week.week, title: week.title })),
  },
  check: {
    label: 'Prüfung',
    title: 'Läuft der Ablauf so, wie wir es in Woche 1 schriftlich festgehalten haben?',
  },
  yes: {
    label: 'Ja',
    title: 'Übergabe',
    text: WEEKS[3].youGet.replace(/\.$/, '') + '. Der Ablauf gehört Ihnen.',
  },
  no: {
    label: 'Nein',
    title: 'Ich bessere ohne Aufpreis nach',
    text: 'An dem, was im vereinbarten Umfang fehlt. Dann prüfen wir noch einmal.',
    loop: 'zurück zur Prüfung',
  },
};

export const GARANTIE_MEANING = {
  eyebrow: MEANING.label,
  title: 'Was „läuft“ genau heißt.',
  lead: MEANING.text,
  criteria: [
    'Der vereinbarte Ablauf erledigt seine Aufgabe im Alltag.',
    'Er arbeitet mit Ihren echten Daten. Testfälle zählen nicht.',
    'Sie müssen nicht nachhelfen, damit er durchläuft.',
  ],
  measureTitle: MEASURE.label,
  measure: [
    `${MEASURE.text} In Woche 1 nehmen wir den Ablauf gemeinsam auf. Sie bekommen ${WEEKS[0].youGet.charAt(0).toLowerCase()}${WEEKS[0].youGet.slice(1)} Diese Beschreibung ist der Maßstab, kein Bauchgefühl.`,
    `In Woche 3 läuft die Lösung neben Ihrem gewohnten Ablauf mit. Wir prüfen sie an echten Fällen und an den Sonderfällen. Was dort hakt, sehen wir vor der Übergabe und nicht erst danach.`,
  ],
  exampleTitle: 'Wie so eine Beschreibung aussehen kann',
  exampleNote: 'Beispiel einer Angebotsanfrage im Handwerksbetrieb, kein Kundenfall.',
  example: HOME_EXAMPLE.steps.map((step) => (step.afterText ? `${step.text}: ${step.afterText}.` : `${step.text}.`)),
};

export const GARANTIE_EXCLUDED = {
  eyebrow: 'Grenzen',
  title: 'Was die Garantie nicht abdeckt.',
  lead: 'Eine Garantie ist nur etwas wert, wenn klar ist, wo sie aufhört.',
  items: [
    {
      label: NOT_PROMISED.text.split('.')[0],
      text: 'Ich verspreche Ihnen Zeit, keine Umsatzzahlen. Ob aus der gewonnenen Zeit mehr Aufträge werden, hängt an vielem, das ich nicht in der Hand habe.',
    },
    {
      label: OUT_OF_SCOPE.label,
      text: 'Die Garantie gilt für den Umfang, den wir in Woche 1 schriftlich festhalten. Kommt unterwegs ein neuer Wunsch dazu, etwa ein weiterer Schritt oder eine zusätzliche Software, sage ich Ihnen vorher, was er kostet. Sie entscheiden, ob er jetzt dazukommt, später oder gar nicht.',
    },
    {
      label: 'Änderungen an fremder Software nach der Übergabe',
      text: 'Ändert ein Anbieter nach der Übergabe seine Schnittstelle oder sein Programm, ist die Anpassung keine Nachbesserung, sondern Betreuung. Die ist freiwillig und monatlich kündbar.',
    },
    {
      label: 'Fehlende Zugänge oder Daten',
      text: 'Ohne Zugänge und echte Beispielfälle kann ich nicht bauen. Kommen sie später, verschiebt sich der Zeitplan um diese Zeit. Der vereinbarte Umfang bleibt derselbe.',
    },
    {
      label: 'Eine KI, die Mitarbeiter ersetzt',
      text: 'So etwas baue ich nicht. Was Fachwissen braucht, bleibt bei Ihnen. Im Beispiel oben prüfen Sie den Angebotsentwurf weiter selbst und geben ihn frei.',
    },
  ],
};

export const GARANTIE_PROCESS = {
  eyebrow: 'Wenn etwas hakt',
  title: 'So läuft es, wenn der Ablauf noch nicht funktioniert.',
  steps: [
    {
      title: 'Wir prüfen gemeinsam.',
      text: 'Am Ende von Woche 4 gehen wir die schriftliche Beschreibung aus Woche 1 durch. An echten Fällen aus Ihrem Betrieb, Punkt für Punkt.',
    },
    {
      title: 'Ich bessere nach.',
      text: 'Erledigt der Ablauf einen Teil des vereinbarten Umfangs nicht, oder müssen Sie dafür noch nachhelfen, bessere ich nach. Ohne Aufpreis.',
    },
    {
      title: 'Wir prüfen noch einmal.',
      text: 'Mit demselben Maßstab wie vorher: der Beschreibung aus Woche 1.',
    },
    {
      title: 'Übergabe, wenn er läuft.',
      text: `Erst dann übergebe ich. Sie bekommen ${WEEKS[3].youGet.charAt(0).toLowerCase()}${WEEKS[3].youGet.slice(1)}`,
    },
  ],
};

export const GARANTIE_WHY = {
  eyebrow: 'Der KI-Realist',
  title: 'Warum ich das anbiete.',
  text: [
    'Eine solche Garantie kann ich nur geben, weil ich vorher genau hinschaue. Im Erstgespräch frage ich, wie der Ablauf heute läuft, mit welcher Software und wie oft im Monat. Passt es nicht, sage ich das. Auch wenn die Antwort lautet: Das lohnt sich nicht.',
    'Mein Maßstab für den Festpreis: Die Automatisierung muss sich innerhalb eines Jahres bezahlt machen. Liegt der Preis darüber, rate ich Ihnen ab. Dann haben Sie nichts bezahlt und wissen trotzdem mehr.',
    'Ab und zu sage ich auch vorher Nein. Etwa wenn der Ablauf jedes Mal anders ist oder fast alles auf Papier läuft. Dann fangen wir besser dort an, und das sage ich Ihnen auch.',
    'KI setze ich nur ein, wo sie wirklich hilft, zum Beispiel beim Lesen von E-Mails oder schlecht gescannten Belegen. Für die meisten Abläufe reichen klare Regeln. Die sind günstiger und leichter zu warten.',
  ],
  quote: 'Ich rede Ihnen auch etwas aus.',
};

export const GARANTIE_FAQ_INTRO = {
  eyebrow: 'Fragen',
  title: 'Was Inhaber zur Garantie fragen.',
};

export const GARANTIE_FAQS: Faq[] = [
  {
    q: 'Was passiert, wenn der Ablauf nach 4 Wochen nicht läuft?',
    a: 'Dann bessere ich ohne Aufpreis nach, bis er den vereinbarten Umfang erfüllt. Sie zahlen den Festpreis, nicht mehr. „Läuft“ heißt: Der vereinbarte Ablauf erledigt seine Aufgabe mit Ihren echten Daten, ohne dass Sie nachhelfen müssen.',
  },
  {
    q: 'Was, wenn mir unterwegs noch etwas einfällt?',
    a: 'Dann schreiben wir es auf und ich sage Ihnen, was es kostet. Was nicht im vereinbarten Umfang steht, gehört nicht zur Garantie, sondern ist ein eigener Auftrag nach Aufwand. Oft ist es der nächste Ablauf.',
  },
  {
    q: 'Wer entscheidet, ob der Ablauf läuft?',
    a: 'Nicht mein Gefühl und nicht Ihres, sondern die schriftliche Beschreibung aus Woche 1. Darin steht, was der Ablauf können soll. Am Ende prüfen wir gemeinsam an echten Fällen, ob er genau das tut.',
  },
  {
    q: 'Gilt die Garantie auch zum Pilotpreis?',
    a: 'Ja. Die ersten drei Betriebe bekommen ihren Ablauf für 1.999 € zzgl. USt., mit derselben Garantie. Im Gegenzug darf ich das Ergebnis als Fallbeispiel zeigen, wenn Sie einverstanden sind.',
  },
  {
    q: 'Garantieren Sie mehr Umsatz?',
    a: 'Nein. Ich verspreche Ihnen Zeit, keine Umsatzzahlen. Wie viel Zeit der Ablauf Sie heute kostet, rechnen wir vorher mit Ihren Zahlen durch. Rechnet sich der Festpreis nicht innerhalb eines Jahres, rate ich ab.',
  },
  {
    q: 'Was, wenn sich mein Ablauf gar nicht automatisieren lässt?',
    a: 'Das kläre ich vor dem Start, im Erstgespräch. Das kostet nichts. Ist der Ablauf jedes Mal anders oder liegt fast alles auf Papier, sage ich Ihnen das offen. Dann rate ich ab, bevor Sie etwas bezahlen.',
  },
  {
    q: 'Was passiert nach der Übergabe?',
    a: 'Der Ablauf gehört Ihnen und läuft weiter. Sie bekommen alle Zugänge, eine Anleitung und ein kurzes Erklärvideo. Betreuung danach ist freiwillig und monatlich kündbar. Eine Mindestlaufzeit gibt es nicht.',
  },
];

export const GARANTIE_LINKS = {
  eyebrow: 'Weiterlesen',
  title: 'Passend dazu.',
  links: [
    { label: 'So arbeite ich als KI-Berater', href: '/ki-beratung' },
    { label: 'Abläufe, die sich automatisieren lassen', href: '/ablaeufe' },
    { label: 'Warum ich nach vier Wochen gehe', href: '/wissen/warum-ich-nach-vier-wochen-gehe' },
  ],
};
