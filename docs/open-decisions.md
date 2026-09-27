# Offene Entscheidungen & Punkte

Status: **offen** = Entscheidung von Jascha nötig · **Aufgabe** = entschieden, noch umzusetzen

## Struktur
| # | Punkt | Status | Empfehlung / Notiz |
|---|---|---|---|
| S1 | URL Standards & Werte: Navigation ordnet die Seite unter Manufaktur ein, URL und Breadcrumb sind aber `/standards-werte` bzw. „Start > Standards & Werte“ | offen | analog zu Materialien auf `/manufaktur/standards-werte` (+ `/ppwr-stellungnahme`) umstellen |
| S2 | Navigationskonzept Unterseiten (Mercedes-Stil Menü vs. VW-Stil zweite Menüzeile; Hauptseiten direkt klickbar?) | offen | entscheiden, sobald Seiteninhalte geprüft sind |
| S3 | Footer mit vollständiger Sitemap (schwarzer Bereich, wie mercedes-benz.de) | offen | Konzept ausarbeiten, wenn Seitenstruktur steht |
| S4 | Seitenweise unterschiedliche Header | offen (später) | Header ist je Seite kopiert, daher ohne Umbau möglich |

## Content
| # | Punkt | Status | Notiz |
|---|---|---|---|
| C1 | Teaser am Ende der Bauart-Seite zur Formen-Seite (neue Reihenfolge Bauart → Formen) | offen | Text schreibt Claude Chat, Freigabe durch Jascha |
| C2 | Engineering-Hauptseite: Hub-Kacheln für Bauart, Formen, Maße, Materialien (Texte in Master-MD nicht enthalten, HTML hat nur Materialien + Bauformen) | offen | Kacheltexte schreiben |
| C3 | Maße-Seite: H1, Intro, CTA, Schema.org | Aufgabe | Content in `content/engineering/masse.md` ergänzt (2026-09-27), Freigabe Jascha + HTML-Seite durch Claude Code offen |
| C4 | Schema.org für Bauart, Formen, Maße | Aufgabe | gesammelt für Projektabschluss |
| C5 | Finaler SEO-Alt-Text-Check aller Bilder | Aufgabe | |
| C6 | Markenneutraler Versand zusätzlich in Engineering-Schritt 05 „Rundum-Service“? | offen | aktuell über Allgemeine FAQ gelöst |
| C7 | Kontaktseite: Einleitungssatz über dem Kontaktformular | Aufgabe | Text entschieden (2026-09-27): „Lass uns dein perfektes Case entwickeln.“ + Satz, steht in `content/kontakt.md`; Claude Code ersetzt den Platzhalter und setzt Title/Meta ein |
| C8 | Impressum, Datenschutz, AGB: Inhalte der Live-Seite übernehmen; alte URLs `/datenschutzerklaerung/`, `/impressum/`, `/agb-2/` als Redirects erhalten | Aufgabe | |
| C9 | Branchen-Seiten, Zubehör-Materialseiten, HE/U/RU-Glossar, `/wissen/tsa-schloss` | Aufgabe | siehe `docs/seitenstruktur.md` |
| C10 | Maße-Seite: Türbreiten-Abschnitt neu fassen (aktueller Standard, schmalere Bestandstüren, 800er Cases) und Einheit der Truckmaß-Tabelle („in cm“, Werte sind mm) | offen | 1/2 Truckmaß = 600 bereits korrigiert (2026-09-27) |

## Bilder
| # | Punkt | Status |
|---|---|---|
| B1 | Bauart-Seite: nur „Custom Cases“ hat Bild, 15 fehlen | Aufgabe |
| B2 | Formen-Seite: 18 von 21 Bauform-Bildern fehlen im HTML (PDF-Quellen 1–21 vorhanden) | Aufgabe |
| B3 | Fertigung (Werkstatt-Bilder), Über uns (Hero-Bild), Kachel „Smartes Handling“ | Aufgabe |
| B4 | Produkte-Hub: alle 10 Karten zeigen Platzhalterbild (Silent Rack) | Aufgabe |

## Technik (Migration, Claude Code)
| # | Punkt | Status |
|---|---|---|
| T1 | Original-HTML unverändert sichern (`archiv/original-html/`, 2026-09-27 aus `docs/` herausgelöst und mit `docs/archiv/` zu `archiv/` zusammengeführt – zu groß/irrelevant für Claude Chat) | erledigt (2026-09-26) |
| T2 | Base64-Bilder und Schrift auslagern, Dubletten entfernen, komprimieren; Logo-Varianten vereinheitlichen | erledigt (2026-09-26) |
| T3 | CSS aus `index.html` nach `assets/css/` auslagern, alle Seiten darauf umstellen; Unterschiede der Seiten prüfen (Telefon-Popup/CTA-Kacheln fehlen außerhalb index) | erledigt (2026-09-26) – Telefon-Popup/btn-call waren bereits auf fast allen Seiten vorhanden, jetzt global in components.css |
| T4 | Links von `claude.ai/artifact/...` auf relative Pfade umstellen | erledigt (2026-09-26) |
| T5 | Title/Meta Description/noindex je Seite einsetzen; fehlende Alt-Texte (Prozess-Icons) | erledigt (2026-09-26) – fehlende Title/Meta bei Startseite, Engineering-Hub, Formen-Seite, Kontakt; Prozess-Icon-Alt-Texte weiterhin offen (siehe Migrationsbericht) |
| T6 | Backlog: `.step-top` Radius 24px + Verlauf `#000 → #112f2f` für alle Seiten übernehmen | erledigt (2026-09-26) |
