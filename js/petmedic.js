$(function(){

    //ALTERNATE MENU LARGE OR SMALL ON SCROLL
    $(document).on("scroll",function(){
        if($(document).scrollTop()>100){
            $("#navbar-principal").removeClass("large").addClass("small");
        } else{
            $("#navbar-principal").removeClass("small").addClass("large");
        }
    });

    //SHOW SUBMENU PRODUCTS
    $('#submenu-productos').on('mouseover',function(){
        $('#submenu-petmedicapro-contenedor').removeClass('show');
        $('#submenu-productos-contenedor').addClass('show');
    });
    $('#submenu-productos-contenedor').on('mouseleave',function(){
        $('#submenu-productos-contenedor').removeClass('show');
    });
    //SHOW SUBMENU PETMEDICAPRO
    $('#submenu-petmedicapro').on('mouseover',function(){
        $('#submenu-productos-contenedor').removeClass('show');
        $('#submenu-petmedicapro-contenedor').addClass('show');
    });
    $('#submenu-petmedicapro-contenedor').on('mouseleave',function(){
        $('#submenu-petmedicapro-contenedor').removeClass('show');
    });


    /*
    
    */

});