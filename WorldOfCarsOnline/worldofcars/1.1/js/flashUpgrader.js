// Base Class ------------------------------------------[MN]
var DIMGFlashUpgrade = function( config ) {
	var This = function() {
		// Public Vars -----------------------------------------[MN]
		This.config = {
			'versionCurrent'	: 0,
			'versionObject'		: {},
			'versionRequired'	: 0,
			'versionSplit'		: [],
			'confirmationSWF'	: {
				'src'				: false,
				'id'				: false,
				'width'				: 0,
				'height'			: 0,
				'expressInstall'	: false,
				'flashVars'			: {},
				'params'			: {},
				'attributes'		: {},
				'callback'			: function(){}
			},
			'events'			: {
				'continueClicked'			: function(){},
				'onConfirmationSWFReady'	: function(){},
				'renderInstructions'		: function(){},
				'upgradeStarted'			: function(){}
			}
		};
		//------------------------------------------------------[MN]

		// Constructor -----------------------------------------[MN]
		function DIMGFlashUpgrade() {
			jQuery.extend( This.config, config );

			This.setCurrentVersion();
			This.config.confirmationSWF.flashVersion = This.config.versionRequired;
		}
		//------------------------------------------------------[MN]

		// Public Functions ------------------------------------[MN]
		This.init = function() {
			// Trigger Events
			This.config.events.renderInstructions( {
				'versionCurrent'		: This.config.versionCurrent,
				'versionRequired'		: This.config.versionSplit.join( '.' ),
				'hasRequiredVersion'	: This.config.swfobject.hasFlashPlayerVersion( This.config.versionRequired )
			} );
		};

		This.loadConfirmationSWF = function() {
			// Config override
			var config = This.config.confirmationSWF;
			if( arguments[0] ) {
				jQuery.extend( config, arguments[0] );
			}

			// Embed SWF
			This.config.swfobject.embedSWF(
				config.src,
				config.id,
				config.width,
				config.height,
				config.flashVersion,
				config.expressInstall,
				config.flashVars,
				config.params,
				config.attributes,
				config.callback
			);
		};

		This.setCurrentVersion	= function() {
			This.config.versionObject	= This.config.swfobject.getFlashPlayerVersion();
			This.config.versionCurrent	= This.config.versionObject.major +'.'+ This.config.versionObject.minor +'.'+ This.config.versionObject.release;
			This.config.versionSplit	= This.config.versionRequired.split( '.' );
			for( i=This.config.versionSplit.length; i<3; i++ )
				This.config.versionSplit.push( 0 );
		};

		This.triggerUpgrade = function() {
			// Flash not detected
			if( This.config.versionCurrent == '0.0.0' ) {
				// ActiveX install
				if( jQuery.browser.msie ) {
					var swfAttr = {
						data		: This.config.confirmationSWF.src,
						codebase	: 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+ This.config.versionSplit.join( ',' ) +',0',
						width		: This.config.confirmationSWF.width,
						height		: This.config.confirmationSWF.height
					};

					var tmp = [];
					for( i in This.config.confirmationSWF.flashVars ) {
						tmp.push( i +'='+ This.config.confirmationSWF.flashVars[i] );
					}

					var swfParam = {
						flashvars	: tmp.join( '&' )
					};

					jQuery.extend( swfAttr, This.config.confirmationSWF.attributes );
					jQuery.extend( swfParam, This.config.confirmationSWF.params );
					This.config.swfobject.createSWF( swfAttr, swfParam, This.config.confirmationSWF.id );

					This.config.events.upgradeStarted( {
						type	: 'activex'
					} );
				// Manual install
				} else {
					This.config.events.upgradeStarted( {
						type	: 'manual'
					} );
				}

			// Flash detected
			} else {
				// Supports expressinstall ( support added in 6.0.65 )
				if( This.config.confirmationSWF.expressInstall && ( This.config.versionObject.major > 6 || ( This.config.versionObject.major == 6 && This.config.versionObject.release > 65 ) ) ) {
					var configOverride = {}
					if( jQuery.browser.msie ) {
						configOverride.attributes = {
							classid		: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
							codebase	: 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+ This.config.versionSplit.join( ',' ) +',0'
						};
					}
					This.loadConfirmationSWF( configOverride );

					This.config.events.upgradeStarted( {
						type	: 'expressInstall'
					} );
				
				// Manual install
				} else {
					This.config.events.upgradeStarted( {
						type	: 'manual'
					} );
				}
			}

			return false;
		};
		//------------------------------------------------------[MN]

		// Send Reference Back ---------------------------------[MN]
		return DIMGFlashUpgrade();
		//------------------------------------------------------[MN]
	}

	This();
	return This;
};
//------------------------------------------------------[MN]