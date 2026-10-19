// n8n-Vorlagen-Bibliothek: kostenlose Workflows zum Herunterladen, je Vorlage eine Seite mit Anleitung.
// Die JSON-Dateien liegen unter public/vorlagen/. Download erst, wenn `getestet` auf true steht.

import type { Branche } from '@/lib/content/ablaeufe/types';
import type { Faq } from '@/lib/content/types';

export const VORLAGEN_PATH = '/vorlagen';

/** Ein Knoten im Workflow: kurzer Name fürs Schaubild, ein Satz zur Erklärung. */
export interface VorlageSchritt {
  name: string;
  text: string;
}

/** Stelle in der JSON-Datei, die vor dem Start ersetzt werden muss. */
export interface VorlagePlatzhalter {
  name: string;
  text: string;
}

export interface Vorlage {
  slug: string;
  title: string;
  /** Max. 60 Zeichen, nur wenn der Titel dafür zu lang ist. */
  seoTitle?: string;
  branche: Branche;
  /** 1–2 Sätze, wird Meta-Description (max. 160 Zeichen). */
  lead: string;
  /** Absätze: welches Problem, was die Vorlage macht, worauf zu achten ist. */
  beschreibung: string[];
  schritte: VorlageSchritt[];
  /** Zugänge und Voraussetzungen. */
  benoetigt: string[];
  platzhalter: VorlagePlatzhalter[];
  grenzen: string[];
  /** Pfad der JSON-Datei unter public/, z. B. /vorlagen/anfragen-erfassen.json */
  datei: string;
  /** Erst true, wenn Marco die Vorlage selbst in n8n mit Testdaten durchlaufen lassen hat. */
  getestet: boolean;
}

export interface AnleitungsSchritt {
  titel: string;
  text: string;
}

export const VORLAGEN: readonly Vorlage[] = [
  {
    slug: 'rechnungseingang-postfach',
    title: 'Rechnungseingang aus dem Postfach',
    branche: 'alle',
    lead: 'Rechnungen kommen per E-Mail. Diese n8n-Vorlage legt jeden PDF-Anhang umbenannt in einem Ordner ab und sagt Ihnen Bescheid.',
    beschreibung: [
      'Rechnungen kommen als PDF-Anhang, verteilt über den Tag, oft zwischen Werbung und Kundenmails. Jemand muss sie herausziehen, sinnvoll benennen und dort ablegen, wo die Buchhaltung sie findet. Pro Rechnung sind das ein, zwei Minuten. Aber es bleibt gern liegen, und am Monatsende fehlt die Hälfte.',
      'Die Vorlage schaut regelmäßig in ein Postfach, nimmt jeden PDF-Anhang aus neuen Mails und legt ihn mit Datum und Absender im Dateinamen in einen Ordner in Google Drive. Danach bekommen Sie eine kurze Mail mit der Liste der abgelegten Dateien.',
      'Am besten richten Sie dafür ein eigenes Postfach ein, etwa rechnung@ihre-firma.de, und geben diese Adresse bei Ihren Lieferanten an. Die Vorlage markiert verarbeitete Mails als gelesen.',
    ],
    schritte: [
      { name: 'Neue E-Mail', text: 'Der Auslöser fragt das Postfach per IMAP ab und holt ungelesene Mails samt Anhängen.' },
      { name: 'PDFs filtern', text: 'Ein Code-Knoten behält nur PDF-Anhänge und baut den neuen Dateinamen aus Datum, Absender und Originalname.' },
      { name: 'Ablegen', text: 'Jede PDF landet in dem Drive-Ordner, den Sie angeben.' },
      { name: 'Bescheid geben', text: 'Einmal pro Durchlauf geht eine Mail an Sie mit allen neuen Dateinamen.' },
    ],
    benoetigt: [
      'n8n, selbst betrieben oder als n8n Cloud',
      'IMAP-Zugang zum Rechnungspostfach: Server, Benutzername und Passwort oder App-Passwort',
      'Ein Google-Konto mit Zugriff auf Google Drive',
      'Einen SMTP-Zugang für die Benachrichtigung, meist beim selben Anbieter wie das Postfach',
    ],
    platzhalter: [
      { name: 'PLATZHALTER_ORDNER_ID_RECHNUNGEN', text: 'ID des Drive-Ordners. Sie steht in der Adresszeile hinter /folders/, wenn Sie den Ordner öffnen.' },
      { name: 'PLATZHALTER_ABSENDER', text: 'Adresse, von der die Benachrichtigung kommt.' },
      { name: 'PLATZHALTER_EMPFAENGER', text: 'Ihre Adresse oder die Ihrer Buchhaltung.' },
    ],
    grenzen: [
      'Rechnungen, die nur als Link im Mailtext stehen, etwa aus Kundenportalen, erkennt die Vorlage nicht.',
      'Jede PDF wird abgelegt, auch ein Prospekt oder eine AGB-Datei. Wer das trennen will, braucht einen weiteren Prüfschritt, zum Beispiel mit KI.',
      'Statt Google Drive geht auch OneDrive, Dropbox oder ein Ordner auf Ihrem Server. Dafür tauschen Sie den Knoten zum Ablegen aus.',
    ],
    datei: '/vorlagen/rechnungseingang-postfach.json',
    getestet: false,
  },
  {
    slug: 'anfragen-erfassen',
    title: 'Anfragen aus dem Website-Formular erfassen',
    seoTitle: 'n8n-Vorlage: Anfragen aus dem Formular erfassen',
    branche: 'alle',
    lead: 'Jede Anfrage aus Ihrem Website-Formular landet als Zeile in Google Sheets, und der Absender bekommt sofort eine Bestätigung. n8n-Vorlage mit Anleitung.',
    beschreibung: [
      'Anfragen kommen oft als formlose Mail aus dem Kontaktformular. Wer gerade Zeit hat, antwortet. Ob jemand schon geantwortet hat oder die Anfrage untergegangen ist, weiß am Ende keiner genau.',
      'Die Vorlage nimmt die Daten direkt vom Formular entgegen, bringt die Felder in eine feste Form und schreibt sie als neue Zeile in eine Tabelle. Der Absender bekommt eine kurze Bestätigung, dass seine Anfrage angekommen ist. Die Tabelle ist danach Ihre Liste aller Anfragen, mit einer Spalte für den Status.',
      'Fehlen Name oder E-Mail-Adresse, schreibt die Vorlage nichts in die Tabelle und meldet dem Formular einen Fehler zurück.',
    ],
    schritte: [
      { name: 'Formular', text: 'Ein Webhook nimmt die Formulardaten entgegen. Ihr Formular schickt sie an die Adresse, die n8n im Knoten anzeigt.' },
      { name: 'Felder ordnen', text: 'Ein Code-Knoten findet Name, E-Mail, Telefon und Nachricht, auch wenn die Felder im Formular anders heißen, und prüft die E-Mail-Adresse.' },
      { name: 'Prüfen', text: 'Fehlt Name oder E-Mail, geht eine Fehlermeldung an das Formular zurück.' },
      { name: 'Tabelle', text: 'Die Anfrage wird als neue Zeile mit dem Status „neu“ gespeichert.' },
      { name: 'Bestätigen', text: 'Der Absender bekommt eine kurze Mail, das Formular eine Erfolgsmeldung.' },
    ],
    benoetigt: [
      'n8n mit einer öffentlich erreichbaren Adresse, damit das Formular den Webhook erreicht',
      'Ein Website-Formular, das Daten an eine eigene Adresse schicken kann. Bei den meisten Formular-Plugins lässt sich das einstellen.',
      'Ein Google-Konto mit einer Tabelle für die Anfragen',
      'Einen SMTP-Zugang für die Bestätigungsmail',
    ],
    platzhalter: [
      { name: 'PLATZHALTER-anfrage', text: 'Pfad des Webhooks. Wählen Sie etwas, das niemand errät.' },
      { name: 'PLATZHALTER_TABELLEN_ID', text: 'ID der Tabelle. Sie steht in der Adresszeile zwischen /d/ und /edit.' },
      { name: 'PLATZHALTER_ABSENDER', text: 'Adresse, von der die Bestätigung kommt.' },
      { name: 'PLATZHALTER_ANTWORTZEIT', text: 'Bis wann Sie sich melden, zum Beispiel „24 Stunden“.' },
      { name: 'PLATZHALTER_FIRMENNAME', text: 'Ihr Firmenname unter der Bestätigung.' },
    ],
    grenzen: [
      'Der Webhook ist öffentlich. Gegen Spam hilft ein verstecktes Feld im Formular oder ein geheimer Header, den n8n prüft. Beides ist in der Vorlage nicht eingebaut.',
      'Die Anfragen liegen danach in Google Sheets. Das gehört in Ihre Datenschutzerklärung und braucht einen Vertrag zur Auftragsverarbeitung mit Google.',
      'Die Bestätigung ist ein fester Text. Eine Antwort auf das eigentliche Anliegen schreibt die Vorlage nicht.',
    ],
    datei: '/vorlagen/anfragen-erfassen.json',
    getestet: false,
  },
  {
    slug: 'angebot-nachfassen',
    title: 'Angebote automatisch nachfassen',
    branche: 'alle',
    lead: 'Offene Angebote, die älter als eine Woche sind, bekommen einen fertigen Mail-Entwurf zum Nachfassen. Abschicken tun Sie selbst. n8n-Vorlage mit Anleitung.',
    beschreibung: [
      'Ein Angebot ist raus, der Kunde meldet sich nicht. Nachfassen wäre richtig, aber im Alltag geht es unter. Nach drei Wochen ist es dann unangenehm, und der Auftrag ist oft woanders gelandet.',
      'Die Vorlage liest jeden Werktag um 9 Uhr Ihre Angebotsliste in Google Sheets. Für jedes Angebot mit dem Status „offen“, das älter als sieben Tage ist und noch nicht nachgefasst wurde, legt sie in Gmail einen Entwurf an. Danach trägt sie das Datum in die Spalte „Nachgefasst“ ein, damit kein Kunde zwei Erinnerungen bekommt.',
      'Abgeschickt wird nichts automatisch. Sie öffnen morgens Ihre Entwürfe, lesen kurz drüber, ändern bei Bedarf einen Satz und senden. Die Zahl der Tage stellen Sie oben im Code-Knoten ein.',
    ],
    schritte: [
      { name: 'Zeitplan', text: 'Startet montags bis freitags um 9 Uhr.' },
      { name: 'Liste lesen', text: 'Liest alle Zeilen aus dem Blatt „Angebote“.' },
      { name: 'Fällige finden', text: 'Ein Code-Knoten behält nur offene Angebote mit E-Mail-Adresse, die älter als sieben Tage sind und noch kein Datum unter „Nachgefasst“ haben.' },
      { name: 'Entwurf', text: 'Für jedes fällige Angebot entsteht ein Mail-Entwurf in Gmail, adressiert an den Ansprechpartner.' },
      { name: 'Status setzen', text: 'In der Zeile steht danach das heutige Datum unter „Nachgefasst“.' },
    ],
    benoetigt: [
      'n8n, selbst betrieben oder als n8n Cloud',
      'Ein Google-Konto mit Gmail und einer Tabelle für Ihre Angebote',
      'Eine Angebotsliste mit den Spalten Angebotsnummer, Kunde, Ansprechpartner, E-Mail, Angebotsdatum, Status und Nachgefasst',
    ],
    platzhalter: [
      { name: 'PLATZHALTER_TABELLEN_ID', text: 'ID der Angebotsliste, steht in zwei Knoten. Sie finden sie in der Adresszeile zwischen /d/ und /edit.' },
      { name: 'PLATZHALTER_IHR_NAME', text: 'Ihr Name unter der Mail.' },
    ],
    grenzen: [
      'Die Liste muss gepflegt sein. Steht ein angenommenes Angebot noch auf „offen“, bekommt der Kunde eine überflüssige Nachfrage.',
      'Wer Angebote in einer Branchensoftware schreibt, braucht statt der Tabelle eine Anbindung an diese Software. Ob es dafür eine Schnittstelle gibt, klären wir im Einzelfall.',
      'Mit Outlook statt Gmail tauschen Sie den Gmail-Knoten gegen den Outlook-Knoten von n8n, der ebenfalls Entwürfe anlegen kann.',
    ],
    datei: '/vorlagen/angebot-nachfassen.json',
    getestet: false,
  },
];

/** Allgemeine Anleitung, gilt für jede Vorlage. */
export const ANLEITUNG: readonly AnleitungsSchritt[] = [
  {
    titel: 'Vorlage in n8n importieren',
    text: 'Laden Sie die JSON-Datei herunter. Öffnen Sie in n8n einen neuen, leeren Workflow, klicken Sie oben rechts auf das Menü mit den drei Punkten und wählen Sie „Import from File“. Alternativ öffnen Sie die Datei in einem Texteditor, kopieren den Inhalt und fügen ihn mit Strg+V (am Mac Cmd+V) in die leere Arbeitsfläche ein.',
  },
  {
    titel: 'Zugangsdaten anlegen',
    text: 'Die Vorlage enthält keine Zugangsdaten. Öffnen Sie jeden Knoten mit einem Warnsymbol und legen Sie unter „Credential“ einen neuen Zugang an, etwa für Ihr Postfach oder Ihr Google-Konto. n8n speichert die Zugangsdaten verschlüsselt in Ihrer eigenen Instanz.',
  },
  {
    titel: 'Platzhalter ersetzen',
    text: 'Alle Stellen, die Sie anpassen müssen, beginnen mit PLATZHALTER. Die Liste steht weiter oben auf dieser Seite und als Notiz in der Vorlage selbst.',
  },
  {
    titel: 'Testen',
    text: 'Klicken Sie auf „Execute workflow“ und lösen Sie den Ablauf einmal mit Testdaten aus. Danach öffnen Sie jeden Knoten und prüfen, was herauskommt. Erst wenn jeder Knoten das Erwartete zeigt, geht es weiter.',
  },
  {
    titel: 'Einschalten',
    text: 'Schalten Sie den Workflow oben rechts scharf. Je nach n8n-Version heißt der Schalter „Active“ oder „Publish“. Schauen Sie in der ersten Woche täglich unter „Executions“ nach, ob alle Durchläufe durchgelaufen sind.',
  },
];

/** Gemeinsames Muster aller Vorlagen, für das Schaubild auf der Übersicht. */
export const VORLAGEN_MUSTER: readonly string[] = ['Auslöser', 'Prüfen', 'Ablegen', 'Bescheid geben'];

export const VORLAGEN_FAQS: readonly Faq[] = [
  {
    q: 'Was kosten die Vorlagen?',
    a: 'Nichts. Sie laden die Datei herunter und richten sie selbst ein. Kosten entstehen nur für n8n und für die Dienste, die Sie anbinden, falls diese etwas kosten.',
  },
  {
    q: 'Brauche ich einen eigenen Server für n8n?',
    a: 'Nein. Die Vorlagen laufen in n8n Cloud und in einer selbst betriebenen n8n-Instanz. Ich betreibe n8n für meine Kunden auf Servern bei Hostinger in einem Rechenzentrum in der EU. Zum Ausprobieren reicht eine Testinstanz.',
  },
  {
    q: 'Was heißt „Wird gerade getestet“?',
    a: 'Ich gebe eine Vorlage erst zum Download frei, wenn ich sie selbst in n8n mit Testdaten durchlaufen lassen habe. Bis dahin sehen Sie Beschreibung und Anleitung, aber noch keine Datei.',
  },
  {
    q: 'Was mache ich, wenn die Vorlage bei mir nicht läuft?',
    a: 'Meist liegt es an den Zugangsdaten oder an einem Feldnamen, der in Ihrer Tabelle anders heißt. Unter „Executions“ sehen Sie, an welchem Knoten es hängt. Kommen Sie nicht weiter, schreiben Sie mir. Eine kostenlose Einrichtung verspreche ich nicht, eine ehrliche Einschätzung schon.',
  },
  {
    q: 'Worin unterscheidet sich eine Vorlage von Ihrem Angebot?',
    a: 'Eine Vorlage ist ein Startpunkt für einen einfachen, allgemeinen Ablauf. Im Angebot automatisiere ich in 4 Wochen den Ablauf, der Sie am meisten Zeit kostet, passend zu Ihren Programmen, mit Sonderfällen, Fehlermeldungen und Garantie.',
  },
];

export function vorlageHref(slug: string): string {
  return `${VORLAGEN_PATH}/${slug}`;
}

export function findVorlage(slug: string): Vorlage | null {
  return VORLAGEN.find((vorlage) => vorlage.slug === slug) ?? null;
}

export function vorlageStatus(vorlage: Pick<Vorlage, 'getestet'>): string {
  return vorlage.getestet ? 'Getestet' : 'Wird gerade getestet';
}
