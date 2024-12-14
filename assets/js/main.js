(function($){
    "use strict";

    $(window).on("load", function (event) {
      setTimeout(function () {
        $(".preloader").fadeToggle();
      }, 200);
    
    });

    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
     
    // page-progress
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
     

    // stiky js
    var windowOn = $(window);
    windowOn.on('scroll', function () {
      var scroll = windowOn.scrollTop();
      if (scroll < 100) {
        $("#vl-header-sticky").removeClass("header-sticky");
      } else {
        $("#vl-header-sticky").addClass("header-sticky");
      }
    });
    




        // mobile menu 
        var vlMenuWrap = $('.vl-mobile-menu-active > ul').clone();
        var vlSideMenu = $('.vl-offcanvas-menu nav');
        vlSideMenu.append(vlMenuWrap);
        if ($(vlSideMenu).find('.sub-menu, .vl-mega-menu').length != 0) {
          $(vlSideMenu).find('.sub-menu, .vl-mega-menu').parent().append('<button class="vl-menu-close"><i class="fas fa-chevron-right"></i></button>');
        }
    
        var sideMenuList = $('.vl-offcanvas-menu nav > ul > li button.vl-menu-close, .vl-offcanvas-menu nav > ul li.has-dropdown > a');
        $(sideMenuList).on('click', function (e) {
          console.log(e);
          e.preventDefault();
          if (!($(this).parent().hasClass('active'))) {
            $(this).parent().addClass('active');
            $(this).siblings('.sub-menu, .vl-mega-menu').slideDown();
          } else {
            $(this).siblings('.sub-menu, .vl-mega-menu').slideUp();
            $(this).parent().removeClass('active');
          }
        });


    $(".vl-offcanvas-toggle").on('click',function(){
        $(".vl-offcanvas").addClass("vl-offcanvas-open");
        $(".vl-offcanvas-overlay").addClass("vl-offcanvas-overlay-open");
    });

    $(".vl-offcanvas-close-toggle,.vl-offcanvas-overlay").on('click', function(){
        $(".vl-offcanvas").removeClass("vl-offcanvas-open");
        $(".vl-offcanvas-overlay").removeClass("vl-offcanvas-overlay-open");
    });



    // progress
     function animateProgressBars() {
      const progressBars = document.querySelectorAll('.vl-progress-bar-fill');
      progressBars.forEach(bar => {
          const percentage = bar.getAttribute('data-percentage');
          bar.style.width = percentage + '%';
      });
  }

  window.addEventListener('load', animateProgressBars);



    // popup
    $('.popup-image').magnificPopup({
        type: 'image'
      });

      $('.popup-video').magnificPopup({
        type: 'iframe'
      });

      

      // Brand Logo-01
      $('.vl-brand-logo-active').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        arrows: false,
        swipe: false,
        slidesToShow: 5,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });


      // testimonial slider home-01
      $('.vl-testimonial-active').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      // $('#testimo4').owlCarousel({
      //   loop: true,
      //   margin: 30,
      //   dots: false,
      //   nav: true,
      //   items: 2,
      //   navText : ['<i class="fa-regular fa-arrow-left"></i>','<i class="fa-regular fa-arrow-right"></i>'],
      //   responsive:{
      //     0:{
      //         items:1,
      //         nav:true
      //     },
      //     600:{
      //         items:2,
      //         nav:true
      //     },
      //     1000:{
      //         items:2,
      //         nav:true,
      //         loop:true
      //     }
      //   }
      // })


      // testimonial slider home-02
      $('.vl-testimonial-active-2').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // prevArrow:'<span class="testiarrow-2 prev_arrow3"><i class="fa-regular fa-angle-right"></i></span>',
        // nextArrow:'<span class="testiarrow-2 next_arrow3"><i class="fa-regular fa-angle-left"></i></span>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      // testimonial slider home-02
      $('.vl-testimonial-active-3').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      // testimonial team home-02
      $('.vl-team2').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 0,  
        // speed: 5000, 
        // accessibility: true,
        prevArrow: $('.prev-btn2'),
        nextArrow: $('.next-btn2'),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      
      // studies active home-03
      $('.vl-studies-active').slick({
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,
        // centerPadding: '60px',
        // autoplay: true,
        // autoplaySpeed: 3000,
        prevArrow: $('.prev-btn1'),
        nextArrow: $('.next-btn1'),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      // Gallery Active Home 3
      $('#gallery3').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        items: 3,
        autoplay:true,
        autoplayTimeout:3000,
        navText : ['<i class="fa-regular fa-arrow-left"></i>','<i class="fa-regular fa-arrow-right"></i>'],
        responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:true
          },
          1000:{
              items:3,
              nav:true,
              loop:true
          }
        }
      })

      




      // testimonial active home-03
      $('.vl-testimonial-active-4').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        
        prevArrow: $('.prev-btn'),
        nextArrow: $('.next-btn'),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });


      
      // Team Active 01
      $('#test').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        items: 4,
        autoplay:true,
        autoplayTimeout:3000,
        navText : ['<i class="fa-light fa-arrow-left"></i>','<i class="fa-light fa-arrow-right"></i>'],
        responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:true
          },
          1000:{
              items:4,
              nav:true,
              loop:true
          }
        }
      })

      // Team Active About us
      $('#test2').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        items: 4,
        navText : ['<i class="fa-light fa-arrow-left"></i>','<i class="fa-light fa-arrow-right"></i>'],
        responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:true
          },
          1000:{
              items:4,
              nav:true,
              loop:true
          }
        }
      })

      // Gallery Active 01
      $('#gallery1').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay:true,
        autoplayTimeout:3000,
        items: 3,
        navText : ['<img src="assets/img/icons/caseRight.svg" alt="">','<img src="assets/img/icons/caseRight.svg" alt="">'],
        responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:true
          },
          1000:{
              items:3,
              nav:true,
              loop:true
          }
        }
      })

       // Testimonial Active 01
       $('#testimoni1').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay:true,
        autoplayTimeout:3000,
        items: 2,
        navText : ['<img src="assets/img/icons/caseRight.svg" alt="">','<img src="assets/img/icons/caseRight.svg" alt="">'],
        responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:true
          },
          1000:{
              items:2,
              nav:true,
              loop:true
          }
        }
      })


      // Gallery Active home 02
      $('#gallery2').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay:true,
        autoplayTimeout:3000,
        items: 3,
        navText : ['<i class="fa-regular fa-angle-left"></i>','<i class="fa-regular fa-angle-right"></i>'],
        responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:true
          },
          1000:{
              items:3,
              nav:true,
              loop:true
          }
        }
      })

      // Team Active home 02
      $('#teamm2').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        items: 3,
        autoplay:true,
        autoplayTimeout:3000,
        navText : ['<i class="fa-regular fa-angle-left"></i>','<i class="fa-regular fa-angle-right"></i>'],
        responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:true
          },
          1000:{
              items:3,
              nav:true,
              loop:true
          }
        }
      })





        $('#owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: true,
            items: 2,
        })


      

            // testimonial 2 test
            $('.vl-test-2-act').slick({
              dots: true,
              margin: '0 15px',
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '0px',
              arrows:false,
              autoplay: true,
              speed: 3000,
              // autoplaySpeed: 0,  
              // speed: 5000, 
              // accessibility: true, 
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    centerMode: true,
                  }
                }
              ]
            });
     


      // testimonial slider home-04
      $('.vl-testimonial-active-6').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        margin:30,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        prevArrow:'<span class="arrow-4 prev_arrow4"><i class="fa-regular fa-arrow-right"></i></span>',
        nextArrow:'<span class="arrow-4 next_arrow4"><i class="fa-regular fa-arrow-left"></i></span>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });





      // Gallery Active Home 01
      $(".vl-gallery-active").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        margin:30,
        arrows: true,
        // autoplay: true,
        //speed: 3000, 
        // accessibility: true, 
        prevArrow: $('.prev-btn'),
        nextArrow: $('.next-btn'),
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });



      // Gallery Active Home 02
      $(".vl-gallery-active-2").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        margin:30,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 0,  
        // speed: 5000, 
        // accessibility: true, 
        prevArrow: $('.prev-btn'),
        nextArrow: $('.next-btn'),
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });




      // About Us 
      $('.vl-about-inner-box-active').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        prevArrow:'<span class="arrow-7 prev_arrow7"><i class="fa-regular fa-arrow-right"></i></span>',
        nextArrow:'<span class="arrow-7 next_arrow7"><i class="fa-regular fa-arrow-left"></i></span>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      // pricing plan Brand
      $('.vl-brand-inner-active').slick({
          autoplay: true,
          autoplaySpeed: 0,
          speed: 5000,
          arrows: false,
          swipe: false,
          slidesToShow: 5,
          cssEase: 'linear',
          pauseOnFocus: false,
          pauseOnHover: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      


        

      // $(window).on('load', function() {
      //   $("#loading").fadeOut(500);
      // });

      // $(window).on('load', function() {
      //   $("#loading2").fadeOut(500);
      // });

      // $(window).on('load', function() {
      //   $("#loading4").fadeOut(500);
      // });


      // aos
      AOS.init();
      AOS.init({disable: 'mobile'});

})(jQuery);