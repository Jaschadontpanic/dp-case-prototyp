# Übergabe an die Entwicklerin – Relaunch dp-case.de

Stand: 2026-10-16 · Freigabe: Jascha von Cube (jvc@dp-case.de)

---

## 1. Auftrag in Kürze

| Punkt | Festlegung |
|---|---|
| Plattform | WordPress auf dem bestehenden IONOS-Hosting |
| Page-Builder | deine Wahl (Elementor oder anders) |
| Bisheriger Entwurf `dp-case.de/casemanufaktur/` | umbauen oder neu bauen – entscheidest du |
| Design | **1:1 aus dem HTML-Prototyp.** Der Prototyp ist die verbindliche Referenz. Abweichungen nur nach Rücksprache mit Jascha. |
| Texte | **wörtlich aus `content/`** übernehmen, nicht umformulieren, kürzen oder ergänzen |
| Go-live-Ziel | KW 45 (ca. 06.11.2026) |
| Sprache | nur Deutsch, Englisch folgt später |
| Nach Go-live | Pflege und Wartung durch dich; neue Produktseiten ca. 1 pro Monat oder seltener (siehe Abschnitt 9) |

---

## 2. Quellen

- Repository: https://github.com/Jaschadontpanic/dp-case-prototyp
- Live-Vorschau des Prototyps: https://jaschadontpanic.github.io/dp-case-prototyp/

| Was | Wo |
|---|---|
| Texte je Seite inkl. Title, Meta Description, H1, Breadcrumb, FAQ, Schema.org, Alt-Texte | `content/` (Ordner = URL) |
| Seitenliste, URLs, Status | `docs/seitenstruktur.md` |
| Design-Werte (Farben, Schriften, Größen, Komponenten, Breakpoints) | `assets/css/tokens.css` (Werte) und `docs/design-system.md` (Beschreibung) |
| Komponenten-CSS und JS | `assets/css/base.css`, `assets/css/components.css`, `assets/js/` |
| Bilder | `assets/images/` |
| Schrift | `assets/fonts/clear-sans-bold.ttf` |
| AGB-PDFs | `assets/downloads/` |
| Vorlage für neue Produktseiten | `docs/produktseiten-vorlage.md` |
| Allgemeine FAQ (wiederverwendeter Baustein) | `content/_global/faq-allgemein.md` |
| Offene Punkte (Gesamtliste) | `docs/open-decisions.md` |
| Änderungshistorie | `docs/changelog.md` |

Nicht relevant für dich: `archiv/`, `CLAUDE.md`, `docs/project-rules.md`, `docs/code-rules.md`. Das sind interne Regeln für den Bau des Prototyps.

### Hinweise für die Arbeit mit Claude
- Claude das Repository oder die betreffende `content/`-Datei plus die Vorschau-URL der Seite geben.
- Vorgabe an Claude: „Texte aus `content/` wörtlich übernehmen. Design-Werte nur aus `assets/css/tokens.css`. Keine eigenen Werte erfinden.“
- Wenn Content-Datei und HTML-Prototyp sich widersprechen, gilt für **Texte** die Content-Datei und für **Design** der HTML-Prototyp. Ausnahmen stehen in Abschnitt 5.

---

## 3. Design übernehmen

- Farben, Typo-Skala, Abstände, Radien und Breakpoints als globale Einstellungen anlegen (Elementor: Globale Farben und Schriften). Werte aus `assets/css/tokens.css`, inklusive der Mobil-Werte unter `@media (max-width: 900px)`.
- Schriften **selbst hosten** (Clear Sans Bold, Open Sans), nicht über das Google-Fonts-CDN einbinden.
- Komponenten wie im Prototyp: Header mit mittigem Logo und Scroll-Verkleinerung, Hero mit Verlauf, Stats-Zeile, Wert-Kacheln, Case-Tiles, Trust-Liste mit abnehmender Schriftgröße, CTA-Band, Telefon-Popup, FAQ-Ausklapper, Footer.
- Mobil-, Tablet- und Desktop-Ansicht des Prototyps jeweils als Referenz prüfen.

---

## 4. Go-live-Umfang (Phase 1)

| Seite | URL | Content | HTML-Referenz im Prototyp | Hinweis |
|---|---|---|---|---|
| Startseite | `/` | `content/startseite.md` | `index.html` | Änderungen siehe Abschnitt 5 |
| Produkte (Übersicht) | `/produkte` | `content/produkte/index.md` | `produkte/index.html` | |
| 10 Produktseiten | siehe `docs/seitenstruktur.md` | je `content/<kategorie>/<produkt>.md` | nur Silent Rack: `19-zoll-racks/silent-rack/index.html` | Silent Rack ist die Layout-Vorlage. Die übrigen 9 Seiten nach diesem Muster mit dem jeweiligen Content bauen. Am Ende jeder Seite die Allgemeine FAQ (markenneutraler Versand). |
| Manufaktur | `/manufaktur` | `content/manufaktur/index.md`, `fertigung.md`, `ueber-uns.md`, `content/standards-werte/index.md`, `ppwr-stellungnahme.md` | `manufaktur/…`, `standards-werte/…` | **Eine einzige Seite** mit allen Inhalten als Abschnitte. Keine Unterseiten. Die Teaser-Kacheln im Hub werden zu Sprungmarken auf die Abschnitte. |
| Kontakt | `/kontakt` | `content/kontakt.md` | `kontakt/index.html` | Formular siehe Abschnitt 7 |
| Rechtliches | `/rechtliches`, `/rechtliches/impressum`, `/rechtliches/datenschutz` | `content/rechtliches/` | `rechtliches/…` | Impressum und Datenschutz sind im Prototyp Platzhalter. Texte von der aktuellen Live-Seite übernehmen und um neue Dienste (Formular-Upload, ggf. Karte, Bewertungs-Plugin) ergänzen. |

---

## 5. Änderungen gegenüber dem aktuellen Prototyp (Entscheidungen 2026-10-16)

Diese Punkte sind im Prototyp **noch nicht** umgesetzt und haben Vorrang:

1. **Reihenfolge Startseite:** „Unsere Empfehlungen“ kommt direkt nach dem Hero als erster Abschnitt.
   Neue Reihenfolge: Hero → Unsere Empfehlungen → Alles, was ein Case können kann → Trust-Element → CTA „Dein Case, egal wie speziell.“
2. **Hero-Bild Startseite:** `hero-case-foto.jpg` wird ersetzt durch `assets/images/startseite/cases-broadcast-pult-workstation.jpg`. Grund: Das bisherige Bild ist generiert und zeigt Beschläge, die es so nicht gibt. Zuschnitt auf das Hero-Seitenverhältnis 2045/867.
3. **Folge aus Punkt 2, Kachel „Silent Rack“ in „Unsere Empfehlungen“:** Sie zeigt bisher dasselbe Broadcast-Bild. Um die Dopplung zu vermeiden, stattdessen `assets/images/produkte/SOAZMA0010/SOAZMA0010_00_hero.png` (Hero-Bild Silent Rack) verwenden.
4. **Anruf-Button im CTA „Dein Case, egal wie speziell.“:** Er ist hell auf hellem Grund und kaum sichtbar (`.btn-outline` mit weißem Rand auf hellem Hintergrund). Er braucht klaren Kontrast, z. B. Rand und Text in Anthrazit `#242223`, so wie der Anruf-Button in der Produkt-Hero-Leiste (`.product-hero-bar .btn-call`).
5. **Kacheln „Unsere Empfehlungen“:** Im Prototyp stehen noch Platzhalter (`[Branche]`, `[Case-Titel]`, `[Story-Text folgt]`). Die finalen Inhalte (Branchen-Tag, Titel, Story, Button, Ziel-Link) stehen in `content/startseite.md`, Abschnitt 3.
6. **Hero-Headline** bleibt unverändert: „Dein Case. / Unsere Präzision. / Gemeinsam entwickelt.“
7. **Eckform der Kacheln:** wie im Prototyp.
8. **Links auf Phase-2-Bereiche ausblenden:** Engineering und Wissen gehen in Phase 1 nicht online. Deshalb den Hauptnavigationspunkt „Engineering“ ausblenden, ebenso die Kachel „Engineering, das den Unterschied macht“ in „Unsere Empfehlungen“ und die Footer-Links auf Engineering und Wissen. Auch Links aus Produkt-FAQs oder anderen Texten auf diese Bereiche zum Go-live entfernen oder deaktivieren und eine Liste der betroffenen Stellen an Jascha geben. Nach Phase 2 wieder aktivieren.

---

## 6. Phase 2 (nach Go-live)

- Engineering mit allen Unterseiten (Bauart, Formen, Maße, Materialien). Content und HTML sind weitgehend fertig.
- Wissen-Bereich (`/wissen`, Höheneinheiten, TSA-Schloss)
- Englische Version
- Navigationskonzept mit Untermenüs, Footer mit vollständiger Sitemap (`docs/open-decisions.md` S2, S3)
- Branchen- und Produkttyp-Übersichtsseiten, sobald jeweils 3 oder mehr Produkte vorhanden sind

---

## 7. Technische Vorgaben

### SEO
- Title-Tag, Meta Description, H1 und Breadcrumb **je Seite** aus der Content-Datei übernehmen. Title und H1 sind bewusst verschieden.
- Schema.org (JSON-LD) je Seite laut Content-Datei: Product, FAQPage und BreadcrumbList auf den Produktseiten, BreadcrumbList überall sonst.
- Alt-Texte aus den Content-Dateien übernehmen.
- **Wichtig:** Der Prototyp hat auf jeder Seite `noindex, nofollow`. Das darf **nicht** auf die Live-Seite übernommen werden.
- Artikelnummern nie in Title oder H1, nur klein bei den technischen Daten.

### Redirects (301) von der alten Seite
| Alt | Neu |
|---|---|
| `/impressum/` | `/rechtliches/impressum` |
| `/datenschutzerklaerung/` | `/rechtliches/datenschutz` |
| `/agb-2/` | `/rechtliches` |
| `/casemanufaktur/` (bisheriger Entwurf) | `/` oder `/manufaktur`, je nachdem, was mit dem Entwurf passiert |

### Kontaktformular
- Felder, Pflichtfelder, Ausklappbereich „Optional, aber hilfreich“, zwei Datei-Uploads und Platzhaltertexte genau nach `content/kontakt.md`.
- Pflicht-Checkbox Datenschutz mit Link auf `/rechtliches/datenschutz`.
- Versand an info@dp-case.de.
- Alle E-Mail-Adressen auf der Seite lauten auf **@dp-case.de**, nicht mehr @dont-panic.biz.

### Telefon
- Telefon-Popup wie im Prototyp: 040 721 76 92, Mo.–Fr. 9–18 Uhr.

### Karte (Kontaktseite)
- Der Kartendienst ist noch nicht entschieden. Zum Go-live die Karte weglassen oder nur als statisches Bild mit Link zum Routenplaner einbinden. Ein Kartendienst mit Datenübertragung braucht eine Einwilligung.

### Kundenbewertungen (TrustIndex)
- Nur einbinden, wenn echte Google-Bewertungen angezeigt werden. Sonst den Abschnitt ausblenden.

### Bilder
- Namensschema: `[ARTIKELNUMMER]_[NUMMER]_[KATEGORIE]_[KURZBESCHREIBUNG]` (00 = Hero, 10–19 = Highlights, 20 = Ergänzung).
- Komprimiert ausliefern (WebP oder vergleichbar).

---

## 8. Offen vor Go-live – liefert Jascha

| # | Was | Stand |
|---|---|---|
| B6 | Silent-Rack-Highlight-Fotos `SOAZMA0010_10` bis `_16` | Platzhalter im Prototyp |
| B4 | Fotos für die 10 Produktkarten im Produkte-Hub | Platzhalter |
| – | Hero- und Highlight-Fotos der 9 weiteren Produktseiten | laut jeweiliger Content-Datei |
| B7 | Header-Foto Produkte-Hub | Platzhalter |
| B3 | Werkstatt-Bilder Fertigung, Hero-Bild Über uns | Platzhalter |
| B8 | Team-Fotos Ole und Michaela | Platzhalter (Jascha und Oleg sind final) |
| B12 | Bilder Standards & Werte in höherer Auflösung, Bildrechte | nur 300 × 200 px vorhanden |
| – | Freigabe Impressum- und Datenschutztext | vor Go-live |

Bis Fotos vorliegen: Platzhalter verwenden und die betroffenen Stellen in einer kurzen Liste an Jascha melden.

---

## 9. Neue Produkte nach Go-live

1. Vorlage `docs/produktseiten-vorlage.md` vollständig durchlaufen. Primärquelle ist die Kalkulationstabelle bzw. der Schneideplan des Produkts.
2. URL nach Produkttyp (Achse A), z. B. `/19-zoll-racks/<produkt>`. Branchen (Achse B) nur als Schlagwort.
3. Feste Regeln: Artikelnummer nie in Title oder H1. „Catches“ heißen „Butterfly“. Kundenbewertungen nie zitieren, nur verlinken. Highlights immer als Titel + ein Satz mit Kundennutzen, neutral formuliert. Allgemeine FAQ am Seitenende.
4. Übersichtsseiten (Produkttyp oder Branche) erst ab 3 passenden Produkten veröffentlichen.

---

## 10. Abnahme vor Go-live

- [ ] Alle Seiten aus Abschnitt 4 vorhanden, Texte wörtlich wie in `content/`
- [ ] Änderungen aus Abschnitt 5 umgesetzt
- [ ] Desktop, Tablet und Mobil gegen den Prototyp geprüft
- [ ] Title, Meta, H1, Schema.org und Alt-Texte je Seite gesetzt; kein `noindex` auf der Live-Seite
- [ ] Redirects aktiv
- [ ] Formular-Testversand inkl. Upload an info@dp-case.de erfolgreich
- [ ] Keine toten Links, keine sichtbaren Links auf Phase-2-Bereiche
- [ ] Impressum und Datenschutz final, Cookie-Banner falls Tracking oder externe Dienste eingesetzt werden
- [ ] Schriften lokal eingebunden
- [ ] Ladezeit geprüft (PageSpeed mobil)
