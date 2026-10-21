import type { Article } from '@/lib/types';
import { monthLabel } from './dates';

const PUBLISH_ISO = '2026-10-19';

export const wasMachtEinKiBerater: Article = {
  id: 101,
  slug: 'was-macht-ein-ki-berater',
  title: 'Was macht ein KI-Berater? Und woran erkennen Sie einen guten?',
  seoTitle: 'Was macht ein KI-Berater für kleine Betriebe?',
  date: monthLabel(PUBLISH_ISO),
  datePublished: PUBLISH_ISO,
  read_minutes: 7,
  category: 'Methodik',
  lead: 'Ein KI-Berater findet heraus, wo in Ihrem Betrieb Zeit verloren geht, und sagt ehrlich, ob KI hilft. Was er konkret tut und woran Sie einen guten erkennen.',
  body: [
    { kind: 'h2', text: 'Was macht ein KI-Berater?' },
    { kind: 'p', text: 'Die kurze Antwort: Ein KI-Berater schaut sich an, wie in Ihrem Betrieb gearbeitet wird, und findet die Stellen, an denen Zeit verloren geht. Dann sagt er Ihnen, ob dort KI hilft, eine einfache Automatisierung oder gar keine Technik. Ein guter KI-Berater lässt es nicht bei der Empfehlung. Er baut die Lösung, testet sie mit Ihren echten Fällen und übergibt sie so, dass Ihr Team damit zurechtkommt.' },
    { kind: 'p', text: 'Der Begriff ist nicht geschützt. Jeder darf sich so nennen. Unter KI-Beratung läuft deshalb sehr Verschiedenes: der Vortrag über die Zukunft der Arbeit, der Workshop zum Schreiben besserer Eingaben für ChatGPT, das Strategiepapier für den Vorstand. Für einen Betrieb mit zehn oder zwanzig Leuten passt davon wenig. Ich beschreibe hier, was ein KI-Berater für einen kleinen Betrieb tun sollte. Und woran Sie merken, dass Sie an den Falschen geraten sind.' },

    { kind: 'h2', text: 'Was ein KI-Berater in einem kleinen Betrieb konkret tut' },
    { kind: 'p', text: 'Am Anfang steht keine Technik, sondern eine Frage: Was kostet Sie jede Woche am meisten Zeit? Bei einem Dachdecker sind es oft die Angebote, die abends am Küchentisch entstehen. Im Maklerbüro die Portalanfragen, die alle gleich beginnen und trotzdem einzeln beantwortet werden. In der Kanzlei die Belege, denen jemand hinterhertelefoniert.' },
    { kind: 'p', text: 'Dann wird der Ablauf aufgenommen, Schritt für Schritt. Wo kommt die Anfrage herein? Wer tippt was ab, und in welches Programm? Was passiert, wenn ein Foto fehlt oder ein Kunde zweimal schreibt? Das klingt kleinteilig. Genau hier entscheidet sich aber, ob eine Automatisierung später im Alltag hält oder nach zwei Wochen umgangen wird.' },
    { kind: 'p', text: 'Danach kommt eine Rechnung. Wie viele Stunden kostet der Ablauf im Jahr, und was würde eine Automatisierung kosten? Erst wenn diese Rechnung aufgeht, wird gebaut. Am Ende stehen ein Test mit echten Fällen, eine Einweisung für das Team und eine Anleitung zum Nachlesen.' },
    { kind: 'q', text: 'Ein KI-Berater, der nach dem Gespräch nur Folien hinterlässt, hat Ihnen Arbeit gemacht, nicht abgenommen.' },

    { kind: 'h2', text: 'Was ein KI-Berater nicht tut' },
    { kind: 'p', text: 'Er ersetzt keine Mitarbeiter. Wer Ihnen das verspricht, kennt entweder Ihren Betrieb nicht oder die Grenzen der Technik. KI kann einen Entwurf schreiben, eine E-Mail sortieren oder Angaben aus einem schlecht gescannten Beleg lesen. Die Verantwortung für das, was rausgeht, bleibt bei einem Menschen.' },
    { kind: 'p', text: 'Er verspricht auch keinen Umsatz. Was sich ehrlich zusagen lässt, ist Zeit: weniger Abtippen, weniger Suchen, weniger Nachfassen von Hand. Was Sie mit dieser Zeit machen, liegt bei Ihnen.' },
    { kind: 'p', text: 'Und er drängt Ihnen keine KI auf, wo keine hingehört. Die meisten Abläufe, die ich in kleinen Betrieben sehe, brauchen klare Regeln. KI kommt nur an einzelnen Stellen dazu, meist dort, wo Text gelesen oder geschrieben werden muss.' },

    { kind: 'h2', text: 'Berater, Agentur, Software-Anbieter oder Schulung: Wo ist der Unterschied?' },
    { kind: 'p', text: 'Diese vier werden oft in einen Topf geworfen. Sie lösen aber verschiedene Probleme.' },
    { kind: 'p', text: 'Ein Software-Anbieter verkauft Ihnen sein Produkt. Das kann gut sein, wenn es genau zu Ihrem Ablauf passt. Seine Antwort auf jede Frage ist aber sein Produkt. Ob Sie mit einer kleinen Verbindung zwischen Ihren bestehenden Programmen besser fahren würden, wird er Ihnen kaum sagen.' },
    { kind: 'p', text: 'Eine Agentur baut, oft mit mehreren Leuten und einer eigenen Projektleitung. Für größere Vorhaben ist das richtig. Für einen einzelnen Ablauf in einem Betrieb mit 15 Leuten wird es schnell schwerfällig, und Ihr Ansprechpartner wechselt.' },
    { kind: 'p', text: 'Eine Schulung bringt Ihrem Team bei, mit Werkzeugen wie ChatGPT umzugehen. Das hilft beim Schreiben einzelner Texte. Einen wiederkehrenden Ablauf nimmt sie Ihnen nicht ab. Danach sitzt wieder ein Mensch davor und kopiert hin und her.' },
    { kind: 'p', text: 'Ein KI-Berater, wie ich den Beruf verstehe, steht dazwischen. Er hat kein Produkt zu verkaufen, schaut sich Ihren Ablauf an und baut dann selbst, was nötig ist. Oder er rät ab.' },

    { kind: 'h2', text: 'Woran erkenne ich einen guten KI-Berater?' },
    { kind: 'p', text: 'Ein paar Fragen, die Sie im Erstgespräch stellen können.' },
    { kind: 'p', text: 'Fragt er nach Ihren Abläufen, bevor er über KI redet? Ein guter Berater will wissen, wie oft etwas vorkommt, wie lange es dauert und welche Programme Sie haben. Wer nach fünf Minuten schon die Lösung kennt, hatte sie vorher schon in der Tasche.' },
    { kind: 'p', text: 'Nennt er einen Preis, bevor die Arbeit beginnt? Ein Festpreis zwingt beide Seiten, vorher genau hinzuschauen. Abrechnung nach Stunden ohne Obergrenze verschiebt das Risiko zu Ihnen.' },
    { kind: 'p', text: 'Sagt er Ihnen auch, was nicht geht? Wenn alles möglich klingt, wird es teuer. Ein ehrlicher Berater rät Ihnen von Dingen ab, an denen er verdienen könnte.' },
    { kind: 'p', text: 'Gehört Ihnen am Ende, was gebaut wurde? Fragen Sie nach den Zugängen, nach einer Anleitung und danach, ob ein anderer Dienstleister übernehmen könnte.' },

    { kind: 'h2', text: 'Warnzeichen bei der KI-Beratung' },
    { kind: 'p', text: 'Workshops ohne Ergebnis. Ein halber Tag mit Klebezetteln und einer langen Liste an Ideen fühlt sich gut an. Wenn danach nichts läuft, haben Sie Geld für ein gutes Gefühl bezahlt. Fragen Sie vorher: Was läuft nach dem Auftrag, das vorher nicht lief?' },
    { kind: 'p', text: 'Abhängigkeit. Manche Lösungen funktionieren nur, solange der Berater sie betreut. Die Zugänge liegen bei ihm, die Abläufe sind nirgends beschrieben, die Software läuft auf seinem Konto. Das merken Sie erst, wenn Sie wechseln wollen.' },
    { kind: 'p', text: 'Hype. Wenn im ersten Gespräch Wörter wie Revolution fallen und von KI-Agenten die Rede ist, die Ihren Betrieb allein führen, geht es um die Vorführung, nicht um Ihren Alltag. Ich setze KI jeden Tag ein. Gerade deshalb weiß ich, wie oft sie danebenliegt.' },
    { kind: 'q', text: 'Die beste Frage an jeden KI-Berater: Wer prüft das Ergebnis, und was passiert, wenn es falsch ist?' },

    { kind: 'h2', text: 'KI-Beratung für kleine Unternehmen und Mittelstand: Was anders ist' },
    { kind: 'p', text: 'Über 14 Jahre habe ich Digitalisierungsprojekte in großen Unternehmen geleitet, unter anderem für Hugo Boss, Fressnapf und Aktion Mensch. Dort gibt es IT-Abteilungen, Lenkungskreise und Budgets für Pilotphasen. Ein kleiner Betrieb hat nichts davon. Der Inhaber entscheidet selbst, oft zwischen zwei Terminen, und er hat keine Zeit für ein Projekt, das ein halbes Jahr dauert.' },
    { kind: 'p', text: 'KI-Beratung für kleine Unternehmen muss deshalb kleiner anfangen. Ein Ablauf statt einer Strategie. Wochen statt Monate. Ein Preis, der vorher feststeht. Im Mittelstand mit 50 oder 100 Leuten sieht manches anders aus. Auch dort rate ich aber dazu, mit einem einzelnen Ablauf zu beginnen und an ihm zu lernen, bevor das nächste Vorhaben startet.' },

    { kind: 'h2', text: 'Wie ich als KI-Berater arbeite' },
    { kind: 'p', text: 'Ich nehme mir einen Ablauf vor: den, der Sie jede Woche am meisten Zeit kostet. In der ersten Woche zeigen Sie mir, wie er heute läuft. In der zweiten baue ich. In der dritten läuft die Lösung neben Ihrem gewohnten Ablauf mit, und wir prüfen sie an echten Fällen. In der vierten weise ich Sie und Ihr Team ein. Ihr eigener Aufwand liegt bei rund fünf Stunden.' },
    { kind: 'p', text: 'Den Festpreis bekommen Sie nach dem Erstgespräch schriftlich. Mein Maßstab: Die Automatisierung muss sich innerhalb eines Jahres bezahlt machen, sonst rate ich ab. Läuft der Ablauf nach vier Wochen nicht, bessere ich ohne Aufpreis nach, bis er den vereinbarten Umfang erfüllt. Was „läuft“ heißt, halten wir zu Beginn schriftlich fest.' },
    { kind: 'p', text: 'Ich arbeite remote für Betriebe in ganz Deutschland, meistens per Video. Das klappt besser, als viele vermuten, weil ich ohnehin am Bildschirm sehen muss, wie Ihre Programme aussehen. Wenn ein Termin vor Ort hilft, komme ich vorbei. Was ich baue, gehört Ihnen. Danach können Sie es selbst betreuen oder mich damit beauftragen, monatlich kündbar.' },

    { kind: 'h2', text: 'Brauchen Sie überhaupt einen KI-Berater?' },
    { kind: 'p', text: 'Nicht immer. Wenn Ihr Problem ein einzelner Text ist, den Sie schneller schreiben möchten, reichen ein Abo für ein KI-Werkzeug und eine Stunde Ausprobieren. Wenn bei Ihnen fast alles auf Papier läuft, ist der erste Schritt ein Formular oder eine Tabelle, keine KI.' },
    { kind: 'p', text: 'Einen KI-Berater brauchen Sie, wenn ein Ablauf jede Woche wiederkommt, mehrere Programme berührt und Sie oder Ihr Team Stunden kostet. Dann lohnt sich ein Gespräch. Im Erstgespräch erzählen Sie, ich frage nach. Danach wissen Sie, ob sich eine Automatisierung rechnet. Auch wenn die Antwort Nein lautet.' },
  ],
  notes: [
    '„KI-Berater“ ist keine geschützte Berufsbezeichnung. Fragen Sie im Erstgespräch, wie gearbeitet wird und was Ihnen am Ende gehört.',
    'Meine Zertifikate: Claude Academy von Anthropic zu Fähigkeiten und Grenzen von KI, Professional Scrum Master und Product Owner, ITIL 4, geprüfter Ausbilder (IHK).',
  ],
  related: [
    { label: 'KI-Berater für Prozessautomatisierung', href: '/ki-beratung' },
    { label: 'Warum ich nach vier Wochen gehe', href: '/wissen/warum-ich-nach-vier-wochen-gehe' },
    { label: 'KI im Betrieb: Was hilft und was nur gut klingt', href: '/wissen/ki-im-betrieb-ohne-hype' },
    { label: 'Garantie: Was ich zusage und was nicht', href: '/garantie' },
    { label: 'Automatisierungs-Check: Welcher Ablauf zuerst?', href: '/automatisierungs-check' },
    { label: 'Erstgespräch vereinbaren', href: '/kontakt' },
  ],
};
