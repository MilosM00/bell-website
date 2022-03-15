"use strict";

const slider = function (){
    const slides = document.querySelectorAll(`.slide`);
    const buttonLeft = document.querySelector(`.slider-button-left`);
    const buttonRight = document.querySelector(`.slider-button-right`);
    const dotContainer = document.querySelector(`.dots`);

    let currentSlide = 0;
    const maxSlide = slides.length;

    const createDots = function (){
        slides.forEach((_, i) =>{
            dotContainer.insertAdjacentHTML(`beforeend`, `<button class="dots_dot" data-slide="${i}"></button>`);
        });
    };

    const activateDot = function (slide){
        document.querySelectorAll(`.dots_dot`).forEach(dot => dot.classList.remove(`dots_dot-active`));
        
        document.querySelector(`.dots_dot[data-slide="${slide}"]`).classList.add(`dots_dot-active`);
    };

    const goToSlide = (slide) =>{
        slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
    };

    const nextSlide = function (){
        if(currentSlide === maxSlide - 1){
            currentSlide = 0;
        }
        else{
            currentSlide++;
        }

        goToSlide(currentSlide);
        activateDot(currentSlide);
    };

    const previousSlide = function (){
        if(currentSlide === 0){
            currentSlide = maxSlide - 1;
        }
        else{
            currentSlide--;
        }
        goToSlide(currentSlide);
        activateDot(currentSlide);
    };

    const init = function (){
        goToSlide(0);
        createDots();
        activateDot(0);
    };
    init();

    buttonLeft.addEventListener(`click`, previousSlide);
    buttonRight.addEventListener(`click`, nextSlide);

    dotContainer.addEventListener(`click`, (e) =>{
        if(e.target.classList.contains(`dots_dot`)){
            const {slide} = e.target.dataset;

            goToSlide(slide);
            activateDot(slide);
        }
    });

    document.addEventListener(`keydown`, (e) =>{
        if(e.key === `ArrowLeft`) previousSlide();
        else if(e.key === `ArrowRight`) nextSlide();
    });

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

const stickyF = function (){
    const header = document.querySelector(`.header`);
    const nav = document.querySelector(`.nav`);

    const height =  nav.getBoundingClientRect().height;

    const sticky = function (entries){
        const [entry] = entries;

        if(!entry.isIntersecting){
            nav.classList.add(`sticky`);
        }
        else{
            nav.classList.remove(`sticky`);
        }
    };

    const headerObserver = new IntersectionObserver(sticky, {
        root: null,
        threshold: 0,
        rootMargin: `-${height}px`
    });
    headerObserver.observe(header);
};
stickyF();
