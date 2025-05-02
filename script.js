
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

mobileMenuBtn.addEventListener('click', toggleMenu);

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (menuOpen) toggleMenu();
  });
});

// Skills tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    
    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked button and corresponding content
    button.classList.add('active');
    document.getElementById(`${tabId}-content`).classList.add('active');
  });
});

// Animate skill bars when they come into view
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute('style') || 'width: 0%';
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

// Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', { name, email, subject, message });
    
    // For demo purposes, just reset the form
    contactForm.reset();
    alert('Thanks for your message! This is a demo, so no actual email was sent.');
  });
}

// Initialize functions when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set initial scroll state
  handleScroll();
  
  // Initialize tabs (set first tab as active)
  tabButtons[0].click();
  
  // Initialize animations
  animateSkillBars();
  initScrollReveal();
});
