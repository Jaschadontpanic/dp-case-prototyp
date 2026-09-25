# Code-Regeln (für Claude Code)

## Architektur
- Reines HTML/CSS/JS. Keine Frameworks, kein Build-System, keine Datenbank, kein CMS.
- Ordnerstruktur bildet die späteren echten URLs ab: `/engineering/flightcase-formen/` → `engineering/flightcase-formen/index.html`.
- Gemeinsames CSS in `assets/css/` (`tokens.css` = Variablen, `base.css` = Grundlayout, `components.css` = Komponenten). Seitenspezifisches CSS nur, wenn nötig, als eigener Abschnitt in `components.css` mit Kommentar.
- JS in `assets/js/main.js` (aktuell: Telefon-Popup).
- Header, Navigation und Footer werden in jede Seite kopiert (kein JS-Include). Grund: funktioniert auch lokal ohne Server; später sind seitenweise unterschiedliche Header geplant. Beim Ändern eines gemeinsamen Blocks alle Seiten anpassen und prüfen.

## Pfade (Pflicht)
- Die Vorschau liegt im Unterordner `/dp-case-prototyp/`. Deshalb **nur relative Links**: `../engineering/` statt `/engineering/`.
- Keine Links auf `claude.ai/artifact/...`.

## Design
- Maßgeblich ist `docs/design-system.md` (abgeleitet aus der ursprünglichen `index.html`). Keine neuen Farben, Schriftgrößen oder Abstände erfinden; nur vorhandene Variablen verwenden.
- Einzelne Elemente anderer Seiten (z. B. Prozess-Kacheln der Engineering-Seite) dürfen übernommen werden, nicht deren abweichendes Grundgerüst.

## Content
- Texte kommen aus `content/`. Nicht umformulieren, kürzen oder ergänzen (Schutzregel, siehe `docs/project-rules.md`).
- Fehlt Text für ein Element, Platzhalter sichtbar kennzeichnen und in `docs/open-decisions.md` melden.

## Bilder & Assets
- Keine Base64-Einbettung. Bilder als Dateien unter `assets/images/<bereich>/`.
- Web-Bilder komprimiert auf ca. 200–400 KB (Hero ggf. etwas mehr), Format JPG/WebP für Fotos, PNG/SVG für Grafiken mit Transparenz.
- Produktbilder nach Schema `[ARTIKELNUMMER]_[NUMMER]_[KATEGORIE]_[KURZBESCHREIBUNG]` (00 = Hero, 10–19 = Highlights, 20 = Ergänzung).
- Keine Originale/RAW-Dateien ins Repository.
- Schrift: `assets/fonts/clear-sans-bold.ttf`.

## SEO-Technik im Prototyp
- Jede Seite: `<title>` und `<meta name="description">` aus der Content-Datei.
- Jede Seite: `<meta name="robots" content="noindex, nofollow">` (Prototyp soll nicht in Suchmaschinen erscheinen; eine robots.txt wirkt im Unterordner nicht).
- Schema.org-Blöcke aus den Content-Dateien einbauen; URLs darin bleiben die finalen dp-case.de-Adressen.
- Alle Bilder mit Alt-Text aus der Content-Datei.

## Barrierefreiheit (Prototyp-Niveau)
- Alt-Texte, sinnvolle Überschriftenhierarchie, bedienbare Navigation ohne Hover-Zwang, ausreichender Kontrast.

## Arbeitsweise / Token-Effizienz
- Nur die für die Aufgabe relevanten Dateien lesen. Nicht bei jeder Änderung das gesamte Projekt analysieren.
- Bestehende Komponenten wiederverwenden.
- Nach Änderungen prüfen: Desktop/Tablet/Mobile, Links, Bilder, Konsole ohne Fehler. Kurze Zusammenfassung der Änderungen liefern.
