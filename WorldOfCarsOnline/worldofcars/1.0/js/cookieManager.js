// Cookie Manager Class --------------------------------[MN]
var cookieManager = function( config ) {
	var This = function() {
		
		// Public Vars
		This._config = {
			pages:		{},
			windows:	{
				'game'		: window,
				'website'	: window.opener
			}
		};

		// Constructor
		( function() {
			This._config = jQuery.extend( This._config, config );
		} )();
		
		// Public Functions
		This.get = function( name ) {
			var indexStart	= document.cookie.indexOf( name +'=' );

			if( indexStart == -1 ) {
				return false;
			}

			var indexEnd	= document.cookie.indexOf( ';', indexStart );
			if( indexEnd == -1 ) {
				indexEnd = document.cookie.length - 1;
			}

			return unescape( document.cookie.substring( indexStart, indexEnd ) );
		}

		return This;
	};
	return This();
};
//------------------------------------------------------[MN]