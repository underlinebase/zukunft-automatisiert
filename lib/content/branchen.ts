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
    moreRoutines: [
      { title: 'Anfragen sammeln', text: 'Anfragen aus E-Mail, Website und Anrufbeantworter landen an einer Stelle, mit allen Angaben.' },
      { title: 'Angebotsentwurf vorbereiten', text: 'Aus Aufmaß und Standardpositionen entsteht ein Entwurf. Sie prüfen, ergänzen und geben frei.' },
      { title: 'Angebote nachfassen', text: 'Nach ein paar Tagen geht eine freundliche Erinnerung raus. Sie sehen, wer geantwortet hat.' },
      { title: 'Termine bestätigen', text: 'Kunden bekommen Termin, Ansprechpartner und Erinnerung, ohne dass jemand telefonieren muss.' },
    ],
    example: HOME_EXAMPLE,
    weekBlocks: [
      { day: 0, label: 'Angebot schreiben' },
      { day: 0, label: 'Aufmaß abtippen' },
      { day: 0, label: 'Anfrage beantworten' },
      { day: 1, label: 'Fotos sortieren' },
      { day: 1, label: 'Termin bestätigen' },
      { day: 1, label: 'Angebot nachfassen' },
      { day: 2, label: 'Material bestellen' },
      { day: 2, label: 'Angebot schreiben' },
      { day: 2, label: 'Lieferschein ablegen' },
      { day: 3, label: 'Rechnung schreiben' },
      { day: 3, label: 'Aufmaß abtippen' },
      { day: 3, label: 'Termin verschieben' },
      { day: 4, label: 'Angebot nachfassen' },
      { day: 4, label: 'Rechnung prüfen' },
      { day: 4, label: 'Fotos sortieren' },
      { day: 4, label: 'Angebot schreiben' },
    ],
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
    moreRoutines: [
      { title: 'Anfragen beantworten', text: 'Portal-Anfragen bekommen sofort eine persönliche Antwort mit Exposé und den nächsten Schritten.' },
      { title: 'Interessenten vorsortieren', text: 'Ein paar kurze Fragen vorab zeigen, wer wirklich passt. Sie rufen nur die Richtigen an.' },
      { title: 'Besichtigungen buchen', text: 'Interessenten wählen einen freien Termin. Bestätigung und Erinnerung gehen automatisch raus.' },
      { title: 'Unterlagen einsammeln', text: 'Selbstauskunft und Nachweise kommen über ein Formular. Fehlt etwas, wird nachgefragt.' },
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
    weekBlocks: [
      { day: 0, label: 'Anfrage beantworten' },
      { day: 0, label: 'Exposé verschicken' },
      { day: 0, label: 'Termin abstimmen' },
      { day: 1, label: 'Exposé anpassen' },
      { day: 1, label: 'Selbstauskunft anfordern' },
      { day: 1, label: 'Anfrage nachfassen' },
      { day: 2, label: 'Besichtigung bestätigen' },
      { day: 2, label: 'Anfrage beantworten' },
      { day: 2, label: 'Unterlagen prüfen' },
      { day: 3, label: 'Termin verschieben' },
      { day: 3, label: 'Exposé verschicken' },
      { day: 3, label: 'Anfrage nachfassen' },
      { day: 4, label: 'Anfrage beantworten' },
      { day: 4, label: 'Besichtigung bestätigen' },
      { day: 4, label: 'Unterlagen nachfordern' },
      { day: 4, label: 'Exposé verschicken' },
    ],
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
    moreRoutines: [
      { title: 'Fehlende Belege anfordern', text: 'Die Kanzlei sieht, was fehlt. Mandanten bekommen eine klare Liste und eine Erinnerung, bis alles da ist.' },
      { title: 'Belege sortieren', text: 'Eingehende Belege werden benannt und dem richtigen Mandanten zugeordnet. Ihr Team prüft nur noch.' },
      { title: 'Mandanten aufnehmen', text: 'Neue Mandanten füllen ein Formular aus und laden Unterlagen hoch. Fehlt etwas, wird nachgefragt.' },
      { title: 'Fristen im Blick behalten', text: 'Rechtzeitig vor einer Frist gehen Hinweise an Mandanten und Team.' },
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
    weekBlocks: [
      { day: 0, label: 'Beleg nachfordern' },
      { day: 0, label: 'Belege zuordnen' },
      { day: 0, label: 'Mandant erinnern' },
      { day: 1, label: 'Vollmacht anfordern' },
      { day: 1, label: 'Beleg nachfordern' },
      { day: 1, label: 'Frist prüfen' },
      { day: 2, label: 'Belege zuordnen' },
      { day: 2, label: 'Fragebogen nachhalten' },
      { day: 2, label: 'Mandant erinnern' },
      { day: 3, label: 'Beleg nachfordern' },
      { day: 3, label: 'Unterlagen sortieren' },
      { day: 3, label: 'Frist prüfen' },
      { day: 4, label: 'Mandant erinnern' },
      { day: 4, label: 'Belege zuordnen' },
      { day: 4, label: 'Beleg nachfordern' },
      { day: 4, label: 'Ablage sortieren' },
    ],
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
