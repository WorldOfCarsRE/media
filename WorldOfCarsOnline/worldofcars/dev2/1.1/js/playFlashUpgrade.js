var FUG = new DIMGFlashUpgrade( {
	'swfobject'			: swfobject,
	'versionRequired'	: '10',
	'confirmationSWF'	: {
		'src'				: PATH.swf +'/flashUpgradeDark.swf',
		'id'				: 'upg-DIMGFlashUpgrade',
		'width'				: 300,
		'height'			: 410,
		'expressInstall'	: 'http://cdn.cars.dolimg.com/swf/dcom/expressInstall.swf',
		'flashVars'			: {
			'readyCallback'		: 'FUG.config.events.onConfirmationSWFReady',
			'continueCallback'	: 'FUG.config.events.continueClicked'
		},
		'params'			: {
			'allowScriptAccess'	: 'always',
			'bgcolor'			: '#000000'
		},
		'attributes'		: {},
		'callback'			: function(){}
	},
	'events'			: {
		'continueClicked'			: function() {
			window.location = 'login.html';
		},
		'onConfirmationSWFReady'	: function() {
			if( jQuery.browser.msie && FUG.config.versionCurrent == '0.0.0' ) {
				window.location = window.location;
			}
		},
		'renderInstructions'		: function( data ){
			// Display instructions

			var HTML = '<div class="upg-DIMGFlashUpgradeInstructionsContainer">';
					HTML += '<div class="upg-DIMGFlashUpgradeInstructions">';
						HTML += '<h2>Rev up your car and explore the world</h2>';
						HTML += '<table class="upg-flashVersionTable">';
							HTML += '<tr><td>Your Flash Player version:</td><td class="upg-flashVersion upg-flashVersionCurrent">'+ ( data.versionCurrent == '0.0.0' ? 'not installed' : data.versionCurrent ) +'</td></tr>';
							HTML += '<tr><td>Required Flash Player version:</td><td class="upg-flashVersion">'+ data.versionRequired +'</td></tr>';
						HTML += '</table>';
					HTML += '</div>';
			if( !data.hasRequiredVersion ) {
					HTML += '<div class="upg-DIMGFlashUpgradeAction">';
						HTML += '<p>To experience The World of Cars Online, click the button below to head to the Pits and download a new Flash Player.</p>';
						HTML += '<p>Concerned about updating your Flash Player? Please <a href="http://worldofcars.go.com/help/contact-us/technical-questions/" target="_blank">Contact Us</a>.</p>';
						HTML += '<a href="#" class="upg-DIMGFlashUpgradeTrigger">Upgrade Flash Player</a>';
					HTML += '</div>';
			}
				HTML += '</div>';
				HTML += '<div id="upg-DIMGFlashUpgrade" style="z-index: 1000;"><img id="upg-DIMGFlashUpgradePromo" src="'+ PATH.img +'/affiliate/prm.downloadFlashPlayer.png" /></div>';

			jQuery( '.upg-upgradeWrapper' ).html( HTML ).find( '.upg-DIMGFlashUpgradeTrigger' ).click( FUG.triggerUpgrade );

			// Load Confirmation SWF
			if( data.hasRequiredVersion ) {
				FUG.loadConfirmationSWF();
			}
		},
		'upgradeStarted'			: function( data ) {
			switch( data.type ) {
				case 'activex':
				case 'expressInstall':
					jQuery( '.upg-DIMGFlashUpgradeInstructionsContainer' ).find( '.upg-DIMGFlashUpgradeAction' ).html( '<p>Give us just a minute, and we\'ll auto-install the Flash Player on your computer. When installation is done, an animation will appear to guide you.</p>' );
				break;

				case 'manual':
					jQuery( '.upg-DIMGFlashUpgradeInstructionsContainer' ).find( '.upg-DIMGFlashUpgradeAction' ).html( '<p>Your browser does not support automatic installation of the Flash Player. Please <a href="http://get.adobe.com/flashplayer/" target="_blank">click here</a> to download and install the player.</p>' );
				break;
			}
		}
	}
} );

jQuery( document ).ready( function() {
	FUG.init();
} );