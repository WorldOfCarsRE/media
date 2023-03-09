// Window mangaer
var WMG = new windowManager( {
	pages				: RDR,
	omnitureTracking	: {
		'purchase_sponsor_your_car_nav'		: { property : 'car', account : 'worldofcars', category : 'dgame', site : 'woc', siteSection : 'game:sponsorship', contentType : 'regular' },
		'crews_news_landing_nav'			: { property : 'car', account : 'worldofcars', category : 'dgame', site : 'woc', siteSection : 'game:community', contentType : 'regular' },
		'help_contact_us_report_a_bug_nav'	: { property : 'car', account : 'worldofcars', category : 'dgame', site : 'woc', siteSection : 'game:community', contentType : 'regular' },
		'help_home_nav'						: { property : 'car', account : 'worldofcars', category : 'dgame', site : 'woc', siteSection : 'game:community', contentType : 'homepage' },
		'change_server_nav'					: { property : 'car', account : 'worldofcars', category : 'dgame', site : 'woc', siteSection : 'game:server', contentType : 'regular' }
	}//,
//	survey				: PATH.siteRoot +'/survey/'
} );

jQuery( document ).ready( function() {
	if( !swfobject.hasFlashPlayerVersion( '10' ) ) {
		window.location = PATH.siteRoot +'/play/flash-upgrade.html';
	}

	flashParams	= {
		allowscriptaccess	: 'always',
		base				: PATH.swf +'/reg/'
	};

	flashvars["trackingManagerConfig"]	= PATH.swf +'/reg/config/tracker.xml';

	jQuery( document.body ).append( '<div id="pla-moduleContainer" class="pla-moduleContainer-reg"><div id="pla-regModule"></div></div>' );
	WMG.resizeWindow( jQuery('#pla-moduleContainer').width(), jQuery('#pla-moduleContainer').height() );
	swfobject.embedSWF( PATH.swf +'/reg/DVC_OS.swf', 'pla-regModule', '100%', '100%', '10.0.0', false, flashvars, flashParams );
} );

function regComplete(){
	jQuery( '#pla-moduleContainer' ).remove();
	jQuery( document.body ).append( '<div id="pla-moduleContainer" class="pla-moduleContainer-game"><div id="pla-gameModule"></div></div>' );
	WMG.resizeWindow( jQuery('#pla-moduleContainer').width(), jQuery('#pla-moduleContainer').height() );

	flashvars["assetsBaseUrl"] = assetsBaseUrl;
	flashvars["minigameBaseUrl"] = minigameBaseUrl;
	flashvars["assetServiceHost"] = assetServiceHost;
	flashvars["carsServiceHost"] = carsServiceHost;
	flashvars["physicsAssetsBaseUrl"] = physicsAssetsBaseUrl;
	flashvars["isoMapServiceHost"] = isoMapServiceHost;
	flashvars["whoAmI"] = whoAmIGame;
	flashvars["errorReportUrl"] = errorReportUrl;
	flashvars["loginURL"] = login;
	flashvars["otpTokenURL"] = otpTokenURL;
	flashvars["otpTokenPort"] = otpTokenPort;
	flashvars["otpLoginURL"] = otpLoginURL;
	flashvars["clientVersion"] = clientVersion;
	flashvars["signUpNow"] = RDR.signUpNow;
	flashvars["cast"] = cast;
	flashvars["live"] = live;
	flashvars["vipWeekendTag"] = vipWeekendTag;
	flashvars["cheats"] = cheats;
	flashvars["watchdog"] = false;
	flashvars["watchdogMemoryLimit"] = 500;
	flashvars["queueEntranceRequestUrl"] = queueEntranceRequestUrl;
	flashvars["queueStatusRequestUrl"] = queueStatusRequestUrl;			
	flashvars["spriteStripRendererURL"] = spriteStripRendererURL;
	flashvars["chatPermissionUrl"] = chatPermissionUrl || "";
	flashvars["promotionName"] = promotionName || "";
	flashvars["templateId"] = templateId || "";
	flashvars["customMsg"] = customMsg;
	flashvars["rsnBaseUrl"] = rsnBaseUrl;
	flashvars["rsnAssetBaseURL"] = rsnAssetBaseURL;
	flashvars["mapAssetsBaseUrl"] = mapAssetsBaseUrl;
	flashvars["disableAssetService"] = disableAssetService;

	flashParams	= {
		allowscriptaccess	: 'always',
		bgcolor				: '#0A0C0E',
		base				: swfBaseUrl,
		menu				: false
	};

	swfobject.embedSWF( swfBaseUrl +'/DVC_OS.swf', 'pla-gameModule', '100%', '100%', '10.0.0', false, flashvars, flashParams );
}