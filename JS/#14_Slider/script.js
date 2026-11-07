const slides = document.querySelectorAll(".slides img");


let sliderIndex = 0;


let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    slides[sliderIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
}

function showSlide(index) {
    slides[sliderIndex].classList.remove("displaySlide");
    sliderIndex = (--sliderIndex % slides.length);
    
    slides[sliderIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId)
    slides[sliderIndex].classList.remove("displaySlide");
    sliderIndex = (--sliderIndex + slides.length) % slides.length;
    slides[sliderIndex].classList.add("displaySlide");
}

function nextSlide() {
    slides[sliderIndex].classList.remove("displaySlide");
    sliderIndex = (++sliderIndex % slides.length);
    slides[sliderIndex].classList.add("displaySlide");
}