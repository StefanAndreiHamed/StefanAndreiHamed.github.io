var names=new Array(); var cpage=0; var x=1;
names[4]="#init";
names[0]="#cilindruB";
names[1]="#pistonB";
names[2]="#bujieB";
names[3]="#supapaB";
var i=4, j;
var divs=new Array();
divs[4]="#init";
divs[0]="#cilindru";
divs[1]="#piston";
divs[2]="#bujie";
divs[3]="#supapa";
$(document).ready(function(){
setInterval(function(){$("#bc").animate({opacity:1}, 700);
	$("#startGreet").animate({'width':475}, 500,  function(){
		$("#startGreet").animate({'width':400}, 500);
	});}, 2000);
$("#begin").click(function(){
	$("#begin").animate({opacity:0}, 50);
	$("#bc").hide(0); $("#main").show(0);
	$("#main").animate({opacity:1}, 700);
	$("#b1").addClass('active');
	cpage=1;
});
$("#solve").click(function(){
	var pp = 1;
	if(document.getElementById('t1').checked){
		$("#b").css({'color' : 'black','background':'white'});
	}else{
		$("#b").css({'color' : 'white', 'background':'-webkit-linear-gradient(top, #E60000, #FF1919 ,#E60000'});
			$("#b").css({'color' : 'white', 'background':'-moz-linear-gradient(top, #E60000, #FF1919 ,#E60000'});
				$("#b").css({'color' : 'white', 'background':'-o-linear-gradient(top, #E60000, #FF1919 ,#E60000'});
					$("#b").css({'color' : 'white', 'background':'-linear-gradient(top, #E60000, #FF1919 ,#E60000'});pp=0;
		}
	if(document.getElementById('t2').checked){
		$("#a").css({'color' : 'black','background':'white'});
	}else{
		$("#a").css({'color' : 'white', 'background':'-webkit-linear-gradient(top, #E60000, #FF1919 ,#E60000'});
			$("#a").css({'color' : 'white', 'background':'-moz-linear-gradient(top, #E60000, #FF1919 ,#E60000'});
				$("#a").css({'color' : 'white', 'background':'-o-linear-gradient(top, #E60000, #FF1919 ,#E60000'});
					$("#a").css({'color' : 'white', 'background':'-linear-gradient(top, #E60000, #FF1919 ,#E60000'});pp=0;}
	if(document.getElementById('t3').checked){
		$("#c").css({'color' : 'black', 'background':'white'});
	}else{
		$("#c").css({'color' : 'white', 'background':'-webkit-linear-gradient(top, #E60000, #FF1919 ,#E60000'});
			$("#c").css({'color' : 'white', 'background':'-moz-linear-gradient(top, #E60000, #FF1919 ,#E60000'});
				$("#c").css({'color' : 'white', 'background':'-o-linear-gradient(top, #E60000, #FF1919 ,#E60000'});
					$("#c").css({'color' : 'white', 'background':'-linear-gradient(top, #E60000, #FF1919 ,#E60000'});pp=0;}
	if($('#diana_e_boss').val() ==='5.26')
		{
		$("#recap").css({'color' : 'black', 'background':'white'});
	}else{
		$("#recap").css({'color' : 'white', 'background':'-webkit-linear-gradient(top, #E60000, #FF1919 ,#E60000'});
			$("#recap").css({'color' : 'white', 'background':'-moz-linear-gradient(top, #E60000, #FF1919 ,#E60000'});
				$("#recap").css({'color' : 'white', 'background':'-o-linear-gradient(top, #E60000, #FF1919 ,#E60000'});
					$("#recap").css({'color' : 'white', 'background':'-linear-gradient(top, #E60000, #FF1919 ,#E60000'});pp=0;}
	if(pp==1){
		$("#main").animate({opacity:0}, 700, function(){
		$("#main").css({'display':'none'});
		$("#final").css({'display':'block', 'opacity':'1'});
		$("#final").css({'opacity' : '0', 'display' : 'block'}).animate({'opacity':'1'}, 700);
	});
	}
});
$("#b1").click(function(){
	if(cpage!=1){
		$("#main").animate({opacity:0}, 700, function(){
		$("#p"+cpage).css({'display':'none'});
		$("#p1").css({'display':'block', 'opacity':'1'});
		$("#main").css({'opacity' : '0', 'display' : 'block'}).animate({'opacity':'1'}, 700);
		cpage=1;
		$("#b1").addClass('active');
		for(x=2; x<=6; x++) {$('#b'+x).removeClass('active');}
	});}
});
var p2=1;
$("#to_2").click(function(){
	if(p2==1){
	$("#dots").hide();
	$("#enginestat").slideUp(700, function(){
		$(divs[4]).hide(0);
		$("#engineani").slideDown(700, function(){
	p2=2;
	});
	});
	} else {
	p2=1;
	$("#engineani").slideUp(700, function(){
		$("#enginestat").slideDown(700, function(){
			$("#dots").show();
			$("#b2").click();
			$(divs[4]).show(0);
			$("#b2").addClass('active');
	$('#b1').removeClass('active');
		});
	});
	}
});
$("#b2").click(function(){
	if(cpage!=2){
	$("#main").animate({opacity:0}, 700, function(){
		$("#p"+cpage).css({'display':'none'});
		$("#p2").css({'display':'block', 'opacity':'1'});
		$("#main").css({'opacity' : '0', 'display' : 'block'}).animate({'opacity':'1'}, 700);
		cpage=2;
		for(x=1; x<=6; x++) {$('#b'+x).removeClass('active');} $("#b2").addClass('active');
	});
	}
});
$("#to_3").click(function(){
	$("#b3").click();
	$("#b3").addClass('active');
	$('#b2').removeClass('active');
});
$("#b3").click(function(){
	if(cpage!=3){
		$("#main").animate({opacity:0}, 700, function(){
		$("#p"+cpage).css({'display':'none'});
		$("#p3").css({'display':'block', 'opacity':'1'});
		$("#main").css({'opacity' : '0', 'display' : 'block'}).animate({'opacity':'1'}, 700);
		cpage=3;for(x=1; x<=6; x++) {$('#b'+x).removeClass('active');}
		$("#b3").addClass('active');
	});}
});
$("#to_4").click(function(){
	$("#b4").click();$("#b4").addClass('active');$('#b3').removeClass('active');
});
$("#b4").click(function(){
	if(cpage!=4){
		$("#main").animate({opacity:0}, 700, function(){
		$("#p"+cpage).css({'display':'none'});
		$("#p4").css({'display':'block', 'opacity':'1'});
		$("#main").css({'opacity' : '0', 'display' : 'block'}).animate({'opacity':'1'}, 700);
		cpage=4;for(x=1; x<=6; x++) {$('#b'+x).removeClass('active');}
		$("#b4").addClass('active');
	});}
});
$("#to_5").click(function(){
	$("#b5").click();$("#b5").addClass('active');$('#b4').removeClass('active');
});
$("#b5").click(function(){
	if(cpage!=5){
		$("#main").animate({opacity:0}, 700, function(){
		$("#p"+cpage).css({'display':'none'});
		$("#p5").css({'display':'block', 'opacity':'1'});
		$("#main").css({'opacity' : '0', 'display' : 'block'}).animate({'opacity':'1'}, 700);
		for(x=1; x<=6; x++) {$('#b'+x).removeClass('active');}
		cpage=5;$("#b5").addClass('active');
	});}
});
$("#to_6").click(function(){
	$("#car").slideDown();
	$("#car").animate({opacity:1}, 1000, function(){
		$("#car").animate({left:$(document).width()}, 2000, function(){
	$("#main").animate({opacity:0}, 700, function(){
		$("#p"+cpage).css({'display':'none'});
		$("#p6").css({'display':'block', 'opacity':'1'});
		$("#main").css({'opacity' : '0', 'display' : 'block'}).animate({'opacity':'1'}, 700);
		for(x=1; x<=6; x++) {$('#b'+x).removeClass('active');}
		cpage=6;$("#b6").addClass('active');
	});
	$("#car").css({display:'none', left:'150px'});
			});
	});
});
$("#b6").click(function(){
	if(cpage!=6){
		$("#main").animate({opacity:0}, 700, function(){
		$("#p"+cpage).css({'display':'none'});
		$("#p6").css({'display':'block', 'opacity':'1'});
		$("#main").css({'opacity' : '0', 'display' : 'block'}).animate({'opacity':'1'}, 700);
		cpage=6;for(x=1; x<=6; x++) {$('#b'+x).removeClass('active');}
		$("#b6").addClass('active');
	});}
});
$(names[0]).hover(function(){
	j=0;
	if(i!=j){
	$(divs[i]).animate({opacity:0}, 50);
	$(divs[i]).hide(0); $(divs[j]).show(0);
	$(divs[j]).animate({opacity:1}, 50);
	i=j;
	}
});
$(names[1]).hover(function(){
	j=1;
	if(i!=j){
	$(divs[i]).animate({opacity:0}, 50);
	$(divs[i]).hide(0); $(divs[j]).show(0);
	$(divs[j]).animate({opacity:1}, 50);
	i=j;
	}
});
$(names[2]).hover(function(){
	j=2;
	if(i!=j){
	$(divs[i]).animate({opacity:0}, 50);
	$(divs[i]).hide(0); $(divs[j]).show(0);
	$(divs[j]).animate({opacity:1}, 50);
	i=j;
	}
});
$(names[3]).hover(function(){
	j=3;
	if(i!=j){
	$(divs[i]).animate({opacity:0}, 50);
	$(divs[i]).hide(0); $(divs[j]).show(0);
	$(divs[j]).animate({opacity:1}, 50);
	i=j;
	}
});

$('.dot').mouseout(function()
{	
	j=4;
	if(i!=j){
	$(divs[i]).animate({opacity:0}, 50);
	$(divs[i]).hide(0); $(divs[j]).show(0);
	$(divs[j]).animate({opacity:1}, 50);
	i=j;
	}
});
$("#back_1").click(function(){
	if(cpage!=1){
		$("#main").animate({opacity:0}, 700, function(){
		$("#p"+cpage).css({'display':'none'});
		$("#p1").css({'display':'block', 'opacity':'1'});
		$("#main").css({'opacity' : '0', 'display' : 'block'}).animate({'opacity':'1'}, 700);
		cpage=1;for(x=1; x<=6; x++) {$('#b'+x).removeClass('active');}
		$("#b1").addClass('active');
	});}
});
$("#back_2").click(function(){
	if(cpage!=2){
		$("#main").animate({opacity:0}, 700, function(){
		$("#p"+cpage).css({'display':'none'});
		$("#p2").css({'display':'block', 'opacity':'1'});
		$("#main").css({'opacity' : '0', 'display' : 'block'}).animate({'opacity':'1'}, 700);
		cpage=2;for(x=1; x<=6; x++) {$('#b'+x).removeClass('active');}
		$("#b2").addClass('active');
	});}
});
$("#back_3").click(function(){
	if(cpage!=3){
		$("#main").animate({opacity:0}, 700, function(){
		$("#p"+cpage).css({'display':'none'});
		$("#p3").css({'display':'block', 'opacity':'1'});
		$("#main").css({'opacity' : '0', 'display' : 'block'}).animate({'opacity':'1'}, 700);
		cpage=3;for(x=1; x<=6; x++) {$('#b'+x).removeClass('active');}
		$("#b3").addClass('active');
	});}
});
$("#back_4").click(function(){
	if(cpage!=4){
		$("#main").animate({opacity:0}, 700, function(){
		$("#p"+cpage).css({'display':'none'});
		$("#p4").css({'display':'block', 'opacity':'1'});
		$("#main").css({'opacity' : '0', 'display' : 'block'}).animate({'opacity':'1'}, 700);
		cpage=4;for(x=1; x<=6; x++) {$('#b'+x).removeClass('active');}
		$("#b4").addClass('active');
	});}
});
$("#back_5").click(function(){
	if(cpage!=5){
		$("#main").animate({opacity:0}, 700, function(){
		$("#p"+cpage).css({'display':'none'});
		$("#p5").css({'display':'block', 'opacity':'1'});
		$("#main").css({'opacity' : '0', 'display' : 'block'}).animate({'opacity':'1'}, 700);
		cpage=5;for(x=1; x<=6; x++) {$('#b'+x).removeClass('active');}
		$("#b5").addClass('active');
	});}
});
});