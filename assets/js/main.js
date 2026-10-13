function dpOpenPhonePopup() {
  document.getElementById('phonePopup').classList.add('open');
  window.location.href = 'tel:+4940721 7692';
}
function dpClosePhonePopup() {
  document.getElementById('phonePopup').classList.remove('open');
}
function dpOpenMobileMenu() {
  document.getElementById('mobileMenu').classList.add('open');
}
function dpCloseMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

function dpSetupExpandable(selector) {
  var buttons = document.querySelectorAll(selector);
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var submenu = document.getElementById(btn.getAttribute('aria-controls'));
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      // Innerhalb derselben Gruppe (Mobil-Panel bzw. Desktop-Nav) immer nur ein
      // Dropdown gleichzeitig offen - andere zuerst schliessen.
      buttons.forEach(function (other) {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          var otherMenu = document.getElementById(other.getAttribute('aria-controls'));
          if (otherMenu) otherMenu.hidden = true;
        }
      });
      btn.setAttribute('aria-expanded', String(!isOpen));
      if (submenu) submenu.hidden = isOpen;
    });
  });
}
dpSetupExpandable('.mobile-menu-expand');
dpSetupExpandable('.nav-dropdown-toggle');

// Desktop-Dropdown schliessen bei Klick ausserhalb (Mobil-Panel braucht das nicht,
// das schliesst sich nur ueber den X-Button).
document.addEventListener('click', function (e) {
  document.querySelectorAll('.nav-dropdown-toggle[aria-expanded="true"]').forEach(function (btn) {
    if (!btn.parentElement.contains(e.target)) {
      btn.setAttribute('aria-expanded', 'false');
      var menu = document.getElementById(btn.getAttribute('aria-controls'));
      if (menu) menu.hidden = true;
    }
  });
});

(function () {
  var header = document.querySelector('header.nav');
  if (!header) return;
  var SCROLL_THRESHOLD = 24;
  function updateHeaderScroll() {
    header.classList.toggle('scrolled', window.scrollY > SCROLL_THRESHOLD);
  }
  window.addEventListener('scroll', updateHeaderScroll, { passive: true });
  updateHeaderScroll();
})();
