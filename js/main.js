$(document).ready(function(){

    /* nav button click event */
    var clicked = true;

    $('header .nav-btn').click(function (e) {

    	var $this = $(this);
    	if(clicked){

    		clicked = false;
        	$this.parent().toggleClass('active');
        	setTimeout(function(){clicked = true}, 1450);


    	}



    });
    var $mainSection = $('.main-section');
    $(window).scroll(function(){

      if($(window).scrollTop() >= $mainSection.height() - 100){
        $('header').addClass('sticky');
      }else{
        $('header').removeClass('sticky');
      }

    });

});
