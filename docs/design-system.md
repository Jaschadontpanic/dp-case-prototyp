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
- **Cases-Grid** (`.cases-grid`): 3 Spalten, Abstand 24px, Radius 20px, `.span-2` für breite Kachel, Hover-Zoom 1.05; CTA-Kacheln (`.cta-tile`) anthrazit.
- **Trust-Liste**: 8 Größenstufen `.t1`–`.t8` (32/26/22/19px Heading-Font, dann 14/14/13/13px, Grau abgestuft #1a1a1a → #939393).
- **Kontakt**: Formular einspaltig (Inputs Radius 14px, Fokus teal), optionale Felder per `<details>`; Info-Block `--hell`, Radius 16px. Seit 2026-09-27 (Vorbild mercedes-benz.de-Kontaktformular): Label steht als kleine, teal-farbene Zeile IM umrandeten Feld (`.field`/`.field-label`, nur Kontaktseite), Radiobuttons „Bevorzugte Kontaktart" stehen untereinander statt nebeneinander, Absenden-Button rechtsbündig. Eingabefeld-Radius 14px gilt sitewide (vorher 8px, siehe `.contact-form input/select/textarea`).
- **Footer** (`footer.site-footer`): #000, #ccc, 13px, zentriert, einzeilig.

## Case-Tile (geplant, noch nicht gebaut)
Ziel: „Unsere Empfehlungen“-Kacheln (`.cases-grid`, Startseite) sollen künftig nur noch **Bild + Text getrennt** benötigen (Titel, Story-Text, Branchen-Tag), statt wie bisher fertig bebilderte Kacheln mit eingebranntem Text zu verwenden. Optik soll dabei gleich bleiben (Verlauf, Branchen-Tag oben links, Titel/Text unten links, weiß).

**Befund (2026-09-28):** Die aktuellen Fotos `cases-backstage-kaffeebar.jpg`, `cases-luftfahrt-schablonen-flightcase.jpg`, `cases-broadcast-pult-workstation.jpg` enthalten Titel, Story-Text, Branchen-Tag und Button bereits als Pixel im Bild (Export aus dem ursprünglichen Claude-Artifact-Mockup) – sie können nicht als Hintergrund für eine neue Text-Overlay-Kachel weiterverwendet werden. Es werden neue, textfreie Fotos benötigt (siehe B5 in `docs/open-decisions.md`).

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
- **Hub-/Produktkarten**: Rand #eee, Radius 16px, Hover-Schatten.
- **Produkt-Hero** (`produkte-silent-rack.html`): Grau-Verlauf-Hintergrund, `aspect-ratio 2045/867`, H1 36px zentriert, freigestelltes Produktbild mit Bodenschatten.
- **Bauform-Karten** (`engineering-formen.html`): 4-Spalten-Grid, Karte 150px, Bild ragt oben heraus.
