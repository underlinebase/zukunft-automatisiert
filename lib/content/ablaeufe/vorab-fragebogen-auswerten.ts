import type { Ablauf } from './types';

export const vorabFragebogenAuswerten: Ablauf = {
  id: 3002,
  slug: 'vorab-fragebogen-auswerten',
  branche: 'coaches',
  themen: ['onboarding', 'anfragen'],
  title: 'Vorab-Fragebogen auswerten',
  seoTitle: 'Coaching-Fragebogen auswerten',
  lead: 'Neue Klienten füllen vor dem ersten Termin einen Fragebogen aus. Sie bekommen eine kurze Zusammenfassung und gehen vorbereitet ins Gespräch.',
  datePublished: '2026-10-19',
  problem: [
    'Fünf Minuten vor dem Erstgespräch öffnen Sie die E-Mail mit den Antworten aus dem Fragebogen. Zwei Seiten Text, dazu ein paar angekreuzte Kästchen. Sie überfliegen alles, bleiben an einem Satz hängen und merken, dass Ihnen die Zeit fehlt, ihn richtig zu verstehen. Dann klingelt schon Zoom.',
    'Manche Klienten schicken den Fragebogen gar nicht zurück. Andere füllen ihn in der Nacht vor dem Termin aus, und die Antworten liegen irgendwo zwischen Newslettern im Postfach. Wer welche Unterlagen schon geschickt hat, wissen Sie oft erst, wenn Sie danach fragen.',
    'Die Folge: Die ersten zwanzig Minuten des Gesprächs gehen für Fragen drauf, die längst beantwortet sind. Der Klient merkt das. Er hat sich Mühe gegeben und das Gefühl, dass niemand gelesen hat, was er geschrieben hat.',
  ],
  heute: [
    'Sie schicken den Fragebogen als PDF oder Link von Hand nach der Buchung.',
    'Die Antworten kommen per E-Mail, manchmal als Anhang, manchmal gar nicht.',
    'Ob jemand ausgefüllt hat, prüfen Sie kurz vor dem Termin.',
    'Sie lesen alles in Eile und schreiben sich Stichpunkte heraus.',
  ],
  danach: [
    'Mit der Buchungsbestätigung bekommt der Klient den Link zum Fragebogen.',
    'Fehlen die Antworten zwei Tage vor dem Termin, geht eine freundliche Erinnerung raus.',
    'Die Antworten landen gesammelt beim Klienten in Ihrer Kundenliste.',
    'Eine KI fasst die Antworten auf einer halben Seite zusammen, mit offenen Fragen fürs Gespräch.',
    'Am Morgen des Termins liegt die Zusammenfassung in Ihrem Postfach, darunter die vollständigen Antworten.',
  ],
  mensch:
    'Sie entscheiden, welche Fragen im Fragebogen stehen. Die Zusammenfassung ist ein Spickzettel, keine Diagnose. Vor dem Gespräch lesen Sie trotzdem selbst, vor allem die Stellen, an denen jemand ausführlich wird. Dort steckt meist das eigentliche Thema. Und Sie entscheiden im Gespräch, worüber Sie sprechen. Die offenen Fragen der KI sind Vorschläge.',
  ki:
    'Die KI liest die freien Antworten und schreibt daraus eine kurze Übersicht: Anliegen in zwei Sätzen, was der Klient schon versucht hat, was er sich wünscht, wo Antworten sich widersprechen. Dazu drei Fragen, die Sie stellen könnten. Ich setze dafür Claude oder ein OpenAI-Modell über eine Schnittstelle ein, bei der die Daten nicht zum Training verwendet werden. Ankreuzfragen brauchen keine KI, die werden einfach übernommen.',
  werkzeuge: ['Typeform oder Tally', 'Calendly oder cal.com', 'n8n', 'Claude oder OpenAI-Modell', 'Gmail oder Outlook'],
  nutzen: 'mittel',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 4,
    minutesBefore: 20,
    minutesAfter: 7,
    hourlyRate: 100,
    annahme:
      'Ein Coach mit vier neuen Klienten pro Woche. Verschicken, Nachhaken und Lesen kosten heute rund 20 Minuten pro Klient, danach bleiben etwa 7 Minuten zum Lesen. 100 Euro pro Stunde sind ein angenommener Wert.',
  },
  grenzen: [
    'In Fragebögen stehen oft sehr persönliche Dinge, manchmal auch Angaben zur Gesundheit. Fragen Sie nur ab, was Sie wirklich brauchen. Gesundheitsangaben gehören zu den besonders geschützten Daten und brauchen in der Regel eine ausdrückliche Einwilligung.',
    'Eine KI-Zusammenfassung kann Zwischentöne überlesen oder einen Satz falsch gewichten. Deshalb hängen die Originalantworten immer darunter.',
    'Wer den Fragebogen nicht ausfüllen will, wird nicht dreimal erinnert. Eine Erinnerung reicht, danach klären Sie es im Gespräch.',
  ],
  faqs: [
    {
      q: 'Liest die KI vertrauliche Angaben meiner Klienten?',
      a: 'Ja, das ist ihre Aufgabe. Darum läuft sie über eine Schnittstelle mit Vertrag zur Auftragsverarbeitung, ohne Training auf Ihren Daten. Wenn Ihnen das bei bestimmten Fragen zu weit geht, lassen wir diese Antworten aus der Zusammenfassung heraus. Dann stehen sie nur im Original.',
    },
    {
      q: 'Typeform oder Tally?',
      a: 'Beide funktionieren. Tally ist schlicht und für einfache Fragebögen günstig, Typeform wirkt aufwendiger und hat mehr Gestaltungsmöglichkeiten. Für die Automatisierung ist beides gleich gut anzubinden.',
    },
    {
      q: 'Kann ich meinen bestehenden Fragebogen behalten?',
      a: 'Meistens ja. Wir übertragen ihn in ein Online-Formular und schauen dabei, welche Fragen Sie im Gespräch ohnehin nie brauchen. Kürzere Fragebögen kommen öfter ausgefüllt zurück.',
    },
  ],
  related: [
    { label: 'Erstgespräch online buchen lassen', href: '/ablaeufe/erstgespraech-selbst-buchen' },
    { label: 'Unterlagen nach der Sitzung', href: '/ablaeufe/unterlagen-nach-sitzung' },
    { label: 'ChatGPT im Betrieb', href: '/wissen/chatgpt-im-betrieb' },
  ],
};
