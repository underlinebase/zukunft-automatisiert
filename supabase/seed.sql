-- Seed data — run after schema.sql

-- Services
insert into services (slug, idx, title, teaser, duration, investment, deliverables, problem, steps, delivers, invest, faq) values
('diagnose', '01', 'Prozess-Diagnose',
 'Zwei bis vier Wochen. Wir messen, kartieren, priorisieren. Sie bekommen einen Eingriffsplan mit Zahlen — keinen Ergebnis-Workshop.',
 '2–4 Wochen', 'ab 18.000 €', '4 Artefakte',
 'Sie wissen, dass irgendwo Stunden verloren gehen. Sie haben gefühlt fünf Engpässe. Niemand kann sagen, welcher zuerst.',
 '[{"num":"01 / SHADOWING","h":"Beobachtung im Tagesbetrieb","p":"Wir begleiten zwei bis vier Schlüsselrollen jeweils einen halben Tag."},{"num":"02 / VERMESSUNG","h":"Zeitkosten in Euro","p":"Jeder identifizierte Engpass bekommt einen Preis pro Jahr. Auf Basis Ihrer realen Vorgangsmengen, nicht aus dem Bauch."},{"num":"03 / KARTOGRAPHIE","h":"Prozess-Topologie","p":"Vollständige IST-Karte als Diagramm. Inklusive aller Übergaben zwischen Personen und Tools — dort liegt das Geld."},{"num":"04 / EINGRIFFSPLAN","h":"Priorisierte Roadmap","p":"Maximal sieben Eingriffe, sortiert nach Impact pro Implementations-Aufwand."}]',
 '[{"meta":"ARTEFAKT 01","h":"Prozess-Karte (PDF + Miro)","p":"Vollständige IST-Topologie mit allen Übergaben."},{"meta":"ARTEFAKT 02","h":"Engpass-Register (Sheet)","p":"Quantifizierte Engpässe in Euro pro Jahr."},{"meta":"ARTEFAKT 03","h":"Eingriffsplan (Bericht)","p":"Priorisierte Roadmap inkl. Aufwandsschätzung."},{"meta":"ARTEFAKT 04","h":"Präsentations-Slot (90 min)","p":"Übergabe an Geschäftsführung und Operations."}]',
 '[{"k":"INVESTMENT","v":"18 – 32k €"},{"k":"DAUER","v":"2 – 4 Wochen"},{"k":"TEAM-AUFWAND","v":"~ 8 Std/Pers"}]',
 '[{"q":"Brauchen wir vorab eine NDA?","a":"Standard. Wir senden Ihnen eine zweiseitige NDA, in der Regel innerhalb desselben Tages unterzeichnet."},{"q":"Wer aus unserem Team ist gebunden?","a":"Zwei bis vier Schlüsselrollen für jeweils ein halbtägiges Shadowing. Geschäftsführung für Kick-off und Übergabe — zusammen ca. 4 Stunden."},{"q":"Wie tief gehen Sie in unsere Systeme?","a":"Lese-Zugriff auf eine Auswahl. Kein Schreibzugriff in dieser Phase."},{"q":"Können wir nach der Diagnose einen anderen Anbieter beauftragen?","a":"Ja. Der Eingriffsplan ist anbieterneutral."},{"q":"Bieten Sie das auch remote an?","a":"Hybrid empfohlen. Erster Tag und Abschluss vor Ort, Shadowing-Termine remote per Bildschirm-Sharing."}]'
),
('implementation', '02', 'Automatisierung & n8n',
 'Vier bis zwölf Wochen. Wir bauen Ihre Workflows live in n8n und Custom-Code. Übergabe inklusive Monitoring und Eskalations-Pfad.',
 '4–12 Wochen', 'ab 28.000 €', 'live laufende Workflows',
 'Der Engpass ist klar. Es gibt einen Plan. Was fehlt, ist jemand, der den Plan in funktionierenden Code überführt — ohne Ihr Team zu blockieren.',
 '[{"num":"01 / SETUP","h":"Infrastruktur und Credentials","p":"n8n-Instanz, self-hosted oder Cloud, in Ihrer Hoheit. Credentials nach least-privilege. Logging und Backup von Tag eins."},{"num":"02 / BUILD","h":"Workflow-Implementation","p":"Wir bauen iterativ. Jede Woche ein abgeschlossener Workflow auf der Bühne."},{"num":"03 / OBSERVABILITY","h":"Monitoring und Alerting","p":"Healthchecks, Slack-Alerts bei Fehlern, ein einseitiges Operator-Dashboard."},{"num":"04 / ÜBERGABE","h":"Befähigung Ihres Teams","p":"Vier Sessions zu je 90 Minuten. Read- und Edit-Pfad, Fehler-Eskalation, Backup-Restore."}]',
 '[{"meta":"ARTEFAKT 01","h":"Live-Workflows (n8n)","p":"Auf Ihrer Infrastruktur, von Ihnen wartbar."},{"meta":"ARTEFAKT 02","h":"Custom-Code-Module","p":"TypeScript / Python wo n8n-Knoten nicht reichen."},{"meta":"ARTEFAKT 03","h":"Operator-Dashboard","p":"Eine Seite. Statusampel pro Workflow, letzte Fehler, Mengengerüst."},{"meta":"ARTEFAKT 04","h":"Runbook (PDF)","p":"Was tun bei Fehler X. Wer eskaliert wann. Wo liegen Backups."}]',
 '[{"k":"INVESTMENT","v":"28 – 120k €"},{"k":"DAUER","v":"4 – 12 Wochen"},{"k":"NACHSORGE","v":"90 Tage inkl."}]',
 '[{"q":"n8n self-hosted oder Cloud?","a":"Default ist self-hosted auf Ihrer Infrastruktur."},{"q":"Müssen wir bestehende Tools austauschen?","a":"In der Regel nicht. Wir verbinden, was Sie haben."},{"q":"Wer wartet das nach Ihrer Übergabe?","a":"Ihr Team. Wir bilden zwei Operator aus."},{"q":"Wie sichern Sie sich gegen Ausfälle ab?","a":"Workflow-Versionierung in Git, tägliche DB-Snapshots, Failover-Plan im Runbook."},{"q":"Was kostet eine Erweiterung später?","a":"Tagessatz oder Sprint-Paket à 5 Tagen. Transparent in unserer Preisliste."}]'
),
('gedaechtnis', '03', 'Unternehmensgedächtnis',
 'Laufendes Mandat. Wissen, das in Köpfen, E-Mails und SharePoints liegt, wird durchsuchbar. Pgvector + Claude. Im Unternehmen, nicht in der Cloud des Anbieters.',
 'laufend', 'ab 4.800 € / Monat', 'durchsuchbares Wissen',
 'Die zwei Personen, die wissen, wie das wirklich läuft, sind in Elternzeit oder kündigen. Ihr Unternehmen ist plötzlich blind.',
 '[{"num":"01 / KORPUS","h":"Quellen-Inventur","p":"SharePoint, Confluence, E-Mail-Archive, ERP-Dokumentation. Wir bestimmen, was hinein gehört und was draußen bleibt."},{"num":"02 / EMBEDDING","h":"Vektor-Index aufbauen","p":"Chunking-Strategie passend zu Ihren Dokument-Typen. Pgvector auf Ihrer Supabase-Instanz."},{"num":"03 / RETRIEVAL","h":"Frage-Antwort-Schicht","p":"Hybrid-Search (semantisch + Volltext) mit Quellen-Zitation."},{"num":"04 / GOVERNANCE","h":"Zugriffsrechte und Audit","p":"Rollen-basierte Sichtbarkeit. Vollständiges Query-Log."}]',
 '[{"meta":"ARTEFAKT 01","h":"Vektor-Index","p":"Auf Ihrer Infrastruktur. Pgvector + nightly Re-Indexierung."},{"meta":"ARTEFAKT 02","h":"Retrieval-API","p":"Versionierte HTTP-Schnittstelle. Auth via Ihre IdP."},{"meta":"ARTEFAKT 03","h":"Such-Frontend","p":"Minimales UI. Lässt sich in Intranet einbetten."},{"meta":"ARTEFAKT 04","h":"Audit-Log","p":"Jede Anfrage, jede Antwort, jede Quelle."}]',
 '[{"k":"AUFBAU","v":"32 – 80k €"},{"k":"BETRIEB","v":"4,8 – 12k € / Mo"},{"k":"LAUFZEIT","v":"min. 12 Mo"}]',
 '[{"q":"Wo liegen unsere Daten?","a":"Auf Ihrer Infrastruktur, in der Regel Supabase EU-Region oder eigenes Postgres."},{"q":"Welches Modell beantwortet die Fragen?","a":"Default ist Claude Sonnet. Konfigurierbar."},{"q":"Wie verhindern Sie Halluzinationen?","a":"Keine Antwort ohne Quelle. Wenn Retrieval nichts findet, sagt das System das."},{"q":"Können wir das selbst weiterbauen?","a":"Ja. Code in Ihrem Repo, dokumentiert."},{"q":"DSGVO-konform?","a":"Auftragsverarbeitungsvertrag nach Art. 28. Modelle EU-gehostet wo möglich."}]'
);

-- Cases
insert into cases (slug, idx, industry, size, headline, headline_label, diagnose, eingriff, ergebnis, quote, source) values
('maschinenbau-kreditoren','001','Maschinenbau','220 MA','−73 %','Bearbeitungszeit Kreditoren-Workflow',
 'Eingehende Lieferantenrechnungen wurden manuell aus PDF in DATEV übertragen. Drei Mitarbeitende, in Summe 38 Stunden pro Woche. Fehlerquote bei 4,2 % — jede Korrektur kostete weitere 22 Minuten.',
 '["PDF-Extraktion via OCR-Pipeline (n8n + Custom-Modul für Maschinenbau-spezifische Positionsstrukturen).","Validierung gegen Bestellungen aus dem ERP. Abweichungen werden geroutet, nicht gestoppt.","Direkte DATEV-Übergabe via API. Buchungssatz wird vorbereitet, nicht final gebucht — Vier-Augen-Prinzip bleibt erhalten.","Fehler-Dashboard für die Buchhaltung mit Korrektur-Pfad in unter 60 Sekunden."]',
 '["Bearbeitungszeit von 38 auf 10,3 Stunden pro Woche.","Fehlerquote von 4,2 % auf 0,8 %.","Skontoausnutzung von 64 % auf 91 % — Liquiditätseffekt 137.000 € im ersten Jahr.","Übergabe an internes Team nach 9 Wochen."]',
 '„Wir hatten sechs Anbieter angesehen. Drei wollten ein Pilot-Projekt vereinbaren. Marco hat nach der dritten Frage einen Eingriffsplan gezeichnet."',
 'CFO, Maschinenbau · 220 MA'),
('grosshandel-reklamation','002','Großhandel','140 MA','+412k €','Liquidität freigesetzt durch Reklamations-Routing',
 'Reklamationen liefen über ein zentrales Postfach mit drei Ebenen Eskalation. Liegezeit pro Vorgang im Schnitt 11 Tage. Gutschriften wurden als Risiko-Polster zurückgehalten.',
 '["Klassifizierung eingehender Reklamationen (Claude API) auf 7 Kategorien.","Automatisches Routing an die zuständige Rolle, mit Vorgangs-Kontext aus ERP.","Gutschrift-Vorschlag bei eindeutigen Fällen unter 500 € — Freigabe per Ein-Klick.","Eskalations-Pfad bleibt manuell. Alles über 2.000 € landet weiterhin bei Geschäftsführung."]',
 '["Liegezeit von 11 auf 2,4 Tage.","Liquiditätseffekt im ersten Jahr 412.000 €.","NPS bei reklamierenden Kunden um 18 Punkte gestiegen.","Geschäftsführung verbringt 6 Stunden pro Woche weniger mit Eskalations-Mails."]',
 '„Wir wussten nicht, dass Liquidität in unserem Reklamationsprozess gefangen ist. Wir wussten nur, dass jemand zwei Mal pro Woche schreit."',
 'Geschäftsführer, Großhandel · 140 MA'),
('kanzlei-gedaechtnis','003','Steuerkanzlei','60 MA','14 h/Woche','Geschäftsführer-Zeit zurückgewonnen',
 'Der geschäftsführende Partner war Single-Point-of-Knowledge für Mandats-Historie und interne Verfahren. Mitarbeiter-Fragen kosteten ihn täglich 2,5 Stunden.',
 '["Korpus-Aufbau: 14 Jahre interne Verfahrens-Dokumentation, Mandanten-Akten anonymisiert.","Pgvector-Index auf Supabase EU. Hybrid-Search semantisch plus Volltext.","Frage-Antwort-Schicht in Microsoft Teams integriert.","Quellen-Pflicht: Antworten ohne Belegstelle werden nicht ausgegeben."]',
 '["Direkte Anfragen an den Partner um 78 % reduziert.","14 Stunden pro Woche zurückgewonnen.","Krankheits-Vertretung im Februar lief erstmals ohne Eskalation.","Mitarbeiter-Onboarding von 6 auf 3 Wochen verkürzt."]',
 '„Mein Kalender war eine Warteschlange für Fragen, die in einem Wiki stehen müssten. Jetzt steht das Wiki, und es liest sich selbst vor."',
 'Partner, Steuerkanzlei · 60 MA'),
('logistik-disposition','004','Logistik','380 MA','−41 %','Disponenten-Stunden pro Auftrag',
 'Disposition zwischen drei Standorten erfolgte über Excel und Telefon. Doppel-Buchungen, Leerfahrten, manuelle Tour-Optimierung kostete pro Disponent 5,5 Stunden täglich.',
 '["Auftragsdaten zentralisiert, Single-Source-of-Truth in Postgres.","Tour-Vorschläge per Optimierungs-Algorithmus, Disponent entscheidet final.","Leerfahrten-Marktplatz zwischen den drei Standorten, vollständig automatisch geroutet."]',
 '["Disponenten-Stunden pro Auftrag −41 %.","Leerkilometer um 23 % reduziert.","Erweiterung auf zwei zusätzliche Standorte ohne Personal-Aufstockung."]',
 '„Wir haben 15 Jahre über zentrale Disposition geredet. Marco hat sie in 8 Wochen gebaut."',
 'COO, Logistik · 380 MA'),
('industrie-qm','005','Industrie','95 MA','+ 22 %','Erstprüfungs-Quote',
 'Qualitätsprüfungen wurden auf Papier dokumentiert, später abgetippt. Verzögerung zwischen Prüfung und QM-Datenbank 3 bis 7 Tage.',
 '["Tablet-basierte Erfassung am Prüfplatz, Offline-fähig.","Sync in QM-System sofort nach Online-Verbindung.","Trend-Erkennung mit Schwellenwert-Alerts an die Linie."]',
 '["Erstprüfungs-Quote um 22 % gestiegen.","Erkennung kritischer Abweichungen im Mittel 4,8 Tage früher.","Audit-Vorbereitung von 3 Tagen auf 4 Stunden."]',
 '„Erst dachte ich, es geht um Tablets. Es ging um Reaktionszeit."',
 'QM-Leiter, Industrie · 95 MA');

-- Articles
insert into articles (slug, title, date, read_minutes, category, lead, body, notes) values
('warum-workshops-nichts-bauen',
 'Warum Workshops Ihrer Probleme nicht lösen — und was stattdessen funktioniert.',
 '02 / MAI / 2026', 7, 'METHODIK',
 'Ein Workshop ist ein Symposium. Ein Symposium produziert Konsens. Konsens ist kein Workflow.',
 '[{"kind":"p","text":"Drei Mal im Jahr werde ich gerufen, weil Geschäftsführer feststellen, dass der vor zwölf Monaten gebuchte Strategie-Workshop nichts in Betrieb gebracht hat."},{"kind":"h2","text":"Workshop, Beratung, Implementation — drei verschiedene Berufe"},{"kind":"p","text":"Im Markt werden diese drei Tätigkeiten als ein Produkt verkauft. Sie sind drei. Ein Moderator strukturiert Konsens. Ein Berater empfiehlt Richtungen. Ein Operator baut, was läuft."},{"kind":"q","text":"„Wir hatten sechs Anbieter angesehen. Drei wollten ein Pilot-Projekt vereinbaren. Marco hat nach der dritten Frage einen Eingriffsplan gezeichnet.""},{"kind":"h2","text":"Wann ein Workshop trotzdem sinnvoll ist"},{"kind":"p","text":"Wenn Ihr Führungsteam unabgestimmt ist, ist ein Workshop möglicherweise das richtige Werkzeug. Aber dann ist Ihr Problem nicht Prozess-Effizienz — Ihr Problem ist Führung."}]',
 '["Die Tätigkeit Moderation ist im DACH-Raum oft an Beraternamen geheftet, die selbst nicht implementieren.","Ein typischer Strategie-Workshop liegt zwischen 12.000 € und 28.000 €. Eine Diagnose mit Eingriffsplan startet bei 18.000 €.","Quelle: Eigene Auswertung 47 Mandate 2022–2025."]'),
('warum-rag-systeme-meist-scheitern',
 'Warum die meisten RAG-Systeme im Mittelstand scheitern.',
 '24 / APR / 2026', 9, 'GEDÄCHTNIS',
 'Vier von fünf Wissens-Suchen, die ich mir ansehe, scheitern an drei wiederkehrenden Fehlern. Keiner davon liegt im Modell.',
 '[{"kind":"p","text":"Die Versuchung ist groß: Daten in einen Vektor-Index werfen, Modell oben drauf, fertig. Das Ergebnis sieht aus wie ein Demo-Erfolg und scheitert in Woche drei am Realbetrieb."},{"kind":"h2","text":"Fehler 01 — Chunking ohne Sinn"},{"kind":"p","text":"Standard-Chunking nach Tokenlänge zerschneidet Antworten. In einem Verfahrenshandbuch steht der relevante Hinweis oft drei Absätze nach der Frage."},{"kind":"h2","text":"Fehler 02 — Kein Quellen-Zwang"},{"kind":"p","text":"Wenn das System ohne Belegstelle antworten darf, antwortet es ohne Belegstelle. Dann ist es ein Halluzinations-Generator."},{"kind":"h2","text":"Fehler 03 — Keine Governance"},{"kind":"p","text":"Mandanten-Daten, Personal-Daten, vertrauliche Vermerke. Wer was sehen darf, ist organisatorisch komplex. Wer das nachträglich nachrüstet, baut zwei Mal."}]',
 '["Hybrid-Search (semantisch + BM25-Volltext) löst die meisten Retrieval-Probleme im Mittelstand.","Die Frage welches Modell wird zu früh gestellt. Erst der Index, dann die Modell-Auswahl.","Pgvector reicht für Korpora bis ca. 3 Mio. Chunks."]'),
('die-vier-engpaesse',
 'Die vier Engpässe, die jeder Mittelständler hat — und niemand misst.',
 '11 / APR / 2026', 6, 'METHODIK',
 'Wir haben in 47 Mandaten denselben Bauplan gefunden. Die Engpässe variieren in Größe, nicht in Struktur.',
 '[{"kind":"h2","text":"Engpass 01 — Übergabe-Stellen zwischen Tools"},{"kind":"p","text":"Daten werden zwischen ERP, CRM, Buchhaltungs-Tool und SharePoint manuell hin- und hergeschoben."},{"kind":"h2","text":"Engpass 02 — Wissen in Köpfen"},{"kind":"p","text":"Eine Person weiß, wie das wirklich läuft. Wenn diese Person fehlt, blockiert das System."},{"kind":"h2","text":"Engpass 03 — Eskalation als Default"},{"kind":"p","text":"Entscheidungen, die Mitarbeitende selbst treffen könnten, werden eskaliert, weil keine Regel definiert ist."},{"kind":"h2","text":"Engpass 04 — Keine Mess-Schicht"},{"kind":"p","text":"Sie wissen nicht, wo die Stunden hingehen. Ihr Bauchgefühl ist zwei Engpässe zu spät."}]',
 '["Häufigster Engpass nach Mengengerüst: Übergabe-Stellen. Häufigster nach Risiko: Single-Point-of-Knowledge.","Quelle: Eigene Auswertung 47 Mandate 2022–2025."]'),
('n8n-statt-zapier',
 'Warum wir n8n bauen, nicht Zapier kaufen.',
 '28 / MÄR / 2026', 5, 'IMPLEMENTATION',
 'Zapier ist eine wunderbare Maschine. Sie ist nur nicht Ihre Maschine. Im Mittelstand ist das ein architektonisches Problem.',
 '[{"kind":"h2","text":"Grund 01 — Datenhoheit"},{"kind":"p","text":"n8n läuft auf Ihrer Infrastruktur. Kein DPA, der vor jeder neuen Integration neu unterschrieben werden muss."},{"kind":"h2","text":"Grund 02 — Custom-Code, wenn nötig"},{"kind":"p","text":"In jedem zweiten Workflow stoßen Standard-Werkzeuge an Grenzen. n8n erlaubt Custom-Knoten in TypeScript."},{"kind":"h2","text":"Grund 03 — Skaleneffekte umgekehrt"},{"kind":"p","text":"Zapier wird teurer, je mehr Sie ausführen. n8n self-hosted skaliert flach mit Ihrer Server-Kapazität."},{"kind":"h2","text":"Wann doch Zapier"},{"kind":"p","text":"Wenn Sie unter 1.000 Ausführungen pro Monat haben und kein dediziertes Operations-Team."}]',
 '["n8n ist Open-Source (Sustainable Use License). Kommerzielle Nutzung im Eigenbetrieb erlaubt.","Hosting-Optionen: Docker auf eigener VM, n8n.cloud, Hetzner-Server."]');

-- News
insert into news (date, title, body) values
('07 / MAI / 2026', 'Neue Mandanten-Aufnahme pausiert bis Q3 / 2026.', 'Aufgrund laufender Implementations-Mandate nehmen wir bis September keine neuen Mandate an. Diagnose-Termine für Q4 / 2026 ab Juni buchbar.'),
('21 / APR / 2026', 'Vortrag — Operations Summit Hamburg, 15. Mai.', 'Thema: „Wie n8n im Mittelstand richtig eingeführt wird." Live-Demo eines Reklamations-Workflows. Aufzeichnung folgt.'),
('03 / APR / 2026', 'Whitepaper veröffentlicht — Unternehmensgedächtnis.', '24 Seiten. Pgvector-Architektur, Governance-Modell, drei Praxisbeispiele. Download ohne Formular.'),
('12 / MÄR / 2026', 'Partnerschaft — Supabase Enterprise.', 'Wir sind Implementations-Partner für Supabase im DACH-Raum. Keine Provision, sondern direkter Zugang zu Beta-Features.');
