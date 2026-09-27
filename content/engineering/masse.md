---
seite: Maße
url: /engineering/masse
content-status: Content fertig (Freigabe Jascha ausstehend)
quelle: Master-MD, Abschnitt 17
stand: 2026-09-27
---

### MASSE (Unterseite, aus Truckmaß-Tabellenblatt) - final komplett
URL: /engineering/masse

**Title-Tag:** Flightcase Maße – Truckmaß, Türbreiten und Innenhöhen
**Meta Description:** Flightcase Maße nach Truckmaß, Türbreite und Innenhöhe planen: EU- und US-Truckmaße, Türstandards und Fahrzeughöhen im Überblick. Jetzt dein Case anfragen.
**Breadcrumb:** Start > Engineering > Maße

**H1:** Flightcase Maße

**Intro-Satz:** Vom LKW bis zur Tür – wir planen dein Case so, dass es auf dem ganzen Weg passt.
Header-Bild: Case-Tower (gleiches Bild wie Homepage-Kachel "Weitere Produkte" und
Produkte-Hub-Header)

**Truckmass-Standards (B x T in cm):**
| Format | Mass |
|---|---|
| EU-Truckmass | 1200 x 600 |
| 2/3 EU-Truckmass | 800 x 600 |
| 1/2 EU-Truckmass | 400 x 600 |
| US-Truckmass | 1200 x 800 |
| 2/3 US-Truckmass | 800 x 800 |
| 1/2 US-Truckmass | 400 x 800 |

**Tuerbreiten:**
- 860/885 mm: heutiger Standard fuer Wohnraeume in Deutschland/Europa
- Mindestlichte Breite: Tueren muessen mindestens 90 cm Durchgangsbreite haben
- Cases unter 800 mm Breite passen durch fast jede gewerblich genutzte Tuer

**Fahrzeug-Innenhoehen:**
- Auto, Standarddach (H1/H2): ca. 1,70-1,90 m
- Auto, Hochdach (H2/H3): ca. 1,90-2,10 m
- Auto, Kofferaufbau (3,5t): teilweise bis 2,20 m
- 7,5-Tonnen-LKW (Spedition/Koffer/Plane): 2,30-2,40 m

**CTA am Seitenende (identisch zum Muster der Bauart-Seite):**
> **Dein Case, egal wie speziell.**
> Ob Standard oder kniffelig – wir finden gemeinsam eine Loesung, schneller und besser als du
> denkst. Melde dich unverbindlich, per E-Mail oder Anruf.

**BreadcrumbList-Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Start", "item": "https://dp-case.de"},
    {"@type": "ListItem", "position": 2, "name": "Engineering", "item": "https://dp-case.de/engineering"},
    {"@type": "ListItem", "position": 3, "name": "Maße", "item": "https://dp-case.de/engineering/masse"}
  ]
}
```

**Canonical/Robots:**
```html
<link rel="canonical" href="https://dp-case.de/engineering/masse" />
<meta name="robots" content="index, follow" />
```

**Offene Datenfragen (vor Veröffentlichung klären, siehe C10):**
- 1/2 EU-/US-Truckmaß mit 400 cm Breite: rechnerisch wäre 1/2 von 1200 = 600, 400 entspricht 1/3.
- Türbreiten: „Standard 860/885 mm“ und „mindestens 90 cm Durchgangsbreite“ widersprechen sich.

---
