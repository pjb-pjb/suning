$(window).on("scroll", function() {
	let time;
	if($(this).scrollTop() > 874) {
		$(".fix-bar").css("display", "block");
		$(".daohang-right-d2").addClass("daohang-right-d2-fixed");
		$(".daohang-right-d3 a").addClass("daohang-right-d3-fixed")
		$(".nav1").addClass("nav1-fixed");
		$(".nav1 .nav1-d1").css("display", "none");
		$(".sousuo3-d").addClass("sousuo3-d-fixed");
		$(".sousuo3-d2").css("display", "none");
		$(".nav1").hover(function() {
			clearInterval(time);
			$(".nav1 .nav1-d1").css("display", "block");
		}, function() {
			time=setTimeout(function(){
				$(".nav1 .nav1-d1").css("display", "none");
			},300);
		});
	} else {
		$(".nav1").hover(function() {
			$(".nav1 .nav1-d1").css("display", "block");
		}, function() {
			$(".nav1 .nav1-d1").css("display", "block");
		});
		$(".sousuo3-d2").css("display", "block")
		$(".fix-bar").css("display", "none");
		$(".daohang-right-d2").removeClass("daohang-right-d2-fixed");
		$(".daohang-right-d3 a").removeClass("daohang-right-d3-fixed")
		$(".bar-nav .nav1").removeClass("nav1-fixed");
		$(".nav1 .nav1-d1").css("display", "block");
		$(".sousuo3-d").removeClass("sousuo3-d-fixed");
	}
});
let flag = 0;
$(window).scroll(function() {
	if(flag == 0) {
		var y1 = $("#phone").offset().top;
		var y2 = $("#dq").offset().top;
		var y3 = $("#zn").offset().top;
		var y4 = $("#sh").offset().top;
		var y5 = $("#mw").offset().top;
		var y6 = $("#mm").offset().top;
		var y7 = $("#fz").offset().top;
		var y8 = $("#jr").offset().top;
		var y9 = $("#bq").offset().top;
		var y10 = $("#like").offset().top;
		var w = $(window).height();
		if($(window).scrollTop() > (y1 - w)) {
			$(".aside-left").css("display", "block");
			$(".aside-left li").eq(0).addClass("color").siblings().removeClass("color");
		}
		if($(window).scrollTop() > (y2 - w)) {
			$(".aside-left li").eq(1).addClass("color").siblings().removeClass("color");
		}
		if($(window).scrollTop() > (y3 - w)) {
			$(".aside-left li").eq(2).addClass("color").siblings().removeClass("color");
		}
		if($(window).scrollTop() > (y4 - w)) {
			$(".aside-left li").eq(3).addClass("color").siblings().removeClass("color");
		}
		if($(window).scrollTop() > (y5 - w)) {
			$(".aside-left li").eq(4).addClass("color").siblings().removeClass("color");
		}
		if($(window).scrollTop() > (y5)) {
			$(".aside-left li").eq(5).addClass("color").siblings().removeClass("color");
		}
		if($(window).scrollTop() > (y7 - w)) {
			$(".aside-left li").eq(6).addClass("color").siblings().removeClass("color");
		}
		if($(window).scrollTop() > (y8 - w)) {
			$(".aside-left li").eq(7).addClass("color").siblings().removeClass("color");
		}
		if($(window).scrollTop() > (y9 - w)) {
			$(".aside-left li").eq(8).addClass("color").siblings().removeClass("color");
		}
		if($(window).scrollTop() > (y9)) {
			$(".aside-left li").eq(9).addClass("color").siblings().removeClass("color");
		}
		if($(window).scrollTop() <= (y1 - $("#phone").outerHeight())) {
			$(".aside-left").css("display", "none");
		}
		if($(window).scrollTop() > (y10 + $("#like").outerHeight() * 0.4)) {
			$(".aside-left").css("display", "none");
		}
	}
});
$(function() {
	var y1 = $("#phone").offset().top - 80;
	var y2 = $("#dq").offset().top - 80;
	var y3 = $("#zn").offset().top - 80;
	var y4 = $("#sh").offset().top - 80;
	var y5 = $("#mw").offset().top - 80;
	var y6 = $("#mm").offset().top - 80;
	var y7 = $("#fz").offset().top - 80;
	var y8 = $("#jr").offset().top - 80;
	var y9 = $("#bq").offset().top - 80;
	var y10 = $("#like").offset().top - 80;
	$('#l').click(
		function() {
			$('html,body').animate({
				scrollTop: "100px"
			}, 100, function() {});
		});
	$('#l1').click(function() {
		flag = 1;
		$('html,body').animate({
			scrollTop: y1 + 'px'
		}, 100, function() {
			flag = 0;
		});
	});
	$('#l2').click(function() {
		flag = 1;
		$('html,body').animate({
			scrollTop: y2 + 'px'
		}, 100, function() {
			flag = 0
		});
	});
	$('#l3').click(function() {
		flag = 1;
		$('html,body').animate({
			scrollTop: y3 + 'px'
		}, 100, function() {
			flag = 0
		});
	});
	$('#l4').click(function() {
		flag = 1;
		$('html,body').animate({
			scrollTop: y4 + 'px'
		}, 100, function() {
			flag = 0
		});
	});
	$('#l5').click(function() {
		flag = 1;
		$('html,body').animate({
			scrollTop: y5 + 'px'
		}, 100, function() {
			flag = 0
		});
	});
	$('#l6').click(function() {
		flag = 1;
		$('html,body').animate({
			scrollTop: y6 + 'px'
		}, 100, function() {
			flag = 0
		});
	});
	$('#l7').click(function() {
		flag = 1;
		$('html,body').animate({
			scrollTop: y7 + 'px'
		}, 100, function() {
			flag = 0
		});
	});
	$('#l8').click(function() {
		flag = 1;
		$('html,body').animate({
			scrollTop: y8 + 'px'
		}, 100, function() {
			flag = 0
		});
	});
	$('#l9').click(function() {
		$(".aside-left li").eq(8).addClass("color").siblings().removeClass("color");
		flag = 1;
		$('html,body').animate({
			scrollTop: y9 + 'px'
		}, 100, function() {
			flag = 0
		});
	});
	$('#l10').click(function() {
		flag = 1;
		$('html,body').animate({
			scrollTop: y10 + 'px'
		}, 100, function() {
			flag = 0
		});
	});
	$(".banner2-d2 .banner-yuan i").first().addClass("on");
	$(".banner .banner2-d1 ul li").eq(0).css("display", "block");
	var n = 0;
	var time = setInterval(function() {
		n++;
		$(".banner .banner2-d1 ul li").eq(n).fadeIn(1000).siblings().fadeOut(1000);
		$(".banner2-d2 .banner-yuan i").eq(n).addClass("on").siblings().removeClass("on");
		if(n > 7) {
			n = -1;
		}
	}, 2000);
	var x = 0;
	$(".banner .banner2-d1 ul,.banner .btn").hover(function() {
		clearInterval(time);
	}, function() {
		time = setInterval(function() {
			n++;
			$(".banner .banner2-d1 ul li").eq(n).fadeIn(1000).siblings().fadeOut(1000);
			$(".banner2-d2 .banner-yuan i").eq(n).addClass("on").siblings().removeClass("on");
			if(n > 7) {
				n = -1;
			}
		}, 2000);
	});
	$(".banner .btn-left").click(function() {
		n = n - 1;
		if(n < 0) {
			n = 7;
		}
		$(".banner .banner2-d1 ul li").eq(n).fadeIn(1000).siblings().fadeOut(1000);
		$(".banner2-d2 .banner-yuan i").eq(n).addClass("on").siblings().removeClass("on");
	});
	$(".banner .btn-right").click(function() {
		n = n + 1;
		if(n > 7) {
			n = 0;
		}
		$(".banner .banner2-d1 ul li").eq(n).fadeIn(1000).siblings().fadeOut(1000);
		$(".banner2-d2 .banner-yuan i").eq(n).addClass("on").siblings().removeClass("on");
	});
	$(".banner .banner-yuan i").hover(function() {
		clearInterval(time);
		var y = $(this).index();
		n = y;
		$(".banner .banner2-d1 ul li").eq(y).fadeIn(1000).siblings().fadeOut(1000);
		$(".banner2-d2 .banner-yuan i").eq(y).addClass("on").siblings().removeClass("on");
	}, function() {
		time = setInterval(function() {
			n++;
			$(".banner .banner2-d1 ul li").eq(n).fadeIn(1000).siblings().fadeOut(1000);
			$(".banner2-d2 .banner-yuan i").eq(n).addClass("on").siblings().removeClass("on");
			if(n > 7) {
				n = -1;
			}
		}, 2000);
	});
	{
		let big=$(".haohuo3 .list1");
		let left=$(".haohuo3 .btn-left");
		let right=$(".haohuo3 .btn-right");
		let yuan=$(".haohuo3 .yuan a");
		let n=0;
		right.click(function(){
			n++;
			if(n==4){
				n=0;
				big.animate({left:"0px"},0,function(){
					n++;
					big.animate({left:`${-n*369}px`},200);
					yuan.eq(n).addClass("color").siblings().removeClass("color");
				});
			}
			else{
				big.animate({left:`${-n*369}px`},200);
				yuan.eq(n).addClass("color").siblings().removeClass("color");
				if(n==3){
					yuan.eq(0).addClass("color").siblings().removeClass("color");
				}
			}
		});
		left.click(function(){
			n--;
			if(n==-1){
				n=3;
				big.animate({left:`${-n*369}`},0,function(){
					n--;
					big.animate({left:`${-n*369}px`},200);
					yuan.eq(n).addClass("color").siblings().removeClass("color");
				});
			}
			else{
				big.animate({left:`${-n*369}px`},200);
				yuan.eq(n).addClass("color").siblings().removeClass("color");
			}
		});
	}
});
window.onload=function(){
	{
		let ewm = document.querySelector(".ewm");
		let ewminfo = document.querySelector(".ewm-info");
		ewminfo.style.left=`${-ewminfo.offsetWidth}px`;
		setTimeout(function(){
			ewminfo.style.left = `${0}px`;
		},5000);
		ewm.onmouseenter = function() {
			ewminfo.style.left = `${-ewminfo.offsetWidth}px`;
		}
		ewm.onmouseleave = function() {
			ewminfo.style.left = `${0}px`;
		}
		ewminfo.onmouseenter = function() {
			ewminfo.style.left = `${-ewminfo.offsetWidth}px`;
		}
		ewminfo.onmouseleave = function() {
			ewminfo.style.left = `${0}px`;
		}
		let ren = document.querySelector(".aside-right .ren");
		let reninfo = document.querySelector(".ren-info");
		let gwc = document.querySelector(".aside-right .gwc");
		let gwcinfo = document.querySelector(".gwc-info");
		let renObj = [ren];
		let gwcObj = [gwc];
		let n = 0;
		let x = 0;
		let a = 0;
		console.log(gwcinfo);
		let infoObj = [reninfo, gwcinfo];
		infoObj.forEach(
			(val, index) => {
				val.onclick = function() {
					a = 1;
				}
			}
		);
		renObj.forEach(
			(val, index) => {
				val.onclick = function() {
					if(n == 0) {
						reninfo.style.left = `${-reninfo.offsetWidth}px`;
						n = 1;
						gwcinfo.style.left = `${35}px`;
						x = 0;
						a = 1;
					} else {
						reninfo.style.left = `${35}px`;
						n = 0;
						a = 1;
					}
				}
			}
		);
		gwcObj.forEach(
			(val, index) => {
				val.onclick = function() {
					if(x == 0) {
						gwcinfo.style.left = `${-gwcinfo.offsetWidth}px`;
						reninfo.style.left = `${35}px`;
						x = 1;
						n = 0;
						a = 1;
					} else {
						gwcinfo.style.left = `${35}px`;
						x = 0;
						a = 1;
					}
				}
			}
		);
		window.addEventListener("click", function() {
			setTimeout(function() {
				if(a == 1) {
					a = 0;
				} else {
					gwcinfo.style.left = `${35}px`;
					reninfo.style.left = `${35}px`;
					n = 0;
					x = 0;
				}
			}, 30);
		});
	}
	{
		let input=document.querySelector("#input");
		let l=document.querySelector(".rec_results");
		let flag=0;
		let close=document.querySelector(".rec_results .close");
		input.onfocus=function(){
			input.placeholder=""
			l.style.display="block";
		}
		l.onmouseenter=function(){
			flag=1;
		}
		l.onmouseleave=function(){
			flag=0;
		}
		input.onblur=function(){
			if(flag==0){
				input.placeholder="海外购凌美钢笔98元起"
				l.style.display="none";
			}
		}
		close.onclick=function(){
			input.placeholder="海外购凌美钢笔98元起"
			l.style.display="none";
		}
	}
	{
		let big=document.querySelector(".index-sort-detail");
		let big1=document.querySelector(".nav1-d1");
		let list=document.querySelectorAll(".nav1-u1>li");
		let list1=document.querySelectorAll(".index-sort-detail>li");
		let list2;
		list.forEach(function(ele,index){
			list1[index].onmouseenter=ele.onmouseenter=function(){
				for(let i=0;i<list.length;i++){
					list1[i].style.width="0px";
					list1[i].style.border="none";
				}
				list2=list1[index];
				big.style.transition="none";
				list1[index].style.width="100%";
				big.style.width="999px";
				list1[index].style.border="1px solid #252221";
			}
		});
		big.onmouseleave=big1.onmouseleave=function(){
			list2.style.border="none";
			big.style.transition="all 0.1s";
			big.style.width="0";
		}
		window.onscroll=function(){
			if(document.body.scrollTop>874){
				list2.style.border="none";
				big.style.transition="none";
				big.style.width="0";				
			}
		}
	}
	{
		let smalllist=document.querySelectorAll("#small-sp li");
		let big=document.querySelector("#big-sp img");
		let left=document.querySelector(".shengxian-sp .jiantou-left");
		let right=document.querySelector(".shengxian-sp .jiantou-right");
		let small=document.querySelector("#small-sp");
		function lunbo(small,left,right,smalllist,big){
			for(let i=0;i<smalllist.length/2;i++){
				let newlist=smalllist[i].cloneNode(true);
				small.appendChild(newlist);
			}
			let n=0;
			right.onclick=function(){
				n++;
				if(n==3){
					small.style.transition="none";
					small.style.marginLeft=0;
					n=1;
				}
				setTimeout(function(){
					small.style.transition="all 0.5s";
					small.style.marginLeft=-n*(smalllist[0].offsetWidth*smalllist.length/2+3*parseInt( getComputedStyle(smalllist[0]).marginRight))+"px";
				},10);
			}
			left.onclick=function(){
				n--;
				if(n==-1){
					small.style.transition="none";
					small.style.marginLeft=-2*(smalllist[0].offsetWidth*smalllist.length/2+3*parseInt( getComputedStyle(smalllist[0]).marginRight))+"px";
					n=1;
				}
				setTimeout(function(){
					small.style.transition="all 0.5s";
					small.style.marginLeft=-n*(smalllist[0].offsetWidth*smalllist.length/2+3*parseInt( getComputedStyle(smalllist[0]).marginRight))+"px";
				},10);
			}
		}
		lunbo(small,left,right,smalllist,big);
		let smalllist1=document.querySelectorAll("#small-sp li");
		let img=document.querySelectorAll("#small-sp li img");
		smalllist1.forEach(function(ele,index){
			ele.onmouseover=function(){
				big.src=img[index].src;
			}
		});
	}
}
	
