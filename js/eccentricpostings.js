if($.browser.msie) {
	alert('I spend almost zero amount of time designing this site to support IE.  Sorry, but I really do not have the time to be graphically designing for that particular browser.  If you are using IE 6, shame on you!');
}


$(document).ready(function() { $('.Blinky').each(function() {
	var elem = $(this);
	setInterval(function() {
		if(elem.css('visibility') == 'hidden') { elem.css('visibility', 'visible'); }
		else { elem.css('visibility', 'hidden'); }
	}, 500
	);
})});
