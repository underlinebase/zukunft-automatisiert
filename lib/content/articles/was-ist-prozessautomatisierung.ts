import type { Article } from '@/lib/types';
import { monthLabel } from './dates';

const PUBLISH_ISO = '2026-11-06';

export const wasIstProzessautomatisierung: Article = {
  id: 105,
  slug: 'was-ist-prozessautomatisierung',
  title: 'Was ist Prozessautomatisierung? Einfach erklärt, mit Beispielen.',
  seoTitle: 'Was ist Prozessautomatisierung? Beispiele für KMU',
  date: monthLabel(PUBLISH_ISO),
  datePublished: PUBLISH_ISO,
  read_minutes: 6,
  category: 'Methodik',
  lead: 'Prozessautomatisierung heißt: Ein Programm erledigt Arbeitsschritte, die sich jede Woche wiederholen. Was das im kleinen Betrieb bedeutet, mit Beispielen.',
  body: [
    { kind: 'h2', text: 'Was ist Prozessautomatisierung?' },
    { kind: 'p', text: 'Prozessautomatisierung heißt: Ein Programm erledigt Arbeitsschritte, die heute ein Mensch von Hand macht, und zwar jedes Mal auf dieselbe Weise. Ein Prozess ist dabei nichts anderes als ein Ablauf, der in Ihrem Betrieb immer wieder vorkommt. Eine Anfrage beantworten. Einen Beleg ablegen. Einen Termin bestätigen.' },
    { kind: 'p', text: 'Das Wort klingt nach Fabrikhalle und Großkonzern. Gemeint ist im kleinen Betrieb aber meist etwas Unspektakuläres. Jemand tippt Daten aus einer E-Mail in ein anderes Programm ab. Jemand kopiert Textbausteine zusammen. Jemand schreibt Kunden hinterher, die etwas vergessen haben. Übernimmt ein Programm diese Schritte, ist das Prozessautomatisierung.' },

    { kind: 'h2', text: 'Woran erkennen Sie einen Ablauf, der sich automatisieren lässt?' },
    { kind: 'p', text: 'Ein guter Kandidat kommt jede Woche wieder und läuft jedes Mal ähnlich ab. Die Daten liegen schon am Computer, in E-Mails, Tabellen oder Ihrer Branchensoftware. Und meistens gibt es eine Person, die genervt ist, weil sie immer wieder dasselbe tut. Fragen Sie diese Person. Sie weiß genau, wo die Zeit hingeht.' },
    { kind: 'p', text: 'Ein schlechter Kandidat ist ein Ablauf, bei dem jeder Fall eine eigene Entscheidung braucht. Oder einer, der zweimal im Jahr vorkommt. Wie Sie genauer prüfen, ob sich eine Automatisierung rechnet, habe ich im Artikel über die Frage beschrieben, wann sich Automatisierung lohnt.' },

    { kind: 'h2', text: 'Beispiele für Prozessautomatisierung nach Branche' },
    { kind: 'p', text: 'Im Handwerk kommen Anfragen per E-Mail, über das Kontaktformular und als Notiz vom Telefon, oft mit Fotos. Eine Automatisierung sammelt sie an einer Stelle, legt den Kunden in der Handwerkersoftware an, sortiert die Fotos in den richtigen Ordner und bereitet einen Angebotsentwurf aus Ihren Textbausteinen vor. Sie prüfen und geben frei.' },
    { kind: 'p', text: 'Bei Immobilienmaklern laufen über die Portale viele Anfragen zum selben Objekt ein. Die Automatisierung schickt jedem Interessenten sofort das Exposé, fragt die wichtigsten Angaben ab und trägt ihn in die Maklersoftware ein. Wer passt, bekommt einen Vorschlag für einen Besichtigungstermin.' },
    { kind: 'p', text: 'In der Steuerkanzlei reichen Mandanten Belege ein, aber selten vollständig. Eine Automatisierung prüft, was fehlt, und erinnert freundlich, bis alles da ist. Eingegangene Belege landen sauber benannt im richtigen Ordner.' },
    { kind: 'p', text: 'In Agenturen braucht jeder neue Auftrag dasselbe: Projekt anlegen, Ordner, Zugänge, Begrüßungsmail, Termin für das Auftaktgespräch. Das lässt sich mit einem Klick auslösen, statt es jedes Mal aus dem Gedächtnis zusammenzusuchen.' },
    { kind: 'p', text: 'Bei Coaches bucht jemand ein Erstgespräch. Danach gehen Bestätigung, Fragebogen und Erinnerung automatisch raus, und die Antworten liegen vor dem Termin geordnet bereit. Nach dem Gespräch folgt das Angebot, sobald Sie es freigeben.' },
    { kind: 'q', text: 'Die besten Abläufe für den Anfang sind langweilig. Genau deshalb kann ein Programm sie gut.' },

    { kind: 'h2', text: 'Was bringt Prozessautomatisierung, und was nicht?' },
    { kind: 'p', text: 'Sie bringt Zeit und Verlässlichkeit. Ein automatisierter Ablauf vergisst keine Erinnerung und tippt keine Telefonnummer falsch ab. Er läuft auch dann, wenn die Kollegin im Urlaub ist, die sonst als Einzige weiß, wie es geht. Und Anfragen werden schneller beantwortet, weil sie nicht erst im Postfach liegen bleiben.' },
    { kind: 'p', text: 'Einen besseren Ablauf bringt sie nicht. Wer einen umständlichen Ablauf automatisiert, hat danach einen umständlichen Ablauf, der schneller läuft. Deshalb schaue ich mir vor dem Bauen an, welche Schritte überhaupt nötig sind. Oft fällt dabei schon einer weg, bevor irgendetwas gebaut ist.' },
    { kind: 'p', text: 'Und sie ersetzt keine Menschen. Sie nimmt ihnen das Abtippen, Suchen und Hinterherschreiben ab. Entscheidungen, das Gespräch mit dem Kunden und die Prüfung vor dem Versand bleiben bei Ihnen und Ihrem Team.' },

    { kind: 'h2', text: 'Prozessautomatisierung, RPA, Digitalisierung, KI: Was ist was?' },
    { kind: 'p', text: 'Diese Begriffe werden oft durcheinandergeworfen. Dabei meinen sie verschiedene Dinge.' },
    { kind: 'p', text: 'Digitalisierung heißt, dass etwas vom Papier in den Computer wandert. Das Aufmaß im Tablet statt auf dem Zettel, die Belege als PDF statt im Schuhkarton. Digitalisierung ist die Voraussetzung für Automatisierung, aber noch keine. Wer ein PDF von Hand abtippt, arbeitet digital, aber nicht automatisiert.' },
    { kind: 'p', text: 'RPA steht für Robotic Process Automation. Dabei ahmt ein Programm nach, was ein Mensch am Bildschirm tut: Es klickt, tippt und kopiert. Das ist praktisch bei alten Programmen ohne Schnittstelle. Es ist aber anfällig, weil schon ein verschobener Knopf den Ablauf stoppen kann. In kleinen Betrieben brauche ich RPA selten. Meist lassen sich die Programme direkt über ihre Schnittstellen verbinden.' },
    { kind: 'p', text: 'KI ist ein Baustein, der in einer Automatisierung stecken kann, aber nicht muss. Sie hilft dort, wo Text gelesen oder geschrieben werden muss, etwa bei einer frei formulierten E-Mail. Die meisten Schritte in einem Ablauf brauchen keine KI, sondern klare Wenn-dann-Regeln.' },
    { kind: 'p', text: 'Workflow-Automatisierung ist im Grunde dasselbe wie Prozessautomatisierung. Der englische Begriff taucht oft bei Werkzeugen wie n8n, Make oder Zapier auf, die Programme miteinander verbinden.' },

    { kind: 'h2', text: 'Welche Abläufe werden in kleinen Betrieben zuerst automatisiert?' },
    { kind: 'p', text: 'Wenn ich mir einen Betrieb anschaue, landen wir fast immer bei einer dieser Stellen. Anfragen, die aus mehreren Kanälen kommen und von Hand in eine Liste übertragen werden. Angebote, die aus Textbausteinen entstehen. Belege und Unterlagen, denen jemand hinterherläuft. Das Nachfassen, das im Alltag untergeht. Oder Termine, die per E-Mail hin und her abgestimmt werden.' },
    { kind: 'p', text: 'Diese Abläufe kommen jede Woche vor und folgen einem Muster. Und sie bleiben gern am Inhaber hängen oder an der einen Mitarbeiterin, die weiß, wie es geht. Ist diese Person krank oder im Urlaub, steht der Ablauf.' },

    { kind: 'h2', text: 'Geschäftsprozesse automatisieren: Wie fange ich an?' },
    { kind: 'p', text: 'Nicht mit einer Software, sondern mit einer Woche Mitschreiben. Notieren Sie, welche Arbeiten immer wiederkommen, wie oft und wie lange sie dauern. Am Ende der Woche sehen Sie meist schon, welcher Ablauf die meiste Zeit frisst.' },
    { kind: 'p', text: 'Dann rechnen Sie: Stunden pro Woche mal Stundensatz mal rund 46 Arbeitswochen. Das ist, was Sie der Ablauf heute im Jahr kostet. Ein Beispiel mit angenommenen Werten: Vier Stunden pro Woche zu je 50 € ergeben 4 × 50 € × 46 = 9.200 € im Jahr. Liegt Ihre Zahl deutlich über dem, was eine Automatisierung kostet, lohnt sich ein genauerer Blick.' },
    { kind: 'p', text: 'Und dann fangen Sie mit genau einem Ablauf an, nicht mit fünf. Ein Ablauf, der im Alltag läuft, bringt mehr als ein Plan für die ganze Firma. Sie lernen daran, wie Automatisierung in Ihrem Betrieb funktioniert, und Ihr Team gewöhnt sich in Ruhe daran.' },
    { kind: 'q', text: 'Wer mit fünf Abläufen gleichzeitig anfängt, hat nach drei Monaten fünf halbe.' },

    { kind: 'h2', text: 'Prozessautomatisierung für KMU: Wie ich dabei vorgehe' },
    { kind: 'p', text: 'Genau so arbeite ich. Ich nehme mir den Ablauf vor, der Sie jede Woche am meisten Zeit kostet, und automatisiere ihn in vier Wochen, zum Festpreis und mit Garantie. Ich arbeite remote für Betriebe in ganz Deutschland, meistens per Video. Meist setze ich dafür n8n ein, auf Servern in der EU, und verbinde die Programme, die Sie schon haben. Neue Software brauchen Sie dafür in der Regel nicht.' },
    { kind: 'p', text: 'In der ersten Woche zeigen Sie mir, wie der Ablauf heute läuft. Danach baue ich, wir testen mit echten Fällen, und in der vierten Woche weise ich Ihr Team ein. Ihr eigener Aufwand liegt bei rund fünf Stunden.' },
    { kind: 'p', text: 'Wenn Sie wissen möchten, welcher Ablauf bei Ihnen der richtige Anfang wäre, erzählen Sie mir im Erstgespräch davon. Typische Beispiele aus Ihrem Alltag finden Sie auf den Seiten zu den einzelnen Branchen.' },
  ],
  notes: [
    'Die 46 Arbeitswochen sind ein Richtwert: 52 Wochen abzüglich Urlaub und Feiertage.',
    'Die Branchenbeispiele sind typische Abläufe, keine Kundenfälle. Was sich bei Ihnen automatisieren lässt, hängt von Ihrer Software ab.',
  ],
  related: [
    { label: 'KI-Beratung für kleine Unternehmen', href: '/ki-beratung' },
    { label: 'Wann sich eine Automatisierung lohnt', href: '/wissen/wann-sich-automatisierung-lohnt' },
    { label: 'KI-Agenten im Betrieb', href: '/wissen/ki-agenten-im-betrieb' },
    { label: 'Ablauf-Bibliothek: Beispiele für Prozessautomatisierung', href: '/ablaeufe' },
    { label: 'Ihren Ablauf schildern', href: '/kontakt' },
  ],
};
