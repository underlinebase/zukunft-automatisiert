import type { Ablauf } from './types';

export const kontaktformularInsCrm: Ablauf = {
  id: 3010,
  slug: 'kontaktformular-ins-crm',
  branche: 'alle',
  themen: ['anfragen'],
  title: 'Kontaktformular direkt ins CRM',
  lead: 'Anfragen aus dem Kontaktformular landen sofort im CRM, ohne Abtippen und ohne Dubletten. Der Interessent bekommt eine Bestätigung, Sie eine Aufgabe.',
  datePublished: '2026-10-19',
  problem: [
    'Das Kontaktformular auf Ihrer Website schickt eine E-Mail an info@. Darin stehen Name, Telefonnummer und ein Satz zum Anliegen, manchmal in einer Tabelle, manchmal als Textwüste. Jemand kopiert die Angaben in Ihr CRM oder in die Kundenliste. Wenn Zeit ist. Freitags kommen fünf Anfragen, montags sind zwei davon noch nicht erfasst.',
    'Beim Abtippen passieren Fehler. Eine Ziffer in der Telefonnummer vertauscht, eine E-Mail-Adresse falsch geschrieben. Oder den Kontakt gibt es schon, weil derselbe Kunde vor einem Jahr angefragt hat, und jetzt steht er zweimal drin. Beim Nachfassen ruft dann jemand an, der die alte Geschichte nicht kennt.',
    'Und der Interessent? Er hat auf Senden geklickt und hört erst mal nichts. Kommt die Antwort nach zwei Tagen, hat er womöglich längst woanders angefragt.',
  ],
  heute: [
    'Das Formular schickt eine E-Mail an ein Sammelpostfach.',
    'Jemand kopiert Name, Kontaktdaten und Anliegen von Hand ins CRM.',
    'Ob der Kontakt schon existiert, prüft niemand zuverlässig.',
    'Der Interessent wartet ohne Bestätigung auf eine Antwort.',
  ],
  danach: [
    'Die Formulardaten gehen direkt an n8n, nicht erst ins Postfach.',
    'Gibt es den Kontakt schon, wird die neue Anfrage dort angehängt. Sonst entsteht ein neuer.',
    'Der Interessent bekommt sofort eine Bestätigung mit dem, was als Nächstes passiert.',
    'Im CRM entsteht eine Aufgabe zum Rückruf, mit Frist und zuständiger Person.',
    'Bleibt die Aufgabe einen Tag liegen, kommt eine Erinnerung.',
  ],
  mensch:
    'Sie oder Ihr Team melden sich beim Interessenten, per Telefon oder E-Mail. Das bleibt Handarbeit, und das ist gut so. Sie legen fest, wer welche Anfragen bekommt und wie schnell zurückgerufen wird. Die Bestätigungs-E-Mail schreiben wir gemeinsam, damit sie nach Ihrem Betrieb klingt. Und wenn eine Anfrage offensichtlich nicht passt, etwa ein Auftrag, den Sie gar nicht anbieten, sagen Sie das freundlich und schnell. Auch das ist guter Service.',
  werkzeuge: ['Formular Ihrer Website', 'n8n', 'HubSpot, Pipedrive oder eine Kundentabelle', 'Gmail oder Outlook'],
  nutzen: 'mittel',
  aufwand: 'klein',
  beispiel: {
    perWeek: 15,
    minutesBefore: 5,
    minutesAfter: 1,
    hourlyRate: 60,
    annahme:
      'Ein Betrieb mit 15 Formularanfragen pro Woche. Erfassen, Dubletten prüfen und eine erste Antwort schreiben kosten heute rund 5 Minuten pro Anfrage. 60 Euro pro Stunde sind ein angenommener Wert für eine Arbeitsstunde im Betrieb.',
  },
  grenzen: [
    'Das Formular muss die Daten weitergeben können. Bei den gängigen Website-Systemen geht das. Bei sehr alten Seiten bauen wir manchmal ein neues Formular.',
    'Spam kommt auch übers Formular. Ein einfacher Spamschutz gehört dazu, sonst landen Werbemails als Kontakte im CRM.',
    'Ein CRM, das niemand pflegt, wird durch die Automatisierung nicht besser. Wenn Ihr Team bisher mit einer Tabelle arbeitet, ist eine gut geführte Tabelle oft die ehrlichere Lösung.',
  ],
  faqs: [
    {
      q: 'Brauche ich dafür ein teures CRM?',
      a: 'Nein. Für viele kleine Betriebe reicht eine gemeinsame Tabelle in Google oder Microsoft 365. HubSpot hat eine kostenlose Grundversion, Pipedrive eignet sich für Betriebe mit vielen Angeboten. Ich empfehle das Werkzeug, das Ihr Team auch wirklich aufmacht.',
    },
    {
      q: 'Wird hier KI eingesetzt?',
      a: 'In der Grundversion nicht. Die Daten aus einem Formular stehen in festen Feldern, das ist reine Regelarbeit. Wenn Anfragen sehr unterschiedlich sind, kann eine KI das Anliegen in eine Kategorie einordnen. Das lohnt sich erst bei vielen Anfragen.',
    },
    {
      q: 'Was ist mit Anfragen per E-Mail oder Telefon?',
      a: 'Die laufen über eigene Wege. Für E-Mails gibt es die Postfach-Sortierung, für Anrufe die Telefonnotiz. Beides kann in dasselbe CRM schreiben.',
    },
  ],
  related: [
    { label: 'E-Mail-Postfach sortieren mit KI', href: '/ablaeufe/e-mail-postfach-sortieren' },
    { label: 'Telefonnotiz wird zur Aufgabe', href: '/ablaeufe/telefonnotiz-zur-aufgabe' },
    { label: 'Excel ist nicht das Problem', href: '/wissen/excel-ist-nicht-das-problem' },
  ],
};
