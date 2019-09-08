$(document).ready(function() { 
	function box (){
	var height = $('#image').height();
	if ($(window).width() >= '768'){
	$('#aboutme').height(height);
	}
	else{
	$('#aboutme').height(400);	
	}
	}
	box();
	$(window).resize(function() {
		box();
	});
	});
