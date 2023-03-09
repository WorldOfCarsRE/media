jQuery( document ).ready( function() {
	if( !swfobject.hasFlashPlayerVersion( '10' ) ) {
		window.location = PATH.siteRoot +'/play/flash-upgrade.html';
	}

	flashParams	= {
		allowscriptaccess	: 'always',
		base				: PATH.swf +'/reg/'
	};

	swfobject.embedSWF( PATH.swf +'/reg/DVC_OS.swf', 'pla-regModule', '100%', '100%', '10.0.0', false, flashvars, flashParams );
} );

function regComplete(){		
	window.location = PATH.siteRoot +'/play/game.html';
}