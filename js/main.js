  // scrolling top	
	$('.top').click(function(){
		$("html, body").animate({
			scrollTop:0

		},1000);
	});
	$(window).scroll(function(){
		var ourwindow = $(this).scrollTop();
		if(ourwindow<800){
			$('.top').fadeOut();
		}else{
			$('.top').fadeIn();
		}
	});
  $('.navbar-nav a[href^="#"]').click(function(e) {
		e.preventDefault();
		var target = this.hash;
		$('html, body').animate({
			scrollTop: $(target).offset().top -50
		},500);
	});
// animation

  new WOW().init();