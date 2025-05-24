// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  if (!header) return;

  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// Hamburger Menu Toggle
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  });
}

// Filter with Animation and Active Toggle
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');

    // 1. Toggle active class on clicked button
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    // 2. Filter project cards with animation
    projectCards.forEach((card) => {
      const category = card.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden');
        // Delay to trigger transition properly
        setTimeout(() => {
          card.classList.remove('opacity-0', 'scale-95');
          card.classList.add('opacity-100', 'scale-100');
        }, 20);
      } else {
        card.classList.remove('opacity-100', 'scale-100');
        card.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
          card.classList.add('hidden');
        }, 300);
      }
    });
  });
});