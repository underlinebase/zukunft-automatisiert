import type { Ablauf } from './types';

export const unterlagenNachSitzung: Ablauf = {
  id: 3004,
  slug: 'unterlagen-nach-sitzung',
  branche: 'coaches',
  themen: ['dokumente', 'kommunikation'],
  title: 'Unterlagen nach der Sitzung',
  seoTitle: 'Coaching-Unterlagen versenden',
  lead: 'Nach jeder Sitzung bekommt der Klient die passenden Arbeitsblätter und einen Link für den nächsten Termin. Sie haken nur ab, was dran war.',
  datePublished: '2026-10-19',
  problem: [
    'Die Sitzung war gut. Sie haben über Glaubenssätze gesprochen und versprochen, das Arbeitsblatt dazu zu schicken, außerdem den Artikel, den Sie erwähnt haben. Direkt danach kommt der nächste Klient. Am Abend sitzen Sie vor dem Postfach und versuchen sich zu erinnern, wem Sie heute eigentlich was versprochen haben.',
    'Das Arbeitsblatt liegt in einem Ordner mit vierzig anderen. Eine davon heißt „Werte_final_neu2.pdf“. Sie schreiben die E-Mail jedes Mal etwas anders, und den Link für den nächsten Termin vergessen Sie ungefähr jedes dritte Mal. Dann schreibt der Klient zwei Tage später nach, und Sie stimmen den Termin doch per Nachricht ab.',
    'Für den Klienten ist diese E-Mail ein Teil des Coachings. Kommt sie am selben Tag, wirkt die Sitzung nach. Kommt sie drei Tage später oder gar nicht, ist der Faden gerissen.',
  ],
  heute: [
    'Sie notieren während oder nach der Sitzung, was der Klient bekommen soll.',
    'Abends suchen Sie die Dateien in Ihren Ordnern zusammen.',
    'Sie schreiben jedes Mal eine neue E-Mail mit Anhängen.',
    'Den nächsten Termin schlagen Sie per Nachricht vor oder vergessen ihn.',
  ],
  danach: [
    'Nach dem Termin bekommen Sie eine kurze Abfrage mit Ihren Arbeitsblättern zum Ankreuzen.',
    'Sie haken an, was dran war, und schreiben bei Bedarf einen persönlichen Satz dazu.',
    'Die E-Mail mit den Unterlagen geht in Ihrem Ton an den Klienten raus.',
    'Der Buchungslink für die nächste Sitzung steht immer drin.',
    'Was verschickt wurde, wird beim Klienten in Ihrer Kundenliste vermerkt.',
  ],
  mensch:
    'Sie entscheiden nach jeder Sitzung, welche Unterlagen passen, und schreiben auf Wunsch einen persönlichen Satz dazu. Dafür brauchen Sie etwa eine Minute. Die Texte der E-Mails schreiben wir einmal gemeinsam, damit sie nach Ihnen klingen. Ihre Sitzungsnotizen bleiben, wo sie sind. Der Ablauf braucht sie nicht.',
  werkzeuge: ['Google Kalender', 'Tally oder ein einfaches Formular', 'Google Drive oder OneDrive', 'n8n', 'Gmail oder Outlook'],
  nutzen: 'mittel',
  aufwand: 'klein',
  beispiel: {
    perWeek: 10,
    minutesBefore: 7,
    minutesAfter: 1,
    hourlyRate: 100,
    annahme:
      'Ein Coach mit zehn Sitzungen pro Woche. Dateien suchen, E-Mail schreiben und nächsten Termin vorschlagen kosten heute rund 7 Minuten pro Sitzung, danach bleibt eine Minute fürs Ankreuzen. 100 Euro pro Stunde sind ein angenommener Wert.',
  },
  grenzen: [
    'Ihre Arbeitsblätter müssen einmal aufgeräumt werden: eine Datei pro Thema, mit klarem Namen. Das ist die meiste Arbeit am Anfang.',
    'Wer ganz individuelle Unterlagen für jeden Klienten erstellt, spart weniger. Dann übernimmt der Ablauf nur Versand und Terminlink.',
    'Große Dateien schicke ich lieber als Freigabelink statt als Anhang. Manche Firmenpostfächer lehnen große Anhänge ab.',
  ],
  faqs: [
    {
      q: 'Wann kommt die Abfrage, welche Unterlagen ich schicken will?',
      a: 'Zum Beispiel zehn Minuten nach Ende des Termins im Kalender, als E-Mail oder als Nachricht aufs Handy. Wenn Sie direkt in die nächste Sitzung gehen, können Sie das auch abends gesammelt erledigen.',
    },
    {
      q: 'Kann ich auch einfach gar nichts schicken?',
      a: 'Ja. Dann kreuzen Sie nichts an, und es geht nur der Buchungslink für den nächsten Termin raus. Oder gar nichts, wenn Sie das so einstellen.',
    },
    {
      q: 'Wird hier KI eingesetzt?',
      a: 'Nein. Sie wählen aus, der Ablauf verschickt. Das ist verlässlicher als eine KI, die raten müsste, was in der Sitzung besprochen wurde.',
    },
    {
      q: 'Was ist mit Klienten, die lieber per WhatsApp schreiben?',
      a: 'Die Unterlagen gehen trotzdem per E-Mail raus, weil Anhänge und Links dort besser aufgehoben sind und nicht im Chatverlauf untergehen. WhatsApp Business lässt sich anbinden, ist aber aufwendiger und beim Datenschutz heikler. Ich rate meist zur E-Mail.',
    },
  ],
  related: [
    { label: 'Rechnung nach jeder Sitzung', href: '/ablaeufe/rechnung-nach-sitzung' },
    { label: 'Feedback nach dem Coaching', href: '/ablaeufe/feedback-nach-coaching' },
    { label: 'KI im Betrieb ohne Hype', href: '/wissen/ki-im-betrieb-ohne-hype' },
  ],
};
