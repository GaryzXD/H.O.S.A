// Slider functionality
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none"; // Set visibility directly
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// Initial display
showSlide(slideIndex);

// Auto-slide every 5s
setInterval(nextSlide, 5000);

// Scroll to contact form on button click
const joinBtns = document.querySelectorAll(".join-btn, .call-btn");
const formSection = document.getElementById("join-form"); // Add id="join-form" to your <section class="contact">

joinBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact form submission
const form = document.querySelector(".contact-form");
const thankYouMsg = document.querySelector(".thank-you-msg");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    thankYouMsg.style.display = "block";
    setTimeout(() => {
      thankYouMsg.style.display = "none";
      form.reset();
    }, 3000);
  });
}

// Scroll reveal animation
const revealEls = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;
  revealEls.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
});

// Footer heading hover animation
const headings = document.querySelectorAll('.footer-heading');

headings.forEach(heading => {
  heading.style.transition = 'transform 0.3s ease, color 0.3s ease';
  heading.addEventListener('mouseenter', () => {
    heading.style.transform = 'scale(1.05)';
    heading.style.color = '#e63946';
  });
  heading.addEventListener('mouseleave', () => {
    heading.style.transform = 'scale(1)';
    heading.style.color = '#fff';
  });
});

// Call & email functions
function callUs() {
  window.location.href = "tel:+919667698820";
}

function emailUs() {
  window.location.href = "mailto:thehosa.official@gmail.com";
}
// Add event listeners for call and email buttons
const callBtn = document.querySelector(".call-btn");  