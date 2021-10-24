
// Needed variables
const close_button = document.getElementById('js-menu-toggle'),
    menu_links = document.querySelector('#main-links ul'),
    array_of_select_id = [
        'js-city-select',
        'js-specialist-select',
        'js-area-select',
        'js-select-result-order',
    ],
    array_of_slider_id = [
        'js-doctor-services',
        'js-specializes',
        'js-offers',
    ],
    glide_slider_options = {
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
    },
    current_year = document.getElementById('js-current-year'),
    header_angle_down = document.querySelector('.angle-down a'),
    hero_header_index_page = document.getElementById('js-header'),
    login_input = document.querySelector('.login-form #email-input');

// Toggle menu on navbar

close_button.onclick = function (event) {
    'use strict';
    this.classList.toggle('open');
    menu_links.classList.toggle('open');
    event.stopPropagation();
};

menu_links.onclick = function (event) {
    'use strict';
    event.stopPropagation();
};


document.addEventListener('click', event => {
    'use strict';
    const event_condition = event.target !== menu_links
        && event.target !== close_button
        && menu_links.classList.contains('open');

    if (event_condition) {
        menu_links.classList.toggle('open');
        close_button.classList.toggle('open');
    }
});


if (header_angle_down) {
    header_angle_down.onclick = function () {
        'use strict';
        document.querySelector('.offers').scrollIntoView({
            behavior: 'smooth',
        });
    };
}


// Replace email input with tel if start by number
if (login_input) {
    login_input.onKeyup = function () {
        'use strict';
        if (!isNaN(this.value[0])) {
            this.type = 'tel';
        }
        this.type = 'email';
    };
}


// Nice select plugin 

array_of_select_id.forEach(selector_id => {
    'use strict';
    const temp = document.getElementById(selector_id);
    if (temp) {
        NiceSelect.bind(temp);
    }
});

// Glide slider

array_of_slider_id.forEach(slider_id => {
    'use strict';
    const temp = document.getElementById(slider_id);
    if (temp) {
        new Glide(temp, glide_slider_options).mount();
    }
});

function setWindowHeight() {
    'use strict';
    const window_height = window.innerHeight,
        nav_height = document.querySelector('nav').clientHeight;
    hero_header_index_page.style.height = `${window_height - nav_height}px`;
}

if(hero_header_index_page){
    window.addEventListener('resize', setWindowHeight, false);
    setWindowHeight();
}


// Show current year on footer
current_year.textContent = new Date().getFullYear().toString();
