// Texte der Hauptseite /ki-beratung.
// Suchbegriffe: KI-Berater, KI-Beratung (kleine Unternehmen, Mittelstand, KMU), daneben KI-Automatisierung und Prozessautomatisierung.
// Ich-Form, Ansprache mit „Sie“, keine erfundenen Zahlen oder Kundenfälle. Stilregeln prüft lib/content/content.test.ts.

import type { NavLink } from './site';
import type { FlowStep } from '@/lib/flow/scene';
import type { Faq, Principle } from './types';

export const KI_BERATUNG_PATH = '/ki-beratung';

export const KI_BERATUNG_SEO = {
  title: 'KI-Berater für kleine Unternehmen',
  description:
    'KI-Beratung für KMU und kleine Unternehmen, remote in ganz Deutschland: Ich automatisiere den Ablauf, der am meisten Zeit kostet. 4 Wochen, Festpreis, Garantie.',
  serviceName: 'KI-Beratung für kleine Unternehmen und Mittelstand',
  serviceType: 'KI-Beratung und Prozessautomatisierung',
  audience: 'Inhaber kleiner und mittlerer Unternehmen',
  breadcrumb: 'KI-Beratung',
};

export const KI_BERATUNG_HERO = {
  eyebrow: 'KI-Beratung für kleine Unternehmen und Mittelstand',
  title: 'KI-Berater für kleine Betriebe. Ohne Hype, mit Ergebnis.',
  lead: 'Ich bin Marco Gundlach und nenne mich den KI-Realisten. Als KI-Berater bleibe ich nicht bei Folien und Ideen stehen. Ich suche mit Ihnen den Ablauf, der Ihren Betrieb jede Woche am meisten Zeit kostet, und automatisiere ihn in 4 Wochen. Zum Festpreis, mit Garantie, remote in ganz Deutschland.',
  primaryCta: 'Ablauf schildern',
  secondaryCta: 'So läuft die Beratung ab',
};

// Ohne Links: Landingpages werden nur vom Startseiten-Slider verlinkt.
export interface ServiceExample {
  label: string;
  title: string;
  text: string;
}

export const KI_BERATUNG_SERVICES = {
  eyebrow: 'Leistung',
  title: 'Was ich als KI-Berater für Sie mache.',
  text: [
    'Die meisten Inhaber, mit denen ich spreche, brauchen keine KI-Strategie. Sie brauchen ihre Abende zurück. Deshalb fange ich nicht mit der Frage an, was KI alles kann. Ich frage, welche Arbeit bei Ihnen jede Woche wiederkommt und niemandem Spaß macht.',
    'Für genau diese Arbeit baue ich eine Lösung. Meistens ist das eine Prozessautomatisierung mit festen Regeln: Daten wandern aus der E-Mail in Ihre Branchensoftware, Erinnerungen gehen von allein raus, Dokumente landen im richtigen Ordner. KI kommt dazu, wo sie wirklich hilft. Etwa beim Lesen einer frei formulierten Anfrage oder beim Entwurf einer Antwort, den Sie prüfen, bevor er rausgeht.',
    'Meine Werkzeuge: meistens n8n, auf einem Server bei Hostinger in einem Rechenzentrum in der EU, dazu KI-Modelle von Anthropic (Claude) oder OpenAI. Ihre Programme bleiben, wie sie sind. Ich verbinde, was schon da ist.',
  ],
  examplesTitle: 'So sieht KI-Automatisierung in den Branchen aus, für die ich am häufigsten arbeite:',
  examples: [
    {
      label: 'Handwerk',
      title: 'Angebote ohne Sonntagabend.',
      text: 'Aus Aufmaß und Ihren Standardpositionen entsteht ein Angebotsentwurf. Sie prüfen und geben frei. Nach ein paar Tagen erinnert eine freundliche E-Mail den Kunden.',
    },
    {
      label: 'Immobilienmakler',
      title: 'Portal-Anfragen in Minuten beantwortet.',
      text: 'Jede Anfrage bekommt schnell eine persönliche Antwort mit Exposé. Besichtigungstermine wählen Interessenten selbst aus Ihren freien Zeiten.',
    },
    {
      label: 'Steuerkanzlei',
      title: 'Fehlende Belege, ohne hinterherzulaufen.',
      text: 'Mandanten bekommen eine klare Liste, was fehlt, und eine Erinnerung, bis alles da ist. Eingehende Belege werden benannt und dem richtigen Mandanten zugeordnet. Ihr Team prüft nur noch.',
    },
    {
      label: 'Agentur',
      title: 'Der Statusbericht liegt als Entwurf bereit.',
      text: 'Der Wochenbericht entsteht aus Ihren Projektdaten. Die Projektleitung liest ihn, ergänzt und schickt ab.',
    },
    {
      label: 'Coaching',
      title: 'Nach der Sitzung ist der Papierkram erledigt.',
      text: 'Unterlagen, ein Link für den nächsten Termin und die Rechnung gehen raus, ohne dass Sie etwas abtippen.',
    },
  ] satisfies ServiceExample[],
  footnote: 'Ihre Branche fehlt? Das macht nichts. Die Frage ist immer dieselbe: Welcher Ablauf kommt jede Woche wieder?',
};

export const KI_BERATUNG_NOT_INTRO = {
  eyebrow: 'Ehrlich gesagt',
  title: 'Was ich als KI-Berater nicht mache.',
  lead: 'Ein Teil der KI-Beratung am Markt verkauft vor allem Aufregung. Da mache ich nicht mit.',
};

export const KI_BERATUNG_NOT: Principle[] = [
  {
    title: 'Keine Folien-Workshops.',
    text: 'Ein halber Tag mit Klebezetteln und einer Liste von 40 Ideen hilft Ihnen am Montag nicht weiter. Bei mir steht am Ende ein Ablauf, der im Alltag läuft.',
  },
  {
    title: 'Keine Chatbots um jeden Preis.',
    text: 'Ein Chatbot auf der Website klingt modern. Für die meisten kleinen Betriebe ist er die falsche Baustelle, eine schnelle Antwort auf jede Anfrage spart oft mehr Zeit. Bringt KI in Ihrem Fall nichts, baue ich ohne KI.',
  },
  {
    title: 'Keine Abhängigkeit von mir.',
    text: 'Sie bekommen alle Zugänge, eine Anleitung und ein kurzes Erklärvideo. Was ich baue, gehört Ihnen. Betreuung gibt es auf Wunsch, monatlich kündbar.',
  },
];

export const KI_BERATUNG_PROCESS_INTRO = {
  label: 'So läuft es',
  title: 'So läuft eine KI-Beratung bei mir ab.',
  lead: 'Am Anfang steht ein Gespräch von 30 Minuten, das Sie nichts kostet. Rechnet sich eine Automatisierung, bekommen Sie danach einen Festpreis schriftlich. Dann folgen 4 Wochen mit wenigen, festen Terminen. Ihr Aufwand insgesamt: rund 5 Stunden.',
};

export const KI_BERATUNG_FIT = {
  eyebrow: 'Für wen',
  title: 'Für wen eine KI-Beratung bei mir passt.',
  lead: 'Ich arbeite mit kleinen Unternehmen und KMU aus dem Mittelstand, in denen die Inhaberin oder der Inhaber selbst entscheidet.',
  yes: [
    'Ihr Betrieb macht etwa 20.000 € Umsatz im Monat oder mehr.',
    'Es gibt einen Ablauf, der jede Woche wiederkommt und mehrere Stunden kostet.',
    'Ihre Daten liegen schon am Computer, etwa in E-Mails, Ihrer Branchensoftware oder in Tabellen.',
    'Sie sind bei KI skeptisch und wollen erst sehen, dass es funktioniert. Das ist mir recht.',
  ],
  no: [
    'Sie suchen jemanden, der Ihnen eine KI-Strategie für die nächsten fünf Jahre schreibt.',
    'Sie wollen mit KI Mitarbeiter ersetzen.',
    'Jeder Fall in Ihrem Ablauf ist anders, ein Muster gibt es nicht.',
    'Sie planen ein großes Software-Projekt mit Ausschreibung und Lastenheft. Dafür bin ich nicht der Richtige.',
  ],
};

export const KI_BERATUNG_COSTS = {
  eyebrow: 'Kosten',
  title: 'Was kostet eine KI-Beratung bei mir?',
  text: [
    'Sie bekommen einen Festpreis für einen Ablauf. Keine Tagessätze, keine offene Stundenabrechnung. Den Preis nenne ich Ihnen nach dem Erstgespräch schriftlich, denn er hängt vom Ablauf ab: wie viele Programme beteiligt sind, wie viele Sonderfälle es gibt, ob ein KI-Schritt dabei ist.',
    'Mein Maßstab: Die Automatisierung muss sich innerhalb eines Jahres bezahlt machen. Was Sie der Ablauf heute kostet, rechnen Sie mit dem Zeitrechner weiter oben nach. Liegt mein Preis darüber, rate ich Ihnen ab.',
    'Dazu kommen laufende Kosten: der Server, bei KI-Schritten die Gebühren des KI-Anbieters, die nach Verbrauch abgerechnet werden, und auf Wunsch meine Betreuung zum festen Monatsbetrag. Was davon bei Ihnen anfällt, steht vorher im Angebot.',
  ],
  link: { label: 'Was kostet KI-Automatisierung?', href: '/wissen/was-kostet-ki-automatisierung' } satisfies NavLink,
};

export const KI_BERATUNG_REMOTE = {
  eyebrow: 'Remote',
  title: 'KI-Beratung remote, für Betriebe in ganz Deutschland.',
  text: [
    'Ich arbeite für Betriebe in ganz Deutschland, meist per Video. Das klingt erst einmal unpersönlich. In der Praxis teilen Sie Ihren Bildschirm und zeigen mir, wie der Ablauf heute wirklich läuft, mit Ihren Programmen und Ihren echten Fällen. Genau das muss ich sehen.',
    'Für Sie heißt das: keine Anfahrt und Termine, die in den Arbeitstag passen. Die Aufnahme in Woche 1 dauert etwa 2 Stunden, die anderen Termine sind kürzer.',
    'Wenn ein Termin vor Ort hilft, etwa weil der Ablauf in der Werkstatt oder am Empfang beginnt, komme ich vorbei. Das klären wir im Erstgespräch.',
  ],
};

export const KI_BERATUNG_ABOUT = {
  eyebrow: 'Ihr KI-Berater · Der KI-Realist',
  title: 'Sie arbeiten direkt mit mir, Marco Gundlach.',
  text: [
    'Seit über 14 Jahren leite ich Digitalisierungsprojekte, unter anderem für Hugo Boss, Fressnapf und Aktion Mensch. Dort habe ich gesehen, wie viel Geld in Projekte fließt, die am Ende niemand verwendet. Für kleine Betriebe mache ich es anders: ein Ablauf, der läuft, statt eines großen Plans.',
    'Ich bin geprüfter Ausbilder (IHK) und KI-Trainer und habe mich bei Anthropic zu den Fähigkeiten und Grenzen von KI zertifizieren lassen. Im Alltag zählt etwas anderes: Ich erkläre so, dass Sie und Ihr Team verstehen, was im Hintergrund passiert.',
  ],
  photoAlt: 'Marco Gundlach, KI-Berater',
};

export const KI_BERATUNG_FAQ_INTRO = {
  eyebrow: 'Fragen',
  title: 'Häufige Fragen zur KI-Beratung.',
};

export const KI_BERATUNG_FAQS: Faq[] = [
  {
    q: 'Was macht ein KI-Berater?',
    a: 'Ein KI-Berater prüft, wo KI und Automatisierung in Ihrem Betrieb Zeit sparen und wo nicht. Viele hören an dieser Stelle auf und liefern einen Bericht. Ich gehe einen Schritt weiter: Ich baue die Lösung für einen Ablauf, teste sie mit Ihren echten Fällen und übergebe sie an Ihr Team.',
  },
  {
    q: 'Was kostet eine KI-Beratung?',
    a: 'Bei mir einen Festpreis pro Ablauf, den Sie nach dem Erstgespräch schriftlich bekommen. Er richtet sich nach dem Ablauf, nicht nach meinen Stunden. Die ersten drei Betriebe zahlen den Pilotpreis von 1.999 € zzgl. USt., mit derselben Garantie. Das Erstgespräch kostet nichts.',
  },
  {
    q: 'Brauche ich für KI eine IT-Abteilung?',
    a: 'Nein. Mein Angebot ist für Betriebe ohne eigene IT gedacht. Ich richte alles ein, und Sie bekommen eine Anleitung und ein kurzes Erklärvideo. Im Alltag arbeiten Sie weiter mit dem, was Sie kennen: E-Mail, Ihre Branchensoftware, vielleicht ein Formular.',
  },
  {
    q: 'Wie läuft die Zusammenarbeit remote?',
    a: 'Wir sprechen per Video, meist mit geteiltem Bildschirm. In Woche 1 zeigen Sie mir den Ablauf, das dauert etwa 2 Stunden. Danach gibt es einen kurzen Zwischenstand, einen Test mit echten Fällen und eine Einweisung für Ihr Team. Wenn ein Termin vor Ort hilft, komme ich vorbei.',
  },
  {
    q: 'Was passiert mit meinen Daten?',
    a: 'Ihre Daten bleiben bei Ihnen oder auf Servern von Hostinger in einem Rechenzentrum in der EU. Wo nötig, schließen wir einen Vertrag zur Auftragsverarbeitung. Ich setze keine Dienste ein, die Ihre Daten zum Training von KI-Modellen verwenden.',
  },
  {
    q: 'Gibt es eine Förderung für KI-Beratung?',
    a: 'Das hängt vom Programm ab. Das bekannte Programm des BAFA bezuschusst nur reine Beratung, nicht die Umsetzung. Bei mir steht die Umsetzung im Mittelpunkt: Ich baue den Ablauf. Deshalb verspreche ich Ihnen keine Förderung. Planen Sie so, dass sich die Automatisierung auch ohne Zuschuss rechnet.',
  },
  {
    q: 'Brauche ich überhaupt KI, oder reicht Automatisierung?',
    a: 'Oft reicht Automatisierung mit klaren Regeln. KI setze ich ein, wo Text verstanden oder geschrieben werden muss, etwa bei frei formulierten Anfragen oder schlecht gescannten Belegen. Das klären wir an Ihrem Ablauf, nicht im Allgemeinen.',
  },
  {
    q: 'Was passiert nach den 4 Wochen?',
    a: 'Der Ablauf gehört Ihnen und läuft weiter. Sie können ihn selbst betreuen oder mich damit beauftragen, zum festen Monatsbetrag und monatlich kündbar. Wenn Sie möchten, nehmen wir uns danach den nächsten Ablauf vor.',
  },
];

export const KI_BERATUNG_READING = {
  eyebrow: 'Weiterlesen',
  title: 'Mehr zu KI und Automatisierung im Betrieb.',
  links: [
    { label: 'Was macht ein KI-Berater?', href: '/wissen/was-macht-ein-ki-berater' },
    { label: 'Was kostet KI-Automatisierung?', href: '/wissen/was-kostet-ki-automatisierung' },
    { label: 'KI im Betrieb: Was hilft und was nur gut klingt', href: '/wissen/ki-im-betrieb-ohne-hype' },
    { label: 'Wann sich eine Automatisierung lohnt und wann nicht', href: '/wissen/wann-sich-automatisierung-lohnt' },
  ] satisfies NavLink[],
};

/** Schritte der 3D-Grafik im Seitenkopf. Hervorgehoben ist die Freigabe durch den Menschen. */
export const KI_BERATUNG_FLOW: readonly FlowStep[] = [
  { label: 'Anfrage kommt' },
  { label: 'KI liest mit' },
  { label: 'Entwurf entsteht' },
  { label: 'Sie prüfen', highlight: true },
  { label: 'Erledigt' },
];
