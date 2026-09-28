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
