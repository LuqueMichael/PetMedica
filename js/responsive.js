$(document).on('ready',function(){
    //RESPONSIVE MENU
    $('.btn-white').on('click',function(){
        console.log('lcick');
        $(this).parent().find('ul').show()
    });
});