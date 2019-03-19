
//RESPONSIVE MENU
$('.r-menu').click(function(){
    console.log('lcick');
    $(this).parent().find('ul').slideToggle();
});
