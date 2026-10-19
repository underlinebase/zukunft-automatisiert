import type { Article } from '@/lib/types';
import { monthLabel } from './dates';

const PUBLISH_ISO = '2026-10-23';

export const n8nMakeOderZapier: Article = {
  id: 103,
  slug: 'n8n-make-oder-zapier',
  title: 'n8n, Make oder Zapier: Welches Werkzeug passt zu Ihrem Betrieb?',
  seoTitle: 'n8n, Make oder Zapier? Ein ehrlicher Vergleich',
  date: monthLabel(PUBLISH_ISO),
  datePublished: PUBLISH_ISO,
  read_minutes: 6,
  category: 'Werkzeuge',
  lead: 'n8n, Make oder Zapier: drei Werkzeuge für Workflow-Automatisierung im Vergleich. Datenstandort, Kosten, Einarbeitung und was zu kleinen Betrieben passt.',
  body: [
    { kind: 'p', text: 'Die kurze Antwort vorweg. Zapier ist am schnellsten eingerichtet. Make kommt mit verzweigten Abläufen besser zurecht und bleibt dabei übersichtlich. n8n gibt Ihnen die meiste Kontrolle über Ihre Daten, verlangt aber mehr Einarbeitung oder jemanden, der es für Sie einrichtet. Welches passt, hängt weniger vom Werkzeug ab als von Ihrem Ablauf und davon, wer ihn später pflegt.' },
    { kind: 'p', text: 'Ich setze meistens n8n ein. Warum, habe ich in einem eigenen Artikel beschrieben. Hier geht es um den Vergleich, und ich versuche, fair zu bleiben. Alle drei sind ordentliche Werkzeuge. Keines davon löst ein Problem, das vorher niemand verstanden hat.' },

    { kind: 'h2', text: 'Was die drei Werkzeuge gemeinsam haben' },
    { kind: 'p', text: 'n8n, Make und Zapier verbinden Programme, die nicht von sich aus miteinander reden. Ein Auslöser startet den Ablauf, zum Beispiel eine neue E-Mail oder ein ausgefülltes Formular. Danach folgen Schritte: Angaben herausziehen, in ein anderes Programm schreiben, eine Nachricht verschicken. Alle drei bringen fertige Bausteine für viele gängige Programme mit und können an einzelnen Stellen KI-Modelle einbinden.' },
    { kind: 'p', text: 'Für einen einfachen Ablauf wie „Formular ausgefüllt, Kontakt in die Tabelle, Bestätigung an den Kunden“ ist es fast egal, welches Werkzeug Sie nehmen. Die Unterschiede zeigen sich bei Kundendaten, bei vielen Vorgängen am Tag und bei Abläufen mit vielen Abzweigungen.' },

    { kind: 'h2', text: 'Wo liegen meine Daten bei n8n, Make und Zapier?' },
    { kind: 'p', text: 'Für viele Betriebe ist das die wichtigste Frage. Ein Makler verarbeitet Daten von Interessenten, eine Kanzlei Daten von Mandanten. Durch jedes dieser Werkzeuge laufen diese Daten hindurch.' },
    { kind: 'p', text: 'Zapier ist ein amerikanischer Dienst und läuft nur in der eigenen Cloud des Anbieters. Rechnen Sie damit, dass Ihre Daten in den USA verarbeitet werden. Verboten ist das nicht. Es braucht aber einen Vertrag zur Auftragsverarbeitung und eine saubere Prüfung, auf welcher Grundlage die Daten in die USA gehen.' },
    { kind: 'p', text: 'Make läuft ebenfalls nur als Cloud-Dienst. Beim Anlegen einer Organisation können Sie aber ein Rechenzentrum in der EU wählen. Für viele kleine Betriebe ist das ein brauchbarer Mittelweg. Nachträglich umstellen lässt sich die Region allerdings nicht.' },
    { kind: 'p', text: 'n8n gibt es als Cloud-Dienst und zum Betrieb auf einem eigenen Server. Auf einem eigenen Server bestimmen Sie, wo die Daten liegen. Meine Installationen laufen bei Hostinger in einem Rechenzentrum in der EU. Der Preis dafür: Jemand muss den Server einrichten, aktuell halten und sichern.' },
    { kind: 'p', text: 'Ein Punkt wird dabei gern übersehen. Schickt der Ablauf Text an ein KI-Modell, verlassen die Daten auch an dieser Stelle das Werkzeug. Der Standort von n8n, Make oder Zapier sagt deshalb noch nicht alles. Prüfen Sie jeden Dienst, der im Ablauf hängt.' },
    { kind: 'q', text: 'Kein Werkzeug ist von sich aus datenschutzkonform. Es kommt darauf an, wie Sie es einsetzen.' },

    { kind: 'h2', text: 'Welches Werkzeug ist günstiger?' },
    { kind: 'p', text: 'Das hängt fast ganz davon ab, wie viele Vorgänge Ihr Ablauf hat. Konkrete Preise nenne ich hier bewusst nicht. Die Anbieter ändern ihre Preismodelle regelmäßig, jede Zahl wäre schnell veraltet. Das Prinzip bleibt aber gleich.' },
    { kind: 'p', text: 'Zapier und Make rechnen nach Menge ab. Zapier zählt jeden erfolgreich ausgeführten Schritt als sogenannten Task. Make zieht für fast jeden Baustein, der etwas tut, Credits ab. Ein Ablauf mit zehn Schritten, der jeden Tag fünfzigmal läuft, verbraucht so schnell ein großes Kontingent. Wer klein anfängt, zahlt wenig. Wer wächst, merkt es auf der Rechnung.' },
    { kind: 'p', text: 'n8n rechnet in der Cloud nach Ausführungen ab. Eine Ausführung ist ein kompletter Durchlauf, egal wie viele Schritte er hat. Auf einem eigenen Server fällt für n8n keine Lizenz pro Nutzer an, wohl aber die Servermiete und die Arbeit für Pflege und Updates.' },
    { kind: 'p', text: 'Bei wenigen, einfachen Abläufen ist der Unterschied klein. Bei vielen Vorgängen am Tag oder langen Abläufen kann er groß werden. Rechnen Sie es mit Ihren eigenen Mengen auf den Preisseiten nach, bevor Sie sich festlegen.' },

    { kind: 'h2', text: 'Wie schwer ist der Einstieg?' },
    { kind: 'p', text: 'Zapier ist das einfachste der drei. Sie klicken sich durch ein paar Fragen, und oft läuft der erste Ablauf nach einer halben Stunde. Das ist sein größter Vorteil. Bei Abläufen mit vielen Wenn-dann-Fällen wird es dagegen schnell unübersichtlich.' },
    { kind: 'p', text: 'Make zeigt den Ablauf als Bild mit Kreisen und Linien. Das hilft beim Verstehen, gerade wenn ein Ablauf mehrere Wege hat. Die Einarbeitung dauert etwas länger als bei Zapier und zahlt sich aus, sobald es komplizierter wird.' },
    { kind: 'p', text: 'n8n sieht ähnlich aus wie Make, richtet sich aber stärker an Leute mit technischem Verständnis. Wer möchte, kann an jeder Stelle eigenen Programmcode einfügen. Für einen Inhaber, der selbst basteln will, ist das oft zu viel. Für jemanden, der Abläufe für andere baut, ist es ein Vorteil.' },
    { kind: 'p', text: 'Wichtiger als der erste Ablauf ist allerdings der zwanzigste. Hängt ein Ablauf nach einem halben Jahr, muss jemand verstehen, was er tut. Bei Zapier gelingt das oft leicht, weil die Abläufe einfach sind. Bei Make und n8n hilft die bildliche Darstellung, solange die einzelnen Schritte ordentlich benannt und beschrieben sind.' },

    { kind: 'h2', text: 'n8n, Make oder Zapier: Wann passt welches?' },
    { kind: 'p', text: 'Zapier passt, wenn Sie selbst schnell eine einfache Verbindung bauen wollen, wenige Vorgänge haben und keine sensiblen Kundendaten durch den Ablauf gehen. Etwa wenn neue Anmeldungen für Ihren Newsletter in einer Tabelle landen sollen.' },
    { kind: 'p', text: 'Make passt, wenn Ihre Abläufe mehrere Wege haben, Sie oder ein Mitarbeiter sich einarbeiten möchten und ein Rechenzentrum in der EU ausreicht.' },
    { kind: 'p', text: 'n8n passt, wenn Kundendaten im Spiel sind, die Abläufe länger werden oder viele Vorgänge zusammenkommen. Vorausgesetzt, jemand kümmert sich um den Server. Das kann ein Dienstleister sein oder ein technisch fitter Mitarbeiter.' },
    { kind: 'p', text: 'Und manchmal passt keins davon. Bringt Ihre Branchensoftware schon eine Funktion mit, die das Problem löst, nehmen Sie die. Eine Einstellung im E-Mail-Programm schlägt jede Automatisierung, die man pflegen muss.' },

    { kind: 'h2', text: 'Workflow-Automatisierung: Worauf es mehr ankommt als auf das Werkzeug' },
    { kind: 'p', text: 'In den Vergleichen im Netz geht es meist um die Zahl der Bausteine und um Preisstufen. In der Praxis scheitern Abläufe an anderen Dingen. Niemand hat aufgeschrieben, wie der Ablauf heute läuft. Die Sonderfälle wurden vergessen. Oder nach einem halben Jahr weiß keiner mehr, was der Ablauf eigentlich tut.' },
    { kind: 'p', text: 'Fragen Sie deshalb vor der Wahl des Werkzeugs: Wer baut den Ablauf? Wer schaut nach, wenn er hängt? Und gehört er Ihnen, mit allen Zugängen, wenn Sie den Dienstleister wechseln? Bei n8n auf eigenem Server ist die letzte Frage leicht zu beantworten. Bei Zapier und Make sollte das Konto auf Ihren Namen laufen, nicht auf den des Dienstleisters.' },
    { kind: 'q', text: 'Ein mittelmäßiges Werkzeug mit einem gut verstandenen Ablauf schlägt das beste Werkzeug mit einem schlecht verstandenen.' },

    { kind: 'h2', text: 'Warum ich trotzdem meistens n8n nehme' },
    { kind: 'p', text: 'Ich arbeite für Handwerksbetriebe, Makler, Kanzleien, Agenturen und Coaches. Fast immer laufen dabei Kundendaten durch den Ablauf. Mir ist wichtig, dass diese Daten auf einem Server in der EU bleiben und keine Kosten pro Schritt entstehen, wenn das Geschäft wächst. Ein anderer Dienstleister soll jederzeit übernehmen können. Das spricht in den meisten Fällen für n8n.' },
    { kind: 'p', text: 'Wenn bei Ihnen schon Make oder Zapier läuft und gut funktioniert, baue ich nicht alles um. Dann schauen wir uns an, ob der neue Ablauf dort gut aufgehoben ist. Das Werkzeug ist ein Mittel, kein Glaubensbekenntnis.' },
  ],
  notes: [
    'Anbieter: Zapier Inc. (USA), Make (früher Integromat, gehört heute zu Celonis), n8n GmbH (Berlin).',
    'Abrechnungsmodelle laut den Preisseiten der Anbieter, Stand Oktober 2026: Zapier nach Tasks, Make nach Credits, n8n Cloud nach Ausführungen. Prüfen Sie die aktuellen Bedingungen vor einer Entscheidung selbst.',
    'Für alle drei gilt: Erst einen Vertrag zur Auftragsverarbeitung abschließen, dann Kundendaten durchschicken.',
  ],
  related: [
    { label: 'Warum ich meistens n8n einsetze', href: '/wissen/warum-ich-meistens-n8n-einsetze' },
    { label: 'Datenschutz bei Automatisierung', href: '/wissen/datenschutz-bei-automatisierung' },
    { label: 'Was kostet KI-Automatisierung?', href: '/wissen/was-kostet-ki-automatisierung' },
    { label: 'KI-Beratung für kleine Betriebe', href: '/ki-beratung' },
  ],
};
