/* set environment specific variables here */
var PATH				= {};
	PATH.cdn			= 'http://carsqa2.dolimg.com/1.0';
	PATH.cdnSecure			= 'https://carsqa2.dolimg.com/1.0';
	PATH.css			= PATH.cdn +'/css';
	PATH.flv			= PATH.cdn +'/flv';
	PATH.img			= PATH.cdn +'/images';
	PATH.js				= PATH.cdn +'/js';
	PATH.swf			= PATH.cdn +'/swf';
	PATH.swfSecure			= PATH.cdnSecure +'/swf';
	PATH.xml			= PATH.cdn +'/xml';
	PATH.siteRoot			= 'http://www.qa2.worldofcars.go.com';
	PATH.siteRootSecure		= 'https://www.qa2.worldofcars.go.com';

// game redirect URLs
var RDR					= {};
	RDR.logOff			= PATH.siteRoot;
	RDR.blog			= 'http://www.qa2.worldofcars.go.com/blog/blog/';
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
	RDR.survey         = PATH.siteRoot +'/thank-you/';
	RDR.connectFailure 	= PATH.siteRoot +'/help/frequently-asked-questions/cant-connect/';

/* Variables for MMO */
var customMsg = "";
var mapAssetsBaseUrl = "http://carsqa2.dolimg.com/game/assets/";
var minigameBaseUrl = "http://carsqa2.dolimg.com/game/games/";
var physicsAssetsBaseUrl = "http://carsqa2.dolimg.com/game/assets/track_physics";
var assetsBaseUrl = "http://carsqa2.dolimg.com/game/assets/";
var assetServiceHost = "http://apps.qa2.worldofcars.go.com/carsds/messagebroker/amf";
var carsServiceHost = "http://apps.qa2.worldofcars.go.com/carsds/messagebroker/amf";
var isoMapServiceHost = "http://apps.qa2.worldofcars.go.com/carsds";
var whoAmI = "http://apps.qa2.worldofcars.go.com/carsds/api/WhoAmIRequest";
var spriteStripRendererURL = "http://spriterenderer.qa2.worldofcars.go.com/sprite-renderer/renderer/";
var errorReportUrl = "http://www.qa2.worldofcars.go.com/help/contact-us/report-a-bug/";
var live = "false";
var cheats = "true";
var cast = "false";
var vipWeekendTag = "";
var swfBaseUrl = "";
var customMsg="";
var rsnBaseUrl = "http://apps.qa2.worldofcars.go.com/carsds/now/rsn/";

var isoAssetsRoot = "http://carsqa2.dolimg.com/game";
var checkTestUser = "http://apps.qa2.worldofcars.go.com/carsds/api/CheckTestUserRequest";
var DOBCookieTO = "30";
var redeemBetaKey = "http://apps.qa2.worldofcars.go.com/carsds/api/RedeemCouponRequest";
var playPageURL = "http://www.qa2.worldofcars.go.com/play.html"
var otpTokenURL = "http://apps.qa2.worldofcars.go.com/carsds/api/GenerateTokenRequest";
var otpTokenPort = 6667;
var clientVersion = "0.9.2";
var otpLoginURL = "gameserver.qa2.worldofcars.go.com";
var user = "cartest007";
var pass = "1234";

//queue
var queueEntranceRequestUrl = "http://apps.qa2.worldofcars.go.com/carsds/api/GameEntranceRequest";
var queueStatusRequestUrl = "http://apps.qa2.worldofcars.go.com/carsds/api/QueueStatusRequest";
// help URL's
var help_app_url = "http://apps.qa2.worldofcars.go.com/logsubmit/post.php";
var help_html_environment = "www.qa2.worldofcars.go.com/";

// gate URL's
//var gateCheck = "http://www.qa2.worldofcars.go.com/apps/carsds/api/WhoAmIRequest";
//var gateReturn = "http://www.qa2.worldofcars.go.com/";

// reg
var api = "http://apps.qa2.worldofcars.go.com/carsds/api/";
var login = "http://www.qa2.worldofcars.go.com/apps/carsds/api/AccountLoginRequest";
var logout = "http://www.qa2.worldofcars.go.com/apps/carsds/api/AccountLogoutRequest";
var autolog = "http://apps.qa2.worldofcars.go.com/appsdxd9080/dxd/flashAPI/login?loginType=swid$#$cacheBust=true"
//var whoAmI = "http://www.qa2.worldofcars.go.com/apps/carsds/api/WhoAmIRequest";
var regConfig = PATH.swf + "/reg/registration.xml";
var newsletterID = "Disney_Interest_NLO_120508,Disney_WorldofCars_NLO_102008,WDIG_Family_of_Business_NLO_100300";
var recoveryPasswordURL = "https://registerqa.go.com/global/cars/recoverPassword?appRedirect=http://www.qa2.worldofcars.go.com";
var recoveryUsernameURL = "https://registerqa.go.com/global/cars/recoverMemberNames?appRedirect=http://www.qa2.worldofcars.go.com";
var privacyPolicyURL = "http://disney.go.com/corporate/privacy/pp_wdig.html";
var termsOfUseURL = "http://disney.go.com/corporate/privacy/terms.html?ppLink=pp_wdig";
var DOBCookieTO = "30";
var chatPermissionUrl = "http://apps.qa2.worldofcars.go.com/appsdxd9080/dxd/flashAPI/sendChatPermissionEmails";
var promotionName = "World_Of_Cars_Online_Virtual_World";
var templateId = "851";

var loadingAnimationURL = PATH.swf + "/car_f_gui_ldr_loader.swf";
var commerce = "https://registerqa.go.com/commerce/flashapi/";
var blogRSS = "http://www.qa2.worldofcars.go.com/blog9080/blog/crewsnews/feed2/entries/rss";


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
flashvars["login"] = PATH.siteRoot + login || "";
flashvars["logout"] = logout || "";
flashvars["whoAmI"] = PATH.siteRoot + whoAmI;
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