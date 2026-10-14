/* Kachelraster mit variablen Breiten (Silent-Rack-Seite, "cases-product"): waehlt dynamisch, welche Kacheln doppelt breit sind,
   sodass jede Reihe des 3-Spalten-Rasters genau voll ist (3x1 oder 1x doppelt + 1x einfach, keine Luecken).
   Regeln (Jascha 2026-10-14): erste Kachel doppelt breit; maximal jede zweite Kachel doppelt (Anzahl Doppelte <= n/2);
   in aufeinanderfolgenden Reihen mit einer Doppelten wechselt die Position (erste Reihe: doppelt vorn, naechste: doppelt als
   zweites Element, usw.). Unter den moeglichen Reihenaufteilungen gewinnt die mit den meisten Doppelten (mehr Abwechslung).
   Ohne JS bleibt die im HTML vorgesetzte Auswahl (span-2) stehen; bei geaenderter Kachelanzahl rechnet das Skript neu. */
(function () {
  'use strict';

  // Liefert die Reihengroessen (in Kacheln) als Array aus 2 (= doppelt + einfach) und 3 (= drei einfache) oder null.
  function plan(n) {
    var best = null;
    var maxDoubles = Math.floor(n / 2);
    (function walk(left, rows, doubles) {
      if (left === 0) {
        if (!best || doubles > best.doubles) best = { rows: rows.slice(), doubles: doubles };
        return;
      }
      [2, 3].forEach(function (size) {
        if (size > left) return;
        if (rows.length === 0 && size !== 2 && n >= 2) return; // erste Reihe: doppelt
        var d = doubles + (size === 2 ? 1 : 0);
        if (d > maxDoubles) return;
        rows.push(size);
        walk(left - size, rows, d);
        rows.pop();
      });
    })(n, [], 0);
    return best ? best.rows : null;
  }

  document.querySelectorAll('.cases-product .cases-grid').forEach(function (grid) {
    var tiles = Array.prototype.slice.call(grid.children);
    var rows = plan(tiles.length);
    if (!rows) return;
    var i = 0, doubleRow = 0;
    var doubleIdx = {};
    rows.forEach(function (size) {
      if (size === 2) {
        doubleIdx[doubleRow % 2 === 0 ? i : i + 1] = true; // abwechselnd vorn / als zweites Element
        doubleRow++;
      }
      i += size;
    });
    tiles.forEach(function (t, k) { t.classList.toggle('span-2', !!doubleIdx[k]); });
  });
})();
