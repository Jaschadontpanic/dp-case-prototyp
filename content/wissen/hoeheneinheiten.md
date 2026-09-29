---
seite: Höheneinheiten (HE, U, RU)
url: /wissen/hoeheneinheiten
content-status: Content fertig (Freigabe Jascha ausstehend)
quelle: Neu 2026-09-29 (C9); Basis: content/engineering/masse.md, FAQ Silent Rack
stand: 2026-09-29
---

# Höheneinheiten (HE, U, RU)

**Title-Tag:** HE, U und RU – die Höheneinheit im 19-Zoll-Rack erklärt
**Meta Description:** Was bedeutet HE bei Racks? Höheneinheit, Unit und Rack Unit meinen dasselbe: 44,45 mm. So rechnest du die passende Rackgröße für dein Equipment aus.
**Breadcrumb:** Start > Wissen > Höheneinheiten
**Robots:** index, follow

**H1:** HE, U und RU – Höheneinheiten im Rack

**Intro:** Wer ein Rack plant, stolpert über HE, U und RU. Alle drei meinen dasselbe Maß – hier steht, wie du damit rechnest.

## Seitentext

**Eine Höheneinheit ist immer gleich groß**
HE (Höheneinheit), U (Unit) und RU (Rack Unit) sind nur unterschiedliche Namen für dasselbe Maß: 1 HE = 1,75 Zoll = 44,45 mm. Ein Gerät mit 3 HE ist also 133,35 mm hoch. Auf Geräten und in Datenblättern steht meist die Kurzform, zum Beispiel „2 HE“ oder „2U“.

**Die Breite ist genormt, die Tiefe nicht**
19 Zoll bezeichnet die Breite der Frontplatte: 482,6 mm. Zwischen den Rackschienen bleiben rund 450 mm für das Gerät selbst. Diese Maße sind in EIA-310, IEC 60297 und DIN 41494 festgelegt. Die Tiefe ist dagegen nicht genormt – sie hängt vom Gerät ab und bestimmt, wie tief dein Rack werden muss.

**Halbe Breite: hier wird es unübersichtlich**
Viele kompakte Geräte sind nur halb so breit. Das ist aber nicht einheitlich geregelt. Manche Hersteller bauen 9,5 Zoll (die halbe 19-Zoll-Breite), andere 10 Zoll (254 mm, oft Mini-Rack genannt). Wer zwei halbe Geräte nebeneinander setzen will, sollte deshalb vorher die tatsächlichen Maße prüfen. Wir klären das bei der Planung mit dir.

**So rechnest du dein Rack aus**
1. Höheneinheiten aller Geräte addieren.
2. Reserve für Kabelführung, Belüftung und spätere Ergänzungen einplanen – eine bis zwei HE mehr sind selten verkehrt.
3. Tiefstes Gerät bestimmt die Tiefe, inklusive Steckern und Kabelbögen auf der Rückseite.
4. Einbaurahmen und Dämpfung kommen zur Außenhöhe des Cases hinzu. Was am Ende herauskommt, sollte zum Transportweg passen – siehe Flightcase Maße (`/engineering/masse`).

**Beispiel**
Ein Mischpult mit 4 HE, zwei Endstufen mit je 2 HE und eine Stromleiste mit 1 HE ergeben 9 HE. Mit einer HE Reserve planst du ein 10-HE-Rack.

## Interne Links
- `/engineering/masse` (Flightcase Maße, Abschnitt 19-Zoll-Einbauten)
- `/19-zoll-racks/silent-rack`
- `/19-zoll-racks/schwing-rack`

**+ Allgemeine FAQ (`_global/faq-allgemein.md`) am Seitenende einbinden, vor dem finalen CTA.**

**CTA am Seitenende (identisch zum Muster der Bauart-/Maße-Seite):**
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
    {"@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://dp-case.de/wissen"},
    {"@type": "ListItem", "position": 3, "name": "Höheneinheiten", "item": "https://dp-case.de/wissen/hoeheneinheiten"}
  ]
}
```

**Canonical/Robots:**
```html
<link rel="canonical" href="https://dp-case.de/wissen/hoeheneinheiten" />
<meta name="robots" content="index, follow" />
```

## Quellen (intern, nicht auf der Website)
19 Zoll, Lochabstand, lichte Breite, Normen: de.wikipedia.org/wiki/19-Zoll-Rack. Halbe Breite (9,5/10 Zoll, nicht einheitlich genormt): Angabe Jascha, 2026-09-27.
