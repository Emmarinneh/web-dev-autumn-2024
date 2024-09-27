// Scroll Background Color Change for Navbar
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

// This is for the carousel
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

// Clone first and last image for smooth looping
const firstClone = images[0].cloneNode(true);
const lastClone = images[images.length - 1].cloneNode(true);

// Add cloned images to the slide
carouselSlide.appendChild(firstClone); // Add first clone at the end
carouselSlide.insertBefore(lastClone, images[0]); // Add last clone at the beginning

// Updated images list with clones included
const updatedImages = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Variables
let counter = 1; // Start with the first real image (since 0 is the cloned last image)
const size = updatedImages[0].clientWidth; // Get width of the first image

// Position the slide to start with the first real image
carouselSlide.style.transform = `translateX(${-size * counter}px)`;

// Move to next slide
nextBtn.addEventListener('click', () => {
  if (counter >= updatedImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;

  // Loop back to the first real image when reaching the clone
  carouselSlide.addEventListener('transitionend', () => {
    if (updatedImages[counter].alt === images[0].alt) {
      carouselSlide.style.transition = 'none';
      counter = 1;
      carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
  });
});

// Move to previous slide
prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;

  // Loop back to the last real image when reaching the clone
  carouselSlide.addEventListener('transitionend', () => {
    if (updatedImages[counter].alt === images[images.length - 1].alt) {
      carouselSlide.style.transition = 'none';
      counter = updatedImages.length - 2;
      carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
  });
});
