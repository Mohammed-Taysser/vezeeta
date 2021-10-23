
function setWindowHeight() {
    'use strict';
    const window_height = window.innerHeight,
        nav_height = document.querySelector('nav').clientHeight;
    document.getElementById('js-header').style.height = `${window_height - nav_height}px`;
}

window.addEventListener('resize', setWindowHeight, false);
setWindowHeight();


const options = {
        type: 'carousel',
        perView: 4,
        autoplay: 5000,
        breakpoints: {
            992: {
                perView: 3,
            },
            768: {
                perView: 2,
            },
            567: {
                perView: 1,
            },
        },
    }, offers = new Glide('#offers', options).mount(),
    specialiies = new Glide('#specialiies', options).mount();
