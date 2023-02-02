const propertySlider = document.querySelector('.property-slider');
const slides = propertySlider.querySelectorAll('.property-slide');
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slideIndex = 0;

slides[slideIndex].style.display = "block";

function showSlide(n) {
  slides.forEach(slide => slide.style.display = "none");
  slides[n].style.display = "block";
  slideIndex = n;
}

function prevSlide() {
  showSlide((slideIndex + slides.length - 1) % slides.length);
}

function nextSlide() {
  showSlide((slideIndex + 1) % slides.length);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

showSlide(slideIndex);

const viewListingBtn = document.querySelector(".view-listing-btn");


viewListingBtn.addEventListener("click", function() {
  window.location.href = "properties.html";
});

const logonav = document.querySelector(".logomain");


logonav.addEventListener("click", function() {
  window.location.href = "index.html";
});
