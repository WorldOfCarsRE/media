function getcookie(c_name){
	var nameEQ = c_name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) { 
			return unescape(c.substring(nameEQ.length,c.length));
		}
	}
	return null;
}


function onDataServiceReady() {
	document.getElementById( 'crossDomainSWF' ).call( CFG.commerce +'/lookupSubscriptions?product=cars', { success : 'subscriptionLoaded' } );
}

function subscriptionLoaded( xml ) {
	var SWID				= getcookie( 'SWID' );
	var paymentDecription	= '';
	if( !SWID ) {
		return false;
	}
		xml = toXML( xml );
	jQuery( xml ).find( 'rightsToPlay' ).each( function() {
		if( jQuery( this ).children( 'ownerSwid' ).text() == SWID ) {
			paymentDecription = jQuery( this ).children( 'orderDescription' ).text();
		}
	} );

	if( paymentDecription ) {
		jQuery( '#ty-membershipPlan' ).html( paymentDecription );
	}
}

jQuery( document ).ready( function() {
	jQuery( document.body ).append( '<div id="crossDomainSWF"></div>' );
	swfobject.embedSWF(
		PATH.swf +'/cross_domain.swf',
		'crossDomainSWF',
		1,
		1,
		'9.0.0',
		false,
		{ ready : 'onDataServiceReady' },
		{ allowScriptAccess : 'always' },
		{}
	);

	jQuery( '.welcome_play' ).click( onPlayClick );
	mboxTrack( 'Cars_PurchaseComplete' );
} );