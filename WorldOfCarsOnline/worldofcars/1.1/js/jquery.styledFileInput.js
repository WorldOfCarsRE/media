(function($) {
	$.styledFileInput = function(input, button, display) {
		var offset = button.offsetParent().offset();
			offset.top = offset.top + (input.height() / 2);
			offset.left = offset.left + input.width() - 30;
		
		var buttonRange = {
			'left' : button.offset().left,
			'right' : button.offset().left + button.width(),
			'top' : button.offset().top,
			'bottom' : button.offset().top + button.height()
		};

		input.css({
			'position' : 'absolute',
			'display' : 'none',
			'opacity' : 0
		});

		input.change(function() {
			display.val(input.val());
		});

		button.parent().mousemove(function(e) {
			if(
				e.pageX >= buttonRange.left &&
				e.pageX <= buttonRange.right &&
				e.pageY >= buttonRange.top &&
				e.pageY <= buttonRange.bottom
			) {
				input.css({
					'display' : 'block',
					'left' : e.pageX - offset.left,
					'top' : e.pageY - offset.top
				});
			} else {
				input.css('display', 'none');
			}
		});

		display.attr('readonly', true);
	}
})(jQuery);