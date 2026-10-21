// Texte und Daten der Seite /ki-im-kleinbetrieb.
// Regel: Jede Zahl steht so in der genannten Quelle. Alle Quellen am ACCESSED-Datum abgerufen.

import type { Faq } from './types';

/** Stand der Seite und Abrufdatum aller Quellen. */
export const DATEN_STAND = { iso: '2026-10-19', label: '19. Oktober 2026' } as const;

export interface DataSource {
  id: string;
  publisher: string;
  /** Originaltitel der Quelle. Wird zitiert und deshalb nicht auf Stilregeln geprüft. */
  title: string;
  /** Veröffentlichung oder Datenstand: JJJJ, JJJJ-MM oder JJJJ-MM-TT. */
  published: string;
  /** Anzeige des Datums, z. B. „28. August 2025“. */
  publishedLabel: string;
  url: string;
  /** Wer wie befragt wurde. */
  sample: string;
  /** Erhebungszeitraum. */
  period: string;
  /** Hinweis, wenn die Zahl nicht aus der Primärquelle selbst stammt. */
  note?: string;
}

export interface KeyStat {
  id: string;
  value: number;
  /** Text nach der Zahl, z. B. „der Handwerksbetriebe setzen KI ein“. */
  label: string;
  context: string;
  sourceId: string;
}

export interface Bar {
  label: string;
  value: number;
  sourceId: string;
  /** Vergleichswert (z. B. „alle Branchen“), wird anders eingefärbt. */
  reference?: boolean;
}

export interface BarGroup {
  id: string;
  title: string;
  lead: string;
  bars: readonly Bar[];
  footnote: string;
}

export const SOURCES: readonly DataSource[] = [
  {
    id: 'bitkom-handwerk-2025',
    publisher: 'Bitkom e. V., Befragung durch Bitkom Research',
    title: 'Handwerk: Azubis machen Betriebe fit für die Digitalisierung (Presseinformation)',
    published: '2025-08-28',
    publishedLabel: '28. August 2025',
    url: 'https://www.bitkom.org/Presse/Presseinformation/Handwerk-Azubis-Betriebe-Digitalisierung',
    sample: '504 Handwerksunternehmen ab 1 Beschäftigtem, telefonisch befragt (Geschäftsführung)',
    period: 'Kalenderwoche 23 bis 29 im Jahr 2025',
  },
  {
    id: 'bitkom-handwerk-bericht',
    publisher: 'Bitkom e. V.',
    title: 'Digitalisierung des Handwerks. Bitkom-Studie 2025 (Studienbericht)',
    published: '2026-01',
    publishedLabel: 'Januar 2026',
    url: 'https://www.bitkom.org/sites/main/files/2026-01/bitkom-studienbericht-handwerk.pdf',
    sample: 'Wie oben, 504 Betriebe; gewichtet auf Grundlage der Handwerkszählung des Statistischen Bundesamts, Fehlerspanne plus/minus 4 Prozent',
    period: 'Kalenderwoche 23 bis 29 im Jahr 2025',
  },
  {
    id: 'ki-index-nrw',
    publisher: 'IfM Bonn und FGF e. V., Beitrag von Prof. Dr. Klaus Schafmeister (Fachhochschule des Mittelstands)',
    title: 'Unternehmertum im Fokus, Ausgabe 1/2025: Künstliche Intelligenz im Handwerk (mit Ergebnissen des KI-Index Handwerk.NRW)',
    published: '2025',
    publishedLabel: 'Ausgabe 1/2025',
    url: 'https://www.ifm-bonn.org/fileadmin/data/redaktion/publikationen/policy_brief/dokumente/policybrief-01-25.pdf',
    sample: 'Über 820 Handwerksbetriebe aus Nordrhein-Westfalen',
    period: 'Ende 2024',
  },
  {
    id: 'destatis-2025',
    publisher: 'Statistisches Bundesamt (Destatis)',
    title: 'Unternehmen mit Nutzung von Technologien der künstlichen Intelligenz nach Beschäftigtengrößenklassen (Tabelle, 2025)',
    published: '2025-11-24',
    publishedLabel: '24. November 2025',
    url: 'https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Unternehmen/IKT-in-Unternehmen-IKT-Branche/Tabellen/ikti-unternehmen-kuenstliche-intelligenz.html',
    sample: 'Erhebung zur Nutzung von IKT in Unternehmen: rund 20.000 Unternehmen ab 10 Beschäftigten pro Jahr, Teilnahme freiwillig, online',
    period: 'Berichtsjahr 2025',
  },
  {
    id: 'destatis-gruende-2025',
    publisher: 'Statistisches Bundesamt (Destatis)',
    title: 'Gründe gegen die Nutzung von Technologien der künstlichen Intelligenz nach Beschäftigtengrößenklassen (Tabelle, 2025)',
    published: '2025-11-24',
    publishedLabel: '24. November 2025',
    url: 'https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Unternehmen/IKT-in-Unternehmen-IKT-Branche/Tabellen/ikti-gegen-nutzung-kuenstliche-intelligenz.html',
    sample: 'Unternehmen, die KI erwogen, aber nicht eingeführt haben (aus derselben Erhebung)',
    period: 'Berichtsjahr 2025',
  },
  {
    id: 'destatis-2024',
    publisher: 'Statistisches Bundesamt (Destatis)',
    title: 'Jedes fünfte Unternehmen nutzt künstliche Intelligenz (Pressemitteilung Nr. 444)',
    published: '2024-11-25',
    publishedLabel: '25. November 2024',
    url: 'https://www.destatis.de/DE/Presse/Pressemitteilungen/2024/11/PD24_444_52911.html',
    sample: 'Rechtliche Einheiten ab 10 Beschäftigten',
    period: 'Berichtsjahr 2024',
  },
  {
    id: 'destatis-methodik',
    publisher: 'Statistisches Bundesamt (Destatis)',
    title: 'Nutzung von IKT in Unternehmen: Informationen zur Erhebung',
    published: '2026',
    publishedLabel: 'Stand 2026',
    url: 'https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Unternehmen/IKT-in-Unternehmen-IKT-Branche/IKT-U-Erhebung/info.html',
    sample: 'Rund 20.000 Unternehmen pro Jahr, Teilnahme freiwillig, nur online',
    period: 'Ergebnisse für 2026 laut Seite für November/Dezember 2026 geplant',
  },
  {
    id: 'eurostat-branchen-2025',
    publisher: 'Eurostat',
    title: 'Artificial intelligence by NACE Rev. 2 activity (Datensatz isoc_eb_ain2), Deutschland',
    published: '2026-06-15',
    publishedLabel: 'Datenstand 15. Juni 2026',
    url: 'https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ain2/default/table?lang=de',
    sample: 'Unternehmen ab 10 Beschäftigten in Deutschland, Werte aus der amtlichen Erhebung zur IKT-Nutzung',
    period: 'Berichtsjahr 2025',
  },
  {
    id: 'bitkom-ki-2026-09',
    publisher: 'Bitkom e. V., Befragung durch Bitkom Research',
    title: 'Erstmals nutzt die Mehrheit der Unternehmen KI (Presseinformation)',
    published: '2026-09-14',
    publishedLabel: '14. September 2026',
    url: 'https://www.bitkom.org/Presse/Presseinformation/Erstmals-nutzt-die-Mehrheit-der-Unternehmen-KI',
    sample: '603 Unternehmen ab 20 Beschäftigten, telefonisch befragt',
    period: 'Kalenderwoche 28 bis 33 im Jahr 2026',
  },
  {
    id: 'bitkom-ki-2025-09',
    publisher: 'Bitkom e. V., Befragung durch Bitkom Research',
    title: 'Durchbruch bei Künstlicher Intelligenz (Presseinformation)',
    published: '2025-09-15',
    publishedLabel: '15. September 2025',
    url: 'https://www.bitkom.org/Presse/Presseinformation/Durchbruch-Kuenstliche-Intelligenz',
    sample: '604 Unternehmen ab 20 Beschäftigten, telefonisch befragt',
    period: 'Kalenderwoche 27 bis 32 im Jahr 2025',
  },
  {
    id: 'bitkom-digital-2026-03',
    publisher: 'Bitkom e. V., Befragung durch Bitkom Research',
    title: 'Digitalisierung der Wirtschaft: Fast jedes Unternehmen beschäftigt sich mit KI (Presseinformation)',
    published: '2026-03-11',
    publishedLabel: '11. März 2026',
    url: 'https://www.bitkom.org/Presse/Presseinformation/Digitalisierung-der-Wirtschaft-Unternehmen-beschaeftigen-sich-mit-KI',
    sample: '604 Unternehmen ab 20 Beschäftigten, telefonisch befragt',
    period: 'Kalenderwoche 2 bis 6 im Jahr 2026',
  },
  {
    id: 'ifo-2026-06',
    publisher: 'ifo Institut',
    title: 'Mehr als die Hälfte der Unternehmen nutzt Künstliche Intelligenz',
    published: '2026-06-05',
    publishedLabel: '5. Juni 2026',
    url: 'https://www.ifo.de/fakten/2026-06-05/mehr-als-die-haelfte-der-unternehmen-nutzt-kuenstliche-intelligenz',
    sample: 'ifo Konjunkturumfrage; die Meldung nennt keine Stichprobengröße',
    period: 'Mai 2026',
  },
  {
    id: 'ifo-selbststaendige-2026',
    publisher: 'ifo Institut',
    title: 'Selbständige setzen stärker auf Künstliche Intelligenz (Pressemitteilung)',
    published: '2026-06-16',
    publishedLabel: '16. Juni 2026',
    url: 'https://www.ifo.de/pressemitteilung/2026-06-16/selbstaendige-setzen-staerker-auf-kuenstliche-intelligenz',
    sample: 'Jimdo-ifo Geschäftsklimaindex: Solo-Selbstständige und Kleinstunternehmen; die Meldung nennt keine Stichprobengröße',
    period: '2026 (Tabellen laut Meldung in den ifo Konjunkturperspektiven 05/2026)',
  },
  {
    id: 'jimdo-2024',
    publisher: 'Jimdo GmbH',
    title: 'KI: Historische Chance für Selbstständige, die noch zu wenig genutzt wird (Pressemitteilung)',
    published: '2024-08-01',
    publishedLabel: '1. August 2024',
    url: 'https://storage.e.jimdo.com/file/7ae11346-cadc-46cb-9e3a-0dbbf12d2be1/PM_KI%20Nutzung_JIMDO_ifo_Gescha%CC%88ftsindex.pdf',
    sample: 'Monatlich gut 1.600 Solo-Selbstständige und Kleinstunternehmen mit bis zu 9 Beschäftigten; Schwerpunkt Dienstleistungen; neue Teilnehmer werden mit Jimdo und dem Verband der Gründer und Selbstständigen (VGSD) gewonnen',
    period: 'Befragungen im Juni 2023 und Juni 2024',
  },
  {
    id: 'dhz-2026-06',
    publisher: 'Deutsche Handwerks Zeitung',
    title: 'Selbstständige holen bei KI-Nutzung rasant auf',
    published: '2026-06-16',
    publishedLabel: '16. Juni 2026',
    url: 'https://www.deutsche-handwerks-zeitung.de/?p=379877',
    sample: 'Bericht über die Jimdo-ifo-Befragung von Solo-Selbstständigen und Kleinstunternehmen',
    period: 'Mai 2026',
    note: 'Zeitungsbericht. Die Branchenwerte stehen nicht in der ifo-Meldung selbst.',
  },
  {
    id: 'kfw-pm-2026',
    publisher: 'KfW Research',
    title: 'Künstliche Intelligenz kommt im Mittelstand immer häufiger zum Einsatz (Pressemitteilung)',
    published: '2026-02-11',
    publishedLabel: '11. Februar 2026',
    url: 'https://www.kfw.de/%C3%9Cber-die-KfW/Newsroom/Aktuelles/Pressemitteilungen-Details_880896.html',
    sample: 'Sonderauswertung des KfW-Mittelstandspanels, einer jährlichen repräsentativen Befragung mittelständischer Unternehmen',
    period: 'KI-Einsatz in den Jahren 2022 bis 2024',
  },
  {
    id: 'kfw-fokus-554',
    publisher: 'KfW Research, Dr. Volker Zimmermann',
    title: 'Fokus Volkswirtschaft Nr. 554: Künstliche Intelligenz im Mittelstand: einfach zu handhabende Technologien mit breiten Einsatzgebieten überwiegen',
    published: '2026-07-29',
    publishedLabel: '29. Juli 2026',
    url: 'https://www.kfw.de/PDF/Download-Center/Konzernthemen/Research/PDF-Dokumente-Fokus-Volkswirtschaft/Fokus-2026/Fokus-Nr.-554-Juli-2026-KI_Mittelstand.pdf',
    sample: '23. Welle des KfW-Mittelstandspanels, gut 5.200 Unternehmensantworten, erhoben im Frühjahr 2025',
    period: 'KI-Einsatz in den Jahren 2022 bis 2024',
  },
  {
    id: 'dihk-2026',
    publisher: 'Deutsche Industrie- und Handelskammer (DIHK)',
    title: 'Künstliche Intelligenz, Souveränität und Resilienz. DIHK-Digitalisierungsumfrage 2026',
    published: '2026-01',
    publishedLabel: 'Januar 2026',
    url: 'https://www.dihk.de/resource/blob/163540/486d8384c94a630d9aa0eaa978f0a786/dihk-digitalisierungsumfrage-2026-data.pdf',
    sample: '4.686 Unternehmen aller Größen, davon 2.055 mit 0 bis 9 Beschäftigten',
    period: '10. bis 28. November 2025',
  },
  {
    id: 'datev-seismograf-2025',
    publisher: 'DATEV eG',
    title: 'DATEV-Seismograf, 5. Befragungswelle',
    published: '2025-06',
    publishedLabel: 'Juni 2025',
    url: 'https://www.datev.de/web/de/berufsgruppenuebergreifend/ueber-datev/das-unternehmen/datev-studien/datev-seismograf',
    sample: '504 Steuerberatungskanzleien, online befragt; eingeladen waren 7.500 Kanzleien',
    period: '2. bis 15. Juni 2025',
  },
];

export const DATEN_HERO = {
  eyebrow: 'Zahlen und Quellen',
  title: 'KI im Kleinbetrieb 2026: Was die Zahlen wirklich sagen.',
  lead: 'Mal setzen 4 Prozent der Betriebe KI ein, mal mehr als die Hälfte. Beides steht in seriösen Studien. Es kommt darauf an, wen man fragt und was als KI zählt. Ich habe die wichtigsten Erhebungen gelesen und sortiert.',
  standLabel: 'Stand',
};

export const KEY_STATS_INTRO = {
  eyebrow: 'Kernzahlen',
  title: 'Sechs Zahlen, sechs verschiedene Fragen.',
  lead: 'Jede Kachel beantwortet eine etwas andere Frage. Lesen Sie die kleine Zeile darunter mit, sonst vergleichen Sie Äpfel mit Birnen.',
};

export const KEY_STATS: readonly KeyStat[] = [
  {
    id: 'handwerk',
    value: 4,
    label: 'der Handwerksbetriebe setzen KI ein',
    context: 'Telefonische Befragung von 504 Betrieben ab 1 Beschäftigtem, Sommer 2025. Weitere 9 Prozent planen es, für 84 Prozent ist KI kein Thema.',
    sourceId: 'bitkom-handwerk-bericht',
  },
  {
    id: 'kleinst-kfw',
    value: 19,
    label: 'der Unternehmen mit weniger als 5 Beschäftigten haben KI eingesetzt',
    context: 'Rückblick auf die Jahre 2022 bis 2024, KfW-Mittelstandspanel.',
    sourceId: 'kfw-pm-2026',
  },
  {
    id: 'klein-amtlich',
    value: 23,
    label: 'der Unternehmen mit 10 bis 49 Beschäftigten setzen KI ein',
    context: 'Amtliche Statistik, Berichtsjahr 2025. Für 2024 meldete Destatis 17 Prozent, damals mit etwas anderer Abgrenzung der Unternehmen.',
    sourceId: 'destatis-2025',
  },
  {
    id: 'kanzleien',
    value: 25,
    label: 'der Steuerkanzleien setzen generative KI regelmäßig ein',
    context: 'Online-Befragung von 504 Kanzleien im Juni 2025. Ein Jahr vorher waren es 9 Prozent.',
    sourceId: 'datev-seismograf-2025',
  },
  {
    id: 'selbststaendige',
    value: 51.2,
    label: 'der Solo-Selbstständigen und Kleinstunternehmen setzen KI ein',
    context: 'Befragung des ifo Instituts mit Jimdo, veröffentlicht im Juni 2026. Für 2025 nennt ifo 30,4 Prozent.',
    sourceId: 'ifo-selbststaendige-2026',
  },
  {
    id: 'ab-20',
    value: 57,
    label: 'der Unternehmen ab 20 Beschäftigten setzen KI ein',
    context: 'Telefonische Befragung von 603 Unternehmen im Sommer 2026. Ein Jahr vorher waren es 36 Prozent.',
    sourceId: 'bitkom-ki-2026-09',
  },
];

export const BRANCHEN_INTRO = {
  eyebrow: 'Nach Branche',
  title: 'Wo KI schon angekommen ist und wo kaum.',
  lead: 'Für einzelne Branchen gibt es wenig belastbare Zahlen. Die beste Quelle ist die amtliche Statistik, allerdings erst ab 10 Beschäftigten. Für Immobilienmakler, Agenturen und Coaches habe ich keine eigene, belastbare Studie für Deutschland gefunden.',
};

export const BAR_GROUPS: readonly BarGroup[] = [
  {
    id: 'branchen',
    title: 'Anteil der Unternehmen mit KI im Jahr 2025, nach Branche',
    lead: 'Deutschland, Unternehmen ab 10 Beschäftigten. In Klammern, welche Betriebe aus meiner Zielgruppe in die Gruppe fallen.',
    bars: [
      { label: 'Werbung, Marktforschung und ähnliche Dienste (u. a. Agenturen)', value: 57, sourceId: 'eurostat-branchen-2025' },
      { label: 'Rechts- und Steuerberatung, Wirtschaftsprüfung, Unternehmensberatung, Architektur- und Ingenieurbüros (u. a. Kanzleien)', value: 46, sourceId: 'eurostat-branchen-2025' },
      { label: 'Grundstücks- und Wohnungswesen (u. a. Makler)', value: 29, sourceId: 'eurostat-branchen-2025' },
      { label: 'Alle Branchen', value: 26, sourceId: 'eurostat-branchen-2025', reference: true },
      { label: 'Baugewerbe (u. a. viele Handwerksbetriebe)', value: 14, sourceId: 'eurostat-branchen-2025' },
    ],
    footnote: 'Quelle: Eurostat, Datensatz isoc_eb_ain2, Datenstand 15. Juni 2026. Werte auf ganze Prozent gerundet.',
  },
  {
    id: 'bau',
    title: 'Handwerk und Bau: eine Frage, fünf Antworten',
    lead: 'Je nach Studie liegt der Anteil zwischen 4 und knapp 40 Prozent. Der Grund steht jeweils dabei.',
    bars: [
      { label: 'Bauhauptgewerbe, ifo Konjunkturumfrage, Mai 2026', value: 39.8, sourceId: 'ifo-2026-06' },
      { label: 'Baugewerbe ab 10 Beschäftigten, amtliche Statistik, 2025', value: 14, sourceId: 'eurostat-branchen-2025' },
      { label: 'Baugewerbe, Kleinstbetriebe und Solo-Selbstständige, Jimdo-ifo, 2026', value: 8.1, sourceId: 'dhz-2026-06' },
      { label: 'Baugewerbe im Mittelstand, KfW, Jahre 2022 bis 2024', value: 8, sourceId: 'kfw-pm-2026' },
      { label: 'Handwerk insgesamt ab 1 Beschäftigtem, Bitkom, Sommer 2025', value: 4, sourceId: 'bitkom-handwerk-bericht' },
    ],
    footnote: 'Den Wert für Kleinstbetriebe im Bau habe ich nur im Bericht der Deutschen Handwerks Zeitung gefunden, nicht in der ifo-Meldung selbst.',
  },
];

export interface Reason {
  title: string;
  text: readonly string[];
}

export const WHY_INTRO = {
  eyebrow: 'Einordnung',
  title: 'Warum die Zahlen so weit auseinanderliegen.',
  lead: 'Keine der Studien ist falsch. Sie messen nur Verschiedenes. Fünf Gründe, warum aus derselben Frage mal 4 und mal 57 Prozent werden.',
};

export const REASONS: readonly Reason[] = [
  {
    title: 'Was als „KI einsetzen“ zählt',
    text: [
      'Bitkom fragt Handwerksbetriebe: „Setzen Sie in Ihrem Unternehmen bereits KI ein?“ Die KfW fragt, ob ein Unternehmen in den Jahren 2022 bis 2024 KI-Anwendungen genutzt hat. Wer einmal im Jahr 2023 einen Text mit ChatGPT geschrieben hat, kann bei der zweiten Frage ehrlich Ja sagen und bei der ersten Nein.',
      'Die amtliche Statistik zählt acht Arten von KI mit, vom Texte-Erzeugen bis zur Spracherkennung. Ein einziges Häkchen reicht. Ob dahinter ein ausprobierter Chatbot steckt oder ein Ablauf, der jeden Tag läuft, sieht man an der Zahl nicht.',
      'Beim KI-Index Handwerk.NRW sagen 66 Prozent der Betriebe klar, dass sie KI noch nicht eingeführt haben. Für weitere 16 Prozent trifft das eher zu. KI in Teilen eingeführt haben also weniger als 20 Prozent. In der Zusammenfassung derselben Veröffentlichung steht trotzdem, ein Drittel setze KI aktiv ein. Rechnerisch kommt dieses Drittel zustande, wenn man alle mitzählt, die nicht klar Nein gesagt haben.',
    ],
  },
  {
    title: 'Wer gefragt wurde',
    text: [
      'Bitkom fragt im Handwerk ab 1 Beschäftigtem, die amtliche Statistik erst ab 10, die große Bitkom-Umfrage ab 20. Größere Betriebe setzen deutlich öfter KI ein: Laut Destatis sind es 23 Prozent bei 10 bis 49 Beschäftigten und 57 Prozent ab 250. Je kleiner die Untergrenze, desto kleiner meist die Zahl.',
      'Auch die Branchen machen viel aus. Der Jimdo-ifo-Index hat seinen Schwerpunkt bei Dienstleistern, die Bitkom-Handwerksstudie fragt nur Handwerk. Die DIHK kommt auf 35 Prozent, über alle Größen und Branchen hinweg, mit 4.686 Antworten. Davon stammen 2.055 von Betrieben mit bis zu 9 Beschäftigten.',
    ],
  },
  {
    title: 'Wie gefragt wurde',
    text: [
      'Bitkom ruft an und gewichtet die Antworten nach der Handwerkszählung. So soll das Ergebnis zum echten Handwerk passen, mit vielen kleinen Betrieben. Die amtliche Erhebung fragt rund 20.000 Unternehmen online, die Teilnahme ist freiwillig.',
      'Beim Jimdo-ifo-Index werden neue Teilnehmer unter anderem über Jimdo, einen Anbieter von Website-Baukästen, und einen Verband für Selbstständige gewonnen. Wer so zur Umfrage kommt, ist vermutlich digitaler unterwegs als der Durchschnitt. Das ist keine Kritik an der Studie, aber ein Grund, die hohe Zahl nicht auf jeden Kleinbetrieb zu übertragen.',
    ],
  },
  {
    title: 'Wann gefragt wurde',
    text: [
      'Die Zahlen steigen schnell. Bei Bitkom ging es in zwei Jahren von 20 über 36 auf 57 Prozent. Bei den Selbstständigen meldet ifo 30,4 Prozent für 2025 und 51,2 Prozent für 2026. Im Bauhauptgewerbe waren es laut ifo vor drei Jahren 7,1 Prozent, im Mai 2026 dann 39,8 Prozent.',
      'Eine Studie, die auf die Jahre 2022 bis 2024 zurückblickt, beschreibt also eine andere Zeit als eine Umfrage vom Sommer 2026. Die nächsten amtlichen Zahlen für 2026 sind laut Destatis für November oder Dezember 2026 geplant.',
    ],
  },
  {
    title: 'Selbst ein Verband kommt auf zwei Zahlen',
    text: [
      'Bitkom hat 2026 zwei Befragungen veröffentlicht, beide unter Unternehmen ab 20 Beschäftigten. Im März: 41 Prozent setzen KI ein. Im September: 57 Prozent. Für das jeweilige Vorjahr nennt die eine Meldung 17 Prozent, die andere 36 Prozent.',
      'Es sind also offenbar zwei verschiedene Umfragereihen mit unterschiedlicher Fragestellung. Den genauen Wortlaut nennen die Pressetexte nicht. Für Sie heißt das: Eine Zahl ohne Frage dahinter ist wenig wert.',
    ],
  },
];

export const MEANING = {
  eyebrow: 'Der KI-Realist',
  title: 'Was das für kleine Betriebe heißt.',
  text: [
    'Lassen Sie sich von keiner einzelnen Zahl unter Druck setzen. Weder von „schon mehr als die Hälfte“ noch von „erst 4 Prozent“. Beides beschreibt nicht Ihren Betrieb.',
    'Hinter den hohen Werten steckt meist ein Werkzeug zum Schreiben. Bei der KfW ist das Erzeugen von Text die häufigste Anwendung (14 Prozent der Mittelständler), KI für Arbeitsabläufe oder Entscheidungen kommt auf 5 Prozent. In der Bitkom-Umfrage vom September 2026 sagt kein einziges Unternehmen, das KI einsetzt, es schöpfe die Möglichkeiten vollständig aus.',
    'Interessant finde ich, was Betriebe bremst. Bei Unternehmen mit 10 bis 49 Beschäftigten, die KI erwogen, aber nicht eingeführt haben, nennen 73 Prozent fehlendes Wissen. 64 Prozent sind unsicher bei den rechtlichen Folgen, 60 Prozent haben Bedenken beim Datenschutz. Die Kosten nennt nur ein Drittel.',
    'Meine Einordnung: Die Frage für Ihren Betrieb lautet nicht, ob Sie bei KI vorn liegen. Sie lautet, welcher Ablauf Sie jede Woche Stunden kostet und ob er sich automatisieren lässt. Dafür braucht es oft gar keine KI, sondern klare Regeln, die zuverlässig abgearbeitet werden.',
    'Noch eine Zahl, die mich als Berater betrifft: Im KI-Index Handwerk.NRW wünscht sich nicht einmal jeder zehnte Betrieb Unterstützung von privaten Beratern. Mehr als die Hälfte setzt auf die Organisationen des Handwerks. Das kann ich gut verstehen. Vertrauen muss man sich verdienen. Deshalb gebe ich eine Garantie.',
  ],
  links: [
    { label: 'Was meine Garantie genau umfasst', href: '/garantie' },
    { label: 'Abläufe, die sich in kleinen Betrieben automatisieren lassen', href: '/ablaeufe' },
    { label: 'KI im Betrieb ohne Hype', href: '/wissen/ki-im-betrieb-ohne-hype' },
    { label: 'So arbeite ich als KI-Berater', href: '/ki-beratung' },
  ],
};

export const METHOD = {
  eyebrow: 'Methodik und Quellen',
  title: 'Woher die Zahlen kommen.',
  text: [
    'Ich habe nur Zahlen übernommen, die in der jeweiligen Quelle selbst stehen. Wo ich eine Zahl nur in einem Zeitungsbericht gefunden habe, steht das dabei. Werte aus der Eurostat-Datenbank habe ich auf ganze Prozent gerundet.',
    'Für Immobilienmakler, Agenturen und Coaches gibt es nach meiner Suche keine belastbare deutsche Erhebung. Für Makler und Agenturen bleibt nur die Branchengruppe aus der amtlichen Statistik, für Coaches gibt es gar keine Zahl. Kennen Sie eine gute Studie, die hier fehlt? Schreiben Sie mir.',
  ],
  accessedLabel: 'Alle Quellen abgerufen am',
  sampleLabel: 'Befragt',
  periodLabel: 'Zeitraum',
};

export const DATEN_FAQ_INTRO = {
  eyebrow: 'Fragen',
  title: 'Häufige Fragen zu KI in kleinen Betrieben.',
};

export const DATEN_FAQS: Faq[] = [
  {
    q: 'Wie viele kleine Betriebe setzen 2026 KI ein?',
    a: 'Das hängt davon ab, wie klein und welche Branche. Amtlich sind es 23 Prozent der Unternehmen mit 10 bis 49 Beschäftigten (Berichtsjahr 2025). Bei Solo-Selbstständigen und Kleinstunternehmen meldet ifo für 2026 51,2 Prozent. Im Handwerk ab 1 Beschäftigtem waren es laut Bitkom im Sommer 2025 nur 4 Prozent.',
  },
  {
    q: 'Warum sind die Zahlen zur KI-Nutzung so unterschiedlich?',
    a: 'Weil die Studien Verschiedenes messen. Manche fragen nach dem Einsatz heute, andere, ob KI irgendwann in drei Jahren verwendet wurde. Die Untergrenze liegt mal bei 1, mal bei 10 oder 20 Beschäftigten. Und die Befragten kommen aus verschiedenen Branchen und auf verschiedenen Wegen zur Umfrage.',
  },
  {
    q: 'Welche Zahl ist die verlässlichste?',
    a: 'Für Unternehmen ab 10 Beschäftigten die amtliche Statistik von Destatis: rund 20.000 befragte Unternehmen, in der ganzen EU nach denselben Regeln. Für das Handwerk halte ich die Bitkom-Studie für die beste, weil sie die Antworten nach der Handwerkszählung gewichtet. Für ganz kleine Betriebe gibt es keine Zahl, die ich ohne Einschränkung empfehlen würde.',
  },
  {
    q: 'Wofür setzen kleine Betriebe KI am häufigsten ein?',
    a: 'Vor allem für Texte. Laut KfW setzen 13 Prozent der Unternehmen mit weniger als 5 Beschäftigten KI zum Erzeugen von Sprache ein, 9 Prozent zur Texterkennung. Bei den Selbstständigen nennt ifo Recherche, Ideen, Texte, Übersetzungen sowie Marketing und Vertrieb.',
  },
];

/** Formatiert einen Prozentwert deutsch, z. B. 51.2 → „51,2“. */
export function formatPercent(value: number): string {
  return Number.isInteger(value) ? String(value) : value.toFixed(1).replace('.', ',');
}

export function findSource(id: string): DataSource | undefined {
  return SOURCES.find((source) => source.id === id);
}

/** Kurzname der Quelle für Kacheln: Herausgeber ohne Zusatz, dazu das Datum. */
export function shortSourceName(sourceId: string): string {
  const source = findSource(sourceId);
  if (!source) throw new Error(`Unbekannte Quelle: ${sourceId}`);
  return `${source.publisher.split(',')[0]}, ${source.publishedLabel}`;
}

/** Sprungmarke zur Quelle in der Quellenliste. */
export function sourceAnchor(id: string): string {
  return `quelle-${id}`;
}
