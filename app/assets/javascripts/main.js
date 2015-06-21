//"How it works" section dropdowns

$('.more').html('more &#9660;');
$('.more').click(function() {
	if ($(this).next().css('display') == 'none' ) {
		$(this).next().slideDown();
		$(this).html('less &#9650;');
	} else {
		$(this).next().slideUp();
		$(this).html('more &#9660;');
	}
});

//navigation becomes fixed when you scroll down
var navElement = $('nav ul');
var contentTop = $('#body-content');
var navOffset = navElement.offset().top;
var scrollOffset; 

function setNavPosition() {
 	scrollOffset = $(this).scrollTop();   	
  	var fix = (scrollOffset > navOffset) ? true : false;
   	navElement.toggleClass("fixed", fix);
	$('body').toggleClass("fixed-nav", fix);
};

function resetNavOffset() {
   	if (navElement.hasClass('fixed')) {
   		navOffset = contentTop.offset().top;
   		navOffset += - 34;
   	} else {
   		navOffset = navElement.offset().top;
   	};
};

$(window).scroll( setNavPosition );
$(window).resize(function() {
   	var id;
   	clearTimeout(id);
   	id = setTimeout(resetNavOffset, 500);    
});//end resize

//smoothScroll
$('nav a').smoothScroll();