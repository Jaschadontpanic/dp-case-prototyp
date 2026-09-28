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
| C1 | Teaser am Ende der Bauart-Seite zur Formen-Seite | erledigt (2026-09-27) | Text in `content/engineering/flightcase-bauart.md`; Formen-Teaser führt zur Bauart („Typen“ → „Bauarten“). HTML-Umsetzung durch Claude Code offen |
| C2 | Engineering-Hauptseite: Hub-Kacheln für Bauart, Formen, Maße, Materialien | erledigt (2026-09-27) | Hauptseite bleibt (Entscheidung Jascha: mit Prozess und Kacheln); Kacheltexte in `content/engineering/index.md`, HTML-Umsetzung durch Claude Code offen |
| C3 | Maße-Seite: H1, Intro, CTA, Schema.org | erledigt (2026-09-27) | Content in `content/engineering/masse.md` ergänzt (2026-09-27), Freigabe Jascha + HTML-Seite durch Claude Code offen |
| C4 | Schema.org für Bauart, Formen, Maße | erledigt (2026-09-27) | BreadcrumbList + Canonical/Robots in `content/`; Bauart/Formen zusätzlich Title, Meta, Breadcrumb. Einbau ins HTML durch Claude Code offen |
| C5 | Finaler SEO-Alt-Text-Check aller Bilder | Aufgabe | |
| C6 | Markenneutraler Versand: Platzierung | erledigt (2026-09-28) | Entscheidung Jascha: bleibt in der Allgemeinen FAQ, nicht in Schritt 05; Allgemeine FAQ wird zusätzlich auf Bauart, Formen, Maße, Fertigung, Über uns und PPWR eingebunden |
| C7 | Kontaktseite: Einleitungssatz über dem Kontaktformular | erledigt (2026-09-27) | Text entschieden (2026-09-27): „Lass uns dein perfektes Case entwickeln.“ + Satz, steht in `content/kontakt.md`; Claude Code ersetzt den Platzhalter und setzt Title/Meta ein |
| C8 | Impressum, Datenschutz, AGB übernehmen; alte URLs als Redirects | Aufgabe | Content in `content/rechtliches/` (2026-09-28): Impressum, Datenschutz, 4 AGB-Varianten, Übersicht mit Redirect-Tabelle. Offen: Prüfpunkte in impressum.md/datenschutz.md klären, HTML-Seiten + Redirects durch Claude Code |
| C9 | Branchen-Seiten, Zubehör-Materialseiten, HE/U/RU-Glossar, `/wissen/tsa-schloss` | Aufgabe | siehe `docs/seitenstruktur.md` |
| C11 | Engineering-Hauptseite: Title, Meta, H1, Intro, CTA, Schema | erledigt (2026-09-28) | in `content/engineering/index.md`; HTML-Umsetzung durch Claude Code offen |
| C10 | Maße-Seite: Datenkonflikte (1/2 Truckmaß, Einheit Truckmaß-Tabelle, Türbreiten) | erledigt (2026-09-27) | 1/2 = 600er Breite, Einheit mm, Türbreiten-Abschnitt neu (Entscheidungen Jascha) |

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
