/* set environment specific variables here */
/* Variables for MMO */

// base paths
var PATH				= {};
	PATH.cdn			= 'http://a.dolimg.com/worldofcars/1.0';
	PATH.css			= PATH.cdn +'/css';
	PATH.flv			= PATH.cdn +'/flv';
	PATH.img			= PATH.cdn +'/images';
	PATH.js				= PATH.cdn +'/js';
	PATH.swf			= PATH.cdn +'/swf';
	PATH.xml			= PATH.cdn +'/xml';
	PATH.siteRoot		= '';

// game redirect URLs
var RDR					= {};
	RDR.logOff			= PATH.siteRoot +'/feedback.html';
	RDR.blog			= 'http://blog.worldofcars.go.com/blog/beta/';
	RDR.parents			= PATH.siteRoot +'/parents/';
	RDR.help			= PATH.siteRoot +'/parents/';
	RDR.feedback		= PATH.siteRoot +'/help/contact-us/';
	RDR.enterCodes		= PATH.siteRoot +'/';
	RDR.dNameSelect		= PATH.siteRoot +'/sponsorship/manage-account/';
	RDR.signUpNow		= PATH.siteRoot +'/sponsorship/';
	RDR.openChat		= PATH.siteRoot +'/sponsorship/manage-account/';

/* set environment specific variables here */
/* Variables for MMO */
var mapAssetsBaseUrl = "http://carsdev.online.disney.com/assets/";
var minigameBaseUrl = "http://carsdev.online.disney.com/assets/minigame/";
var physicsAssetsBaseUrl = "http://carsdev.online.disney.com/assets/track_physics";
var assetsBaseUrl = "http://carsdev.online.disney.com/assets/";
var assetServiceHost = "http://carsdev.online.disney.com:6342/cars-asset/messagebroker/amf";
var carsServiceHost = "http://carsdev.online.disney.com:6322/carsds/messagebroker/amf";
var isoMapServiceHost = "http://carsdev.online.disney.com:6322/carsds";
var whoAmI = "http://carsdev.online.disney.com:6322/carsds/api/WhoAmIRequest";
var errorReportUrl = "errorreport.html";
var live = "false";
var cast = "false";
var swfBaseUrl = "";

var isoAssetsRoot = "http://carsdev.online.disney.com/stagecdn";
var checkTestUser = "http://carsdev.online.disney.com:6322/carsds/api/CheckTestUserRequest";
var DOBCookieTO = "30";
var redeemBetaKey = "http://carsdev.online.disney.com:6322/carsds/api/RedeemCouponRequest";
var playPageURL = "http://carsdev.online.disney.com/stage/launcher.html"
var otpTokenURL = "http://carsdev.online.disney.com:6322/carsds/api/GenerateTokenRequest";
var otpTokenPort = 6367;
var clientVersion = "0.0.1";
var otpLoginURL = "carsdev.online.disney.com";

//queue
var queueEntranceRequestUrl = "http://carsdev.online.disney.com:6322/carsds/api/GameEntranceRequest";
var queueStatusRequestUrl = "http://carsdev.online.disney.com:6322/carsds/api/QueueStatsRequest";

// Variables for site
// general
// reporting
var varSwfAssetUrl = "http://carsdev.online.disney.com/stagecdn/betasiteassets/swf/"

// help URL's
var help_app_url = "http://toolsdev-64.online.disney.com/eventum_cars_admin/post.php"
var help_html_environment = "carsdev.online.disney.com/stage/"

// gate URL's
var gateCheck = "http://carsdev.online.disney.com/cgi-bin/ACD/ACD.js?uri=(http://127.0.0.1:6322/carsds/api/WhoAmIRequest)"
var gateReturn = "http://carsdev.online.disney.com/stage/"
// reg
var api = "http://carsdev.online.disney.com:6322/carsds/api/";
var login = "http://carsdev.online.disney.com:6322/carsds/api/AccountLoginRequest";
var logout = "http://carsdev.online.disney.com:6322/carsds/api/AccountLogoutRequest";
var autolog = "http://carsdev.online.disney.com/appsdxd7080/dxd/dcom3_flash_api/login?loginType=swid$#$cacheBust=true"
//var whoAmI = "http://carsdev.online.disney.com:6322/carsds/api/WhoAmIRequest";
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

var spriteStripRendererURL = "http://carsdev2.online.disney.com/sprite-renderer/renderer/";
//var spriteStripRendererURL = "http://carsdev.online.disney.com:6341/sprite-renderer/renderer/";

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