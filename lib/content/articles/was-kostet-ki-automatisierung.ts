import type { Article } from '@/lib/types';
import { monthLabel } from './dates';

const PUBLISH_ISO = '2026-10-19';

export const wasKostetKiAutomatisierung: Article = {
  id: 102,
  slug: 'was-kostet-ki-automatisierung',
  title: 'Was kostet KI-Automatisierung? Ein ehrlicher Überblick.',
  seoTitle: 'Was kostet KI-Automatisierung? Preise und Rechenweg',
  date: monthLabel(PUBLISH_ISO),
  datePublished: PUBLISH_ISO,
  read_minutes: 6,
  category: 'Kosten',
  lead: 'Was kostet KI-Automatisierung für einen kleinen Betrieb? Wovon der Preis abhängt, welche laufenden Kosten dazukommen und wie Sie selbst nachrechnen.',
  body: [
    { kind: 'p', text: 'Wer fragt, was eine Automatisierung kostet, hört meistens „Kommt darauf an“. Das stimmt sogar. Es hilft Ihnen aber nicht weiter, wenn Sie ein Budget planen oder ein Angebot einordnen wollen. Deshalb zeige ich hier, wovon der Preis abhängt, welche Kosten nach dem Bau noch anfallen und wie Sie vorher selbst ausrechnen, wie viel eine Automatisierung höchstens kosten darf.' },

    { kind: 'h2', text: 'Was kostet KI-Automatisierung für einen kleinen Betrieb?' },
    { kind: 'p', text: 'Einen Listenpreis gibt es nicht, weil kein Ablauf wie der andere ist. Eine Anfrage, die aus dem Postfach in eine Tabelle wandert, ist etwas anderes als ein Angebotsablauf, der Kundendaten, Fotos, Preislisten und Ihre Handwerkersoftware verbindet. Was ich Ihnen sagen kann: Bei mir bekommen Sie einen Festpreis für den ganzen Ablauf, schriftlich nach dem Erstgespräch. Er richtet sich nach dem Aufwand des Ablaufs, nicht nach meinen Stunden.' },
    { kind: 'p', text: 'Der einzige feste Preis, den ich öffentlich nenne, ist der Pilotpreis. Die ersten drei Betriebe bekommen ihren Ablauf für 1.999 € netto (zzgl. USt.), mit derselben Garantie. Im Gegenzug darf ich das Ergebnis als Fallbeispiel zeigen, wenn Sie einverstanden sind.' },

    { kind: 'h2', text: 'Wovon der Preis abhängt' },
    { kind: 'p', text: 'Vier Dinge treiben den Aufwand. Keines davon hat mit der Frage zu tun, ob KI dabei ist.' },
    { kind: 'p', text: 'Erstens die Zahl der Programme. Jede Verbindung muss eingerichtet, getestet und abgesichert werden. Ein Ablauf zwischen Postfach und Kalender ist schnell gebaut. Kommen Branchensoftware, Buchhaltung und ein Cloud-Ordner dazu, wächst der Aufwand. Manche Branchenprogramme haben keine offene Schnittstelle. Dann wird es aufwendiger oder geht gar nicht, und das kläre ich vor dem Angebot.' },
    { kind: 'p', text: 'Zweitens die Sonderfälle. Der Normalfall ist selten das Problem. Teuer werden die Ausnahmen: der Kunde, der zweimal schreibt, das Angebot mit Sonderrabatt, der Beleg in fremder Währung. Jeder Sonderfall braucht eine Regel oder eine Stelle, an der ein Mensch übernimmt.' },
    { kind: 'p', text: 'Drittens Ihre Daten. Liegt die Preisliste in einer gepflegten Tabelle, ist das ein guter Start. Gibt es drei Versionen davon und keiner weiß, welche gilt, muss erst aufgeräumt werden.' },
    { kind: 'p', text: 'Und schließlich die Freigaben. Soll jedes Angebot von Ihnen geprüft werden, bevor es rausgeht? Das ist meistens richtig. Es braucht aber eine Stelle im Ablauf, an der Sie kurz draufschauen und mit einem Klick freigeben.' },
    { kind: 'q', text: 'Ob KI im Ablauf steckt, macht den Preis selten aus. Die Sonderfälle machen ihn aus.' },

    { kind: 'h2', text: 'Einmalige und laufende Kosten' },
    { kind: 'p', text: 'Der Bau ist eine einmalige Ausgabe. Danach fallen laufende Kosten an, die oft vergessen werden. Fragen Sie jeden Anbieter danach, auch mich.' },
    { kind: 'p', text: 'Server: Die Abläufe müssen irgendwo laufen. Ich setze n8n auf Servern bei Hostinger in einem Rechenzentrum in der EU ein. Dafür fällt eine monatliche Servermiete an. In kleinen Betrieben reicht ein Server meist für mehrere Abläufe.' },
    { kind: 'p', text: 'Werkzeug: n8n kostet auf einem eigenen Server keine Lizenz pro Nutzer. Werkzeuge wie Make oder Zapier rechnen dagegen nach der Zahl der ausgeführten Schritte ab. Bei vielen Vorgängen kann das teurer werden, als man am Anfang denkt.' },
    { kind: 'p', text: 'Denken Sie dabei an Wachstum. Wer heute zwanzig Anfragen pro Woche hat und in einem Jahr sechzig erwartet, sollte prüfen, wie die laufenden Kosten mitwachsen. Mit einem eigenen Server bleibt das meist überschaubar. Bei Abrechnung pro Schritt oder pro KI-Aufruf steigt es mit jeder Anfrage.' },
    { kind: 'p', text: 'KI pro Vorgang: Wo KI im Ablauf steckt, bezahlen Sie den Anbieter des Modells danach, wie viel Text gelesen und geschrieben wird. Bei einem Ablauf, der E-Mails sortiert oder Entwürfe schreibt, sind das pro Vorgang meist kleine Beträge. Sie wachsen aber mit der Menge. Ich rechne sie Ihnen vorher mit Ihren eigenen Zahlen durch, statt eine Pauschale zu raten.' },
    { kind: 'p', text: 'Betreuung: Software ändert sich. Ihre Branchensoftware bekommt ein Update, ein Passwort läuft ab, ein Anbieter stellt eine Schnittstelle um. Dann muss jemand nachsehen. Das können Sie selbst übernehmen, ein Mitarbeiter oder ich. Meine Betreuung ist ein fester Monatsbetrag, den wir vor dem Start vereinbaren, freiwillig und monatlich kündbar. Fragen Sie auch, was nach einer Kündigung passiert. Bei mir läuft der Ablauf weiter, und alle Zugänge liegen bei Ihnen.' },

    { kind: 'h2', text: 'Wie rechne ich aus, was eine Automatisierung kosten darf?' },
    { kind: 'p', text: 'Drehen Sie die Frage um. Statt zu fragen, was die Automatisierung kostet, fragen Sie, was Sie der Ablauf heute kostet. Die Rechnung ist dieselbe wie in meinem Artikel darüber, wann sich Automatisierung lohnt: Stunden pro Woche mal Stundensatz mal rund 46 Arbeitswochen.' },
    { kind: 'p', text: 'Ein Beispiel mit angenommenen Werten: Ein Ablauf kostet Ihr Büro sechs Stunden pro Woche. Die Stunde der Person, die ihn erledigt, kostet Sie 45 €. Das sind 6 × 45 € = 270 € pro Woche und 270 € × 46 = 12.420 € im Jahr. Erledigen Sie den Ablauf selbst und setzen Ihre eigene Stunde mit 80 € an, kommen Sie auf 6 × 80 € × 46 = 22.080 €.' },
    { kind: 'p', text: 'Diese Zahl ist Ihre Obergrenze für das erste Jahr. Eine Automatisierung nimmt selten den ganzen Ablauf ab. Meist bleibt ein Rest, etwa das Prüfen und Freigeben. Rechnen Sie deshalb mit dem Teil, der wirklich wegfällt, und ziehen Sie die laufenden Kosten für ein Jahr ab. Was übrig bleibt, darf die Automatisierung kosten.' },
    { kind: 'q', text: 'Mein Maßstab: Eine Automatisierung muss sich innerhalb eines Jahres bezahlt machen. Liegt der Preis darüber, rate ich ab.' },

    { kind: 'h2', text: 'Warum ein Festpreis und kein Stundensatz?' },
    { kind: 'p', text: 'Bei Abrechnung nach Stunden trägt der Kunde das Risiko. Dauert es länger, zahlen Sie mehr. Mit einem Festpreis muss ich vorher genau hinschauen, wie aufwendig Ihr Ablauf ist. Verschätze ich mich, ist das mein Problem. Deshalb gibt es den Preis auch erst nach dem Erstgespräch: Vorher weiß ich schlicht nicht genug.' },
    { kind: 'p', text: 'Dazu kommt die Garantie. Läuft der Ablauf nach vier Wochen nicht, bessere ich ohne Aufpreis nach, bis er den vereinbarten Umfang erfüllt. Was „läuft“ heißt, halten wir zu Beginn schriftlich fest. Mehr Umsatz verspreche ich nicht. Ich verspreche Zeit.' },

    { kind: 'h2', text: 'KI-Beratung: Kosten, die sich vermeiden lassen' },
    { kind: 'p', text: 'Das meiste Geld geht nicht beim Bau verloren, sondern drumherum. Ein Workshop, aus dem nichts folgt. Eine Software mit Lizenz pro Nutzer, die nach drei Monaten keiner mehr öffnet. Eine Lösung, die nur der Dienstleister versteht und für jede Änderung neu beauftragt werden muss.' },
    { kind: 'p', text: 'Fragen Sie deshalb bei jedem Angebot für KI-Beratung oder Prozessautomatisierung nach. Was läuft nach dem Auftrag, das vorher nicht lief? Welche laufenden Kosten kommen dazu, pro Monat und pro Vorgang? Wem gehören die Zugänge? Weicht ein Anbieter dabei aus, wissen Sie genug.' },

    { kind: 'h2', text: 'Prozessautomatisierung: Was kostet es, nichts zu tun?' },
    { kind: 'p', text: 'Diese Frage stellt kaum jemand. Dabei steckt sie schon in der Rechnung oben: Jede Woche, in der der Ablauf von Hand läuft, kostet die Stunden, die Sie ausgerechnet haben. Dazu kommen Dinge, die sich schwer beziffern lassen. Das Angebot, das drei Tage zu spät rausgeht. Die Anfrage, die im Postfach untergeht. Ich lasse solche Posten in meiner Rechnung weg, damit die Zahl ehrlich bleibt. Null sind sie trotzdem nie.' },
    { kind: 'p', text: 'Zur Förderung von Beratung in kleinen Unternehmen schreibe ich bald einen eigenen Artikel. Ob sie bei Ihnen infrage kommt, hängt von den jeweils aktuellen Bedingungen ab.' },
    { kind: 'p', text: 'Wenn Sie wissen wollen, was Ihr Ablauf kosten würde: Im Erstgespräch erzählen Sie, wie er heute läuft. Danach bekommen Sie einen Festpreis schriftlich. Oder eine ehrliche Absage, wenn er sich nicht rechnet.' },
  ],
  notes: [
    'Die 46 Arbeitswochen sind ein Richtwert: 52 Wochen abzüglich Urlaub und Feiertage.',
    'Die Zahlen im Rechenbeispiel sind Annahmen. Setzen Sie Ihre eigenen ein, etwa mit dem Zeitrechner auf der Startseite.',
    'KI-Modelle werden nach Textmenge abgerechnet, in sogenannten Tokens. Die Preise stehen auf den Seiten der Anbieter und ändern sich regelmäßig.',
  ],
  related: [
    { label: 'KI-Beratung zum Festpreis', href: '/ki-beratung' },
    { label: 'Was ein Ablauf kostet, den niemand misst', href: '/wissen/was-ein-ablauf-wirklich-kostet' },
    { label: 'Wann sich eine Automatisierung lohnt', href: '/wissen/wann-sich-automatisierung-lohnt' },
    { label: 'Was meine Garantie genau umfasst', href: '/garantie' },
    { label: 'Rechenbeispiel: Angebote im Handwerk', href: '/wissen/rechenbeispiel-handwerk-angebote' },
    { label: 'Erstgespräch vereinbaren', href: '/kontakt' },
  ],
};
