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
    const image = document.querySelector(`.image-team`);
    const overlay = document.querySelector(`.overlay-team`);
    
    image.addEventListener(`mouseenter`, (e) =>{
        e.preventDefault();

        overlay.style.display = `block`;
    });

    overlay.addEventListener(`mouseleave`, (e) =>{
        e.preventDefault();
        
        overlay.style.display = `none`;
    });
};
teamOverlay();

const teamText = function (){
    const words = document.querySelector(`.words`);
    const h2 = document.querySelector(`h2`);
    const h4 = document.querySelector(`h4`);

    words.addEventListener(`mouseleave`, (e) =>{
        e.preventDefault();

        h2.style.color = `black`;
        h4.style.color = `black`;
        words.style.backgroundColor = `white`;
    });

    words.addEventListener(`mouseenter`, (e) =>{
        e.preventDefault();

        h2.style.color = `white`;
        h4.style.color = `white`;
        words.style.backgroundColor = `#199eb8`;
    });
};
teamText();