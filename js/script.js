"use strict";

const slider = function (){
    const slides = document.querySelectorAll(`.slide`);
    const buttonLeft = document.querySelector(`.slider-button-left`);
    const buttonRight = document.querySelector(`.slider-button-right`);

    let currentSlide = 0;
    const maxSlide = slides.length;

    const goToSlide = (slide) =>{
        slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
    };
    goToSlide(0);

    const nextSlide = function (){
        if(currentSlide === maxSlide - 1){
            currentSlide = 0;
        }
        else{
            currentSlide++;
        }

        goToSlide(currentSlide);
    };

    const previousSlide = function (){
        if(currentSlide === 0){
            currentSlide = maxSlide - 1;
        }
        else{
            currentSlide--;
        }
        goToSlide(currentSlide);
    };
    buttonLeft.addEventListener(`click`, previousSlide);
    buttonRight.addEventListener(`click`, nextSlide);

};
slider();


const teamOverlay = function(){
    const image = document.querySelectorAll(`.image-team`);
    const overlay = document.querySelectorAll(`.overlay-team`);
    const words = document.querySelectorAll(`.words`);
    const h2 = document.querySelector(`h2`);
    const h4 = document.querySelector(`h4`);

    image.forEach(image => {
        image.addEventListener(`mouseenter`, (e) =>{
            e.preventDefault();

            overlay.forEach(overlay =>{
                overlay.style.display = `block`;
            });
        });
    });

    words.forEach(words =>{
        words.addEventListener(`mouseenter`, (e) =>{
            words.style.backgroundColor = `#199eb8`;
        });

        words.addEventListener(`mouseleave`, (e) =>{
            words.style.backgroundColor = `white`;
        });
    });

    overlay.forEach(overlay =>{
        overlay.addEventListener(`mouseleave`, (e) =>{
            e.preventDefault();

            overlay.style.display = `none`;
        });
    });
};
teamOverlay();
