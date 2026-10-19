import type { Ablauf } from './types';

export const eMailPostfachSortieren: Ablauf = {
  id: 3009,
  slug: 'e-mail-postfach-sortieren',
  branche: 'alle',
  themen: ['kommunikation'],
  title: 'E-Mail-Postfach sortieren mit KI',
  lead: 'Eine KI sortiert eingehende E-Mails nach Anfrage, Rechnung, Termin und Werbung und schreibt Antwortentwürfe. Verschickt wird erst nach Ihrem Klick.',
  datePublished: '2026-10-19',
  problem: [
    'Montagmorgen, 7:30 Uhr. 63 ungelesene E-Mails seit Freitagnachmittag. Dazwischen eine Kundenanfrage, eine Rechnung, zwei Terminverschiebungen, eine Reklamation und viel Werbung. Sie lesen von oben nach unten, beantworten das Einfache sofort und markieren den Rest. Um neun haben Sie noch nichts von dem getan, was Sie heute eigentlich tun wollten.',
    'Das Problem ist selten eine einzelne E-Mail. Es ist das ständige Umschalten. Jede Nachricht verlangt eine kleine Entscheidung: wichtig oder nicht, jetzt oder später, ich oder jemand anderes. Hundertmal am Tag. Und genau die eine dringende Anfrage rutscht nach unten, weil darüber drei Newsletter kamen.',
    'In Betrieben mit gemeinsamer Info-Adresse kommt dazu, dass niemand genau weiß, wer was beantwortet hat. Zwei Leute antworten auf dieselbe Anfrage, oder keiner.',
  ],
  heute: [
    'Sie lesen jede E-Mail, um zu entscheiden, worum es geht.',
    'Rechnungen leiten Sie an die Buchhaltung weiter, Anfragen an Kollegen.',
    'Standardfragen beantworten Sie jedes Mal neu.',
    'Dringendes erkennen Sie erst beim Lesen.',
    'Im gemeinsamen Postfach ist unklar, wer zuständig ist.',
  ],
  danach: [
    'Jede neue E-Mail bekommt automatisch ein Label: Anfrage, Kunde, Rechnung, Termin, Werbung.',
    'Rechnungen gehen direkt in den Rechnungseingang, Werbung in einen eigenen Ordner.',
    'Für Anfragen und Standardfragen liegt ein Antwortentwurf im Postfach bereit.',
    'Dringendes, etwa eine Reklamation, wird markiert und dem Zuständigen zugewiesen.',
    'Sie lesen, ändern bei Bedarf und klicken auf Senden.',
  ],
  mensch:
    'Sie entscheiden, was rausgeht. Kein Entwurf wird automatisch verschickt, auch nicht bei einfachen Fragen. Die Kategorien legen Sie fest, und wenn die KI eine E-Mail falsch einsortiert, schieben Sie sie um. Heikle Nachrichten, etwa eine Kündigung oder einen Streit, beantworten Sie ohnehin selbst.',
  ki:
    'Die KI liest Betreff und Text und ordnet die E-Mail einer Ihrer Kategorien zu. Für Anfragen schreibt sie einen Entwurf auf Basis Ihrer bisherigen Antworten und einer kurzen Liste mit Fakten, etwa Öffnungszeiten, Preise und Abläufe. Ich setze dafür Claude oder ein OpenAI-Modell ein, über Schnittstellen ohne Training auf Ihren Daten. Ein festes Regelwerk allein schafft das nicht, weil Kunden dasselbe Anliegen auf hundert Arten formulieren.',
  werkzeuge: ['Gmail oder Outlook (Microsoft 365)', 'n8n', 'Claude oder OpenAI-Modell'],
  nutzen: 'gross',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 150,
    minutesBefore: 2,
    minutesAfter: 1,
    hourlyRate: 60,
    annahme:
      'Ein Postfach mit 150 relevanten E-Mails pro Woche, Werbung nicht mitgezählt. Lesen, einordnen und beantworten kosten heute im Schnitt 2 Minuten, mit Sortierung und Entwurf etwa eine. 60 Euro pro Stunde sind ein angenommener Wert für eine Arbeitsstunde im Betrieb.',
  },
  grenzen: [
    'Die KI sortiert gut, aber nicht fehlerfrei. In den ersten Wochen schauen Sie auch in die Ordner, die Sie sonst ignorieren würden.',
    'Entwürfe sind so gut wie die Informationen, die die KI bekommt. Fehlen Preise oder Regeln, schreibt sie vage oder falsch. Dafür gibt es die Freigabe.',
    'Postfächer mit Mandanten-, Patienten- oder Personaldaten brauchen besondere Sorgfalt. Ob und wie die KI dort mitliest, klären wir vorher, oft mit Ihrem Datenschutzbeauftragten.',
  ],
  faqs: [
    {
      q: 'Liest die KI alle meine E-Mails?',
      a: 'Sie liest die E-Mails, die sie sortieren soll. Bestimmte Absender oder Ordner, etwa Ihre Steuerkanzlei oder private Post, schließen wir aus. Die Verarbeitung läuft über einen Anbieter mit Vertrag zur Auftragsverarbeitung, ohne Training auf Ihren Daten.',
    },
    {
      q: 'Kann ich nicht einfach Regeln in Outlook anlegen?',
      a: 'Für feste Absender ja, und das sollten Sie auch. Regeln scheitern an allem, was nicht am Absender oder einem Stichwort hängt. Eine Anfrage von einem neuen Kunden sieht für Outlook aus wie jede andere E-Mail. Ich fange oft mit Regeln an und setze KI nur dort ein, wo Regeln nicht reichen.',
    },
    {
      q: 'Warum werden die Antworten nicht automatisch verschickt?',
      a: 'Weil ein falscher Satz an einen Kunden mehr kostet als die Minute, die Sie mit dem Lesen sparen. Wenn sich nach Monaten zeigt, dass eine bestimmte Antwort immer passt, etwa eine Eingangsbestätigung, kann man darüber reden.',
    },
  ],
  related: [
    { label: 'Rechnungseingang automatisieren', href: '/ablaeufe/rechnungseingang-automatisch' },
    { label: 'Kontaktformular direkt ins CRM', href: '/ablaeufe/kontaktformular-ins-crm' },
    { label: 'ChatGPT im Betrieb', href: '/wissen/chatgpt-im-betrieb' },
  ],
};
