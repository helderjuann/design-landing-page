$(function() {
    $('.img-wrapper').slick({
        centerMode: true,
        slidesToShow: 5,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 3,
                    infinite: true
                }
            },

            {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                    infinite: true
                }
            },

            {
                breakpoint: 380,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    infinite: true
                }
            }
        ]
    });
})
