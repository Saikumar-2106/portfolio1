$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | SANJEEVUS";
        }
        else {
            document.title = "Come Back To Portfolio";
            
        }
    }
);

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Back-End development", "Front-End development","Web Designer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
});
// <!-- typed js effect ends -->
//<!--testimonial-->
// Used bootstrap v4.5,jquery v3.5.1, owl carousel v2, font awesome v4.7.0

$('.testi.owl-carousel').owlCarousel({
    items: 2,
    margin:10,
    lazyLoad: true,
    dots:true,
    autoPlay: true,
    autoPlayTimeout: 3000,
    responsive:{
      0:{
        items:1,
      },
      600:{
        items:2,
      },
      1000:{
        items:2,
      }
    }
  });











