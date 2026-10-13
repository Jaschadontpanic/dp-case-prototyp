/* Table-Zoom: Tabelle klein als Vorschau, Klick/Enter oeffnet sie gross und scrollbar in einem Dialog.
   Ohne JS (oder ohne <dialog>-Support) bleibt die Tabelle normal lesbar. */
(function () {
  if (typeof HTMLDialogElement === 'undefined') return;
  document.querySelectorAll('.table-zoom').forEach(function (box) {
    var inner = box.querySelector('.table-zoom-inner');
    var table = inner && inner.querySelector('table');
    if (!table) return;
    var title = box.getAttribute('data-zoom-title') || 'Tabelle';

    var clip = document.createElement('div');
    clip.className = 'table-zoom-clip';
    inner.parentNode.insertBefore(clip, inner);
    clip.appendChild(inner);
    box.classList.add('is-ready');
    box.setAttribute('tabindex', '0');
    box.setAttribute('role', 'button');
    box.setAttribute('aria-label', title + ' vergrößern');

    var dlg = document.createElement('dialog');
    dlg.className = 'table-zoom-dialog';
    dlg.setAttribute('aria-label', title);
    dlg.innerHTML = '<div class="table-zoom-bar"><strong></strong><button type="button" class="table-zoom-close" aria-label="Schließen">&times;</button></div><div class="table-zoom-scroll"></div>';
    dlg.querySelector('strong').textContent = title;
    box.appendChild(dlg);

    function fit() {
      var scale = clip.clientWidth / 2200;
      inner.style.transform = 'scale(' + scale + ')';
      clip.style.height = Math.ceil(inner.offsetHeight * scale) + 'px';
    }
    function open() {
      var scroll = dlg.querySelector('.table-zoom-scroll');
      scroll.innerHTML = '';
      scroll.appendChild(table.cloneNode(true));
      dlg.showModal();
    }
    box.addEventListener('click', function (e) { if (!dlg.contains(e.target)) open(); });
    box.addEventListener('keydown', function (e) {
      if (dlg.open) return;
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
    dlg.querySelector('.table-zoom-close').addEventListener('click', function (e) { e.stopPropagation(); dlg.close(); });
    dlg.addEventListener('click', function (e) { e.stopPropagation(); if (e.target === dlg) dlg.close(); });
    window.addEventListener('resize', fit);
    fit();
  });
})();
