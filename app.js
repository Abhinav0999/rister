const propertySlider = document.querySelector('.property-slider');
if(propertySlider){
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
}
else
{
  console.error('Element with selector "${.property-slider}" not found');
}


const viewListingBtn = document.querySelector(".view-listing-btn");

if(viewListingBtn){
  viewListingBtn.addEventListener("click", function() {
    window.location.href = "properties.html";
   });   
}
else
{
  console.error('Element with selector "${.view-listing-btn}" not found');
}

const logonav = document.querySelector(".logomain");


logonav.addEventListener("click", function() {
  window.location.href = "index.html";
});

const propertyList = document.querySelector(".property-list");

fetch("listdata.json")
  .then(response => response.json())
  .then(data => {
    let propertyHTML = "";
    data.properties.forEach(property => {
      propertyHTML += `
        <li>
          <h2>${property.name}</h2>
          <img src="${property.image}" alt="${property.name}">
          <p>${property.description}</p>
          <button>${property.button}</button>
        </li>
      `;
    });
    propertyList.innerHTML = propertyHTML;
  });
