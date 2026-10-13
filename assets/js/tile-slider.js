/* Kachel-Slider: Pfeile scrollen um eine Kachel weiter, blenden am Anfang/Ende aus (Wischen/Scroll-Snap laeuft nativ per CSS). */
(function () {
  document.querySelectorAll('.tile-slider').forEach(function (slider) {
    var track = slider.querySelector('.tile-slider-track');
    var prev = slider.querySelector('.tile-slider-arrow.prev');
    var next = slider.querySelector('.tile-slider-arrow.next');
    function step() {
      var tile = track.querySelector('.tile');
      return tile ? tile.getBoundingClientRect().width + 16 : track.clientWidth;
    }
    function update() {
      var max = track.scrollWidth - track.clientWidth;
      prev.hidden = track.scrollLeft <= 4;
      next.hidden = track.scrollLeft >= max - 4;
    }
    prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  });
})();
