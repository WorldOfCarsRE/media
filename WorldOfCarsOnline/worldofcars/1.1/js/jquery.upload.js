jQuery.fn.ajaxPostIframe = function( config, callback ) {
	// Config ----------------------------------------------[MN]
	config = jQuery.extend( {
		iframeID: 'DIMGajaxUpload'
	}, config );
	//------------------------------------------------------[MN]

	// Append iframe and post to it ------------------------[MN]
	jQuery( '#'+ config.iframeID ).remove();
	this.attr( 'target', config.iframeID );
	jQuery( document.body ).append( '<iframe id="'+ config.iframeID +'" name="'+ config.iframeID +'" frameborder="0" width="1" height="1" style="visibility: hidden" src="blank.html"></iframe>' );
	jQuery( '#'+ config.iframeID ).load( function() {
		// Eval JSON response and pass it to callback ----------[MN]
		eval( 'var response = '+ jQuery( this ).contents().find( 'body' ).html() );
		callback( response );
		//------------------------------------------------------[MN]
		setTimeout( function() { jQuery( '#'+ config.iframeID ).remove(); }, 1 );
	} );
	//------------------------------------------------------[MN]
};