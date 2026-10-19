import type { Ablauf } from './types';

export const termineBestaetigenErinnernHandwerk: Ablauf = {
  id: 1004,
  slug: 'termine-bestaetigen-erinnern-handwerk',
  branche: 'handwerk',
  themen: ['termine', 'kommunikation'],
  title: 'Termine bestätigen und erinnern',
  seoTitle: 'Kundentermine im Handwerk automatisch bestätigen',
  lead: 'Kunden bekommen jeden Termin mit Zeitfenster und Monteur schriftlich bestätigt und am Vortag eine Erinnerung. Weniger Leerfahrten, weniger Anrufe im Büro.',
  datePublished: '2026-10-19',
  problem: [
    'Der Monteur steht um acht vor der Tür. Niemand macht auf. Die Kundin ist bei der Arbeit, sie dachte, der Termin sei am Donnerstag. Am Telefon war von Dienstag die Rede, aufgeschrieben hat es keiner von beiden.',
    'So eine Leerfahrt kostet mehr als die verlorene Stunde. Der Tag muss umgeplant werden, die nächste Baustelle wartet, und die Kundin ist verärgert, obwohl sie glaubt, nichts falsch gemacht zu haben. Den neuen Termin bekommt sie frühestens in einer Woche.',
    'Viele Betriebe rufen deshalb am Vortag an. Das hilft, kostet aber jeden Nachmittag Zeit im Büro, und beim ersten Versuch geht oft niemand ran. Eine schriftliche Bestätigung mit allen Angaben und eine Erinnerung zur richtigen Zeit erledigen dasselbe, ohne dass jemand zum Hörer greift.',
  ],
  heute: [
    'Der Termin wird am Telefon vereinbart und in den Kalender eingetragen.',
    'Eine schriftliche Bestätigung bekommt der Kunde selten.',
    'Am Vortag ruft das Büro an, wenn jemand daran denkt.',
    'Verschiebungen laufen wieder übers Telefon, der Kalender hinkt hinterher.',
  ],
  danach: [
    'Sobald der Termin im Kalender steht, bekommt der Kunde eine Bestätigung per Mail oder SMS.',
    'Darin stehen Tag, Zeitfenster, der Name des Monteurs und was vorbereitet sein sollte.',
    'Am Vortag geht eine Erinnerung raus, mit Telefonnummer für Rückfragen.',
    'Wird der Termin im Kalender verschoben, bekommt der Kunde die neue Zeit.',
    'Sagt der Kunde ab, sehen Sie das sofort und können den Platz neu vergeben.',
  ],
  mensch:
    'Termine vereinbaren Sie weiter wie bisher, am Telefon oder beim Kunden. Sie tragen sie in den Kalender ein, mehr nicht. Bei Absagen entscheiden Sie, wer nachrückt. Und wenn ein Kunde anruft, weil er das Zeitfenster nicht schafft, sprechen Sie mit ihm. Was in der Bestätigung steht, etwa „bitte Zugang zum Keller freiräumen“, formulieren Sie einmal je Terminart.',
  werkzeuge: ['n8n', 'Google Kalender oder Outlook-Kalender', 'Gmail oder Outlook', 'SMS-Dienst mit Schnittstelle'],
  nutzen: 'mittel',
  aufwand: 'klein',
  beispiel: {
    perWeek: 12,
    minutesBefore: 6,
    minutesAfter: 1,
    hourlyRate: 70,
    annahme:
      '12 Kundentermine pro Woche. Bisher 6 Minuten für Bestätigung und Anruf am Vortag, danach 1 Minute für einen Blick auf Absagen.',
  },
  grenzen: [
    'Der Kalender muss stimmen. Steht ein Termin dort falsch, geht die falsche Nachricht raus.',
    'Planen Sie Einsätze in der Plantafel Ihrer Handwerkersoftware, hängt es von deren Schnittstelle ab, ob der Ablauf die Termine lesen kann. Sonst ist ein geteilter Google- oder Outlook-Kalender der einfachere Weg.',
    'Für SMS brauchen Sie die Handynummer des Kunden und einen SMS-Dienst, der pro Nachricht eine kleine Gebühr nimmt.',
    'Kunden ohne Mail und Handy erreicht der Ablauf nicht. Für sie bleibt der Anruf.',
  ],
  faqs: [
    {
      q: 'Wie erinnere ich Kunden automatisch an Termine?',
      a: 'Über Ihren Kalender. Steht der Termin dort mit Mail-Adresse oder Handynummer des Kunden, schickt ein Ablauf in n8n die Bestätigung sofort und die Erinnerung am Vortag. Sie müssen dafür nichts tun außer den Termin sauber einzutragen.',
    },
    {
      q: 'SMS oder E-Mail für die Terminerinnerung?',
      a: 'Für die Erinnerung am Vortag nehme ich gern SMS, weil sie auf dem Handy eher auffällt. Für die Bestätigung mit allen Details reicht eine Mail. Beides lässt sich kombinieren.',
    },
    {
      q: 'Brauche ich für eine Terminerinnerung die Einwilligung des Kunden?',
      a: 'Eine Erinnerung an einen vereinbarten Termin gilt in der Regel als Teil der Auftragsabwicklung, nicht als Werbung. Werbung gehört deshalb nicht in dieselbe Nachricht. Bei Unsicherheit fragen Sie Ihren Datenschutzberater.',
    },
  ],
  related: [
    { label: 'Anfragen an einer Stelle sammeln', href: '/ablaeufe/anfragen-zentral-erfassen-handwerk' },
    { label: 'Datenschutz bei Automatisierung', href: '/wissen/datenschutz-bei-automatisierung' },
    { label: 'Ablauf besprechen', href: '/kontakt' },
  ],
};
