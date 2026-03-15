// Mobile hamburger menu toggle
function toggleMenu() {
  document.querySelector('.navbar').classList.toggle('open');
  document.querySelector('.nav-overlay').classList.toggle('show');
}

// Mobile: show navbar on scroll up, hide on scroll down
let lastScrollY = window.scrollY;
window.addEventListener('scroll', function () {
  if (window.innerWidth <= 768) {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY < lastScrollY) {
      navbar.classList.add('visible');
    } else {
      navbar.classList.remove('visible');
      navbar.classList.remove('open');
      document.querySelector('.nav-overlay').classList.remove('show');
    }
    lastScrollY = window.scrollY;
  }
});
