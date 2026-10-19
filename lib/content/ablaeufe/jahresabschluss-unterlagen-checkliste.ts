import type { Ablauf } from './types';

export const jahresabschlussUnterlagenCheckliste: Ablauf = {
  id: 2007,
  slug: 'jahresabschluss-unterlagen-checkliste',
  branche: 'steuerberater',
  themen: ['dokumente', 'nachfassen', 'kommunikation'],
  title: 'Unterlagen für den Jahresabschluss',
  lead: 'Jahresabschluss-Unterlagen per Checkliste anfordern: Jeder Mandant bekommt seine eigene Liste, sieht den Stand und wird an Fehlendes erinnert.',
  datePublished: '2026-10-19',
  problem: [
    'Januar, Februar. Die Kanzlei verschickt an jeden bilanzierenden Mandanten die Liste für den Jahresabschluss: Inventur, Saldenbestätigungen, Darlehensverträge, Anlagenzugänge, offene Posten zum Stichtag. Meist ist es dieselbe Word-Vorlage für alle, ergänzt um ein paar Zeilen von Hand.',
    'Zurück kommen die Unterlagen über Wochen, verteilt auf E-Mails, Uploads und Post. Wer wissen will, was beim Mandanten Müller noch fehlt, muss die Akte durchgehen. Die Fachkraft, die den Abschluss macht, merkt oft erst beim Arbeiten, dass die Inventurliste fehlt. Dann liegt die Akte wieder.',
    'Das Problem ist selten die Liste selbst. Es ist der Überblick darüber, was davon schon da ist, und wer sich darum kümmert, dass der Rest kommt.',
  ],
  heute: [
    'Word-Vorlage kopieren und für den Mandanten anpassen.',
    'Liste per E-Mail oder Post verschicken.',
    'Eingehende Unterlagen in der Akte sammeln.',
    'Beim Abschluss feststellen, was fehlt, und nachfordern.',
    'Den Stand im Kopf oder in einer Tabelle führen.',
  ],
  danach: [
    'Aus der Vorjahresliste und dem Mandantentyp entsteht eine eigene Checkliste je Mandant.',
    'Ihr Team ergänzt Besonderheiten, etwa ein neues Darlehen, und gibt die Liste frei.',
    'Der Mandant bekommt einen Link: Er sieht seine Punkte und lädt zu jedem Punkt die Unterlagen hoch.',
    'Jeder Upload hakt den Punkt ab, der Mandant sieht, was noch offen ist.',
    'Alle zwei Wochen geht eine Erinnerung an offene Punkte raus, bis zum vereinbarten Termin.',
    'Ihr Team sieht in einer Übersicht, welche Akten vollständig sind und mit welcher es anfangen kann.',
  ],
  mensch:
    'Ihr Team entscheidet, was auf die Liste gehört. Es prüft, ob eine hochgeladene Unterlage wirklich die richtige ist, denn der Ablauf weiß nur, dass zu einem Punkt etwas kam. Und es bestimmt die Reihenfolge, in der die Abschlüsse bearbeitet werden. Die Übersicht hilft dabei, die Entscheidung trifft ein Mensch.',
  werkzeuge: ['n8n', 'Upload-Seite oder Formular mit Servern in der EU', 'Outlook oder Gmail', 'Tabelle oder Ihr DMS für die Übersicht'],
  nutzen: 'gross',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 3,
    minutesBefore: 75,
    minutesAfter: 20,
    hourlyRate: 85,
    annahme:
      'Eine Kanzlei mit etwa 140 Abschlüssen im Jahr, auf die Arbeitswochen verteilt rund drei pro Woche. Gerechnet sind Liste anpassen, Unterlagen zusammensuchen und nachfordern. Danach bleiben Freigabe und Prüfung. Typische Werte, kein Kundenfall.',
  },
  grenzen: [
    'Der Ablauf erkennt, dass zu einem Punkt eine Datei kam, nicht ob es die richtige ist. Das prüft Ihr Team.',
    'Mandanten, die alles als Papierstapel bringen, passen nicht in dieses Schema. Ihr Team kann die Punkte dann selbst abhaken, die Übersicht stimmt trotzdem.',
    'Die Checkliste lebt von der Vorjahresliste. Im ersten Jahr steckt etwas mehr Arbeit darin.',
  ],
  faqs: [
    {
      q: 'Gilt das auch für Einkommensteuer-Mandanten?',
      a: 'Ja, mit anderer Liste. Bei Privatmandanten sind es eher Lohnsteuerbescheinigung, Spendenquittungen und Nebenkostenabrechnung. Der Ablauf ist derselbe: eigene Liste, Upload je Punkt, Erinnerung an Offenes.',
    },
    {
      q: 'Müssen Mandanten sich dafür irgendwo registrieren?',
      a: 'Nicht unbedingt. Für viele reicht ein persönlicher Link mit begrenzter Gültigkeit, über den man nur hochladen, aber nichts herunterladen kann. Wer mehr Schutz will, bekommt einen Zugang mit Passwort. Das entscheiden wir nach Ihrer Mandantenstruktur.',
    },
    {
      q: 'Was ist mit DATEV Unternehmen online?',
      a: 'Wer seine Belege dort schon hochlädt, kann das weiter tun, und die Checkliste kann darauf verweisen. Ob der Ablauf solche Uploads selbst erkennt, hängt von den Schnittstellen ab, die Ihrer Kanzlei offenstehen. Das prüfe ich vor dem Start.',
    },
  ],
  related: [
    { label: 'Ablauf: Fristen-Erinnerungen an Mandanten', href: '/ablaeufe/fristen-erinnerungen-mandanten' },
    { label: 'Ablauf: Mandanten-Onboarding per Formular', href: '/ablaeufe/mandanten-onboarding-formular' },
    { label: 'Belege einsammeln, ohne zum Bittsteller zu werden', href: '/wissen/belege-einsammeln-ohne-nachlaufen' },
  ],
};
