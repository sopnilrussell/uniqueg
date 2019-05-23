$(window).load(function() {
    $('.preloader').fadeOut('slow');
 });

(function ($) {
    "use strict";
    // mobile menu
    // sidebar
    $('#open-sidebar').click(function (event) {
        $('.sidebar').addClass('sidebar-open');
        event.preventDefault();
    })
    $('#close-sidebar').click(function () {
        $('.sidebar').removeClass('sidebar-open');
        event.preventDefault();
    })

    // sidebar sub menu
    var subMenu = document.querySelector(".sidebar-sub-menu");
    subMenu.style.display = "none";
    $("a.with-side-sub").click(function () {
        if (subMenu.style.display == "none") {
            subMenu.style.display = "block"
        } else {
            subMenu.style.display = "none"
        }
    })

    // counterup
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // Isotope Active
    var $grid = $('.portfolio-active').isotope({
        itemSelector: '.grid-item',
    })

    //isotope button
    $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    // Main slider
    $('.slider-active').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: false,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    })


    // Testimonial slider
    $('.testimonial-slider-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1540,
                settings: {
                    dots: false,
                    infinite: true,
                    autoplay: true,
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    infinite: true,
                    autoplay: true,
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    infinite: true,
                    autoplay: true,
                    arrows: false,
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    autoplay: true,
                    arrows: false,
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })



    // Brand slider
    $('.brand-slider-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
        speed: 300,
        slidesToShow: 5,
        responsive: [{
                breakpoint: 1540,
                settings: {
                    dots: false,
                    infinite: true,
                    autoplay: true,
                    arrows: false,
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    infinite: true,
                    autoplay: true,
                    arrows: false,
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    infinite: true,
                    autoplay: true,
                    arrows: false,
                    dots: false,
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    autoplay: true,
                    arrows: false,
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 410,
                settings: {
                    infinite: true,
                    autoplay: true,
                    arrows: false,
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })



    // blog-slider
    $('.blog-slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    })


    // recent post slider
    $('.recent-post-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 992,
                settings: {
                    infinite: true,
                    autoplay: true,
                    arrows: false,
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    autoplay: true,
                    arrows: false,
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })


    // team slider
    $('.team-content-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.team-slider-active'
    });
    $('.team-slider-active').slick({
        slidesToShow: 7 ,
        slidesToScroll: 1,
        asNavFor: '.team-content-active',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding:0,
        responsive: [{
            breakpoint: 992,
            settings: {
                infinite: true,
                autoplay: true,
                arrows: false,
                dots: false,
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                autoplay: true,
                arrows: false,
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
    });

    

    

})(jQuery);
