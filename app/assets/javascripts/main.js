//"How it works" section dropdowns
$('.more').html('more &#9660;');
$('.more').click(function() {
	if ($(this).prev().css('display') == 'none' ) {
		$(this).prev().slideDown();
		$(this).html('less &#9650;');
	} else {
		$(this).prev().slideUp();
		$(this).html('more &#9660;');
	}
});

//Stripe
var handler = StripeCheckout.configure({
	key: 'pk_live_cmTN0iRE9yLjrPkSPTrtjGjr',
	token: function(token, args) {
    	document.getElementById("stripeToken").value = token.id;                              
        document.getElementById("stripeEmail").value = token.email;
        document.getElementById("chargeForm").submit();
    }
});
$('#buy-button').on('click', function(e) {
	handler.open({
		name: 'Startup Soap',
		description: '1 month of mentorship (We are testing this website right now. Do not use this form!)',
		amount: 250,
		allowRememberMe: false
	});
	e.preventDefault();
});
$(window).on('popstate', function() {
	handler.close();
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