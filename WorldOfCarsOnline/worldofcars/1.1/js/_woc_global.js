// set jQuery no conflict
var jq = jQuery.noConflict();

var jsReady = false;
var eiData = {};
var regCallback = '';

// var basePath = 'http://a.dolimg.com/worldofcars/websitedevelopment';	// REPLACED WITH PATH.cdn
// var imgPath = basePath+'/images';		// REPLACED WITH PATH.img
var gate = false;
var gateMsg = '';
var gateTimer = '';
var gameWindow = false;
var gameWindowSpawning = false;
var moduleSpawning = false;
var helpSwitchAnimating = false;
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

		if( typeof WTN != 'undefined' ) { // Restart What's New carousel
			WTN.start();
		}
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

	jq( window ).scrollTop( 0 );
	jq("#"+div).css({
		"position":"absolute",
		"top": "0px",
		"left": xCenter+"px"
	});
	
	jq("#blk_alpha").css({
		"height":wHeight,
		"width":wWidth
	});
	
	jq(window).bind('resize',resizePopup);
	
	if( typeof WTN != 'undefined' ) { // Pause What's New carousel
		WTN.pause();
	}

	loadPopup(div);
}

function resizePopup(){
	if(popupStatus == 1)
		centerPopup(activeDiv)
}

function disabledClick() {
	return false;
}

function carsLogin(u,p){
	if(gate == true){
		alert(gateMsg);
	}else{
		jq.ajax({
			type: "POST",
			url: login,
			data: "username="+u+"&password="+p,
			success: loginSuccess,
			error: handleError
		});
	}
}

function toCancel(){
	window.location = '/sponsorship/manage-account/cancel-sponsorship/confirmation.html';
}

function productLoginSuccess(){	
}

function loginComplete(){	
}
function handleError(e){
//	alert(e);
}
function exitMod(){
	disablePopup(activeDiv);
}
function loadOverlay(){
	
}
function loadRegMod(){
	if( moduleSpawning && moduleSpawning != 'registration' ) {
		return false;
	}

	if( !swfobject.hasFlashPlayerVersion( '10' ) ) {
		jq( window ).attr( 'location', PATH.siteRoot +'/flash-upgrade/' );
		return false;
	}

	if(WOC.gated == true){
		alert(WOC.bannerMessage);
	}else{
		moduleSpawning = true;
	jq('body').append('<div id="regDiv"><div id="flashcontent"></div></div><div id="blk_alpha"></div>');
	jq('#regDiv').css({
			"position":"absolute",
			"left":"0",
			"top":"0",
			"width":"994px",
			"height":"906px",
			"z-index":"999999"
		});

		centerPopup('regDiv');
		whichModule = "registration";			
		flashparams["base"] = PATH.swf +'/reg/';

		regFlashVars = flashvars;
		regFlashVars["trackingManagerConfig"]	= PATH.swf +'/reg/config/tracker.xml';

		var	ebSession	= getSessionID();
		var ebRand		= Math.random()+'';
			ebRand		= ebRand * 1000000;
		regFlashVars["mediaMindConversion"]		= 'HTTPS://bs.serving-sys.com/BurstingPipe/activity3.swf?ebAS=bs.serving-sys.com&activityParams=' + escape( 'ActivityID=73484&f=1&Session=' + ebSession ) + '&rnd=' + ebRand;

    var attributes = {
			id:"CarsReg"
		};

		swfobject.embedSWF( PATH.swf +'/reg/DVC_OS.swf', "flashcontent", "100%", "100%", "10.0.0","http://a.dolimg.com/swf/dcom/expressInstall.swf", regFlashVars, flashparams, attributes, function(e){
			setTimeout( 'jq( "#CarsReg" ).focus();', 100 );
		} );
		moduleSpawning = false;
	}

}

function loadPurchMod(){
	if( moduleSpawning && moduleSpawning != 'purchase' ) {
		return false;
	}

	if( !swfobject.hasFlashPlayerVersion( '10' ) ) {
		jq( window ).attr( 'location', PATH.siteRoot +'/flash-upgrade/' );
		return false;
	}

	moduleSpawning = true;


	var loginPageURL = querySt("loginURL");
	if( loginPageURL == null )
		loginPageURL = "someurl.html";
	
	var playPageURL = querySt("playURL");
	if( playPageURL == null )
		playPageURL = "someurl.html";

	var purchFlashVars		= jq.extend( {}, flashvars );
	var purchFlashParams	= jq.extend( {}, flashparams );

	PATH.swfSecure = PATH.swfSecure.replace( '1.0', '1.1' );

	purchFlashVars["showPrepurchaseWarning"]	= true;
	purchFlashVars["loginPageURL"]				= loginPageURL;
	purchFlashVars["playPageURL"]				= playPageURL;
	purchFlashVars["whoAmI"]					= PATH.siteRootSecure + whoAmI;
	purchFlashParams["base"]					= PATH.swfSecure +'/purchasing/';

	purchFlashVars['accountHoldURL']			= TMP.accountHoldURL;
	purchFlashVars['forgotIDURL']				= TMP.forgotIDURL;
	purchFlashVars['forgotPasswordURL']			= TMP.forgotPasswordURL; 
	purchFlashVars['regWidgetCallback']			= 'loadRegMod()';
	purchFlashVars['newsletterID']				= adultNewsletterID;
	purchFlashVars['memberServiceURL']			= 'stringtables/'+ locale +'/memberServiceAgreement.html';
	purchFlashVars['congratsRedirectURL']		= PATH.siteRoot +'/welcome-sponsored-racer/';
	purchFlashVars['kidsRulesURL']				= 'stringtables/en_US/kidsrules.xml';
	purchFlashVars['widgetURL']					= PATH.siteRootSecure +'/sponsorship/purchase/';
	purchFlashVars['trackingManagerConfig']		= PATH.swfSecure +'/common/tracker.xml';
	purchFlashVars['statesURL']					= PATH.swfSecure +'/common/states.xml';
	purchFlashVars['countriesURL']				= PATH.swfSecure +'/common/countries.xml';
	purchFlashVars['linkColor']					= '#FFFFFF';
	purchFlashVars['giftPurchaseURL']			= PATH.siteRoot +'/';
	purchFlashVars['congratsEmailPath']			= TMP.congratsEmailPath;
	purchFlashVars['IPDetectPath']				= 'https://tredir.go.com/capmon/GetDE';
	purchFlashVars['congratsExitURL']			= purchFlashVars['congratsRedirectURL'];
	purchFlashVars['needParentExitURL']			= PATH.siteRoot +'/community/';
//	purchFlashVars['sessionRefresh']			= false;
	purchFlashVars['width']						= 915;
	purchFlashVars['topPadding']				= 0;
	purchFlashVars['topDialogPadding']			= 50;
	purchFlashVars['dontModifyCloseButton']		= true;
	purchFlashVars['regConfig']					= PATH.swfSecure +'/common/registration.xml';
	purchFlashVars['contentSwfUrl']				= PATH.swfSecure +'/purchasing/cars_purchasing_skin.swf';
	purchFlashVars['logout']					= TMP.logout;
	purchFlashVars['gameLogin']					= TMP.login;
	purchFlashVars['skipCongratsScreen']		= true;

	for( i in purchFlashVars ) {
		if( typeof purchFlashVars[i] == 'string' ) {
			purchFlashVars[i] = purchFlashVars[i].replace( PATH.cdn, PATH.cdnSecure );
			purchFlashVars[i] = purchFlashVars[i].replace( '1.0', '1.1' );
		}
	}

	var attributes = {
		id:"CarsPurchasing"
	};
//console.debug(purchFlashVars);
//console.debug(purchFlashParams);
	swfobject.embedSWF( PATH.swfSecure +'/purchasing/DVC_OS.swf', 'ramp-purchMod', '100%', '100%', '9.0.0', "http://a.dolimg.com/swf/dcom/expressInstall.swf", purchFlashVars, purchFlashParams, { id : 'ramp-purchMod' }, function( e ){ setTimeout( 'jq( "#ramp-purchMod" ).focus();', 100 ); } );

	moduleSpawning = false;
	PATH.swfSecure = PATH.swfSecure.replace( '1.1', '1.0' );
}

function loadAcctMgr(){
	if( moduleSpawning && moduleSpawning != 'accountManager' ) {
		return false;
	}

	if( !swfobject.hasFlashPlayerVersion( '10' ) ) {
		jq( window ).attr( 'location', PATH.siteRoot +'/flash-upgrade/' );
		return false;
	}

	PATH.swf = PATH.swf.replace( '1.0', '1.1' );

	flashparams["base"] = PATH.swf +'/acm/';
			
    var attributes = {
			id:"CarsAcctMgmt"
		};


	acmFlashVars	= flashvars;
	acmFlashParams	= flashparams;

	acmFlashVars['regConfig']					= PATH.swf +'/common/registration.xml';
	acmFlashVars['statesURL']					= PATH.swf +'/common/states.xml';
	acmFlashVars['countriesURL']				= PATH.swf +'/common/countries.xml';
	acmFlashVars['parentGuide']					= TMP.parentGuide;
	acmFlashVars['skinPath']					= 'car_f_gui_reg_accountManager.swf';
	acmFlashVars['purchaseURL']					= PATH.siteRootSecure +'/sponsorship/purchase/';
	acmFlashVars['stringtable']					= 'stringtables/' + locale + '/global.json';
	acmFlashVars['trackingManagerConfig']		= PATH.swf +'/common/tracker.xml';
	acmFlashVars['widgetURL']					= PATH.siteRoot +'/sponsorship/manage-account/';
	acmFlashVars['forgotIDURL']					= TMP.forgotIDURL;
	acmFlashVars['forgotPasswordURL']			= TMP.forgotPasswordURL; 
	acmFlashVars['regWidgetCallback']			= 'loadRegMod()';
	acmFlashVars['playURL']						= PATH.siteRoot +'/welcome/';
	acmFlashVars['cancelCompleteOkURL']			= PATH.siteRootSecure +'/sponsorship/purchase/';
	acmFlashVars['membershipCardURL']			= PATH.siteRootSecure +'/sponsorship/purchase/';
	acmFlashVars['widthUsedByLoginDialog']		= 870;
	acmFlashVars['heightUsedByLoginDialog']		= 580;
	acmFlashVars['IPDetectPath']				= 'http://tredir.go.com/capmon/GetDE';
	acmFlashVars['dontModifyCloseButton']		= true;
	acmFlashVars['logout']						= TMP.logout;
	acmFlashVars['gameLogin']					= TMP.login;
	acmFlashVars['accountHoldURL']				= TMP.accountHoldURL;


	swfobject.embedSWF( PATH.swf +'/acm/DVC_OS.swf', 'ramp-acctMgrMod', '100%', '100%', '9.0.0', "http://a.dolimg.com/swf/dcom/expressInstall.swf", acmFlashVars, acmFlashParams, { id : 'ramp-acctMgrMod' }, function( e ){ setTimeout( 'jq( "#ramp-acctMgrMod" ).focus();', 100 ); } );

	moduleSpawning = false;
	PATH.swf = PATH.swf.replace( '1.1', '1.0' );
}
/*
function loadPlayButton(){
	if( !jq( '.sys-btn-play' ).hasClass( 'sys-btn-play-active' ) ) {
		jq( '.sys-btn-play' ).addClass( 'sys-btn-play-active' );
	}
}
*/
function playisEnabled() {
	return jq( '.sys-btn-play' ).hasClass( 'sys-btn-play-active' );
}

function loadPlayButton() {
	if( !playisEnabled() ) {
		jq( '.sys-btn-play' ).addClass( 'sys-btn-play-active' );
	}
}

function loadDataservice(){
	var callback	= arguments[0] ? arguments[0] : false;
	var basePath	= arguments[1] ? arguments[1] : PATH.swf;
	var wrap = jq('<div>');//.css({'height':'0px','width':'0px'});
	jq('body').append('<div id="flash_content"></div>');
	jq('#flash_content').wrap(wrap);		
	var attributes = {};
		attributes['id'] = 'dataservice';
		attributes['allowScriptAccess'] = "always";
	var flashparams = {};
		flashparams['allowScriptAccess'] = "always";
	var flashvars = {};
		flashvars['allowScriptAccess'] = "always";

	swfobject.embedSWF(basePath +'/dataservice.swf', "flash_content", "1", "1", "9.0.0", "", flashvars, flashparams, attributes, callback);
}

function regComplete(){		
	window.location = PATH.siteRoot +'/welcome/';
}

function goToReg(){
	loadRegMod();
}
			
function purchaseComplete(){
/*
	disablePopup(activeDiv);	
	launchGame();
*/
	window.location = PATH.siteRoot +'/welcome-sponsored-racer/';
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
	if( gameWindowSpawning ) {
		return false;
	}
	gameWindowSpawning = true;

	if( gameWindow && !gameWindow.closed ) {
		gameWindow.focus();
		gameWindowSpawning = false;
		return false;
	}

	if( gate ) {
		window.location = PATH.siteRoot +'/';
		gameWindowSpawning = false;
		return false;
	}

	if( !swfobject.hasFlashPlayerVersion( '10' ) ) {
		jq( window ).attr( 'location', PATH.siteRoot +'/flash-upgrade/' );
		gameWindowSpawning = false;
		return false;
	}

	disablePopup(activeDiv);
	var winW		= 1005;
	var winH		= 690;
	var winScroll	= false;
	if( screen.width < winW ) {
		winW		= screen.width;	
		winScroll	= true;
	}
	if( screen.height < winH ) {
		winH		= screen.height;
		winScroll	= true;
	}		
	var winAttr		= [ 'status=0', 'height='+ winH, 'width='+ winW, 'resizable=0', 'toolbar=0', 'menubar=0', 'location=0', 'directories=0', 'scrollbars='+ ( winScroll ? '1' : '0' ) ];

	gameWindow = window.open( playPageURL, 'game_window', winAttr.join( ',' ) );

	if( !gameWindow ) {
		jq( document.body ).append( '<div id="popup_blocked" style="width: 600px; height: 500px; background: #FFF; z-index: 999999;"><p>your popup was blocked.</p><p>See that bar that appeared at the top up there? Click that and make an exception for this site.</p></div><div id="blk_alpha"></div>' );
		centerPopup( 'popup_blocked' );
		loadPlayButton();
		gameWindowSpawning = false;
		return false;
	} else {
		gameWindow.focus();
	}

	gameWindowSpawning = false;
}

function callRaceCodes(){
	if( moduleSpawning && moduleSpawning != 'raceCodes' ) {
		return false;
	}

	if( !swfobject.hasFlashPlayerVersion( '10' ) ) {
		jq( window ).attr( 'location', PATH.siteRoot +'/flash-upgrade/' );
		return false;
	}

	jq('body').append('<div id="raceCodesDiv"><div id="flashcontent"></div></div><div id="blk_alpha"></div>');
	jq('#raceCodesDiv').css({
			"position":"absolute",
			"left":"0",
			"top":"0",
			"width":"600px",
			"height":"500px",
			"z-index":"999999"
		});

		centerPopup('raceCodesDiv');
		whichModule = "registration";			
			
		var flashparams = {
			menu: "false",
			scale: "noScale",
			allowFullscreen: "true",
			allowScriptAccess: "always",
			bgcolor: "#FFFFFF",
			base: PATH.swf +'/race_codes/',
			wmode: 'transparent'
		};
		var attributes = {
			id:"CarsCodeRedeem"
		};

		swfobject.embedSWF( PATH.swf +'/race_codes/DVC_OS.swf', "flashcontent", 600, 500, "10.0.0","http://a.dolimg.com/swf/dcom/expressInstall.swf", flashvars, flashparams, attributes );
		moduleSpawning = false;
}

function helpSwitch(){
	if( helpSwitchAnimating ) {
		return false;
	}

	helpSwitchAnimating = true;
	jq('.q_list a').removeClass('selected');
	jq(this).addClass('selected');
	var index = jq('.q_list a').index(this);
	jq('.help_answer_mod p').each(function(i){
		if(i == index){
			jq(this).fadeIn( 400, function(){ helpSwitchAnimating = false; } );
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
var errorMsgs = [];
errorMsgs[1] = 'Unautorized';
errorMsgs[2] = 'We were unable to send your feedback please <a href="/help/contact-us/">click here</a> to try again.';
errorMsgs['default'] = 'We\'re sorry, we are having difficulties with your request.';

function goToLogin() {
	exitMod();
	loadRegMod();
}

function goToPage( page ) {
	if( RDR[page] ) {
		window.location = RDR[page];
	} else {
		return false;
	}
}

/*
function parentRedirect( page, close ){
	eval( 'var URL = typeof( '+ page +' ) == "string" ? '+ page +' : false;' );

	if( URL ) {
		top.window.location = URL;
		top.window.focus();
	}

	if( close == 'true' ) {
		gameWindow.close();
		window.focus();
	}
}
*/

function getUserTech() {
	var userAgent	= navigator.userAgent.toLowerCase();
	var os			= '';
	var osCheck		= {
		mac:	/mac/.test( userAgent ),
		win:	/win/.test( userAgent ),
		ppc:	/ppc/.test( userAgent ),
		xp:		/(nt 5.1|nt 5.2)/.test( userAgent ),
		vista:	/(nt 6.0)/.test( userAgent ),
		win7:	/(nt 6.1)/.test( userAgent )
	};
	var userTech	= [
		'userAgent='+ navigator.userAgent,
		'browser='+ whichBrs(),
		'browserVersion='+ (userAgent.toLowerCase().match( /.+(?:rv|it|ra|ie|me|ox|on)[\/: ]([\d.]+)/ ) || [0,'0'])[1],
		'engineVersion='+ jq.browser.version,
		'resolution='+ screen.width +'x'+ screen.height
	];

	if( osCheck.win ) {
		os = 'Windows';
		if( osCheck.xp ) {
			os += ' XP';
		} else if( osCheck.vista ) {
			os += ' Vista';
		} else if( osCheck.win7 ) {
			os += ' 7';
		}
	} else if( osCheck.mac ) {
		os = 'Mac';
	} else if ( osCheck.ppc ) {
		os = 'Power PC';
	}
	userTech.push( 'os='+ os );

	return userTech.join( '|' );
}

function banRedirect( url ) {
	window.location = url;
}

function redirectToUrl( url ) {
	banRedirect( url );
}

function getSessionID() {
	if( jq.cookie( 'sessionID' ) ) {
		return jq.cookie( 'sessionID' );
	} else {
		return setSessionID();
	}
}

function setSessionID() {
	var date = new Date();
	var sessionID = date.getTime() +'.'+ Math.floor( Math.random() * 10000001 );

	jq.cookie( 'sessionID', sessionID );

	return sessionID;
}