# Changelog

Neueste Einträge oben. Jede Content- oder Strukturänderung hier kurz eintragen (Datum, was, warum).

## 2026-10-14 – Silent Rack: Kachelraster mit variablen Breiten (lückenlos)
- Jascha: erste Kachel doppelt breit wie auf der Startseite, variable Größen, höchstens jede zweite Kachel doppelt, Reihen immer voll (3x1 oder 2+1), Position der Doppelten wechselt von Reihe zu Reihe. Neu: `assets/js/tile-spans.js` wählt die Doppelten dynamisch (Algorithmus s. `docs/design-system.md`), im HTML für 8 Kacheln vorgesetzt.
- **Zu Jaschas Beispiel „1. und 7. Kachel doppelt“:** mit 8 Kacheln geht das rechnerisch nicht lückenlos auf (2+1 | 1+1+1 | 1+2 ließe Kachel 8 allein in der letzten Reihe, 10 Einheiten statt 9 oder 12). Lückenlose Lösungen für 8 Kacheln: nur Kachel 1 doppelt (2+3+3) oder 4 Doppelte (2+2+2+2). Umgesetzt: 4 Doppelte (Kachel 1, 4, 5, 8) im Wechsel vorn/hinten, genau jede zweite Kachel, wie vorgegeben „maximal“.
- Geprüft (Playwright 1920/1440/1100px): 4 Reihen (D1 | 1D | D1 | 1D), alle Reihen voll, kein Überlauf; mobil eine Spalte. Screenshot Desktop gesichtet. Die freigestellten Platzhalterbilder wirken in den doppelten Kacheln klein (contain), echte Fotos (cover) füllen sie.

## 2026-10-14 – Vergleichsmatrix Plattenmaterialien: Standardschrift und Skalen
- Jascha: Schriftgröße auf Standard, bei Biegesteifigkeit und Punktlast eine Skala wie bei den Produkten, „Einsatz“ als Unterschrift unter dem Material, wenn es nicht passt. Die Matrix ist jetzt eine normale Tabelle (16px Desktop / 14px Mobil) ohne Zoom-Dialog (`table-zoom.js` auf der Seite entfernt, Komponente bleibt verfügbar). Skalen = `.bauart-rating-*`-Balken mit Wert (gleiche Werte → gleich lange Balken), „auf Anfrage“ bleibt Text. „Einsatz“: ab 1200px eigene Spalte, darunter als Unterzeile unter dem Materialnamen. Alle Texte und Werte unverändert aus der bisherigen Tabelle.
- Geprüft (Playwright 1920/1440/1100/390px): Schrift 16px/14px, Balkenbreiten einheitlich, kein Seiten-Overflow (mobil scrollt die Tabelle horizontal); Screenshots 1440px und 1100px gesichtet.

## 2026-10-14 – Bauart-Kacheln: Hover-Zoom auf den Bildern
- Jascha: Bilder im Kachel-Slider vergrößern sich beim Mouseover leicht – identischer Effekt wie bei „Unsere Empfehlungen“ und den Produktkarten (`scale(1.05)`, `transition: transform .35s ease`), kein neuer Design-Wert. Bild bleibt im Kachelrahmen (`overflow: hidden`).

## 2026-10-14 – Silent-Rack-Seite umgebaut (neue Produktseiten-Vorlage)
- Jascha-Vorgabe: Highlights als Kacheln im 3er-Raster wie „Unsere Empfehlungen“ (gleiche Kachelhöhe); erste Kachel Ergänzungsbild mit den Skalen Stabilität 10/10 und Gewicht 9/10 im Text, danach die 7 Highlights; dann die Hardfacts-Tabelle, „Dein perfektes Silent Rack“, Häufige Fragen zum Silent Rack, Slider „Weitere spannende Produkte“ (3 Kacheln, Pfeile, Endlosrotation über alle Produkte der Übersicht), darunter die allgemeinen Häufigen Fragen, zuletzt das CTA-Band „Dein Case, egal wie speziell.“ nur in Inhaltsbreite.
- Umsetzung: Highlights nutzen `.cases-grid`/`.case-tile` (Ratings in `.case-tile-ratings`), Slider ist die neue Variante `.tile-slider--three` von `tile-slider.js` (Klone bekommen `tabindex=-1`), CTA-Band per `.pg-silent-rack .cta-band`. Die Rating-Spalte neben der Tabelle und deren CSS (`.specs-ratings-col`) entfallen. Texte unverändert übernommen, nur umsortiert.
- Annahmen: Branchen und Kundenreferenz (nicht in Jaschas Liste) stehen weiter direkt unter der Tabelle; der Slider enthält 9 Produkte (alle der Übersicht außer Silent Rack selbst); Kachelhöhe = Verhältnis 485:566 der unteren „Unsere Empfehlungen“-Reihe. Ergänzungsbild und Highlight-Fotos sind weiter Platzhalter (Hero-PNG); der Alt-Text „Silent Rack – Ansicht von rechts“ der ersten Kachel ist aus dem Dateinamen `…_20_ergaenzung_rechte-seite` abgeleitet, nicht aus dem Content (zu prüfen).
- Geprüft (Playwright 1920/1440/390px): kein Overflow, Slider zeigt 3 (mobil 1) Kacheln, Vor/Zurück über 12 Schritte korrekt (Produkt 12 mod 9), keine Fehler. Bauart-Slider nicht angefasst.

## 2026-10-14 – Bauart-Kacheln: Eigenschaften in einer Zeile, Slider bündig, Abstand −40 %
- Jascha: Eigenschaften der Platte-/Kante-Kacheln (Stärke, Biegesteifigkeit, Punktlast, kg/m²) nicht mehr untereinander, sondern in einer Zeile, getrennt mit „ ·“ wie bei den Kundennamen. Nur CSS (`.bauart-row-slider .tile-body ul`), Markup und Texte unverändert.
- Geprüft (Playwright): 1600 px eine Zeile; 375 px bricht zwischen den Einträgen um (nie mitten in einem Eintrag), kein horizontaler Overflow.
- Kachel-Slider bündig mit der Inhaltskante (Jascha): kein seitlicher Einzug mehr für die Pfeile, Bildkante steht auf derselben Linie wie H1/Text darüber (Desktop x=120 bei 1600 px, mobil 20px Seitenrand wie der Text). Pfeile liegen innen auf dem Bild.
- Abstand zwischen den Bauart-Zeilen auf dem Desktop 224px → 134px (−40 %, Jascha); mobil bleibt 112px.

## 2026-10-14 – Bauart-Seite: Überschriften, LIGHT im Titel, Seitenkopf, Abstände, Bilder 2/3
- Jascha-Vorgaben: H1 „Flightcase Bauart“ → „Flightcase Bauarten“; H2 „Flightcase-Bauarten“ entfällt; Zusatz Light/Ultra Light nicht mehr als Pillen-Label, sondern in der H3 mit Gedankenstrich und in Versalien („Standard Protect Flightcase – LIGHT“), Teal hervorgehoben (`.bauart-suffix`; `.bauart-badge` bleibt für die Branchen-Tags auf Silent Rack). Content (`flightcase-bauart.md`: H1, Design-Hinweis, Gruppe 1 ohne sichtbare H2) entsprechend nachgezogen.
- Grauer Seitenkopf sitzt direkt unter dem Header (`.feature-band.page-head-band { margin-top: 0 }`). Gilt für alle 18 Seiten mit diesem Seitenkopf, da es dasselbe Standardelement ist.
- Abstand zwischen den Bauart-Zeilen 56px → 224px (Jascha: zweimal ca. +100 %, nach Durchsicht nochmals verdoppelt).
- Mobil (Jascha): Textblock mit Überschrift immer über dem Bild (Reihenfolge Überschrift → Text → Specs → Skalen → Kachel-Slider), danach 112px Abstand zur nächsten Überschrift.
- Spalten umgedreht: Kachel-Slider 2/3, Textblock 1/3 (vorher Bild 42 %). Da die erste Zeile durch die entfallene H2 ein anderes Kind-Index hat, ist der Links/Rechts-Wechsel seitenbezogen gedreht – die erste Bauart beginnt weiter mit dem Bild links.
- **Bildgröße (Jascha: Variante 2):** Die Bindung „Slider-Höhe = Textblock“ (#65) entfällt auf Desktop. Jede Kachel zeigt das Bild fest im Format 4:3 (bei 1600 px ca. 730 × 550 px), Titel/Eigenschaften darunter; der Textblock steht vertikal mittig daneben. Der zwischenzeitliche Vorschlag „Eigenschaften neben dem Bild“ ist damit verworfen und nicht im Code.
- Geprüft (Playwright): 1600/1280/768/375 px, kein horizontaler Overflow, Abstand Header → grauer Kasten 0 px, Zeilenabstand 224 px (mobil 112 px), Wechsel L/R korrekt, Kachel-Wechsel per Pfeil.

## 2026-10-14 – Materialien-Content an HTML-Prototyp angeglichen (C16)
- Grundlage: HTML-Stand auf `main` als Referenz, Content hinkte hinterher. Alle sichtbaren Texte der 5 Seiten (Materialien, Plattenmaterialien-Hub, Multiplex, PP-Hohlkammer, Ultraleicht) per Skript gegen die Content-Dateien geprüft – nach der Änderung steht jeder sichtbare Text wörtlich im Content. Kein vorhandener Text umformuliert oder gekürzt.
- `plattenmaterialien/phenolharz-statt-pvc.md` **entfernt**: keine eigene Seite mehr (Jascha 2026-10-13). Text wörtlich als „Ausklappbar – Phenolharz statt PVC“ (Anker `#phenolharz-statt-pvc`) in `multiplex.md`. URL, Title, Meta, Breadcrumb der Einzelseite entfallen. Grund: Ordner = URL – eine Datei ohne Seite wäre eine zweite Quelle für denselben Text und würde auseinanderlaufen.
- `multiplex.md`: Ausklapper Phenolharz ergänzt; Galerie je Stärke mit den 8 Alt-Texten aus dem HTML (ersetzt die alte Alt-Text-Notiz; „Natur“ nur Detailbild 9 mm); Linktext im Ausklapper „Hintergrund“ an HTML angeglichen („Mehr dazu:“ statt „Links:“, Ziele benannt); Teaser „Alle Plattenmaterialien im Vergleich“ (C15); Siebdruck-Hinweis aktualisiert (nur Hub, /sonderkonstruktionen entfällt).
- `pp-hohlkammer.md`, `ultraleicht.md`: Galerie-Alt-Texte aus dem HTML (9 bzw. 3), Teaser (C15), interne Quellen-Notizen aus den sichtbaren Zeilen „Farboptionen“ herausgelöst.
- `plattenmaterialien/index.md`: Matrix mit den 12 HTML-Zeilen (Umlaute wie im HTML), H2 „Vergleichsmatrix“ und „Die Materialien im Detail“ (C15), 3 Kacheln mit Text + „Mehr erfahren →“, UI-Hinweis „Zum Vergrößern klicken“ (Freigabe offen C17), Siebfilm/Siebdruck als offener Punkt (C18), Schema BreadcrumbList.
- `materialien/index.md`: Meta Description und Kacheltext aus dem HTML ergänzt (fehlten), Schema, Hinweis auf die interne Kantenschutz-Ablage.
- `flightcase-bauart.md`: neue Tabelle „Kachel-Slider je Bauart“ (Case / Platte mit Matrix-Werten / Kante mit Material und Stärke) – bestehende Texte unverändert. Material „Aluminium“ als Content-Feld, im HTML noch nicht umgesetzt (T7).
- Docs: C16 erledigt, neu C17, C18, T7; B10 auf erledigt; `seitenstruktur.md` (Phenolharz-Zeile, Kantenschutz-Ablage, veraltete „Platzhalter“-Vermerke) und `content-checklist.md` (Multiplex, Phenolharz, Sonderkonstruktionen, Hub) nachgezogen.

## 2026-10-14 – Bauart-Slider: Höhe = Textblock (Desktop)
- Jascha: Das Bildelement soll nur so hoch sein, dass es von der Oberkante der Überschrift („Ultra Protect …“) bis zur Unterkante der Gewicht-Skala geht. Umgesetzt für >900px: Track absolut positioniert (Slider hat keine eigene Höhe, die Zeilenhöhen kommen allein vom Text), Kachel `height:100%`, Bild `flex:1` statt `aspect-ratio`, Textteil kompakter (14/18/16px Padding). Breite und Pfeile unverändert (Pfeile jetzt vertikal mittig). Mobil unverändert.
- Gemessen (Playwright): Top-/Bottom-Differenz zu Überschrift/Skala 0px bei allen 10 Slider-Zeilen bei 1920/1440/1100px; kein horizontaler Overflow; Screenshots der Kachel Case und Platte gesichtet.

## 2026-10-14 – Bauart-Slider ohne angeschnittene Nachbarkacheln
- Jascha: Elemente links/rechts nicht mehr angeschnitten sichtbar; Gesamtbreite und Kachelbreite bleiben gleich, Pfeile weiter neben der Kachel. Nur CSS: der Track des Standard-Sliders (`.tile-slider` ohne `--wide`) ist um (`--tile-peek` + Gap) eingerückt und schneidet an der Kachelkante ab; Pfeile in den Rändern. Endlosschleife unverändert. Silent-Rack-Highlights (`--wide`) bewusst nicht geändert.
- Geprüft (Playwright 1440/390px): immer genau eine Kachel sichtbar, Vor/Zurück über mehrere Runden stimmt, Screenshots Desktop und Mobil gesichtet.

## 2026-10-14 – C15 freigegeben
- Jascha gibt die Wegweiser-Texte der Plattenmaterialien-Seiten frei (Hub-Überschriften „Vergleichsmatrix“/„Die Materialien im Detail“, Teaser „Alle Plattenmaterialien im Vergleich“). `docs/open-decisions.md` C15 auf erledigt, mit Korrektur zu den „Hintergrund“-Ausklappern (stehen im Content).

## 2026-10-14 – Silent Rack: H1 zweizeilig (C14 erledigt)
- Jascha-Entscheidung Option C. H1 `Silent 19" Rack – Vollständig gekühlt, völlig geräuschlos` (wörtlich aus `content/19-zoll-racks/silent-rack.md`), gesetzt als zwei Zeilen: „Silent 19" Rack“ groß, „Vollständig gekühlt, völlig geräuschlos“ kleiner darunter. Die Tagline in der Hero-Leiste entfällt, die Leiste enthält nur noch die Buttons (zentriert). Title, Meta und Schema.org unverändert (enthielten die Content-Fassung bereits). Zweite Zeile in Anthrazit statt Grau, weil der Hero-Verlauf oben dunkel ist. Per Playwright/Screenshot 1920/390px geprüft, `h1.textContent` entspricht exakt dem Content.

## 2026-10-14 – Standards & Werte: Bilder Nachhaltigkeit und Soziale Verantwortung eingebunden
- 2 Bilder von Jascha als WebP unter `assets/images/standards-werte/` abgelegt: `nachhaltigkeit.webp` (Glaskugel mit Weltkarte auf Moos) → Abschnitt „Nachhaltigkeit“, `soziale-verantwortung.webp` (Silhouetten beim Ballspiel, eine Person im Rollstuhl) → Abschnitt „Soziale Verantwortung“.
- Eingebunden auf `/standards-werte/` (Jascha-Entscheidung: abwechselnd links/rechts wie die Bauart-Zeilen): Nachhaltigkeit Bild links, Soziale Verantwortung Bild rechts; ≤900px gestapelt, Bild oben. Neuer Modifier `.text-section--img` / `--img-right` in `components.css` (Bildspalte 300px = Originalgröße, Abstand 56px und Radius 20px wie `.bauart-row`, keine neuen Design-Werte). Texte unverändert.
- Alt-Texte aus dem Bildinhalt abgeleitet (nicht im Content) – bitte im SEO-Alt-Text-Check (C5) prüfen.
- Geprüft (Playwright): 1600/768/375 px, Bilder in Originalgröße (nicht hochskaliert), kein horizontaler Overflow.
- Beide Dateien liegen nur in 300 × 200 px vor (Größe der gelieferten Datei, nicht hochskaliert) – für eine größere Darstellung höher aufgelöste Originale nötig.
- Herkunft/Bildrechte beider Bilder vor Livegang klären.

## 2026-10-14 – Teaser „Dein perfektes Silent Rack“ auf Inhaltsbreite
- Jascha: Bereich zu breit, passt nicht zum Rest. Ursache: `.typen-teaser` hatte `margin-left/right:auto` (überschrieb den Seitenrand `--side-pad`) und `max-width:1504px`; unter 1744px Viewportbreite lief der graue Kasten dadurch randlos über die ganze Breite (1440px: 0–1440 statt 120–1320, Mobil 0–390 statt 20–370). Jetzt `width:calc(100% - 2*var(--side-pad))` + `margin:50px auto` – bündig mit Überschriften, Tabellen und Texten. Gilt auch für die übrigen Seiten mit `.typen-teaser` (Bauart, Formen, 3 Plattenmaterial-Seiten). Bei 1920px unverändert (208–1712).

## 2026-10-14 – Kachel-Slider endlos, Überlappung halbiert
- Jascha: Slider soll in beide Richtungen weitere Inhalte zeigen (vor der ersten Kachel die letzte links davon), Überlappung auf die Hälfte reduzieren. `assets/js/tile-slider.js`: Kacheln werden davor/dahinter geklont (3 Sätze), Start im mittleren Satz, unsichtbarer Rücksprung um einen Satz nach dem Scrollen; Pfeile immer sichtbar. `--tile-peek` (Desktop 52px, Mobil 24px, vorher sichtbarer Anschnitt ca. 105px) steuert den Anschnitt links und rechts, Kachelbreite = Slider − 2×(Peek+Gap). Gilt für Bauart (3 Kacheln) und Silent-Rack-Highlights (`--wide`, jetzt randlos über die Bildschirmbreite).
- Geprüft (Playwright 1440/390px, beide Seiten): Start zeigt letzte Kachel links; zurück/vor über mehrere Runden läuft ohne Sprung, logische Kachel stimmt (z. B. nach −1 und +9 = Kachel 2 bei 7 Kacheln), keine JS-Fehler; kein horizontaler Overflow bei 1920/1440/1100/390px.

## 2026-10-14 – Schriftgrößen Desktop ca. 15 % größer (Option A)
- Jascha: Vergleich mit mercedes-benz.de bei 1920px – Schrift wirkte deutlich kleiner. Tokens in `tokens.css` nur für Desktop erhöht (H1 52→56, H2 36→40, Body 18→20, Body-small/Small 14→16, Nav 16→17, Karten-Titel 20→22px), Mobil ≤900px zurückgesetzt auf die alten Werte. 13px-Lesetexte (Team-Rolle, Produktkarten-Text, Begriffsliste, Kontaktformular-Labels) folgen auf Desktop `--fs-body-small`. Kundenliste auf Wunsch ausgenommen (feste Werte). H1 in Hero/Hub-Header `max-width:max(40%,10em)` gegen Wortbruch.
- Nebenbei: Mobil-Overflow auf `/rechtliches/datenschutz/` behoben (Seitenkopf-Band: `min-width:0`, `overflow-wrap:anywhere`; war schon vorher vorhanden, 423px bei 390px).
- Geprüft (Playwright, alle 25 Seiten): kein horizontaler Overflow bei 1920/1440/390px, Kundenliste Zeilengrößen identisch zu vorher. **Hinweis:** In meiner Testumgebung lädt Open Sans (Google Fonts) nicht, Messungen liefen mit Fallback-Schrift – bitte Umbrüche in der Vorschau mit echter Open Sans prüfen.

## 2026-10-14 – Silent Rack: Highlights als Kachel-Slider
- Jascha: Slider-Lösung auch bei Silent Rack (Entscheidung Mobil-Accordion vs. Slider → Slider, Desktop wie Mobil). Die 7 Highlight-Kacheln (`.product-grid`/`.product-card`) sind jetzt `.tile-slider.tile-slider--wide` mit `assets/js/tile-slider.js`; Texte unverändert übernommen, Bild-Platzhalter (Hero-Foto, B6) bleiben bis zur Lieferung der Highlight-Fotos. Per Playwright 1440/390px geprüft, keine Fehler, kein Overflow.
- **Offen:** Layout „Vollständig gekühlt“ (Tagline-Leiste unter dem Hero, Heading/Text-Positionierung) – Vorstellung von Jascha nötig, noch nicht angefasst.

## 2026-10-14 – Kundenliste: Umsortierung ohne Grenze
- Jascha-Vorgabe: Namen dürfen beliebig weit umsortiert werden, Hauptsache es sieht gut aus (Mobil war nicht schön). `packRows` in `assets/js/trust-justify.js` füllt jetzt den Restplatz jeder Zeile mit dem breitesten noch passenden Namen aus der ganzen Restliste auf; die alte 2-Positionen-Grenze (`MAX_POSITION_SHIFT`) und der separate Umsortier-Schritt sind entfernt. Weglassen vom Listenende (letzte Zeile < 75 %, Handy-Höhe) unverändert.
- Gemessen (Playwright, Zeilenfüllung = Summe Namensbreiten / Zeilenbreite): Mobil 390px Zeilen vorher 48–97 %, jetzt 91–100 %; 360px vorher 68–100 %, jetzt 84–100 %; Desktop 1440px vorher 83–99 %, jetzt 97–100 %. Mobil-Screenshot 390px gesichtet.

## 2026-10-14 – Cases-Grid: Abdunklung pro Kachel steuerbar
- Jascha-Empfehlung angenommen: fester CSS-Verlauf pro Kachel statt JS-Helligkeitsmessung (Canvas-Pixelzugriff scheitert bei lokalem `file://`-Öffnen). `.case-tile::after` nutzt jetzt `--tile-solid` (bis wohin durchgehend schwarz, Standard 25 %) und `--tile-fade` (ab wo transparent, Standard 55 %). Pro Kachel auf der Startseite per Inline-Variable gesetzt, nach gemessener Helligkeit des unteren Bilddrittels (Luftfahrt 20/48 % = dunkel, Backstage 28/58 %, Broadcast 32/62 % = hellere Mitte). Bei Foto-Tausch Werte pro Kachel nachziehen.

## 2026-10-14 – Header: linker Verlauf dunkler, Bildposition per Variable
- Jascha-Feedback: alle Header links etwas dunkler, wo die Schrift steht. Linker Verlauf von `.hero` (Startseite) und `.hub-header` (Engineering, Manufaktur, Produkte, Maße) identisch verlängert: 95 % → 70 % bei 15 % → 45 % bei 30 % → 0 bei 55 % Breite (vorher 95 % → 55 % bei 8 % → 0 bei 30 %). Unterer Verlauf unverändert.
- `.hub-header img` bekommt `object-position: var(--header-img-pos, 50% 50%)` – Bildausschnitt pro Seite per CSS-Variable steuerbar (Jascha: CSS pro Seite statt JS). Aktuell überall Standard (Mitte), da die Bilder auf Desktop nicht beschnitten werden (aspect-ratio = Bildformat); Wert erst bei Bedarf pro Seite setzen.

## 2026-10-14 – Produktübersicht: Branchen-Feld raus, einheitliche Kartenhöhe
- Jascha-Feedback: Branchen-Feld (`.product-card-tag`, z. B. „19-Zoll-Racks“) entfernt (10 Karten, CSS-Regel gelöscht – Zuordnung bleibt im Content, nur nicht angezeigt); CTA-Button „Mehr erfahren →“ unverändert. `.product-grid` mit `grid-auto-rows:1fr`, damit alle Karten über alle Reihen gleich hoch sind (gemessen: alle 10 Karten 435px Desktop / 409px Mobil). `.product-grid` wird auch bei den Silent-Rack-Highlights genutzt, dort greift die einheitliche Höhe ebenfalls.

## 2026-10-14 – CTA-Band: Buttons neben der Headline
- Jascha-Feedback: Buttons neben der Headline statt darunter, viel kleiner. Rein CSS (`@media (min-width:901px)`, Grid 1fr/auto), kein HTML geändert; Mobil bleibt gestapelt. Per Playwright 1440/1000/390px geprüft, kein Overflow.

## 2026-10-13 – Bauart: Kachel-Slider statt Bild-Slider
- Jascha-Vorgabe: Slider für Case/Platte/Kante als Kacheln (Vorbild Mercedes-Kachel: Bild + Titel + Text), nächste Kachel immer angeschnitten sichtbar, dezente Pfeile links/rechts, Desktop wie Mobil als Slider.
- `.bauart-slider`/`bauart-slider.js` entfernt, neu `.tile-slider` + `assets/js/tile-slider.js`. 10 Bauart-Zeilen auf `/engineering/flightcase-bauart/` umgestellt.
- Kachel-Texte: Case = Bauart-Name; Platte = Name + Stärke, Biegesteifigkeit, Punktlast, kg/m² aus der Matrix (HDF: kg/m² „–“ ausgelassen); Kante = Bezeichnung + Stärke (3. Maß der Bezeichnung). Keine neuen Texte erfunden. **Offen:** Jascha nannte als Beispiel „Aluminium 2 mm Stärke“ – „Aluminium“ steht für die Kantenschutz-Profile nirgends im Repo, daher nicht ergänzt (Freigabe/Text nötig).
- Per Playwright (Desktop 1440px, Mobil 390px) geprüft: kein horizontaler Overflow, Pfeil blättert, keine Fehler.

## 2026-10-13 – Logo Mobil ca. 20 % kleiner
- Jascha-Feedback: Logo mobil ca. 20 % kleiner; Startseite und Unterseiten gleich groß. `--logo-h-top-mobile` 45px → 36px (≤900px, Scroll-Position 0). Desktop (60px) und gescrolltes Logo (29px/22px) unverändert. `docs/design-system.md` angepasst.

## 2026-10-13 – Überschriften nach Ebene vereinheitlicht
- Jascha-Freigabe: H1/H2 Open Sans, H3/Karten-Titel Clear Sans Bold. Vorher erbten H1/H2 ohne eigene Komponentenregel Clear Sans Bold (Inkonsistenz). Fix: eine globale Regel `h1, h2 { font-family: var(--headline-alt-font) }` in `base.css`; Größen/Gewichte unverändert. Per Playwright auf allen 25 Seiten geprüft: alle H1/H2 Open Sans, kein H3 Open Sans.
## 2026-10-13 (Bauart-Fotos) – Case-Fotos abgelegt und eingebunden, fehlende als Dummy
- 11 Fotos von Jascha als WebP (längste Kante max. 1600 px) unter `assets/images/engineering/bauart/` abgelegt. **Namensschema:** Hauptbild = Bauart-Name aus dem Content (Kleinbuchstaben, Bindestriche), weitere Fotos derselben Bauart = Name + `-2`, `-3` … (weitere Ansichten, keine Detailbilder – daher nicht `-detail-N`).
- Zuordnung (Jaschas Dateiname → Repo): Bauart Ultra Protect Flightcase - Ultralight → `ultra-protect-flightcase-ultra-light` · Ultralight Gewichtstest → `ultra-protect-flightcase-ultra-light-2` · Ultraprotect Flightcase - Light → `ultra-protect-flightcase-light` · Plus Protect Flightcase → `plus-protect-flightcase` · Standard Protect Flightcase - Light (rot) → `standard-protect-flightcase-light` · N-Case.png → `n-case` · N-Case Alternative → `n-case-2` · Easy-Case-Light → `easy-case-light` · Spezial Cases - ALL BLACK → `custom-cases` · Transportkiste Heavy Duty → `transportkisten-heavy-duty` · Hartschalenkoffer → `hartschalen-koffer`.
- Nicht abgelegt (Zuordnung offen, siehe B1): „Standard Protect Alternative“ (schwarz, Werkbank) und „Woodrack“ (kein Eintrag im Bauart-Content).
- **Eingebunden** (Jascha: „die letzten Fotos erstmal mit Dummys füllen, kommt noch“): Slide 1 „Case“ im Bauart-Slider zeigt jetzt das Foto bei Standard Protect Light, Plus Protect, Ultra Protect Light, Ultra Protect Ultra Light, N-Case, Easy-Case Light; Custom Cases (ohne Slider) zeigt `custom-cases`. Darstellung wie Slide „Platte“/„Kante“ (`.bauart-slide.is-image`, keine neue CSS-Regel).
- **Dummy** (bestehender „Bild folgt“-Platzhalter, im HTML mit Ziel-Dateinamen kommentiert): Standard Protect Flightcase, Plus Protect Flightcase – Light, Ultra Protect Flightcase, Easy-Case. Foto später nur unter dem kommentierten Namen ablegen und Slide tauschen.
- **Zugeschnitten** (4:3 auf das Case, aus den Originalen): `plus-protect-flightcase`, `ultra-protect-flightcase-light`, `custom-cases`, `transportkisten-heavy-duty` – im unbeschnittenen Hochformat zeigte der 4:3-Bildrahmen nur Decke/Kabinenwand.
- Alt-Texte aus Bauart-Name und Plattenmaterial abgeleitet (nicht im Content) – bitte im SEO-Alt-Text-Check (C5) prüfen.
- Weitere Leistungen (Transportkisten, Hartschalen Koffer, Einbauten, Lautsprecher, Sonderkonstruktionen): Kacheln haben keinen Bild-Slot – Bilder `transportkisten-heavy-duty`/`hartschalen-koffer` liegen bereit, Einbindung braucht Layout-Freigabe.
- Weitere Hinweise: `easy-case-light` nur 600 px (Original so klein). `n-case-2` und `ultra-protect-flightcase-ultra-light-2` nur abgelegt (Darstellung mehrerer Fotos pro Bauart offen). `ultra-protect-flightcase-ultra-light-2` zeigt eine erkennbare Person – Einwilligung vor Livegang prüfen. Nachgeliefert: bearbeitete Fassung des Gewichtstest-Fotos (dunkel, Original 1023 × 1537 px) ersetzt die erste Fassung unter demselben Namen.
- Geprüft (Playwright): 1600/768/375 px, alle Bilder laden, kein horizontaler Overflow, Klick-Wechsel Case → Platte funktioniert.

## 2026-10-13 (Abschluss Chat) – Übergabe
- Stand: alle Änderungen dieses Chats sind auf `main` (Team-Fotos Jascha/Oleg, Bauart-Slider mit Platte/Kante, Plattenmaterialien Hub + 3 Seiten mit Klick-Zoom-Matrix und Galerien, Kantenschutz-Ablage, Feature-Band, Kontakt-Bereinigung). Offene Punkte: `docs/open-decisions.md` (B1, B8, B9, B10, C5, C15, C16 u. a.).

## 2026-10-13 (5. Korrektur) – Desktop-Nav-Panel: Pille kleiner, Ausrichtung am ersten Navigationspunkt
- Jascha-Feedback mit direktem Seite-an-Seite-Vergleichsscreenshot (unser Panel vs. mercedes.de, identischer 1920px-Viewport) – zwei konkrete Unterschiede benannt:
  1. „Die Kreise um die Seiten in der Navigationsleiste bitte an die Größe von Mercedes anpassen" – unsere Pillen-Umrandung um „Engineering"/„Manufaktur" im geöffneten Zustand war deutlich größer/ausladender als bei mercedes.de.
  2. „Weiter ist das Menü linksbündig, es sollte linksbündig mit der Umrandung des ersten Navigationspunktes sein" – das Panel saß linksbündig am Viewport-/Header-Rand statt am ersten Nav-Link „Produkte" (bei mercedes.de beginnt der weiße Kasten exakt unter „Modelle", dem ersten Punkt, unabhängig davon, dass „Kaufen" angeklickt wurde).
- **Pille:** `padding`/`margin` der aktiven Trigger-Umrandung von `8px 18px` auf `5px 14px` reduziert – enger, näher an der mercedes.de-Proportion.
- **Ausrichtung:** `.nav-dropdown` lief vorher auf `position:fixed;top:96px;left:0` – zwei eigenständige Probleme gefunden: `top:96px` war hart auf die Höhe des *ungescrollten* Headers gemünzt und stimmte im gescrollten Zustand nicht mehr; `left:0` positionierte am Viewport-Rand, nicht am ersten Nav-Link. Fix: `position:absolute;top:100%;left:var(--side-pad)` relativ zu `.nav-inner` (bereits `position:relative`) – `top:100%` sitzt dadurch in jedem Scroll-Zustand automatisch exakt unter der Nav-Zeile, `left:var(--side-pad)` trifft die linke Kante von „Produkte" unabhängig davon, welcher der beiden Nav-Punkte geöffnet wurde (per Playwright-Bounding-Box verifiziert: Panel und „Produkte" exakt bei x=208 auf 1920px, sowohl ungescrollt als auch gescrollt).
- `.nav-item { position: relative }` dadurch überflüssig und entfernt (nur noch für diese Positionierung eingeführt worden).
- Geprüft (Playwright): 1920px (ungescrollt + gescrollt) und 1400px – Panel exakt an „Produkte" ausgerichtet, startet in beiden Scroll-Zuständen direkt unter dem Header, Pille sichtbar kompakter. Mobil-Panel (375px) unverändert, nicht betroffen (eigene CSS-Klassen).
- `docs/design-system.md` entsprechend aktualisiert.

## 2026-10-13 (4. Korrektur) – Seitenköpfe ohne Header-Bild: grauer Kasten statt nacktem Titel
- Jascha-Feedback: „Alle Seiten, die noch kein Header haben, bitte die Überschrift und Unterschrift in einen grauen Kasten, so wie wir es schon zusammen als Standardelement angelegt haben." Auf Nachfrage bestätigt: Aufbau 1:1 wie das bestehende Feature-Band, zunächst als Platzhalter bis ein echtes Header-Bild kommt; Umfang = die 18 vorgeschlagenen Seiten ohne Hub-Header.
- **Umgesetzt:** `<div class="page-head">`/`.page-intro` als Seitenkopf ersetzt durch `.feature-band.feature-band--no-image.page-head-band` (H1 + optionale Unterzeile(n) in `.feature-band-text`) auf allen 18 Seiten: Flightcase Bauart, Flightcase Bauformen, Kantenschutz, Materialien (Übersicht + Multiplex + PP-Hohlkammer + UltraFlite), Fertigung, Über uns, Rechtliches (Übersicht + Impressum + Datenschutz), Standards & Werte (+ PPWR-Stellungnahme), Wissen (Übersicht + Höheneinheiten + TSA-Schloss).
- `components.css`: `.feature-band-text h1` bekommt denselben Stil wie `.feature-band-text h2` (bisher nur H2 vorgesehen), plus `overflow-wrap:break-word` als Sicherheitsnetz für lange Titel (z. B. „HE, U und RU – Höheneinheiten im Rack"). Die jetzt überall ungenutzten `.page-head`/`.page-head h1`-Regeln entfernt. `.page-intro` bleibt (Materialseiten nutzen sie weiterhin als Absatzstil mitten im Content).
- Geprüft (Playwright, 1600px + 375px, 6 Stichproben-Seiten inkl. Mehrabsatz-Seite „Über uns" und reinem Titel-ohne-Unterzeile-Fall „Rechtliches"): grauer Kasten korrekt, Inhalt darunter (Hub-Grid, FAQ, Datentabelle, Text-Sections) unverändert, kein horizontaler Overflow auf Mobil.
- `docs/design-system.md` entsprechend ergänzt (Feature-Band-Zweitverwendung + Page-Head als obsolet markiert).

## 2026-10-13 (3. Korrektur) – Nav-Panel: Höhe passt sich an Inhalt an, Hintergrund heller
- Jascha-Feedback mit direktem Seite-an-Seite-Vergleich (Screenshot: unser Panel vs. mercedes.de, identischer 1920px-Viewport) – zwei konkrete Unterschiede benannt und behoben:
- **Panel-Höhe:** lief vorher fest über `calc(100vh - 96px)`, dadurch viel leerer weißer Platz unter der letzten Zeile bis zum Seitenende. Bei mercedes.de endet das Panel direkt nach dem letzten Eintrag. Fix: `height:auto` mit `max-height:calc(100vh - 96px)` (Sicherheitsnetz bei sehr langen Listen, dann eigener Scroll statt Überlauf) – Panel passt sich jetzt der Listenlänge an, Schatten jetzt rundum (`box-shadow` rechts+unten) statt vorher nur rechts.
- **Hintergrund-Abdunkelung:** war mit `rgba(0,0,0,0.45)` deutlich dunkler als bei mercedes.de (Seite dahinter blieb dort gut lesbar, bei uns wirkte es sehr schwer) – auf `rgba(0,0,0,0.18)` aufgehellt.
- Geprüft (Playwright, 1920px): Panel-Höhe passt sich jetzt der Listenlänge an (gemessen: 483px statt vorher 984px bei identischem Inhalt), Hintergrund sichtbar heller/Seite besser lesbar. Mobil-Panel (375px) unverändert, nicht betroffen (eigene CSS-Klassen).

## 2026-10-13 (2. Korrektur) – Desktop-Dropdown zu großem, linksbündigem Panel (Vorbild Mercedes)
- Jascha-Feedback mit Mercedes-Screenshot: „Ich will das Menü vom Stil her in den größeren (Desktop & Pad) Auflösungen so haben: linksbündig, mit Umrandung des Navigationspunkts, und die Schrift mit den hier zu sehenden Größen und Abstufungen. Nur dass nach Klick auf einen Punkt auch die Unterpunkte angezeigt werden, sofern vorhanden."
- **Vorher** (letzter Stand): kleine, 220px breite Dropdown-Box direkt unter dem Nav-Link.
- **Jetzt:** großes, linksbündiges Panel über die volle Höhe (`position:fixed;left:0`, Breite 420px), startet unterhalb des Headers statt ihn zu verdecken. Eigener Schließen-Button (×) oben rechts im Panel, große Überschrift mit dem Nav-Label, Liste im Stil/Größe des Mobil-Panels (gleiche Einträge: „Unser Engineering"/„Unsere Manufaktur" fett oben, dann die Unterseiten). Trigger-Button bekommt im geöffneten Zustand eine Pillen-Umrandung (wie der Header-CTA) und bleibt dabei sichtbar.
- Abgedunkelter Hintergrund über den Rest der Seite (reine CSS-Lösung über eine `body`-Klasse, kein zusätzliches Markup auf den 25 Seiten nötig) – schließt das Panel bei Klick darauf.
- **Dabei gefunden und behoben:** Erster Versuch positionierte das Panel ab `top:0`, dadurch lag es (trotz niedrigerem z-index als der Header) INNERHALB von dessen eigenem Stacking-Context über den eigenen Nav-Buttons und verdeckte „Produkte"/„Engineering" im Header selbst. Fix: Panel beginnt erst bei `top:96px` (Header-Höhe ungescrollt).
- Produkte/Kontakt bleiben wie bereits bestätigt normale Direkt-Links.
- Geprüft (Playwright): 1920px und 1400px (Panel + Pillen-Umrandung sichtbar, Header bleibt bedienbar), Klick auf ×-Button schließt, Klick auf abgedunkelten Hintergrund schließt, Klick auf Unterseiten-Link navigiert korrekt, Mobil-Panel (375px) unverändert funktionsfähig.
- `docs/design-system.md` entsprechend verfeinert.

## 2026-10-13 (Korrektur) – Desktop: Link-Reihe bleibt, Dropdown statt Burger+Panel
- Jascha-Korrektur zum letzten Eintrag: „Ich will aber auch nicht auf jeder Größe ein Burger-Menü, sondern nur auf den kleinen Größen. Auf den größeren Auflösungen will ich, dass die Navigation bleibt und sich das Menü öffnet, wenn man auf einen der Navigations-Links klickt."
- **Zurückgebaut:** `.nav-links` ist wieder am ursprünglichen 1380px-Breakpoint gekoppelt (Burger nur darunter), nicht mehr sitewide ausgeblendet.
- **Neu:** Engineering/Manufaktur in der Desktop-Link-Reihe sind jetzt `<button>` statt `<a>` und öffnen per Klick ein Dropdown-Panel darunter (`.nav-dropdown`, weiß, Radius 14px, Schatten) mit denselben Einträgen wie im Mobil-Panel – „Unser Engineering"/„Unsere Manufaktur" fett oben, dann die echten Unterseiten. Schließt bei Klick außerhalb oder beim Öffnen des jeweils anderen Dropdowns.
- Produkte/Kontakt bleiben wie zuvor bestätigt normale Direkt-Links, in beiden Varianten.
- JS verallgemeinert (`dpSetupExpandable` in `assets/js/main.js`), bedient jetzt sowohl die Mobil-Panel-Buttons als auch die neuen Desktop-Dropdown-Buttons mit derselben Logik.
- Geprüft (Playwright): Breakpoint-Grenze exakt bei 1380/1381px (Burger vs. Link-Reihe), Dropdown öffnet/schließt korrekt, schließt bei Außenklick, nur ein Dropdown gleichzeitig offen, Klick auf Unterseiten-Link navigiert richtig, Mobil-Panel-Verhalten unverändert.
- `docs/design-system.md` entsprechend korrigiert.

## 2026-10-13 (ganz allerletzt) – Echtes Navigationsmenü mit ausklappbaren Unterseiten
- Jascha-Feedback: "Wir brauchen ein richtiges Navigationsmenü" – bisher gab es auf breiten Bildschirmen (≥1380px) nur eine reine Link-Reihe ohne jede Interaktion, und nirgendwo im Menü waren die Unterseiten von Engineering/Manufaktur sichtbar, obwohl diese Seiten längst existieren (Bauart, Bauformen, Maße, Materialien bzw. Fertigung, Über uns, Standards & Werte).
- **Burger+Panel jetzt sitewide:** Die reine Link-Reihe (`.nav-links`) ist komplett ausgeblendet, der Burger-Button + das Vollbild-Menü sind jetzt auf JEDER Breite die einzige Navigation (vorher nur <1380px). Logo-Größe und Header-CTA-Sichtbarkeit bleiben bewusst unverändert am bestehenden 1380px-Breakpoint (eigenständiges Thema).
- **Ausklappbare Unterpunkte:** Engineering und Manufaktur sind im Menü jetzt `<button>` statt `<a>` – Klick klappt eine Unterseiten-Liste auf (Chevron rotiert), statt direkt zu navigieren. Erster Eintrag verlinkt auf die jeweilige Übersichtsseite selbst, umbenannt: „Engineering" → „Unser Engineering", „Manufaktur" → „Unsere Manufaktur". Danach folgen die echten Unterseiten. Produkte/Kontakt bleiben normale Direkt-Links (Produkte hat bereits eine eigene, reichhaltigere Hub-Seite mit 10 Karten – zusätzlich alle 10 im Menü aufzulisten wäre unübersichtlich; Kontakt hat keine Unterseiten) – **bitte prüfen, ob Produkte doch eine Unterseiten-Liste im Menü bekommen soll.**
- Unterseiten sind zwei Schriftgrößen kleiner (19px → `--fs-body-small`/14px, vorhandener Token), bleiben aber linksbündig ohne zusätzlichen Einzug (Jascha-Vorgabe wörtlich umgesetzt).
- Technisch: `.mobile-menu-expand`/`.mobile-menu-submenu` in `assets/css/base.css`, Toggle-Logik in `assets/js/main.js` (reiner `hidden`-Attribut-Wechsel + `aria-expanded`, kein Framework). Markup-Änderung auf allen 25 Seiten mit Hauptnavigation identisch übernommen (jede Seite trägt ihre eigene Kopie des Nav-Blocks, kein Templating vorhanden).
- Geprüft (Playwright): Klick-Funktionalität auf Desktop (1920px) und Mobil (375px) – Burger öffnet Menü, Expand-Klick öffnet/schließt Unterseiten-Liste korrekt, Klick auf Unterseiten-Link navigiert richtig (relative Pfade auf allen Seitentiefen, auch der tiefsten unter `/engineering/materialien/plattenmaterialien/multiplex/`), Produkte/Kontakt navigieren weiterhin direkt, Schließen-Button funktioniert.
- Regel in `docs/design-system.md` dokumentiert.

## 2026-10-13 (ganz zuletzt) – Kontaktseite: Team-Grid und FAQ auf die Formular-Breite gebracht
- Jascha-Feedback: Elemente unter dem Kontaktformular auf die passende Breite bringen, Rest der Seite auf weitere Breitenfehler prüfen.
- Befund (per Playwright nachgemessen, 1920px Viewport): `.visit-grid`, `.contact-grid` und `.intro-headline` sind bereits bewusst auf `max-width:960px; margin:0 auto` begrenzt (eigene, schmalere Spalte, Vorbild Mercedes-Kontaktformular). `.team-grid`, die Notiz „Fragen zur Buchhaltung …" (`.team-grid-note`) und die Allgemeine-FAQ-Sektion darunter hatten diese Begrenzung nicht und liefen über die volle `.contact-page`-Breite (bis 1744px) – deutlich breiter als das Formular darüber, sichtbar versetzter linker Rand.
- Fix: `max-width:960px; margin:0 auto` auch auf `.contact-page .team-grid`, `.contact-page .team-grid-note` und `.pg-kontakt .faq` ergänzt. Keine neuen Design-Werte – überall derselbe 960px-Wert, der auf dieser Seite schon für Formular/Besuchs-Block/Überschrift gilt.
- Rest der Seite geprüft: Header, Footer unverändert (sitewide, nicht Kontakt-spezifisch). Keine weiteren Breitenabweichungen gefunden.
- Geprüft: Desktop (1920px, Playwright-Breitenmessung aller Elemente), Tablet (768px), Mobile (375px) – auf schmalen Viewports ohnehin kein Unterschied sichtbar, da 960px dort nicht greift.

## 2026-10-13 (ganz zuletzt) – Unterschrift im Header: Breite wie auf der Startseite, überall
- Jascha-Feedback: Die Breite von Überschrift UND Unterschrift in den Headern soll sitewide so sein wie auf der Startseite (Hero) – war auf anderen Seiten nicht so.
- H1-Breite (`max-width:40%`) war bereits Teil dieses PRs. Neu ergänzt: `.page-intro` (die "Unterschrift" auf allen `.page-head`-Seiten, z. B. Wissen, Standards & Werte, Fertigung, Materialseiten) bekommt jetzt `max-width:640px` – derselbe Wert wie `.hero`/`.hub-header p.desc`, damit die Unterschrift auf jedem Header-Typ gleich schmal wirkt.
- Dabei `margin:0` statt vorher `margin:0 auto` gesetzt: Die Box war bisher nur über `max-width:var(--max-width)` (1744px) begrenzt, bei allen echten Bildschirmbreiten also praktisch nie schmaler als der Viewport – `margin:auto` hatte daher keine sichtbare Wirkung. Mit der neuen 640px-Grenze hätte `margin:auto` die Unterschrift zentriert statt linksbündig unter der H1 zu halten; `margin:0` + das vorhandene `padding-left` hält sie am selben linken Rand wie die Überschrift.
- `.page-intro` wird auf einigen Materialseiten auch mehrfach als allgemeiner Absatzstil mitten im Seiteninhalt wiederverwendet (nicht nur direkt unter der H1) – betrifft dieselbe Änderung gleich mit, optisch unauffällig (alle Vorkommen sind kurze Sätze).
- Geprüft: Desktop (1600px) und Mobile (375px) auf Wissen, Birken-Multiplex, Fertigung, Standards & Werte (ohne `.page-intro`, unverändert) – Unterschrift bleibt linksbündig unter der H1, Mobil unverändert (640px greift dort ohnehin nicht, da der Viewport schmaler ist).
- Regel in `docs/design-system.md` zusammengefasst dokumentiert.

## 2026-10-13 (noch später) – Case-Turm-Foto eingebaut (Produkte-Header, Startseiten-Kachel, Maße-Seite)
- Jascha hat das finale "Case-Turm"-Foto geliefert (`Case-Turm_TBF_Schwarzer_Hintergrund.jpg` lt. Content, hier als `assets/images/global/case-turm.jpg` abgelegt – ein Bild, drei Verwendungen, daher `global/` statt seitenspezifischem Ordner).
- Ersetzt an allen 3 in `content/produkte/index.md` und `content/engineering/masse.md` genannten Stellen: Produkte-Hub-Header (vorher Platzhalter `hero-case-foto.jpg`), Startseiten-Kachel „Weitere Produkte entdecken" (vorher ebenfalls `hero-case-foto.jpg` als Übergangslösung), und neu: `/engineering/masse` bekommt jetzt denselben `.hub-header`-Aufbau (Bild + H1 + Intro-Satz als `p.desc`) wie Engineering/Manufaktur/Produkte, vorher nur schlichter Text-`.page-head` ohne Bild.
- **Nebenbei gefunden und behoben:** Das neue Foto ist deutlich heller/mittiger als die bisherigen dunklen Werkstatt-Fotos (Engineering/Manufaktur) – der vorhandene Verlauf allein reichte auf Mobil streckenweise nicht für guten Kontrast. `.hub-header h1`/`p.desc` bekommen zusätzlich einen dezenten `text-shadow`, als generelle Absicherung für jedes künftige Header-Foto (nicht nur dieses).
- Alt-Texte ergänzt (vorher leer/Platzhalter): „Gestapelte Flightcases unterschiedlicher Größe vor dunklem Hintergrund".
- Geprüft: Desktop (1600px) und Mobile (375px) auf Startseite, Produkte, Flightcase Maße.

## 2026-10-13 (Kantenschutz-Bilder) – Ablageseite befüllt, Bauart-Slider Slide „Kante“
- 5 Kantenschutz-Bilder von Jascha als WebP unter `assets/images/engineering/kantenschutz/` abgelegt. Abgleich Jaschas Dateinamen ↔ Content-Bezeichnungen (Bauart-Specs): `Kantenschutz_22x22` ↔ „Kantenschutz 22x22x1,5“ · `_30x30` ↔ „30x30x1,5“ · `_35x35` ↔ „35x35x2“ · `_Easy` ↔ „Easy Hohlkammerkante“ · `_N-Case` ↔ „N-Case-Hohlkammerprofil“. Stärken (1,5 / 2 mm) stehen nur im Content, nicht im Dateinamen – im Content gibt es je Kantenmaß nur eine Stärke, daher eindeutig.
- Dateinamen im Repo: `kantenschutz-22x22x1-5`, `kantenschutz-30x30x1-5`, `kantenschutz-35x35x2`, `easy-hohlkammerkante`, `n-case-hohlkammerprofil`.
- Unveröffentlichte Ablage `/engineering/kantenschutz/` zeigt jetzt die 5 Profile (noindex, nicht verlinkt). Bauart-Slider: Slide 3 „Kante“ nutzt dieselben Bilder (10 Bauarten, Custom Cases ohne Slider). Damit sind alle Slider-Slides außer dem Case-Foto (B1) mit Bildern belegt.

## 2026-10-13 (Materialbilder eingebunden) – Galerien + Bauart-Slider Slide „Platte“
- Alle Materialbilder (23 Dateien, davon 2 nur abgelegt: `multiplex-siebfilm`, `multiplex-siebdruck-9mm` – Hub/Spezialbauten, noch ohne Content, und `hdf-3mm-hpl` nur im Bauart-Slider) auf den drei Materialseiten eingebunden: je Stärke eine Galerie (Ansichtsbild groß 2x2, Details daneben, Klick = Vergrößerung per `assets/js/image-zoom.js`). Der alte Platzhalter-Slot oben entfällt. Layout-Test auf Jaschas Wunsch („testen wir mal“).
- Neu abgelegt: `ultraflite-9-7mm` (+ `-detail-1`, `-detail-2`), `pp-hohlkammer-9-4mm-detail-2`, `pp-hohlkammer-6-8mm-detail-3` (Zuordnung von Jascha bestätigt). Das erneut gelieferte „Multiplex strukturiert 9mm“ ist pixelgleich mit `birken-multiplex-9mm-detail-2` (kein neues File).
- Bauart-Slider: Slide 2 „Platte“ zeigt jetzt das Ansichtsbild des Plattenmaterials der jeweiligen Bauart (Multiplex 6,5 / 9, PP 6,8 / 9,4 / HD 11, UltraFlite 9,7, HDF+HPL). Slide 3 „Kante“ bleibt Platzhalter (Bilder aus der unveröffentlichten Kantenschutz-Ablage folgen).
- Alt-Texte aus den Content-Vorgaben und Jaschas Bezeichnungen abgeleitet (z. B. „Birken-Multiplex-Platte 9 mm mit Hexagon-Oberfläche, schwarz“) – bitte im SEO-Alt-Text-Check (C5) prüfen.

## 2026-10-13 (Materialbilder) – Dateien abgelegt, noch nicht eingebunden
- 15 Materialbilder als WebP (max. 1000 px) unter `assets/images/engineering/materialien/plattenmaterialien/` abgelegt. **Namensschema (Jascha):** Ansichtsbild = Werkstoffname aus der Matrix (Kleinbuchstaben, Bindestriche, Komma → Bindestrich), Detailbilder = Name + `-detail-N` (ab 1 fortlaufend je Werkstoff). Beispiel: `pp-hohlkammer-hd-11mm.webp`, `pp-hohlkammer-hd-11mm-detail-1.webp`.
- Zuordnung: Multiplex 6,5 mm: Ansicht phenol glatt, detail-1 strukturiert, detail-2 Hexagon · Multiplex 9 mm: Ansicht phenol glatt, detail-1 Hexagon, detail-2 strukturiert, detail-3 Natur · Multiplex 15 mm: Ansicht glatt · PP 6,8 mm: Ansicht, detail-1, detail-2 (Farben blau/rot) · PP 9,4 mm: Ansicht · PP HD 11 mm: Ansicht + detail-1 (Greifgummi-Muster) · HDF 3mm + HPL: Ansicht.
- Nachgeliefert/geklärt (2026-10-13): `pp-hohlkammer-9-4mm-detail-1` (neues Bild, ersetzt das 200-px-Detail). Siebfilm: nur im Plattenmaterialien-Hub für Spezialbauten, nicht für Flightcases (Jascha) – Bilder `multiplex-siebfilm` und `multiplex-siebdruck-9mm` abgelegt, aber nicht eingebunden (kein Content-Text/Matrix-Zeile vorhanden). Natur nur als Detailbild von Multiplex 9 mm; HDF-Platte = HDF + HPL.
- Noch offen: Nummerierung der zwei PP-Farben-Bilder grau/schwarz (siehe B10).

## 2026-10-13 (ganz zuletzt) – Plattenmaterialien: Hub + 3 Materialseiten
- Neu angelegt: `/engineering/materialien/plattenmaterialien/` (Hub) sowie `/multiplex/`, `/pp-hohlkammer/`, `/ultraleicht/` nach `content/engineering/materialien/plattenmaterialien/`. Title/Meta/H1/Intro/Matrizen wie im Content, BreadcrumbList-Schema (5 Ebenen). Hub-Kachel im Materialien-Hub verlinkt jetzt dorthin.
- **Jascha-Entscheidung:** „Phenolharz statt PVC“ ist keine eigene Seite mehr, sondern ein ausklappbares Element (`<details id="phenolharz-statt-pvc">`) direkt unter H1/Intro der Multiplex-Seite. Die Content-Datei `phenolharz-statt-pvc.md` bleibt unverändert (Entscheidung nur in `docs/seitenstruktur.md` vermerkt).
- **Vergleichsmatrix (Hub):** Tabelle wird klein als Übersicht gezeigt (nicht lesbar), Klick öffnet sie groß in einem Dialog, in dem man scrollen kann (neu: `assets/js/table-zoom.js`, CSS `.table-zoom*`). Ohne JS bleibt die Tabelle normal lesbar.
- Bildslots: je Materialseite ein Platzhalter (`.material-hero`), echte Bilder folgen (kommen von Jascha).
- Nicht übernommen (interne Content-Hinweise, keine Seitentexte): „neu ergänzt aus …“-Notizen, Siebdruck-Hinweis, Correx/Stegplatte-Hinweis, Penn-Elcom-Gewichtshinweis. Sichtbare Kurzsätze/Überschriften ergänzt: „Vergleichsmatrix“, „Die Materialien im Detail“, „Hintergrund“ (Ausklapper), Unterseiten-Teaser „Alle Plattenmaterialien im Vergleich“ – nicht im Content, bitte prüfen.
- Mobil: auf den neuen Seiten Seitenrand 48px für Tabellen/Ausklapper (sonst blieb der 120px-Rand, Elemente wurden zu schmal) – gilt nur für diese Seiten.

## 2026-10-13 (zuletzt) – Olegs Team-Foto eingesetzt
- Von Jascha geliefertes Foto als `assets/images/manufaktur/team/oleg.jpg` (700px Breite, ~30 KB) gespeichert, auf Kontakt und `/manufaktur/ueber-uns` statt Platzhalter eingesetzt. Ole und Michaela bleiben Platzhalter.

## 2026-10-13 (später) – Bauart-Seite: Bild-Slider (Case / Platte / Kante)
- Jascha-Vorgabe: je Bauart drei Bilder – Case-Foto, verwendete Platte, verwendete Kante. Klick auf das Bild wechselt Case → Platte → Kante → Case.
- `/engineering/flightcase-bauart/`: 10 der 11 Bauart-Zeilen auf `.bauart-slider` umgestellt (3 Slides, Label-Chip + Punkte unten im Bild). „Custom Cases“ bleibt bewusst ohne Slider (Platte/Kante „variabel“, ein Bild).
- Neu: `assets/js/bauart-slider.js` (Vanilla-JS, Klick/Enter/Leertaste/Pfeiltasten, ohne JS bleibt Slide 1 sichtbar), CSS `.bauart-slider*` in `components.css` (nur bestehende Tokens/Platzhalter-Optik).
- Alle 3 Slides aktuell Platzhalter; Slides 2/3 tragen die Werte aus der Specs-Zeile („Platte: Multiplex 6,5“, „Kante: Kantenschutz 22x22x1,5“).
- Neue, **nicht veröffentlichte** Ablageseite `/engineering/kantenschutz/` (noindex, nirgends verlinkt) für die Kantenschutzprofil-Bilder: 5 Platzhalter-Kacheln (22x22x1,5 / 30x30x1,5 / 35x35x2 / N-Case-Hohlkammerprofil / Easy Hohlkammerkante). Die Seite „Plattenmaterialien“ existiert als HTML noch nicht.
- Geprüft: Klick-Wechsel Desktop und Mobil (Playwright), Bildschirmfoto Desktop ok.

## 2026-10-13 – Bild-Slots für alle 4 Team-Mitglieder (Kontakt + Über uns)
- Kontaktseite: Oleg, Ole, Michaela zeigen jetzt `avatar placeholder` (sitewide Platzhalter-Streifenmuster) statt normalem Buchstaben-Avatar, bis echte Fotos vorliegen. Jascha unverändert mit Foto.
- `/manufaktur/ueber-uns`: Bild-Slot (`.avatar`) für alle 4 Team-Bios neu ergänzt (gab es dort bisher gar nicht). Jascha nutzt das echte Foto (`assets/images/manufaktur/team/jascha.jpg`), Oleg/Ole/Michaela zeigen `avatar placeholder`.
- CSS: neue Regel `.hub-card .avatar` (96px, rund, gleiches Prinzip wie `.team-card .avatar` auf der Kontaktseite, nur größer) + gemeinsame `.placeholder`-Regel für alle drei Avatar-Kontexte (`.hub-card`, `.team-card`, `.contact-page .team-card`) in `assets/css/components.css` ergänzt. Keine neuen Design-Werte, nur bestehende Platzhalter-Optik wiederverwendet.
- Oleg-Foto von der alten Seite (`https://dp-case.de/wp-content/uploads/2023/11/olegvCube.png`) konnte nicht automatisch geholt werden – Sandbox-Netzwerk lässt nur eine feste Allowlist zu (Paket-Registries, GitHub), `dp-case.de` wird vom Proxy abgelehnt. Siehe `docs/open-decisions.md` (B8).
- Geprüft: Desktop/Tablet/Mobile (Avatar/h3/p stapeln sich in `.hub-card` korrekt, da `flex-direction: column` bereits vorhanden), Links unverändert, keine kaputten Bildpfade (Platzhalter-Divs ohne `<img>`).

## 2026-10-13 – Mobil-Seitenrand sitewide verkleinert, Header-Überschriften schmaler
- Jascha-Feedback (Vorbild mercedes-benz.de, Screenshots Desktop + Mobil): Seitenränder auf Mobil sollen deutlich kleiner werden; Header-Überschriften sollen nicht über die volle Breite laufen, sondern links schmal stehen wie bei Mercedes.
- **Mobil-Seitenrand:** `--side-pad` wird jetzt selbst bei ≤900px auf 20px reduziert (`tokens.css`), statt wie bisher einzelne Komponenten (`.page-head`, `.text-section`, `.trust`, `.hub-header`) mit einer eigenen 48px-Ausnahme zu versehen. Dabei gefunden: etliche andere Komponenten hatten gar keine Mobil-Ausnahme und standen bisher fälschlich bei vollen 120px Seitenrand (u. a. `.cta-band`, `.faq`, `.valueprops`, `.cases`, Footer, Header-Nav, Formular, Hub-/Produkt-Grids, Legal-Listen) – per `getComputedStyle` bestätigt (`.cta-band` z. B. 120px statt der gewünschten Schmalversion). Die alten 48px-Einzelausnahmen wurden entfernt (jetzt redundant), `.bauart-row-*` behält einen eigenen Wert (nicht über `--side-pad` geregelt), nur von 48px auf 20px angepasst.
- **Header-Überschriften:** `.hero h1`, `.hub-header h1` und `.page-head h1` bekommen `max-width: 40%` (Desktop), auf Mobil wieder `max-width: none` (volle Breite nötig für die vollständigen Sätze). Kein neuer Design-Wert, nur eine Breitenbegrenzung auf vorhandenen Selektoren.
- Geprüft: Desktop (1600px), Tablet (768px), Mobile (375px) auf Startseite, Engineering, Standards & Werte, Flightcase-Bauart – kein Overflow, keine abgeschnittenen Texte, CTA-Band-Buttons nutzen jetzt die volle verfügbare Mobil-Breite statt vorher ~135px.

## 2026-10-12 (ganz allerletzt) – Jaschas Team-Foto ergänzt
- Von Jascha geliefertes Porträtfoto gespeichert unter `assets/images/manufaktur/team/jascha.jpg` (skaliert auf 700px Breite, komprimiert auf ~34 KB).
- Kontaktseiten-Team-Kachel „Jascha" nutzt jetzt dieses Foto statt des Buchstaben-Avatars „J". CSS für Foto-Avatare ergänzt (`.team-card .avatar img`, rund zugeschnitten per `object-fit:cover`), Oleg/Ole/Michaela unverändert mit Buchstaben-Avatar, da deren Fotos noch fehlen.
- `/manufaktur/ueber-uns` bewusst nicht angefasst – die Team-Bios dort haben aktuell gar keinen Bild-Slot (nur Text), das ist eine eigene Layout-Entscheidung.
- In `docs/open-decisions.md` (B8) vermerkt: Jaschas Foto ist final, keine weiteren Fotos vorhanden – als Hinweis für die Entwicklerin.
- Geprüft: Desktop/Tablet/Mobile, Foto füllt den runden Avatar sauber aus, kein Verzerren.

## 2026-10-12 (allerletzt) – Kontaktseite: Info-Blöcke „Lieber direkt?“/„So findest du uns“ entfernt
- Jascha-Entscheidung: Das Element komplett raus – Dopplung zum Anruf-/Besuchs-Block (`.visit-grid`, `.call-cta-top`/`.visit-cta-top`) weiter oben auf derselben Seite, der E-Mail bzw. Adresse ohnehin schon sinngemäß abdeckt.
- `.contact-info`-Block mit den beiden `.info-block`-Kacheln aus `kontakt/index.html` entfernt.
- Zugehöriges, dadurch totes CSS entfernt: `.contact-page .contact-info`, `.contact-page .info-block` (+ Kind-Selektoren). Die generische, bereits vorher als ungenutzt dokumentierte Basis-Regel `.contact-info`/`.info-block` aus dem `index.html`-Grundgerüst (Kommentar in `components.css` Zeile 161–164) bewusst nicht angefasst – nicht durch diese Änderung verursacht.
- `docs/design-system.md` (Kontakt-Abschnitt) entsprechend aktualisiert.
- Geprüft: Desktop/Tablet/Mobile – Formular endet jetzt direkt mit dem Team-Grid, kein Leerraum/Bruch, keine toten Links auf die entfernte E-Mail-Adresse von anderswo auf der Seite.

## 2026-10-12 (zuallerletzt) – Feature-Band erste Anwendung: Begriffssystem
- `.feature-band` (CSS-Grundgerüst aus dem vorherigen Eintrag) jetzt erstmals eingesetzt: Begriffssystem auf `/engineering/flightcase-formen` nutzt den neuen Baustein statt der alten `.begriffe-box` (CSS-Klasse entfernt, keine toten Selektoren).
- Modifier `.feature-band--no-image` ergänzt (einspaltig) – hier auf Jascha-Wunsch bewusst ohne Bild, da kein Freisteller vorhanden.
- Inhalt inhaltlich unverändert (Glossar Deckel/Klappdeckel/Tür/Frontdeckel), nur Titel von kleinem `.label` (13px) auf echte `<h2>` nach Feature-Band-Spezifikation angehoben.
- Bodenschatten für die Bild-Variante ergänzt (`drop-shadow`, Wiederverwendung vom Produkt-Hero) – noch nicht an echtem Freisteller-Bild getestet, da hier noch kein Bild vorliegt.
- Geprüft: Desktop/Tablet/Mobile (Grid bricht bei ≤900px einspaltig um, Begriffsliste bleibt lesbar, kein Overflow).

## 2026-10-12 (ganz zuletzt) – Engineering: Intro-Satz ins Headerbild verschoben
- Jascha-Feedback: Der Satz „Was soll dein Case können, und was würde es perfekt machen? ..." gehört ins Headerbild, so wie auf der Startseite (Hero: H1 + `p.desc` im Bild).
- Text unverändert (war bereits als `.page-intro`-Absatz direkt unter dem Header vorhanden), nur verschoben: jetzt als `p.desc` innerhalb von `.hub-header .wrap`, analog zu Manufaktur/Produkte, die diesen Aufbau bereits nutzen.
- `.pg-engineering .page-intro`-Regel in `components.css` entfernt (toter Selektor, da die Seite kein `.page-intro`-Element mehr hat); `.pg-engineering-formen .page-intro` bleibt unverändert.
- `docs/design-system.md` entsprechend aktualisiert.
- Geprüft: Desktop (1600px)/Tablet (768px)/Mobile (375px) – Text sitzt lesbar im vorhandenen Verlauf, Box wächst wie gehabt mit dem Inhalt mit (kein `overflow:hidden`).

## 2026-10-12 (noch später) – Abstand Seitenkopf → Inhalt (alle Unterseiten außer Startseite)
- Jascha-Feedback: Unter den Seitenköpfen soll immer etwas Platz bleiben, bis der Inhalt beginnt (ca. eine Überschriftenhöhe) – auf allen Seiten außer der Startseite, die bereits gut aussah.
- Befund: `.hub-header` (Engineering/Manufaktur/Produkte) und `.page-head` (restliche Unterseiten) hatten praktisch keinen eigenen Abstand nach unten; die jeweils folgenden Elemente (`.page-intro`, `.product-grid`, `.hub-grid`, `.text-section` usw.) haben alle `padding-top:0`. Auf der Startseite übernimmt `.stats-row` mit eigenem `padding:40px` diese Funktion bereits selbst – deshalb dort unverändert.
- Fix: `.hub-header` bekommt `margin-bottom: var(--fs-h1)` (32px ≤900px, passend zur dortigen H1-Größe), `.page-head` bekommt `padding-bottom: var(--fs-h1)` statt bisher 10px, Kontakt-`.intro-headline` von fix 32px auf `var(--fs-h2)` (36px) angeglichen. Keine neuen Design-Werte – überall nur die jeweils eigene H1-Font-Size-Variable wiederverwendet.
- Silent Rack hatte durch `.product-hero-bar-inner`s 34px Padding + dem seitenspezifischen `.text-section{padding-top:20px}` bereits ausreichend Abstand (zusammen 54px) und wurde nicht angefasst.
- Geprüft: Desktop (1600px)/Tablet (768px)/Mobile (375px) auf Engineering, Manufaktur, Produkte, Standards & Werte, Wissen, Kontakt, Rechtliches – sichtbarer, einheitlicher Abstand, kein Overflow, keine Überlappung. Regel in `docs/design-system.md` dokumentiert.

## 2026-10-12 (noch später) – Flächen-Grau umgestellt, neues Feature-Band dokumentiert
- `--hell` von #F0F5EB (Beige) auf #F8F8F8 (neutrales Grau) geändert – Jascha-Vorgabe, Vorbild mercedes-benz.de (GLA-Konfigurator-Element), Wert per Pixel-Messung aus dem Referenz-Screenshot ermittelt. Keine neue Variable, bestehender Wert korrigiert – wirkt automatisch an allen 8 Stellen, die `--hell` als Flächen-Hintergrund nutzen: Begriffssystem, Mehr-zur-Bauart-Teaser (Bauformen), Deckel-Tür-oder-beides-Teaser (Bauart), Dein-perfektes-Silent-Rack-Teaser (Produktseite, gleiche Klasse `.typen-teaser`), Prozess-Teaser (Produkte-Hub), Tabellenkopf (u. a. Flightcase Maße – damit verbindlicher Standard für Tabellenfarbgebung sitewide), Kontaktseiten-Infoboxen, Rating-Balken-Hintergrund. Altes Beige kommt nirgends mehr vor.
- Neue Komponente **Feature-Band** (`.feature-band`) in `docs/design-system.md` dokumentiert (noch nicht implementiert, nur Spezifikation): Bild-Text-Band mit `--hell`-Hintergrund, Headline/Unterzeile/1–2 Buttons links, **freigestelltes** Bild rechts (Freisteller-Pflicht, kein Rechteck-Foto). Offen: erste konkrete Anwendung, Spaltenverhältnis, Bodenschatten ja/nein.

## 2026-10-12 (später) – Startseite: 5 Textkorrekturen (direkt auf main, auf Wunsch)
- Alle Texte waren bereits wortgleich in `content/startseite.md` als freigegebener Content hinterlegt, `index.html` war nur nicht nachgezogen worden.
- Überschrift „Mehr als nur gut verpackt" → „Alles, was ein Case können kann".
- Reihenfolge der 4 Wert-Kacheln geändert zu: Smartes Handling → Clevere Details → Minimales Gewicht → Maximaler Schutz (vorher: Handling → Schutz → Details → Gewicht).
- Alle 4 Kachel-Texte vervollständigt (waren mitten im Satz abgeschnitten).
- Trust-Überschrift „30 Jahre Lösungen für anspruchsvolle Partner" → „... anspruchsvolle Kunden".
- CTA-Text unter „Dein Case, egal wie speziell." ersetzt (war noch eine ältere Fassung).
- **Nebenbei behoben**: Die vervollständigten Kachel-Texte passten auf Mobil (1-spaltig) nicht mehr in die feste Kartenhöhe von 300px – Text wurde durch `overflow:hidden` teils mitten im Wort abgeschnitten. `line-height` des Kachel-Texts leicht verdichtet (1.5 → 1.4) und Kartenhöhe nur auf Mobil (≤900px) auf 340px erhöht; Desktop/Tablet bleiben bei 300px (Abschnitt wird dort nicht höher, wie in `content/startseite.md` gefordert).
- Geprüft: Desktop/Tablet/Mobile, keine abgeschnittenen Texte mehr, keine Konsolenfehler außer einem vorbestehenden harmlosen 404 (fehlendes Favicon, nicht durch diese Änderung verursacht).
- Auf ausdrücklichen Wunsch direkt auf `main` committed und gepusht (nicht über Branch/PR), damit GitHub Pages die Änderung sofort veröffentlicht.

## 2026-10-12 – Kundennamen-Blocksatz: Größenstaffelung pro Zeile ergänzt
- Rücksprache Jascha: Die am 2026-10-05 entfernte Größenstaffelung (größte Schrift oben, kleinste unten, Vorbild die alten `.t1`–`.t8`-Werte) soll zusammen mit dem Blocksatz bestehen bleiben, nicht eins von beidem. Jetzt kombiniert: `.client-row` bekommt per `:nth-child` dieselben 8 Größen-/Farbstufen wie vorher `.t1`–`.t8` (keine neuen Design-Werte, 1:1 übernommen), die Namen darin bleiben weiterhin dynamisch berechnet statt fest zugewiesen.
- `assets/js/trust-justify.js` komplett neu: Da jede Zeile jetzt eine andere Schriftgröße hat, kann die Zeilenzuordnung nicht mehr wie bisher per „flach rendern + offsetTop auslesen" ermittelt werden (die Größe einer Zeile hängt von ihrem erst nach dem Packen bekannten Index ab). Stattdessen Canvas-Textmessung (`measureText`) für ein Zeile-für-Zeile-Greedy-Packing mit der jeweils gültigen Schriftgröße. Umsortierung (max. 2 Positionen, tatsächlich nachgemessen) und Weglassen vom Listenende für die letzte Zeile wie bisher.
- Neu (Anforderung „auf dem Handy nicht höher als ein Bildschirm"): Auf Breiten ≤600px wird zusätzlich so lange vom Listenende weggelassen, bis der gesamte Namensblock in die tatsächliche Gerätehöhe (`window.innerHeight`, bewusst nicht auf eine feste iPhone-Pixelzahl hartkodiert) passt. Getestet an iPhone SE (375×667), iPhone 14/15 (390×844) und iPhone 14/15 Pro Max (430×932) – passt bei allen dreien ohne Scrollen innerhalb des Abschnitts.
- Bug beim Testen gefunden und behoben: Zeilenabstand wurde doppelt angewendet (`row-gap` am äußeren Container UND `margin-bottom` an jeder `.client-row`, da jede Zeile wegen `flex:0 0 100%` selbst eine Flex-Wrap-Zeile des Containers ist) – dadurch war die real gerenderte Höhe ca. 120px größer als die von JS für die Mobil-Kürzung berechnete, wodurch zu wenig gekürzt wurde. `margin-bottom` entfernt, `row-gap` ist jetzt einzige Abstandsquelle (CSS und JS-Höhenrechnung stimmen jetzt überein).
- `dp-case_v2a_standalone.html` und `dp-case-design-system.md` (vom Nutzer als Vorbild genannt) liegen in einem separaten Claude-Projects-Workspace, nicht in diesem Repository (Fundstelle: `archiv/master-content-backup.md`, Zeile zu „Paralleler Design-Chat") – stattdessen die hier bereits vorhandenen, laut Fundstelle identischen Werte (Farben, Schrift) sowie `docs/design-system.md` verwendet.
- Geprüft: 1920/1280/768/390/360px, Verschiebung ≤2 Positionen, kein Trenner am Zeilenrand, kein Overflow durch diese Komponente (der bestehende 8px/38px-Overflow bei ≤390px kommt weiterhin vom unabhängigen, vorbestehenden Hero-Button), `standards-werte/index.html` unverändert, Resize-Verhalten, No-JS-Fallback (einheitliche Größe, vollständiger Text, Progressive Enhancement).

## 2026-10-05 – Kundennamen im Trust-Bereich der Startseite: echter Blocksatz
- Ist-Zustand vorher: Die ~101 Kundennamen standen in `index.html` in 13 fest kuratierten `.tier`-Zeilen (`t1`–`t8`) mit 8 Größenstufen (32px bis 13px) – jede Zeile ein manueller Zeilenumbruch, kein dynamischer Fließtext. Dieselbe Komponente (`.trust`/`.trust-list`/`.tier`/`.t1`–`.t8`) wird auch auf `standards-werte/index.html` verwendet – die bleibt unverändert, deshalb wurde diese Komponente NICHT verändert, sondern eine neue, eigenständige Komponente nur für `index.html` ergänzt.
- Neu: `.client-list`/`.client-name`/`.client-row` (neue Klassen, components.css) + `assets/js/trust-justify.js`. Alle Namen jetzt gleiche Schriftgröße/-farbe (`--fs-body-small`, `--grau-text`), Zeilenumbruch dynamisch je nach Breite statt fester Zeilen.
- Ohne JavaScript: `.client-list` ist ein Flex-Container mit `flex-wrap` + `justify-content:space-between`, das ergibt bereits echten Blocksatz pro Zeile inkl. letzter Zeile, ganz ohne JS (Progressive Enhancement).
- Mit JavaScript: zusätzlich Trenner garantiert nie am Zeilenanfang/-ende, und die letzte Zeile wird bei Bedarf zuerst umsortiert (max. 2 Positionen, tatsächlich nachgemessen statt angenommen – ein einzelner Zug kann durch Kaskadeneffekte beim Neu-Umbruch auch frühere Zeilen verschieben) und erst danach vom Ende der Liste weggelassen (ausgeblendet per `hidden`-Attribut, nicht gelöscht), bis die letzte Zeile mindestens 75 % gefüllt ist (`MIN_LAST_LINE_FILL`, als Konstante leicht anpassbar). Neuberechnung bei Laden, `document.fonts.ready` und Resize (debounced 150ms).
- Bug beim ersten Test gefunden und behoben: `.client-row` brauchte `flex: 0 0 100%`, sonst wurde es selbst vom äußeren Flex-Umbruch der Liste als schmales Element behandelt (mehrere Zeilen nebeneinander statt gestapelt, kein Abstand zwischen den Namen).
- Bekannte, dokumentierte Grenze: Der längste Name „Universitätsklinikum Schleswig-Holstein" (308px) passt erst ab ~360px Breite in den Container – darunter overflowt er zwangsläufig, da „Namen nicht trennen" ein Umbrechen verbietet. Betrifft nur Breiten unterhalb der getesteten 360px.
- Geprüft: 360/768/1280/1920px, Verschiebung ≤2 Positionen (automatisiert über ~105 Breiten von 340–1920px verifiziert), Trenner nie am Zeilenrand, `standards-werte/index.html` unverändert (eigene Stichprobe), Resize-Verhalten ohne Overflow.
- Pull Request wird nicht selbst gemerged (Vorgabe).

## 2026-10-05 – Kontaktseite: Kartenplatzhalter verkleinert
- `.map-placeholder` (Besuchs-Block) nahm bisher die volle Spaltenbreite ein und wirkte dadurch deutlich größer/dominanter als der Anruf-Block links daneben. Auf Wunsch auf 50% Breite reduziert (`width: 50%`, Seitenverhältnis 4/3 unverändert).
- Geprüft: Desktop/Tablet/Mobile, kein horizontaler Overflow.

## 2026-09-29 (Nachtrag 2) – Kontaktseite: Besuchs-Block ergänzt
- `content/kontakt.md`: Neuer kurzer Block neben bzw. über dem Anruf-Block – „Gern auch bei uns – komm vorbei in Hamburg-Bergedorf.“ plus Platzhalterfläche für eine Karte (Entscheidung Jascha: vorerst nur Platzhalter, kein Kartendienst – die Einbindung ist datenschutzrelevant und wird vor dem Livegang entschieden).
- Der Info-Block unter dem Formular heißt deshalb jetzt „So findest du uns“ statt „Komm vorbei“, damit sich die Formulierung nicht doppelt.

## 2026-09-29 (Nachtrag) – Kontaktformular: Platzhalter branchenneutral
- `content/kontakt.md`, Feld „Maße / Gewicht / Stückzahl des Equipments“: Beispieltext von Mischpult/Lautsprecher auf Steuerschrank/Ersatzteil-Baugruppe geändert (Entscheidung Jascha). Grund: Der bisherige Platzhalter kam aus der Veranstaltungstechnik und schränkte den Eindruck der Zielgruppe unnötig ein.

## 2026-10-04 (später, 2) – Kontaktseite im HTML umgesetzt: Besuchs-Block, Info-Block umbenannt, neuer Placeholder-Text
- Neuer Besuchs-Block (`.visit-cta-top`) neben dem bestehenden Anruf-Block: Satz „Gern auch bei uns – komm vorbei in Hamburg-Bergedorf." + Kartenplatzhalter mit sichtbarem Text „[Platzhalter: Karte mit Anfahrt – folgt.]" (kein Kartendienst eingebunden, wie vorgegeben). Beide Blöcke stecken jetzt in `.visit-grid`: auf Desktop nebeneinander, bei ≤900px gestapelt, gleiche Optik wie der Anruf-Block (Streifenmuster-Platzhalter wiederverwendet von `.bauart-row-img.placeholder`, keine neuen Design-Werte).
- Info-Block unter dem Formular: Überschrift „Komm vorbei" → „So findest du uns" (Dopplung mit dem neuen Besuchs-Block oben).
- Placeholder-Text der Textarea „Maße / Gewicht / Stückzahl des Equipments": Beispielgegenstände „Mischpult“/„Lautsprecher“ → „Steuerschrank“/„Ersatzteil-Baugruppe“, Stückzahlen/Gewichte exakt wie in `content/kontakt.md` (1x/4x, „je ca. 8 kg“ beim zweiten Gegenstand).
- Geprüft: Desktop/Tablet/Mobile, kein horizontaler Overflow, Formularfluss (Datenschutz-Link, Absenden-Button) unverändert.

## 2026-10-04 (später) – Header-Bilder auf den Hub-Seiten eingebaut
- Neue Komponente `.hub-header` (Engineering, Manufaktur, Produkte): Bild als Hintergrund, H1 (+ optionaler Text) links darüber, wie beim Startseiten-Hero – gleiches Seitenverhältnis 1800/725 (Bildformat der 3 Header-Fotos), gleiche Verlauf-Werte, gleiche Schrift-Tokens. Bild als `<img>` statt CSS-Hintergrund (wie `.case-tile`), damit ein echter Alt-Text aus dem Content möglich ist. Ersetzt `.page-head` auf diesen 3 Seiten.
- Engineering: `header-engineering-zeichner.jpg` eingesetzt, H1 „Engineering, das dein Case zu Ende denkt“ (neuer, längerer Content-Text seit 2026-09-29), kein Text darunter (Content sieht hier keinen vor). Der bisherige Intro-Satz über dem 5-Schritte-Prozess bleibt unverändert darunter stehen.
- Manufaktur: `header-manufaktur-werkstatt.jpg` eingesetzt, H1 „Alles unter einem Dach, von der Idee bis zum fertigen Case“ + die gekürzte Kundennutzen-Zeile darunter (vorher als eigener Absatz unter dem alten Seitenkopf, jetzt in den Header gewandert, wie im Content vorgegeben „direkt unter H1“).
- Produkte: `hero-case-foto.jpg` als Platzhalter (Content: echtes Foto noch offen, siehe `docs/open-decisions.md` B7), H1 „Individuelle Lösungen für jede Herausforderung“ (vorher der Intro-Satz, jetzt zur H1 geworden) + die Trust-Zeile „30 Jahre Lösungen für anspruchsvolle Partner – über 2.000 Konstruktionen, 100 % individuell.“ darunter. Platzhalterbild ohne Alt-Text (`alt=""`), da kein eigenes Motiv.
- **Bug gefunden und behoben**: Mit `overflow:hidden` (naheliegend für die Bild-Positionierung) wurden die langen H1-Sätze auf Mobil abgeschnitten, weil die Box strikt auf die aspect-ratio-Höhe begrenzt blieb – anders als beim Hero, dessen H1 durch manuelle `<br>` immer kurz genug für die Höhe ist. Ohne `overflow:hidden` wächst die Box mit dem Text mit, das `<img>` füllt sie per `object-fit:cover` trotzdem exakt aus. Betraf v. a. Manufaktur (längster Text): Headerhöhe auf Mobil wuchs dadurch von 157px auf 348px, Text jetzt vollständig lesbar.
- Nebenbei bereinigt: `.pg-produkte .page-head` (tot, Produkte nutzt kein `.page-head` mehr) und `.pg-manufaktur .page-intro` (tot, Text ist jetzt im Header) aus `components.css` entfernt.
- Geprüft: Desktop/Tablet/Mobile auf allen 3 Seiten (kein horizontaler Overflow), Alt-Texte exakt aus dem Content übernommen, Startseite/Kontaktseite stichprobenartig auf Regressionen geprüft (unverändert).

## 2026-10-04 – Header-Bild Manufaktur
- `assets/images/manufaktur/header-manufaktur-werkstatt.jpg` neu: Werkstatt-Panorama von Jascha, mittig auf 1800 × 725 zugeschnitten (Original 5689 × 1960, 2,9:1 → Header-Format 2,48:1, links und rechts je ca. 200 px beschnitten).
- Bearbeitung bewusst anders als beim Engineering-Header (Entscheidung Jascha, nach zwei verworfenen Varianten): keine Abdunklung und keine Entsättigung, nur Deckenleuchten und Oberlichter in CI-Türkis plus Lichthof und Schimmer auf hellen Reflexen.
- `content/manufaktur/index.md`: Header-Bild mit Alt-Text und Bearbeitungshinweis eingetragen.
- Offen vor Livegang: Die Person in der Halle ist klein und gebückt, dadurch kaum erkennbar – Einwilligung trotzdem prüfen.

## 2026-09-29 (Nachtrag 3) – Hub-Überschriften, Produkte-Header, Empfehlungs-Kacheln
- H1 auf den Hub-Seiten von Etikett auf Nutzen umgestellt (Entscheidung Jascha): Engineering „Engineering, das dein Case zu Ende denkt“, Manufaktur „Alles unter einem Dach, von der Idee bis zum fertigen Case“, Produkte „Individuelle Lösungen für jede Herausforderung“ (bisheriger Intro-Satz). Die Kundennutzen-Zeile der Manufaktur-Seite wurde gekürzt, weil „Alles unter einem Dach“ jetzt in der H1 steht.
- Produkte-Hub bekommt ein Header-Bild mit Text darüber. Über dem Bild stehen H1 und eine Trust-Zeile („30 Jahre Lösungen für anspruchsvolle Partner – über 2.000 Konstruktionen, 100 % individuell“), nicht die vollständige Kundenliste: die ist als Blocksatz mit 8 Größenstufen über einem Foto unleserlich und steht bereits auf zwei anderen Seiten. Bild bis auf Weiteres `hero-case-foto.jpg` als Platzhalter.
- „Unsere Empfehlungen“ auf der Startseite: Die 5 Bild-Kacheln hatten bisher überall Platzhalter und weder Button noch Link. Jetzt je Kachel Branchen-Tag, Titel, Story, Button „Case ansehen“ und Ziel-URL (Barista Bar, Bohrschablonen-Case, Silent Rack, Wartungsset-Case, Schwing-Rack). Storys aus den bestehenden Produkttexten abgeleitet.
- Es gibt nur 3 Fotos für 5 Kacheln, zwei werden vorerst doppelt verwendet (B5). Die beiden CTA-Kacheln „Weitere Produkte“ und „Engineering“ bekommen vorläufig Hintergrundbilder aus dem vorhandenen Bestand.
- Hinweis: Keine der drei Hub-Seiten hatte bisher ein Header-Bild – nur die Startseite hat eins.
- Engineering bekommt als erste ein Header-Bild: `assets/images/engineering/header-engineering-zeichner.jpg` (Foto von Jascha, im Stil des Startseiten-Heros bearbeitet – entsättigt, abgedunkelt von links/oben/unten bis zur Monitorkante, CI-Teal in Schatten und Lichtern; Bildschirm vom Effekt ausgenommen, Konstruktion darauf in CI-Teal). Vor dem Livegang zu klären: Einwilligung der abgebildeten Person und ob die auf dem Bildschirm erkennbaren Dateinamen/Konstruktionen unkritisch sind.

## 2026-09-29 (später, 11) – Silent-Rack: Technische Daten + Rating-Balken zusammengelegt
- `19-zoll-racks/silent-rack/index.html`: Tabelle „Technische Daten“ und die Rating-Balken (Stabilität/Gewicht) standen bisher untereinander mit eigener Zwischenüberschrift „Technische Daten“ plus einer separaten freistehenden Zeile „Seit 30 Jahren – made in Hamburg.“ weiter oben auf der Seite. Auf Wunsch zusammengelegt: neue gemeinsame Überschrift „Seit 30 Jahren – made in Hamburg.“ (bestehender Trust-Zeilen-Text aus dem Content, wiederverwendet statt neu erfunden) direkt über beiden Elementen, Tabelle und Balken liegen ab jetzt nebeneinander (`.specs-flex`, neue Komponente). Die alte freistehende Zeile weiter oben entfernt (Dopplung). Bei ≤900px stapelt sich der Block (Tabelle oben, Balken darunter).
- Nebenbei: toter CSS-Rest `.pg-silent-rack .data-table-wrap` entfernt (Klasse wird auf der Seite nicht mehr verwendet).
- Geprüft: Desktop/Tablet/Mobile, kein horizontaler Overflow.

## 2026-09-29 (später, 10) – Silent-Rack: „Anrufen“-Button im Hero-Bar-Bereich korrigiert
- `19-zoll-racks/silent-rack/index.html`, oberer Hero-Bar-Bereich (`.product-hero-bar`, heller Farbverlauf): „Anrufen“-Button nutzte `.btn-outline` (weißer Rand/weiße Schrift, für dunkle Flächen gedacht) – auf dem hellen Hintergrund praktisch unlesbar. Auf `.btn-outline-light` (schwarzer Rand/schwarze Schrift, bereits bestehende Komponente) umgestellt. Der zweite „Anrufen“-Button weiter unten im dunklen `.cta-band` bleibt unverändert bei `.btn-outline` (dort korrekt).
- Geprüft: Desktop/Tablet/Mobile, kein horizontaler Overflow.

## 2026-09-29 (später, 9) – Kontaktseite: Überschrift „Lass uns dein perfektes Case entwickeln.“ überarbeitet
- `.contact-page .intro-headline`: Farbe von Teal auf Anthrazit geändert (wie alle anderen H1 im page-head, Teal wirkte hier unpassend als Fließtext-Farbe), Abstand oben 0 → 44px, Abstand unten 20px → 32px – auf Wunsch „passend zum Mercedes-Stil“, mehr Luft um die Überschrift.
- Geprüft: Desktop/Tablet/Mobile (kein horizontaler Overflow).
- Stichprobe auf Teal-Überschriften sitewide: Keine weiteren H1/H2-Überschriften in Teal gefunden – alle übrigen `color: var(--teal)`-Stellen sind kleine Labels/Kicker/Links/Fokus-Rahmen (bewusste Sekundärfarbe), keine Headlines.

## 2026-09-29 (später, 8) – Wissen-Bereich, Breadcrumb sitewide entfernt, Button-Hover, Overflow-Fixes
- **Wissen-Bereich (C9)**: `/wissen` (Übersicht, 2 Kacheln), `/wissen/hoeheneinheiten`, `/wissen/tsa-schloss` neu als HTML angelegt – ausschließlich bestehende Komponenten (`page-head`, `text-section`, `hub-grid.cols-2`, FAQ, `cta-band`), keine neuen Design-Werte. Interne Links wie gefordert gesetzt; Schwing-Rack und Kamera-Case-Produktseite existieren noch nicht als HTML (nur Silent Rack ist fertig) – dorthin `href="#"` mit TODO-Kommentar, gleiches Muster wie bei anderen fehlenden Seiten. Footer-Link „Wissen" auf allen 20 Seiten mit Footer ergänzt (Navigationsentscheidung: nur Footer, nicht Hauptnav – bereits früher im Chat bestätigt).
- Punkt 3 der Aufgabe (Platzhalter-Link in der Kamera-Case-FAQ im HTML verlinken) bleibt offen – die Kamera-Case-Produktseite existiert noch nicht als HTML, es gibt nichts zu verlinken.
- **Breadcrumb sitewide entfernt**: Die sichtbare Pfadanzeige „Start > Engineering" o.ä. (`<nav class="breadcrumb">`) auf allen 13 Seiten, die sie hatten, entfernt – dazu `.breadcrumb`-CSS gelöscht, damit sie nicht versehentlich wieder auftaucht. Das unsichtbare `BreadcrumbList`-Schema.org-JSON-LD bleibt überall bestehen (SEO-Metadaten, nicht die visuelle Anzeige, die gemeint war) und wurde auch für die 3 neuen Wissen-Seiten ergänzt.
- **Button-Hover**: Rand-Buttons (`.btn-outline`, `.btn-outline-light`, Header-CTA, Mobilmenü-Button) färben sich beim Mouseover teal, wie die Hauptnav-Links. `.btn-primary` bewusst ausgenommen (schon voll teal, teal-auf-teal wäre unlesbar).
- **Nebenbei gefunden und behoben** (beim Pflicht-Check auf allen Breakpoints, per Playwright `scrollWidth`-Vergleich):
  - Drei `.hub-grid`-Stellen (Engineering 4 Spalten, Über-uns-Team 2 Spalten, neu Wissen-Übersicht 2 Spalten) nutzten ein Inline-`style="grid-template-columns:..."`, das die 900px-Media-Query per Spezifität aussticht – dadurch blieb der Grid auf Mobile bei 2–4 Spalten statt auf 1 Spalte umzubrechen, Text lief aus dem Viewport. Neue Modifier-Klassen `.cols-2`/`.cols-4` ersetzen die Inline-Styles, Media-Query greift jetzt korrekt.
  - `.page-head`/`.page-intro` und `.text-section` hatten bei ≤900px weiterhin den vollen 120px-Seitenrand (nur einzelne Seiten hatten bereits eine 48px-Sonderregel). Bei langen H1 („HE, U und RU – Höheneinheiten im Rack", „PPWR-Stellungnahme") reichten die verbleibenden ~150px nicht aus – echter horizontaler Overflow (`scrollWidth` > `clientWidth`), betraf 3 Seiten. Jetzt generell 48px bei ≤900px (bisherige seitenspezifische Overrides für Bauart/Silent-Rack als redundant entfernt) plus `overflow-wrap:break-word` auf `.page-head h1` als Sicherheitsnetz für einzelne nicht umbrechbare lange Wörter.
- Geprüft: Desktop/Tablet/Mobile auf allen 3 neuen Seiten und stichprobenartig auf betroffenen Bestandsseiten, alle Links (relative Pfade + TODO-Platzhalter), `scrollWidth`-Check auf 15 Seiten (alle „ok" bis auf einen bereits vor diesem Merge bestehenden 8px-Rand bei der Startseite/Hero-Button, unrelated, nicht behoben).

## 2026-09-29 (Doku) – Design-System mit dem Code abgeglichen
- `docs/design-system.md`, Token-Tabelle: `--header-pad-v-scrolled` 10px → 9px, `--logo-h-scrolled` 32px → 29px, `--logo-h-scrolled-mobile` 24px → 22px. Die Werte waren am 2026-09-29 im Code geändert, in der Tabelle aber nicht nachgezogen (die Fließtext-Beschreibung war bereits korrekt).
- `--side-pad`: Hinweis „Header bewusst 48px“ entfernt, der Header nutzt seit 2026-09-29 denselben Seitenrand wie der Inhalt.
- Breakpoint-Zeile: gescrolltes Logo ≤900px 24px → 22px.
- Abschnitt „Buttons“: Verweis ergänzt, dass der Header-CTA seit 2026-09-29 eine eigene Optik hat und diese Ausnahme nur im Header gilt.

## 2026-09-29 – Wissen-Bereich angelegt (Teil von C9)
- Neuer Ordner `content/wissen/` mit Übersichtsseite, `hoeheneinheiten.md` (HE/U/RU, 19 Zoll, halbe Breite, Rechenweg) und `tsa-schloss.md` (Funktion, Länder, Grenzen, Empfehlung).
- Jede Seite mit Title, Meta, Breadcrumb, H1, Intro, internen Links, Allgemeiner FAQ, CTA und BreadcrumbList-Schema.
- TSA-Seite ergänzt (Angaben Jascha): Butterfly mit Öse ist Standard, daran passt jedes Schloss (TSA, Zahlen, Schlüssel); für den Versand empfehlen wir Zahlenschlösser; passende Schlösser bieten wir auf Wunsch mit an.
- `content/kamera-cases/red-raptor-xl-case.md`: Platzhalter „[Link zu geplanter Wissens-Seite …]“ durch echten Link auf `/wissen/tsa-schloss` ersetzt.
- `docs/seitenstruktur.md` und C9 aktualisiert; offen bleiben Branchen- und Zubehör-Materialseiten.

## 2026-09-29 – Kontaktseite überarbeitet
- `content/kontakt.md`: Seitenkopf „Kontakt“ entfällt, der Einleitungssatz wird zur H1; Überschrift „Kontaktformular“ gestrichen. Die Unterzeile „Ein paar Angaben zu deinem Projekt genügen für den Start.“ entfällt (Aussage steckt bereits im Aufklappbereich und im Feld „Kurzbeschreibung“). Der Anruf-Block steht jetzt direkt unter der H1 statt ganz oben; seine Überschrift „Ruf uns an.“ entfällt, er besteht nur noch aus der Frage „Du telefonierst lieber oder brauchst sofort eine Lösung?“, Telefonnummer und Öffnungszeiten.
- Zwischenüberschriften im Formular vereinheitlicht (Wer du bist / Wie wir dich erreichen / Worum es geht); „Projektrahmen“ bleibt, „Deine Case Details“ entfällt – die Felder stehen direkt unter „Optional, aber hilfreich“.
- Zweiter Datei-Upload für Fotos eines vorhandenen Cases direkt unter der zugehörigen Checkbox ergänzt; Upload unter „Projektrahmen“ unverändert.
- Info-Blöcke umbenannt („Lieber direkt?“, „Komm vorbei“), Telefon/Zeiten dort entfernt (standen dreifach auf der Seite). Datenschutz-Checkbox neu formuliert und auf `/rechtliches/datenschutz` verlinkt. Tippfehler im Team-Zitat korrigiert. Fehlende Elemente aus der Master-MD (Button „Mehr erfahren“ je Team-Kachel, Michaela-Zusatz) vermerkt.

## 2026-09-29 (später, 7) – Kontaktseite überarbeitet (Content-Merge 2026-09-29)
- Alle 11 Punkte aus der Aufgabenbeschreibung umgesetzt: `page-head`/H1 „Kontakt" entfernt, bisheriger Einleitungssatz „Lass uns dein perfektes Case entwickeln." ist jetzt die H1 (ganz oben, vorher `<p class="intro-headline">` weiter unten); Unterzeile „Ein paar Angaben..." gestrichen. Anruf-Block direkt unter die H1 verschoben, Überschrift „Ruf uns an." entfernt, neuer Text „Du telefonierst lieber oder brauchst sofort eine Lösung?". `<h2>Kontaktformular</h2>` entfernt. Zwischenüberschriften umbenannt (Wer du bist / Wie wir dich erreichen / Worum es geht, Projektrahmen bleibt). „Deine Case Details" ersatzlos entfernt. Neues Datei-Feld „Fotos des vorhandenen Cases" unter der Vorlage-Checkbox (eigene id, unabhängig vom bestehenden Upload unter Projektrahmen – beide Buttons einzeln per Playwright getestet). Info-Blöcke umbenannt: „Kontakt" → „Lieber direkt?" (Telefon/Zeiten dort entfernt, nur noch E-Mail – Dopplung zum Anruf-Block oben vermeiden), „Adresse" → „Komm vorbei". Datenschutz-Checkbox-Text erneuert, „Datenschutzerklärung" als Link auf `/rechtliches/datenschutz/`. Team-Zitat Jascha „Dein Projekt" → „dein Projekt". Jede Team-Kachel hat jetzt „Mehr erfahren →" (Link auf `/manufaktur/ueber-uns/`, wiederverwendet `.btn-link`, war in `components.css` schon vorgesehen (`.team-card .btn-link`) aber ungenutzt), plus Zusatzzeile „Fragen zur Buchhaltung? Melde dich gern direkt bei Michaela." unter dem Grid.
- Nebenbei gefunden und behoben: Da die H1 jetzt direkt in `.wrap.contact-page` sitzt statt in einem eigenen `.page-head`, griff `.contact-page`s eigene `padding:20px 0 70px` (kein Seitenrand links/rechts, überschreibt `.wrap`) – H1 klebte am Browserrand. `.contact-page .intro-headline` bekommt jetzt wie `.call-cta-top`/`.contact-grid` `max-width:960px; margin:0 auto`, bündig mit dem übrigen Inhalt.
- Aufräumen: `.intro-headline-sub` (CSS) war nach dem Streichen der Unterzeile nirgends mehr referenziert, entfernt.
- **Hinweis**: `content/kontakt.md` enthält (Stand der Datei im Repo) keine der hier umgesetzten Änderungen und keine nummerierte Liste – die Umsetzung basiert auf den im Chat vollständig ausformulierten Texten der Aufgabenstellung selbst. Gleiches Muster wie beim Wissen-Bereich (siehe `docs/open-decisions.md`, C9): der referenzierte Content-Merge vom 2026-09-29 ist nicht im Repo angekommen, hier lag aber – anders als bei /wissen – der komplette Text bereits in der Aufgabenbeschreibung vor, daher keine Blockade.
- Geprüft: Desktop/Tablet/Mobile, alle Links (relative Pfade auf existierende Seiten geprüft), beide Datei-Buttons (Playwright `expect_file_chooser`), Formularfluss (Radios/Checkboxen/Felder unverändert funktionsfähig).

## 2026-09-29 (später, 6) – Mobilmenü-Button dezenter (wie Header-Button)
- „Dein Projekt anfragen" im Mobilmenü war weiterhin teal-gefüllt (`.btn-primary`), obwohl das Menü einen weißen Hintergrund hat. Auf Wunsch jetzt wie der Header-Button: dünner Rand statt Vollfläche – hier in Anthrazit/Schwarz statt Weiß, da der Menü-Hintergrund hell ist.
- Rein per CSS (`.mobile-menu .btn-primary`) überschrieben, keine HTML-Änderung nötig – betrifft automatisch alle 17 Seiten mit Mobilmenü (identisches, kopiertes Markup je Seite).

## 2026-09-29 (später, 5) – Burger-Menü-Breakpoint korrigiert (Header/Logo-Überlappung)
- Burger sprang bisher erst bei 900px ein, aber „Kontakt" (letzter Nav-Link) hatte schon deutlich vorher weniger Abstand zum Logo als die Nav-Punkte untereinander (40px) – ab ca. 1300px überlappten sich Logo-Bild und „Kontakt" sogar sichtbar. Per Playwright exakt gemessen (echte Bildkante des Logos, nicht dessen 0px-breiter Positionierungs-Anker): Gleichstand bei 1379px, ab 1378px abwärts bereits weniger Abstand. Burger-Breakpoint auf `max-width:1380px` gesetzt (vorher 900px), nur für Nav-Links/Burger/Header-CTA/Logo-Größe – `.hero`/`.stats-row` bleiben bei 900px (eigenständiger Grund, nicht Teil des Nav-Problems).
- Nebenbei gefunden und behoben: Der Burger-Button war auf schmalen Viewports (≤ca. 390px) teils gar nicht klickbar – das absolut positionierte, breitere Logo (inkl. des unsichtbaren, aber weiterhin klickblockierenden Crossfade-Bilds mit `opacity:0`) lag optisch über dem Burger und fing den Klick ab. Burger jetzt mit `position:relative; z-index:2` über das Logo gehoben (Logo `z-index:1`), Klick per Playwright-Test bestätigt.

## 2026-09-29 (später, 4) – Kontaktseite: Ruf-uns-an-Bereich, Datei-Button, leichtere Eingabefeld-Schrift
- Neue helle Button-Variante `.btn-outline-light` (weißer Hintergrund, dünner grauer Rand, dunkle Schrift) – Pendant zu `.btn-outline` für helle Flächen, Vorbild Header-Button (dünner Rand statt Vollfläche). Keine neuen Design-Werte, nur bestehende Farben neu kombiniert.
- „Ruf uns an“-Bereich: Hintergrundkasten (`--hell`, Radius 16px) entfernt (Jascha: „sieht immer doof aus“) und auf `max-width:960px; margin:auto` gesetzt – jetzt bündig mit dem Kontaktformular darunter statt breiter/versetzt. Telefonnummer steht jetzt in einem `.btn-outline-light`-Button statt als Pfeil-Textlink.
- Datei-Upload: natives `<input type="file">` (hässlicher Browser-Standard-„Durchsuchen“-Button) optisch versteckt, sichtbares `<label for="...">` als `.btn-outline-light` übernimmt Klick/Tastatur ohne JS (native `label for`-Zuordnung löst den Datei-Dialog aus, geprüft).
- Eingabefeld-Schrift (Input/Select/Textarea) von `--body-font` (Clear Sans **Bold** – wirkt auch bei `font-weight:400` fett, da der Schriftschnitt selbst fett ist) auf `--headline-alt-font` (Open Sans, echtes Regular vorhanden) umgestellt – wirkt jetzt deutlich weniger dick, näher am Mercedes-Vorbild. Nur Kontaktseiten-Formularfelder betroffen, keine andere Seite nutzt diesen Selektor.
- Geprüft auf Desktop/Tablet/Mobile, Datei-Dialog per Playwright ausgelöst (funktioniert).
- Hinweis: „das machen wir nirgends mehr“ (Hintergrundkästen) bewusst nur auf diesen einen Bereich angewendet – andere Kästen (z. B. Kontakt-Info-Block darunter, `--hell`-Flächen auf anderen Seiten) sind unverändert, da das eine größere Design-Entscheidung wäre (siehe Rückfrage im Chat).

## 2026-09-29 (später, 3) – Trust-Element: Blocksatz statt zentriert
- `.trust-list .tier` (Firmen-Referenzliste unter „30 Jahre Lösungen für anspruchsvolle Partner“, auf Startseite und `standards-werte/index.html`) war zentriert – jede Zeile hing unterschiedlich weit von beiden Rändern weg. Auf Wunsch jetzt echter Blocksatz: jede Zeile beginnt/endet flush mit dem Container.
- Reines `text-align:justify` hätte auch Leerzeichen INNERHALB mehrteiliger Firmennamen gestreckt (z. B. „Siemens AG“ auseinandergerissen) – stattdessen `display:flex;justify-content:space-between` je Zeile mit jedem Firmennamen in einem `<span>`, „·“-Trenner an den jeweils vorherigen Namen angehängt (bleibt beim Zeilenumbruch immer an seinem Namen, landet nie isoliert auf eigener Zeile). Keine Namen geändert, keine Bindestriche nötig – nur Markup/CSS.
- Bei ≤900px zusätzlich 48px statt 120px Seitenrand (wie Bauart-Row/Silent-Rack), da bei 120px sonst zu wenig Platz für sinnvolle Zeilenlängen bleibt.
- Geprüft auf Desktop/Tablet/Mobile auf beiden Seiten, die die Komponente nutzen.

## 2026-09-29 (später, 2) – Kontaktformular-Regression behoben (Breite/Zentrierung, Radio/Checkbox-Ausrichtung)
- Fehler war eine verlorene Korrektur aus einem verwaisten, nie gemergten Commit (`ee99631`, 27.09.) auf dem alten Stand von `claude/loving-turing-hpufsz` – beim Neustart dieses Branches von `main` (nach Merge von PR #11) wurde nur oberflächlich per `grep` auf `field-label`-Anzahl geprüft statt das CSS visuell zu vergleichen, dadurch blieb der Bug unbemerkt in `main`.
- `.contact-grid` hatte keine eigene Breite/Zentrierung, während `.contact-form` auf `max-width:640px` gedeckelt war → Formular hing schmal und linksbündig in der viel breiteren `.wrap`-Spalte. Fix: `max-width:960px; margin:0 auto` auf `.contact-grid`, `.contact-form` ohne eigenes `max-width` – Formular, Info-Block und Team-Karten teilen sich jetzt eine einheitliche zentrierte Spalte.
- `.contact-page .contact-form label` (Spezifität durch Element+2 Klassen) hat mit `flex-direction:column` die spezifisch schwächeren Regeln für `.radio-inline`/`.checkbox-inline`/`.checkbox` überstimmt – Radios und Checkboxen standen dadurch gestapelt statt neben ihrem Label. Fix: Selektoren auf `.contact-page .contact-form label.radio-inline` bzw. `label.checkbox-inline`/`label.checkbox` verschärft (höhere Spezifität), `flex-direction:row` gewinnt jetzt.
- Geprüft auf Desktop/Tablet/Mobile inkl. geöffnetem „Optional, aber hilfreich“-Bereich (4er-Checkbox-Reihe).

## 2026-09-29 (später) – Header-CTA dezenter, gescrollter Header nochmal ~10% kleiner
- 14 Stilvarianten für den Header-Button als Vorschau gebaut (Screenshots im Chat), Jascha hat Variante 7 gewählt: dünner 1px-Rand (`rgba(255,255,255,0.6)`), transparenter Hintergrund, statt bisher teal-gefüllt – nur `header.nav .nav-inner > .btn`, alle anderen `.btn-primary`-Vorkommen (CTA-Bänder, Formular) bleiben teal.
- Zusätzlich nach dem Scrollen (`.scrolled`) nochmal kleiner: Button-Padding 10px/19px + Schrift 13px (statt 11px/21px), `--header-pad-v-scrolled` 9px (vorher 10px), `--logo-h-scrolled`/`--logo-h-scrolled-mobile` 29px/22px (vorher 32px/24px) – Gesamthöhe gescrollter Header ca. 10% kleiner als zuvor.

## 2026-09-29 – Header-Breite an Seiteninhalt angeglichen, Empfehlungs-Kacheln mit Mercedes-Verlauf
- `header.nav .nav-inner` hatte einen eigenen, fest auf 48px gesetzten Seitenrand (Kommentar „bewusst NICHT auf 120px“) – dadurch war der Header-Inhalt (Logo, Nav, Button) breiter als der Seiteninhalt darunter (`--side-pad` 120px). Override entfernt, `.nav-inner` ist auch `.wrap` und fällt jetzt auf denselben `--side-pad` zurück – Header und Inhalt schließen auf allen Breakpoints bündig ab.
- `.case-tile`-Verlauf (Startseite „Unsere Empfehlungen") nach Vorbild mercedes-benz.de „Unsere Empfehlungen" angepasst: Foto geht jetzt unten in einen durchgehend schwarzen Textblock über (`linear-gradient(to top, #000 25%, rgba(0,0,0,0) 55%)`) statt in einen durchgängig halbtransparenten Verlauf (vorher max. 85% Deckkraft). Bewusst nur `.case-tile` geändert, `.vp-card` („Mehr als nur gut verpackt") bleibt unverändert – kürzere Icon-Kacheln, andere Bildmotive, kein Mercedes-Vorbild dafür genannt.

## 2026-09-28 (später, 6) – Header: Logo-Bildfehler behoben, CTA-Button verkleinert
- `logo-dont-panic.jpg` (zweizeiliges Logo „don't panic / die case-manufaktur GmbH“) hatte einen ins Bild einexportierten weißen Rand rechts (14px) und unten (10px) von Canvas 1512×420 – sichtbar als weißer Strich hinter „panic“ und Unterstreichung unter dem Untertitel. War kein CSS-Bug (Scroll-Logo-Crossfade selbst fehlerfrei, geprüft durch Ausblenden des Compact-Bildes), sondern im JPEG selbst. Bild auf den tatsächlichen Inhalt zugeschnitten (1499×411, reines Re-Crop ohne Skalierung/Neugestaltung), Kompakt-Logo war bereits fehlerfrei.
- Header-CTA „Dein Projekt anfragen“ wirkte neben dem kompakten Logo zu dominant: Innenabstand nur im Header von 14px/26px auf 11px/21px reduziert (~20%, wie gewünscht), sitewide `.btn` (CTA-Bänder, Anrufen-Button, Formular-Button etc.) unverändert gelassen, da nur der Header gemeint war.

## 2026-09-28 – Hover-Zoom auf Produktkarten-Bildern
- `.product-card-img img`: Hover-Zoom (`scale(1.05)`, `transition transform .35s ease`) ergänzt – identischer Effekt wie bei „Unsere Empfehlungen" (`.cases-grid`) auf der Startseite, kein neuer Design-Wert. Wirkt auf Produkte-Hub-Karten und die Silent-Rack-Highlight-Kacheln, da beide dieselbe Komponente nutzen.

## 2026-09-28 (später, 5) – Silent Rack vollständig gebaut (Vorlage für Produktseiten)
- Produktbild-Fix + 7 Highlight-Kacheln aus PR #6 per Cherry-Pick übernommen (Branch war von vor dem Merge dieses PRs abgezweigt).
- Fehlende Abschnitte ergänzt: Story, Use-Case, Breadcrumb (Ziel-Hub `/19-zoll-racks/` fehlt noch, `#`-Platzhalter), Konfigurierbarkeit + eigener CTA, Trust-Zeile, produkteigene FAQ (6 Fragen), Technische-Daten-Tabelle, Rating Stabilität/Gewicht als Balken (Wiederverwendung der Bauart-Komponente), Branchen-Tags (Wiederverwendung `.bauart-badge`), Kundenreferenz, Allgemeine FAQ, abschließendes CTA-Band, 3 Schema.org-Blöcke (BreadcrumbList, Product, FAQPage).
- Neuer Modifier `.data-table.spec-sheet` (normaler Zeilenumbruch statt `nowrap`, schmalere Label-Spalte) für Label/Wert-Tabellen mit langen Textwerten, plus 48px-Seitenrand bei ≤900px (wie Bauart-Row) statt der sonst 120px `--side-pad` – sonst überläuft die Tabelle auf schmalen Viewports.
- Bugfix während des Baus: Rating-Balken initial durch `max-width:320px` auf einem bereits gepolsterten `.text-section`-Container auf 80px Breite zusammengequetscht (Padding + max-width addierten sich) – behoben durch inneren Wrapper.
- H1 weicht weiterhin vom Content ab („Silent Rack“ statt vollem Content-H1) – bewusst nicht geändert, da Design-Entscheidung nötig (C14).
- Dient jetzt als vollständige Vorlage für die 9 weiteren Produktseiten (siehe `docs/design-system.md`).


## 2026-09-28 (später, 4) – Verbleibende Seiten angelegt (C12)
- `/engineering/materialien/`, `/manufaktur/fertigung/`, `/manufaktur/ueber-uns/`, `/standards-werte/`, `/standards-werte/ppwr-stellungnahme/` neu gebaut – reine Wiederverwendung bestehender Komponenten (`page-head`, `page-intro`, `text-section`, `hub-grid`, `breadcrumb`, FAQ, CTA-band), keine neuen Design-Werte.
- Standards & Werte + PPWR-Stellungnahme mit `Schema: WebPage` (statt `BreadcrumbList`) gemäß Content-Vorgabe. Standards & Werte endet wie im Content vorgegeben mit „Qualität statt Zertifikate“ + wiederverwendetem Trust-Element (kein FAQ/CTA, nicht vorgesehen).
- Über uns: 4 volle Team-Bios (Jascha, Oleg, Ole, Michaela) als Kacheln, Hero-Bild weiterhin Platzhalter (B3).
- Manufaktur-Hub- und Engineering-Hub-Links (Fertigung, Über uns, Standards & Werte, Materialien) von `#`-Platzhaltern auf die neuen Seiten umgestellt.
- Bugfix: Links in `.text-section` waren durch den globalen `a{color:inherit}`-Reset unsichtbar (grauer Fließtext-Ton) – jetzt `--teal`, unterstrichen.
- C12 vollständig erledigt (Bauart war bereits zuvor fertig).


## 2026-09-28 (später, 3) – Bauart-Seite neu angelegt
- `/engineering/flightcase-bauart/` neu gebaut: 11 Bauarten (alternierende Bild/Text-Zeile, Balken-Rating für Stabilität/Gewicht, „Light“/„Ultra Light“-Badge) + 5 „Weitere Leistungen“ als einfache Kacheln, Breadcrumb, BreadcrumbList-Schema, Teaser zu Formen, Allgemeine FAQ, CTA-Band.
- Design mit Jascha per Mockup abgestimmt (3 Iterationen: Grundlayout, Mobile-Anpassung Schriftgröße/Seitenrand, Reihenfolge der Elemente gestapelt). Neue Komponente `.bauart-row` in `assets/css/components.css` und `docs/design-system.md` dokumentiert.
- Formen-Teaser und Engineering-Hub-Kachel „Bauart“ von `#`-Platzhalter auf die neue Seite verlinkt.
- Alle 11 Bilder als „Bild folgt“-Platzhalter (siehe B1 in `docs/open-decisions.md`); C1, C4, C11, C12 (Bauart-Teil) entsprechend aktualisiert.


## 2026-09-28 (später, 2) – Content-Änderungen aus dem Merge vom 2026-09-28 umgesetzt
- **Startseite:** Title-Tag/Meta Description eingesetzt (TODOs entfernt).
- **Kontaktseite:** Platzhalter über dem Formular durch den finalen Einleitungssatz ersetzt (`.intro-headline`/`.intro-headline-sub`, neue Sub-Zeile analog „Ruf uns an.“-Block), Title/Meta eingesetzt.
- **Engineering-Hauptseite:** Title/Meta, Intro über dem Prozess, 5 Alt-Texte der Prozess-Icons, 4 Hub-Kacheln (Bauart/Formen/Maße/Materialien, vorher nur 2), Allgemeine FAQ, CTA-Band, BreadcrumbList-Schema + sichtbare Breadcrumb ergänzt; fehlendes `main.js`-Script nachgetragen.
- **Formen-Seite:** Title/Meta, Breadcrumb (sichtbar + Schema), Allgemeine FAQ vor dem CTA ergänzt; Teaser-Text „Typen“ → „Bauarten“ korrigiert (Content-Stand nachgezogen).
- **Maße-Seite neu angelegt** (`/engineering/masse/`): alle Inhalte aus `content/engineering/masse.md` (Truckmaß-Standards, 19-Zoll-Einbauten, Türbreiten, Fahrzeug-Innenhöhen, Seecontainer, Luftfracht als Tabellen/Listen), Breadcrumb, Allgemeine FAQ, CTA-Band, BreadcrumbList-Schema. Neue Komponenten `.data-table`/`.text-section` (nur bestehende Tokens); Tabellen scrollen auf schmalen Viewports horizontal statt umzubrechen.
- **`/rechtliches` neu angelegt:** Übersichtsseite (Links zu Impressum/Datenschutz, 4 AGB-PDF-Downloads mit Dateigröße) sowie `/rechtliches/impressum/` und `/rechtliches/datenschutz/` mit sichtbar markiertem Platzhaltertext. Footer und mobiles Menü auf allen 11 Seiten von `#`/Platzhalter auf echte Links umgestellt. Alte-URL-Redirects (`/impressum/`, `/datenschutzerklaerung/`, `/agb-2/`) als HTML-Kommentar dokumentiert – GitHub Pages kann keine echten Server-Redirects.
- **Neue Breadcrumb-Komponente** (`.breadcrumb`) auf Engineering-Hauptseite, Formen, Maße, Rechtliches, Impressum, Datenschutz.
- **Empfehlungs-Kacheln:** Case-Tile-Komponente (Bild + Text-Overlay per CSS, aus vorherigem Branch übernommen) mit den neuen textfreien Fotos getestet – `object-fit:cover` gleicht die unterschiedlichen Seitenverhältnisse (0,86–1,50) automatisch aus, kein Zuschnitt-Fix nötig. Branchen-Tag/Titel/Story-Text bleiben Platzhalter (Datenfelder in `content/startseite.md` noch nicht ausgefüllt, siehe B5).
- **Nicht umgesetzt (HTML-Seiten fehlen komplett):** Bauart, Materialien, Fertigung, Über uns, Standards & Werte/PPWR-Stellungnahme – daher auch die dort vorgesehenen FAQ-Einbindungen und der bauart-seitige Formen-Teaser nicht möglich. Bauart zusätzlich mit eigener Design-Entscheidung (Rating-Skala, „Light“-Suffix-Styling). Siehe C12 in `docs/open-decisions.md`.
- `docs/open-decisions.md`, `docs/design-system.md`, `docs/seitenstruktur.md` entsprechend aktualisiert.

## 2026-09-28 (8) – Rechtsbereich auf Platzhalter und PDF-Downloads umgestellt
- Entscheidung Jascha: Impressum und Datenschutzerklärung enthalten vorerst nur Platzhalter; die übernommenen Live-Texte samt Prüfpunkten wurden wieder entfernt.
- AGB bekommen keine eigenen Seiten. Die vier Fassungen liegen als PDF unter `assets/downloads/` und werden auf `/rechtliches` als Download-Links geführt (Linktext = Dateiname).
- `content/rechtliches/agb-*.md` gelöscht, `index.md`, `docs/seitenstruktur.md` und C8 entsprechend angepasst.

## 2026-09-28 (7) – Rechtstexte übernommen (C8)
- Neuer Ordner `content/rechtliches/` mit Impressum, Datenschutzerklärung, 4 AGB-Varianten (Geschäftskunden, Verbraucher, eBay, Business Customers EN) und einer Übersichtsdatei `index.md` samt Redirect-Tabelle.
- Quellen: Impressum und Datenschutzerklärung als Text von Jascha (Live-Stand), AGB aus 4 PDFs. Texte wörtlich übernommen, nur Umbrüche/Absätze bereinigt; jede Datei trägt einen Rechtstext-Hinweis (nicht umformulieren).
- Prüfpunkte dokumentiert, nichts eigenständig geändert: Impressum ohne Handelsregister/HRB, unterschiedliche Geschäftsführer-Angaben, Aufsichtsrats-Zeile bei einer GmbH, `info@dont-panic.biz` vs. `@dp-case.de`, Firmierung „case-manufaktur“ vs. „Casemanufaktur“; Datenschutzerklärung beschreibt die alte WordPress-Seite (Borlabs, Google Analytics/Ads/Maps/reCAPTCHA, WP Statistics, Brevo, SolidWP, Zoom) und lässt Google Fonts offen.
- `docs/seitenstruktur.md` um die 7 Seiten ergänzt, C8 in `docs/open-decisions.md` aktualisiert.

## 2026-09-28 (6) – Empfehlungs-Bilder ohne Schrift ersetzt
- `assets/images/startseite/cases-broadcast-pult-workstation.jpg`, `cases-backstage-kaffeebar.jpg`, `cases-luftfahrt-schablonen-flightcase.jpg` durch neue Fotos ohne eingebrannte Schrift ersetzt (Beschriftung kommt künftig per CSS). Dateinamen unverändert, daher keine HTML-Änderung nötig.
- Seitenverhältnisse weichen von den alten Dateien ab (Pult 0,86 statt 0,66; Kaffeebar 1,50 statt 1,39; Schablonen-Koffer 1,33 statt 0,66) – Kachel-Zuschnitt in `components.css` prüfen.
- Als JPEG gespeichert, längste Kante max. 1600 px, 39–169 KB.

## 2026-09-28 (später) – Case-Tile-Komponente umgesetzt
- `.cases-grid`-Kacheln auf „Unsere Empfehlungen“ (Startseite) von reinem `<img>` auf `.case-tile` umgestellt: Bild + Verlauf + Branchen-Tag oben links + Titel/Text unten links weiß, identische Werte wie `.vp-card` (kein neuer Design-Wert).
- Platzhalter-Text (`[Branche]`/`[Case-Titel]`/`[Story-Text folgt]`) bis echter Text via `content/startseite.md` vorliegt. Alte Fotos bleiben vorerst drauf (enthalten noch eingebrannten Text) – werden über den Content-Chat gegen textfreie Fotos getauscht (B5).

## 2026-09-28 – Case-Tile-Anforderungen dokumentiert (Unsere Empfehlungen)
- Beim Testen einer geplanten Text-Overlay-Kachel für „Unsere Empfehlungen“ festgestellt: die 3 aktuellen Fotos enthalten Titel/Text/Tag/Button bereits als Pixel eingebrannt, nicht als Foto+Text getrennt nutzbar.
- Anforderungen an Ersatzfotos + Komponenten-Entwurf (Case-Tile) in `docs/design-system.md` dokumentiert: was per CSS automatisiert wird (Verlauf, Radius, Hover-Zoom, Textposition) vs. was in der Bildbearbeitung passieren muss (Bildausschnitt, Seitenverhältnis, CI-Farbe in Reflexionen, ggf. Freisteller).
- Neuer Punkt B5 in `docs/open-decisions.md`. Noch nicht umgesetzt – wartet auf textfreie Fotos.

## 2026-09-28 (5) – Allgemeine FAQ überall einbinden (C6)
- Entscheidung Jascha: Markenneutraler Versand bleibt in der Allgemeinen FAQ, keine Dopplung in Engineering-Schritt 05.
- `content/_global/faq-allgemein.md`: Einbindungsliste erweitert – die Allgemeine FAQ kommt zusätzlich auf die 6 Seiten ohne eigene FAQ (Bauart, Formen, Maße, Fertigung, Über uns, PPWR-Stellungnahme), jeweils am Seitenende vor dem CTA.
- Entsprechender Hinweis in diesen 6 Content-Dateien ergänzt. C6 erledigt.
- `content/engineering/flightcase-formen.md`: frühere Festlegung „KEIN FAQ auf dieser Seite“ aufgehoben (Entscheidung Jascha, 2026-09-28) – keine eigene FAQ, aber der zentrale Baustein wird eingebunden.

## 2026-09-28 (4) – Alt-Texte der Prozess-Icons
- `content/engineering/index.md`: Alt-Texte für die 5 Prozess-Icons ergänzt (im HTML bisher `alt=""`, offener Rest aus T5). Beschreibungen entsprechen dem dokumentierten Icon-Set.

## 2026-09-28 (3) – Startseite: Title-Tag und Meta Description
- `content/startseite.md`: Title-Tag („Flightcases nach Maß aus Hamburg | don't panic“) und Meta Description (148 Zeichen) ergänzt; beide fehlten seit der Migration (TODO in `index.html`, siehe T5).
- H1 bleibt die bestehende Hero-Überschrift („Dein Case. / Unsere Präzision. / Gemeinsam entwickelt.“), im HTML bereits korrekt als `<h1>` ausgezeichnet.

## 2026-09-28 (2) – Engineering-Hauptseite vervollständigt
- `content/engineering/index.md`: Title-Tag, Meta Description (156 Zeichen), Breadcrumb, H1 „Engineering“, Intro über dem Prozess, CTA und BreadcrumbList-Schema/Canonical ergänzt (Title/Meta fehlten bisher, siehe T5).
- `docs/open-decisions.md`: C3 und C7 auf „erledigt“ gesetzt (Content steht, nur HTML-Umsetzung offen); neuer Punkt C11 für die Engineering-Hauptseite.
- Intro nimmt die Leitfrage „Was soll dein Case können?“ und die Flexibilitäts-Aussage der Live-Seite sinngemäß auf (Vorlage Jascha), nicht wörtlich. Der Live-Text „Qualität“ wird nicht übernommen: dafür gibt es bereits „Qualität statt Zertifikate“ auf `content/standards-werte/index.md`.

## 2026-09-28 – Maße-Seite: 19-Zoll-Einbauten
- `content/engineering/masse.md`: Abschnitt „19-Zoll-Einbauten“ ergänzt (19 Zoll = 482,6 mm, ca. 450 mm lichte Breite, Normen, 1 HE = 44,45 mm, halbe 19 Zoll nicht einheitlich genormt: 9,5 bzw. 10 Zoll). Grundlage für das geplante HE/U/RU-Glossar (C9).

## 2026-09-27 (Abend, 9) – Engineering-Hauptseite: Hub-Kacheln (C2)
- Entscheidung Jascha: Engineering-Hauptseite bleibt (5-Schritte-Prozess + Kacheln zu den Unterseiten).
- `content/engineering/index.md`: 4 Kacheln (Bauart, Formen, Maße, Materialien) mit Überschrift, Text, Button nach dem Prozess ergänzt; Überschriften greifen die Title-Tags der Unterseiten auf. C2 erledigt.

## 2026-09-27 (Abend, 8) – Teaser Bauart → Formen → Maße (C1)
- `content/engineering/flightcase-bauart.md`: Teaser zur Formen-Seite vor dem CTA ergänzt („Deckel, Tür oder beides?“). C1 erledigt.
- `content/engineering/flightcase-formen.md`: Teaser führt weiterhin zur Bauart-Seite (Entscheidung Jascha); veralteter Begriff „Typen“ durch „Bauarten“ ersetzt (Text und Button).

## 2026-09-27 (Abend, 7) – Schema.org und SEO-Felder Bauart/Formen (C4)
- `content/engineering/flightcase-bauart.md` und `flightcase-formen.md`: Title-Tag, Meta Description (156/150 Zeichen; mehrwertorientiert nach Website-Muster „Keyword – Nutzen“, Auswahl Jascha aus je 10 Vorschlägen), Breadcrumb, BreadcrumbList-Schema, Canonical/Robots ergänzt (fehlten bisher). Maße-Seite bereits unter C3 erledigt. C4 erledigt.

## 2026-09-27 (Abend, 6) – Maße-Seite vervollständigt (C3)
- `content/engineering/masse.md`: Title-Tag, Meta Description (155 Zeichen), Breadcrumb, H1 „Flightcase Maße“, Intro-Satz, CTA (Muster Bauart-Seite), BreadcrumbList-Schema, Canonical/Robots ergänzt. Tabellen/Listen unverändert.
- Zwei Datenkonflikte in den bestehenden Werten gefunden und als C10 in `docs/open-decisions.md` eingetragen (nicht geändert).
- 1/2 EU-/US-Truckmaß von 400 auf 600 Breite korrigiert (Entscheidung Jascha: 1/2 = immer 600er Breite; Fehler stammte bereits aus der Master-MD).
- Einheit der Truckmaß-Tabelle von „cm“ auf „mm“ korrigiert (Werte waren mm).
- Title/Meta der Maße-Seite mehrwertorientiert neu (Vorgabe Jascha: Case muss zu Inhalt und Transportweg passen – Tür, Sprinter, Flugzeug).
- Maße-Seite ergänzt (Recherche): LKW-Innenhöhen (12 t, Sattelauflieger, Megatrailer/Jumbo), Seecontainer 20/40 Fuß inkl. High Cube (Innenmaß, Türöffnung), Luftfracht-Richtwerte (LD3, Unterdeck, PMC Hauptdeck). Quellen intern in der Datei vermerkt. Alle Werte als kleinster bekannter Wert mit „min.“ angegeben (Entscheidung Jascha).
- Türbreiten-Abschnitt neu gefasst: Standard 860/885 mm (ca. 825 mm licht), schmalere Bestandstüren 735 und 610 mm, Truckmaß-Cases mit 600er Seite voran, gewerblicher Bereich oft breiter. Die bisherige Aussage „mindestens 90 cm“ entfällt. C10 erledigt.

## 2026-09-27 (Abend, 5) – Kompakt-Logo für Scroll-Header vorbereitet
- `assets/images/global/logo-dont-panic-kompakt.jpg` neu: Zuschnitt aus `logo-dont-panic.jpg`, nur Wortmarke „don't panic“ ohne Zeile „die case-manufaktur GmbH“ (1499 × 279 px, schwarzer Hintergrund wie das Original). Noch nicht eingebunden; Umsetzung (großes Logo oben, Kompakt-Logo beim Scrollen, Header nach Vorbild mercedes-benz.de) durch Claude Code.

## 2026-09-27 – Header: Scroll-Logo und Maße nach Vorbild mercedes-benz.de
- Logo wechselt beim Scrollen (>24px) von zweizeilig/groß (Scroll-Position 0: 60px Desktop / 45px Mobile) auf einzeilig/kompakt (32px Desktop / 24px Mobile, `logo-dont-panic-kompakt.jpg`, neu aus dem Standard-Logo zugeschnitten). Crossfade per Opacity (`--transition-fast`, 220ms), kein `src`-Tausch, damit kein Flackern/Sprung.
- Header-Innenabstand oben/unten wechselt von 18px auf 10px beim Scrollen; Gesamthöhe gescrollt = 76px (gemessene mercedes-benz.de-Headerhöhe, Desktop 1920px). Nav-Schrift, Button und ihre Größe bleiben in beiden Zuständen unverändert (Vorgabe Jascha) – Mercedes selbst hat keinen kompakten Scroll-Zustand, nur „oben“ oder „ganz ausgeblendet"; Vollständig-Ausblenden wurde bewusst verworfen (Navigation/CTA sollen beim Scrollen erreichbar bleiben).
- Alt-Text in beiden Logo-Zuständen vereinheitlicht: „don't panic – die case-manufaktur GmbH" (vorher nur „don't panic").
- Neue Tokens in `tokens.css`: `--header-pad-v`, `--header-pad-v-scrolled`, `--logo-h-top`, `--logo-h-top-mobile`, `--logo-h-scrolled`, `--logo-h-scrolled-mobile`, `--transition-fast`.
- `assets/js/main.js`: Scroll-Listener setzt Klasse `.scrolled` auf `header.nav`; jetzt auch auf `engineering/index.html` und `manufaktur/index.html` eingebunden (fehlte bisher, da diese Seiten kein Telefon-Popup haben).
- Bugfix während der Umsetzung: `header.nav .logo` hat als absolut positionierter Container ohne Eigenbreite (nur absolut positionierte Bild-Kinder) eine Shrink-to-fit-Breite von 0; die globale Regel `img{max-width:100%}` hat die Logo-Bilder dadurch auf 0px Breite gequetscht. Fix: `max-width:none` für die Logo-Bilder.

## 2026-09-27 (Abend, 4) – Kontaktseite: Einleitungssatz, Title, Meta (C7)
- `content/kontakt.md`: Einleitung über dem Kontaktformular ergänzt („Lass uns dein perfektes Case entwickeln.“ / „Ein paar Angaben zu deinem Projekt genügen für den Start.“, Variante C, Entscheidung Jascha). Aufbau analog „Ruf uns an.“.
- `content/kontakt.md`: Title-Tag („Kontakt – dein Case, egal wie speziell | don't panic“, greift CTA-Headline auf) und Meta Description (160 Zeichen) neu, da bisher fehlend (TODO im HTML).
- `docs/open-decisions.md`: C7 von „offen“ auf „Aufgabe“ (Umsetzung durch Claude Code).

## 2026-09-27 – Silent-Rack: Produktbild-Fix + Highlight-Kacheln
- `.product-hero`: festes `aspect-ratio` (2045/867) samt `overflow:hidden` entfernt. Das hochformatige Silent-Rack-Foto (996×1241) wurde dadurch bei 80% Breite oben/unten stark beschnitten. Jetzt per `max-height` (65vh Desktop / 50vh ≤900px) + `object-fit:contain` begrenzt – Case ist auf jeder Auflösung komplett sichtbar.
- Neue Sektion „Highlights" unterhalb des Produkt-Heros: 7 Kacheln (Macrolon Sichttür, Geräuschlose Luftführung, Silent-Aktivbelüftung, Schalldämmung innen, Kabelführung mit Bürstenleiste, Geölt Natur Birke, Kantengriff), Texte aus `content/19-zoll-racks/silent-rack.md` übernommen. Layout per bestehendem `.product-grid`/`.product-card` (keine neuen CSS-Werte). Alle 7 Kacheln zeigen vorerst dasselbe Platzhalterfoto (Hero-Bild) – echte Highlight-Fotos fehlen noch (siehe B5 in `open-decisions.md`).

## 2026-09-27 (Abend, 3) – Content-Änderungen per Pull Request
- `docs/project-rules.md`: Content-Änderungen laufen wie technische Änderungen über Aufgaben-Branch und Pull Request statt über manuellen Datei-Upload auf `main` (Entscheidung Jascha). Workflow-Schritte 1–2 und Rolle „Jascha“ angepasst.

## 2026-09-27 (Abend, 2) – Workflow an Versionierung angepasst
- `docs/project-rules.md`, Abschnitt „Workflow“, Schritt 3: statt `git pull` + Commit jetzt Aufgaben-Branch von `main`, technische Umsetzung, Prüfung, Pull Request; Jascha prüft und merged. Passend zur neuen Versionierungsregel.

## 2026-09-27 (Abend) – Versionierung auf Cloud-Sessions umgestellt
- `docs/project-rules.md`, Abschnitt „Versionierung“: Claude Code arbeitet in Cloud-Sessions (claude.ai/code), ein eigener Branch pro Aufgabe, Übernahme nach `main` per Pull Request nach Prüfung und Freigabe. Fester `development`-Branch und optionale `feature/…`-Branches entfallen.

## 2026-09-27 (später) – Archiv-Ordner zusammengeführt
- `archiv-original-html/` und `docs/archiv/master-content-backup.md` zu einem gemeinsamen `archiv/`-Ordner auf Repo-Root-Ebene zusammengeführt: `archiv/original-html/` und `archiv/master-content-backup.md`. `docs/archiv/` (inkl. `desktop.ini`) entfernt.
- Verweise in `docs/project-rules.md` und `docs/open-decisions.md` (T1) angepasst.

## 2026-09-27 – Original-HTML-Archiv aus docs/ herausgelöst
- `docs/archiv/original-html/` (62 MB, 7 Dateien) nach `archiv-original-html/` (Repo-Root) verschoben, da zu groß/irrelevant für Claude Chat, das `docs/` für Content-Arbeit durchsieht. `docs/archiv/master-content-backup.md` bleibt an Ort und Stelle.
- Mercedes-Benz-Kontaktformular als Vorbild: Label-im-Feld-Muster, Radiobuttons untereinander, Absenden-Button rechtsbündig, Eingabefeld-Radius sitewide 8px → 14px, Einleitungssatz-Platzhalter (Text fehlt, siehe C7).
- Silent-Rack-Produktbild durch freigestelltes Foto (Alphakanal) ersetzt, Produktbild-Container skaliert jetzt proportional statt bei fester Maximalbreite zu stoppen.
- Allgemeine FAQ auf der Kontaktseite ergänzt.
- Bugfix: `*/` in einem CSS-Kommentar hatte seit dem T3-Commit die Kontaktseiten-Randlosigkeit gekippt, wodurch die Seite auf Mobile/Tablet zu schmal war.

## 2026-09-26 – Technische Migration (T1–T6)
- 7 Original-HTML-Dateien (je 8–11 MB, Base64-Bilder/-Schrift, `claude.ai/artifact/…`-Links) nach `docs/archiv/original-html/` archiviert; Original unverändert.
- Alle Base64-Assets per Skript extrahiert und dedupliziert (20 eindeutige Dateien aus 73 Einbettungen): Schrift nach `assets/fonts/`, Bilder nach `assets/images/{global,startseite,produkte/SOAZMA0010,engineering,engineering/formen}/` mit sprechenden Dateinamen. Fotos mit Pillow auf ca. 200–400 KB komprimiert (Hero: 179 KB trotz Erlaubnis für mehr). Zwei Logo-Varianten gefunden; Standard (`index.html`) auf allen Seiten vereinheitlicht, Variante 2 nur dokumentiert.
- Gemeinsames CSS aus `index.html` nach `assets/css/tokens.css` (Variablen), `base.css` (Grundlayout) und `components.css` (Komponenten, inkl. seitenspezifischer Abschnitte mit Kommentar) ausgelagert; JS nach `assets/js/main.js`. Telefon-Popup, `.btn-call` und `.cta-tile` für alle Seiten verfügbar gemacht. Prozess-Kacheln (`.step-top`) einheitlich mit Radius 24px + Verlauf `#000 → #112f2f` (Backlog T6).
- 7 Seiten nach Ziel-URL-Struktur angelegt (`index.html`, `produkte/`, `19-zoll-racks/silent-rack/`, `engineering/`, `engineering/flightcase-formen/`, `manufaktur/`, `kontakt/`), Header/Footer kopiert, alle Links relativ; Links zu noch fehlenden Seiten als `href="#"` mit `<!-- TODO: Seite fehlt -->` markiert.
- SEO-Technik: `noindex, nofollow` auf allen Seiten; Title/Meta Description aus `content/` übernommen (fehlen bei Startseite, Engineering-Hub, Formen-Seite, Kontakt – siehe Bericht).
- Desktop/Tablet/Mobile, Links, Bilder und Telefon-Popup lokal geprüft (Playwright/Chromium); Seitengröße je Seite sank von 8–11 MB auf 4–12 KB HTML zzgl. 2,1 MB gemeinsamer Assets.
- Content-Abgleich HTML vs. `content/` durchgeführt; mehrere Kürzungen/Abweichungen gefunden (Details im Migrationsbericht), nichts eigenständig geändert.

## 2026-09-25 – Migration nach GitHub
- Master-MD (Stand 2026-09-25) in einzelne Content-Dateien unter `content/` aufgeteilt; Ordner = URL. Texte unverändert übernommen, außer:
  - Materialien-URLs von `/materialien/…` auf `/engineering/materialien/…` umgestellt (Entscheidung Jascha), inkl. Links, Canonicals, Schema-URLs.
  - Breadcrumb Plattenmaterialien-Hub korrigiert: „Start > Materialien“ → „Start > Engineering > Materialien > Plattenmaterialien“ (gemäß Regel „volle Navigationstiefe“).
  - Engineering-Hauptseite: veralteter Hinweis „Typen-Seite noch nicht geschrieben“ entfernt; Reihenfolge der Unterseiten ergänzt.
- Entscheidungen: Design-Basis = `index.html`; Typen-Seite heißt `/engineering/flightcase-bauart` (`flightcase-typen` entfällt); Reihenfolge Engineering-Unterseiten Bauart → Formen → Maße → Materialien; Header/Footer je Seite kopiert (später seitenweise unterschiedliche Header möglich); Bilder werden auf ca. 200–400 KB komprimiert, Originale bleiben lokal; öffentliches Repository, GitHub Pages mit `noindex`.
- Master-MD nach `docs/archiv/master-content-backup.md` verschoben, wird nicht weiter gepflegt. ELEMENTOR-Content-Datei gilt als veraltet (nicht im Repository) und wird am Ende aus `content/` neu erzeugt.
- Checkliste: Regel zu Materialien-URLs angepasst.

## 2026-09-25 (später) – Typen-Seite finalisiert, zentrales FAQ-Element
- Typen-Seite (Flightcase Bauart) komplett: Intro-Satz und CTA ergänzt.
- Neues zentrales Element „Allgemeine FAQ“ (White-Label/neutraler Versand); erscheint auf allen 10 Produktseiten (nach individueller FAQ), Engineering-Hauptseite und am Ende der Kontaktseite. Zentral dokumentiert, an den Stellen nur referenziert.
- Checkliste bereinigt (veraltete „offen“-Einträge).

## 2026-09-25 – Abgleich mit 1A_Master_Plan.xlsx
- Neu: Typen-Seite (11 Bauart-Stufen + 5 weitere Leistungen), Formen-Seite (21 Bauformen in 6 Gruppen), Maße-Seite (Truckmaß, Türbreiten, Fahrzeug-Innenhöhen).
- Materialien-Matrix erweitert (Multiplex 15mm, 3 HPL-Verbundmaterialien, HDF 3mm+HPL, Superspezial); Farboptionen Multiplex und PP-Hohlkammer ergänzt.
- Bestätigt (Excel veraltet): PP-Hohlkammer HD 11mm = „Greifgummi-Muster“; UltraFlite nur „Schwarz/Carbon-Anmutung glatt“.
- Startseite: Abschnitt „Unsere Empfehlungen“ (umbenannt), 2 neue Kacheln (Weitere Produkte, Engineering), 5-Schritte-Prozess auf Engineering-Hauptseite verschoben, Kontaktformular final.
- Produkte-Hub: Intro „Individuelle Lösungen für jede Herausforderung“, Header-Bild Case-Tower, Prozess-Teaser „So wird dein Case wirklich passend“, Alt-Texte für 10 Produktkarten, Branchen-Tag „Mobile IT“ korrigiert.
- Bewusst nicht übernommen: Excel-Blätter Oberflächen, Kante, Ecke, Schließprofil, Bildqualität (interne Dropdown-Listen).
