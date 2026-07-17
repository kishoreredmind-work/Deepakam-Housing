// Main JavaScript utilities
document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  setupPreloader();
  setupCopyrightYear();
  setupBackToTop();
  setupScrollEffects();
  setupStatsCounter();
  setupFormValidation();
  setupHeroSlider();
  setupDisclaimerPopup();
});

// 1. Navbar: Sticky & Mobile Menu Toggle
function setupNavbar() {
  const header = document.querySelector('.header') || document.querySelector('.navbar');
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.navbar__links');

  // Sticky Scroll Class Toggle
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      if (header) header.classList.add('scrolled');
      if (navbar) navbar.classList.add('scrolled');
    } else {
      if (header) header.classList.remove('scrolled');
      if (navbar) navbar.classList.remove('scrolled');
    }
  });

  // Mobile Hamburger Toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('active');
      
      // Toggle button visual (hamburger to 'X')
      if (navLinks.classList.contains('active')) {
        menuToggle.innerHTML = '&times;';
      } else {
        menuToggle.innerHTML = '&#9776;';
      }
    });

    // Close menu when clicking links
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '&#9776;';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '&#9776;';
      }
    });
  }
}

// 2. Scroll Reveal Animations (IntersectionObserver)
function setupScrollEffects() {
  const revealElements = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Reveal once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

// 3. Stats Counter Animation
function setupStatsCounter() {
  const statsElements = document.querySelectorAll('.stat-card__number');
  if (statsElements.length === 0) return;

  const countUp = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    let count = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.max(Math.floor(duration / target), 30);
    
    const timer = setInterval(() => {
      count += Math.ceil(target / (duration / stepTime));
      if (count >= target) {
        el.innerText = target + suffix;
        clearInterval(timer);
      } else {
        el.innerText = count + suffix;
      }
    }, stepTime);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statsElements.forEach(el => observer.observe(el));
}

// 4. Form Validation Utility
function setupFormValidation() {
  const forms = document.querySelectorAll('.enquiry-form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Select fields
      const nameGroup = form.querySelector('.form-group-name');
      const nameInput = form.querySelector('input[type="text"]');
      const phoneGroup = form.querySelector('.form-group-phone');
      const phoneInput = form.querySelector('input[type="tel"]');
      const emailGroup = form.querySelector('.form-group-email');
      const emailInput = form.querySelector('input[type="email"]');
      const messageGroup = form.querySelector('.form-group-message');
      const messageInput = form.querySelector('textarea');
      const successBox = form.querySelector('.success-msg');

      // 1. Name Check
      if (nameInput) {
        if (nameInput.value.trim() === '') {
          nameGroup.classList.add('invalid');
          isValid = false;
        } else {
          nameGroup.classList.remove('invalid');
        }
      }

      // 2. Phone Check (10 digits)
      if (phoneInput) {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
          phoneGroup.classList.add('invalid');
          isValid = false;
        } else {
          phoneGroup.classList.remove('invalid');
        }
      }

      // 3. Email Check
      if (emailInput) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
          emailGroup.classList.add('invalid');
          isValid = false;
        } else {
          emailGroup.classList.remove('invalid');
        }
      }

      // 4. Message Check
      if (messageInput) {
        if (messageInput.value.trim() === '') {
          messageGroup.classList.add('invalid');
          isValid = false;
        } else {
          messageGroup.classList.remove('invalid');
        }
      }

      // On Success
      if (isValid) {
        // Compile WhatsApp text
        const nameVal = nameInput ? nameInput.value.trim() : '';
        const phoneVal = phoneInput ? phoneInput.value.trim() : '';
        const emailVal = emailInput ? emailInput.value.trim() : '';
        const msgVal = messageInput ? messageInput.value.trim() : '';
        const pageTitle = document.title.split('—')[0].trim(); // Get project name or page name

        const waMessage = `Hello Deepakam Housing, I would like to make an enquiry:
• Project/Page: ${pageTitle}
• Name: ${nameVal}
• Phone: ${phoneVal}
• Email: ${emailVal}
• Message: ${msgVal}`;

        const waUrl = `https://wa.me/919188500800?text=${encodeURIComponent(waMessage)}`;

        // Open WhatsApp chat in a new tab
        window.open(waUrl, '_blank');

        if (successBox) {
          successBox.style.display = 'block';
          form.reset();
          // Hide success message after 5 seconds
          setTimeout(() => {
            successBox.style.display = 'none';
          }, 5000);
        } else {
          alert('Thank you! Opening WhatsApp to chat with our team...');
          form.reset();
        }
      }
    });

    // Clear error classes on typing
    form.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('input', () => {
        input.parentElement.classList.remove('invalid');
      });
    });
  });
}

function setupPreloader() {
  // Preloader Fade Out
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('fade-out');
      }, 400);
    });
  }
}

function setupCopyrightYear() {
  const yearElements = document.querySelectorAll('.copyright-year');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });
}

function setupBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 7. Hero Slider
function setupHeroSlider() {
  const slides = document.querySelectorAll('.hero-slider .slide');
  const dots = document.querySelectorAll('.hero-slider .slider-dot');
  if (slides.length === 0) return;

  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 5000);

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function goToSlide(n) {
    slides.forEach(slide => slide.classList.remove('prev-active'));
    slides[currentSlide].classList.add('prev-active');
    slides[currentSlide].classList.remove('active');
    if (dots.length > 0) dots[currentSlide].classList.remove('active');
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    if (dots.length > 0) dots[currentSlide].classList.add('active');
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      goToSlide(idx);
      slideInterval = setInterval(nextSlide, 5000);
    });
  });
}

// 8. Dynamic Disclaimer Popup
function setupDisclaimerPopup() {
  if (localStorage.getItem('disclaimerAccepted') === 'true') return;

  // Disclaimer text string matching the legal statement from About page
  const disclaimerText = `The information provided in this website is for general purposes only and buyers should make independent assessment for any specific information, although enough diligent steps are taken by us to ensure that the contents are accurate and correct to the maximum extent possible. The interested parties however, should rely on buyers’ sale and construction agreement which are comprehensive documents, containing all terms and conditions applicable between the parties. All visuals of the projects/apartments including models, drawing, illustrations, photographs, and art renderings represent artistic impressions only and the information contained herein, the fittings, finishes, features, floor (size, finish, and colour) and other display in the visuals, which are for general guidance only, are subject to change. We have not authorized any person or firms to make any oral promises or assurances on our behalf with regard to our projects and plans. Plans, Specifications mentioned in the Buyer-Seller Agreements are final and supersede the contents/information herein. To get more information about our projects, feel free to contact our sales team or contact our office during working hours and we will be at your service.`;

  // Create modal container element
  const modal = document.createElement('div');
  modal.id = 'disclaimerModal';
  modal.className = 'disclaimer-modal';
  
  modal.innerHTML = `
    <div class="disclaimer-modal__content">
      <div class="disclaimer-modal__header">
        <h4><i class="bi bi-info-circle-fill" style="color: #F0A830;"></i> Disclaimer</h4>
      </div>
      <div class="disclaimer-modal__body">
        <p>${disclaimerText}</p>
      </div>
      <div class="disclaimer-modal__footer">
        <button id="closeDisclaimer" class="btn btn--primary btn--pill" style="padding: 10px 24px; font-weight: 600;">Accept & Close</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Trigger browser flow layout then add class for transitions
  setTimeout(() => {
    modal.classList.add('show');
    // Lock background scroll when popup is active
    document.body.style.overflow = 'hidden';
  }, 100);

  // Close handler
  const closeBtn = document.getElementById('closeDisclaimer');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
      document.body.style.overflow = '';
      
      // Save state to localstorage
      localStorage.setItem('disclaimerAccepted', 'true');
      
      // Clean up DOM after fade transitions
      setTimeout(() => {
        modal.remove();
      }, 400);
    });
  }
}

