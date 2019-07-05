let slide = Array.from(document.getElementsByClassName("slider__item")),
    nextSlide = document.querySelector(".slider__arrow_next"),
    prevSlide = document.querySelector(".slider__arrow_prev"),
    sliderDots = Array.from(document.getElementsByClassName("slider__dot")),
    count = 0;

function hideOldSlide() {
    slide[count].classList.remove("slider__item_active");
    sliderDots[count].classList.remove("slider__dot_active");
}

nextSlide.onclick = () => {
    hideOldSlide();
    count++;
    moveSlide();
}  

prevSlide.onclick = () => { 
    hideOldSlide();
    count--;
    moveSlide();
}   

function moveSlide() {
    if (count < 0) count = slide.length - 1;
    if (count === slide.length) count = 0;
    
    sliderDots[count].classList.add("slider__dot_active");
    slide[count].classList.add("slider__item_active");
}

sliderDots.forEach((el, i) => {
    el.onclick = () => {
        hideOldSlide();
        count = i;
        moveSlide();
    }
})

function slideshow() {
    hideOldSlide();
    count++;
    moveSlide();
}

let slideshowStart = document.querySelector(".start-slideshow"),
    slideshowStop = document.querySelector(".stop-slideshow"),
    slideshowTimer;

slideshowStart.onclick = () => slideshowTimer = setInterval(slideshow, 2000);    
slideshowStop.onclick = () => clearInterval(slideshowTimer);   