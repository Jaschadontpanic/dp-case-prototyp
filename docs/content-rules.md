# Content-Regeln (für Claude Chat)

Gilt für alle Texte in `content/`. Claude Chat ändert Content, nicht Design/Technik.

## Grundregeln
- Tonalität: Du-Ansprache in Fließtexten; Highlights neutral formuliert (kein „du“).
- Nur bestätigte Fakten. Bei Datenkonflikten (Schneideplan vs. 1A_Master_Plan) nie selbst entscheiden, immer nachfragen. Schneideplan/Kalkulationstabelle ist primäre Quelle.
- Kundennamen nur mit Freigabe („Kunde nennen: x“). Keine erfundenen Zitate. Kundenbewertungen nie zitieren oder paraphrasieren, nur verlinken.
- Artikelnummer nie in Title/H1.
- „Catches“ immer als „Butterfly“ übersetzen.
- Keine Referenzgespräche/Kundenkontakt-Angebote in FAQ.
- Standard-Textbausteine (Trust-Zeile, Lieferzeit-, Preis-, Besichtigungs-FAQ, CTA) unverändert aus `docs/produktseiten-vorlage.md` übernehmen.
- Allgemeine FAQ liegt zentral in `content/_global/faq-allgemein.md` und wird nur referenziert, nie kopiert.

## Aufbau einer Content-Datei
- Kopfbereich (Frontmatter): seite, url, content-status, quelle, stand.
- Danach Title-Tag, Meta Description, Breadcrumb, H1, Seitentexte, FAQ, Schema.org – wie in den bestehenden Dateien.
- Interne Links immer als echte Ziel-URL (z. B. `/engineering/materialien/plattenmaterialien/multiplex`).
- Jede Änderung zusätzlich in `docs/changelog.md` eintragen.

## Produktseiten
Vollständiges Schema: `docs/produktseiten-vorlage.md`. Pflichtprüfung vor „fertig“: `docs/content-checklist.md`.

## SEO / Keywords
- Synonym-/Homonym-Check pro Seite (z. B. „Ultraleicht“ nie alleinstehend als Keyword).
- Title-Tag ≠ H1, Meta Description 150–160 Zeichen.

## Übernommene Lernpunkte (Master-MD Abschnitt 19 + Session 2)
## 19. WICHTIGE KORREKTUREN/LERNPUNKTE AUS DIESEM CHAT
- DiGiCo SD9/SD12 haben bereits Standard-Cases am Markt – aus "Lücken-Geräte"-Liste entfernt.
- 19"-Rack-Equipment passt in jeden Standard-Rack – braucht daher meist kein Custom-Case; Fokus auf Nicht-19"-Geräte für die "kein Standard-Case vorhanden"-Strategie.
- Siebdruckplatte ≠ generisches Synonym für phenolharzbeschichtetes Multiplex; wird bei dp-case nur für Sonderkonstruktionen (Podeste/Treppen), nicht für Flightcases verwendet.
- "Correx" ist ein falscher Synonym-Kandidat für PP-Hohlkammer im Casebau-Kontext (Werbetafel-Assoziation).
- "Ultraleicht" ist im Deutschen durch Ultraleichtflugzeuge stark homonym belastet – nie alleinstehend als Keyword verwenden.
- kg/m²-Wert für UltraFlite 9,7mm: dp-case hat 2,0 kg/m² nachgewogen (abweichend von Penns eigener Marketingangabe 1,6 kg/m²) – verifizierter eigener Wert gilt.


## PROZESS-LERNPUNKTE AUS SESSION 2 (4 Produkte gebaut)
- Kalkulationstabelle/Schneideplan ist meist verlaesslicher als Produkte-Tab (1A_Master_Plan) -
  bei allen 4 Produkten mind. 1 Abweichung gefunden (Masse, Stueckzahlen, Material, Farbe).
  Ab sofort: Schneideplan ZUERST anfordern, Produkte-Tab nur ergaenzend.
- Bei Datenkonflikt: NIE selbst entscheiden, immer nachfragen.
- ALLE Branchen-Spalten pruefen (auch mit Zahlen statt "x"), nicht nur die auffaelligsten.
- Highlight-Format: IMMER Titel + Text getrennt, Text MUSS Kundenmehrwert enthalten (nicht nur
  Feature), neutral formuliert (kein "du"), kurz und praegnant.
- Reine Beschlag-Stueckzahlen (Butterfly, Ecken, Scharniere) NICHT auf der Website zeigen, nur
  intern erfassen. Ausnahme: Griffe-Anzahl bleibt (Handling-relevant), Verschluss-TYP/-Faehigkeit
  bleibt (z.B. "abschliessbar", "vorhaengeschlosstauglich").
- "Mittel" bei Griffen weglassen (Standardgroesse, kein Unterscheidungsmerkmal mehr).
- Rating (Gewicht/Stabilitaet) immer als visuelle Skala zeigen, nie als nackte Zahl.
- Interne Bauart-Namen (N-Case, Ultra Protect etc.) sind Kategorisierung fuer uns, nicht
  automatisch ein Kundennutzen-Argument - im Zweifel auf griffige Produktbeschreibung setzen
  (z.B. "klein, leicht, handlich" statt "N-Case").
- Bildnamen-Schema: [ARTIKELNUMMER]_[NUMMER]_[KATEGORIE]_[KURZBESCHREIBUNG], ohne Dateiendung.
  00 = Hero, 10-19 = Highlights, 20 = Ergaenzungsbild. Sobald Highlights final stehen, IMMER
  sofort die Bildnamen-Liste mit ausgeben.
- Bildkorrekturen/Retusche-Feedback wird in separater Datei dp-case_bildkorrekturen.csv gesammelt
  (Artikelnummer, Bildname, Kritik) - laufend fortgefuehrt.

