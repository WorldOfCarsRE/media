var PATH						= {};
	PATH.cdn					= 'http://localhost:9001/1.1';
	PATH.cdnSecure				= 'https://localhost:9001/1.1';
	PATH.css					= PATH.cdn +'/css';
	PATH.flv					= PATH.cdn +'/flv';
	PATH.img					= PATH.cdn +'/images';
	PATH.js						= PATH.cdn +'/js';
	PATH.swf					= PATH.cdn +'/swf';
	PATH.swfSecure				= PATH.cdnSecure +'/swf';
	PATH.xml					= PATH.cdn +'/xml';
	PATH.siteRoot				= 'http://localhost:9000';
	PATH.siteRootSecure			= 'https://localhost:9000';

// game redirect URLs
var RDR = {
	logOff						: PATH.siteRoot +'/community/',
	blog						: PATH.siteRoot + '/blog/',
	dNameSelect					: PATH.siteRoot +'/sponsorship/manage-account/',
	enterCodes					: PATH.siteRoot +'/',
	feedback					: PATH.siteRoot +'/help/contact-us/',
	reportabug					: PATH.siteRoot +'/help/contact-us/report-a-bug/',
	help						: PATH.siteRoot +'/help/',
	home						: PATH.siteRoot +'/',
	parents						: PATH.siteRoot +'/parents/',
	play						: PATH.siteRoot +'/play.html',
	signUpNow					: PATH.siteRoot +'/sponsorship/',
	sponsorship					: PATH.siteRoot +'/sponsorship/',
	openChat					: PATH.siteRoot +'/sponsorship/manage-account/',
	survey						: PATH.siteRoot +'/thank-you/',
	connectFailure				: PATH.siteRoot +'/help/frequently-asked-questions/cant-connect/',
};

var CFG = {
	// MMO
	assetsBaseUrl				: 'http://carsdev.dolimg.com/game/assets/',
	assetServiceHost			: 'http://apps.dev.worldofcars.go.com/carsds/messagebroker/amf',
	autologo					: 'http://apps.dev.worldofcars.go.com/appsdxd9080/dxd/flashAPI/login?loginType=swid$#$cacheBust=true',
	carsServiceHost				: 'http://apps.dev.worldofcars.go.com/carsds/messagebroker/amf',
	locale						: 'en_US',

	// RAMP
	adultNewsletterID			: 'Disney_Interest_NLO_120508,Disney_WorldofCars_NLO_102008,WDIGFamilySites',
	api							: 'http://apps.dev.worldofcars.go.com/carsds/api/',
	chatPermissionUrl			: 'http://apps.dev2.worldofcars.go.com/appsdxd9080/dxd/flashAPI/sendChatPermissionEmails',
	childNewsletterID			: '',
	commerce					: 'https://registerqa.go.com/commerce/flashapi/',
	contentSwfUrl				: PATH.swf +'/reg/gui/car_f_gui_reg_registration.swf',
	DOBCookieTO					: 30,
	regConfig					: PATH.swf +'/reg/registration.xml',
	loaderSwfUrl				: PATH.swf +'/car_f_gui_ldr_loader.swf',
	loadingAnimationURL			: PATH.swf +'/car_f_gui_ldr_loader.swf',
	login						: '/apps/carsds/api/AccountLoginRequest',
	logout						: '/apps/carsds/api/AccountLogoutRequest',
	parentGuide					: RDR.parents,
	privacyPolicyURL			: 'http://disney.go.com/corporate/privacy/pp_wdig.html',
	promotionName				: 'World_Of_Cars_Online_Virtual_World',
	recoveryPasswordURL			: 'https://registerqa.go.com/global/cars/recoverPassword?appRedirect=http://beta.worldofcars.go.com',
	recoveryUsernameURL			: 'https://registerqa.go.com/global/cars/recoverMemberNames?appRedirect=http://beta.worldofcars.go.com',
	statesURL					: 'states.xml',
	templateId					: 851,
	termsOfUseURL				: 'http://disney.go.com/corporate/privacy/terms.html?ppLink=pp_wdig',
	whoAmI						: '/apps/carsds/api/WhoAmIRequest',

	// Queue
	queueEntranceRequestUrl		: 'http://apps.dev.worldofcars.go.com/carsds/api/GameEntranceRequest',
	queueStatusRequestUrl		: 'http://apps.dev.worldofcars.go.com/carsds/api/QueueStatsRequest',

	// Gate URLs
//	gateCheck					: 'http://localhost:9000/apps/carsds/api/WhoAmIRequest',
//	gateReturn					: 'http://localhost:9000/',

	// Blog
	blogRSS						: 'http://localhost:9000/blog/cars/feed2/entries/rss',
	
	// Help
	help_app_url				: 'http://toolsdev-64.online.disney.com/eventum_cars_admin/post.php',
	help_html_environment		: 'dev.worldofcars.go.com/',

	// Misc
	flashExpressInstall			: 'http://a.dolimg.com/swf/dcom/expressInstall.swf'
};


// Global RAMP config
var RAMP = {
	flashVars : {
		adultNewsletterID		: CFG.adultNewsletterID,
		api						: CFG.api,
		assetsBaseUrl			: CFG.assetsBaseUrl,
		assetServiceHost		: CFG.assetServiceHost,
		autolog					: CFG.autolog,
		carsServiceHost			: CFG.carsServiceHost,
		chatPermissionUrl		: CFG.chatPermissionUrl,
		childNewsletterID		: CFG.childNewsletterID,
		contentSwfUrl			: CFG.contentSwfUrl,
		DOBCookieTO				: CFG.DOBCookieTO,
//		gateCheck				: CFG.gateCheck,
//		gateReturn				: CFG.gateReturn,
		loaderSwfUrl			: CFG.loaderSwfUrl,
		loadingAnimationURL		: CFG.loadingAnimationURL,
		locale					: CFG.locale,
		login					: PATH.siteRoot + CFG.login,
		logout					: CFG.logout,
		parentGuide				: CFG.parentGuide,
		promotionName			: CFG.promotionName,
		privacyPolicyURL		: CFG.privacyPolicyURL,
		queueEntranceRequestUrl	: CFG.queueEntranceRequestUrl,
		queueStatusRequestUrl	: CFG.queueStatusRequestUrl,
		recoveryPasswordURL		: CFG.recoveryPasswordURL,
		recoveryUsernameURL		: CFG.recoveryUsernameURL,
		regConfig				: CFG.regConfig,
		statesURL				: CFG.statesURL,
		templateId				: CFG.templateId,
		termsOfUseURL			: CFG.termsOfUseURL,
		whoAmI					: PATH.siteRoot + CFG.whoAmI,
//		whichModule				: '',
//		whichRequirements		: '',
	},
	params	: {
		menu					: false,
		scale					: 'noScale',
		allowFullscreen			: true,
		allowScriptAccess		: 'always',
		wmode					: 'transparent'
	}
};

// RAMP - Purchase
RAMP.purchase = {
	flashVars	: $.extend( {
		base					: PATH.swfSecure +'/purchasing/',
		showPrepurchaseWarning	: true,
		playPageURL				: RDR.play,
		whoAmI					: PATH.siteRoot + CFG.whoAmI
	}, RAMP.flashVars ),
	params		: $.extend( {}, RAMP.params )
}


/* Variables for MMO */
/*
var customMsg = "";
var mapAssetsBaseUrl = "http://carsdev.dolimg.com/game/assets/";
var minigameBaseUrl = "http://carsdev.dolimg.com/game/games/";
var physicsAssetsBaseUrl = "http://carsdev.dolimg.com/game/assets/track_physics";

var isoMapServiceHost = "http://apps.dev.worldofcars.go.com/carsds";
var whoAmIGame = "http://apps.dev.worldofcars.go.com/carsds/api/WhoAmIRequest";
var spriteStripRendererURL = "http://carsdev2.online.disney.com/sprite-renderer/renderer/";
var errorReportUrl = "http://localhost:9000/help/contact-us/report-a-bug/";
var live = "true";
var cheats = "true";
var cast = "false";
var vipWeekendTag = "true";
var cacheBust = "true";
var swfBaseUrl = "http://carsdev.dolimg.com/game/";

var isoAssetsRoot = "http://carsdev.dolimg.com/game";
var checkTestUser = "http://apps.dev.worldofcars.go.com/carsds/api/CheckTestUserRequest";
var DOBCookieTO = "30";
var redeemBetaKey = "http://apps.dev.worldofcars.go.com/carsds/api/RedeemCouponRequest";
var playPageURL = "http://localhost:9000/play.html"
var otpTokenURL = "http://apps.dev.worldofcars.go.com/carsds/api/GenerateTokenRequest";
var otpTokenPort = 2153;
var otpLoginURL = "carsdev.online.disney.com";
var disableAssetService = "true";
*/