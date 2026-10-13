/* Bauart-Slider: Klick (oder Enter/Leertaste) auf das Bild schaltet Case -> Platte -> Kante -> Case. */
(function () {
  document.querySelectorAll('.bauart-slider').forEach(function (slider) {
    var slides = slider.querySelectorAll('.bauart-slide');
    var dots = slider.querySelectorAll('.bauart-slider-dots i');
    var label = slider.querySelector('.bauart-slider-label');
    var current = 0;
    function show(i) {
      current = (i + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle('is-active', k === current); });
      dots.forEach(function (d, k) { d.classList.toggle('on', k === current); });
      if (label) label.textContent = slides[current].getAttribute('data-label');
    }
    slider.addEventListener('click', function () { show(current + 1); });
    slider.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(current + 1); }
      else if (e.key === 'ArrowRight') { show(current + 1); }
      else if (e.key === 'ArrowLeft') { show(current - 1); }
    });
  });
})();
