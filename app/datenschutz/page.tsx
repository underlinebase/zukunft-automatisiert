import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung von Zukunft. Automatisiert.: welche Daten auf dieser Website verarbeitet werden und warum.',
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <Breadcrumbs items={[{ name: 'Datenschutz' }]} />
          <h1>Datenschutzerklärung</h1>
        </div>
      </section>
      <section className="container">
        <div className="prose">

          <h2>1. Datenschutz auf einen Blick</h2>

          <h3>Allgemeine Hinweise</h3>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

          <h3>Datenerfassung auf unserer Website</h3>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
          <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. durch ein Kontaktformular oder die Newsletter-Anmeldung). Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst - das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem, Uhrzeit des Seitenaufrufs).</p>
          <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>

          <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3>Datenschutz</h3>
          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
          SEOLOAD LLC<br />
          Betreiber: Marco Gundlach<br />
          2880 W Oakland Park BLVD STE 225C<br />
          Florida 33311, USA<br />
          E-Mail: marco@zukunft-automatisiert.de</p>
          <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>

          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

          <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
          <p>Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde ist der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit, Ludwig-Erhard-Str. 22, 20459 Hamburg.</p>

          <h3>SSL- bzw. TLS-Verschlüsselung</h3>
          <p>Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>

          <h3>Auskunft, Sperrung, Löschung</h3>
          <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>

          <h3>Widerspruch gegen Werbe-Mails</h3>
          <p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>

          <h2>3. Datenerfassung auf unserer Website</h2>

          <h3>Cookies</h3>
          <p>Diese Website verwendet keine Tracking-Cookies. Es werden ausschließlich technisch notwendige Session-Cookies eingesetzt, die nach Ende Ihres Besuchs automatisch gelöscht werden. Ein Cookie-Banner ist daher nicht erforderlich.</p>

          <h3>Server-Log-Dateien</h3>
          <p>Der Provider dieser Seiten (Vercel Inc., 340 Pine Street, San Francisco, CA 94104, USA) erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser automatisch übermittelt:</p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Speicherdauer: 14 Tage.</p>

          <h3>Anfrageformular „Ablauf schildern“</h3>
          <p>Wenn Sie uns über das Formular auf dieser Website eine Anfrage schicken, verarbeiten wir Ihren Namen, Ihre E-Mail-Adresse und Ihre Beschreibung, um Ihre Anfrage zu beantworten. Die Angaben werden über den E-Mail-Dienst von Brevo SAS, 7 rue de Madrid, 75008 Paris, Frankreich, an uns zugestellt. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Wir löschen die Angaben, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.</p>

          <h3>Newsletter-Anmeldung</h3>
          <p>Wenn Sie sich für den Operations-Bericht eintragen, wird Ihre E-Mail-Adresse an Brevo SAS (ehemals Sendinblue), 7 rue de Madrid, 75008 Paris, Frankreich, übermittelt und dort gespeichert. Brevo ist unser E-Mail-Dienstleister. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Sie können Ihre Einwilligung jederzeit durch formlose E-Mail an uns oder über den Abmelde-Link im Newsletter widerrufen. Weitere Informationen finden Sie in der Datenschutzerklärung von Brevo: <a href="https://www.brevo.com/de/legal/privacypolicy/" target="_blank" rel="noreferrer">brevo.com/de/legal/privacypolicy</a>.</p>

          <h3>Terminbuchung über Cal.com</h3>
          <p>Auf der Kontakt-Seite ist eine Buchungsoberfläche von Cal.eu (Cal.com Inc. / Cal.eu, EU-Rechenzentrum) eingebunden. Wenn Sie einen Termin buchen, verarbeitet Cal.com Ihre Angaben (Name, E-Mail, ggf. weitere Angaben) zur Terminverwaltung. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Datenschutzerklärung Cal.com: <a href="https://cal.com/privacy" target="_blank" rel="noreferrer">cal.com/privacy</a>.</p>

          <h2>4. Plugins und Tools</h2>

          <h3>Google Web Fonts</h3>
          <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Web Fonts von Google (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA). Die Fonts werden beim Seitenaufruf vom Server geladen, dabei wird Ihre IP-Adresse an Google übermittelt. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen: <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noreferrer">developers.google.com/fonts/faq</a>.</p>

          <h2>5. Ihre Rechte</h2>
          <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
          <ul>
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
          </ul>
          <p>Zur Ausübung Ihrer Rechte wenden Sie sich an: marco@zukunft-automatisiert.de</p>

        </div>
      </section>
    </>
  );
}
