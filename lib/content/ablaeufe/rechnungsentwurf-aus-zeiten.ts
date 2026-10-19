import type { Ablauf } from './types';

export const rechnungsentwurfAusZeiten: Ablauf = {
  id: 2011,
  slug: 'rechnungsentwurf-aus-zeiten',
  branche: 'agenturen',
  themen: ['rechnungen'],
  title: 'Rechnungsentwurf aus Stunden',
  lead: 'Rechnungen aus der Zeiterfassung erstellen: Stunden und Pauschalen werden zum Rechnungsentwurf in Lexware Office oder sevDesk. Sie prüfen und geben frei.',
  datePublished: '2026-10-19',
  problem: [
    'Am Monatsanfang exportiert jemand die Stunden aus der Zeiterfassung, sortiert sie in einer Tabelle nach Kunde und Projekt, rechnet mit dem richtigen Stundensatz und tippt das Ergebnis in die Rechnungssoftware. Dazu kommen die monatlichen Pauschalen, Fremdkosten für Lizenzen oder Druck und die eine Sonderabsprache, die nur die Geschäftsführung kennt.',
    'Bei vierzig Kunden dauert das einen Tag oder länger. Fehler passieren an den Übergängen: falscher Satz, vergessene Position, Stunden aus dem Vormonat doppelt. Und weil die Rechnungen später rausgehen, kommt auch das Geld später.',
    'Dabei sind fast alle Angaben schon erfasst. Sie liegen nur in zwei Programmen, die nicht miteinander reden, und jeden Monat spielt ein Mensch den Übersetzer. Das ist eine Aufgabe, die ein Ablauf zuverlässiger erledigt.',
  ],
  heute: [
    'Stunden aus der Zeiterfassung exportieren.',
    'In einer Tabelle nach Kunde und Projekt sortieren.',
    'Stundensätze und Pauschalen in Verträgen nachschlagen.',
    'Rechnungen in der Rechnungssoftware von Hand anlegen.',
    'Gegenlesen und verschicken.',
  ],
  danach: [
    'Zum Monatsende holt der Ablauf die abrechenbaren Stunden aus Clockify, Toggl Track oder Harvest.',
    'Er ordnet sie Kunden und Projekten zu und rechnet mit den hinterlegten Sätzen.',
    'Monatliche Pauschalen und wiederkehrende Positionen ergänzt er aus einer Kundenliste.',
    'In Lexware Office oder sevDesk entsteht je Kunde ein Rechnungsentwurf, auf Wunsch mit Stundenaufstellung als Anhang.',
    'Auffälligkeiten, etwa doppelt so viele Stunden wie im Vormonat, stehen in einer kurzen Liste daneben.',
    'Sie oder Ihre Buchhaltung prüfen die Entwürfe und geben frei.',
  ],
  mensch:
    'Sie prüfen jeden Entwurf und geben ihn frei. Kulanz, Rabatte und Sonderabsprachen bleiben Ihre Entscheidung. Der Ablauf schickt keine Rechnung von sich aus an Kunden. Pflegen müssen Sie die Kundenliste mit Sätzen und Pauschalen, und zwar an einer Stelle statt in mehreren Köpfen.',
  werkzeuge: ['n8n', 'Clockify, Toggl Track oder Harvest', 'Lexware Office oder sevDesk', 'Tabelle mit Sätzen und Pauschalen'],
  nutzen: 'gross',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 10,
    minutesBefore: 20,
    minutesAfter: 4,
    hourlyRate: 80,
    annahme:
      'Eine Agentur mit etwa 40 Rechnungen im Monat, also rund zehn pro Woche. Die 20 Minuten umfassen Zusammensuchen, Rechnen, Anlegen und Prüfen, danach bleiben vier Minuten fürs Prüfen. Typische Werte, kein Kundenfall.',
  },
  grenzen: [
    'Ohne saubere Projektstruktur in der Zeiterfassung ordnet der Ablauf Stunden falsch zu. Das muss vorher stimmen.',
    'Lexware Office und sevDesk haben Schnittstellen für Rechnungen. Welche Funktionen in Ihrem Tarif freigeschaltet sind, prüfe ich vor dem Start.',
    'Harvest kann selbst Rechnungen schreiben. Wenn Ihnen das reicht, brauchen Sie diesen Ablauf nicht.',
    'Der Entwurf entsteht in Ihrer Rechnungssoftware. Ob und wann Ihre Rechnungen als E-Rechnung rausgehen müssen, klären Sie mit Ihrem Steuerberater.',
  ],
  faqs: [
    {
      q: 'Geht die Rechnung automatisch an den Kunden?',
      a: 'In der Grundeinstellung nicht. Jeder Entwurf wartet auf Ihre Freigabe. Wenn Sie nach ein paar Monaten sicher sind, können reine Pauschalrechnungen ohne Stunden automatisch rausgehen. Stundenrechnungen würde ich weiter ansehen.',
    },
    {
      q: 'Was ist mit nicht abrechenbaren Stunden?',
      a: 'Die kennzeichnet Ihr Team in der Zeiterfassung, wie bisher. Der Ablauf zieht nur, was als abrechenbar markiert ist. Die anderen Stunden zeigt er in der Übersicht, damit Sie sehen, wo Zeit verschenkt wird.',
    },
    {
      q: 'Unsere Kunden haben ganz unterschiedliche Verträge. Geht das trotzdem?',
      a: 'Ja, solange sich die Regeln aufschreiben lassen: Stundensatz, Pauschale, Kontingent mit Abrechnung der Mehrstunden. Genau das erarbeiten wir in der ersten Woche. Was sich nicht als Regel fassen lässt, bleibt eine Position, die Sie von Hand ergänzen.',
    },
  ],
  related: [
    { label: 'Ablauf: Erinnerung an die Zeiterfassung', href: '/ablaeufe/zeiterfassung-erinnerung' },
    { label: 'Excel ist nicht das Problem', href: '/wissen/excel-ist-nicht-das-problem' },
    { label: 'Erstgespräch vereinbaren', href: '/kontakt' },
  ],
};
