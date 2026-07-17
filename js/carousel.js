// Testimonial Carousel JS
document.addEventListener('DOMContentLoaded', () => {
  setupCarousel();
});

function setupCarousel() {
  const track = document.querySelector('.carousel__track');
  if (!track) return;

  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.carousel__btn--next');
  const prevBtn = document.querySelector('.carousel__btn--prev');
  const dotsContainer = document.querySelector('.carousel__dots');
  
  if (slides.length === 0) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const slideCount = slides.length;

  // Generate indicator dots
  dotsContainer.innerHTML = '';
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel__dot');
    if (idx === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to testimonial slide ${idx + 1}`);
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  // Get active items visible depending on screen size
  const getVisibleCount = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 3; // Desktop
    if (width >= 768) return 2;  // Tablet
    return 1;                   // Mobile
  };

  // Move track to current slide index
  const updateSlidePosition = () => {
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, slideCount - visibleCount);
    
    // Bounds check
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    }

    const slideWidthPercentage = 100 / visibleCount;
    track.style.transform = `translateX(-${currentIndex * slideWidthPercentage}%)`;

    // Update active dots
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  // Events for next/prev buttons
  const moveToNext = () => {
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, slideCount - visibleCount);
    
    if (currentIndex >= maxIndex) {
      currentIndex = 0; // Wrap around to start
    } else {
      currentIndex++;
    }
    updateSlidePosition();
  };

  const moveToPrev = () => {
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, slideCount - visibleCount);

    if (currentIndex <= 0) {
      currentIndex = maxIndex; // Wrap around to end
    } else {
      currentIndex--;
    }
    updateSlidePosition();
  };

  if (nextBtn) nextBtn.addEventListener('click', () => {
    moveToNext();
    resetAutoplay();
  });

  if (prevBtn) prevBtn.addEventListener('click', () => {
    moveToPrev();
    resetAutoplay();
  });

  // Events for indicator dots
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      currentIndex = idx;
      updateSlidePosition();
      resetAutoplay();
    });
  });

  // Autoplay function
  const startAutoplay = () => {
    autoplayTimer = setInterval(moveToNext, 4000); // 4 seconds
  };

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  const resetAutoplay = () => {
    stopAutoplay();
    startAutoplay();
  };

  // Pause on hover
  const carouselContainer = document.querySelector('.carousel');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopAutoplay);
    carouselContainer.addEventListener('mouseleave', startAutoplay);
  }

  // Recalculate layout on resize
  window.addEventListener('resize', () => {
    updateSlidePosition();
  });

  // Initialize
  updateSlidePosition();
  startAutoplay();
}
