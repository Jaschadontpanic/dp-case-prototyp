/* Kachel-Slider, endlos in beide Richtungen: Kacheln werden davor und dahinter geklont (3 Saetze), gestartet wird im
   mittleren Satz. Liegt die Position nach dem Scrollen in einem Randsatz, springt sie unsichtbar um genau einen
   Satz zurueck (die Saetze sind identisch). Pfeile scrollen um eine Kachel; Wischen/Scroll-Snap laeuft nativ per CSS. */
(function () {
  document.querySelectorAll('.tile-slider').forEach(function (slider) {
    var track = slider.querySelector('.tile-slider-track');
    var prev = slider.querySelector('.tile-slider-arrow.prev');
    var next = slider.querySelector('.tile-slider-arrow.next');
    var tiles = Array.prototype.slice.call(track.querySelectorAll('.tile'));
    var n = tiles.length;
    if (n < 2) return; // nichts zu blaettern

    function clones(prefix) {
      var frag = document.createDocumentFragment();
      tiles.forEach(function (t) {
        var c = t.cloneNode(true);
        c.setAttribute('aria-hidden', 'true');
        c.classList.add('is-clone');
        frag.appendChild(c);
      });
      return frag;
    }
    track.insertBefore(clones(), tiles[0]);
    track.appendChild(clones());
    slider.classList.add('is-loop');
    prev.hidden = false;
    next.hidden = false;

    function all() { return track.querySelectorAll('.tile'); }
    function padLeft() { return parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0; }
    function step() { var a = all(); return a[1].getBoundingClientRect().left - a[0].getBoundingClientRect().left; }
    // scrollLeft, bei dem die erste echte Kachel an der Snap-Position steht
    function homeLeft() {
      var t = all()[n];
      return track.scrollLeft + t.getBoundingClientRect().left - track.getBoundingClientRect().left - padLeft();
    }
    function jump(x) {
      track.style.scrollSnapType = 'none';
      track.scrollLeft = x;
      requestAnimationFrame(function () { track.style.scrollSnapType = ''; });
    }
    var index = 0; // logische Kachel (0..n-1), fuer Resize
    function normalize() {
      var home = homeLeft(), sw = step() * n, x = track.scrollLeft;
      if (x < home - sw / 2) jump(x + sw);
      else if (x > home + sw / 2) jump(x - sw);
      index = ((Math.round((track.scrollLeft - home) / step()) % n) + n) % n;
    }
    function place() { jump(homeLeft() + index * step()); }

    var timer = null;
    track.addEventListener('scroll', function () { clearTimeout(timer); timer = setTimeout(normalize, 120); }, { passive: true });
    prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
    window.addEventListener('resize', function () { clearTimeout(timer); timer = setTimeout(place, 150); });
    place();
    window.addEventListener('load', place);
  });
})();
