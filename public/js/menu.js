$('.toggle').click(function () {
    $(this).toggleClass('rotate');
    $('.menuMobel').slideToggle('slow');
})

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 20) {
        $('body>nav').addClass('scroll');
        $('.logo').attr('src', './public/images/logo2.png');
        $('.logo').addClass('logoScroll');
        $('.menu__item a').css('color', 'white');
        $('.span').css('background-color', 'white');

        $('.menuMobel').addClass('menuMobel--scroll'); // menu mobel
        $('.menuMobel__item a').css('color', 'white');
    }
    else {
        $('body>nav').removeClass('scroll');
        $('.logo').attr('src', './public/images/logo.png');
        $('.logo').removeClass('logoScroll');
        $('.menu__item a').css('color', 'black');
        $('.span').css('background-color', 'black');

        $('.menuMobel').removeClass('menuMobel--scroll');
        $('.menuMobel__item a').css('color', 'black');
    }
});