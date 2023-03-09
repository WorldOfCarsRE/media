/* set environment specific variables here */
/* Variables for MMO */

// base paths
var PATH				= {};
	PATH.cdn			= 'http://carsdev.dolimg.com/1.0';
	PATH.cdnSecure			= 'https://carsdev.dolimg.com/1.0';
	PATH.css			= PATH.cdn +'/css';
	PATH.flv			= PATH.cdn +'/flv';
	PATH.img			= PATH.cdn +'/images';
	PATH.js				= PATH.cdn +'/js';
	PATH.swf			= PATH.cdn +'/swf';
	PATH.swfSecure			= PATH.cdnSecure +'/swf';
	PATH.xml			= PATH.cdn +'/xml';
	PATH.siteRoot			= 'http://carsdev.online.disney.com/game/';
	PATH.siteRootSecure		= 'https://carsdev.online.disney.com/game/';

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
var mapAssetsBaseUrl = "http://carsdev.online.disney.com/game/assets/";
var minigameBaseUrl = "V:/FL_Cars_Minigames/";
var physicsAssetsBaseUrl = "http://carsdev.online.disney.com/assets/track_physics";
var assetsBaseUrl = "y:/";
var assetServiceHost = "http://localtest.disney.com:6111/cars-asset/messagebroker/amf";
var carsServiceHost = "http://localtest.disney.com:6111/carsds/messagebroker/amf";
var isoMapServiceHost = "http://localtest.disney.com:6111/carsds";
var whoAmI = "http://localtest.disney.com:6111/carsds/api/WhoAmIRequest";
var spriteStripRendererURL = "http://carsdev2.online.disney.com/sprite-renderer/renderer/";
var errorReportUrl = "errorreport.html";
var live = "true";
var cheats = "true";
var cast = "false";
var vipWeekendTag = "true";
var swfBaseUrl = "";
var cacheBust = "true";
var rsnBaseUrl = "http://localtest.disney.com:6111/carsds/now/rsn/";
var rsnAssetBaseURL = assetsBaseUrl + "flash/gui/news/";

var isoAssetsRoot = "http://carsdev.online.disney.com/stagecdn";
var checkTestUser = "http://carsdev.online.disney.com:6122/carsds/api/CheckTestUserRequest";
var DOBCookieTO = "30";
var redeemBetaKey = "http://carsdev.online.disney.com:6122/carsds/api/RedeemCouponRequest";
var playPageURL = "http://carsdev.online.disney.com/stage/launcher.html"
var otpTokenURL = "http://localtest.disney.com:6111/carsds/api/GenerateTokenRequest";
var otpTokenPort = 6668;
var clientVersion = "0.0.1";
var otpLoginURL = "localtest.disney.com";
var user = "cartest007";
var pass = "1234";

//queue
var queueEntranceRequestUrl = "http://localtest.disney.com:6111/carsds/api/GameEntranceRequest";
var queueStatusRequestUrl = "http://localtest.disney.com:6111/carsds/api/QueueStatusRequest";

// Variables for site
// general
// reporting
var varSwfAssetUrl = "http://carsdev.online.disney.com/stagecdn/betasiteassets/swf/"
// help URL's
var help_app_url = "http://toolsdev-64.online.disney.com/eventum_cars_admin/post.php"
var help_html_environment = "carsdev.online.disney.com/stage/"

// gate URL's
var gateCheck = "http://carsdev.online.disney.com/cgi-bin/ACD/ACD.js?uri=(http://localtest.disney.com:6111/carsds/api/WhoAmIRequest)"
var gateReturn = "http://carsdev.online.disney.com/stage/"
// reg
var api = "http://localtest.disney.com:6111/carsds/api/";
var login = "http://localtest.disney.com:6111/carsds/api/AccountLoginRequest";
var logout = "http://localtest.disney.com:6111/carsds/api/AccountLogoutRequest";
var autolog = "http://carsdev.online.disney.com/appsdxd7080/dxd/dcom3_flash_api/login?loginType=swid$#$cacheBust=true"
//var whoAmI = "http://localtest.disney.com:6111/carsds/api/WhoAmIRequest";
var regConfig = "http://carsdev.online.disney.com/stagecdn/betasiteassets/swf/registration/registration.xml";
var newsletterID = "22419";// QA - Live newsletter ID is "32502"
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


var spriteStripRendererURL = "http://localhost:6141/sprite-renderer/renderer/";

var locale = "en_US";
var statesURL = "states.xml";
var whichModule = "";
var whichRequirements = "";

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