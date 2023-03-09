// Window Manager Class --------------------------------[MN]
var windowManager = function( config ) {
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
		This.goTo = function( page ) {
			var closeGame		= arguments[1] ? arguments[1] : false;
			var focusWebsite	= false;

			if( This._config.pages[page] ) {
				if( This._config.windows.website == null || jQuery( This._config.windows.website ).attr( 'closed' ) ) {
					This._config.windows.website			= window.open( This._config.pages[page], 'woc_site' );
				} else {
					This._config.windows.website.location	= This._config.pages[page];
				}

				focusWebsite = true;
			}

			if( closeGame == 'true' ) {
				This._config.windows.game.close();
				This._config.windows.game	= null;
				focusWebsite				= true;
			}

			if( focusWebsite ) {
				This._config.windows.website.focus();
			}
		}

		return This;
	};
	return This();
};
//------------------------------------------------------[MN]