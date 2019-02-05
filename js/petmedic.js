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
    /*$('#submenu-productos').on('mouseover', function () {
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
    });*/

    $('#navbar-principal').find('ul > li').children().on('mouseover', function () {
        let nav = $(this).attr('data-type');
        /*$('#submenu-petmedicapro-contenedor').removeClass('show');
        $('#submenu-productos-contenedor').removeClass('show');*/

        if (nav == 'submenu-productos') {
            $('#submenu-petmedicapro-contenedor').removeClass('show');
            $('#submenu-productos-contenedor').addClass('show');
        } else if (nav == 'submenu-petmedicapro') {
            $('#submenu-productos-contenedor').removeClass('show');
            $('#submenu-petmedicapro-contenedor').addClass('show');
        }
    });
    $('#submenu-productos-contenedor').on('mouseleave', function () {
        $('#submenu-productos-contenedor').removeClass('show');
    });
    $('#submenu-petmedicapro-contenedor').on('mouseleave', function () {
        $('#submenu-petmedicapro-contenedor').removeClass('show');
    });

    //SLIDER AUTOPLAY
    $('#banner').carousel({
        interval: 5000,
        cycle: true
    });

    //FILTER PRODUCTS
    $("#card-submenu").find('.nav-link').on("click", function (e) {
        e.preventDefault();
        var value = $(this).attr('data-target');
        $('#card-submenu').find('.nav-link').removeClass('active');
        $(this).addClass('active');
        if (value == 'todo') {
            $(".post").removeClass('hide');
        } else {
            $(".post").filter(function () {
                let flag = $(this).attr('data-target').toLowerCase().indexOf(value) > -1;
                if (flag) {
                    $(this).removeClass('hide');
                } else {
                    $(this).addClass('hide');
                }
            });
        }
    });

    //FILTER NAV
    $("#nav-lvl-1").find('a').on("mouseover", function () {
        var value = $(this).attr('data-target');
        /*$('#nav-lvl-1').find('a').parent().removeClass('active');
        $(this).addClass('active');*/
        if (value == 'todo') {
            $("#nav-lvl-2").find('a').parent().removeClass('hide');
            $("#nav-lvl-3").find('a').parent().removeClass('hide');
        } else {
            $("#nav-lvl-3").find('a').parent().removeClass('hide');
            $("#nav-lvl-2").find('a').filter(function () {
                let flag = $(this).attr('data-parent').toLowerCase().indexOf(value) > -1;
                if (flag) {
                    $(this).parent().removeClass('hide');
                } else {
                    $(this).parent().addClass('hide');
                }
            });
        }
    });
    $("#nav-lvl-2").find('a').on("mouseover", function () {
        var value = $(this).attr('data-target');
        /*$('#nav-lvl-2').find('a').parent().removeClass('active');
        $(this).addClass('active');*/
        if (value == 'todo') {
            $("#nav-lvl-2").find('a').parent().removeClass('hide');
            $("#nav-lvl-3").find('a').parent().removeClass('hide');
        } else {
            $("#nav-lvl-3").find('a').filter(function () {
                let flag = $(this).attr('data-parent').toLowerCase().indexOf(value) > -1;
                if (flag) {
                    $(this).parent().removeClass('hide');
                } else {
                    $(this).parent().addClass('hide');
                }
            });
        }
    });

    //SMOOOTH SCROLL
    $('.nav-link').click(function (e) {
        /*e.preventDefault();*/
        var sectionTo = $(this).attr('href');
        if (sectionTo == '#share-buttons') { //producto-detalle buttons
            let $elem = $(this).parent().find('.bubble');
            if( $elem.hasClass('show') ){
                $elem.removeClass('show');
                setTimeout(function(){ $elem.hide() },500);
            }else{
                $elem.show();
                $elem.addClass('show');
            }
        } else {            
            let position = $(sectionTo).offset().top;
            if (sectionTo == '#main') {
                position -= 80;
            }
            $('html, body').animate({
                scrollTop: position
            }, 1000);
        }
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