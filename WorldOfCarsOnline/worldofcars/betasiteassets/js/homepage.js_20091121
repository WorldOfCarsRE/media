$( document ).ready( function() {
	$( '#hpg-loginForm' ).submit( onLoginSubmit );
} );


function onLoginSubmit() {
	var formVals = {
		'username'	: $( this ).find( 'input[name=username]' ).val(),
		'password'	: $( this ).find( 'input[name=password]' ).val()
	};

	$( '.hpg-errorMessage' ).remove();
	if( !formVals.username ) {
		$( '<div class="hpg-errorMessage">Please enter your Account ID.</div>' ).insertBefore( '#hpg-loginForm' );
		return false;
	} else if( !formVals.password ) {
		$( '<div class="hpg-errorMessage">Please enter your password.</div>' ).insertBefore( '#hpg-loginForm' );
		return false;
	}

	$.getScript( 'http://apps.beta.worldofcars.go.com/cgi-bin/ACD/ACD.js?uri=(http://127.0.0.1:8080/carsds/api/AccountLoginRequest)&headers=(Content-type=application/x-www-form-urlencoded)&method=post&postdata=(username='+ formVals.username +'&password='+ formVals.password +')', onLoginResponse );

	return false;
}

function onLoginResponse() {
	var error = $( ACD.responseText ).find( 'error' );
	if( error.length ) {
		switch( error.attr( 'code' ) ) {
			case 'LOGIN_FAILED':

				$( '<div class="hpg-errorMessage">Invalid Account ID and Password combination.</div>' ).insertBefore( '#hpg-loginForm' );
			break;

			default:
				$( '<div class="hpg-errorMessage">Error.</div>' ).insertBefore( '#hpg-loginForm' );
			break;
		}
		return false;
	}

	if( !swfobject.hasFlashPlayerVersion( '10' ) ) {
		$( window ).attr( 'location', PATH.siteRoot +'/flash-upgrade/' );
		return false;
	}

	var gameWindow = window.open( playPageURL, "game_window", "status=no,height=700,width=1005,resizable=no,toolbar=no,menubar=no,scrollbars=no,location=no,dependent=yes" );

	if( !gameWindow ) {
		$( window ).attr( 'location', PATH.siteRoot +'/popup-blocked/' );
		return false;
	} else {
		gameWindow.focus();
	}
}