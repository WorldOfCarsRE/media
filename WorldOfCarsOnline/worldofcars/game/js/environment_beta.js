/* set environment specific variables here */
/* Variables for MMO */

// base paths
var PATH				= {};
	PATH.cdn			= 'http://carsqa.dolimg.com/1.0';
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
	RDR.help			= PATH.siteRoot +'/help/';
	RDR.enterCodes		= PATH.siteRoot +'/';
	RDR.dNameSelect		= PATH.siteRoot +'/sponsorship/manage-account/';
	RDR.signUpNow		= PATH.siteRoot +'/sponsorship/';
	RDR.sponsorship		= PATH.siteRoot +'/sponsorship/';
	RDR.openChat		= PATH.siteRoot +'/sponsorship/manage-account/';
	RDR.survey         = PATH.siteRoot +'/thank-you/';

/* set environment specific variables here */
/* Variables for MMO */
var mapAssetsBaseUrl = "http://a.dolimg.com/worldofcars/game/assets/";
var minigameBaseUrl = "http://a.dolimg.com/worldofcars/game/assets/games/";
var physicsAssetsBaseUrl = "http://a.dolimg.com/worldofcars/game/assets/track_physics";
var assetsBaseUrl = "http://a.dolimg.com/worldofcars/game/assets/";
var assetServiceHost = "http://carsdev.online.disney.com:6342/cars-asset/messagebroker/amf";
var carsServiceHost = "http://apps.worldofcars.go.com/carsds/messagebroker/amf";
var isoMapServiceHost = "http://apps.worldofcars.go.com/carsds";
var whoAmI = "http://apps.worldofcars.go.com/carsds/api/WhoAmIRequest"
var spriteStripRendererURL = "http://spriterenderer.worldofcars.go.com/sprite-renderer/renderer/";
var errorReportUrl = "reportabug.html";
var live = "false";
var cheats = "true";
var cast = "false";
var swfBaseUrl = "";
var customMsg="";
var rsnBaseUrl = "http://apps.worldofcars.go.com/carsds/now/rsn/";
var rsnAssetBaseURL = assetsBaseUrl + "flash/gui/news/";

var isoAssetsRoot = "http://a.dolimg.com/worldofcars/game";
var checkTestUser = "http://apps.worldofcars.go.com/carsds/api/CheckTestUserRequest";
var DOBCookieTO = "30";
var redeemBetaKey = "http://apps.worldofcars.go.com/carsds/api/RedeemCouponRequest";
var playPageURL = "http://worldofcars.go.com/play.html"
var otpTokenURL = "http://apps.worldofcars.go.com/carsds/api/GenerateTokenRequest";
var otpTokenPort = 6667;
var clientVersion = "0.1.1";
var otpLoginURL = "gameserver.worldofcars.go.com";

//queue
var queueEntranceRequestUrl = "http://apps.worldofcars.go.com/carsds/api/GameEntranceRequest";
var queueStatusRequestUrl = "http://apps.worldofcars.go.com/carsds/api/QueueStatusRequest";

// Variables for site
// general
// reporting
var varSwfAssetUrl = "http://carsstage.dolimg.com/betasiteassets/swf/"

// help URL's
var help_app_url = "http://toolsdev-64.online.disney.com/eventum_cars_admin/post.php"
var help_html_environment = "worldofcars.go.com/"

// gate URL's
var gateCheck = "http://worldofcars.go.com/cgi-bin/ACD/ACD.js?uri=(http://127.0.0.1:8080/carsds/api/WhoAmIRequest)"
var gateReturn = "http://worldofcars.go.com/"
// reg
var api = "http://apps.beta.worldofcars.go.com/carsds/api/";
var login = "http://apps.beta.worldofcars.go.com/carsds/api/AccountLoginRequest";
var logout = "http://apps.beta.worldofcars.go.com/carsds/api/AccountLogoutRequest";
var autolog = "http://stage.worldofcars.go.com/appsdxd7080/dxd/dcom3_flash_api/login?loginType=swid$#$cacheBust=true"
//var whoAmI = "http://apps.beta.worldofcars.go.com/apps/carsds/api/WhoAmIRequest";
var regConfig = "http://carsstage.dolimg.com/websitedevelopment/xml/registration.xml";
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
var blogRSS = "http://stage.worldofcars.go.com/blog7080/blog/crewsnews/feed2/entries/rss";

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