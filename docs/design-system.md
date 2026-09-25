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
- **Kontakt**: Formular einspaltig (Labels 700, Inputs Radius 8px, Fokus teal), optionale Felder per `<details>`; Info-Block `--hell`, Radius 16px.
- **Footer** (`footer.site-footer`): #000, #ccc, 13px, zentriert, einzeilig.

## Aus anderen Seiten übernommene Elemente
- **Prozess-Kacheln** (`engineering.html`): `.step` mit Rand #e6e6e2, Radius 24px; `.step-top` Verlauf `#000 → #112f2f`, Radius 24px; Icons 72×72px.
- **Page-Head** (Unterseiten): `.page-head` 56px oben, H1 in `--headline-alt-font`.
- **Hub-/Produktkarten**: Rand #eee, Radius 16px, Hover-Schatten.
- **Produkt-Hero** (`produkte-silent-rack.html`): Grau-Verlauf-Hintergrund, `aspect-ratio 2045/867`, H1 36px zentriert, freigestelltes Produktbild mit Bodenschatten.
- **Bauform-Karten** (`engineering-formen.html`): 4-Spalten-Grid, Karte 150px, Bild ragt oben heraus.
