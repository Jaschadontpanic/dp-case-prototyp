/* Kundennamen-Blocksatz mit Groessenstaffelung im Trust-Bereich der Startseite (#clientList).
   Nur fuer index.html - andere Seiten/Komponenten (z.B. die .trust-list/.tier-Struktur auf
   standards-werte/index.html) bleiben unberuehrt, dieses Script wird dort nicht eingebunden.

   Ohne dieses Script ist #clientList bereits per CSS (.client-list { display:flex; flex-wrap:
   wrap; justify-content:space-between }) ein echter, mehrzeiliger Blocksatz inkl. letzter Zeile,
   nur ohne die Groessenstaffelung (die braucht bekannte Zeilengrenzen, also JS) - Progressive
   Enhancement, der Text ist in jedem Fall vollstaendig im HTML und fuer SEO lesbar.

   Technik: Da jede Zeile eine ANDERE Schriftgroesse hat (groesste oben, kleinste unten - siehe
   ROW_FONT_SIZES, muss exakt mit den :nth-child-Regeln in components.css uebereinstimmen),
   kann die Zeilenzuordnung nicht wie bei einheitlicher Groesse per "flach rendern und offsetTop
   auslesen" ermittelt werden (Henne-Ei-Problem: die Groesse einer Zeile haengt von ihrem Index
   ab, der wiederum erst nach dem Packen feststeht). Stattdessen wird mit einem <canvas>
   (measureText) pro Zeile greedy gepackt: so viele Namen wie bei der fuer diese Zeile gueltigen
   Schriftgroesse hineinpassen, dann naechste (kleinere) Groesse fuer die naechste Zeile. */
(function () {
  'use strict';

  // Muss exakt mit den .client-row:nth-child(n)-Regeln in components.css uebereinstimmen
  // (1:1 von den alten .t1-.t8-Werten uebernommen, keine neuen Design-Werte).
  var ROW_FONT_SIZES = [32, 26, 22, 19, 14, 14, 13, 13];
  var ROW_GAP = 6; // .client-list { row-gap: 6px } - Abstand ZWISCHEN Zeilen, fuer die Hoehenrechnung

  // Schwellwert "letzte Zeile muss vor dem Strecken zu mindestens X% gefuellt sein".
  var MIN_LAST_LINE_FILL = 0.75;

  // Ab dieser Breite gilt eine Seite als "Handy" - dort zusaetzlich zur normalen
  // Blocksatz-Korrektur so viele Namen vom Listenende weglassen, bis der Abschnitt nicht
  // hoeher als der sichtbare Bereich ist (s. fitMobileHeight).
  var MOBILE_BREAKPOINT_PX = 600;
  var MOBILE_BOTTOM_MARGIN_PX = 24;

  var RESIZE_DEBOUNCE_MS = 150;

  var list = document.getElementById('clientList');
  if (!list) return;

  var originalNames = Array.prototype.map.call(
    list.querySelectorAll('.client-name'),
    function (el) { return el.textContent; }
  );
  var allIndices = originalNames.map(function (_, i) { return i; });
  if (!originalNames.length) return;

  function fontSizeForRow(rowIndex) {
    return ROW_FONT_SIZES[Math.min(rowIndex, ROW_FONT_SIZES.length - 1)];
  }

  // ---- Messen (Canvas statt DOM-Reflow, da pro Zeile eine andere Groesse gemessen wird und
  // fuer die Mobil-Trunkierung ggf. viele Kandidaten-Laengen durchprobiert werden). ----
  var measureCanvas = document.createElement('canvas');
  var measureCtx = measureCanvas.getContext('2d');

  function getFontInfo() {
    var probe = document.createElement('div');
    probe.className = 'client-row';
    probe.style.cssText = 'position:absolute;visibility:hidden;left:-9999px;top:-9999px;';
    document.body.appendChild(probe);
    var cs = getComputedStyle(probe);
    var info = { family: cs.fontFamily, weight: cs.fontWeight };
    document.body.removeChild(probe);
    return info;
  }

  var sepWidthCache = {};
  function sepWidth(fontSize, fontInfo) {
    var key = fontSize;
    if (!(key in sepWidthCache)) {
      measureCtx.font = fontInfo.weight + ' ' + fontSize + 'px ' + fontInfo.family;
      sepWidthCache[key] = measureCtx.measureText(' ·').width;
    }
    return sepWidthCache[key];
  }

  function textWidth(text, fontSize, fontInfo) {
    measureCtx.font = fontInfo.weight + ' ' + fontSize + 'px ' + fontInfo.family;
    return measureCtx.measureText(text).width;
  }

  function rowWidthPx(origIndices, fontSize, fontInfo) {
    var used = 0;
    for (var i = 0; i < origIndices.length; i++) {
      var w = textWidth(originalNames[origIndices[i]], fontSize, fontInfo);
      used += (i === 0) ? w : (sepWidth(fontSize, fontInfo) + w);
    }
    return used;
  }

  // Tatsaechliche gerenderte Zeilenhoehe (OHNE Abstand zum naechsten Element) je Schriftgroesse -
  // per Mini-DOM-Probe gemessen statt eines geschaetzten line-height-Faktors, damit die
  // Mobil-Hoehenrechnung zur echten Darstellung passt. Pro Groesse nur einmal gemessen (Cache),
  // es gibt max. 8 verschiedene Groessen. Der Abstand ZWISCHEN Zeilen (row-gap, s.u.) wird
  // separat in totalHeight() addiert, nicht hier - sonst doppelt gezaehlt.
  var rowHeightCache = {};
  function rowHeightForSize(sizePx) {
    if (rowHeightCache[sizePx] != null) return rowHeightCache[sizePx];
    var probe = document.createElement('div');
    probe.className = 'client-row';
    probe.style.cssText = 'position:absolute;visibility:hidden;left:-9999px;top:-9999px;font-size:' + sizePx + 'px;';
    probe.textContent = 'X';
    document.body.appendChild(probe);
    var h = probe.offsetHeight;
    document.body.removeChild(probe);
    rowHeightCache[sizePx] = h;
    return h;
  }

  // ---- Packen ----
  // Zeile fuer Zeile, mit der fuer den jeweiligen Zeilenindex gueltigen Schriftgroesse:
  // 1) so viele Namen in Listenreihenfolge wie passen, 2) der Restplatz wird mit dem breitesten
  // noch passenden Namen aus der gesamten uebrigen Liste aufgefuellt (beliebig weit vorgezogen) -
  // dadurch kleinere Luecken im Blocksatz, vor allem auf schmalen Viewports. Ein einzelner Name
  // breiter als der Container bekommt trotzdem eine eigene Zeile (sonst Endlosschleife).
  function packRows(order, containerWidth, fontInfo) {
    var rows = [];
    var remaining = order.slice();
    while (remaining.length) {
      var fontSize = fontSizeForRow(rows.length);
      var sep = sepWidth(fontSize, fontInfo);
      var row = [];
      var used = 0;
      while (remaining.length) {
        var w = textWidth(originalNames[remaining[0]], fontSize, fontInfo);
        var candidateUsed = row.length === 0 ? w : used + sep + w;
        if (row.length > 0 && candidateUsed > containerWidth) break;
        row.push(remaining.shift());
        used = candidateUsed;
      }
      while (remaining.length) {
        var best = -1;
        var bestW = 0;
        for (var i = 0; i < remaining.length; i++) {
          var wi = textWidth(originalNames[remaining[i]], fontSize, fontInfo);
          if (used + sep + wi <= containerWidth && wi > bestW) { best = i; bestW = wi; }
        }
        if (best < 0) break;
        row.push(remaining.splice(best, 1)[0]);
        used += sep + bestW;
      }
      rows.push(row);
    }
    return rows;
  }

  function fillRatio(rows, containerWidth, fontInfo) {
    if (!rows.length) return 1;
    var lastRow = rows[rows.length - 1];
    var fontSize = fontSizeForRow(rows.length - 1);
    return rowWidthPx(lastRow, fontSize, fontInfo) / containerWidth;
  }

  function totalHeight(rows) {
    var h = 0;
    for (var i = 0; i < rows.length; i++) h += rowHeightForSize(fontSizeForRow(i));
    if (rows.length > 1) h += ROW_GAP * (rows.length - 1); // row-gap zwischen den Zeilen, s.o.
    return h;
  }

  function flatten(rows) {
    var order = [];
    rows.forEach(function (row) { order = order.concat(row); });
    return order;
  }

  // Verfuegbare Hoehe fuer die Namens-Zeilen, WENN der .trust-Abschnitt oben im Viewport steht
  // (window.innerHeight = echte Geraetehoehe, bewusst nicht auf eine konkrete iPhone-Pixelzahl
  // hartkodiert, damit es fuer jedes aktuelle/zukuenftige Geraet automatisch stimmt). Bewusst
  // NICHT der aktuelle Scroll-Abstand (list.getBoundingClientRect().top waere beim ersten
  // Laden, wenn der Abschnitt noch gar nicht im Bild ist, ein riesiger Wert und wuerde die
  // Liste faelschlich fast komplett leerraeumen) - stattdessen der feste Abstand INNERHALB des
  // .trust-Abschnitts von dessen Oberkante bis zur Listenspitze (H2 + Abstand), der ist
  // scroll-unabhaengig, weil beide Rects sich beim Scrollen gleich mitbewegen.
  function availableMobileHeight() {
    var section = list.closest('.trust');
    var localOffset = section
      ? list.getBoundingClientRect().top - section.getBoundingClientRect().top
      : 0;
    var available = window.innerHeight - localOffset - MOBILE_BOTTOM_MARGIN_PX;
    return Math.max(available, rowHeightForSize(fontSizeForRow(0)));
  }

  function compute() {
    var containerWidth = list.clientWidth || 1;
    var fontInfo = getFontInfo();
    var order = allIndices.slice();
    var rows = packRows(order, containerWidth, fontInfo);

    // 1) Umsortieren passiert unbegrenzt direkt beim Packen (packRows fuellt Restplatz mit passenden
    //    Namen aus der ganzen Liste auf, keine Positionsgrenze mehr, Jascha 2026-10-14).

    // 2) Wenn die letzte Zeile trotzdem zu leer bleibt: Namen vom Ende der Liste weglassen (ausblenden, nicht
    //    loeschen), bis die letzte Zeile die Mindestfuellung erreicht.
    var hiddenIndices = [];
    var safety = 0;
    while (rows.length >= 1 && fillRatio(rows, containerWidth, fontInfo) < MIN_LAST_LINE_FILL && order.length > 1 && safety < 20) {
      order = flatten(rows);
      hiddenIndices.push(order.pop());
      rows = packRows(order, containerWidth, fontInfo);
      safety++;
    }

    // 3) Nur auf Handy-Breiten: zusaetzlich so lange weitere Namen vom Listenende weglassen,
    //    bis der gesamte Namensblock in den sichtbaren Bereich passt (kein Scrollen "in" den
    //    Abschnitt hinein noetig, bevor man ihn ganz sieht).
    if (window.innerWidth <= MOBILE_BREAKPOINT_PX) {
      var available = availableMobileHeight();
      var safety2 = 0;
      while (rows.length >= 1 && totalHeight(rows) > available && order.length > 1 && safety2 < originalNames.length) {
        order = flatten(rows);
        hiddenIndices.push(order.pop());
        rows = packRows(order, containerWidth, fontInfo);
        safety2++;
      }
    }

    render(rows, hiddenIndices);
  }

  // Baut das finale Markup: ein .client-row je Zeile (Groesse/Farbe kommt per :nth-child aus
  // components.css), Trenner per CSS :not(:last-child) garantiert nie am Zeilenrand.
  function render(rows, hiddenIndices) {
    var frag = document.createDocumentFragment();
    rows.forEach(function (row) {
      var rowEl = document.createElement('div');
      rowEl.className = 'client-row';
      row.forEach(function (origIdx) {
        var span = document.createElement('span');
        span.className = 'client-name';
        span.textContent = originalNames[origIdx];
        rowEl.appendChild(span);
      });
      frag.appendChild(rowEl);
    });
    if (hiddenIndices.length) {
      var holder = document.createElement('div');
      holder.className = 'client-hidden';
      holder.hidden = true; // fuer alle ausgeblendet (auch Screenreader), nicht nur visuell
      hiddenIndices.forEach(function (origIdx) {
        var span = document.createElement('span');
        span.className = 'client-name';
        span.textContent = originalNames[origIdx];
        span.hidden = true;
        holder.appendChild(span);
      });
      frag.appendChild(holder);
    }
    list.innerHTML = '';
    list.appendChild(frag);
  }

  var resizeTimer = null;
  function scheduleCompute() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(compute, RESIZE_DEBOUNCE_MS);
  }

  compute();
  if (window.document && document.fonts && document.fonts.ready) {
    document.fonts.ready.then(compute);
  }
  window.addEventListener('resize', scheduleCompute);
})();
