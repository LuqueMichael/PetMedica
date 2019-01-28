$(function () {

    //ALTERNATE MENU LARGE OR SMALL ON SCROLL
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 100) {
            $("#navbar-principal").removeClass("large").addClass("small");
        } else {
            $("#navbar-principal").removeClass("small").addClass("large");
        }
    });

    //SHOW SUBMENU PRODUCTS
    $('#submenu-productos').on('mouseover', function () {
        $('#submenu-petmedicapro-contenedor').removeClass('show');
        $('#submenu-productos-contenedor').addClass('show');
    });
    $('#submenu-productos-contenedor').on('mouseleave', function () {
        $('#submenu-productos-contenedor').removeClass('show');
    });
    //SHOW SUBMENU PETMEDICAPRO
    $('#submenu-petmedicapro').on('mouseover', function () {
        $('#submenu-productos-contenedor').removeClass('show');
        $('#submenu-petmedicapro-contenedor').addClass('show');
    });
    $('#submenu-petmedicapro-contenedor').on('mouseleave', function () {
        $('#submenu-petmedicapro-contenedor').removeClass('show');
    });

    //SLIDER AUTOPLAY
    $('#banner').carousel({
        interval: 5000,
        cycle: true
    });


});

(function ($) {
    "use strict";
    // Auto-scroll
    $('#productos-destacados').carousel({
      interval: 10000
    });
  
    // Control buttons
    $('#productos-destacados .next').click(function () {
      $('.carousel').carousel('next');
      return false;
    });
    $('#productos-destacados .prev').click(function () {
      $('.carousel').carousel('prev');
      return false;
    });
  
    // On carousel scroll
    $("#productos-destacados").on("slide.bs.carousel", function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".carousel-item").length;
      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide -
            (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end 
          if (e.direction == "left") {
            $(
              ".carousel-item").eq(i).appendTo(".carousel-inner");
          } else {
            $(".carousel-item").eq(0).appendTo(".carousel-inner");
          }
        }
      }
    });
  })
  (jQuery);