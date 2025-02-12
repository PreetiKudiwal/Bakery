var menuBars = document.querySelector('header i');
var overlay = document.querySelector('.overlay');
var menuSlider = document.querySelector('.menu-slider');
var body = document.querySelector('body');
var header = document.querySelector('.header');

// header section start //

menuBars.addEventListener('click', function () {
    overlay.classList.add('showOverlay');
    menuSlider.classList.add('show-menu-slider');
    menuBars.classList.add('fa-xmark');
    body.classList.add('stop-scroll');

})
overlay.addEventListener('click', function () {
    overlay.classList.toggle('showOverlay');
    menuSlider.classList.toggle('show-menu-slider');
    menuBars.classList.toggle('fa-xmark');
    body.classList.toggle('stop-scroll');
})

// header section end //

// pc-header section start

var pcHeader = document.querySelector('.pc-header');
var scrollHeader = document.querySelector('.bO-firstcontainer');

window.addEventListener('scroll', function () {
    if (window.scrollY > 110) {
        scrollHeader.style.top = '-9%';
        pcHeader.style.opacity = 1;



    } else {
        scrollHeader.style.top = '0%';
        pcHeader.style.opacity = 0;

    }
})

// pc-header section end

// client review section start //
$('.slider').slick(
    {
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,

    }
);

$('.desktop-slider').slick(
    {
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,

    }
);


// client review section end //