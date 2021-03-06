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

const teamOverlay = function(){
    const image = document.querySelector(`.image-team`);
    const overlay = document.querySelector(`.overlay-team`);
    const hiddenTeam = document.querySelector(`.hidden-team`);
    
    const showOverlay = () => hiddenTeam.classList.remove(`hidden-team`);
    const hideOverlay = () => hiddenTeam.classList.add(`hidden-team`);

    image.addEventListener(`mouseenter`, showOverlay);

    overlay.addEventListener(`mouseleave`, hideOverlay);
};

const teamOverlayTwo = function(){
    const image = document.querySelector(`.image-team-two`);
    const overlay = document.querySelector(`.overlay-team-two`);
    const hiddenTeam = document.querySelector(`.hidden-team-two`);
    
    const showOverlay = () => hiddenTeam.classList.remove(`hidden-team-two`);
    const hideOverlay = () => hiddenTeam.classList.add(`hidden-team-two`);

    image.addEventListener(`mouseenter`, showOverlay);

    overlay.addEventListener(`mouseleave`, hideOverlay);
};

const teamOverlayThree = function(){
    const image = document.querySelector(`.image-team-three`);
    const overlay = document.querySelector(`.overlay-team-three`);
    const hiddenTeam = document.querySelector(`.hidden-team-three`);
    
    const showOverlay = () => hiddenTeam.classList.remove(`hidden-team-three`);
    const hideOverlay = () => hiddenTeam.classList.add(`hidden-team-three`);

    image.addEventListener(`mouseenter`, showOverlay);

    overlay.addEventListener(`mouseleave`, hideOverlay);
};

const teamOverlayFour = function(){
    const image = document.querySelector(`.image-team-four`);
    const overlay = document.querySelector(`.overlay-team-four`);
    const hiddenTeam = document.querySelector(`.hidden-team-four`);
    
    const showOverlay = () => hiddenTeam.classList.remove(`hidden-team-four`);
    const hideOverlay = () => hiddenTeam.classList.add(`hidden-team-four`);

    image.addEventListener(`mouseenter`, showOverlay);

    overlay.addEventListener(`mouseleave`, hideOverlay);
};


const initTO = function(){
    teamOverlay();
    teamOverlayTwo();
    teamOverlayThree();
    teamOverlayFour();
};
initTO();