import type { Ablauf } from './types';

export const besichtigungstermineSelbstBuchen: Ablauf = {
  id: 1010,
  slug: 'besichtigungstermine-selbst-buchen',
  branche: 'immobilienmakler',
  themen: ['termine'],
  title: 'Besichtigungstermine online buchen',
  lead: 'Interessenten buchen Besichtigungstermine selbst aus Ihren freien Zeiten. Bestätigung und Erinnerung gehen automatisch raus, ohne Telefon-Pingpong.',
  datePublished: '2026-10-19',
  problem: [
    '„Passt Ihnen Donnerstag um 17 Uhr?“ „Leider nein, ginge Freitag?“ „Freitag bin ich beim Notar, vielleicht Samstag um zehn?“ Vier Mails später steht ein Termin. Am Samstag kommt niemand.',
    'Termine abstimmen frisst keine großen Blöcke, es zerfasert den Tag. Jede Antwort löst eine neue Rückfrage aus, und meistens passiert das zwischen zwei anderen Terminen, im Auto oder auf dem Parkplatz vor dem nächsten Objekt.',
    'Dabei stehen Ihre freien Zeiten längst im Kalender. Der Interessent müsste sie nur sehen und sich eintragen können. Genau das macht dieser Ablauf, und er erinnert am Vortag, damit der Samstag nicht wieder umsonst ist.',
  ],
  heute: [
    'Der Interessent fragt nach einem Termin, Sie schlagen zwei, drei Zeiten vor.',
    'Es folgen Rückfragen per Mail oder Telefon, bis eine Zeit passt.',
    'Der Termin wird von Hand in den Kalender eingetragen.',
    'Am Vortag erinnert niemand, und manche erscheinen nicht.',
  ],
  danach: [
    'Sie legen je Objekt Besichtigungsfenster in Ihrem Kalender fest.',
    'Passende Interessenten bekommen einen Link und wählen selbst eine freie Zeit.',
    'Die Bestätigung mit Adresse, Ansprechpartner und Hinweisen kommt sofort.',
    'Am Vortag geht eine Erinnerung raus, mit Link zum Absagen oder Verschieben.',
    'Abgesagte Plätze werden wieder frei und können neu gebucht werden.',
    'Der Termin steht am Kontakt in Ihrer Maklersoftware.',
  ],
  mensch:
    'Sie entscheiden, welche Zeiten frei sind und wer den Buchungslink bekommt. Ob Einzeltermine oder eine Sammelbesichtigung mit festen Plätzen, legen Sie je Objekt fest. Bei vermieteten Objekten stimmen Sie die Zeiten vorher mit den Mietern ab. Das kann Ihnen kein Kalender abnehmen. Fällt ein Termin kurzfristig aus, etwa weil der Mieter krank ist, ändern Sie ihn im Kalender, und wer gebucht hat, bekommt Bescheid.',
  werkzeuge: ['n8n', 'Google Kalender oder Outlook-Kalender', 'Terminbuchung aus Google Kalender oder Microsoft Bookings', 'onOffice, FLOWFACT oder Propstack (je nach Schnittstelle)'],
  nutzen: 'gross',
  aufwand: 'klein',
  beispiel: {
    perWeek: 12,
    minutesBefore: 8,
    minutesAfter: 1,
    hourlyRate: 90,
    annahme:
      '12 Besichtigungen pro Woche. Bisher 6 Minuten Abstimmen und 2 Minuten Erinnern pro Termin wie in meinem Makler-Beispiel, danach 1 Minute für einen Blick auf die gebuchten Termine.',
  },
  grenzen: [
    'Manche Maklerprogramme bringen eine eigene Terminbuchung mit. Dann richte ich die ein, statt etwas daneben zu bauen.',
    'Wer bucht, braucht die Adresse. Wollen Sie die Adresse erst nach Rückfrage herausgeben, bleibt eine Freigabe durch Sie im Ablauf.',
    'Buchungslinks lassen sich weiterleiten. Wer nur vorqualifizierte Interessenten möchte, verschickt je Person einen eigenen Link.',
    'Ohne gepflegten Kalender geht es nicht. Private Termine, die nur im Kopf stehen, sieht der Ablauf nicht.',
  ],
  faqs: [
    {
      q: 'Wie können Interessenten Besichtigungstermine online buchen?',
      a: 'Über eine Buchungsseite, die Ihre freien Zeiten aus dem Kalender zeigt. Google Kalender und Microsoft Bookings bringen so etwas mit. Der Ablauf verschickt den Link an passende Interessenten, trägt die Buchung am Kontakt ein und erinnert am Vortag.',
    },
    {
      q: 'Wie verhindere ich, dass Interessenten nicht zur Besichtigung erscheinen?',
      a: 'Ganz verhindern lässt es sich nicht. Eine Erinnerung am Vortag mit einfachem Absage-Link hilft, weil Absagen dann ein Klick ist statt eines unangenehmen Anrufs. Den freien Platz kann jemand anderes buchen.',
    },
    {
      q: 'Geht das auch für Sammelbesichtigungen?',
      a: 'Ja. Statt Einzelterminen bieten Sie ein Zeitfenster mit einer festen Zahl an Plätzen an. Ist es voll, verschwindet es aus der Auswahl.',
    },
    {
      q: 'Sehen Interessenten meinen ganzen Kalender?',
      a: 'Nein. Sie sehen nur die Zeitfenster, die Sie für dieses Objekt freigeben, und davon nur die, die noch frei sind. Private Termine und andere Objekte bleiben unsichtbar.',
    },
  ],
  related: [
    { label: 'Interessenten vorqualifizieren', href: '/ablaeufe/interessenten-vorqualifizieren' },
    { label: 'Nachfassen nach der Besichtigung', href: '/ablaeufe/nachfassen-nach-besichtigung' },
    { label: 'Portal-Anfragen schnell beantworten', href: '/wissen/portal-anfragen-schnell-beantworten' },
  ],
};
