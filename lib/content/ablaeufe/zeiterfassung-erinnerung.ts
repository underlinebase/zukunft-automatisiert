import type { Ablauf } from './types';

export const zeiterfassungErinnerung: Ablauf = {
  id: 2010,
  slug: 'zeiterfassung-erinnerung',
  branche: 'agenturen',
  themen: ['rechnungen', 'kommunikation', 'reporting'],
  title: 'Erinnerung an die Zeiterfassung',
  lead: 'Zeiterfassung in der Agentur ohne Nachlaufen: Fehlen Stunden, kommt eine kurze Erinnerung. Läuft ein Budget aus, erfahren Sie es vorher.',
  datePublished: '2026-10-19',
  problem: [
    'Letzter Arbeitstag im Monat. Die Abrechnung soll raus, aber in Clockify fehlen bei drei Leuten ganze Tage. Die Projektleitung schreibt in den Teamchat, fragt einzeln nach, wartet. Was am Ende nachgetragen wird, stammt aus dem Gedächtnis und ist eher zu knapp als zu großzügig.',
    'Jede nicht erfasste Stunde ist eine Stunde, die Sie nicht abrechnen. Bei Pauschalprojekten fehlt sie in der Nachkalkulation, und Sie merken zu spät, dass ein Kunde mehr Zeit kostet, als er bezahlt.',
    'Kaum jemand im Team ist gegen Zeiterfassung. Sie geht nur unter, wenn der Tag voll ist. Eine kurze, sachliche Erinnerung am nächsten Morgen hilft mehr als ein Rundschreiben am Monatsende.',
  ],
  heute: [
    'Am Monatsende die Stunden je Person durchsehen.',
    'Einzeln nachfragen, wer Tage nachtragen muss.',
    'Warten und noch einmal nachfragen.',
    'Budgets je Projekt von Hand gegen die Stunden rechnen.',
    'Überschreitungen erst bei der Rechnung bemerken.',
  ],
  danach: [
    'Der Ablauf liest jeden Abend die Zeiten aus Clockify, Toggl Track oder Harvest.',
    'Hat jemand an einem Arbeitstag deutlich weniger erfasst als üblich, bekommt er am nächsten Morgen eine kurze Nachricht in Slack oder Teams.',
    'Urlaub und Krankheit kennt der Ablauf aus dem Teamkalender und lässt diese Tage aus.',
    'Je Projekt vergleicht er erfasste Stunden mit dem Budget und meldet sich, wenn 80 Prozent erreicht sind.',
    'Am Monatsende bekommt die Projektleitung eine Liste, auf der nur noch Einzelfälle offen sind.',
  ],
  mensch:
    'Die Projektleitung legt fest, was als Lücke gilt und wer welche Nachricht bekommt. Bei einer Budgetwarnung entscheidet sie, ob mit dem Kunden gesprochen wird. Nachtragen muss jede Person ihre Zeiten weiter selbst. Der Ablauf erinnert, er erfindet keine Stunden.',
  werkzeuge: ['n8n', 'Clockify, Toggl Track oder Harvest', 'Slack oder Microsoft Teams', 'Google- oder Outlook-Kalender'],
  nutzen: 'mittel',
  aufwand: 'klein',
  beispiel: {
    perWeek: 12,
    minutesBefore: 6,
    minutesAfter: 1,
    hourlyRate: 80,
    annahme:
      'Ein Team, bei dem die Projektleitung etwa zwölfmal pro Woche wegen fehlender Zeiten nachfragt oder ein Budget nachrechnet. Nicht gerechnet sind die Stunden, die heute gar nicht erfasst und deshalb nie abgerechnet werden.',
  },
  grenzen: [
    'Eine Erinnerung ersetzt keine Teamregel. Ohne Absprache, bis wann Zeiten erfasst sein sollen, bleibt sie ein Hinweis.',
    'Zeiterfassung ist ein Thema für den Datenschutz und, falls es einen gibt, für den Betriebsrat. Der Ablauf wertet Zeiten für die Abrechnung aus, nicht zur Leistungskontrolle. Das sollte auch so schriftlich festgehalten sein.',
    'Arbeitet das Team ohne feste Arbeitszeiten, braucht es eine andere Regel als „weniger als sonst“.',
  ],
  faqs: [
    {
      q: 'Fühlen sich Mitarbeitende dadurch kontrolliert?',
      a: 'Das hängt vom Ton und vom Zweck ab. Die Nachricht geht nur an die Person selbst, nicht an die Chefin, und sie sagt sachlich: „Für Dienstag fehlen noch Zeiten.“ Am besten besprechen Sie die Regeln vorher im Team. Dann ist die Erinnerung eine Hilfe und kein Misstrauen.',
    },
    {
      q: 'Macht das unser Zeiterfassungstool nicht schon selbst?',
      a: 'Teilweise. Einige Programme haben eingebaute Erinnerungen. Was sie meist nicht können: Urlaub aus Ihrem Kalender berücksichtigen, Budgetwarnungen in Ihren Teamchat schicken und das mit der Rechnung verbinden. Schauen Sie zuerst, was Ihr Tool kann. Reicht das, brauchen Sie mich dafür nicht.',
    },
    {
      q: 'Lohnt sich das auch bei einem kleinen Team?',
      a: 'Bei zwei oder drei Leuten reicht oft eine feste Viertelstunde am Freitag, in der alle ihre Woche nachtragen. Je größer das Team und je mehr Projekte nach Stunden abgerechnet werden, desto eher rechnet sich der Ablauf. Er ist klein und schnell gebaut, das Wichtigste daran ist die Regel, auf die sich Ihr Team vorher einigt.',
    },
  ],
  related: [
    { label: 'Ablauf: Rechnungsentwurf aus Stunden', href: '/ablaeufe/rechnungsentwurf-aus-zeiten' },
    { label: 'Wann sich Automatisierung lohnt', href: '/wissen/wann-sich-automatisierung-lohnt' },
  ],
};
