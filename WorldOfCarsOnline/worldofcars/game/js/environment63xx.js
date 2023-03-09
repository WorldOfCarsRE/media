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
var mapAssetsBaseUrl = "http://carsdev.online.disney.com/6300/www/assets/";
var minigameBaseUrl = "http://carsdev.online.disney.com/6300/www/assets/minigame/";
var physicsAssetsBaseUrl = "http://carsdev.online.disney.com/6300/content/maps/physics";
var assetsBaseUrl = "http://carsdev.online.disney.com/6300/www/assets/";
var assetServiceHost = "http://carsdev.online.disney.com:6342/cars-asset/messagebroker/amf";
var carsServiceHost = "http://apps.dev.worldofcars.go.com/6300/carsds/messagebroker/amf";
var isoMapServiceHost = "http://apps.dev.worldofcars.go.com/6300/carsds";
var whoAmI = "http://apps.dev.worldofcars.go.com/6300/carsds/api/WhoAmIRequest";
var spriteStripRendererURL = "http://carsdev2.online.disney.com/sprite-renderer/renderer/";
var errorReportUrl = "errorreport.html";
var live = "false";
var cast = "false";
var swfBaseUrl = "";
var customMsg="";
var rsnBaseUrl = "http://apps.dev.worldofcars.go.com/6300/carsds/now/rsn/";
var rsnAssetBaseURL = assetsBaseUrl + "flash/gui/news/";

var isoAssetsRoot = "http://carsdev.online.disney.com/stagecdn";
var checkTestUser = "http://capps.dev.worldofcars.go.com/6300/carsds/api/CheckTestUserRequest";
var DOBCookieTO = "30";
var redeemBetaKey = "http://apps.dev.worldofcars.go.com/6300/carsds/api/RedeemCouponRequest";
var playPageURL = "http://carsdev.online.disney.com/stage/launcher.html"
var otpTokenURL = "http://apps.dev.worldofcars.go.com/6300/carsds/api/GenerateTokenRequest";
var otpTokenPort = 6367;
var clientVersion = "0.0.1";
var otpLoginURL = "carsdev.online.disney.com";

//queue
var queueEntranceRequestUrl = "http://apps.dev.worldofcars.go.com/6300/carsds/api/GameEntranceRequest";
var queueStatusRequestUrl = "http://apps.dev.worldofcars.go.com/6300/carsds/api/QueueStatsRequest";

// Variables for site
// general
// reporting
var varSwfAssetUrl = "http://carsdev.online.disney.com/stagecdn/betasiteassets/swf/"

// help URL's
var help_app_url = "http://toolsdev-64.online.disney.com/eventum_cars_admin/post.php"
var help_html_environment = "carsdev.online.disney.com/stage/"

// reg
var api = "http://apps.dev.worldofcars.go.com/6300/carsds/api/";
var login = "http://apps.dev.worldofcars.go.com/6300/carsds/api/AccountLoginRequest";
var logout = "http://apps.dev.worldofcars.go.com/6300/carsds/api/AccountLogoutRequest";
var autolog = "http://carsdev.online.disney.com/appsdxd7080/dxd/dcom3_flash_api/login?loginType=swid$#$cacheBust=true"
//var whoAmI = "http://apps.dev.worldofcars.go.com/6300/carsds/api/WhoAmIRequest";
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