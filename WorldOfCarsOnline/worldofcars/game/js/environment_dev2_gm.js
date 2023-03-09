var PATH				= {};
	PATH.cdn			= 'http://carsdev2.dolimg.com/1.0';
	PATH.cdnSecure			= 'https://carsdev2.dolimg.com/1.0';
	PATH.css			= PATH.cdn +'/css';
	PATH.flv			= PATH.cdn +'/flv';
	PATH.img			= PATH.cdn +'/images';
	PATH.js				= PATH.cdn +'/js';
	PATH.swf			= PATH.cdn +'/swf';
	PATH.swfSecure			= PATH.cdnSecure +'/swf';
	PATH.xml			= PATH.cdn +'/xml';
	PATH.siteRoot			= 'http://carscsdev2.starwave.com';
	PATH.siteRootSecure		= 'https://carscsdev2.starwave.com';

// game redirect URLs
var RDR					= {};
	RDR.logOff			= PATH.siteRoot +'/community/';
	RDR.blog			= PATH.siteRoot + '/blog/';
	RDR.dNameSelect		= PATH.siteRoot +'/sponsorship/manage-account/';
	RDR.enterCodes		= PATH.siteRoot +'/';
	RDR.feedback		= PATH.siteRoot +'/help/contact-us/';
	RDR.reportabug		= PATH.siteRoot +'/help/contact-us/report-a-bug/';
	RDR.help			= PATH.siteRoot +'/help/';
	RDR.home			= PATH.siteRoot +'/';
	RDR.parents			= PATH.siteRoot +'/parents/';
	RDR.signUpNow		= PATH.siteRoot +'/sponsorship/';
	RDR.sponsorship		= PATH.siteRoot +'/sponsorship/';
	RDR.openChat            = PATH.siteRoot +'/sponsorship/manage-account/';
	RDR.survey         	= PATH.siteRoot +'/thank-you/';
	RDR.connectFailure 	= PATH.siteRoot +'/help/frequently-asked-questions/cant-connect/';

/* Variables for MMO */
var customMsg = "";
var mapAssetsBaseUrl = "http://carsdev2.dolimg.com/game/assets/";
var minigameBaseUrl = "http://carsdev2.dolimg.com/game/games/";
var physicsAssetsBaseUrl = "http://carsdev2.dolimg.com/game/assets/track_physics";
var assetsBaseUrl = "http://carsdev2.dolimg.com/game/assets/";
var assetServiceHost = "http://carscsdev2.starwave.com/carsds/messagebroker/amf";
var carsServiceHost = "http://carscsdev2.starwave.com/carsds/messagebroker/amf";
var isoMapServiceHost = "http://carscsdev2.starwave.com/carsds";
var whoAmI = "http://carscsdev2.starwave.com/carsds/api/WhoAmIRequest";
var spriteStripRendererURL = "http://carsdev2.online.disney.com/sprite-renderer/renderer/";
var errorReportUrl = "errorreport.html";
var live = "true";
var cheats = "true";
var cast = "false";
var vipWeekendTag = "false";
var cacheBust = "true";
var swfBaseUrl = "";//http://carsdev2.dolimg.com/game/";
var rsnBaseUrl = "http://carscsdev2.starwave.com/carsds/now/rsn/";
var rsnAssetBaseURL = assetsBaseUrl + "flash/gui/news/";

var isoAssetsRoot = "http://carsdev2.dolimg.com/game";
var checkTestUser = "http://carscsdev2.starwave.com/carsds/api/CheckTestUserRequest";
var DOBCookieTO = "30";
var redeemBetaKey = "http://carscsdev2.starwave.com/carsds/api/RedeemCouponRequest";
var playPageURL = "http://dev2.worldofcars.go.com/play.html"
var otpTokenURL = "http://carscsdev2.starwave.com/carsds/api/GenerateTokenRequest";
var otpTokenPort = 2268;
var otpLoginURL = "carsdev.online.disney.com";
var disableAssetService = "true";
var user = "cartest007";
var pass = "1234";

//queue
var queueEntranceRequestUrl = "http://carscsdev2.starwave.com/carsds/api/GameEntranceRequest";
var queueStatusRequestUrl = "http://carscsdev.starwave.com/dev2/carsds/api/QueueStatusRequest";

// Variables for site
// general
// reporting
var varSwfAssetUrl = "http://carsdev2.dolimg.com/"

// help URL's
var help_app_url = "http://toolsdev-64.online.disney.com/eventum_cars_admin/post.php"
var help_html_environment = "carsdev2.online.disney.com/stage/"

// gate URL's
var gateCheck = "http://carsdev2.online.disney.com/cgi-bin/ACD/ACD.js?uri=(http://127.0.0.1:2122/carsds/api/WhoAmIRequest)"
var gateReturn = "http://carsdev2.online.disney.com/stage/"
// reg
var api = "http://apps.dev2.worldofcars.go.com/carsds/api/";
var login = "http://apps.dev2.worldofcars.go.com/carsds/api/AccountLoginRequest";
var logout = "http://apps.dev2.worldofcars.go.com/carsds/AccountLogoutRequest";
var autolog = "http://carsdev.online.disney.com/appsdxd7080/dxd/dcom3_flash_api/login?loginType=swid$#$cacheBust=true"
//var whoAmI = "http://apps.dev2.worldofcars.go.com/carsds/api/WhoAmIRequest";
var regConfig = PATH.swf + "/reg/registration.xml";
var childNewsletterID = "";
var adultNewsletterID = "Disney_Interest_NLO_120508,Disney_WorldofCars_NLO_102008,WDIGFamilySites";
var recoveryPasswordURL = "https://registerqa.go.com/global/cars/recoverPassword?appRedirect=http://beta.worldofcars.go.com";
var recoveryUsernameURL = "https://registerqa.go.com/global/cars/recoverMemberNames?appRedirect=http://beta.worldofcars.go.com";
var privacyPolicyURL = "http://disney.go.com/corporate/privacy/pp_wdig.html";
var termsOfUseURL = "http://disney.go.com/corporate/privacy/terms.html?ppLink=pp_wdig";
var DOBCookieTO = "30";
var chatPermissionUrl = "http://carsdev.online.disney.com/appsdxd7080/dxd/flashAPI/sendChatPermissionEmails";
var promotionName = "World_Of_Cars_Online_Virtual_World";
var templateId = "851";

var loadingAnimationURL = assetsBaseUrl + "flash/gui/loader/car_f_gui_ldr_loader.swf";
var commerce = "https://registerqa.go.com/commerce/flashapi/";
var blogRSS = "http://qa.worldofcars.go.com/blog7080/blog/crewsnews/feed2/entries/rss";

var locale = "en_US";
var statesURL = "states.xml";
var whichModule = "";
var whichRequirements = "";

var contentSwfUrl = PATH.swf +"/reg/gui/car_f_gui_reg_registration.swf";
var loaderSwfUrl = assetsBaseUrl + "flash/gui/loader/car_f_gui_ldr_loader.swf";


// set global flash vars
var flashvars = {};
flashvars["locale"] = locale || "";
flashvars["regConfig"] = regConfig || "";
flashvars["whichModule"] = whichModule || "";
flashvars["whichRequirements"] = whichRequirements || "";
flashvars["assetsBaseUrl"] = assetsBaseUrl || "";
flashvars["assetServiceHost"] = assetServiceHost || "";
flashvars["carsServiceHost"] = carsServiceHost || "";
flashvars["api"] = api || "";
flashvars["login"] = login || "";
flashvars["logout"] = logout || "";
flashvars["whoAmI"] = whoAmI || "";
flashvars["autolog"] = autolog || "";
flashvars["newsletterID"] = newsletterID || "";
flashvars["recoveryPasswordURL"] = recoveryPasswordURL || "";
flashvars["recoveryUsernameURL"] = recoveryUsernameURL || "";
flashvars["termsOfUseURL"] = termsOfUseURL || "";
flashvars["privacyPolicyURL"] = privacyPolicyURL || "";
flashvars["DOBCookieTO"] = DOBCookieTO || "";
flashvars["parentGuide"] = RDR.parents || "";
flashvars["statesURL"] = statesURL || "";
flashvars["loadingAnimationURL"] = loadingAnimationURL || "";
flashvars["queueEntranceRequestUrl"] = queueEntranceRequestUrl || "";
flashvars["queueStatusRequestUrl"] = queueStatusRequestUrl || "";
//flashvars["gateCheck"] = gateCheck;
//flashvars["gateReturn"] = gateReturn;
flashvars["contentSwfUrl"] = contentSwfUrl;
flashvars["loaderSwfUrl"] = loaderSwfUrl;
flashvars["chatPermissionUrl"] = chatPermissionUrl || "";
flashvars["promotionName"] = promotionName || "";
flashvars["templateId"] = templateId || "";

// set global flash params
var flashparams = {
	menu: "false",
	scale: "noScale",
	allowFullscreen: "true",
	allowScriptAccess: "always",
	wmode: "transparent"
};