---
seite: Kontakt
url: /kontakt
content-status: Content fertig (Freigabe Jascha ausstehend)
quelle: Master-MD, Abschnitt 14 (Formular + Info-Block); Überarbeitung Überschriften/Formular 2026-09-29
stand: 2026-09-29
---

# Kontakt

**Title-Tag:** Kontakt – dein Case, egal wie speziell | don't panic
**Meta Description:** Frag dein individuelles Flightcase bei don't panic in Hamburg an: per Formular, Telefon oder E-Mail. Ein paar Angaben zu deinem Projekt genügen. Jetzt anfragen.
**Breadcrumb:** Start > Kontakt

## Seitenkopf
Keine eigene Überschrift „Kontakt“ mehr (Entscheidung Jascha, 2026-09-29). Der Seitenkopf-Block
`page-head` entfällt, die Seite startet mit dem Anruf-Block.

**H1 (über dem Formular, ersetzt den bisherigen Einleitungssatz):**
Lass uns dein perfektes Case entwickeln.

**Zeile darunter:**
Ein paar Angaben zu deinem Projekt genügen für den Start.

## Anruf-Block (über dem Formular, unverändert)
> **Ruf uns an.**
> Du brauchst schnell eine Antwort oder sprichst lieber persönlich? Ruf uns doch einfach an.
> 040 721 76 92 →
> Mo.–Fr. 9–18 Uhr

## Kontaktformular
Keine Überschrift „Kontaktformular“ mehr – das Formular erklärt sich selbst.

### Pflichtteil

**Zwischenüberschrift:** Wer du bist
- Name *
- Firma

**Zwischenüberschrift:** Wie wir dich erreichen
- E-Mail *
- Telefon

**Zwischenüberschrift:** Worum es geht
- Worum geht's? * (Auswahl: Flightcase / Sonderbau / Reparatur)
- Kurzbeschreibung *

### Aufklappbereich „Optional, aber hilfreich“
Die Case-Angaben stehen direkt unter dem Aufklapp-Titel. Die frühere Zwischenüberschrift
„Deine Case Details“ entfällt, der Aufklapp-Titel übernimmt ihre Rolle.

- Beanspruchung (Kofferraum-Transport / Spedition / Flugtransport / Touring / Interner Transport)
- Maße / Gewicht / Stückzahl des Equipments (Platzhalter: „z. B. 2x Mischpult, 60 x 40 x 30 cm, ca. 12 kg“)
- Was ist dir am wichtigsten? (Mehrfachauswahl: Smartes Handling / Maximaler Schutz / Clevere Details / Minimales Gewicht)
- Optik / Branding (Platzhalter: „z. B. Firmenfarbe, Logo, Corporate Design“)
- Checkbox: Es gibt bereits ein Case, das als Vorlage dienen kann
- **Datei-Upload (neu, direkt unter der Checkbox):** Fotos des vorhandenen Cases
  Hinweistext: „Fotos von allen Seiten helfen uns am meisten.“

**Zwischenüberschrift:** Projektrahmen
- Zieltermin
- Budget-Rahmen (Platzhalter: „optional – hilft uns, realistisch zu planen“)
- Datei-Upload – Hinweistext: „Alles was du hast: Bilder, Skizzen, 3D-Files“
- Wie bist du auf uns aufmerksam geworden? (Empfehlung / Suchmaschinen / Social Media / Messe / Case gesehen / Ich kannte euch schon)

### Vor dem Button
- Pflicht-Checkbox: Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung meiner Anfrage einverstanden. *
  („Datenschutzerklärung“ als Link auf `/rechtliches/datenschutz`)
- Button: Anfrage senden

## Info-Blöcke unter dem Formular
Telefonnummer und Zeiten stehen bereits im Anruf-Block und im Telefon-Popup und entfallen hier.

**Überschrift:** Lieber direkt?
info@dp-case.de

**Überschrift:** Komm vorbei
don't panic – die case-manufaktur GmbH
Kurt-A.-Körber-Chaussee 73
21033 Hamburg

## Team-Kacheln
4 Kacheln mit Bild, Name, Rolle, Zitat und Button „Mehr erfahren“ (verlinkt auf `/manufaktur/ueber-uns`).

| Name | Rolle | Zitat |
|---|---|---|
| Jascha | Kundenversteher & Betriebsleiter | „Ich höre zu, bis ich dein Projekt wirklich verstanden habe.“ |
| Oleg | Entwickler & Geschäftsführer | „Kein Case ist zu komplex – wir finden den Weg.“ |
| Ole | Konstrukteur & Projektleiter | „Je kniffliger die Konstruktion, desto lieber.“ |
| Michaela | Buchhaltung & Rechnungswesen | „Am Ende muss alles auf den Cent genau aufgehen.“ |

**Zusatz nach den Kacheln:**
Fragen zur Buchhaltung? Melde dich gern direkt bei Michaela.

## Seitenende
**+ Allgemeine FAQ (`_global/faq-allgemein.md`) am Seitenende, Überschrift „Häufige Fragen“.**

## Änderungen 2026-09-29 (Übersicht für Claude Code)
1. Seitenkopf „Kontakt“ entfällt; der bisherige Einleitungssatz wird zur H1.
2. Überschrift „Kontaktformular“ entfällt.
3. Zwischenüberschriften neu: „Persönliche Angaben“ → „Wer du bist“, „Deine Kontaktdaten“ → „Wie wir dich erreichen“, „Deine Anfrage“ → „Worum es geht“. „Projektrahmen“ bleibt.
4. „Deine Case Details“ entfällt ersatzlos; die Felder stehen direkt unter „Optional, aber hilfreich“.
5. Neuer zweiter Datei-Upload direkt unter der Checkbox „Es gibt bereits ein Case …“ für Fotos des vorhandenen Cases. Der bisherige Upload unter „Projektrahmen“ bleibt unverändert.
6. Info-Blöcke: „Kontakt“ → „Lieber direkt?“ (nur E-Mail), „Adresse“ → „Komm vorbei“. Telefon/Zeiten entfallen (standen dreifach auf der Seite).
7. Datenschutz-Checkbox neu formuliert und mit Link auf `/rechtliches/datenschutz`.
8. Tippfehler im Zitat von Jascha: „Dein Projekt“ → „dein Projekt“.
9. Team-Kacheln: Button „Mehr erfahren“ je Kachel und Michaela-Zusatz ergänzen (fehlten gegenüber der Master-MD).
