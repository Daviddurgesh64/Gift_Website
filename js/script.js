// script.js
/**
 * Redirects the user to WhatsApp with a pre-filled enquiry message.
 * Replace '919876543210' with your actual business WhatsApp number.
 */
function orderOnWhatsApp(productName) {
  const phoneNumber = '917632083777'; 
  const message = encodeURIComponent(`Hi NVODAY GIFTS, I would like to enquire about the ${productName}.`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  window.open(whatsappUrl, '_blank');
}
// --- Carousel Logic ---
let slideIndex = 0;

function showSlide(index) {
  // Grabbing elements inside the function ensures they are found even if the script loads early
  const slides = document.querySelectorAll('.carousel-inner .product-image');
  const dots = document.querySelectorAll('.dot');
  
  // Safety check: if no slides exist, do nothing
  if (slides.length === 0) return;

  // Loop back to the start or end if clicking past the limits
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;
  
  // Remove the 'active' class from all images and dots
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Add the 'active' class to the current image and dot
  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');
}

function moveSlide(step) {
  slideIndex += step;
  showSlide(slideIndex);
}

function currentSlide(index) {
  slideIndex = index;
  showSlide(slideIndex);
}
// --- Scroll Reveal Animation ---
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  const elementVisible = 50; // Trigger point

  reveals.forEach(reveal => {
    const elementTop = reveal.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('active');
    }
  });
}

// Listen for scroll events
window.addEventListener('scroll', revealOnScroll);

// Trigger immediately on page load in case elements are already in view
revealOnScroll();
