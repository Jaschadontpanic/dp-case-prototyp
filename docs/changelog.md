# Changelog

Neueste Einträge oben. Jede Content- oder Strukturänderung hier kurz eintragen (Datum, was, warum).

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
