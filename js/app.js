$(document).ready(function(){
	$('.ryu').mouseenter(function() {
		$('.ryu-cool').hide();
		$('.ryu-still').hide();
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-cool').hide();
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		//play hadouken sound
		playHadouken();
		$('.ryu-cool').hide();
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		//animate hadouken to the right of screen
		$('.hadouken').finish().show()
		.animate({'left': '860px'},500, 
			function() {
				$(this).hide();
				$(this).css('left', '360px');
			});
	})
	.mouseup(function() {
		$('.ryu-cool').hide();
		$('.ryu-still').hide();
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
	
	$("body").keydown(function(event) {
		if (event.which == 88) {
			event.preventDefault();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		};
		$(this).keyup(function(event) {
			if (event.which == 88) {
				event.preventDefault();
				$('.ryu-cool').hide();
				$('.ryu-still').show();
			};
		});
	});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}