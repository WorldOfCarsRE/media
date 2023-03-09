// set jQuery no conflict
var jq = jQuery.noConflict();

// set custom Disney chrome
var chromeColor = "lightgrey";
var chromeWidth = 996;
var chromeCategory = "Games";
var legalFooterColor = "#A3A3A3";
var legalFooterCat = "Games"; 

var jsReady = false;
var eiData = {};
var regCallback = '';

var imgPath='http://a.dolimg.com/worldofcars/websitedevelopment/images';

jq(function(){
	
	jq('.q_list a').click(helpSwitch);
	
	//jq(document).keypress(function(e){
		//console.log(e.keyCode);
	//});
});
/*
window.onbeforeunload = function (evt) {
  var message = 'Are you sure you want to leave?';
  if (typeof evt == 'undefined') {
    evt = window.event;
  }
  if (evt) {
    evt.returnValue = message;
  }
  return message;
}
*/

// Test browser for Version IE
function browserVersion() {
	var version = '';
  if (navigator.appVersion.indexOf("MSIE") != -1)
    version = parseFloat(navigator.appVersion.split("MSIE")[1]);
  return version;
}

var popupStatus = 0;
var activeDiv = '';
var opacity = '0.7';
var access = false;

function loadPopup(div){
	if(popupStatus==0){
		jq("#blk_alpha").css({
			"opacity":opacity
		});
		jq("#blk_alpha").fadeIn("fast");
		jq("#"+div).fadeIn("slow");
		popupStatus = 1;
		
		jq("#blk_alpha").click(function(){
			jq('#blk_alpha').fadeOut('fast');
			disablePopup(activeDiv);
		});
	}	
}

function disablePopup(div){
	if(popupStatus==1){
		jq("#blk_alpha").fadeOut("fast");
		jq("#"+div).fadeOut("slow");
		popupStatus = 0;
		
		jq("#blk_alpha").remove();
		jq("#"+div).remove();
	}	
}

function centerPopup(div){
	activeDiv=div;
	var wWidth = document.documentElement.clientWidth;
	var wHeight = document.documentElement.clientHeight;
	var popupHeight = jq("#"+div).height();
	var popupWidth = jq("#"+div).width();
	
	var xCenter = (wWidth/2)-(popupWidth/2);
	var yCenter = (wHeight/2)-(popupHeight/2);
	var top = yCenter < 0 ? 0 : yCenter;
	
	jq("#"+div).css({
		"position":"absolute",
		"top": top+"px",
		"left": xCenter+"px"
	});
	
	jq("#blk_alpha").css({
		"height":wHeight,
		"width":wWidth
	});
	
	jq(window).bind('resize',resizePopup);
	
	loadPopup(div);
}

function resizePopup(){
	if(popupStatus == 1)
		centerPopup(activeDiv)
}

function carsLogin(u,p){
	jq.ajax({
		type: "GET",
		url: login,
		data: "username="+u+"&password="+p,
		success: loginSuccess,
		error: handleError
	});
}

function toCancel(){
	window.location = '/sponsorship/manage-account/cancel-sponsorship/confirmation.html';
}


function productLoginSuccess(){	
}

function loginComplete(){	
}
function handleError(e){
	alert(e);
}
function exitMod(){
	disablePopup(activeDiv);
}
function loadRegMod(){
	jq('body').append('<div id="regDiv"><div id="flashcontent"></div></div><div id="blk_alpha"></div>');
	jq('#regDiv').css({
			"position":"absolute",
			"left":"0",
			"top":"0",
			"width":"997px",
			"height":"100%",
			"z-index":"999999"
		});

		centerPopup('regDiv');

		var whichModule = "registration";
			
		var flashvars = {};

			flashvars["locale"] = locale;
			flashvars["regConfig"] = regConfig;
			flashvars["whichModule"] = whichModule;
			flashvars["assetsBaseUrl"] = assetsBaseUrl;
			flashvars["assetServiceHost"] = assetServiceHost;
			flashvars["carsServiceHost"] = carsServiceHost;
			
			flashvars["api"] = api;
			flashvars["login"] = login;
			flashvars["logout"] = logout;
			flashvars["whoAmI"] = whoAmI;
			flashvars["autolog"] = autolog;
			flashvars["newsletterID"] = newsletterID;
			flashvars["recoveryPasswordURL"] = recoveryPasswordURL;
			flashvars["recoveryUsernameURL"] = recoveryUsernameURL;
			flashvars["termsOfUseURL"] = termsOfUseURL;
			flashvars["privacyPolicyURL"] = privacyPolicyURL;
			flashvars["DOBCookieTO"] = DOBCookieTO;
			
			//flashvars["gateCheck"] = gateCheck;
			//flashvars["gateReturn"] = gateReturn;
			
			 var params = {
        quality: "high",
       	allowscriptaccess : "always",
				wmode: "transparent",
				base: "http://a.dolimg.com/worldofcars/websitedevelopment/swf/reg/"
			}
			
      var attributes = {
				id:"CarsReg"
			};

				swfobject.embedSWF("http://a.dolimg.com/worldofcars/websitedevelopment/swf/reg/DVC_OS.swf", "flashcontent", "100%", "100%", "10.0.0","http://a.dolimg.com/swf/dcom/expressInstall.swf", flashvars, params, attributes);
}

function loadPurchMod(){
	jq('body').append('<div id="purchDiv"><div id="flashPurch"></div></div><div id="blk_alpha"></div>');
	jq('#purchDiv').css({
			"position":"absolute",
			"left":"0",
			"top":"0",
			"width":"997px",
			"height":"906px",
			"z-index":"999999"
		});
		centerPopup('purchDiv');
		
		whichModule = "purchasing";
			
			var loginPageURL = querySt("loginURL");
			if( loginPageURL == null )
				loginPageURL = "someurl.html";
			
			var playPageURL = querySt("playURL");
			if( playPageURL = null )
				playPageURL = "someurl.html";

			flashvars["loginPageURL"] = loginPageURL;
			flashvars["playPageURL"] = playPageURL;
			
			flashparams["base"] = "http://a.dolimg.com/worldofcars/websitedevelopment/swf/purchasing/";
			
			var attributes = {
				id:"CarsPurchasing"
			};
		swfobject.embedSWF("http://a.dolimg.com/worldofcars/websitedevelopment/swf/purchasing/DVC_OS.swf", "flashPurch", "100%", "100%", "9.0.0","http://a.dolimg.com/swf/dcom/expressInstall.swf", flashvars, flashparams, attributes);
}

function loadAcctMgr(){
	jq('body').append('<div id="acmDiv"><div id="flashACM"></div></div><div id="blk_alpha"></div>');
	jq('#acmDiv').css({
			"position":"absolute",
			"left":"0",
			"top":"0",
			"width":"997px",
			"height":"100%",
			"z-index":"999999"
		});
		centerPopup('acmDiv');
		whichModule = "accountManagement";
			
		flashparams["base"] = "http://a.dolimg.com/worldofcars/websitedevelopment/swf/acm/";
			
    var attributes = {
			id:"CarsAcctMgmt"
		};

		swfobject.embedSWF("http://a.dolimg.com/worldofcars/websitedevelopment/swf/acm/DVC_OS.swf", "flashACM", "100%", "100%", "10.0.0","http://a.dolimg.com/swf/dcom/expressInstall.swf", flashvars, flashparams, attributes);
}

function loadDataservice(){
	var wrap = jq('<div>');//.css({'height':'0px','width':'0px'});
	jq('body').append('<div id="flash_content"></div>');
	jq('#flash_content').wrap(wrap);
	var flashvars = {};				
	var params = {};
	params.allowscriptaccess = "always"
	console.log(params);
	var attributes = {};
		attributes.id = 'dataservice';
  
	swfobject.embedSWF("/swf/dataservice.swf", "flash_content", "1", "1", "9.0.0", "", flashvars, params, attributes);
}

function regComplete(){		
	launchGame();
}

function goToReg(){
	loadRegMod();
}
			
function purchaseComplete(){	
	disablePopup(activeDiv);	
	window.location.href="/sponsorship/";
}

function toXML(string){
	try //Internet Explorer
	{
    xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async="false";
    xmlDoc.loadXML(string);
		return xmlDoc;
	}
	catch(e)
	{
    parser=new DOMParser();
    xmlDoc=parser.parseFromString(string,"text/xml");
		return xmlDoc;
	}	
}

function launchGame(){
	disablePopup(activeDiv);	
	window.open("/play.html","game_window","status=no,height=700,width=1005,resizable=no,toolbar=no,menubar=no,scrollbars=no,location=no,dependent=yes");
	game_window.focus();
}

function callRaceCodes(){
	alert('Race Codes coming soon!!');
}

function helpSwitch(){
	jq('.q_list a').removeClass('selected');
	jq(this).addClass('selected');
	var index = jq('.q_list a').index(this);
	jq('.help_answer_mod p').each(function(i){
		if(i == index){
			jq(this).fadeIn();
		}else{
			jq(this).hide();
		}
	});
}
function querySt(name) {
	gy = window.location.search.substring(1).split("&");
	for (i=0;i<gy.length;i++) {
		ft = gy[i].split("=");
		if (ft[0] == name) {
			return ft[1];
		}
  }
}