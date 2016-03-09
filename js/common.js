$(document).ready(function() {
	function autoheight(){
	 $("#header").css("min-height", $(window).height());
	};
	autoheight();
	$(window).resize(function() {
		autoheight();
	});
	$(function(){
		$('#menu').slicknav({
			label: ''
		});
	});
});
$.ionTabs("#tabs_1");
new WOW().init();
$(window).scroll(function() {
	var st = $(this).scrollTop();
	$(".header_text").css({
		"transform" : "translate(0%, -"+st/5+"%"
	})
})
