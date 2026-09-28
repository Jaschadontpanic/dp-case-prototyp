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

## Grundlagen
- Body: weiß, `line-height: 1.5`; Überschriften `font-weight: 700`, `line-height: 1.15`.
- `.wrap`: max-width + side-pad, zentriert.
- Breakpoint: **900px** (Nav → Burger, Grids einspaltig, Hero-H1 32px, Logo 30px, CTA-Button im Header ausgeblendet). Formularzeilen zusätzlich bei 640px.
- Formsprache weich/rund: Radien 14–24px, Buttons als Pille (999px).

## Komponenten
- **Header** (`header.nav`): sticky, #000, Innenabstand 18px/48px; Logo absolut mittig (40px hoch); Nav-Links links (Abstand 40px, Hover teal); CTA-Button rechts.
- **Buttons** (`.btn`): 14px 26px, Radius 999px, 700, `--fs-nav`; `.btn-primary` teal/weiß; `.btn-outline` transparent mit weißem 2px-Rand (auf dunkel); `.btn-link` teal mit Pfeil; `.btn-call` mit Telefon-Icon + Popup (`.phone-popup`).
- **Hero** (`.hero`): Vollbild-Hintergrundbild, `aspect-ratio: 2045/867`; Verlauf links (95 % schwarz → 0 bei 30 %) und unten (90 % → 0 bei 22 %); H1 `--fs-h1`, Beschreibung max. 640px, #ddd.
- **Stats-Zeile** (`.stats-row`): 6-Spalten-Grid, Kicker über 3 Spalten, 3 Stat-Items (Zahl `--fs-stat-number`, Label `--fs-small` #888).
- **Wert-Kacheln** (`.vp-card`): 4-Spalten-Grid, 300px hoch, Radius 14px, Hintergrundbild mit Verlauf von unten (85 % → 0 bei 65 %), Text unten links weiß.
- **Cases-Grid** (`.cases-grid`): 3 Spalten, Abstand 24px, Radius 20px, `.span-2` für breite Kachel, Hover-Zoom 1.05; CTA-Kacheln (`.cta-tile`) anthrazit. Seit 2026-09-28: Bild-Kacheln nutzen `.case-tile` (Bild + Verlauf + Branchen-Tag oben links + Titel/Text unten links weiß, identische Werte wie `.vp-card`) statt Text im Bild – Bild und Text werden getrennt geliefert; textfreie Fotos seit 2026-09-28 im Einsatz, Branchen-Tag/Titel/Story-Text pro Kachel noch Platzhalter (siehe B5).
- **Trust-Liste**: 8 Größenstufen `.t1`–`.t8` (32/26/22/19px Heading-Font, dann 14/14/13/13px, Grau abgestuft #1a1a1a → #939393).
- **Kontakt**: Formular einspaltig (Inputs Radius 14px, Fokus teal), optionale Felder per `<details>`; Info-Block `--hell`, Radius 16px. Seit 2026-09-27 (Vorbild mercedes-benz.de-Kontaktformular): Label steht als kleine, teal-farbene Zeile IM umrandeten Feld (`.field`/`.field-label`, nur Kontaktseite), Radiobuttons „Bevorzugte Kontaktart" stehen untereinander statt nebeneinander, Absenden-Button rechtsbündig. Eingabefeld-Radius 14px gilt sitewide (vorher 8px, siehe `.contact-form input/select/textarea`). Einleitungssatz (`.intro-headline` + `.intro-headline-sub`, seit 2026-09-28 final): fette teal Zeile + kleinerer grauer Satz darunter, Aufbau analog „Ruf uns an.“-Block.
- **Footer** (`footer.site-footer`): #000, #ccc, 13px, zentriert, einzeilig. Seit 2026-09-28: „Impressum“/„Datenschutz“/„AGB“ sind echte Links auf `/rechtliches/…`.
- **Breadcrumb** (`.breadcrumb`, neu 2026-09-28): kleine graue Zeile über `.page-head`, `--fs-small`, Trenner „›“, letztes Element (aktuelle Seite) ohne Link. Nur bestehende Tokens.
- **Data-Table / Text-Section** (`.data-table`, `.text-section`, neu 2026-09-28, Maße-/Standards-Werte-/PPWR-Seite): schlichte Tabelle (Kopfzeile `--hell`-Hintergrund, `--fs-body-small`) mit horizontalem Scroll auf schmalen Viewports (`min-width` + `overflow-x:auto`, kein Zeilenumbruch pro Zelle); Fließtext/Listen in `--grau-text`, max. 70ch. Optionale `h3`-Zwischenüberschrift (`--fs-card-title`) pro Abschnitt; Links darin in `--teal`, unterstrichen (sonst per globalem Reset unsichtbar, da `a{color:inherit}`).
- **Rechtliches** (`.legal-list`, `.download-list`, neu 2026-09-28): einfache Linklisten mit unterer Trennlinie, für Seiten-Übersicht bzw. PDF-Downloads (AGB).
- **FAQ + CTA-Band, Reihenfolge**: siteweit einheitlich Content → (Teaser) → Allgemeine FAQ → CTA-Band (CTA immer als letztes Element vor dem Footer).
- **Bauart-Row** (`.bauart-row`, neu 2026-09-28, Flightcase-Bauart-Seite, mit Jascha abgestimmt): alternierende Bild/Text-Zeile per CSS-Grid-Areas (Desktop: Bild 42% Breite abwechselnd links/rechts neben Titel/Text/Specs/Rating; Mobil gestapelt in fester Reihenfolge Titel → Bild → Text → Rating, Bild randlos ohne Radius, Textblock mit 48px Seitenrand statt der sonst 120px `--side-pad` – sonst zu wenig Platz für Text). Rating als Balken (`.bauart-rating-track`/`-fill`, Teal auf `--hell`, Beschriftung „Label X/10“ daneben). „Light“/„Ultra Light“-Suffix als eigenes Badge (`.bauart-badge`, Teal-Outline-Pille, Mono-Font, reuse aus Tag-Mustern) statt Teil des Fließnamens. Bauart-Name auf `--fs-card-title` (Token, kein Freihandwert).
- **Produkt-Detailseite, Vorlage** (Silent Rack, vollständig 2026-09-28): Hero → Breadcrumb → Story → Use-Case → Highlights (`.product-grid`) → Konfigurierbarkeit+CTA (`.typen-teaser`) → Trust-Zeile (einzeiliger `--teal`-Satz, zentriert) → eigene Produkt-FAQ → Technische Daten (`.data-table.spec-sheet` – Modifier für lange Textwerte: `white-space:normal` statt `nowrap`, schmalere Label-Spalte, bei ≤900px zusätzlich 48px statt 120px Seitenrand wie bei Bauart-Row) → Rating-Balken (Wiederverwendung `.bauart-rating-*`) → Branchen-Tags (Wiederverwendung `.bauart-badge`) → Kundenreferenz → Allgemeine FAQ → CTA-Band. Schema.org: BreadcrumbList + Product + FAQPage (3 separate `<script type="application/ld+json">`). Als Muster für die weiteren 9 Produktseiten gedacht.

## Aus anderen Seiten übernommene Elemente
- **Prozess-Kacheln** (`engineering.html`): `.step` mit Rand #e6e6e2, Radius 24px; `.step-top` Verlauf `#000 → #112f2f`, Radius 24px; Icons 72×72px.
- **Page-Head** (Unterseiten): `.page-head` 56px oben, H1 in `--headline-alt-font`.
- **Hub-/Produktkarten**: Rand #eee, Radius 16px, Hover-Schatten. `.hub-grid`/`.hub-grid-single` Default 3 Spalten, Anzahl per Inline-Style überschreibbar (Engineering: 4 Spalten seit 2026-09-28).
- **Produkt-Hero** (`produkte-silent-rack.html`): Grau-Verlauf-Hintergrund, H1 36px zentriert, freigestelltes Produktbild mit Bodenschatten. Seit 2026-09-27: kein festes `aspect-ratio` mehr (Produktbild muss auf jeder Auflösung komplett sichtbar sein, egal welches Seitenverhältnis das Foto hat) – Bild wird per `max-height` (65vh Desktop / 50vh ≤900px) + `object-fit: contain` begrenzt, Container passt sich an.
- **Bauform-Karten** (`engineering-formen.html`): 4-Spalten-Grid, Karte 150px, Bild ragt oben heraus.
