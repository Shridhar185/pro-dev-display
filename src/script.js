
// Update current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Navbar scroll effect
const header = document.getElementById('header');
const scrollThreshold = 50;

function handleScroll() {
  if (window.scrollY > scrollThreshold) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
let menuOpen = false;

function toggleMenu() {
  if (menuOpen) {
    mobileMenu.classList.remove('open');
    hamburgerIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  } else {
    mobileMenu.classList.add('open');
    hamburgerIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  }
  menuOpen = !menuOpen;
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', toggleMenu);

  // Close mobile menu when clicking on a link
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menuOpen) toggleMenu();
    });
  });
}

// Animate skill bars when they come into view
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  
  if (skillBars.length === 0) return;
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute('data-width') || '0%';
        entry.target.style.width = '0%';
        
        setTimeout(() => {
          entry.target.style.width = width;
        }, 100);
        
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  skillBars.forEach(bar => {
    observer.observe(bar);
  });
}

// Scroll reveal animation
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.section');
  
  if (revealElements.length === 0) return;
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.1 });
  
  revealElements.forEach(el => {
    observer.observe(el);
  });
}

// Initialize functions when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set initial scroll state
  handleScroll();
  
  // Initialize animations
  animateSkillBars();
  initScrollReveal();
});
