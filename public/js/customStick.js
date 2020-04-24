$(document).ready(function () {
    $('#responsive').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1375,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    arrows: false,
                }
            },
            {
                breakpoint: 925,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }
        ]
    });

    

    $('#hotelHome').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1375,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 6000,
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 6000,
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 6000,
                    slidesToShow: 2,
                    arrows: false,
                }
            }
        ]
    });

    $('#comment').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 6000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1375,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 6000,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 6000,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 6000,
                    arrows: false,
                    dots: false
                }
            }   
        ]
    });

});
