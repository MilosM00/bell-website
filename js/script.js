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
    const hiddenTeam = document.querySelectorAll(`.hidden-team`);

    const showOverlay = function (){
        hiddenTeam.forEach(ht => {
            ht.classList.remove(`hidden-team`);
        });
    };

    const hideOverlay = function (){
        hiddenTeam.forEach(ht =>{
            ht.classList.add(`hidden-team`);
        });
    }    

    image.forEach(images => {
        images.addEventListener(`mouseenter`, () =>{
            showOverlay();
        });
    });

    overlay.forEach(overlays => {
        overlays.addEventListener(`mouseleave`, () =>{
            hideOverlay();
        });
    });
};
teamOverlay();
