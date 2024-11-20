// Sélection des slides
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// Navigation des flèches
document.querySelector('.next').addEventListener('click', () => changeSlide(1));
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));

// Fonction pour changer de slide
function changeSlide(direction) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
}

// Option de défilement automatique
let autoplayInterval = setInterval(() => changeSlide(1), 5000);

// Pause au survol du slider
const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
slider.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(() => changeSlide(1), 5000);
});
