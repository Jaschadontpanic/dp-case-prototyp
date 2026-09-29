# Design-System dp-case.de-Prototyp

Quelle: `index.html` (Stand 2026-09-25) – verbindliche Design-Basis. Aus anderen Seiten werden nur einzelne Elemente übernommen (z. B. Prozess-Kacheln aus `engineering.html`), nicht deren Grundgerüst.

## Variablen (`assets/css/tokens.css`)
| Variable | Wert | Verwendung |
|---|---|---|
| `--teal` | #2D8282 | Akzent, Primär-Button, Links |
| `--anthrazit` | #242223 | dunkle Flächen, Überschriften auf hell |
| `--hell` | #F0F5EB | helle Sektionen, Info-Boxen |
| `--schwarz` | #1D1D1B | Fließtext |
| `--grau-text` | #6b6b6b | Sekundärtext |
| `--heading-font` | 'Clear Sans Bold', Arial, sans-serif | Überschriften |
| `--body-font` | 'Clear Sans Bold', Arial, Helvetica, sans-serif | Fließtext |
| `--headline-alt-font` | 'Open Sans', Arial, sans-serif (Google Fonts, 400/600/700) | Seitenköpfe (page-head), CTA-Bänder, Telefon-Popup |
| `--mono-font` | 'DejaVu Sans Mono', 'Courier New', monospace | Kicker, Tags |
| `--fs-h1` | 52px (mobil ≤900px: 32px) | Hero-Headline |
| `--fs-h2` | 36px | Sektions-Überschriften |
| `--fs-body` | 18px | Hero-Beschreibung, Intros |
| `--fs-body-small` | 14px | Karten-/Prozess-Text |
| `--fs-nav` | 16px | Navigation, Buttons |
| `--fs-card-title` | 20px | H3 in Karten |
| `--fs-stat-number` | 30px | Statistik-Zahlen, Kicker |
| `--fs-small` | 14px | Labels |
| `--max-width` | 1744px | Inhaltsbreite |
| `--side-pad` | 120px | Seitenrand Inhalte (Header bewusst 48px) |
| `--header-pad-v` | 18px | Header-Innenabstand oben/unten, Scroll-Position 0 |
| `--header-pad-v-scrolled` | 10px | Header-Innenabstand oben/unten, gescrollt |
| `--logo-h-top` | 60px | Logo-Höhe Desktop, Scroll-Position 0 |
| `--logo-h-top-mobile` | 45px | Logo-Höhe ≤900px, Scroll-Position 0 |
| `--logo-h-scrolled` | 32px | Logo-Höhe Desktop, gescrollt |
| `--logo-h-scrolled-mobile` | 24px | Logo-Höhe ≤900px, gescrollt |
| `--transition-fast` | 220ms ease | Logo-Crossfade, Padding-Übergang im Header |

## Grundlagen
- Body: weiß, `line-height: 1.5`; Überschriften `font-weight: 700`, `line-height: 1.15`.
- `.wrap`: max-width + side-pad, zentriert.
- Breakpoint: **900px** (Nav → Burger, Grids einspaltig, Hero-H1 32px, Logo 45px→24px gescrollt, CTA-Button im Header ausgeblendet). Formularzeilen zusätzlich bei 640px.
- Formsprache weich/rund: Radien 14–24px, Buttons als Pille (999px).

## Komponenten
- **Header** (`header.nav`): sticky, #000, Innenabstand seit 2026-09-29 `--side-pad` links/rechts (vorher fix 48px, dadurch schmaler als der Seiteninhalt – jetzt bündig mit `.wrap`-Inhalten darunter); Logo absolut mittig; Nav-Links links (Abstand 40px, Hover teal); CTA-Button rechts. Nav-Schrift und Breite bleiben in jedem Zustand gleich groß; der Button schrumpft seit 2026-09-29 beim Scrollen zusätzlich (siehe Header-CTA unten).
  - **Scroll-Logo** (Vorbild mercedes-benz.de, 2026-09-27): Scroll-Position 0 → Innenabstand oben/unten 18px, Logo 60px (Desktop) / 45px (≤900px), zweizeilig („don't panic“ + „die case-manufaktur GmbH“). Ab 24px Scrollposition (Klasse `.scrolled` auf `header.nav`, gesetzt von `assets/js/main.js`) → Innenabstand 9px, Logo 29px (Desktop) / 22px (≤900px), einzeilig (`logo-dont-panic-kompakt.jpg`) – Werte seit 2026-09-29 ca. 10% kleiner als zuvor (vorher 10px/32px/24px, Gesamthöhe 76px). Zwei `<img>` übereinander, Wechsel per Opacity-Crossfade (`--transition-fast`, 220ms) statt `src`-Tausch, kein Flackern/Sprung. Alt-Text in beiden Zuständen „don't panic – die case-manufaktur GmbH“. Seit 2026-09-28: `logo-dont-panic.jpg` auf reinen Bildinhalt zugeschnitten (1499×411 statt 1512×420) – Original hatte einen mitexportierten weißen Rand rechts/unten, sichtbar als Strich hinter „panic“ und Unterstreichung unter dem Untertitel; `logo-dont-panic-kompakt.jpg` war bereits sauber.
  - **Header-CTA** (seit 2026-09-28, Stil seit 2026-09-29 überarbeitet): `header.nav .nav-inner > .btn` mit reduziertem Innenabstand 11px/21px (~20 % kleiner als `.btn`-Standard) – wirkte neben dem kompakten Logo sonst zu dominant. Stil seit 2026-09-29 dezenter: dünner 1px-Rand `rgba(255,255,255,0.6)`, transparenter Hintergrund statt teal-gefüllt (aus 14 Vorschlägen ausgewählt, Screenshots im Chat). Nach dem Scrollen (`.scrolled`) zusätzlich kleiner: Padding 10px/19px, Schrift 13px. Nur im Header, andere `.btn-primary`-Vorkommen (CTA-Bänder, Formular) bleiben teal-gefüllt und unverändert.
- **Buttons** (`.btn`): 14px 26px, Radius 999px, 700, `--fs-nav`; `.btn-primary` teal/weiß; `.btn-outline` transparent mit weißem 2px-Rand (auf dunkel); `.btn-link` teal mit Pfeil; `.btn-call` mit Telefon-Icon + Popup (`.phone-popup`).
- **Hero** (`.hero`): Vollbild-Hintergrundbild, `aspect-ratio: 2045/867`; Verlauf links (95 % schwarz → 0 bei 30 %) und unten (90 % → 0 bei 22 %); H1 `--fs-h1`, Beschreibung max. 640px, #ddd.
- **Stats-Zeile** (`.stats-row`): 6-Spalten-Grid, Kicker über 3 Spalten, 3 Stat-Items (Zahl `--fs-stat-number`, Label `--fs-small` #888).
- **Wert-Kacheln** (`.vp-card`): 4-Spalten-Grid, 300px hoch, Radius 14px, Hintergrundbild mit Verlauf von unten (85 % → 0 bei 65 %), Text unten links weiß.
- **Cases-Grid** (`.cases-grid`): 3 Spalten, Abstand 24px, Radius 20px, `.span-2` für breite Kachel, Hover-Zoom 1.05; CTA-Kacheln (`.cta-tile`) anthrazit. Seit 2026-09-28: Bild-Kacheln nutzen `.case-tile` (Bild + Verlauf + Branchen-Tag oben links + Titel/Text unten links weiß) statt Text im Bild – Bild und Text werden getrennt geliefert; textfreie Fotos seit 2026-09-28 im Einsatz, Branchen-Tag/Titel/Story-Text pro Kachel noch Platzhalter (siehe B5). Verlauf seit 2026-09-29 nach Vorbild mercedes-benz.de „Unsere Empfehlungen“: `linear-gradient(to top, #000 25%, rgba(0,0,0,0) 55%)` – Foto geht unten in einen durchgehend schwarzen Textblock über, keine durchgängige Transparenz mehr wie zuvor (und weiterhin bei `.vp-card`, bewusst nicht angeglichen – andere Kachelart/Bildmotive).
- **Trust-Liste**: 8 Größenstufen `.t1`–`.t8` (32/26/22/19px Heading-Font, dann 14/14/13/13px, Grau abgestuft #1a1a1a → #939393). Seit 2026-09-29: jede Firmen-Zeile (`.tier`) statt zentriert als Blocksatz – `display:flex;flex-wrap:wrap;justify-content:space-between` je Zeile, jeder Firmenname in `<span>` mit angehängtem „ ·“-Trenner (Trenner bewusst Teil desselben `<span>`, sonst kann der Punkt beim Umbruch von seinem Namen getrennt auf einer eigenen Zeile landen), `white-space:nowrap` verhindert Umbruch/Sperrung innerhalb eines Namens. Reines CSS/Markup-Layout, keine Textänderung. Bei ≤900px zusätzlich 48px statt 120px Seitenrand (wie Bauart-Row/Silent-Rack) – sonst zu wenig Platz, zu viele Kurzzeilen. Wiederverwendet auf `standards-werte/index.html` (identischer Block), dort ebenfalls angepasst.
- **Kontakt**: Formular einspaltig (Inputs Radius 14px, Fokus teal), optionale Felder per `<details>`; Info-Block `--hell`, Radius 16px. Seit 2026-09-27 (Vorbild mercedes-benz.de-Kontaktformular): Label steht als kleine, teal-farbene Zeile IM umrandeten Feld (`.field`/`.field-label`, nur Kontaktseite), Radiobuttons „Bevorzugte Kontaktart" stehen untereinander statt nebeneinander, Absenden-Button rechtsbündig. Eingabefeld-Radius 14px gilt sitewide (vorher 8px, siehe `.contact-form input/select/textarea`). Einleitungssatz (`.intro-headline` + `.intro-headline-sub`, seit 2026-09-28 final): fette teal Zeile + kleinerer grauer Satz darunter, Aufbau analog „Ruf uns an.“-Block.
- **Footer** (`footer.site-footer`): #000, #ccc, 13px, zentriert, einzeilig. Seit 2026-09-28: „Impressum“/„Datenschutz“/„AGB“ sind echte Links auf `/rechtliches/…`.
- **Breadcrumb** (`.breadcrumb`, neu 2026-09-28): kleine graue Zeile über `.page-head`, `--fs-small`, Trenner „›“, letztes Element (aktuelle Seite) ohne Link. Nur bestehende Tokens.
- **Data-Table / Text-Section** (`.data-table`, `.text-section`, neu 2026-09-28, Maße-/Standards-Werte-/PPWR-Seite): schlichte Tabelle (Kopfzeile `--hell`-Hintergrund, `--fs-body-small`) mit horizontalem Scroll auf schmalen Viewports (`min-width` + `overflow-x:auto`, kein Zeilenumbruch pro Zelle); Fließtext/Listen in `--grau-text`, max. 70ch. Optionale `h3`-Zwischenüberschrift (`--fs-card-title`) pro Abschnitt; Links darin in `--teal`, unterstrichen (sonst per globalem Reset unsichtbar, da `a{color:inherit}`).
- **Rechtliches** (`.legal-list`, `.download-list`, neu 2026-09-28): einfache Linklisten mit unterer Trennlinie, für Seiten-Übersicht bzw. PDF-Downloads (AGB).
- **FAQ + CTA-Band, Reihenfolge**: siteweit einheitlich Content → (Teaser) → Allgemeine FAQ → CTA-Band (CTA immer als letztes Element vor dem Footer).
- **Bauart-Row** (`.bauart-row`, neu 2026-09-28, Flightcase-Bauart-Seite, mit Jascha abgestimmt): alternierende Bild/Text-Zeile per CSS-Grid-Areas (Desktop: Bild 42% Breite abwechselnd links/rechts neben Titel/Text/Specs/Rating; Mobil gestapelt in fester Reihenfolge Titel → Bild → Text → Rating, Bild randlos ohne Radius, Textblock mit 48px Seitenrand statt der sonst 120px `--side-pad` – sonst zu wenig Platz für Text). Rating als Balken (`.bauart-rating-track`/`-fill`, Teal auf `--hell`, Beschriftung „Label X/10“ daneben). „Light“/„Ultra Light“-Suffix als eigenes Badge (`.bauart-badge`, Teal-Outline-Pille, Mono-Font, reuse aus Tag-Mustern) statt Teil des Fließnamens. Bauart-Name auf `--fs-card-title` (Token, kein Freihandwert).
- **Produkt-Detailseite, Vorlage** (Silent Rack, vollständig 2026-09-28): Hero → Breadcrumb → Story → Use-Case → Highlights (`.product-grid`) → Konfigurierbarkeit+CTA (`.typen-teaser`) → Trust-Zeile (einzeiliger `--teal`-Satz, zentriert) → eigene Produkt-FAQ → Technische Daten (`.data-table.spec-sheet` – Modifier für lange Textwerte: `white-space:normal` statt `nowrap`, schmalere Label-Spalte, bei ≤900px zusätzlich 48px statt 120px Seitenrand wie bei Bauart-Row) → Rating-Balken (Wiederverwendung `.bauart-rating-*`) → Branchen-Tags (Wiederverwendung `.bauart-badge`) → Kundenreferenz → Allgemeine FAQ → CTA-Band. Schema.org: BreadcrumbList + Product + FAQPage (3 separate `<script type="application/ld+json">`). Als Muster für die weiteren 9 Produktseiten gedacht.

## Case-Tile (umgesetzt 2026-09-28)
„Unsere Empfehlungen“-Kacheln (`.cases-grid`, Startseite) benötigen jetzt nur noch **Bild + Text getrennt** (Titel, Story-Text, Branchen-Tag) statt wie bisher fertig bebilderter Kacheln mit eingebranntem Text. Optik bleibt gleich (Verlauf, Branchen-Tag oben links, Titel/Text unten links, weiß).

**Befund (2026-09-28):** Die bisherigen Fotos `cases-backstage-kaffeebar.jpg`, `cases-luftfahrt-schablonen-flightcase.jpg`, `cases-broadcast-pult-workstation.jpg` enthielten Titel, Story-Text, Branchen-Tag und Button bereits als Pixel im Bild (Export aus dem ursprünglichen Claude-Artifact-Mockup) – konnten nicht als Hintergrund für die neue Text-Overlay-Kachel weiterverwendet werden. Textfreie Ersatzfotos werden über den Content-Chat geliefert (siehe B5 in `docs/open-decisions.md`) – bis dahin zeigt die Seite die alten Fotos + Platzhalter-Text übereinander (technisch funktionsfähig, optisch erst nach dem Foto-Tausch final).

**Komponenten-Entwurf** (reine Wiederverwendung bestehender Werte, kein neuer Design-Wert): identischer Verlauf/Textposition wie `.vp-card` – `linear-gradient(to top, rgba(0,0,0,.85) 10%, rgba(0,0,0,0) 65%)`, Text unten links weiß (`--fs-card-title`/`--fs-body-small`), Branchen-Tag oben links (`--mono-font`, 11px, uppercase).

**Was automatisiert per CSS passiert (einmalig umgesetzt, danach kein Aufwand mehr pro Kachel):**
- Dunkler Verlauf von unten für Text-Lesbarkeit
- Eckenradius 20px, Zuschnitt auf Kachelgröße (`object-fit: cover`)
- Hover-Zoom (`scale(1.05)`)
- Positionierung Branchen-Tag/Titel/Text
- Responsives Umbrechen (Grid → 1 Spalte ≤900px)

**Was in der Bildbearbeitung passieren muss, bevor ein Foto geliefert wird:**
- Bildausschnitt so wählen, dass der untere Bereich nicht zu hell/detailreich ist (sonst schluckt es den Text-Kontrast trotz Verlauf)
- Passendes Seitenverhältnis je Kachelgröße zuschneiden (3 normale Kacheln + 1 breite `span-2`-Kachel = unterschiedliche Formate)
- CI-Farbe (Teal) dezent in Lichtreflexionen/Spiegelungen einbringen – gestalterische Retusche, nicht automatisierbar (würde sonst das ganze Bild einfärben statt selektiv einzelne Bereiche)
- Freisteller/Hintergrund entfernen – nur falls Produktfoto statt Umgebungsfoto (bei den aktuellen 3 Motiven nicht relevant)
- Kompression/Dateigröße übernimmt weiterhin Claude Code (mechanisch, keine Gestaltung)

## Aus anderen Seiten übernommene Elemente
- **Prozess-Kacheln** (`engineering.html`): `.step` mit Rand #e6e6e2, Radius 24px; `.step-top` Verlauf `#000 → #112f2f`, Radius 24px; Icons 72×72px.
- **Page-Head** (Unterseiten): `.page-head` 56px oben, H1 in `--headline-alt-font`.
- **Hub-/Produktkarten**: Rand #eee, Radius 16px, Hover-Schatten. `.hub-grid`/`.hub-grid-single` Default 3 Spalten, Anzahl per Inline-Style überschreibbar (Engineering: 4 Spalten seit 2026-09-28).
- **Produkt-Hero** (`produkte-silent-rack.html`): Grau-Verlauf-Hintergrund, H1 36px zentriert, freigestelltes Produktbild mit Bodenschatten. Seit 2026-09-27: kein festes `aspect-ratio` mehr (Produktbild muss auf jeder Auflösung komplett sichtbar sein, egal welches Seitenverhältnis das Foto hat) – Bild wird per `max-height` (65vh Desktop / 50vh ≤900px) + `object-fit: contain` begrenzt, Container passt sich an.
- **Bauform-Karten** (`engineering-formen.html`): 4-Spalten-Grid, Karte 150px, Bild ragt oben heraus.
