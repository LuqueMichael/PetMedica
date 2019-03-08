$(function () {

    //ANIMATIONS
    $('#banner').find('.carousel-caption').on('mouseover', function () {
        $('#banner').find('.overlay-slid').addClass('overlay-slide-h');
        $('#banner').find('.jquery-background-video').addClass('jquery-background-video-h');
    }).on('mouseleave', function () {
        $('#banner').find('.overlay-slid').removeClass('overlay-slide-h');
        $('#banner').find('.jquery-background-video').removeClass('jquery-background-video-h');
    });

    //Logout-Button in Home-Pro
    $('#navbar-pro .btn_chev').on('click', function () {
        $(this).toggleClass('active');
        $('#navbar-pro .log-out').toggleClass('show');
    });

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

    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });
    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

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
    /*$("#nav-lvl-1").find('a').on("mouseover", function () {
        //set active item
        $("#nav-lvl-1").find('a').removeClass('active');
        $(this).addClass('active');
        var value = $(this).attr('data-target');
        /*$('#nav-lvl-1').find('a').parent().removeClass('active');
        $(this).addClass('active');*/
       /* if (value == 'todo') {
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
        //set active item
        $("#nav-lvl-2").find('a').removeClass('active');
        $(this).addClass('active');
        var value = $(this).attr('data-target');
        /*$('#nav-lvl-2').find('a').parent().removeClass('active');
        $(this).addClass('active');*/
        /*if (value == 'todo') {
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
    });*/
    //Dividir en caso sean demasiado (>14) items
    /*if ($("#nav-lvl-3").find('li').length > 14) {
        var $items = $("#nav-lvl-3").find('li');
        for (var indx = 14; indx <= $items.length; indx++) {
            console.log($items[indx]);
            $($items[indx]).appendTo('#nav-lvl-3_2');
        }
    }*/

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
            //TRY-CATCH
            if (sectionTo == undefined || sectionTo.length < 2) {
                return true;
            }
            var position = $(sectionTo).offset().top;
            if (sectionTo == '#main') {
                position -= 80;
            }
            $('html, body').animate({
                scrollTop: position
            }, 1000);
        }
    });
    $('.nav-link[href="#share-buttons"]').on('mouseover', function () {
        var $elem = $(this).parent().find('.bubble');
        $elem.show();
        $elem.addClass('show');
    }).next().on('mouseleave', function () {
        var $elem = $(this).parent().find('.bubble');
        $elem.removeClass('show');
        setTimeout(function () {
            $elem.hide()
        }, 500);
    });

    //NAVIGATION CONTROLS IN REGISTER FORM
    /*$('#registro').find('.pages').on('click', 'li', function () {
        $(this).closest('.pages').find('li').removeClass('active');
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
    });*/
    /**
     * FORMULARIO DE REGISTRO
     */
    //STEP 1
    $('#form-registro-step1').on('click', '.btn-next', function () {
        $.each($('#form-registro-step1').find('.log-status').find('input'), function () { //resaltar input vacios
            if ($(this).val() == '') {
                $(this).closest('.log-status').addClass('wrong-entry');
            } else {
                $(this).closest('.log-status').removeClass('wrong-entry');
            }
        });
        if ($('#form-registro-step1').find('.wrong-entry').length <= 0) {
            //continue register
            $('#registro').find('.pages').find('li').removeClass('active');
            $('#registro').find('.pages').find('li').last().addClass('active');
            $('#registro').find('.step1').css({
                'margin-left': '-75rem'
            })
            $('#registro').find('.step2').addClass('show');
        }

        //$('.alert').fadeIn(500);
        //setTimeout( "$('.alert').fadeOut(1500);",3000 );
        /*
         */
    });
    //STEP 2
    /*$('#form-registro-step2').on('click', '.btn-submit', function () {
        $.each($('#form-registro-step2').find('.log-status').find('input'), function () { //resaltar input vacios
            if ($(this).val() == '') {
                $(this).closest('.log-status').addClass('wrong-entry');
            } else {
                $(this).closest('.log-status').removeClass('wrong-entry');
            }
        });
        if ($('#form-registro-step2').find('.wrong-entry').length <= 0) {
            alert('enviando datos...')
        }
    });
*/
    //SLIDER CONTROL PRODUCTOS DESTACADOS
    $('#productos-destacados').carousel({
        wrap: false,
        interval: false
    });
    // Control buttons
    $('#productos-destacados .next').click(function () {
        $('#productos-destacados').carousel('next');
        toggleSliderControls($('#productos-destacados'));
        return false;
    });
    $('#productos-destacados .prev').click(function () {
        $('#productos-destacados').carousel('prev');
        toggleSliderControls($('#productos-destacados'));
        return false;
    });
    //SLIDER CONTROL  PRODUCTOS NUEVOS   
    $('#nuevos-productos').carousel({
        wrap: false,
        interval: false
    });
    // Control buttons
    $('#nuevos-productos .next').click(function () {
        $('#nuevos-productos').carousel('next');
        toggleSliderControls($('#nuevos-productos'));
        return false;
    });
    $('#nuevos-productos .prev').click(function () {
        $('#nuevos-productos').carousel('prev');
        toggleSliderControls($('#nuevos-productos'));
        return false;
    });

    var $videoSrc;
    $('.video-btn').on('click', function () {
        $videoSrc = $(this).data("src");
    });
    //FIX PRODUCT-DETAIL
    $('#video-btn').on('click', function () {
        $videoSrc = $(this).data("src");
    });
    $('#video-modal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1");
    })
    $('#video-modal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })

    /**
     * EFECTO RIPPLES BUTTON
     */

    var $ripples = $('.ripples');
    $ripples.on('click.Ripples', function (e) {
        var $this = $(this);
        var $offset = $this.parent().offset();
        var $circle = $this.find('.ripplesCircle');
        var x = e.pageX - $offset.left;
        var y = e.pageY - $offset.top;
        $circle.css({
            top: y + 'px',
            left: x + 'px'
        });
        $this.addClass('is-active');
    });
    $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function (e) {
        $(this).removeClass('is-active');
    });


    /*
        EVENTO CAPTURA DE URL  - DEMO
    */
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("e");
    $('#form-registro-step1').find('.email').val(c);
    $('#unirse-form').on('submit', function () {

        $('<input />').attr('type', 'hidden')
            .attr('name', "e")
            .attr('value', $('#ofertas').find('.input-suscribe').val())
            .appendTo('#unirse-form');
        return true;
    });
});


function toggleSliderControls($context) {
    setTimeout(function () {
        if ($context.find('.carousel-inner .carousel-item:first').hasClass('active')) {
            $context.find('.prev').removeClass('show');
            $context.find('.next').addClass('show');
        } else if ($context.find('.carousel-inner .carousel-item:last').hasClass('active')) {
            $context.find('.prev').addClass('show');
            $context.find('.next').removeClass('show');
        } else {
            $context.find('.prev').addClass('show');
            $context.find('.next').addClass('show');
        }
    }, 600);
}

function isElementVisible(elem) {
    var viewScrollTop = $(window).scrollTop(); // distancia de scroll superior
    var viewBottom = viewScrollTop + $(window).height(); // distancia de scroll + el alto actual de window (lo no visible por scroll + lo visible)
    var topElemD = $(elem).offset().top; // distancia desde el elemento hasta el tope superior del viewport
    return (topElemD < viewBottom);
}

/**
 * @param1 ID DIV
 * @param2 items
 */
function toMuchItems($param1, $param2) {

}