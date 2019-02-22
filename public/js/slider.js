let slideIndex = 1;
const slider = document.querySelector('.slider');

function showSlides(n) {
    const slides = slider.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    dots.forEach(dot => {
        dot.classList.remove('active');
    })
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

showSlides(slideIndex);

setInterval(() => {
    plusSlides(1);
}, 7000);

