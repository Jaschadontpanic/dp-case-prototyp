# Projektregeln – Website-Prototyp dp-case.de

## Ziel
Funktionierender, visuell und inhaltlich vollständiger Prototyp als exakte Vorlage für die finale Umsetzung durch die Webentwicklerin (voraussichtlich WordPress/Elementor, Hosting IONOS). Keine Produktionsplattform.

Priorität: korrekter Content → überzeugendes Design → funktionierende UX → responsive Darstellung → klare Seitenstruktur → nachvollziehbare Technik → Übergabefähigkeit.

## Adressen
- Repository: https://github.com/Jaschadontpanic/dp-case-prototyp (öffentlich)
- Vorschau (GitHub Pages): https://jaschadontpanic.github.io/dp-case-prototyp/

## Rollen
| Wer | Zuständig für | Darf nicht |
|---|---|---|
| Claude Chat | Texte, SEO, Meta-Daten, CTAs, Alt-Texte, Content-Struktur, Checkliste, Changelog (`content/`, `docs/`) | HTML/CSS/JS ändern |
| Claude Code | HTML, CSS, JS, Layout, Komponenten, Responsive, Navigation, technische SEO-Umsetzung, Performance | Content umformulieren, kürzen, ergänzen (siehe Schutzregel) |
| Jascha | Entscheidungen, Freigaben, Upload von Content-Dateien auf GitHub | – |
| Entwicklerin | finale Umsetzung auf Basis des Prototyps | – |

## Schutzregel Content
Claude Code verändert niemals eigenständig Marketingtexte, Überschriften/H1, CTAs, SEO-Texte oder Keywords. Erfordert eine technische Änderung eine inhaltliche, meldet Claude Code das und fragt nach.

## Schutzregel Design
Claude Chat verändert kein technisches Design. Probleme bei der Darstellung von Content werden an Jascha/Claude Code gemeldet.

## Workflow
1. Content-Änderung im Claude Chat → Chat liefert die geänderte Datei aus `content/` bzw. `docs/`.
2. Jascha lädt die Datei auf github.com hoch (Add file → Upload files, gleicher Ordner, Commit).
3. Claude Code: `git pull`, setzt die Änderung technisch um, prüft, committet.
4. Kontrolle über die Vorschau-Adresse.

## Versionierung
- `main` = stabile Version (wird von GitHub Pages angezeigt).
- `development` = laufende Arbeit von Claude Code (wird eingerichtet, sobald Claude Code startet).
- Größere Umbauten optional in eigenen Branches (`feature/…`).
- Vor Übernahme nach `main`: Prüfung Desktop/Tablet/Mobile, Navigation, Links, Bilder, JS, Formulare, keine unbeabsichtigten Content-Änderungen.

## Entscheidungen
Grundsätzliche Entscheidungen (Struktur, Design, Architektur) trifft Jascha. Offene Punkte stehen in `docs/open-decisions.md`. Kleine technische Entscheidungen ohne Auswirkung auf Content, Designkonzept oder Architektur darf Claude Code selbst treffen.

## Dateien
- `content/` – eine Datei pro Seite, Ordner = URL
- `docs/` – Regeln, Design-System, Seitenstruktur, Checkliste, Changelog, offene Entscheidungen
- `docs/archiv/` – Master-MD (Stand 2026-09-25) als Referenz, wird nicht weiter gepflegt
