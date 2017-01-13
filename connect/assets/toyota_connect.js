//GLOBAL VARIABLE
var window_width=$(window).width();
var window_height=$(window).height();
 
//BAGIAN INI HARUS DI INIT DI SEMUA HALAMAN
$(document).ready(function(){
	create_fix();
    if (window_width >= 1030) {
        activate_flying_footer()
    } else {
        $(".wrap_content").css({
            "padding-bottom": "0px"
        });
        $("#wrap_footer").css({
            bottom: "0px",
            position: "relative"
        });
        $(".bg_show_hide").css({
            display: "none"
        })
    }
	shopping_tools_box();
	active_notivication_menu();
	back_to_top();
	var show_form=0;
	var show_search=0;
	var show_connect=0;
	
	if(window_width<1020){
		$(".main_menu_box").height(window_height-67);
		$(".main_menu_box ul").height(window_height-67);
		
		$(".show_menu").click(function(e){
			e.preventDefault();
			if($(this).hasClass("opened")){
				$(".main_menu_box ul").stop().animate({left:'-300px'},600);
				$(".main_menu_box").stop().animate({'background':'rgba(0,0,0,0)'},500);
				setTimeout(function(){$(".main_menu_box").hide()}, 500);
				$(this).removeClass("opened");
			}else{
				$(this).addClass("opened");
				$(".main_menu_box").show();
				$(".main_menu_box").stop().animate({'background':'rgba(0,0,0,0.5)'},200);
				$(".main_menu_box ul").stop().animate({left:'0'},600);
			}
		});
	};
	
	var search_width;
	if(window_width>810){
		search_width = "560px";
	}else if(window_width<500 && window_width>400 ){
		search_width = "200px";
	}else if(window_width<400){
		search_width = "110px";
	}else{
		search_width = "377px";
	}
	
	$(".btn_submit_article").click(function(e){
		e.preventDefault();
		if(show_form==0){
			$(".pos_article_box").slideDown();
			show_form=1;
		}else if(show_form==1){
			$(".pos_article_box").slideUp();
			show_form=0;
		}
	});
	
	$(".btn_show_search").click(function(e){
		e.preventDefault();
		if(show_search==0){
			$(".search_area").show();
			$(".textform").stop().animate({width:search_width, 'padding-left':'10px'},100);
			$(this).css({'background-position':'bottom left'});
			show_search=1;
			$("#connect").hide();
			show_connect=0;
		}else if(show_search==1){
			$(".textform").stop().animate({width:"0px", 'padding-left':'0'});
			$(".search_area").hide();
			$(this).css({'background-position':'top left'});
			show_search=0;
		}
	}); 
	 
	$(".btn_show_connect").click(function(e){
		e.preventDefault();
		if(show_connect==0){
			$(".btn_show_search").css({'background-position':'top left'});
			$("#connect").show();
			$(this).css({'background-position':'bottom left'});
			show_connect=1;
			$(".search_area").hide();
			show_search=0;
		}else if(show_connect==1){
			$("#connect").hide();
			$(this).css({'background-position':'top left'});
			show_connect=0;
		}
	});
	// $("#box_connect").hover(function(){},function(){
 //        $("#error").remove();
 //        $("#connect").hide();
 //        $(".btn_show_connect").css({'background-position':'top left'});
 //        show_connect=0;
 //    });
}) 

 
//CREATE FIX UNTUK BROWSER YANG TIDAK SUPPORT CSS GENERATED CONTENT
function create_fix(){
	if(!Modernizr.generatedcontent){
		$(".add_fix").append('<span class="clearfix">&nbsp;</span>')
	}
}

//CREATE CYCLE HOME
function cycle_home(){
	var imgHeight = $(".highlight_slide li").height();
	$(".highlight_slide").height(imgHeight);

	 $('.highlight_slide').after('<ul id="pager">').cycle({ 
		fx:     'fade',
		//prev: '#prev',
		//next: '#next',
		pager:  '#pager',
		containerResize: 0,
		width: '100%',
		fit: 1,
	  	pagerAnchorBuilder: function(idx, el) {
	    return '<li><a href="cpage_7#"></a></li>';
	    }
	});

	///on resize, set blank image height
	function imageresize() {
	
		var imgHeight = $(".highlight_slide li").height();
		$(".highlight_slide").height(imgHeight);
	};
	$(window).bind("resize", function(){
		imageresize();
	});  
	imageresize();
}


//CREATE CARUSEL HOME
function carousel_home(){
      $("#highlight_carousel").owlCarousel({
	    navigation : true,
        autoPlay: 3000,
		stopOnHover: true,
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });
}

function cat_list_home_1(){
	
	  var handler = $('.info_list_1 li');
	  handler.wookmark({
		  // Prepare layout options.
		  autoResize: true, // This will auto-update the layout when the browser window is resized.
		  container: $('.main_1'), // Optional, used for some extra CSS styling
		  offset: 20
	  });
		$(window).bind("resize", function(){
			 handler.wookmark();
		});  
	  handler.wookmark();
}

function cat_list_home_2(){
	
	  var handler = $('.info_list_2 li');
	  handler.wookmark({
		  // Prepare layout options.
		  autoResize: true, // This will auto-update the layout when the browser window is resized.
		  container: $('.main_2'), // Optional, used for some extra CSS styling
		  offset: 20
	  });
		$(window).bind("resize", function(){
			 handler.wookmark();
		});  
	  handler.wookmark();
}
function cat_list(){
	
	  var handler = $('.info_list li');
	  handler.wookmark({
		  // Prepare layout options.
		  autoResize: true, // This will auto-update the layout when the browser window is resized.
		  container: $('.main_2'), // Optional, used for some extra CSS styling
		  offset: 20
	  });
		$(window).bind("resize", function(){
			 handler.wookmark();
		});  
	  handler.wookmark();
}

function news_archives(){
	$("#news_archives_list:first").show();
	$(".tab_archives a:first").addClass("active");
	$(".tab_archives a").click(function(e){
		e.preventDefault();
		$(".tab_archives a").removeClass("active");
		$(this).addClass("active");
		var show_news = $(this).attr("rel");
		$("#news_archives_list").hide();
		$(".news_"+show_news).show();
	});
}

var BOTTOM = 518;
var BOTTOM_GUTTER = 0;
var $footer = null;

function animateFooter() {
    if ($footer.is(":animated")) {
        return
    }
    if (!$footer.hasClass("footer_opened")) {
        $footer.removeClass("footer_closed").addClass("footer_opened");
        $footer.animate({
            bottom: 0
        }, 1e3)
    } else {
        $footer.removeClass("footer_opened").addClass("footer_closed");
        $footer.animate({
            bottom: footerPos
        }, 1e3)
    }
}

function back_to_top() {
    $("#button_backtotop").css({
        right: "-180px"
    });
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $("#button_backtotop").stop().animate({
                    right: "-72px"
                }, {
                    queue: false,
                    duration: 1e3,
                    easing: "easeOutExpo"
                })
            } else {
                $("#button_backtotop").stop().animate({
                    right: "-180px"
                }, {
                    queue: false,
                    duration: 1e3,
                    easing: "easeOutExpo"
                })
            }
        });
        $("#button_backtotop").click(function() {
            $("body,html").animate({
                scrollTop: 0
            }, 400);
            return false
        });
        $(".back_top").click(function() {
            $("body,html").animate({
                scrollTop: 0
            }, 400);
            return false
        });
        $(".to_top").click(function() {
            $("body,html").animate({
                scrollTop: 0
            }, 400);
            return false
        });
        $("#button_backtotop").hover(function() {
            $(this).stop().animate({
                right: "0px"
            }, {
                queue: false,
                duration: 1e3,
                easing: "easeOutExpo"
            })
        }, function() {
            $(this).stop().animate({
                right: "-72px"
            }, {
                queue: false,
                duration: 500,
                easing: "easeOutExpo"
            })
        })
    })
}
function activate_flying_footer() {
    $footer = $("#wrap_footer");
    $("#show_hide").click(function(e) {
        e.preventDefault();
        animateFooter()
    });
    $("#scrollTeaser").click(function(e) {
        e.preventDefault();
        animateFooter();
        $(this).hide()
    });
    var e = 0;
    $(".show_hide_car_model").click(function(t) {
        t.preventDefault();
        if (e == 0) {
            $(this).addClass("hide_car_model");
            $(".box_other_menu").stop().animate({
                bottom: "195px"
            }, {
                queue: false,
                duration: 500,
                easing: "easeOutExpo"
            });
            $(".box_car_model").stop().animate({
                bottom: "65px"
            }, {
                queue: false,
                duration: 500,
                easing: "easeOutExpo"
            });
            $(".wrap_content").css({
                "padding-bottom": "570px"
            });
            e = 1
        } else if (e == 1) {
            $(this).removeClass("hide_car_model");
            $(".box_other_menu").stop().animate({
                bottom: "0px"
            }, {
                queue: false,
                duration: 500,
                easing: "easeOutExpo"
            });
            $(".box_car_model").stop().animate({
                bottom: "-280px"
            }, {
                queue: false,
                duration: 500,
                easing: "easeOutExpo"
            });
            $(".wrap_content").css({
                "padding-bottom": "506"
            });
            e = 0
        }
    });
    $(window).scroll(function() {
        scrollPos = $(window).scrollTop();
        var t = $(document).height() - (scrollPos + $(window).height());
        var n = BOTTOM - BOTTOM_GUTTER - t;
        if (t <= BOTTOM - BOTTOM_GUTTER) {
            footerPos = BOTTOM_GUTTER - BOTTOM + n;
            $(".bg_show_hide").hide();
            $(".bg_show_hide_active").show()
        } else {
            footerPos = BOTTOM_GUTTER - BOTTOM;
            $(".bg_show_hide").show();
            $(".bg_show_hide_active").hide()
        } if (!$footer.hasClass("footer_opened")) {
            if ($footer.hasClass("footer_closed") && $footer.is(":animated") && t > BOTTOM - BOTTOM_GUTTER) {
                return
            } else {
                $footer.stop(true, true);
                var r = parseFloat($footer.css("bottom"));
                var i = Math.abs(footerPos - r) > 50 ? Math.abs(footerPos - r) / (BOTTOM - BOTTOM_GUTTER) * 300 : 0;
                $footer.animate({
                    bottom: footerPos
                }, i);
                $(".show_hide_car_model").removeClass("hide_car_model");
                $(".box_other_menu").stop().animate({
                    bottom: "0px"
                }, {
                    queue: false,
                    duration: 500,
                    easing: "easeOutExpo"
                });
                $(".box_car_model").stop().animate({
                    bottom: "-280px"
                }, {
                    queue: false,
                    duration: 500,
                    easing: "easeOutExpo"
                });
                $(".wrap_content").css({
                    "padding-bottom": "520px"
                });
                e = 0
            }
        } else if ($footer.hasClass("footer_opened") && t > BOTTOM - BOTTOM_GUTTER) {
            animateFooter();
            $(".show_hide_car_model").removeClass("hide_car_model");
            $(".box_other_menu").stop().animate({
                bottom: "0px"
            }, {
                queue: false,
                duration: 500,
                easing: "easeOutExpo"
            });
            $(".box_car_model").stop().animate({
                bottom: "-280px"
            }, {
                queue: false,
                duration: 500,
                easing: "easeOutExpo"
            });
            $(".wrap_content").css({
                "padding-bottom": "520px"
            });
            e = 0
        }
    })
}

function shopping_tools_box() {
    $("#shopping_tools").css({
        right: "-86px"
    });
    $(function() {
        var e = 0;
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $("#shopping_tools").stop().animate({
                    right: "-86px"
                }, {
                    queue: false,
                    duration: 1e3,
                    easing: "easeOutExpo"
                });
                $("#button_shopping_tools").removeClass("close_box");
                e = 0
            } else {
                $("#button_shopping_tools").removeClass("close_box");
                e = 0
            }
        });
        $("#button_shopping_tools").click(function(t) {
            t.preventDefault();
            if (e == 0) {
                $("#shopping_tools").stop().animate({
                    right: "0px"
                }, {
                    queue: false,
                    duration: 1e3,
                    easing: "easeOutExpo"
                });
                $(this).addClass("close_box");
                e = 1
            } else if (e == 1) {
                $("#shopping_tools").stop().animate({
                    right: "-86px"
                }, {
                    queue: false,
                    duration: 1e3,
                    easing: "easeOutExpo"
                });
                $(this).removeClass("close_box");
                e = 0
            }
        });
        $("#button_shopping_tools_text").click(function(t) {
            t.preventDefault();
            if (e == 0) {
                $("#shopping_tools").stop().animate({
                    right: "0px"
                }, {
                    queue: false,
                    duration: 1e3,
                    easing: "easeOutExpo"
                });
                $("#button_shopping_tools").addClass("close_box");
                e = 1
            } else if (e == 1) {
                $("#shopping_tools").stop().animate({
                    right: "-86px"
                }, {
                    queue: false,
                    duration: 1e3,
                    easing: "easeOutExpo"
                });
                $("#button_shopping_tools").removeClass("close_box");
                e = 0
            }
        });
        $(".empty_link").click(function(e) {
            e.preventDefault()
        })
    });
    // $(".btn_shopping_tools_box a").hoverIntent(function() {
    //     $(this).next(".link_title").fadeTo(300, 1)
    // }, function() {
    //     $(this).next(".link_title").stop(true, false).fadeTo(300, 0, function() {
    //         $(this).hide()
    //     })
    // })
}
function active_notivication_menu() {
    notivication_menu();
    notivication_menu2();
    notivication_menu3()
}

function notivication_menu() {
    $("#scrollTeaser-down1").animate({
        top: "16px"
    }, 900, function() {
        $(this).animate({
            top: 20
        }, 200, notivication_menu)
    }).fadeTo(100, 0)
}

function notivication_menu2() {
    $("#scrollTeaser-down2").animate({
        top: "20px",
        opacity: 1
    }, 0, function() {
        $(this).animate({
            top: 0,
            opacity: 0
        }, 500, notivication_menu2)
    })
}

function notivication_menu3() {
    $("#scrollTeaser-down3").animate({
        top: "16px"
    }, 900, function() {
        $(this).animate({
            top: -20
        }, 200, notivication_menu3)
    })
}

function goto_register() {
    $("#btn_register").click(function() {
        $('html,body').animate({
            scrollTop: $("#register_box").offset().top-70
        });
    });    
}

