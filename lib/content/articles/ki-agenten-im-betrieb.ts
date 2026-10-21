import type { Article } from '@/lib/types';
import { monthLabel } from './dates';

const PUBLISH_ISO = '2026-11-03';

export const kiAgentenImBetrieb: Article = {
  id: 104,
  slug: 'ki-agenten-im-betrieb',
  title: 'KI-Agenten im Betrieb: Was heute geht und was nicht.',
  seoTitle: 'KI-Agenten für Unternehmen: Was heute wirklich geht',
  date: monthLabel(PUBLISH_ISO),
  datePublished: PUBLISH_ISO,
  read_minutes: 6,
  category: 'KI ohne Hype',
  lead: 'KI-Agenten sollen ganze Aufgaben allein erledigen. Was davon im kleinen Betrieb heute verlässlich klappt, wo es hakt und warum ein Mensch die Freigabe behält.',
  body: [
    { kind: 'p', text: 'Wer sich gerade über KI informiert, kommt an KI-Agenten nicht vorbei. In den Vorführungen liest ein Agent das Postfach, beantwortet Kunden, legt Termine an und schreibt Rechnungen, ohne dass jemand hinschaut. Die Videos sind beeindruckend. Mit dem Alltag in einem Handwerksbetrieb oder einer Kanzlei haben sie wenig zu tun.' },
    { kind: 'p', text: 'Ich setze KI jeden Tag ein, Agenten eingeschlossen. Deshalb hier meine ehrliche Einschätzung: was ein KI-Agent ist, was er in einem kleinen Betrieb heute verlässlich kann und warum ich trotzdem meistens etwas anderes baue.' },

    { kind: 'h2', text: 'Was ist ein KI-Agent?' },
    { kind: 'p', text: 'Ein KI-Werkzeug wie ChatGPT antwortet auf eine Frage. Ein KI-Agent bekommt dagegen ein Ziel und entscheidet selbst, welche Schritte er dafür geht. Er kann Werkzeuge bedienen: im Kalender nachsehen, eine E-Mail schreiben, im Internet suchen, einen Eintrag in der Kundenliste anlegen. Nach jedem Schritt schaut er auf das Ergebnis und überlegt, was als Nächstes kommt. Technisch steckt dahinter dasselbe Sprachmodell wie hinter ChatGPT oder Claude. Neu ist, dass es Werkzeuge in die Hand bekommt und in einer Schleife arbeitet.' },
    { kind: 'p', text: 'Der Unterschied zu einem festen Ablauf liegt genau in diesem Überlegen. Ein fester Ablauf macht immer dasselbe: Kommt eine Anfrage, lege den Kontakt an, dann schicke die Bestätigung. Ein Agent entscheidet jedes Mal neu, was zu tun ist. Das macht ihn beweglich. Es macht ihn auch schwer berechenbar.' },

    { kind: 'h2', text: 'KI-Agent, Chatbot, Automatisierung: Was ist was?' },
    { kind: 'p', text: 'Die Begriffe gehen oft durcheinander, auch in Angeboten. Ein Chatbot ist ein Fenster auf der Website, in dem Besucher Fragen stellen. Er antwortet, handelt aber meist nicht. Eine Automatisierung ist ein fester Ablauf zwischen Ihren Programmen, der nach Regeln arbeitet und an einzelnen Stellen KI enthalten kann. Ein Agent sitzt dazwischen: Er handelt selbst, aber ohne festen Weg.' },
    { kind: 'p', text: 'Wenn Ihnen jemand einen „KI-Agenten“ anbietet, fragen Sie nach, welches der drei gemeint ist. Oft steckt hinter dem Wort eine ganz gewöhnliche Automatisierung. Das ist kein Nachteil. Aber Sie sollten wissen, was Sie kaufen.' },

    { kind: 'h2', text: 'Was KI-Agenten für Unternehmen heute verlässlich können' },
    { kind: 'p', text: 'Es gibt Aufgaben, bei denen Agenten schon gut funktionieren. Gemeinsam ist ihnen, dass ein Fehler wenig kostet und ein Mensch das Ergebnis sieht, bevor etwas passiert.' },
    { kind: 'p', text: 'Recherche ist so ein Fall. Ein Agent kann zu einem neuen Interessenten die Website lesen, die wichtigsten Angaben zusammentragen und Ihnen eine kurze Übersicht hinlegen. Liegt er bei einem Punkt daneben, merken Sie es beim Lesen.' },
    { kind: 'p', text: 'Entwürfe gehören dazu. Ein Agent kann eine Kundenanfrage lesen, im Kalender nach freien Terminen schauen und eine Antwort vorbereiten, die Sie nur noch prüfen und abschicken.' },
    { kind: 'p', text: 'Auch beim Sortieren hilft er. Eingehende E-Mails nach Anliegen ordnen, Anhänge in den richtigen Ordner legen, Dringendes markieren. Hier reicht allerdings oft schon ein einzelner KI-Schritt in einem festen Ablauf.' },

    { kind: 'h2', text: 'Wo KI-Agenten heute noch scheitern' },
    { kind: 'p', text: 'Schwierig wird es, sobald der Agent allein handelt und ein Fehler etwas kostet. Ein Agent, der einem Kunden einen falschen Preis nennt, einen Termin doppelt vergibt oder eine Rechnung an die falsche Adresse schickt, richtet echten Schaden an. Und KI macht Fehler, die gut klingen. Sie schreibt eine falsche Angabe mit derselben Sicherheit wie eine richtige.' },
    { kind: 'p', text: 'Dazu kommt: Ein Agent geht nicht jedes Mal denselben Weg. Was am Montag funktioniert hat, kann am Dienstag anders laufen, weil die Anfrage etwas anders formuliert war. Für einen Betrieb, der sich auf seine Abläufe verlassen muss, ist das ein Problem. Fehler lassen sich schwer nachvollziehen, wenn niemand genau weiß, welche Schritte der Agent gegangen ist.' },
    { kind: 'p', text: 'Und die Kosten. Ein Agent ruft das KI-Modell oft mehrmals pro Aufgabe auf, weil er nach jedem Schritt neu überlegt. Das ist langsamer und teurer als ein fester Ablauf, der das Modell nur an einer Stelle braucht.' },
    { kind: 'p', text: 'Bleibt der Datenschutz. Ein Agent, der frei im Postfach liest und im Internet sucht, sieht viel mehr Daten als ein einzelner KI-Schritt, der nur eine bestimmte E-Mail bekommt. Je mehr er sehen darf, desto genauer muss geklärt sein, wohin diese Daten gehen.' },
    { kind: 'q', text: 'Ein Agent, der in neun von zehn Fällen richtig liegt, klingt gut. Bis Sie ausrechnen, wie oft im Monat der zehnte Fall vorkommt.' },

    { kind: 'h2', text: 'Warum ich meistens feste Abläufe mit KI an einzelnen Stellen baue' },
    { kind: 'p', text: 'In den Betrieben, für die ich arbeite, lassen sich die meisten Abläufe gut beschreiben. Eine Anfrage kommt rein, die Daten müssen in die Branchensoftware, ein Angebot wird vorbereitet, nach einer Woche wird nachgefasst. Dafür braucht es keinen Agenten, der sich jedes Mal neu überlegt, was zu tun ist. Es braucht einen Ablauf, der jedes Mal dasselbe macht.' },
    { kind: 'p', text: 'KI setze ich an den Stellen ein, an denen eine feste Regel nicht weiterkommt. Wenn aus einer frei formulierten E-Mail die Adresse und das Anliegen herausgelesen werden müssen. Wenn ein Entwurf für eine Antwort entstehen soll. Der Rest des Ablaufs bleibt fest, nachvollziehbar und günstig.' },
    { kind: 'p', text: 'Ein Beispiel aus dem Handwerk: Eine Anfrage kommt per E-Mail, mit drei Fotos und einer Beschreibung in ganzen Sätzen. Ein KI-Schritt liest Name, Adresse und Art der Arbeit heraus. Danach übernimmt ein fester Ablauf. Er legt den Kontakt an, sortiert die Fotos in den Kundenordner und setzt einen Angebotsentwurf aus Ihren Textbausteinen zusammen. Sie prüfen und geben frei. Ob die KI die Adresse richtig gelesen hat, sehen Sie in dem Moment, in dem Sie draufschauen.' },

    { kind: 'h2', text: 'Wer kontrolliert einen KI-Agenten?' },
    { kind: 'p', text: 'Diese Frage stelle ich bei jedem Einsatz von KI, ob Agent oder einzelner Schritt. Meine Antwort: ein Mensch, bevor etwas nach draußen geht. Ein Angebot, eine Antwort an einen Kunden, eine Zahlung. An diesen Stellen baue ich eine Freigabe ein. Sie bekommen den Entwurf, schauen kurz drauf und geben frei. Das dauert Sekunden und erspart Ihnen den Anruf eines verärgerten Kunden.' },
    { kind: 'p', text: 'Genauso wichtig: Der Ablauf muss weiterlaufen, wenn die KI danebenliegt. Erkennt sie eine Anfrage nicht, landet die bei einem Menschen statt im Nirgendwo. Und jeder Schritt wird protokolliert, damit sich später nachvollziehen lässt, was passiert ist.' },
    { kind: 'p', text: 'Setze ich doch einmal einen Agenten ein, bekommt er nur die Rechte, die er braucht. Darf er Termine vorschlagen, braucht er keinen Zugriff auf die Buchhaltung. Darf er Entwürfe schreiben, muss er nicht selbst versenden können. Was er nicht darf, kann er auch nicht falsch machen.' },

    { kind: 'h2', text: 'Brauche ich KI-Agenten in meinem Betrieb?' },
    { kind: 'p', text: 'Wahrscheinlich noch nicht. Wenn Ihnen jemand einen KI-Agenten verkaufen will, der Ihr Büro allein führt, fragen Sie, was passiert, wenn der Agent sich irrt. Und wer das Ergebnis sieht, bevor es beim Kunden ankommt. Lassen Sie sich außerdem sagen, was ein Durchlauf kostet, wenn er zwanzigmal am Tag läuft.' },
    { kind: 'p', text: 'Die Technik entwickelt sich schnell. Was heute unzuverlässig ist, kann in einem Jahr gut funktionieren, und ich schaue mir das laufend an. Bis dahin baue ich lieber einen Ablauf, der jeden Tag verlässlich dasselbe tut, als einen Agenten, der manchmal glänzt und manchmal Unsinn macht.' },
    { kind: 'p', text: 'Wenn Sie wissen möchten, wo in Ihrem Betrieb KI wirklich hilft, erzählen Sie mir im Erstgespräch, welcher Ablauf Sie jede Woche am meisten Zeit kostet. Dann sage ich Ihnen, ob dafür ein Agent, ein fester Ablauf oder gar keine Technik der richtige Weg ist.' },
  ],
  notes: [
    'Ich setze Modelle von Anthropic (Claude) und OpenAI ein, jeweils über die Schnittstelle für Unternehmen. Dort werden Ihre Daten nicht zum Training verwendet.',
    'Für Agenten gilt dasselbe wie für jede KI im Betrieb: Kundendaten nur an Dienste, die einen Vertrag zur Auftragsverarbeitung anbieten.',
  ],
  related: [
    { label: 'KI im Betrieb: Was hilft und was nur gut klingt', href: '/wissen/ki-im-betrieb-ohne-hype' },
    { label: 'ChatGPT im Betrieb', href: '/wissen/chatgpt-im-betrieb' },
    { label: 'n8n, Make oder Zapier?', href: '/wissen/n8n-make-oder-zapier' },
    { label: 'KI-Berater für Prozessautomatisierung', href: '/ki-beratung' },
  ],
};
