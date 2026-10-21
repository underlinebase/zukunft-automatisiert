import type { Ablauf } from './types';

export const monatsreportWerbekonten: Ablauf = {
  id: 2014,
  slug: 'monatsreport-werbekonten',
  branche: 'agenturen',
  themen: ['reporting'],
  title: 'Monatsreport aus den Werbekonten',
  lead: 'Monatsreport für Kunden automatisch: Zahlen aus Google Ads, Meta und GA4 über die offiziellen Schnittstellen, Kommentar als Entwurf, Freigabe durch Sie.',
  datePublished: '2026-10-19',
  problem: [
    'Anfang des Monats, Reporting-Tage. Für jeden Kunden loggt sich jemand in Google Ads ein, dann in den Werbeanzeigenmanager von Meta, dann in Google Analytics. Zahlen exportieren, in die Berichtsvorlage kopieren, Diagramme anpassen, Vergleich zum Vormonat ausrechnen. Danach schreibt die Projektleitung, was die Zahlen bedeuten.',
    'Bei zwölf Kunden sind das schnell zwei Arbeitstage. Der teure Teil ist nicht das Kopieren. Es ist die Einordnung am Ende, und für die bleibt oft am wenigsten Zeit, weil das Kopieren so lange gedauert hat.',
    'Viele Agenturen haben schon Dashboards. Kunden wollen trotzdem einmal im Monat einen Bericht, der sagt, was passiert ist und was als Nächstes kommt. Den schreibt kein Dashboard.',
  ],
  heute: [
    'In jedes Werbekonto und in Analytics einzeln einloggen.',
    'Zahlen exportieren und in die Vorlage kopieren.',
    'Vormonatsvergleich rechnen und Diagramme anpassen.',
    'Kommentar schreiben, was die Zahlen bedeuten.',
    'Bericht als PDF erzeugen, verschicken und ablegen.',
  ],
  danach: [
    'Am Monatsersten holt der Ablauf die vereinbarten Kennzahlen aus Google Ads, Meta und GA4 über deren offizielle Schnittstellen.',
    'Er schreibt sie in ein Google Sheet je Kunde, stellt Vormonat und Vorjahr daneben und aktualisiert die Diagramme.',
    'Ein KI-Modell schreibt einen Kommentarentwurf zu den auffälligsten Veränderungen.',
    'Die Projektleitung prüft Zahlen und Text und ergänzt Einordnung und Empfehlung.',
    'Nach der Freigabe entsteht das PDF, geht an den Kunden und landet im Kundenordner.',
  ],
  mensch:
    'Die Einordnung bleibt bei Ihnen. Warum die Kosten pro Lead gestiegen sind, weiß die Projektleitung, nicht das Modell: ein neuer Mitbewerber in der Auktion, eine pausierte Kampagne, ein Feiertag. Sie streicht, was falsch oder unwichtig ist, und schreibt die Empfehlung für den nächsten Monat. Ohne ihre Freigabe geht kein Bericht raus.',
  ki: 'Beim Kommentar. Ein KI-Modell bekommt die Zahlen beider Monate und beschreibt in einfachen Sätzen, was sich deutlich verändert hat. Das erspart den leeren Anfang. Die Anweisung verbietet Ursachen, die nicht in den Daten stehen. Rechnen lasse ich das Modell nicht: Alle Zahlen und Vergleiche kommen aus festen Formeln im Sheet.',
  werkzeuge: ['n8n', 'Google Ads API, Meta Marketing API, GA4 Data API', 'Google Sheets', 'Claude oder ein OpenAI-Modell', 'Google Drive oder SharePoint'],
  nutzen: 'gross',
  aufwand: 'gross',
  beispiel: {
    perWeek: 3,
    minutesBefore: 90,
    minutesAfter: 20,
    hourlyRate: 80,
    annahme:
      'Eine Agentur mit etwa zwölf Kunden, die einen Monatsreport bekommen, aufs Jahr gerechnet rund drei Reports pro Woche. Die 90 Minuten umfassen Einloggen, Exportieren, Kopieren und Schreiben. Typische Werte, kein Kundenfall.',
  },
  grenzen: [
    'Für die Google Ads API braucht Ihre Agentur einen Entwicklertoken, den Google auf Antrag freischaltet. Das dauert manchmal einige Tage und gehört deshalb in die erste Woche.',
    'Plattformen ändern ihre Schnittstellen, Meta stellt ältere Versionen regelmäßig ab. Ein solcher Ablauf braucht deshalb Pflege, auch nach dem Start.',
    'Zahlen aus Werbekonten und GA4 weichen voneinander ab, weil sie unterschiedlich zählen. Der Bericht sollte das einmal erklären, statt es jeden Monat zu überspielen.',
    'Kanäle ohne offizielle Schnittstelle oder sehr kleine Konten lohnen den Aufwand oft nicht. Deren Zahlen trägt die Projektleitung von Hand ein.',
  ],
  faqs: [
    {
      q: 'Warum nicht einfach Looker Studio oder ein Reporting-Tool?',
      a: 'Für Dashboards sind die gut, und wenn Ihre Kunden damit zufrieden sind, brauchen Sie diesen Ablauf nicht. Er lohnt sich, wenn Kunden einen geschriebenen Bericht erwarten und Ihr Team jeden Monat Zahlen von Hand zusammenträgt. Ein vorhandenes Dashboard kann der Bericht weiter verlinken.',
    },
    {
      q: 'Wer hat Zugriff auf die Werbekonten unserer Kunden?',
      a: 'Der Ablauf greift über die Zugänge Ihrer Agentur zu, mit so wenigen Rechten wie möglich, meist reinen Leserechten. Die Zugangsschlüssel liegen verschlüsselt auf einem Server in der EU, nicht in Tabellen oder E-Mails. Endet ein Kundenvertrag, entfernen Sie den Zugriff an einer Stelle.',
    },
    {
      q: 'Kann die KI auch Empfehlungen geben?',
      a: 'Sie könnte Vorschläge machen, aber ich halte das für den falschen Platz. Empfehlungen sind der Teil, für den Kunden Ihre Agentur bezahlen. Den sollte jemand schreiben, der die Kampagnen kennt.',
    },
  ],
  related: [
    { label: 'Ablauf: Statusbericht als fertiger Entwurf', href: '/ablaeufe/statusbericht-entwurf' },
    { label: 'ChatGPT im Betrieb', href: '/wissen/chatgpt-im-betrieb' },
    { label: 'KI-Berater für Prozessautomatisierung', href: '/ki-beratung' },
  ],
};
