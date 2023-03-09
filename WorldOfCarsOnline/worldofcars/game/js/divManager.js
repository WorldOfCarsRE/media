// Div Manager Class -----------------------------------[MN]
var divManager = function( config ) {
	var This = function() {
		
		// Public Vars
		This._config = {
		};

		// Constructor
		( function() {
			This._config = jQuery.extend( This._config, config );
		} )();
		
		// Public Functions
		This.loadSWF = function( flashvarsOverride, paramsOverride, forceRestartOverride ) { // param list taken from startSWF()
			var queryStringOverride				= arguments[3] ? arguments[3] : false;
			var dmgParams						= jQuery.extend( params, paramsOverride );
			var dmgFlashVars					= jQuery.extend( flashvars, flashvarsOverride );
				dmgFlashVars["forceRestart"]	= "false";

			This.removeSWF();
			$( document.body ).append( '<div id="gameDiv"></div>' );
			swfobject.embedSWF( dmgParams["base"] +'DVC_OS.swf'+ ( queryStringOverride ? '?'+ queryStringOverride : '' ), "gameDiv", "100%", "100%", "10.0.0", false, dmgFlashVars, dmgParams );
		};

		This.removeSWF = function() {
			$( '#gameDiv' ).remove();
		};

		return This;
	};
	return This();
};
//------------------------------------------------------[MN]