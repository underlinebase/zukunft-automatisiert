import type { Ablauf } from './types';

export const anfragenZentralErfassenHandwerk: Ablauf = {
  id: 1001,
  slug: 'anfragen-zentral-erfassen-handwerk',
  branche: 'handwerk',
  themen: ['anfragen', 'kommunikation'],
  title: 'Anfragen an einer Stelle sammeln',
  seoTitle: 'Kundenanfragen im Handwerk an einer Stelle sammeln',
  lead: 'Mail, Formular, Telefonnotiz, WhatsApp: So landen alle Kundenanfragen im Handwerksbetrieb an einer Stelle, vollständig und ohne Abtippen.',
  datePublished: '2026-10-19',
  problem: [
    'Dienstag, kurz nach sieben. Der Chef steht im Lager, das Handy klingelt, eine Kundin will einen Termin für die tropfende Therme. Die Nummer notiert er auf einem Lieferschein. Im Postfach liegen derweil zwei Anfragen, eine davon über das Kontaktformular, und auf dem Firmenhandy wartet eine WhatsApp mit drei Fotos von einem feuchten Kellerfenster.',
    'Jeder dieser Wege funktioniert für sich. Schwierig wird es am Abend, wenn alles zusammengesucht werden muss. Der Lieferschein liegt im Auto, die WhatsApp ist auf dem Handy des Gesellen gelandet, und die Formular-Anfrage hat niemand bemerkt, weil sie im Spam-Ordner lag. Was nicht auf einer Liste steht, wird nicht bearbeitet. Und wer drei Tage auf eine Antwort wartet, fragt beim nächsten Betrieb.',
    'In Minuten gerechnet wirkt das harmlos: zusammensuchen, in die Handwerkersoftware abtippen, nachfragen, weil die Adresse fehlt. In meinem Rechenbeispiel sind das 11 Minuten pro Anfrage. Teurer sind die Anfragen, die ganz verloren gehen. Die tauchen in keiner Rechnung auf.',
  ],
  heute: [
    'Anfragen kommen per E-Mail, Kontaktformular, Telefon und WhatsApp herein.',
    'Telefonate landen als Notiz auf einem Zettel oder bleiben im Kopf.',
    'Abends sucht jemand alle Kanäle nach neuen Anfragen ab.',
    'Name, Adresse und Anliegen werden von Hand in die Handwerkersoftware getippt.',
    'Fehlt die Telefonnummer, beginnt das Nachfragen per Mail.',
  ],
  danach: [
    'Mails und Formulare werden abgeholt, sobald sie eingehen.',
    'Telefonnotizen kommen per Kurzformular oder Sprachnachricht vom Handy.',
    'WhatsApp-Nachrichten an die Firmennummer landen samt Fotos in derselben Liste.',
    'Jede Anfrage bekommt feste Felder für Name, Adresse, Anliegen und Eile.',
    'Fehlt etwas Wichtiges, geht eine kurze Rückfrage an den Kunden.',
    'Morgens sehen Sie alle neuen Anfragen auf einen Blick, die eiligen oben.',
  ],
  mensch:
    'Sie entscheiden, welche Anfragen Sie annehmen, und rufen bei Notfällen weiter selbst zurück. Einmal am Tag sehen Sie die Liste durch. Was als neuer Kunde in Ihrer Software angelegt wird, bestätigen Sie vorher. Den Text für die Rückfrage bei fehlenden Angaben schreiben wir einmal gemeinsam, danach geht er so raus, wie Sie ihn freigegeben haben.',
  ki: 'Beim Lesen. Kunden füllen keine Felder aus, sie schreiben so: „Hallo, bei uns läuft seit gestern Wasser unter der Badewanne raus, Lindenstraße 4, bitte schnell melden.“ Ein Sprachmodell wie Claude holt daraus Adresse, Anliegen und Eile heraus und trägt sie in die festen Felder ein. Sprachnachrichten werden vorher in Text umgewandelt. Ist sich das Modell unsicher, steht die Anfrage mit einem Hinweis auf der Liste, und Sie sehen den Originaltext. Abholen, Sortieren und Erinnern laufen mit festen Regeln.',
  werkzeuge: ['n8n', 'Gmail oder Outlook', 'Formular Ihrer Website', 'WhatsApp Business Plattform', 'Claude oder OpenAI-Modell', 'Hero oder Craftnote (je nach Schnittstelle)'],
  nutzen: 'mittel',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 10,
    minutesBefore: 11,
    minutesAfter: 2,
    hourlyRate: 70,
    annahme:
      '10 Anfragen pro Woche wie im Beispiel auf meiner Startseite. 5 Minuten Zusammensuchen und 6 Minuten Abtippen pro Anfrage, danach 2 Minuten zum Durchsehen und Bestätigen.',
  },
  grenzen: [
    'WhatsApp lässt sich nur über die offizielle Business-Schnittstelle von Meta anbinden, nicht über die normale App auf einem Handy. Ob Ihre bisherige Firmennummer dafür taugt, prüfe ich vorher.',
    'Ob neue Kunden direkt in Ihrer Handwerkersoftware angelegt werden, hängt von deren Schnittstelle ab. Ohne Schnittstelle führe ich die Liste in einer Tabelle, und die Übernahme bleibt ein kurzer Handgriff.',
    'Anrufe nimmt der Ablauf nicht an. Er braucht Ihre Notiz oder Sprachnachricht.',
    'Werbung und Spam landen anfangs mit auf der Liste. Die Filter stellen wir in den ersten Wochen mit Ihren echten Anfragen nach.',
  ],
  faqs: [
    {
      q: 'Wie sammle ich Kundenanfragen aus WhatsApp, E-Mail und Telefon an einem Ort?',
      a: 'Indem jeder Eingang automatisch in dieselbe Liste schreibt. E-Mail und Formular sind einfach. WhatsApp braucht die Business-Schnittstelle, Telefonate eine kurze Notiz vom Handy. Gebaut wird das bei mir meist mit n8n, die Liste liegt in Ihrer Handwerkersoftware oder in einer Tabelle.',
    },
    {
      q: 'Brauche ich dafür eine neue Software?',
      a: 'Meistens nicht. Ich verbinde, was Sie schon haben: Postfach, Website-Formular, Handwerkersoftware. Neu ist nur n8n im Hintergrund, auf einem Server in der EU.',
    },
    {
      q: 'Was passiert mit den Fotos, die Kunden per WhatsApp schicken?',
      a: 'Sie hängen an der Anfrage und wandern mit, wenn daraus ein Auftrag wird. Wer möchte, schließt den Ablauf für Baustellenfotos direkt daran an.',
    },
  ],
  related: [
    { label: 'Angebot aus dem Aufmaß als Entwurf', href: '/ablaeufe/angebot-aus-aufmass-entwurf' },
    { label: 'Rechenbeispiel: Angebote im Handwerk', href: '/wissen/rechenbeispiel-handwerk-angebote' },
    { label: 'Datenschutz bei Automatisierung', href: '/wissen/datenschutz-bei-automatisierung' },
  ],
};
