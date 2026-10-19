import type { Ablauf } from './types';

export const portalAnfragenSofortBeantworten: Ablauf = {
  id: 1008,
  slug: 'portal-anfragen-sofort-beantworten',
  branche: 'immobilienmakler',
  themen: ['anfragen', 'kommunikation'],
  title: 'Portal-Anfragen sofort beantworten',
  lead: 'Anfragen von ImmoScout24 und Immowelt bekommen in wenigen Minuten eine Antwort mit Exposé und nächstem Schritt. Der Kontakt landet in Ihrer Maklersoftware.',
  datePublished: '2026-10-19',
  problem: [
    'Ein neues Objekt geht Freitagmittag online. Bis Montag früh liegen 40 Anfragen im Postfach. Ein Teil will nur das Exposé, ein Teil fragt nach dem Preis, der schon in der Anzeige steht, und drei möchten am liebsten am Samstag besichtigen.',
    'Wer am Montag um elf mit dem Antworten durch ist, hat einen Teil der schnellen Interessenten womöglich schon verloren. Die haben am Wochenende auch bei anderen Objekten angefragt, und irgendwo kam die Antwort früher.',
    'Die Arbeit selbst ist dabei fast immer gleich: Anfrage öffnen, Kontakt in die Maklersoftware übertragen, Antwort schreiben, Exposé anhängen. In meinem Rechenbeispiel für Makler sind das 9 Minuten pro Anfrage. Keine davon ist schwer, aber bei 25 Anfragen pro Woche kommen knapp vier Stunden zusammen, die fast nur aus Kopieren bestehen.',
  ],
  heute: [
    'Das Portal schickt die Anfrage als E-Mail ins Postfach.',
    'Anfrage öffnen, Name, Telefon und Objekt heraussuchen.',
    'Kontakt in der Maklersoftware anlegen oder suchen.',
    'Antwort schreiben, Exposé anhängen, abschicken.',
    'Am Wochenende bleibt alles bis Montag liegen.',
  ],
  danach: [
    'Die Portal-Mail wird sofort ausgelesen, zu jeder Uhrzeit.',
    'Der Kontakt wird in Ihrer Maklersoftware angelegt und dem Objekt zugeordnet.',
    'Der Interessent bekommt Ihre Antwort mit Exposé-Link und Ihren Pflichthinweisen.',
    'Im selben Schreiben steht der nächste Schritt, etwa ein Link zu wenigen Vorab-Fragen.',
    'Eigene Fragen aus dem Freitextfeld landen auf Ihrer Liste zum Beantworten.',
  ],
  mensch:
    'Sie schreiben die Antworttexte einmal, je Objektart, in Ihrem Ton. Danach beantworten Sie nur noch die echten Fragen: ob ein Hund erlaubt ist, ob der Keller trocken ist, ob der Eigentümer über den Preis spricht. Telefonate mit ernsthaften Interessenten führen Sie wie bisher. Neue Objekte bekommen ihren Text, bevor die Anzeige online geht.',
  ki: 'Nur für das Freitextfeld. Interessenten schreiben in die Anfrage oft etwas Eigenes: „Ist die Wohnung auch ab Mai frei?“ oder „Wir haben zwei Katzen.“ Ein Sprachmodell erkennt solche Fragen und setzt sie mit dem Kontakt auf Ihre Liste. Antworten darauf schreibt es nicht selbst, weil es das Objekt nicht kennt und im Zweifel lieber rät als schweigt. Das Auslesen der Portal-Mail braucht keine KI, diese Mails sind immer gleich aufgebaut.',
  werkzeuge: ['n8n', 'ImmoScout24 und Immowelt (Anfrage-Mails)', 'onOffice, FLOWFACT oder Propstack (je nach Schnittstelle)', 'Gmail oder Outlook', 'Claude oder OpenAI-Modell'],
  nutzen: 'gross',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 25,
    minutesBefore: 9,
    minutesAfter: 1,
    hourlyRate: 90,
    annahme:
      '25 Portal-Anfragen pro Woche wie in meinem Makler-Beispiel. 2 Minuten Lesen, 3 Minuten Übertragen und 4 Minuten Antworten, danach 1 Minute für einen Blick auf die Freitext-Fragen.',
  },
  grenzen: [
    'Viele Maklerprogramme lesen Portal-Anfragen schon selbst ein und verschicken Exposés. Prüfen Sie, was Ihre Software kann, bevor Sie etwas dazubauen. Ich schaue mir das im Erstgespräch mit Ihnen an.',
    'Ändert ein Portal den Aufbau seiner Anfrage-Mails, muss das Auslesen angepasst werden. Das gehört zur Betreuung.',
    'Was rechtlich in die erste Antwort gehört, etwa Provisionshinweis und Widerrufsbelehrung, legen Sie oder Ihr Anwalt fest. Der Ablauf übernimmt Ihre Texte unverändert.',
  ],
  faqs: [
    {
      q: 'Wie schnell sollte ein Makler auf eine Portal-Anfrage antworten?',
      a: 'So schnell wie möglich, am besten in wenigen Minuten. Interessenten fragen meist bei mehreren Objekten gleichzeitig an. Wer zuerst eine brauchbare Antwort schickt, hat ihre Aufmerksamkeit.',
    },
    {
      q: 'Kann ich ImmoScout24-Anfragen automatisch in onOffice, FLOWFACT oder Propstack übernehmen?',
      a: 'Oft kann Ihre Maklersoftware das schon selbst. Wo nicht, liest n8n die Anfrage-Mail aus und legt den Kontakt über die Schnittstelle der Software an. Was genau geht, hängt von Programm und Tarif ab.',
    },
    {
      q: 'Was passiert mit Anfragen außerhalb der Geschäftszeiten?',
      a: 'Die werden genauso beantwortet, auch sonntags um 22 Uhr. Rückrufe planen Sie dann, wann es Ihnen passt.',
    },
  ],
  related: [
    { label: 'Interessenten vorqualifizieren', href: '/ablaeufe/interessenten-vorqualifizieren' },
    { label: 'Besichtigungstermine online buchen', href: '/ablaeufe/besichtigungstermine-selbst-buchen' },
    { label: 'Portal-Anfragen schnell beantworten', href: '/wissen/portal-anfragen-schnell-beantworten' },
  ],
};
