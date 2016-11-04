/**
 * Created by yu on 2016/11/4 0004.
 */
$(function () {
	$('.banner').unslider({
		animation: 'vertical',
		speed: 500,               //  The speed to animate each slide (in milliseconds)
		delay: 5000,              //  The delay between slide animations (in milliseconds)
		complete: function () {
		},  //  A function that gets called after every slide animation
		keys: true,               //  Enable keyboard (left, right) arrow shortcuts
		dots: true,               //  Display dot navigation
		autoplay: true,
		fluid: false              //  Support responsive design. May break non-responsive designs
	});
});
$('#locationSelect').citys({province: '四川', city: '成都', area: '新都'});

//  comment列表滚动
$(function () {
	var $comment = $("#comment");
	var scrollTimer;
	$comment.hover(function () {
		clearInterval(scrollTimer);
	}, function () {
		scrollTimer = setInterval(function () {
			scrollNews($comment);
		}, 3000);
	}).trigger("mouseleave");

	function scrollNews(obj) {
		var $self = obj.find("ul");
		var lineHeight = $self.find("li:first").height();
		$self.animate({
			"marginTop": -lineHeight + "px"
		}, 700, function () {
			$self.css({
				marginTop: 0
			}).find("li:first").appendTo($self);
		})
	}
})