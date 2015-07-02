//The correct nav links are underlined
if (window.location.pathname == '/') {
	$('#program').addClass('underlined');
} else if (window.location.pathname == '/mentorship') {
	$('#mentorship').addClass('underlined');
} else if (window.location.pathname == '/faq') {
	$('#faq').addClass('underlined');
}

//If window is small, hide the menu
hideMenu();
function hideMenu () {
	if ($( window ).width() < 350) {
		$("nav ul").hide();
		$('#menu-button').addClass("box-shadow-menu").html('menu');
	} else {
		$("nav ul").show();
		$('#menu-button').removeClass("box-shadow-menu").html('');;
	}
}

//Menu button for small windows
$('#menu-button').click(function() {
	if ($("nav ul").css('display') == 'none' ) {
		$("nav ul").slideDown();
	} else {
		$("nav ul").slideUp();
	}
});

//adjust menu on resize
$(window).resize(function() {
   	hideMenu();
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
		description: '1 month of mentorship.',
		amount: 7000,
		allowRememberMe: false
	});
	e.preventDefault();
});
$(window).on('popstate', function() {
	handler.close();
});