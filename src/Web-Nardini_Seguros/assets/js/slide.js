
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
let currentIndex = 0;
const autoScroll = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
};

const prevSlide = () => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
};

nextBtn.addEventListener('click', () => {
    nextSlide();
    clearInterval(slideInterval);
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    clearInterval(slideInterval);
});

if (autoScroll) {
    slideInterval = setInterval(nextSlide, intervalTime);
}

