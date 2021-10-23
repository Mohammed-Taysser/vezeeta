
// Toggle menu on navbar
const close_button = document.getElementById('js-menu-toggle'),
    menu_links = document.querySelector('#main-links ul');

close_button.onclick = function (event) {
    'use strict';
    this.classList.toggle('open');
    menu_links.classList.toggle('open');
    event.stopPropagation();
};

menu_links.onclick = function (e) {
    'use strict';
    e.stopPropagation();
};

document.addEventListener('click', event => {
    'use strict';
    if (event.target !== menu_links && event.target !== close_button) {
        if (menu_links.classList.contains('open')) {
            menu_links.classList.toggle('open');
            close_button.classList.toggle('open');
        }
    }
});

function setWindowHeight() {
    'use strict';
    const window_height = window.innerHeight,
        nav_height = document.querySelector('nav').clientHeight;
    document.getElementById('js-header').style.height = `${window_height - nav_height}px`;
}

window.addEventListener('resize', setWindowHeight, false);
setWindowHeight();

// Header carousel
// Const header = document.querySelector('header');
// SetInterval(function () {
//     'use strict';
//     Const random_image_number = Math.floor(Math.random() * 5) + 1;
//     Header.style.opacity = 0;
//     SetTimeout(function () {
//         Header.style('background-image', `url('../images/header/header-${ random_image_number }.jpg')`);
//     }, 1000);
//     SetTimeout(function () {
//         Header.style.opacity = 1;
//     }, 1100);
// }, 5000);

document.querySelector('.angle-down a').onclick = function () {
    'use strict';
    document.querySelector('.offers').scrollIntoView({ behavior: 'smooth' });
};

// // Rotate filter svg on click
// Document.querySelector('.doctors .accordion ul li').on('click', function () {
//     'use strict';
//     Document.querySelector('.doctors .accordion ul li .arrow').removeClass('rotate--90');
//     This.children('.arrow').toggleClass('rotate--90');
// });


// // Show current year on footer
const current_year = document.getElementById('js-current-year');
current_year.textContent = new Date().getFullYear().toString();

// Replace email input with tel if start by number
// Document.querySelector('.login-form #email-input').onKeyup = function () {
//     'use strict';
//     If (!isNaN(this.value[0])) {
//         This.type = 'tel';
//     } else {
//         This.type = 'email';
//     }
// };

NiceSelect.bind(document.getElementById('js-city-select'));
NiceSelect.bind(document.getElementById('js-specialist-select'));
NiceSelect.bind(document.getElementById('js-area-select'));


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
}, offers = new Glide('#offers', options).mount()
    , specialiies = new Glide('#specialiies', options).mount();
