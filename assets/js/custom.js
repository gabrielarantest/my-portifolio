/*=========================================================================
        Preloader
=========================================================================*/
$(window).load(function() {
    "use strict";
    $(".preloader-outer").delay(350).fadeOut('slow');
});

$(function(){
    "use strict";
    /*=========================================================================
            One Page Nav
    =========================================================================*/
    $(".navigation").onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 700,
        scrollThreshold: 0.5,
        easing: 'easeInOutCubic'
    });

    /*=========================================================================
            Portfolio filter
    =========================================================================*/
      if($('#works .item-outer').length > 0){
        var filterizd = $('#works .item-outer').filterizr();
      }
      $( '.control ul li' ).on( 'click', function() {
            $( this ).parent().find( 'li.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
      });

    /*=========================================================================
            Hamburger Menu & Mobile Push menu
    =========================================================================*/
    $(".hamburger-menu, .main-nav ul li a").on( 'click', function() {
        $(".header").toggleClass("pushed");
        $(".main-content").toggleClass("main-pushed");
        $('.bar').toggleClass('animate');
    });

    /*=========================================================================
            Bootstrap Tooltip
    =========================================================================*/
    $(".resume-download").tooltip();

    /*=========================================================================
            Carousels / Resume, information-section, Customers /
    =========================================================================*/
      $(".customer-carousel").owlCarousel({
        items: 4
      });

      $(".resume-carousel, .information-section-carousel").owlCarousel({
        singleItem:true
      });

    /*=========================================================================
            Backstretch Background Slider
    =========================================================================*/
    $("#welcome").backstretch([
        "http://placehold.it/1200x768",
        "http://placehold.it/1200x768",
        // "assets/images/your_pic.jpg" 
    ], {duration: 5000, fade: 400});

    /*=========================================================================
            Welcome & Header Height
    =========================================================================*/
    $("#welcome").css({'height':($(window).height())+'px'});
    $(".header").css({'height':($(window).height())+'px'});

    /*=========================================================================
            Magnific Popup Functions
    =========================================================================*/
// Adicionar evento ao título
$('.portfolio-item').on('click', function (event) {
  // Ignorar cliques em hiperlinks
  if ($(event.target).is('a')) {
      return;
  }

  // Encontra a imagem correspondente
  const imageSrc = $(this).find('.work-image').attr('src');

  // Abrir o Magnific Popup com a imagem correspondente
  $.magnificPopup.open({
      items: {
          src: imageSrc
      },
      type: 'image',
      image: {
          titleSrc: function () {
              const title = $(event.currentTarget).find('.inner h2').text(); // Título
              const subtitle = $(event.currentTarget).find('.inner span').html(); // Subtítulo
              return `
                  <h3>${title}</h3>
                  <p>${subtitle}</p>
              `;
          }
      }
  });
});

// Alterar o ponteiro do mouse para indicar clicável
$('.portfolio-item').css('cursor', 'pointer');

// Exceção para links: manter o comportamento normal
$('.portfolio-item a').css('cursor', 'auto');


  

    $('.work-video').magnificPopup({
      type: 'iframe',
      iframe: {
          markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                  '</div>', 

          patterns: {
            youtube: {
              index: 'youtube.com/',

              id: 'v=',

              src: 'http://www.youtube.com/embed/%id%?autoplay=1'
            },
            vimeo: {
              index: 'vimeo.com/',
              id: '/',
              src: '//player.vimeo.com/video/%id%?autoplay=1'
            },
            gmaps: {
              index: '//maps.google.',
              src: '%id%&output=embed'
            }

          },

          srcAction: 'iframe_src',
        }
    });

});