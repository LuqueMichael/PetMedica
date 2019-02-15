$(function () {

    //ALTERNATE MENU LARGE OR SMALL ON SCROLL
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 100) {
            $("#navbar-principal").removeClass("large").addClass("small");
            $('#submenu-productos-contenedor').css({
                'padding-top': '0'
            });
            $('#submenu-petmedicapro-contenedor').css({
                'top': '2rem'
            });
        } else {
            $("#navbar-principal").removeClass("small").addClass("large");
            $('#submenu-productos-contenedor').css({
                'padding-top': '30px'
            });
            $('#submenu-petmedicapro-contenedor').css({
                'top': '3rem'
            });
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
        var nav = $(this).attr('data-type');
        /*$('#submenu-petmedicapro-contenedor').removeClass('show');
        $('#submenu-productos-contenedor').removeClass('show');*/

        if (nav == 'submenu-productos') {
            //setTimeout(function(){ $('#submenu-productos-contenedor').show() },1);            
            $('#submenu-petmedicapro-contenedor').removeClass('show');
            $('#submenu-productos-contenedor').addClass('show');
        } else if (nav == 'submenu-petmedicapro') {
            //setTimeout(function(){ $('#submenu-petmedicapro-contenedor').show() },1);
            /*$('#navbar-principal').css({'box-shadow':'none'});*/
            $('#submenu-productos-contenedor').removeClass('show');
            $('#submenu-petmedicapro-contenedor').addClass('show');
        } else {
            $('#submenu-productos-contenedor').removeClass('show');
            $('#submenu-petmedicapro-contenedor').removeClass('show');
        }
    });
    $('#submenu-productos-contenedor').on('mouseleave', function () {
        $('#submenu-productos-contenedor').removeClass('show');
        $('#navbar-principal').removeAttr('style');
        //setTimeout(function(){ $('#submenu-productos-contenedor').hide() },500);
    });
    $('#submenu-petmedicapro-contenedor').on('mouseleave', function () {
        $('#submenu-petmedicapro-contenedor').removeClass('show');
        $('#navbar-principal').removeAttr('style');
        //setTimeout(function(){ $('#submenu-petmedicapro-contenedor').hide() },500);
    });

    //SLIDER AUTOPLAY
    $('#banner').carousel({
        interval: 5000,
        cycle: true
    });

    //SHOW ANIMATE
    $(window).on("scroll", function () {
        var elem = $('#ofertas').find('.input-suscribe'); // obtengo el elemento por id
        if (elem.length == 0) {
            return false;
        }
        isElementVisible(elem) ? elem.addClass('animation-suscribe') : elem.removeClass('animation-suscribe'); // si es visible agrego la class, de lo contrario la remuevo
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
                var flag = $(this).attr('data-target').toLowerCase().indexOf(value) > -1;
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
                var flag = $(this).attr('data-parent').toLowerCase().indexOf(value) > -1;
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
                var flag = $(this).attr('data-parent').toLowerCase().indexOf(value) > -1;
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
            var $elem = $(this).parent().find('.bubble');
            if ($elem.hasClass('show')) {
                $elem.removeClass('show');
                setTimeout(function () {
                    $elem.hide()
                }, 500);
            } else {
                $elem.show();
                $elem.addClass('show');
            }
        } else {
            var position = $(sectionTo).offset().top;
            if (sectionTo == '#main') {
                position -= 80;
            }
            $('html, body').animate({
                scrollTop: position
            }, 1000);
        }
    });

    //NAVIGATION CONTROLS IN REGISTER FORM
    $('#registro').find('.pages').on('click', 'a', function () {
        $(this).closest('.pages').find('a').removeClass('active');
        $(this).addClass('active');
        var step = $(this).attr('href').substring(1);
        if (step == 'step2') {
            $('#registro').find('.step1').css({
                'margin-left': '-75rem'
            })
            $('#registro').find('.step2').addClass('show');
        } else if (step == 'step1') {
            $('#registro').find('.step1').removeAttr('style');
            $('#registro').find('.step2').removeClass('show');
        }
    });
    $('#registro').find('.btn-next').on('click', function () {
        $('#registro').find('.pages').find('a').removeClass('active');
        $('#registro').find('.pages').find('a[href="#step2"]').addClass('active');
        $('#registro').find('.step1').css({
            'margin-left': '-75rem'
        })
        $('#registro').find('.step2').addClass('show');
    });

    //SLIDER CONTROL     
    $('#productos-destacados').carousel({
        wrap: false,
        interval: false
    });
    // Control buttons
    $('#productos-destacados .next').click(function () {
        $('.carousel').carousel('next');
        toggleSliderControls();
        return false;
    });
    $('#productos-destacados .prev').click(function () {
        $('.carousel').carousel('prev');
        toggleSliderControls();
        return false;
    });


    /*
        EVENTO CAPTURA DE URL  - DEMO
    */
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("e");
    $('#form-registro-step1').find('.email').val(c);
    $('#unirse-form').on('submit',function(){
        
        $('<input />').attr('type', 'hidden')
          .attr('name', "e")
          .attr('value', $('#ofertas').find('.input-suscribe').val())
          .appendTo('#unirse-form');
      return true;
    });
});


function toggleSliderControls(){
    setTimeout(function(){
        if ($('#productos-destacados').find('.carousel-inner .carousel-item:first').hasClass('active')) {
            $('#productos-destacados').find('.prev').removeClass('show');
            $("#productos-destacados").find('.next').addClass('show');
        } else if ($('#productos-destacados').find('.carousel-inner .carousel-item:last').hasClass('active')) {
            $("#productos-destacados").find('.prev').addClass('show');
            $('#productos-destacados').find('.next').removeClass('show');
        }else{
            $("#productos-destacados").find('.prev').addClass('show');
            $("#productos-destacados").find('.next').addClass('show');
        }
    },600);
}

function isElementVisible(elem) {
    let viewScrollTop = $(window).scrollTop(); // distancia de scroll superior
    let viewBottom = viewScrollTop + $(window).height(); // distancia de scroll + el alto actual de window (lo no visible por scroll + lo visible)
    let topElemD = $(elem).offset().top; // distancia desde el elemento hasta el tope superior del viewport
    return (topElemD < viewBottom);
}