/* Kundennamen-Blocksatz im Trust-Bereich der Startseite (#clientList).
   Nur fuer index.html - andere Seiten/Komponenten (z.B. die .trust-list/.tier-Struktur auf
   standards-werte/index.html) bleiben unberuehrt, dieses Script wird dort nicht eingebunden.

   Ohne dieses Script ist #clientList bereits per CSS (.client-list { display:flex; flex-wrap:
   wrap; justify-content:space-between }) ein echter, mehrzeiliger Blocksatz inkl. letzter Zeile
   (Progressive Enhancement). Dieses Script ergaenzt nur die Feinheiten, die reines CSS nicht
   leisten kann:
   - letzte Zeile ggf. umsortieren/kuerzen, wenn sie sonst zu grosse Luecken haette
   - Trenner garantiert nie am Zeilenanfang/-ende (reines CSS kann das bei natuerlichem
     Zeilenumbruch nicht ausschliessen, siehe PR-Beschreibung)

   Technik: Namen werden unveraendert (gleiche Reihenfolge, gleicher Text) in #clientList
   flach gerendert, der Browser macht per CSS-Flexwrap den eigentlichen Zeilenumbruch - wir
   lesen per offsetTop nur aus, WELCHE Namen dabei auf welcher Zeile landen (kein eigenes
   Breitenmess-/Wrap-Modell noetig, garantiert pixelgenau zum echten Rendering). */
(function () {
  'use strict';

  // Schwellwert "letzte Zeile muss vor dem Strecken zu mindestens X% gefuellt sein" -
  // als Konstante angelegt, damit er leicht anpassbar ist.
  var MIN_LAST_LINE_FILL = 0.75;

  // "Ein Name darf um maximal 2 Positionen verschoben werden."
  var MAX_POSITION_SHIFT = 2;

  var RESIZE_DEBOUNCE_MS = 150;

  var list = document.getElementById('clientList');
  if (!list) return;

  // Kanonische Original-Reihenfolge einmalig aus dem Markup lesen - einzige Quelle der
  // Wahrheit fuer jede Neuberechnung (Namen werden nie geloescht, nur die Darstellung/
  // Reihenfolge/Sichtbarkeit aendert sich je nach Breite).
  var originalNames = Array.prototype.map.call(
    list.querySelectorAll('.client-name'),
    function (el) { return el.textContent; }
  );
  var allIndices = originalNames.map(function (_, i) { return i; });

  if (!originalNames.length) return;

  // Rendert die Namen in der gegebenen Reihenfolge FLACH (ein Flex-Container, kein
  // Row-Markup) - Grundlage fuer die offsetTop-Messung, s.o.
  function renderFlat(order) {
    var frag = document.createDocumentFragment();
    for (var i = 0; i < order.length; i++) {
      var span = document.createElement('span');
      span.className = 'client-name';
      span.textContent = originalNames[order[i]];
      frag.appendChild(span);
    }
    list.innerHTML = '';
    list.appendChild(frag);
    return list.querySelectorAll('.client-name');
  }

  // Liest nach dem Rendern aus, welche Namen (per offsetTop) auf derselben Zeile liegen.
  function measureRows(order) {
    var items = renderFlat(order);
    var rows = [];
    var currentTop = null;
    var currentRow = [];
    for (var i = 0; i < items.length; i++) {
      var top = items[i].offsetTop;
      if (currentTop === null || Math.abs(top - currentTop) > 1) {
        if (currentRow.length) rows.push(currentRow);
        currentRow = [];
        currentTop = top;
      }
      currentRow.push({ origIndex: order[i], el: items[i] });
    }
    if (currentRow.length) rows.push(currentRow);
    return rows;
  }

  // Fuellstand der letzten Zeile: Summe der tatsaechlich gerenderten Namensbreiten
  // (inkl. Trenner, der ist Teil des Textinhalts) im Verhaeltnis zur Containerbreite.
  function lastRowFillRatio(rows) {
    if (!rows.length) return 1;
    var lastRow = rows[rows.length - 1];
    var sum = 0;
    for (var i = 0; i < lastRow.length; i++) sum += lastRow[i].el.offsetWidth;
    var containerWidth = list.clientWidth || 1;
    return sum / containerWidth;
  }

  function orderFromRows(rows) {
    var order = [];
    rows.forEach(function (row) {
      row.forEach(function (item) { order.push(item.origIndex); });
    });
    return order;
  }

  // Groesste Verschiebung, die IRGENDEIN Name durch "order" gegenueber seiner
  // kanonischen Original-Position (origIndex === Index im Original-Array) erfaehrt.
  // Wird nach jedem Umsortierungsversuch tatsaechlich nachgemessen statt angenommen,
  // weil ein einzelner Zug durch Kaskadeneffekte beim Neu-Umbruch theoretisch auch
  // fruehere Zeilen verschieben kann (mehr als nur die betroffene Zeile).
  function maxPositionShift(order) {
    var max = 0;
    for (var newPos = 0; newPos < order.length; newPos++) {
      var shift = Math.abs(newPos - order[newPos]);
      if (shift > max) max = shift;
    }
    return max;
  }

  function compute() {
    var order = allIndices.slice();
    var rows = measureRows(order);

    // 1) Umsortieren im Rahmen von max. 2 Positionen: den letzten Namen der vorletzten
    //    Zeile ans Ende der Gesamtliste verschieben, damit er auf die letzte Zeile rutscht
    //    und sie sich dadurch mehr fuellt. Jeder Versuch wird NACH der Neuberechnung
    //    tatsaechlich geprueft (maxPositionShift) - erst dann uebernommen. Max. so viele
    //    Versuche wie MAX_POSITION_SHIFT, danach lieber Namen weglassen (Schritt 2).
    for (var attempt = 0; attempt < MAX_POSITION_SHIFT; attempt++) {
      if (rows.length < 2 || lastRowFillRatio(rows) >= MIN_LAST_LINE_FILL) break;
      var secondLast = rows[rows.length - 2];
      if (secondLast.length <= 1) break; // vorletzte Zeile darf nicht leer werden
      var movedOrigIdx = secondLast[secondLast.length - 1].origIndex;
      var candidate = orderFromRows(rows);
      var fromPos = candidate.indexOf(movedOrigIdx);
      candidate.splice(fromPos, 1);
      candidate.push(movedOrigIdx);
      if (maxPositionShift(candidate) > MAX_POSITION_SHIFT) break; // Grenze erreicht
      order = candidate;
      rows = measureRows(order);
    }

    // 2) Wenn das nicht reicht: Namen vom Ende der (ggf. schon umsortierten) Liste
    //    weglassen (ausblenden, nicht loeschen), bis die letzte Zeile die Mindestfuellung
    //    erreicht oder nur noch ein Name uebrig ist.
    var hiddenIndices = [];
    var safety = 0;
    while (rows.length >= 1 && lastRowFillRatio(rows) < MIN_LAST_LINE_FILL && order.length > 1 && safety < 20) {
      order = orderFromRows(rows);
      hiddenIndices.push(order.pop());
      rows = measureRows(order);
      safety++;
    }

    render(rows, hiddenIndices);
  }

  // Baut das finale Markup: ein .client-row je Zeile (gleiche Flex-Technik wie der
  // flache Vor-Zustand, aber pro Zeile fest statt browser-berechnet), dadurch ist der
  // Trenner (CSS :not(:last-child)::after) garantiert nie der erste/letzte sichtbare
  // Teil einer Zeile - er haengt immer an einem Namen, der nicht das letzte Element
  // SEINER Zeile ist.
  function render(rows, hiddenIndices) {
    var frag = document.createDocumentFragment();
    rows.forEach(function (row) {
      var rowEl = document.createElement('div');
      rowEl.className = 'client-row';
      row.forEach(function (item) {
        var span = document.createElement('span');
        span.className = 'client-name';
        span.textContent = originalNames[item.origIndex];
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

  // Initial (DOM bereits geparst, Script steht am Body-Ende) ...
  compute();
  // ... und erneut, sobald Webfonts fertig geladen sind (verhindert falsche Umbrueche
  // durch Font-Swap, da sich Zeichenbreiten dadurch aendern koennen).
  if (window.document && document.fonts && document.fonts.ready) {
    document.fonts.ready.then(compute);
  }
  window.addEventListener('resize', scheduleCompute);
})();
