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
| C1 | Teaser am Ende der Bauart-Seite zur Formen-Seite | teilweise erledigt (2026-09-28) | Formen-seitiger Teaser („Zu den Bauarten“) im HTML umgesetzt und verlinkt auf `#` (Ziel fehlt, siehe C12). Bauart-seitiger Teaser kann erst mit der Bauart-Seite selbst entstehen |
| C2 | Engineering-Hauptseite: Hub-Kacheln für Bauart, Formen, Maße, Materialien | erledigt (2026-09-28) | 4 Kacheln im HTML umgesetzt (Bauart/Materialien verlinken vorerst auf `#`, siehe C12) |
| C3 | Maße-Seite: H1, Intro, CTA, Schema.org | erledigt (2026-09-28) | `/engineering/masse/` als neue HTML-Seite angelegt, inkl. aller Tabellen/Listen aus `content/engineering/masse.md` |
| C4 | Schema.org für Bauart, Formen, Maße | teilweise erledigt (2026-09-28) | BreadcrumbList-Schema + sichtbare Breadcrumb bei Formen und Maße im HTML; Bauart erst mit eigener Seite (C12) |
| C5 | Finaler SEO-Alt-Text-Check aller Bilder | Aufgabe | |
| C6 | Markenneutraler Versand: Platzierung | teilweise erledigt (2026-09-28) | Allgemeine FAQ im HTML ergänzt auf Engineering-Hauptseite, Formen, Maße; Bauart/Fertigung/Über uns/PPWR erst mit den jeweiligen Seiten (C12) |
| C7 | Kontaktseite: Einleitungssatz über dem Kontaktformular | erledigt (2026-09-28) | Platzhalter im HTML durch den finalen Text ersetzt, Title/Meta gesetzt |
| C8 | Impressum, Datenschutz, AGB; alte URLs als Redirects | erledigt (2026-09-28) | `/rechtliches/`, `/rechtliches/impressum/`, `/rechtliches/datenschutz/` als HTML-Seiten angelegt (Impressum/Datenschutz als sichtbarer Platzhalter), 4 AGB-PDF-Downloads verlinkt, Footer + mobiles Menü auf allen Seiten aktualisiert. Redirect-Mapping als HTML-Kommentar dokumentiert (keine echten Server-Redirects auf GitHub Pages möglich). Echte Impressum-/Datenschutztexte weiterhin offen |
| C9 | Branchen-Seiten, Zubehör-Materialseiten, HE/U/RU-Glossar, `/wissen/tsa-schloss` | Aufgabe | siehe `docs/seitenstruktur.md` |
| C10 | Maße-Seite: Datenkonflikte (1/2 Truckmaß, Einheit Truckmaß-Tabelle, Türbreiten) | erledigt (2026-09-27) | 1/2 = 600er Breite, Einheit mm, Türbreiten-Abschnitt neu (Entscheidungen Jascha) |
| C11 | Engineering-Hauptseite: Title, Meta, H1, Intro, CTA, Schema | erledigt (2026-09-28) | im HTML umgesetzt, inkl. BreadcrumbList-Schema und 5 Alt-Texten der Prozess-Icons |
| C12 | HTML-Seiten fehlen komplett: Bauart, Materialien, Fertigung, Über uns, Standards & Werte/PPWR-Stellungnahme | offen | Content liegt in `content/` bereit, aber keine HTML-Seite gebaut (nur „Seite fehlt“-Platzhalterlinks in den Hubs). Bauart zusätzlich mit eigener Design-Entscheidung: Rating-Skala (Punkte/Balken) für Stabilität/Gewicht, Hervorhebung „Light“/„Ultra Light“-Suffix – Vorschlag folgt vor Umsetzung |

## Bilder
| # | Punkt | Status |
|---|---|---|
| B1 | Bauart-Seite: nur „Custom Cases“ hat Bild, 15 fehlen | Aufgabe |
| B2 | Formen-Seite: 18 von 21 Bauform-Bildern fehlen im HTML (PDF-Quellen 1–21 vorhanden) | Aufgabe |
| B3 | Fertigung (Werkstatt-Bilder), Über uns (Hero-Bild), Kachel „Smartes Handling“ | Aufgabe |
| B4 | Produkte-Hub: alle 10 Karten zeigen Platzhalterbild (Silent Rack) | Aufgabe |
| B5 | „Unsere Empfehlungen“: Case-Tile-Komponente ist umgesetzt (Bild + Text getrennt, textfreie Fotos seit 2026-09-28 im Einsatz), aber Branchen-Tag/Titel/Story-Text pro Kachel fehlen noch (Datenfelder aus `content/startseite.md` Abschnitt 3 nicht ausgefüllt) | Aufgabe |

## Technik (Migration, Claude Code)
| # | Punkt | Status |
|---|---|---|
| T1 | Original-HTML unverändert sichern (`archiv/original-html/`, 2026-09-27 aus `docs/` herausgelöst und mit `docs/archiv/` zu `archiv/` zusammengeführt – zu groß/irrelevant für Claude Chat) | erledigt (2026-09-26) |
| T2 | Base64-Bilder und Schrift auslagern, Dubletten entfernen, komprimieren; Logo-Varianten vereinheitlichen | erledigt (2026-09-26) |
| T3 | CSS aus `index.html` nach `assets/css/` auslagern, alle Seiten darauf umstellen; Unterschiede der Seiten prüfen (Telefon-Popup/CTA-Kacheln fehlen außerhalb index) | erledigt (2026-09-26) – Telefon-Popup/btn-call waren bereits auf fast allen Seiten vorhanden, jetzt global in components.css |
| T4 | Links von `claude.ai/artifact/...` auf relative Pfade umstellen | erledigt (2026-09-26) |
| T5 | Title/Meta Description/noindex je Seite einsetzen; fehlende Alt-Texte (Prozess-Icons) | erledigt (2026-09-26) – fehlende Title/Meta bei Startseite, Engineering-Hub, Formen-Seite, Kontakt; Prozess-Icon-Alt-Texte weiterhin offen (siehe Migrationsbericht) |
| T6 | Backlog: `.step-top` Radius 24px + Verlauf `#000 → #112f2f` für alle Seiten übernehmen | erledigt (2026-09-26) |
