(function () {
  var toggle = document.querySelector('.menu-toggle');
  var drawer = document.getElementById('mob-drawer');
  var overlay = document.querySelector('.mob-overlay');
  var closeBtn = document.querySelector('.drawer-close');
  var fab = document.querySelector('.fab-call');
  var lastFocus = null;

  function openDrawer() {
    if (!drawer) return;
    lastFocus = document.activeElement;
    drawer.classList.add('open');
    overlay.classList.add('visible');
    toggle.setAttribute('aria-expanded', 'true');
    if (closeBtn) closeBtn.focus();
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    overlay.classList.remove('visible');
    toggle.setAttribute('aria-expanded', 'false');
    if (lastFocus) lastFocus.focus();
  }
  if (toggle) toggle.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  // hide the floating call button while the page footer is in view
  var footer = document.querySelector('.site-footer');
  if (fab && footer && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      fab.classList.toggle('hide', entries[0].isIntersecting);
    }).observe(footer);
  }
})();
