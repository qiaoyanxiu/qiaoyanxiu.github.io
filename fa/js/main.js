$(function(){
			var n=0;
			function run(){
				n++;
				n=(n==5)?0:n;
				$(".jumbotron img").eq(n).fadeIn(1000).siblings("img").fadeOut(1000);
			}
			var timer=setInterval(run,2000);	
			$(".jumbotron ul li").mouseenter(function(){
				$(".jumbotron img").eq(n).fadeIn(1000).siblings("img").fadeOut(1000);
				$(this).css({"background":"red"}).siblings("li").css({"background":"#000"});
			}).mouseleave(function(){
				timer=setInterval(run,2000);
			})
		})
    
$(function(){

	$('.slide .icon li').not('.up,.down').mouseenter(function(){
		$('.slide .info').addClass('hover');
		$('.slide .info li').hide();
		$('.slide .info li.'+$(this).attr('class')).show();//.slide .info li.qq
	});
	$('.slide').mouseleave(function(){
		$('.slide .info').removeClass('hover');
	});
	
	$('#btn').click(function(){
		$('.slide').toggle();
		if($(this).hasClass('index_cy')){
			$(this).removeClass('index_cy');
			$(this).addClass('index_cy2');
		}else{
			$(this).removeClass('index_cy2');
			$(this).addClass('index_cy');
		}
		
	});
	
});
