import { HOME_EXAMPLE } from './home';
import type { Industry } from './types';

const SHARED_LEAD =
  'Den Ablauf, der Ihren Betrieb jede Woche am meisten Zeit kostet, automatisiere ich in 4 Wochen. Klappt das nicht, arbeite ich kostenlos weiter.';

export const INDUSTRIES: Industry[] = [
  {
    slug: 'handwerk',
    name: 'Handwerk',
    short: 'Handwerk',
    audience: 'Handwerksbetriebe',
    audienceDative: 'Handwerksbetrieben',
    trades: 'SHK, Elektro, Dach',
    teaser: 'Vom Aufmaß bis zur Rechnung, mit weniger Büro am Abend.',
    routines: [
      { title: 'Angebote nachfassen', text: 'Kunden bekommen nach ein paar Tagen automatisch eine freundliche Erinnerung.' },
      { title: 'Fotos und Aufmaße ablegen', text: 'Bilder vom Handy landen direkt im richtigen Kundenordner.' },
    ],
    hero: {
      kicker: 'Automatisierung für Handwerksbetriebe',
      title: 'Schluss mit Angeboten am Sonntagabend.',
      lead: SHARED_LEAD,
    },
    seo: {
      title: 'Automatisierung für Handwerksbetriebe (SHK, Elektro, Dach)',
      description:
        'Angebote, Nachfassen, Fotos und Aufmaße: Ich automatisiere den Büro-Ablauf, der Ihren Handwerksbetrieb am meisten Zeit kostet. In 4 Wochen, mit Garantie.',
      serviceType: 'Prozessautomatisierung für Handwerksbetriebe',
    },
    faqs: [
      {
        q: 'Funktioniert das mit meiner Handwerkersoftware?',
        a: 'Meistens ja. Viele Programme lassen sich über eine Schnittstelle, über E-Mail oder über Exporte anbinden. Das prüfe ich im ersten Gespräch, bevor Sie etwas bezahlen.',
      },
      {
        q: 'Meine Leute sind auf der Baustelle, nicht am Computer. Geht das trotzdem?',
        a: 'Gerade dann. Fotos und Notizen lassen sich vom Handy aus schicken. Der Rest passiert im Hintergrund, ohne dass jemand im Büro sortieren muss.',
      },
      {
        q: 'Schreibt dann eine KI meine Angebote?',
        a: 'Nein. Sie bekommen einen Entwurf aus Ihren eigenen Positionen und Preisen. Prüfen und freigeben bleibt bei Ihnen.',
      },
      {
        q: 'Lohnt sich das für einen kleineren Betrieb?',
        a: 'Wenn ein Ablauf jede Woche mehrere Stunden kostet, meistens ja. Rechnen Sie es mit dem Zeitrechner nach. Rechnet es sich nicht, sage ich Ihnen das.',
      },
    ],
    scenes: [
      {
        tag: 'Angebote',
        title: 'Im Kopf ist das Angebot fertig. Auf dem Papier noch nicht.',
        text: 'Aufmaß abtippen, Preise nachsehen, Positionen zusammenbauen. Jedes Angebot kostet Sie eine halbe Stunde oder mehr.',
        hours: 'ca. 3 bis 5 Std. pro Woche',
      },
      {
        tag: 'Nachfassen',
        title: 'Hat der Kunde das Angebot überhaupt gelesen?',
        text: 'Ohne Nachfassen gehen Aufträge verloren. Mit Nachfassen geht der Abend verloren.',
        hours: 'ca. 1 bis 2 Std. pro Woche',
      },
      {
        tag: 'Baustelle und Büro',
        title: 'Fotos auf dem Handy, Notizen im Auto, Lieferscheine im Handschuhfach.',
        text: 'Am Ende der Woche sortiert jemand alles zusammen. Meistens Sie.',
        hours: 'ca. 2 bis 3 Std. pro Woche',
      },
    ],
    heroBenefits: [
      'Angebote als fertiger Entwurf statt am Sonntagabend',
      'Nachfassen, ohne daran denken zu müssen',
      'Fotos und Aufmaße landen im richtigen Kundenordner',
    ],
    timeSinks: [
      { label: 'Angebote schreiben', min: 3, max: 5 },
      { label: 'Fotos, Aufmaße, Ablage', min: 2, max: 3 },
      { label: 'Angebote nachfassen', min: 1, max: 2 },
    ],
    routineDetails: [
      { title: 'Anfragen sammeln', today: 'Anfragen kommen per E-Mail, über die Website und am Telefon. Jemand muss sie zusammensuchen und abtippen.', after: 'Jede Anfrage landet mit allen Angaben an einer Stelle, auch die vom Kontaktformular.' },
      { title: 'Angebotsentwurf', today: 'Aufmaß abtippen, Positionen suchen, Preise prüfen. Pro Angebot eine halbe Stunde oder mehr.', after: 'Aus Aufmaß und Ihren Standardpositionen entsteht ein Entwurf. Sie prüfen, ergänzen und geben frei.' },
      { title: 'Angebote nachfassen', today: 'Ob das Angebot angekommen ist, fragt meist niemand nach. Aufträge gehen leise verloren.', after: 'Nach ein paar Tagen geht eine freundliche Erinnerung raus. Sie sehen, wer geantwortet hat.' },
      { title: 'Termine bestätigen', today: 'Termine werden am Telefon vereinbart und dann vergessen oder doppelt belegt.', after: 'Kunden bekommen Termin, Ansprechpartner und eine Erinnerung am Vortag. Ohne Anruf.' },
    ],

    example: HOME_EXAMPLE,
    calculator: { hoursPerWeek: 6, hourlyRate: 70 },
  },
  {
    slug: 'immobilienmakler',
    name: 'Immobilienmakler',
    short: 'Makler',
    audience: 'Immobilienmakler',
    audienceDative: 'Immobilienmaklern',
    trades: 'Vermietung und Verkauf',
    teaser: 'Anfragen schneller beantworten, Besichtigungen ohne Telefon-Pingpong.',
    routines: [
      { title: 'Anfragen sofort beantworten', text: 'Jede Portal-Anfrage bekommt in wenigen Minuten eine Antwort mit Exposé.' },
      { title: 'Besichtigungen abstimmen', text: 'Interessenten wählen selbst einen freien Termin aus Ihrem Kalender.' },
    ],
    hero: {
      kicker: 'Automatisierung für Immobilienmakler',
      title: 'Jede Anfrage beantwortet, bevor der Abend kommt.',
      lead: SHARED_LEAD,
    },
    seo: {
      title: 'Automatisierung für Immobilienmakler: Anfragen und Termine',
      description:
        'Portal-Anfragen sofort beantworten, Exposés verschicken, Besichtigungen ohne Telefon-Pingpong: Ich automatisiere Ihren zeitraubendsten Ablauf in 4 Wochen.',
      serviceType: 'Prozessautomatisierung für Immobilienmakler',
    },
    faqs: [
      {
        q: 'Funktioniert das mit meiner Maklersoftware und den Portalen?',
        a: 'Anfragen von Portalen kommen meist per E-Mail an. Die lassen sich zuverlässig auslesen. Ob Ihre Maklersoftware eine Schnittstelle hat, prüfe ich vor dem Start.',
      },
      {
        q: 'Wirkt eine automatische Antwort nicht unpersönlich?',
        a: 'Nicht, wenn sie gut geschrieben ist und schnell kommt. Interessenten bekommen Ihre Worte, Ihr Exposé und einen klaren nächsten Schritt. Das persönliche Gespräch führen weiterhin Sie.',
      },
      {
        q: 'Was passiert mit den Daten der Interessenten?',
        a: 'Die Daten bleiben in Ihren Systemen oder auf Servern in der EU. Selbstauskünfte werden nur so lange gespeichert, wie Sie sie brauchen.',
      },
      {
        q: 'Kann ich Besichtigungen weiter selbst steuern?',
        a: 'Ja. Sie legen fest, welche Zeiten frei sind. Interessenten wählen nur aus diesen Zeiten, und Sie sehen jede Buchung.',
      },
    ],
    scenes: [
      {
        tag: 'Portal-Anfragen',
        title: 'Montagmorgen, 40 neue Anfragen.',
        text: 'Jede will eine Antwort, ein Exposé und am besten sofort einen Termin. Die meisten fragen dasselbe.',
        hours: 'ca. 3 bis 5 Std. pro Woche',
      },
      {
        tag: 'Besichtigungen',
        title: 'Der dritte Terminvorschlag passt wieder nicht.',
        text: 'Termine per Telefon und E-Mail hin und her schieben, absagen, neu vergeben.',
        hours: 'ca. 2 bis 3 Std. pro Woche',
      },
      {
        tag: 'Unterlagen',
        title: 'Die Selbstauskunft fehlt. Wieder.',
        text: 'Unterlagen von Interessenten anfordern, prüfen, nachfordern. Bis alles da ist, vergehen Tage.',
        hours: 'ca. 1 bis 2 Std. pro Woche',
      },
    ],
    heroBenefits: [
      'Jede Portal-Anfrage in wenigen Minuten beantwortet',
      'Besichtigungen ohne Telefon-Pingpong',
      'Unterlagen vollständig, ohne Nachlaufen',
    ],
    timeSinks: [
      { label: 'Anfragen und Exposés', min: 3, max: 5 },
      { label: 'Besichtigungen abstimmen', min: 2, max: 3 },
      { label: 'Unterlagen nachfordern', min: 1, max: 2 },
    ],
    routineDetails: [
      { title: 'Anfragen beantworten', today: 'Jede Portal-Anfrage wird einzeln geöffnet, beantwortet und mit Exposé versehen.', after: 'Interessenten bekommen in wenigen Minuten eine persönliche Antwort mit Exposé und nächstem Schritt.' },
      { title: 'Interessenten vorsortieren', today: 'Sie telefonieren mit jedem, auch mit denen, für die das Objekt gar nicht passt.', after: 'Ein paar kurze Fragen vorab zeigen, wer wirklich passt. Sie rufen nur die Richtigen an.' },
      { title: 'Besichtigungen buchen', today: 'Termine werden per Telefon und E-Mail hin und her geschoben.', after: 'Interessenten wählen selbst aus Ihren freien Zeiten. Bestätigung und Erinnerung gehen automatisch raus.' },
      { title: 'Unterlagen einsammeln', today: 'Selbstauskunft und Nachweise kommen unvollständig und verteilt über mehrere E-Mails.', after: 'Alles kommt über ein Formular. Fehlt etwas, wird freundlich nachgefragt.' },
    ],

    example: {
      title: 'Eine Portal-Anfrage bis zur Besichtigung.',
      context: 'Beispielablauf. Die Minuten sind typische Werte, kein Kundenfall.',
      perWeek: 25,
      unit: 'Anfragen pro Woche',
      steps: [
        { text: 'Anfrage im Portal öffnen und lesen', minutesBefore: 2, minutesAfter: 0, afterText: 'Anfrage wird automatisch übernommen' },
        { text: 'Kontaktdaten in die Maklersoftware übertragen', minutesBefore: 3, minutesAfter: 0, afterText: 'Kontakt wird angelegt' },
        { text: 'Antwort schreiben und Exposé anhängen', minutesBefore: 4, minutesAfter: 0, afterText: 'Antwort mit Exposé geht sofort raus' },
        { text: 'Rückfragen zu Budget und Wunschtermin stellen', minutesBefore: 3, minutesAfter: 0, afterText: 'Kurze Fragen vorab per Formular' },
        { text: 'Besichtigungstermin abstimmen', minutesBefore: 6, minutesAfter: 1, afterText: 'Interessent bucht selbst, Sie werfen einen Blick drauf', keeps: 'gebuchte Termine kurz ansehen' },
        { text: 'Erinnerung vor dem Termin schicken', minutesBefore: 2, minutesAfter: 0, afterText: 'Erinnerung geht automatisch raus' },
      ],
    },
    calculator: { hoursPerWeek: 8, hourlyRate: 90 },
  },
  {
    slug: 'steuerberater',
    name: 'Steuerberater',
    short: 'Steuerberater',
    audience: 'Steuerkanzleien',
    audienceDative: 'Steuerkanzleien',
    trades: 'Kanzleien',
    teaser: 'Weniger Belegen hinterherlaufen, schneller neue Mandanten aufnehmen.',
    routines: [
      { title: 'Fehlende Belege anfordern', text: 'Mandanten bekommen eine Liste, was fehlt, und eine freundliche Erinnerung.' },
      { title: 'Neue Mandanten aufnehmen', text: 'Unterlagen und Vollmachten kommen gesammelt über ein Formular.' },
    ],
    hero: {
      kicker: 'Automatisierung für Steuerkanzleien',
      title: 'Weniger Belegen hinterherlaufen. Mehr Zeit für die Beratung.',
      lead: SHARED_LEAD,
    },
    seo: {
      title: 'Automatisierung für Steuerberater: Belege und Mandanten',
      description:
        'Fehlende Belege anfordern, zuordnen, neue Mandanten aufnehmen: Ich automatisiere den Ablauf, der Ihre Kanzlei am meisten Zeit kostet. In 4 Wochen, mit Garantie.',
      serviceType: 'Prozessautomatisierung für Steuerkanzleien',
    },
    faqs: [
      {
        q: 'Funktioniert das mit DATEV?',
        a: 'Das hängt davon ab, wie Ihre Kanzlei arbeitet. Viele Schritte rund um Belege und Mandantenkommunikation lassen sich vor der Buchhaltung automatisieren, zum Beispiel das Anfordern und Sortieren. Welche Anbindung bei Ihnen möglich ist, prüfe ich vor dem Start.',
      },
      {
        q: 'Wie steht es um Verschwiegenheit und Datenschutz?',
        a: 'Mandantendaten bleiben unter Ihrer Kontrolle, auf Servern in der EU und mit Vertrag zur Auftragsverarbeitung. Vor dem Start verpflichte ich mich schriftlich zur Verschwiegenheit. KI setze ich nur ein, wo sie nötig ist, und nur mit Diensten, die keine Daten zum Training verwenden.',
      },
      {
        q: 'Ersetzt das meine Fachkräfte?',
        a: 'Nein. Es nimmt ihnen das Hinterherlaufen ab, damit mehr Zeit für die fachliche Arbeit bleibt.',
      },
      {
        q: 'Wann ist der beste Zeitpunkt für den Start?',
        a: 'Nicht mitten in der Abgabesaison. Die Aufnahme in Woche 1 braucht etwa zwei Stunden Ihrer Zeit. Planen Sie das in einer ruhigeren Phase.',
      },
    ],
    scenes: [
      {
        tag: 'Belege',
        title: 'Monatsende. Bei der Hälfte der Mandanten fehlt etwas.',
        text: 'Listen erstellen, E-Mails schreiben, nachtelefonieren. Ihre Fachkräfte machen Botendienste statt Buchhaltung.',
        hours: 'ca. 4 bis 6 Std. pro Woche',
      },
      {
        tag: 'Posteingang',
        title: 'Belege kommen als Foto, als PDF, als ZIP und auf Papier.',
        text: 'Alles muss geöffnet, benannt und zugeordnet werden, bevor die eigentliche Arbeit beginnt.',
        hours: 'ca. 2 bis 4 Std. pro Woche',
      },
      {
        tag: 'Neue Mandanten',
        title: 'Der neue Mandant ist da. Die Unterlagen noch nicht.',
        text: 'Vollmachten, Fragebögen, Bankdaten: Bis alles vollständig ist, gehen viele E-Mails hin und her.',
        hours: 'ca. 1 bis 2 Std. pro Woche',
      },
    ],
    heroBenefits: [
      'Fehlende Belege anfordern, ohne hinterherzulaufen',
      'Posteingang sortiert, bevor Ihr Team anfängt',
      'Neue Mandanten mit vollständigen Unterlagen',
    ],
    timeSinks: [
      { label: 'Belege anfordern', min: 4, max: 6 },
      { label: 'Posteingang sortieren', min: 2, max: 4 },
      { label: 'Neue Mandanten aufnehmen', min: 1, max: 2 },
    ],
    routineDetails: [
      { title: 'Fehlende Belege anfordern', today: 'Listen erstellen, E-Mails schreiben, nachtelefonieren. Jeden Monat wieder.', after: 'Mandanten bekommen eine klare Liste, was fehlt, und eine Erinnerung, bis alles da ist.' },
      { title: 'Belege sortieren', today: 'Fotos, PDFs und ZIP-Dateien kommen durcheinander und müssen benannt und zugeordnet werden.', after: 'Eingehende Belege werden benannt und dem richtigen Mandanten zugeordnet. Ihr Team prüft nur noch.' },
      { title: 'Mandanten aufnehmen', today: 'Vollmachten, Fragebögen und Bankdaten kommen nach und nach, oft unvollständig.', after: 'Neue Mandanten laden alles über ein Formular hoch. Fehlt etwas, wird nachgefragt.' },
      { title: 'Fristen im Blick', today: 'Fristen hängen an Kalendern und Köpfen einzelner Mitarbeiter.', after: 'Rechtzeitig vor einer Frist gehen Hinweise an Mandanten und Team.' },
    ],

    example: {
      title: 'Fehlende Belege bei einem Mandanten anfordern.',
      context: 'Beispielablauf. Die Minuten sind typische Werte, kein Kundenfall.',
      perWeek: 15,
      unit: 'Mandanten pro Woche',
      steps: [
        { text: 'Kontoauszug mit vorhandenen Belegen abgleichen', minutesBefore: 10, minutesAfter: 3, afterText: 'Abgleich läuft vorab, Ihr Team prüft die Liste', keeps: 'die Abgleichliste prüfen' },
        { text: 'Liste der fehlenden Belege schreiben', minutesBefore: 5, minutesAfter: 0, afterText: 'Liste entsteht automatisch' },
        { text: 'E-Mail an den Mandanten formulieren', minutesBefore: 4, minutesAfter: 0, afterText: 'E-Mail mit Liste geht raus' },
        { text: 'Nach einer Woche erinnern', minutesBefore: 3, minutesAfter: 0, afterText: 'Erinnerung geht automatisch raus' },
        { text: 'Eingegangene Belege zuordnen', minutesBefore: 6, minutesAfter: 1, afterText: 'Belege werden zugeordnet, Ihr Team schaut kurz drauf', keeps: 'zugeordnete Belege kurz ansehen' },
        { text: 'Nachtelefonieren, wenn immer noch etwas fehlt', minutesBefore: 5, minutesAfter: 2, afterText: 'Nur noch bei den wenigen, die nicht reagieren', keeps: 'bei wenigen Mandanten nachtelefonieren' },
      ],
    },
    calculator: { hoursPerWeek: 7, hourlyRate: 85 },
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((industry) => industry.slug === slug);
}

/** Landingpages liegen direkt unter der Domain, z. B. /steuerberater. */
export function industryHref(slug: string): string {
  return `/${slug}`;
}

export interface IndustryLink {
  href: string;
  label: string;
}

export const INDUSTRY_LINKS: IndustryLink[] = INDUSTRIES.map((industry) => ({
  href: industryHref(industry.slug),
  label: industry.name,
}));
