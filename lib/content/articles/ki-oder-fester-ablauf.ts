import type { Article } from '@/lib/types';
import { monthLabel } from './dates';

const PUBLISH_ISO = '2026-11-10';

export const kiOderFesterAblauf: Article = {
  id: 106,
  slug: 'ki-oder-fester-ablauf',
  title: 'KI oder fester Ablauf? Wann Sie KI brauchen und wann nicht.',
  seoTitle: 'KI-Automatisierung: Wann brauche ich KI wirklich?',
  date: monthLabel(PUBLISH_ISO),
  datePublished: PUBLISH_ISO,
  read_minutes: 6,
  category: 'KI ohne Hype',
  lead: 'KI-Automatisierung ist nicht immer die beste Wahl. Wann feste Wenn-dann-Regeln reichen und wann KI wirklich hilft, mit Beispielen und Kosten.',
  body: [
    { kind: 'p', text: 'Zwei Aufgaben aus demselben Maklerbüro. Die erste: Jede Anfrage über das Immobilienportal bekommt sofort das Exposé zum Objekt. Die zweite: Ein Interessent schreibt eine lange E-Mail, in der irgendwo steht, dass er ab März sucht, zwei Kinder hat und auf keinen Fall an eine Hauptstraße will. Diese Angaben sollen in die Maklersoftware.' },
    { kind: 'p', text: 'Für die erste Aufgabe brauchen Sie keine KI. Für die zweite schon. Wer den Unterschied erkennt, spart Geld und Ärger. Darum geht es hier.' },

    { kind: 'h2', text: 'Was ist ein fester Ablauf?' },
    { kind: 'p', text: 'Ein fester Ablauf folgt Wenn-dann-Regeln. Wenn eine Anfrage über das Portal kommt, dann schicke das Exposé. Wenn ein Beleg im Ordner liegt, dann benenne ihn nach Datum und Lieferant. Wenn nach sieben Tagen keine Antwort da ist, dann schicke eine Erinnerung. Das Programm prüft eine Bedingung und führt einen Schritt aus. Jedes Mal gleich.' },
    { kind: 'p', text: 'Solche Abläufe sind langweilig, und das ist ihre Stärke. Sie machen keine Fehler, die nicht schon in der Regel stecken. Pro Durchlauf kosten sie praktisch nichts. Und wenn etwas schiefgeht, lässt sich genau nachvollziehen, an welcher Stelle.' },

    { kind: 'h2', text: 'Was ist KI-Automatisierung?' },
    { kind: 'p', text: 'Bei einer KI-Automatisierung steckt an mindestens einer Stelle ein KI-Modell im Ablauf. Es übernimmt Aufgaben, für die sich keine feste Regel schreiben lässt, weil die Eingabe jedes Mal anders aussieht. Eine E-Mail in ganzen Sätzen. Ein schief fotografierter Beleg. Eine Sprachnachricht vom Kunden.' },
    { kind: 'p', text: 'Die KI liest so etwas und zieht die Angaben heraus, die der Ablauf braucht: Name, Adresse, Anliegen, Betrag. Sie kann auch Text schreiben, etwa einen Entwurf für eine Antwort. Beides kann eine Regel nicht.' },

    { kind: 'h2', text: 'Wann brauche ich KI und wann reicht ein fester Ablauf?' },
    { kind: 'p', text: 'Meine Faustregel: Können Sie die Aufgabe einem neuen Mitarbeiter mit einer Checkliste erklären, reicht ein fester Ablauf. Würden Sie stattdessen sagen „Lies dir das durch und schau, was der Kunde will“, braucht es KI.' },
    { kind: 'p', text: 'Ein fester Ablauf reicht, wenn die Daten schon geordnet vorliegen. Ein Formular mit eigenen Feldern für Name, Telefon und Anliegen lässt sich ohne KI weiterverarbeiten. Dasselbe gilt für Termine aus einem Buchungskalender, Zahlen aus einer Tabelle oder Fristen, die sich aus einem Datum berechnen lassen.' },
    { kind: 'p', text: 'KI hilft, wenn Text verstanden oder geschrieben werden muss. Freie E-Mails, eingescannte Briefe, PDF-Rechnungen in wechselnden Formaten, Notizen vom Handy. Oder wenn am Ende ein Text stehen soll, der nicht jedes Mal gleich klingt, wie eine persönliche Antwort auf eine Anfrage.' },
    { kind: 'q', text: 'Die meisten Abläufe, die ich baue, bestehen zum größten Teil aus festen Regeln. KI kommt an ein oder zwei Stellen dazu.' },

    { kind: 'h2', text: 'Was kostet ein KI-Schritt im Vergleich zu einer Regel?' },
    { kind: 'p', text: 'Ein fester Ablauf kostet nach dem Bau fast nur die Servermiete. Ob er zehnmal oder tausendmal am Tag läuft, macht kaum einen Unterschied.' },
    { kind: 'p', text: 'Ein KI-Schritt kostet bei jedem Durchlauf Geld. Abgerechnet wird nach der Textmenge, die das Modell liest und schreibt. Pro Vorgang sind das meist kleine Beträge, bei vielen Vorgängen summiert es sich. Dazu kommt die Zeit: Ein KI-Schritt braucht oft einige Sekunden, eine Regel ist praktisch sofort fertig. Für eine Antwort an einen Kunden ist das egal. Für tausend Belege am Monatsende nicht ganz.' },
    { kind: 'p', text: 'Darum baue ich KI nur dort ein, wo sie ihr Geld wert ist. Steht eine Angabe schon in einem Formularfeld, lasse ich sie nicht von einer KI aus einem Text herauslesen.' },

    { kind: 'h2', text: 'Welche Fehler macht KI, und welche ein fester Ablauf?' },
    { kind: 'p', text: 'Ein fester Ablauf scheitert laut. Fehlt ein Pflichtfeld oder ist ein Programm nicht erreichbar, bricht er ab und meldet sich. Das ist ärgerlich, aber man merkt es.' },
    { kind: 'p', text: 'KI scheitert leise. Sie liest eine Hausnummer falsch, verwechselt Vor- und Nachnamen oder ergänzt eine Angabe, die gar nicht im Text stand. Das Ergebnis sieht trotzdem ordentlich aus. Genau deshalb baue ich hinter jeden KI-Schritt eine Prüfung. Entweder schaut ein Mensch drauf, bevor etwas rausgeht, oder der Ablauf prüft das Ergebnis gegen eine Regel. Eine Postleitzahl hat fünf Ziffern. Die Einzelbeträge einer Rechnung ergeben die Summe. Passt etwas nicht, landet der Fall bei einem Menschen.' },

    { kind: 'h2', text: 'Beispiele: KI oder fester Ablauf?' },
    { kind: 'p', text: 'Terminerinnerung einen Tag vorher: fester Ablauf. Das Datum steht im Kalender, die Nachricht ist immer gleich.' },
    { kind: 'p', text: 'Anfragen aus dem Kontaktformular in die Kundenliste übertragen: fester Ablauf, solange das Formular eigene Felder hat. Steht alles in einem großen Freitextfeld, kommt ein KI-Schritt dazu.' },
    { kind: 'p', text: 'Eingangsrechnungen als PDF auslesen: meist KI, weil jeder Lieferant seine Rechnung anders aufbaut. Danach übernimmt wieder ein fester Ablauf, der die Datei benennt und ablegt.' },
    { kind: 'p', text: 'Angebot aus dem Aufmaß berechnen: fester Ablauf. Preise und Mengen gehören in eine Regel, nicht in eine KI, die sich verrechnen kann. Den Begleittext zum Angebot darf die KI vorschlagen.' },
    { kind: 'p', text: 'E-Mails im Sammelpostfach nach Anliegen sortieren: KI. Kunden schreiben, wie sie wollen, und eine Liste mit Stichworten verpasst zu viel.' },
    { kind: 'p', text: 'Fehlende Unterlagen beim Mandanten anmahnen: fester Ablauf. Welche Belege fehlen, ergibt sich aus einer Liste, und die Erinnerung geht in festen Abständen raus.' },

    { kind: 'h2', text: 'Wie sieht ein Ablauf aus, der beides verbindet?' },
    { kind: 'p', text: 'In der Praxis lautet die Frage selten „KI oder Regel“. Meist ist es eine Mischung, und die Kunst liegt darin, die KI an genau der richtigen Stelle einzusetzen. Ein Beispiel aus einer Steuerkanzlei, mit typischen Schritten.' },
    { kind: 'p', text: 'Ein Mandant schickt eine E-Mail mit drei Anhängen und schreibt dazu: „Anbei die Belege für September, die Tankquittung reiche ich nach.“ Ein fester Ablauf erkennt den Absender und ordnet die E-Mail dem richtigen Mandanten zu. Das geht über die Adresse, dafür braucht es keine KI.' },
    { kind: 'p', text: 'Dann liest ein KI-Schritt die Anhänge. Er erkennt, was eine Rechnung ist, liest Lieferant, Datum und Betrag heraus und versteht aus dem Text, dass noch eine Tankquittung kommt. Hier hilft KI wirklich, weil jede Rechnung anders aussieht und der Mandant schreibt, wie er will.' },
    { kind: 'p', text: 'Danach wieder Regeln. Die Dateien bekommen einen einheitlichen Namen und landen im Ordner des Mandanten. Die Liste der fehlenden Unterlagen wird aktualisiert. Fehlt die Tankquittung nach einer Woche noch, geht eine freundliche Erinnerung raus. Ist sich die KI bei einem Beleg unsicher, kommt er auf eine kurze Liste, die eine Mitarbeiterin am Ende des Tages durchsieht.' },
    { kind: 'p', text: 'In diesem Ablauf ist ein einziger Schritt KI. Alles andere sind Regeln.' },

    { kind: 'h2', text: 'Wo KI-Automatisierung an ihre Grenzen kommt' },
    { kind: 'p', text: 'KI trifft keine Entscheidungen, für die Sie haften. Ob ein Kunde Rabatt bekommt, ob eine Frist gilt, ob ein Mandant eine Ausnahme verdient: Das entscheiden Sie. Die KI kann Ihnen die Unterlagen dafür zusammenstellen. Die Freigabe bleibt bei einem Menschen.' },
    { kind: 'p', text: 'Wer Ihnen eine Lösung anbietet, die überall KI einsetzt, verkauft Ihnen meistens mehr Technik, als Sie brauchen. Fragen Sie bei jedem KI-Schritt: Was steht hier in der Eingabe, und warum reicht keine Regel? Kommt darauf keine klare Antwort, reicht wahrscheinlich eine Regel.' },
    { kind: 'p', text: 'Umgekehrt gilt es auch. Wer aus Prinzip auf KI verzichtet, tippt manches weiter von Hand ab, das sich gut abgeben ließe. Eingescannte Lieferscheine, handschriftliche Notizen, lange E-Mails. Hier wäre jede feste Regel ein Krampf.' },
    { kind: 'p', text: 'Im Erstgespräch schauen wir uns Ihren Ablauf Schritt für Schritt an. Danach wissen Sie, an welchen Stellen KI hilft und wo ein fester Ablauf genügt.' },
  ],
  notes: [
    'Für KI-Dienste mit Kundendaten gilt: Vertrag zur Auftragsverarbeitung und keine Verwendung Ihrer Daten zum Training.',
    'Ich setze Modelle von Anthropic (Claude) und OpenAI ein, jeweils über die Schnittstelle für Unternehmen.',
  ],
  related: [
    { label: 'KI-Agenten im Betrieb', href: '/wissen/ki-agenten-im-betrieb' },
    { label: 'Was ist Prozessautomatisierung?', href: '/wissen/was-ist-prozessautomatisierung' },
    { label: 'KI im Betrieb: Was hilft und was nur gut klingt', href: '/wissen/ki-im-betrieb-ohne-hype' },
    { label: 'KI-Beratung für kleine Betriebe', href: '/ki-beratung' },
  ],
};
