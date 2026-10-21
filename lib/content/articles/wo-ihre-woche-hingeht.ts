import type { Article } from '@/lib/types';
import { PUBLISHED, PUBLISHED_ISO } from './dates';

export const woIhreWocheHingeht: Article = {
  id: 3,
  slug: 'wo-ihre-woche-hingeht',
  title: 'Wo Ihre Woche hingeht.',
  date: PUBLISHED,
  datePublished: PUBLISHED_ISO,
  read_minutes: 4,
  category: 'Methodik',
  seoDescription:
    'Die meisten Inhaber spüren, dass Zeit verloren geht, aber nicht wo. Mit einer Woche Mitschreiben finden Sie den Ablauf, der Sie am meisten Zeit kostet.',
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
};
