$(window).on('load', function() {
    /*==============================
             Preloader
    ===============================*/
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
})

$(document).ready(function() {

    /*=======================
          Sticky Navbar
    =========================*/

    $(window).scroll(function() {
        if ($(window).scrollTop() > 190) {
            // show sticky header
            $(".navigation").addClass("sticky-top");
            $(".brand img").attr("src", "assets/img/logo/ankur_logo_light.png");

        } else {
            $(".navigation").removeClass("sticky-top");
            $(".brand img").attr("src", "assets/img/logo/ankur_logo.png");
        }
    })

    /*=======================
             Smooth Scrolling
    =========================*/
    $(".smooth-scroll").click(function(event) {
        event.preventDefault();
        var sectionId = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(sectionId).offset().top - 69
        }, 1200, "easeInOutCirc");
    });
    /*==============================
                 Stats Section           
    ===============================*/
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    /*==============================
             Search Button           
    ===============================*/
    $(document).ready(function() {
        $('#close-btn').click(function() {
            $('#search-overlay').fadeOut();
            $('#search-btn').show();
        });
        $('#search-btn').click(function() {
            $(this).hide();
            $('#search-overlay').fadeIn();
        });
    });

    /*==============================
             Magnific Popup           
    ===============================*/
    $('.test-popup-link').magnificPopup({
        type: 'image'
    });

    $('.contact-item').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.gallery-image').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /*==============================
              Progress Bar
    ===============================*/
    $('#progress-elements').waypoint(function() {

        $('.progress-bar').each(function() {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000, "linear");
        });

        this.destroy();

    }, {
        offset: 'bottom-in-view'
    });

    /*==============================
              Countdown
    ===============================*/

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let countDown = new Date('Oct 30, 2024 00:00:00').getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;
            document.getElementById('days').innerText = Math.floor(distance / (day));
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
        }, seconds)

});
// Testimonial Slider
$('.testimonial-slider-area').owlCarousel({
    loop: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 0,
    nav: true,
    navText: [

        "<i class='fa fa-long-arrow-left arrow-left'></i>",
        "<i class='fa fa-long-arrow-right arrow-right'></i>"

    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1200: {
            items: 2,
        }
    }
});
// Testimonial Slider Three
$('.client_review_three_wrapper').owlCarousel({
    loop: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 0,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
});

// Our Gallery Three
$('.gallery_three_slider').owlCarousel({
    loop: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 20,
    nav: false,
    responsive: {
        0: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
});


// Testimonial four Slider
$('.testimonial_four_wrapper').owlCarousel({
    loop: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    nav: true,
    navText: [

        "<i class='fa fa-long-arrow-left arrow-left'></i> prev",
        "next <i class='fa fa-long-arrow-right arrow-right'></i>"

    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
});

// home-5 category Slider
$('.learning_category_slider').owlCarousel({
    loop: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 0,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        480: {
            items: 2,
        },
        768: {
            items: 3,
        },
        992: {
            items: 4,
        },
        1200: {
            items: 5
        },
        1600: {
            items: 7
        }
    }
});


// home-5 service slider
$('.service_slider_five_wrapper').owlCarousel({
    loop: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 20,
    nav: true,
    navText: [

        "<i class='fa fa-long-arrow-left arrow-left'></i>",
        "<i class='fa fa-long-arrow-right arrow-right'></i>"

    ],
    responsive: {
        0: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
});

// Testimonial Slider five
$('.testimonial_five_slider_wrapper').owlCarousel({
    loop: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    nav: true,
    navText: [

        "<i class='fa fa-long-arrow-left arrow-left'></i> Prev",
        "Next <i class='fa fa-long-arrow-right arrow-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
});
/*==============================
            About And Impex
===============================*/
$('.class-details-slider').owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 600,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
});

// Video Plugin
var $iframe = $('iframe'),
    $videoLink = $('.video-link'),
    playerTemplate =
    '<div class="player"><div class="player__video"><div class="video-filler"></div><button class="video-close">&times;</button><iframe class="video-iframe" src="{{iframevideo}}" frameborder="0" allowfullscreen></iframe></div><div/>';

$videoLink.on('click', function(e) {
    var localTemplate = '',
        videoWidth = parseInt($(this).data('width')),
        videoHeight = parseInt($(this).data('height')),
        videoAspect = (videoHeight / videoWidth) * 100,
        $player = null,
        $video = null,
        $close = null,
        $iframe = null;

    e.preventDefault();

    localTemplate = playerTemplate.replace(
        '{{iframevideo}}',
        $(this).prop('href')
    );

    $player = $(localTemplate);

    $player.find('.video-filler').css('padding-top', videoAspect + '%');

    $close = $player.find('.video-close').on('click', function() {
        $(this)
            .off()
            .closest('.player')
            .hide()
            .remove();
    });

    $player.appendTo('body').addClass('js--show-video');
});

/*===============================
            NavBar
=================================*/
(function($) {
    $(function() {
        $('#navbar-toggle').click(function() {
            $('nav ul').slideToggle();
        });
        $('#navbar-toggle').on('click', function() {
            this.classList.toggle('active');
        });

        $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.navbar-dropdown').slideToggle("slow");

            $('.navbar-dropdown').not($(this).siblings()).hide("slow");
            e.stopPropagation();
        });

        $('html').click(function() {
            $('.navbar-dropdown').hide();
        });
    });
})(jQuery);

/*==============================
           Search Button           
  ===============================*/
$(document).ready(function() {
    $('#close-btn').click(function() {
        $('#search-overlay').fadeOut();
        $('#search-btn').show();
    });
    $('#search-btn').click(function() {
        $(this).hide();
        $('#search-overlay').fadeIn();
    });
});

/*==============================
      Responsive Tabs
===============================*/
$(document).ready(function() {
    $(".nav-tabs a").click(function() {
        $(this).tab('show');
    });
});
document.getElementById("defaultOpen").click();