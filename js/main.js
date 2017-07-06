$(document).ready(function(){

    /* nav button click event */

    $('header .nav-btn').click(function (e) { 
        $(this).parent().toggleClass('active');
        
    });

});