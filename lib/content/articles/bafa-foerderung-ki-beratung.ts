import type { Article } from '@/lib/types';
import { monthLabel } from './dates';

const PUBLISH_ISO = '2026-10-30';

export const bafaFoerderungKiBeratung: Article = {
  id: 401,
  slug: 'bafa-foerderung-ki-beratung',
  title: 'Förderung für KI-Beratung 2026: Was es wirklich gibt.',
  seoTitle: 'Förderung KI-Beratung 2026: Was BAFA und Länder zahlen',
  date: monthLabel(PUBLISH_ISO),
  datePublished: PUBLISH_ISO,
  read_minutes: 7,
  category: 'Kosten',
  lead: 'Förderung für KI-Beratung und Automatisierung 2026: Was das BAFA bei KMU bezuschusst, welche Landesprogramme noch laufen und wo die Fallen liegen.',
  body: [
    { kind: 'p', text: 'Die Frage kommt in fast jedem Erstgespräch: „Gibt es dafür eine Förderung?“ Meine Antwort ist ehrlich und deshalb etwas unbefriedigend. Manchmal. Für einen Teil. Mit Papierkram. Programme kommen und gehen, und vieles, was im Netz steht, ist veraltet. Hier steht, was im Oktober 2026 läuft, was nicht mehr läuft, was genau bezuschusst wird und welche Fehler Sie den Zuschuss kosten.' },

    { kind: 'h2', text: 'Gibt es 2026 eine Förderung für KI-Beratung?' },
    { kind: 'p', text: 'Ja, aber keine, die so heißt. Es gibt ein Bundesprogramm für Unternehmensberatung allgemein, zuständig ist das BAFA. Und es gibt Landesprogramme für Digitalisierung. KI fällt darunter, wenn das Vorhaben in die Bedingungen passt. Ein eigenes Bundesprogramm nur für KI im kleinen Betrieb kenne ich derzeit nicht.' },
    { kind: 'p', text: 'Bevor Sie suchen, sollten Sie eine Sache trennen: Beratung und Umsetzung. Fast jedes Programm zieht genau da eine Linie. Meistens an einer anderen Stelle, als man denkt.' },

    { kind: 'h2', text: 'BAFA-Förderung für KMU: Was wird bei Digitalisierung bezuschusst?' },
    { kind: 'p', text: 'Das Programm heißt „Förderung von Unternehmensberatungen für KMU“. Das Geld kommt vom Bund und aus dem Europäischen Sozialfonds. Bezuschusst wird Beratung zu wirtschaftlichen, finanziellen, personellen und organisatorischen Fragen der Unternehmensführung. Wie Abläufe im Betrieb laufen und wo Digitalisierung hilft, gehört dazu.' },
    { kind: 'p', text: 'Die Zahlen, Stand Oktober 2026: Förderfähig sind höchstens 3.500 € Beratungskosten. In den neuen Bundesländern und in den Regionen Lüneburg und Trier gibt es 80 %, also bis 2.800 €. Im übrigen Bundesgebiet, in Berlin und in der Region Leipzig sind es 50 %, also bis 1.750 €. Es zählt der Standort Ihres Betriebs, nicht der des Beraters.' },
    { kind: 'p', text: 'Eine Beratung darf höchstens fünf Tage zu je acht Stunden dauern. Pro Jahr sind zwei Beratungen möglich, in der ganzen Laufzeit fünf. Am Ende steht ein schriftlicher Beratungsbericht, den Sie und der Berater unterschreiben.' },
    { kind: 'p', text: 'Und dann die Frist. Die Richtlinie gilt für Anträge, die bis zum 31. Dezember 2026 gestellt werden. Ein Nachfolgeprogramm hatte das BAFA bis Mitte Oktober 2026 nicht veröffentlicht. Wer den Zuschuss noch mitnehmen will, muss den Antrag dieses Jahr stellen.' },

    { kind: 'h2', text: 'Wird die Umsetzung einer Automatisierung gefördert?' },
    { kind: 'p', text: 'Beim BAFA nicht. Bezuschusst wird nur konzeptionelle Beratung: eine Analyse Ihrer Lage, die Schwachstellen und konkrete Empfehlungen mit einer Anleitung, wie Sie sie umsetzen. Die Umsetzung selbst schließt das BAFA ausdrücklich aus. Wenn jemand Ihren Ablauf baut, Programme verbindet, testet und einrichtet, ist das keine Beratung im Sinne des Programms.' },
    { kind: 'p', text: 'Praktisch heißt das: Sie können sich mit Zuschuss beraten lassen, welcher Ablauf sich zu automatisieren lohnt und wie man es angeht. Den Bau zahlen Sie selbst. Oder Sie finden ein Landesprogramm, das Umsetzung bezuschusst.' },
    { kind: 'q', text: 'Beim BAFA zahlt der Bund für den Plan. Für den Bau müssen Sie in Ihrem Bundesland suchen.' },
    { kind: 'p', text: 'Noch etwas steht in der Richtlinie: Die Beratung muss neutral sein. Zielt sie darauf, Ihnen Leistungen des Beraters selbst zu verkaufen, ist sie nicht förderfähig. Eine bezuschusste „Analyse“, an deren Ende zufällig das Angebot desselben Anbieters steht, sollte Sie stutzig machen. Das BAFA warnt in seinem Merkblatt zur Beraterauswahl selbst vor günstigen Analysen, die nur teure Folgeaufträge vorbereiten.' },

    { kind: 'h2', text: 'Fördermittel für Automatisierung in den Ländern' },
    { kind: 'p', text: 'Für die Umsetzung sind die Länder zuständig. Jedes Land macht es anders, und manches Programm ist schon wieder weg. Stand Oktober 2026 sieht es bei den bekannten Programmen so aus.' },
    { kind: 'p', text: 'Bayern: Der Digitalbonus läuft bis Ende 2027. Bezuschusst wird die Einführung digitaler Lösungen durch externe Anbieter, mit bis zu 50 %. Beim Digitalbonus Standard sind es höchstens 7.500 €. Der Digitalbonus Plus für Vorhaben mit besonderem Innovationsgehalt bringt bis 30.000 €, KI nennt die Richtlinie dort ausdrücklich. Beratung zählt nur anteilig mit und nur, wenn auch etwas eingeführt wird. Zwei Haken: Freie Berufe sind ausgeschlossen, Steuerkanzleien also zum Beispiel. Und pro Monat gibt es ein festes Kontingent. Im Oktober 2026 war es schon vor Monatsende erschöpft.' },
    { kind: 'p', text: 'Nordrhein-Westfalen: Bis zum 1. Dezember 2026 läuft der Aufruf „MID-Digitale Prozesse“. Er bezuschusst externe Beratung zu internen Abläufen, von der Ist-Analyse über das Soll-Konzept und die Softwareauswahl bis zur fachlichen Begleitung der Einführung. Höchstens 500 € pro Beratungstag, insgesamt bis 15.000 €. Software und Lizenzen zahlt das Land nicht. Das Geld geht in der Reihenfolge der Anträge weg, der Aufruf kann früher enden. Der Dienstleister muss seinen Sitz in der EU haben.' },
    { kind: 'p', text: 'Baden-Württemberg: Den Zuschuss „Digitalisierungsprämie Plus“ gibt es so nicht mehr. Die Zuschussvariante lief bis zum 30. Juni 2025. Seitdem gibt es über die Hausbank ein Darlehen mit Tilgungszuschuss, für Vorhaben ab 25.000 €. Für einen einzelnen Ablauf ist das meist eine Nummer zu groß.' },
    { kind: 'p', text: 'Hessen und Niedersachsen: Den DIGI-Zuschuss in Hessen hat die WIBank im Juni 2026 beendet, weitere Aufrufe sind nicht geplant. Der Digitalbonus.Niedersachsen-innovativ ist Ende 2025 ausgelaufen.' },
    { kind: 'p', text: 'Die übrigen Länder habe ich hier nicht geprüft. Bei der Suche helfen die Förderdatenbank des Bundes (foerderdatenbank.de) und Ihre IHK oder Handwerkskammer.' },

    { kind: 'h2', text: 'Beendete Programme: go-digital und Digital Jetzt' },
    { kind: 'p', text: 'Zwei Namen tauchen in Ratgebern ständig auf, obwohl es die Programme nicht mehr gibt. „Digital Jetzt“ lief Ende 2023 aus, seitdem nimmt niemand mehr Anträge an. „go-digital“ hat das Bundeswirtschaftsministerium ab dem 1. Januar 2025 nicht fortgeführt. Wer Ihnen 2026 eines der beiden anbietet, arbeitet mit altem Wissen. Oder will Ihnen etwas verkaufen.' },
    { kind: 'p', text: 'Ähnlich ist es mit Artikeln, die „2026“ im Titel tragen und Zahlen von 2023 abschreiben. Schauen Sie auf das Datum der Richtlinie, nicht auf das Datum des Blogbeitrags.' },

    { kind: 'h2', text: 'Wie beantrage ich die BAFA-Förderung?' },
    { kind: 'p', text: 'Die Reihenfolge ist der häufigste Fehler. Beim BAFA wie bei den Ländern gilt: erst der Antrag, dann der Auftrag. Als Beginn zählt schon der unterschriebene Vertrag, nicht erst der erste Termin.' },
    { kind: 'p', text: 'Beim BAFA läuft es so. Sie suchen einen Berater, der beim BAFA registriert ist. Dann stellen Sie online einen Antrag über eine Leitstelle, die Sie frei wählen, etwa die der Industrie- und Handelskammern oder des Handwerks. Dafür reichen Ihre Firmendaten. Leitstelle und BAFA prüfen Ihren Betrieb und den Berater und schicken Ihnen ein Informationsschreiben. Erst danach unterschreiben Sie den Beratungsvertrag.' },
    { kind: 'p', text: 'Nach der Beratung bezahlen Sie die Rechnung vollständig per Überweisung. Barzahlung zählt nicht. Spätestens sechs Monate nach dem Informationsschreiben reichen Sie den Verwendungsnachweis ein, mit Bericht, Rechnung, Kontoauszug und einigen Erklärungen. Dann entscheidet das BAFA und zahlt den Zuschuss an Sie aus.' },
    { kind: 'p', text: 'Sie legen also erst den vollen Betrag aus. Einen Rechtsanspruch auf den Zuschuss gibt es nicht. Ist Ihr Betrieb jünger als ein Jahr, brauchen Sie außerdem ein kostenloses Informationsgespräch bei einem regionalen Ansprechpartner.' },

    { kind: 'h2', text: 'Typische Fallen bei Fördermitteln' },
    { kind: 'p', text: 'Die meisten Zuschüsse scheitern an Kleinigkeiten, nicht am Projekt. Die häufigste habe ich oben genannt: zu früh angefangen. Schon eine Auftragsbestätigung per E-Mail kann als Beginn gelten. Dann ist der Zuschuss weg, egal wie gut das Vorhaben ist.' },
    { kind: 'p', text: 'Beim BAFA kommt der Berater dazu. Er muss registriert und freigeschaltet sein, sonst gibt es kein Informationsschreiben. Fragen Sie vor dem Antrag danach. Und achten Sie auf die Stunden: Dauert die Beratung länger als 40 Stunden, fällt die ganze Beratung aus der Förderung, nicht bloß die Stunden darüber. Workshops und Gruppenveranstaltungen zählen gar nicht, nur Einzelberatung.' },
    { kind: 'p', text: 'Misstrauisch werden sollten Sie bei Zusagen. Ein seriöser Berater verspricht Ihnen keinen Zuschuss, denn darüber entscheidet das BAFA oder die Förderbank. Bei registrierten Beratern kann das BAFA wegen solcher Zusagen sogar die Freischaltung aufheben, ebenso bei Werbung mit „BAFA-zertifiziert“.' },
    { kind: 'p', text: 'Und für dieselbe Maßnahme dürfen Sie in der Regel nicht zwei öffentliche Zuschüsse kombinieren.' },

    { kind: 'h2', text: 'Lohnt sich ein Projekt nur wegen der Förderung?' },
    { kind: 'p', text: 'Meine Meinung: Förderung ist schön, aber kein Grund für ein Projekt, das sich sonst nicht rechnet.' },
    { kind: 'p', text: 'Ein Beispiel mit angenommenen Werten: Eine Beratung kostet 3.500 € netto, Ihr Betrieb liegt in Westdeutschland. Der Zuschuss beträgt 50 %, also 1.750 €. Dafür stellen Sie einen Antrag, warten auf das Informationsschreiben, lesen einen Bericht gegen und reichen den Nachweis ein. Wie viele Stunden das bei Ihnen kostet, schätzen Sie besser selbst. Und die Wartezeit kommt dazu. Kostet ein Ablauf Ihr Büro jede Woche sechs Stunden, kostet jede Woche Warten genau diese sechs Stunden.' },
    { kind: 'p', text: 'Rechnen Sie deshalb zuerst ohne Zuschuss. Wie das geht, steht in meinem Artikel über die Kosten von KI-Automatisierung. Rechnet sich das Projekt, ist die Förderung ein Bonus. Rechnet es sich nur mit Zuschuss, lassen Sie es.' },
    { kind: 'q', text: 'Wenn ein Projekt sich nur mit Zuschuss rechnet, rechnet es sich nicht.' },
    { kind: 'p', text: 'Mein Angebot ist so gebaut, dass es ohne Zuschuss aufgeht: ein Ablauf, Festpreis, vier Wochen, Garantie. Ob für Ihr Vorhaben ein Programm infrage kommt, schauen wir uns im Erstgespräch gemeinsam an. Versprechen werde ich Ihnen keine Förderung. Und ich rate Ihnen, keinem zu glauben, der das tut.' },
  ],
  notes: [
    'BAFA, „Förderung von Unternehmensberatungen für KMU“: Förderrichtlinie vom 14.12.2022 in der Fassung vom 12.12.2024 (BAnz AT 23.12.2024 B1), Nr. 2, 4, 5.2, 7 und 8, sowie Merkblatt „Zuschuss, Zahlung und Zahlungsnachweis“ (Stand 18.05.2026), beide auf bafa.de. Abgerufen am 19.10.2026.',
    'Umsetzung ausgeschlossen: Beratererklärung des BAFA: „Die Durchführung von Umsetzungsmaßnahmen ist im Rahmen der Beratung unzulässig und wird nicht gefördert.“ Abgerufen am 19.10.2026.',
    'Seit dem 15.11.2025 berechnet das BAFA den Zuschuss bei Betrieben ohne Vorsteuerabzug auf den Bruttobetrag der Rechnung (Hinweis auf der Programmseite).',
    'Digitalbonus Bayern: Richtlinie vom 27.06.2024 (BayMBl. Nr. 315), zuletzt geändert am 07.10.2025, gültig bis 31.12.2027; Kontingent-Hinweis auf digitalbonus.bayern. Abgerufen am 19.10.2026.',
    'MID-Digitale Prozesse (NRW): Förderaufruf 2026 der NRW.BANK, Einreichfrist 07.09. bis 01.12.2026, Sitz des Auftragnehmers in der EU, nrwbank.de. Abgerufen am 19.10.2026.',
    'Baden-Württemberg: Seite des Wirtschaftsministeriums zur Digitalisierungsprämie, Zuschussvariante bis 30.06.2025. Hessen: Hinweis der WIBank zum Ende des DIGI-Zuschusses. Niedersachsen: Richtlinie Digitalbonus.Niedersachsen-innovativ, außer Kraft mit Ablauf des 31.12.2025. Abgerufen am 19.10.2026.',
    'go-digital: laut Bundeswirtschaftsministerium ab 01.01.2025 nicht fortgeführt (zitiert im Handwerksblatt vom 01.10.2024). Digital Jetzt: Richtlinie zum 31.12.2023 ausgelaufen (IHK Bonn).',
    'Förderprogramme ändern sich oft. Es gilt immer die aktuelle Richtlinie des jeweiligen Programms. Dieser Artikel ersetzt keine Prüfung durch die Förderstelle.',
  ],
  related: [
    { label: 'KI-Beratung zum Festpreis', href: '/ki-beratung' },
    { label: 'Was kostet KI-Automatisierung?', href: '/wissen/was-kostet-ki-automatisierung' },
    { label: 'Wann sich eine Automatisierung lohnt', href: '/wissen/wann-sich-automatisierung-lohnt' },
    { label: 'Erstgespräch vereinbaren', href: '/kontakt' },
  ],
};
