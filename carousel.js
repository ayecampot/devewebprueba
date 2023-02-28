
new Glide('.glide', {
    type: 'carousel',
    perView: 5,
    breakpoints: {
        800: {
            perView: 4
        },
    600: {
            perView: 1
        }
    }
}).mount();


