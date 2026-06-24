// Ka Fe — Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
  /* ---- Mobile navigation toggle ---- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navToggle.setAttribute(
        'aria-expanded',
        navLinks.classList.contains('active')
      );
    });
  }

  /* ---- Nav accent line + shadow on scroll ---- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- Scroll reveal (auto-targets common blocks on every page) ---- */
  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  // Elements that fade up as one unit
  const revealSelectors = [
    '.promise-item',
    '.signature-card',
    '.story-text',
    '.menu-strip-header',
    '.menu-teaser',
    '.menu-section',
    '.menu-preview-card',
    '.story-content > *',
    '.page-header',
    '.findus-info',
    '.findus-map'
  ];
  // Containers whose children should stagger in
  const staggerSelectors = ['.story-stats', '.menu-list', '.menu-preview'];

  const revealEls = document.querySelectorAll(revealSelectors.join(','));
  const staggerEls = document.querySelectorAll(staggerSelectors.join(','));

  revealEls.forEach((el) => el.classList.add('reveal'));
  staggerEls.forEach((el) => {
    el.classList.add('reveal');
    el.setAttribute('data-stagger', '');
  });

  if (prefersReduced || !('IntersectionObserver' in window)) {
    // Show everything immediately
    document
      .querySelectorAll('.reveal')
      .forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});
