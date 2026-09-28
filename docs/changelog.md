# Changelog

Neueste Einträge oben. Jede Content- oder Strukturänderung hier kurz eintragen (Datum, was, warum).

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

## 2026-09-27 (Abend, 4) – Kontaktseite: Einleitungssatz, Title, Meta (C7)
- `content/kontakt.md`: Einleitung über dem Kontaktformular ergänzt („Lass uns dein perfektes Case entwickeln.“ / „Ein paar Angaben zu deinem Projekt genügen für den Start.“, Variante C, Entscheidung Jascha). Aufbau analog „Ruf uns an.“.
- `content/kontakt.md`: Title-Tag („Kontakt – dein Case, egal wie speziell | don't panic“, greift CTA-Headline auf) und Meta Description (160 Zeichen) neu, da bisher fehlend (TODO im HTML).
- `docs/open-decisions.md`: C7 von „offen“ auf „Aufgabe“ (Umsetzung durch Claude Code).

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
