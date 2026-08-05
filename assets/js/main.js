// Mobile nav toggle
const toggle = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('navbar__menu--open');
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('navbar__menu--open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('navbar__menu--open')) {
      menu.classList.remove('navbar__menu--open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });
}

// Dropdown keyboard nav
document.querySelectorAll('.navbar__link--dropdown').forEach((btn) => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    // Close all
    document.querySelectorAll('.navbar__link--dropdown').forEach((b) => {
      b.setAttribute('aria-expanded', 'false');
      b.closest('.navbar__item').querySelector('.navbar__dropdown')?.classList.remove('navbar__dropdown--open');
    });
    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      btn.closest('.navbar__item').querySelector('.navbar__dropdown')?.classList.add('navbar__dropdown--open');
    }
  });
});

// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Hero Carousel
(function () {
  const track = document.getElementById('carousel-track');
  if (!track) return;

  const slides = track.querySelectorAll('.hero-carousel__slide');
  const dots = document.querySelectorAll('.hero-carousel__dot');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  let current = 0;
  let timer;

  function goTo(index) {
    slides[current].removeAttribute('aria-current');
    dots[current].classList.remove('hero-carousel__dot--active');
    dots[current].setAttribute('aria-selected', 'false');

    current = (index + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';

    slides[current].setAttribute('aria-current', 'true');
    dots[current].classList.add('hero-carousel__dot--active');
    dots[current].setAttribute('aria-selected', 'true');
  }

  function start() {
    timer = setInterval(function () { goTo(current + 1); }, 6000);
  }

  function reset() { clearInterval(timer); start(); }

  if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); reset(); });
  if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); reset(); });

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      goTo(parseInt(dot.dataset.index, 10));
      reset();
    });
  });

  // Pause on hover
  const carousel = document.getElementById('hero-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', function () { clearInterval(timer); });
    carousel.addEventListener('mouseleave', start);
  }

  // Touch/swipe
  let touchStartX = 0;
  track.addEventListener('touchstart', function (e) { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', function (e) {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { goTo(diff > 0 ? current + 1 : current - 1); reset(); }
  }, { passive: true });

  start();
})();

// Scroll Animations (Subtle fade-in-up)
document.addEventListener('DOMContentLoaded', () => {
  // Elements that will receive the subtle animation
  const animatedSelectors = [
    '.program-card', 
    '.story-card', 
    '.event-card', 
    '.involved-card', 
    '.value-item', 
    '.stat', 
    '.testimonial-card', 
    '.highlight-card',
    '.section-header',
    '.about-page .section-content__image'
  ];
  
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(animatedSelectors.join(', ')).forEach((el, i) => {
    // Add the base animation class
    el.classList.add('fade-in-up');
    
    // Add a slight stagger based on DOM order for elements appearing together
    // Limit to 4 to avoid overly long delays
    const delay = (i % 4) * 0.1;
    el.style.transitionDelay = `${delay}s`;
    
    observer.observe(el);
  });
});
