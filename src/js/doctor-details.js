
const clinic = document.getElementById('doctor-services');

if (clinic) {
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
        }, offers = new Glide(clinic, options).mount();
}