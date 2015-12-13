$(function() {
    $('#progressHtml').progress({value:90, total:100});
	$('#progressCss').progress({value:80, total:100});
	$('#progressJS').progress({value:90, total:100});
	$('#progressJquery').progress({value: 75, total:100});
	$('#progressAngular').progress({value:85, total:100});
	$('#progressNode').progress({value:80, total:100});
	$('#progressDotNet').progress({value:95, total:100});
	$('#progressRoR').progress({value:60, total:100});
	$('#progressScrum').progress({value:95, total:100});

	$('#scrollDown').on('click', function(event) {
        $('.parallax').animate({
            scrollTop: $("#resume").offset().top
        }, 1500);
        return false;
	});

	$('#hire').on('click', function(event) {
        $('.parallax').animate({
            scrollTop: $("#contact").offset().top
        }, 1500);
        return false;
	});

	backToTop();
});

function backToTop(){
	var offset = 300,

	//grab the "back to top" link
	$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$('.parallax').scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('.parallax').animate({
			scrollTop: 0 ,
	 	}, 1500);
	});
}