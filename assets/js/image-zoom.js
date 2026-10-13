/* Image-Zoom: Klick auf .material-img oeffnet das Bild gross in einem <dialog>. Ohne JS bleibt das Bild klein sichtbar. */
(function () {
  if (typeof HTMLDialogElement === 'undefined') return;
  var dlg = document.createElement('dialog');
  dlg.className = 'img-zoom-dialog';
  dlg.innerHTML = '<button type="button" class="table-zoom-close" aria-label="Schließen">&times;</button><img alt="">';
  document.body.appendChild(dlg);
  var big = dlg.querySelector('img');
  document.querySelectorAll('.material-img').forEach(function (b) {
    b.addEventListener('click', function () {
      var img = b.querySelector('img');
      big.src = b.getAttribute('data-full') || img.src;
      big.alt = img.alt;
      dlg.showModal();
    });
  });
  dlg.querySelector('.table-zoom-close').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
})();
