// Toggle hamburger menu (mobile)
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('primary-nav');

menuBtn.addEventListener('click', () => {
  const expanded = menuBtn.classList.toggle('open'); // toggles class for icon
  nav.classList.toggle('open');                      // toggles nav visibility
  // update aria attribute for accessibility
  menuBtn.setAttribute('aria-expanded', String(expanded));
});

// Footer dynamic date info
const yearSpan = document.getElementById('copyright-year');
const lastModifiedSpan = document.getElementById('last-modified');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (lastModifiedSpan) {
  // document.lastModified returns a string; format it if you like
  lastModifiedSpan.textContent = document.lastModified;
}