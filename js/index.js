$(function(){
	$('#dowebok').fullpage({
		scrollingSpeed:400,
		css3:true,
		resize:true,
		anchors:["page1","page2","page3","page4","page5"],
		verticalCentered:false,
		navigation:true,
		navigationPosition:'right',
		navigationTooltips:['首页','关于我','专业技能','我的作品','联系我'],
		afterRender:function(){
			$("#home").css({"display":"block"}).addClass("home_zoom");
			$("header").before("<div id='header' style='opacity:0'</div>");
			$("#home_head").animate({"margin-top":"200px"},200,function(){
				$("header").animate({opacity:"1"},1000,function(){
					$("#header").css({"opacity":"0.3"});
					$("#home_info1").fadeIn(700,function(){
						$(this).next().animate({width:"800px"},700,function(){
							$("#home_info2").fadeIn(450,function(){
								$("#home_info3").fadeIn(450,function(){
									$("#home_info4").fadeIn(450,function(){
										$("#home_info5").fadeIn(450);
									})
								})
							})
						})
					})
				})
			})
		},
		afterLoad:function(anchorLink,index){
			if(index==2){
				$("#about_content h1").after("<div class='title_en'><h2>· About me ·</h2></div>");
				$(".title_en").animate({"width":"130px"},800,function(){
					$(".title_en h2").slideDown(400);	
				});
				$("#about_info").animate({width:"800px"},700,'easeOutElastic');
			}
			if(index==3){
				$("#skill_content h1").after("<div class='title_en'><h2>· Skill ·</h2></div>");
				$(".title_en").animate({"width":"130px"},800,function(){
					$(".title_en h2").slideDown(400);	
				});
				$(".skill_list_content").addClass("skill_scale");
			}
			if(index==4){
				$("#demo_content h1").after("<div class='title_en'><h2>· Demo ·</h2></div>");
				$(".title_en").animate({"width":"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});
				var i=-1;
				$(".demo_scale").each(function(){
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						i++;
						setTimeout(function(){
							$this.addClass("b_to_t");
						},200*i)
					}
				})

			}
			if(index==5){
				$("#contact_content h1").after("<div class='title_en'><h2>· Contact ·</h2></div>");
				$(".title_en").animate({"width":"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});
				var i=-1;
				$("#contact_head1").addClass("b_to_t");
				$("#contact_head2 span").each(function(){
					var $this=$(this);
					if(!$this.hasClass("fade_in")){
						i++;
						setTimeout(function(){
							$this.addClass("fade_in");
						},200*i);
					}
				})
				var j=-1;
				$(".contact_scale").each(function(){
					var $this=$(this);
					if(!$this.hasClass("fade_in")){
						i++;
						setTimeout(function(){
							$this.addClass("fade_in");
						},300*i);
					}
				})	


			}
		},
		onLeave:function(index,nextIndex,direction){
			if(index==2||index==3||index==4||index==5){
				$(".title_en").remove();
			}
		}
	});
});
//顶部标题文字切换
	$("#header_p").mouseover(function(){
		$("#header_p1").html("Resume");
		$("#header_p2").html("前端工程师");
	}).mouseout(function(){
		$("#header_p1").html("F2E");
		$("#header_p2").html("个人简历");
	})
//顶部导航取消
	$("header nav a:not(':first')").click(function(){
		alert("正在努力建设中...请稍等");
		return false;
	})