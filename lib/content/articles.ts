// Wissen-Artikel. Ich-Form, Ansprache mit „Sie“, keine erfundenen Zahlen oder Zitate.
// Platzhalter in eckigen Klammern sind bewusst sichtbar, bis sie ersetzt werden.

import type { Article } from '@/lib/types';

const PUBLISHED = 'Oktober 2026';

export const ARTICLES: Article[] = [
  {
    id: 1,
    slug: 'wann-sich-automatisierung-lohnt',
    title: 'Wann sich eine Automatisierung lohnt und wann nicht.',
    date: PUBLISHED,
    read_minutes: 5,
    category: 'Methodik',
    lead: 'Nicht jeder Ablauf, der nervt, sollte automatisiert werden. Mit drei Fragen finden Sie heraus, ob sich der Aufwand für Ihren Betrieb rechnet.',
    body: [
      { kind: 'h2', text: 'Frage 1: Kommt der Ablauf jede Woche wieder?' },
      { kind: 'p', text: 'Automatisierung lohnt sich bei Dingen, die oft passieren. Ein Angebot, das Sie zehnmal pro Woche schreiben, ist ein guter Kandidat. Die Jahresabrechnung, die einmal im Jahr ansteht, meistens nicht. Je öfter ein Ablauf vorkommt, desto schneller hat sich die Arbeit daran bezahlt gemacht.' },
      { kind: 'h2', text: 'Frage 2: Läuft er jedes Mal ähnlich ab?' },
      { kind: 'p', text: 'Ein Ablauf muss nicht immer gleich sein. Er braucht aber ein Muster. Wenn Sie ihn einem neuen Mitarbeiter in zehn Minuten erklären könnten, kann ihn meistens auch ein Programm übernehmen. Verlangt jeder Fall eine eigene Entscheidung, wird es schwierig.' },
      { kind: 'h2', text: 'Frage 3: Liegen die Daten schon am Computer?' },
      { kind: 'p', text: 'E-Mails, Ihre Branchensoftware, Tabellen, ein Kalender: Damit lässt sich arbeiten. Kommt alles auf Zetteln oder per Zuruf, fangen wir besser dort an. Manchmal ist ein einfaches Formular der erste und wichtigste Schritt.' },
      { kind: 'q', text: 'Wenn ich bei einer der drei Fragen zögere, sage ich Ihnen das. Ein Ablauf, der sich nicht lohnt, wird durch Technik nicht besser.' },
      { kind: 'h2', text: 'Eine einfache Rechnung' },
      { kind: 'p', text: 'Schreiben Sie eine Woche lang mit, wie oft der Ablauf vorkommt und wie lange er dauert. Nehmen Sie die Stunden mal Ihren Stundensatz und mal rund 46 Arbeitswochen. Das Ergebnis zeigt, was Sie der Ablauf heute im Jahr kostet. Den Zeitrechner dafür finden Sie auf der Startseite.' },
      { kind: 'p', text: 'Liegt diese Zahl deutlich über dem, was eine Automatisierung kostet, lohnt sich das Gespräch. Liegt sie darunter, behalten Sie Ihr Geld.' },
    ],
    notes: [
      'Faustregel: Ein Ablauf, der seltener als einmal pro Woche vorkommt, lohnt sich nur, wenn er sehr lange dauert oder oft schiefgeht.',
      'Die 46 Arbeitswochen sind ein Richtwert: 52 Wochen abzüglich Urlaub und Feiertage.',
    ],
  },
  {
    id: 2,
    slug: 'ki-im-betrieb-ohne-hype',
    title: 'KI im Betrieb: Was hilft und was nur gut klingt.',
    date: PUBLISHED,
    read_minutes: 6,
    category: 'KI ohne Hype',
    lead: 'Über KI wird gerade viel versprochen. Für einen Handwerksbetrieb, ein Maklerbüro oder eine Kanzlei bleibt davon ein kleiner, aber nützlicher Teil übrig.',
    body: [
      { kind: 'h2', text: 'Wo KI wirklich hilft' },
      { kind: 'p', text: 'KI ist gut darin, Texte zu lesen und zu sortieren. Eine E-Mail mit einer Anfrage, ein schlecht gescannter Beleg, eine Sprachnachricht vom Kunden: Daraus kann sie die wichtigen Angaben herausziehen und an die richtige Stelle legen. Sie kann auch Entwürfe schreiben, etwa eine Antwort auf eine Anfrage, die Sie dann prüfen.' },
      { kind: 'h2', text: 'Wo KI eher schadet' },
      { kind: 'p', text: 'Überall dort, wo es auf exakte Zahlen und feste Regeln ankommt. Ein Angebot berechnen, eine Frist prüfen, einen Beleg einem Konto zuordnen: Das erledigt eine klare Regel zuverlässiger. Sie macht jedes Mal dasselbe und kostet fast nichts. KI macht dagegen manchmal Fehler, die gut klingen.' },
      { kind: 'q', text: 'Die meisten Abläufe, die ich automatisiere, brauchen keine KI. Sie brauchen klare Regeln, die zuverlässig abgearbeitet werden.' },
      { kind: 'h2', text: 'Woran Sie einen guten Einsatz erkennen' },
      { kind: 'p', text: 'Hinter einem guten KI-Baustein steht immer ein Mensch, der kurz prüft, bevor etwas rausgeht. Er arbeitet mit Ihren Daten, ohne sie für fremde Zwecke weiterzugeben. Und er ist so eingebaut, dass der Ablauf weiterläuft, wenn die KI einmal danebenliegt.' },
      { kind: 'p', text: 'Wenn Ihnen jemand eine KI verkauft, die alles allein erledigt, fragen Sie nach: Wer prüft das Ergebnis, und was passiert, wenn es falsch ist?' },
    ],
    notes: [
      'Datenschutz: Für Kundendaten kommen nur Dienste infrage, die keine Daten zum Training verwenden und einen Vertrag zur Auftragsverarbeitung anbieten.',
      '[WELCHE KI-DIENSTE SIE KONKRET EINSETZEN]',
    ],
  },
  {
    id: 3,
    slug: 'wo-ihre-woche-hingeht',
    title: 'Wo Ihre Woche hingeht.',
    date: PUBLISHED,
    read_minutes: 4,
    category: 'Methodik',
    lead: 'Die meisten Inhaber spüren, dass Zeit verloren geht. Wo genau, wissen die wenigsten. So finden Sie es in einer Woche heraus.',
    body: [
      { kind: 'h2', text: 'Eine Woche mitschreiben' },
      { kind: 'p', text: 'Legen Sie sich einen Zettel neben die Tastatur oder eine Notiz aufs Handy. Schreiben Sie jedes Mal auf, wenn Sie etwas tun, das sich wiederholt: ein Angebot nachfassen, einen Beleg anfordern, einen Termin verschieben. Dazu eine grobe Minutenzahl. Das dauert ein paar Sekunden pro Eintrag.' },
      { kind: 'h2', text: 'Gleiches zusammenzählen' },
      { kind: 'p', text: 'Am Ende der Woche fassen Sie gleiche Tätigkeiten zusammen. Das Ergebnis überrascht oft: Nicht die große Aufgabe frisst die Zeit, sondern die kleine, die zwanzigmal vorkommt.' },
      { kind: 'h2', text: 'Drei typische Kandidaten' },
      { kind: 'p', text: 'Im Handwerk sind es häufig Angebote und das Nachfassen danach. Bei Maklern sind es Anfragen, Exposés und Besichtigungstermine. In Steuerkanzleien sind es fehlende Belege und neue Mandanten, deren Unterlagen nicht vollständig sind.' },
      { kind: 'q', text: 'Der richtige Ablauf ist selten der spannendste. Es ist der, über den Sie sich jede Woche ärgern.' },
      { kind: 'h2', text: 'Und dann?' },
      { kind: 'p', text: 'Mit Ihrer Liste haben Sie alles, was ich für eine erste Einschätzung brauche. Schildern Sie mir den Ablauf mit der meisten Zeit in drei Sätzen. Ich sage Ihnen, ob und wie er sich automatisieren lässt.' },
    ],
    notes: [
      'Notieren Sie auch, wer im Team den Ablauf erledigt. Oft verteilt sich die Zeit auf mehrere Personen und fällt deshalb niemandem auf.',
    ],
  },
  {
    id: 4,
    slug: 'warum-ich-meistens-n8n-einsetze',
    title: 'Warum ich meistens n8n einsetze.',
    date: PUBLISHED,
    read_minutes: 4,
    category: 'Werkzeuge',
    lead: 'Für die meisten Abläufe brauchen Sie keine neue Software. Sie brauchen eine Verbindung zwischen den Programmen, die Sie schon haben. Dafür nutze ich meistens n8n.',
    body: [
      { kind: 'h2', text: 'Was n8n ist' },
      { kind: 'p', text: 'n8n ist ein Werkzeug, mit dem sich Programme verbinden lassen. Eine neue Anfrage im Postfach kann so automatisch in Ihrer Branchensoftware landen, eine Erinnerung auslösen oder einen Termin vorschlagen. Sie müssen dafür nichts Neues lernen. Ihre gewohnten Programme bleiben.' },
      { kind: 'h2', text: 'Warum keine fertige Komplettlösung?' },
      { kind: 'p', text: 'Komplettlösungen versprechen, alles in einem zu können. In der Praxis heißt das oft: neue Software, neue Abläufe, Schulung für das ganze Team und eine Lizenz pro Nutzer. Für einen Betrieb mit zehn oder zwanzig Leuten ist das viel Aufwand für ein Problem, das sich mit einer Verbindung lösen lässt.' },
      { kind: 'h2', text: 'Was für n8n spricht' },
      { kind: 'p', text: 'n8n kann auf einem Server in Deutschland laufen. Ihre Daten bleiben damit in Ihrer Hand. Es gibt keine Kosten pro Nutzer. Und weil die Abläufe offen einsehbar sind, sind Sie nicht an mich gebunden. Ein anderer Dienstleister kann jederzeit übernehmen.' },
      { kind: 'q', text: 'Was ich baue, gehört Ihnen. Das gilt auch für das Werkzeug, auf dem es läuft.' },
      { kind: 'h2', text: 'Wann ich etwas anderes nehme' },
      { kind: 'p', text: 'Bringt Ihre Software schon eine passende Funktion mit, nutzen wir die. Manchmal reicht eine kleine Einstellung im Kalender oder im E-Mail-Programm. Das sage ich Ihnen dann, statt etwas zu bauen, das Sie nicht brauchen.' },
    ],
    notes: [
      'n8n wird von der n8n GmbH in Berlin entwickelt. Der Quellcode ist offen einsehbar.',
      '[HOSTING-ANBIETER UND SERVERSTANDORT]',
    ],
  },
];
