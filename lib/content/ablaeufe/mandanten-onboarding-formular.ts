import type { Ablauf } from './types';

export const mandantenOnboardingFormular: Ablauf = {
  id: 2003,
  slug: 'mandanten-onboarding-formular',
  branche: 'steuerberater',
  themen: ['onboarding', 'dokumente'],
  title: 'Mandanten-Onboarding per Formular',
  lead: 'Neue Mandanten aufnehmen ohne E-Mail-Pingpong: ein Formular für Stammdaten, Vollmacht und Unterlagen. Fehlt etwas, fragt der Ablauf freundlich nach.',
  datePublished: '2026-10-19',
  problem: [
    'Das Erstgespräch lief gut, der neue Mandant will anfangen. Jetzt braucht die Kanzlei Steuer-ID, Bankverbindung, die letzten Bescheide, eine unterschriebene Vollmacht und eine Ausweiskopie für die Identifizierung nach dem Geldwäschegesetz. Bei Unternehmern kommen Gesellschaftsvertrag, Handelsregisterauszug und der letzte Jahresabschluss dazu.',
    'Die Liste geht per E-Mail raus. Zurück kommt sie in Etappen: heute zwei Dokumente, nächste Woche ein Foto vom Ausweis, die Vollmacht unterschrieben, aber ohne Seite zwei. Jemand im Team muss im Blick behalten, was schon da ist, und immer wieder nachfragen.',
    'Das kostet Zeit und wirkt nach außen nicht gut. Gerade die ersten Wochen prägen, wie ein Mandant Ihre Kanzlei wahrnimmt. Ein holpriger Start bleibt hängen, auch wenn die fachliche Arbeit danach tadellos ist.',
  ],
  heute: [
    'Liste der benötigten Unterlagen per E-Mail schicken.',
    'Eingehende Dokumente sammeln und abhaken.',
    'Stammdaten aus E-Mails und PDFs abtippen.',
    'Vollmacht ausdrucken, verschicken und unterschrieben zurückbekommen.',
    'Fehlendes nachfragen, oft mehrmals.',
    'Mandantenakte anlegen, wenn endlich alles da ist.',
  ],
  danach: [
    'Nach dem Erstgespräch bekommt der neue Mandant einen Link zu einem Formular, passend zu seiner Lage: Arbeitnehmer, Selbständiger oder GmbH.',
    'Stammdaten tippt er selbst ein, Unterlagen lädt er direkt hoch.',
    'Die vorbereitete Vollmacht kommt zum Unterschreiben, auf Papier oder elektronisch, je nachdem, was Sie zulassen.',
    'Der Ablauf hakt ab, was da ist, und erinnert nach ein paar Tagen an den Rest.',
    'Sind alle Pflichtangaben vollständig, liegt für Ihr Team ein Datenblatt mit allen Unterlagen bereit.',
    'Ihr Team prüft, legt den Mandanten in der Kanzleisoftware an und gibt den Start frei.',
  ],
  mensch:
    'Die Identifizierung und die Prüfung nach dem Geldwäschegesetz bleiben bei Ihnen, der Ablauf sammelt nur die Unterlagen dafür. Ihr Team sieht das Datenblatt durch, legt den Mandanten in der Kanzleisoftware an und entscheidet über die Annahme des Mandats. Welche Fragen ins Formular kommen, legen Sie fest. Ich baue die Logik, die Ihre heutige Liste abbildet, nicht umgekehrt.',
  werkzeuge: ['n8n', 'Formular auf Ihrer Website oder ein Formulardienst mit Servern in der EU', 'Outlook oder Gmail', 'Ihr DMS oder Mandantenordner'],
  nutzen: 'mittel',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 2,
    minutesBefore: 90,
    minutesAfter: 25,
    hourlyRate: 85,
    annahme:
      'Eine Kanzlei, die im Schnitt zwei neue Mandanten pro Woche aufnimmt. Die 90 Minuten umfassen Liste schicken, Unterlagen sammeln, abtippen und nachfragen. Danach bleiben Prüfen und Anlegen. Typische Werte, kein Kundenfall.',
  },
  grenzen: [
    'Das Formular ersetzt nicht die Identifizierung nach dem Geldwäschegesetz. Es sammelt die Unterlagen, die Prüfung macht Ihr Team.',
    'Ob Stammdaten automatisch in Ihre Kanzleisoftware übernommen werden können, hängt von deren Schnittstellen ab. Ohne Schnittstelle bleibt das Übertragen bei Ihnen, dann aber aus einem sauberen Datenblatt statt aus fünf E-Mails.',
    'Angaben wie Steuer-ID und Bankverbindung gehören nicht in einen Formulardienst mit Servern außerhalb der EU. Das berücksichtige ich bei der Auswahl.',
    'Für verwickelte Fälle, etwa eine Holding mit mehreren Gesellschaften, bleibt das persönliche Gespräch der bessere Weg.',
  ],
  faqs: [
    {
      q: 'Kommen ältere Mandanten mit einem Formular zurecht?',
      a: 'Meistens ja, wenn es kurz ist und auf dem Handy funktioniert. Wer trotzdem lieber Papier schickt, kann das. Ihr Team trägt die Angaben dann selbst ins Formular ein, und der Rest des Ablaufs läuft gleich.',
    },
    {
      q: 'Kann der Mandant die Vollmacht elektronisch unterschreiben?',
      a: 'Technisch ja. Ob eine elektronische Unterschrift für Ihre Vollmachten reicht, entscheiden Sie nach Ihren berufsrechtlichen Vorgaben. Der Ablauf kann beides: ein PDF zum Ausdrucken oder eine Signatur über einen Dienst, den Sie freigeben.',
    },
    {
      q: 'Was kostet so ein Ablauf?',
      a: 'Einen Festpreis nach Aufwand nenne ich nach dem Erstgespräch schriftlich. Für die ersten drei Betriebe gibt es einen Pilotpreis von 1.999 € netto pro Ablauf, mit derselben Garantie, gegen Freigabe als Fallbeispiel.',
    },
  ],
  related: [
    { label: 'Ablauf: Unterlagen für den Jahresabschluss', href: '/ablaeufe/jahresabschluss-unterlagen-checkliste' },
    { label: 'Ablauf: Fristen-Erinnerungen an Mandanten', href: '/ablaeufe/fristen-erinnerungen-mandanten' },
    { label: 'Erstgespräch vereinbaren', href: '/kontakt' },
  ],
};
