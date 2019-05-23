var animateIt = {

	dragElementsIn: function () {
		$(".animate-it-left").each(function (i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("drag-left");
			}
		});

		$(".animate-it-right").each(function (i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("drag-right");
			}
		});

		$(".animate-it-down").each(function (i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("drag-down");
			}
		});

		$(".animate-it-up").each(function (i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("drag-up");
			}
		});
		$(".animateit").each(function (i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("chart");
			}
		});
	}
}

function myMap() {}

(function ($) {

	$.fn.visible = function (partial) {

		var $t = $(this),
			$w = $(window),
			viewTop = $w.scrollTop(),
			viewBottom = viewTop + $w.height(),
			_top = $t.offset().top,
			_bottom = _top + $t.height(),
			compareTop = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;

		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	};

	animateIt.dragElementsIn();
	$(function() {
        $('.chart').easyPieChart({
            //your options goes here
            lineWidth: 10,
            scaleLength: 0,
            lineCap: "square",
            barColor: "#477ae2",
            trackColor: "#E7E8ED"
        });
    })
	$(window).scroll(function () {
		animateIt.dragElementsIn();
		$(function() {
			$('.chart').easyPieChart({
				//your options goes here
				lineWidth: 10,
				scaleLength: 0,
				lineCap: "square",
				barColor: "#477ae2",
				trackColor: "#E7E8ED"
			});
		})
	})


})(jQuery);