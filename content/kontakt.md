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
`page-head` entfällt, die Seite startet mit der H1.

**Reihenfolge der Seite:** H1 → Anruf-Block + Besuchs-Block → Formular → Info-Blöcke →
Team-Kacheln → Allgemeine FAQ.

**H1 (ersetzt den bisherigen Seitenkopf):**
Lass uns dein perfektes Case entwickeln.

Keine Unterzeile. Der frühere Satz „Ein paar Angaben zu deinem Projekt genügen für den Start.“
entfällt (Entscheidung Jascha, 2026-09-29) – die Aussage steckt bereits im Aufklappbereich
„Optional, aber hilfreich“ und im Feld „Kurzbeschreibung“.

## Anruf-Block
Steht NICHT mehr ganz oben, sondern direkt unter der H1 – also zwischen H1 und Formular
(Entscheidung Jascha, 2026-09-29).

Ohne Überschrift „Ruf uns an.“ (Entscheidung Jascha, 2026-09-29) – nur diese drei Zeilen:

> Du telefonierst lieber oder brauchst sofort eine Lösung?
> 040 721 76 92 →
> Mo.–Fr. 9–18 Uhr

## Besuchs-Block (neu, 2026-09-29)
Zweiter kurzer Block neben bzw. über dem Anruf-Block. Layout-Vorschlag an Claude Code:
auf Desktop nebeneinander (Anruf links, Besuch rechts) oder direkt darüber, auf Mobil
gestapelt. Gleiche Optik wie der Anruf-Block, damit beide als Paar gelesen werden.

> Gern auch bei uns – komm vorbei in Hamburg-Bergedorf.
> Anfahrt ansehen →

Der Link „Anfahrt ansehen“ führt auf eine Karte mit unserer Adresse:
`https://www.google.com/maps/search/?api=1&query=Kurt-A.-K%C3%B6rber-Chaussee+73%2C+21033+Hamburg`
(öffnet in neuem Tab). Offen: ob stattdessen eine eingebettete Karte gewünscht ist – das wäre
datenschutzrelevant (Google Maps, siehe Datenschutzerklärung) und eine Design-Entscheidung.

## Kontaktformular
Keine Überschrift „Kontaktformular“ – das Formular erklärt sich selbst.

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
- Maße / Gewicht / Stückzahl des Equipments
  Platzhalter (2 Zeilen, branchenneutral – bewusst kein Veranstaltungs-Equipment, damit sich auch Industrie- und Technikkunden angesprochen fühlen):
  „z. B.
  1x Steuerschrank, 60 x 40 x 30 cm, ca. 12 kg
  4x Ersatzteil-Baugruppe, 80 x 30 x 30 cm, je ca. 8 kg“
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

**Überschrift:** So findest du uns
don't panic – die case-manufaktur GmbH
Kurt-A.-Körber-Chaussee 73
21033 Hamburg

(Umbenannt von „Komm vorbei“, weil diese Formulierung jetzt im Besuchs-Block oben steht.)

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
1. Seitenkopf „Kontakt“ entfällt; der bisherige Einleitungssatz wird zur H1. Die Unterzeile „Ein paar Angaben zu deinem Projekt genügen für den Start.“ entfällt ersatzlos.
2. Überschrift „Kontaktformular“ entfällt.
2a. Anruf-Block wandert von ganz oben direkt unter die H1; Überschrift „Ruf uns an.“ entfällt, der Einleitungssatz lautet jetzt „Du telefonierst lieber oder brauchst sofort eine Lösung?“.
3. Zwischenüberschriften neu: „Persönliche Angaben“ → „Wer du bist“, „Deine Kontaktdaten“ → „Wie wir dich erreichen“, „Deine Anfrage“ → „Worum es geht“. „Projektrahmen“ bleibt.
4. „Deine Case Details“ entfällt ersatzlos; die Felder stehen direkt unter „Optional, aber hilfreich“.
5. Neuer zweiter Datei-Upload direkt unter der Checkbox „Es gibt bereits ein Case …“ für Fotos des vorhandenen Cases. Der bisherige Upload unter „Projektrahmen“ bleibt unverändert.
6. Info-Blöcke: „Kontakt“ → „Lieber direkt?“ (nur E-Mail), „Adresse“ → „Komm vorbei“. Telefon/Zeiten entfallen (standen dreifach auf der Seite).
7. Datenschutz-Checkbox neu formuliert und mit Link auf `/rechtliches/datenschutz`.
8. Tippfehler im Zitat von Jascha: „Dein Projekt“ → „dein Projekt“.
9. Team-Kacheln: Button „Mehr erfahren“ je Kachel und Michaela-Zusatz ergänzen (fehlten gegenüber der Master-MD).
10. (2026-09-29, Nachtrag) Neuer Besuchs-Block neben/über dem Anruf-Block: „Gern auch bei uns – komm vorbei in Hamburg-Bergedorf.“ + Link „Anfahrt ansehen“ auf eine Karte. Der untere Info-Block heißt dadurch „So findest du uns“ statt „Komm vorbei“.
11. (2026-09-29, Nachtrag) Platzhalter im Feld „Maße / Gewicht / Stückzahl des Equipments“ austauschen: statt Mischpult/Lautsprecher jetzt Steuerschrank/Ersatzteil-Baugruppe – branchenneutral statt Veranstaltungstechnik.
