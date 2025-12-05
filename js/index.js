const heroCarousel = document.querySelector(".hero-carousel");
const heroSlides = document.querySelectorAll(".hero-slide");

let index = 0;

function autoSlide() {
    index = (index + 1) % heroSlides.length;
    heroCarousel.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(autoSlide, 3500);

let isDownHero = false;
let startXHero = 0;
let scrollLeftHero = 0;

heroCarousel.addEventListener("mousedown", (e) => {
    isDownHero = true;
    startXHero = e.pageX;
});

heroCarousel.addEventListener("mouseup", () => {
    isDownHero = false;
});

heroCarousel.addEventListener("mousemove", (e) => {
    if (!isDownHero) return;
    const walk = (e.pageX - startXHero);
    if (walk > 50) { index = Math.max(index - 1, 0); heroCarousel.style.transform = `translateX(-${index * 100}%)`; isDownHero = false; }
    if (walk < -50){ index = Math.min(index + 1, heroSlides.length - 1); heroCarousel.style.transform = `translateX(-${index * 100}%)`; isDownHero = false; }
});

heroCarousel.addEventListener("touchstart", (e) => {
    startXHero = e.touches[0].clientX;
});

heroCarousel.addEventListener("touchmove", (e) => {
    const walk = e.touches[0].clientX - startXHero;
    if (walk > 60) { index = Math.max(index - 1, 0); heroCarousel.style.transform = `translateX(-${index * 100}%)`; }
    if (walk < -60){ index = Math.min(index + 1, heroSlides.length - 1); heroCarousel.style.transform = `translateX(-${index * 100}%)`; }
});
const carousel = document.getElementById("carrossel-servicos");

let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseleave", () => {
    isDown = false;
});

carousel.addEventListener("mouseup", () => {
    isDown = false;
});

carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
});

let startTouchX = 0;
let scrollLeftTouch = 0;

carousel.addEventListener("touchstart", (e) => {
    startTouchX = e.touches[0].pageX;
    scrollLeftTouch = carousel.scrollLeft;
});

carousel.addEventListener("touchmove", (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - startTouchX) * 2;
    carousel.scrollLeft = scrollLeftTouch - walk;
});
