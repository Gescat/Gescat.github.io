$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$('.top').css('display','block')
		}else{
			$('.top').css('display','none')
		}
	})
	$('.top').click(function(){
		$('body,html').animate({
			scrollTop:0
		},300)
	})

})
