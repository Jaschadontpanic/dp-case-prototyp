# Übergabe an die Entwicklerin

*Wird zum Projektabschluss vervollständigt.*

Der Prototyp ist eine visuelle und inhaltliche Referenz, keine Produktionsplattform.

## Wo steht was
- Seitenstruktur, URLs, Status: `docs/seitenstruktur.md`
- Texte je Seite inkl. Title, Meta, Breadcrumb, FAQ, Schema.org: `content/`
- Design (Farben, Schriften, Größen, Komponenten, Breakpoints): `docs/design-system.md`
- Live-Vorschau: https://jaschadontpanic.github.io/dp-case-prototyp/

## Bekannte offene Punkte (vorläufige Lösungen)
- **Produkte-Header-Bild (Case-Turm):** `assets/images/global/case-turm.jpg` ist im `.hub-header` auf `/produkte`, in der Startseiten-Kachel „Weitere Produkte entdecken" und auf `/engineering/masse` im Einsatz, damit die Seiten nicht mehr mit Platzhalter laufen – ist aber nur die erste, ungestylte Version. Das Foto ist heller/zentrierter als die anderen beiden Header-Fotos (Engineering/Manufaktur, dunkle Werkstatt-Aufnahmen) und braucht vor dem Launch noch Bildbearbeitung (Bildausschnitt/Crop fürs Hochformat auf Mobil, evtl. dunklere Retusche oder stärkerer Verlauf für besseren Textkontrast). Als Übergangslösung wurde dafür sitewide ein `text-shadow` auf `.hub-header h1`/`p.desc` ergänzt (siehe `docs/design-system.md`) – das bleibt auch nach dem Bild-Update sinnvoll, ersetzt aber keine richtige Bildbearbeitung.

## Zu ergänzen
- Komponenten-Übersicht mit Screenshots
- Interaktionen und Animationen
- Formular-Logik (Pflichtfelder, Versand)
- Bildzuordnung und Bildformate
- Redirects der alten Live-Seite
- Technische Besonderheiten
