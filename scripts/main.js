'use strict'

var resumePosition = $("#resume").offset().top,
	abilitiesPosition = $("#abilities").offset().top,
	certificatesPosition = $("#certificates").offset().top,
	educationPosition = $("#education").offset().top,
	portifolioPosition = $("#portfolio").offset().top,
	contactPosition = $("#contact").offset().top;

$(window).load(function() {
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
            scrollTop: resumePosition
        }, 1500);
        return false;
	});

	$('#hire').on('click', function(event) {
        $('.parallax').animate({
            scrollTop: contactPosition
        }, 1500);
        return false;
	});

	$('#home-nav').on('click', function(event) {
        $('.parallax').animate({
            scrollTop: 0
        }, 1500);
        return false;
	});

	$('#resume-nav').on('click', function(event) {
        $('.parallax').animate({
            scrollTop: resumePosition
        }, 1500);
        return false;
	});

	$('#abilities-nav').on('click', function(event) {
        $('.parallax').animate({
            scrollTop: abilitiesPosition
        }, 1500);
        return false;
	});

	$('#certificates-nav').on('click', function(event) {
        $('.parallax').animate({
            scrollTop: certificatesPosition
        }, 1500);
        return false;
	});

	$('#education-nav').on('click', function(event) {
        $('.parallax').animate({
            scrollTop: educationPosition
        }, 1500);
        return false;
	});

	$('#portfolio-nav').on('click', function(event) {
        $('.parallax').animate({
            scrollTop: portifolioPosition
        }, 1500);
        return false;
	});

	$('#contact-nav').on('click', function(event) {
        $('.parallax').animate({
            scrollTop: contactPosition
        }, 1500);
        return false;
	});

	setTimeout(function(){
        $('body').toggleClass('loaded');
    }, 3000);

	backToTop();
});

function backToTop(){
	var offset = 300,
	$back_to_top = $('.cd-top');

	$('.parallax').scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
	});

	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('.parallax').animate({
			scrollTop: 0,
	 	}, 1500);
	});
}