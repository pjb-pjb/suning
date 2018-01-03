$(window).on("scroll",function(){
			if($(this).scrollTop()>874){
				$(".fix-bar").css("display","block");
				$(".daohang-right-d2").addClass("daohang-right-d2-fixed");
				$(".daohang-right-d3 a").addClass("daohang-right-d3-fixed")
				$(".nav1").addClass("nav1-fixed");
				$(".nav1 .nav1-d1").css("display","none");
				$(".sousuo3-d").addClass("sousuo3-d-fixed");
				$(".sousuo3-d2").css("display","none");
				$(".nav1").hover(function(){
					$(".nav1 .nav1-d1").css("display","block");
				},function(){
					$(".nav1 .nav1-d1").css("display","none");
				}
				);
			}
			else{
				$(".nav1").hover(function(){
					$(".nav1 .nav1-d1").css("display","block");
				},function(){
					$(".nav1 .nav1-d1").css("display","block");
				}
				);
				$(".sousuo3-d2").css("display","block")
				$(".fix-bar").css("display","none");
				$(".daohang-right-d2").removeClass("daohang-right-d2-fixed");
				$(".daohang-right-d3 a").removeClass("daohang-right-d3-fixed")
				$(".bar-nav .nav1").removeClass("nav1-fixed");
				$(".nav1 .nav1-d1").css("display","block");
				$(".sousuo3-d").removeClass("sousuo3-d-fixed");
			}
});
let flag=0;
$(window).scroll(function(){
	console.log(flag);
	if(flag==0){
	var y1=$("#phone").offset().top;
	var y2=$("#dq").offset().top;
	var y3=$("#zn").offset().top;
	var y4=$("#sh").offset().top;
	var y5=$("#mw").offset().top;
	var y6=$("#mm").offset().top;
	var y7=$("#fz").offset().top;
	var y8=$("#jr").offset().top;
	var y9=$("#bq").offset().top;
	var y10=$("#like").offset().top;
	var w=$(window).height();
	if($(window).scrollTop()>(y1-w)){
		$(".aside-left").css("display","block");
		$(".aside-left li").eq(0).addClass("color").siblings().removeClass("color");
	}
	if($(window).scrollTop()>(y2-w)){
		$(".aside-left li").eq(1).addClass("color").siblings().removeClass("color");
	}
	if($(window).scrollTop()>(y3-w)){
		$(".aside-left li").eq(2).addClass("color").siblings().removeClass("color");
	}
	if($(window).scrollTop()>(y4-w)){
		$(".aside-left li").eq(3).addClass("color").siblings().removeClass("color");
	}
	if($(window).scrollTop()>(y5-w)){
		$(".aside-left li").eq(4).addClass("color").siblings().removeClass("color");
	}
	if($(window).scrollTop()>(y5)){
		$(".aside-left li").eq(5).addClass("color").siblings().removeClass("color");
	}
	if($(window).scrollTop()>(y7-w)){
		$(".aside-left li").eq(6).addClass("color").siblings().removeClass("color");
	}
	if($(window).scrollTop()>(y8-w)){
		$(".aside-left li").eq(7).addClass("color").siblings().removeClass("color");
	}
	if($(window).scrollTop()>(y9-w)){
		$(".aside-left li").eq(8).addClass("color").siblings().removeClass("color");
	}
	if($(window).scrollTop()>(y9)){
		$(".aside-left li").eq(9).addClass("color").siblings().removeClass("color");
	}	
	if($(window).scrollTop()<=(y1-$("#phone").outerHeight())){
		$(".aside-left").css("display","none");	
	}
	if($(window).scrollTop()>(y10+$("#like").outerHeight()*0.4)){
		$(".aside-left").css("display","none");
	}
	}
});
$(function(){
	var y1=$("#phone").offset().top-80;
	var y2=$("#dq").offset().top-80;
	var y3=$("#zn").offset().top-80;
	var y4=$("#sh").offset().top-80;
	var y5=$("#mw").offset().top-80;
	var y6=$("#mm").offset().top-80;
	var y7=$("#fz").offset().top-80;
	var y8=$("#jr").offset().top-80;
	var y9=$("#bq").offset().top-80;
	var y10=$("#like").offset().top-80;
	$('#l').click(
		function(){
			$('html,body').animate({scrollTop: "100px"}, 100,function(){});
		});
	$('#l1').click(function(){
		flag=1;
		$('html,body').animate({scrollTop: y1+'px'}, 100,function(){
			flag=0;
		});
	});
	$('#l2').click(function(){
		flag=1;
		$('html,body').animate({scrollTop: y2+'px'},100,function(){
			flag=0
		});
	});
	$('#l3').click(function(){
		flag=1;
		$('html,body').animate({scrollTop: y3+'px'}, 100,function(){
			flag=0
		});
	});
	$('#l4').click(function(){flag=1;$('html,body').animate({scrollTop: y4+'px'}, 100,function(){flag=0});});
	$('#l5').click(function(){flag=1;$('html,body').animate({scrollTop: y5+'px'}, 100,function(){flag=0});});
	$('#l6').click(function(){flag=1;$('html,body').animate({scrollTop: y6+'px'}, 100,function(){flag=0});});
	$('#l7').click(function(){flag=1;$('html,body').animate({scrollTop: y7+'px'}, 100,function(){flag=0});});
	$('#l8').click(function(){flag=1;$('html,body').animate({scrollTop: y8+'px'}, 100,function(){flag=0});});
	$('#l9').click(function(){
		$(".aside-left li").eq(8).addClass("color").siblings().removeClass("color");
		flag=1;
		$('html,body').animate({scrollTop: y9+'px'}, 100,function(){flag=0});
	});
	$('#l10').click(function(){flag=1;$('html,body').animate({scrollTop: y10+'px'}, 100,function(){flag=0});});
	$(".banner2-d2 .banner-yuan i").first().addClass("on");
	$(".banner .banner2-d1 ul li").eq(0).css("display","block");
	var n=0;
	var time=setInterval(function(){
		n++;
		$(".banner .banner2-d1 ul li").eq(n).fadeIn(1000).siblings().fadeOut(1000);
		$(".banner2-d2 .banner-yuan i").eq(n).addClass("on").siblings().removeClass("on");
		if(n>7){
			n=-1;
		}
	},2000);
	var x=0;
	$(".banner .banner2-d1 ul,.banner .btn").hover(function(){
		clearInterval(time);
	},function(){
		time=setInterval(function(){
			n++;
			$(".banner .banner2-d1 ul li").eq(n).fadeIn(1000).siblings().fadeOut(1000);
			$(".banner2-d2 .banner-yuan i").eq(n).addClass("on").siblings().removeClass("on");
			if(n>7){
				n=-1;
			}
		},2000);
	});
	$(".banner .btn-left").click(function(){
		n=n-1;
		if(n<0)
		{
			n=7;
		}
		$(".banner .banner2-d1 ul li").eq(n).fadeIn(1000).siblings().fadeOut(1000);
		$(".banner2-d2 .banner-yuan i").eq(n).addClass("on").siblings().removeClass("on");
	});
	$(".banner .btn-right").click(function(){
		n=n+1;
		if(n>7)
		{
			n=0;
		}
		$(".banner .banner2-d1 ul li").eq(n).fadeIn(1000).siblings().fadeOut(1000);
		$(".banner2-d2 .banner-yuan i").eq(n).addClass("on").siblings().removeClass("on");
	});
	$(".banner .banner-yuan i").hover(function(){
		clearInterval(time);
		var y=$(this).index();
		n=y;
		$(".banner .banner2-d1 ul li").eq(y).fadeIn(1000).siblings().fadeOut(1000);
		$(".banner2-d2 .banner-yuan i").eq(y).addClass("on").siblings().removeClass("on");
	},function(){
		time=setInterval(function(){
			n++;
			$(".banner .banner2-d1 ul li").eq(n).fadeIn(1000).siblings().fadeOut(1000);
			$(".banner2-d2 .banner-yuan i").eq(n).addClass("on").siblings().removeClass("on");
			if(n>7){
				n=-1;
			}
		},2000);
	});
});
