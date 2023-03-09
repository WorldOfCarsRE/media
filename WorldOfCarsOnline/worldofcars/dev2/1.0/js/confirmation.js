var sAccount = {};
var userSWID = '';			
var jsReady = false;

jq(function(){
	pageInit();
	getSponsorship();
				
	jq('.cancel_sponsorship').click(cancelSponsorship);
	userSWID = getCookie('SWID');
});

function getSponsorship(){
	if(gate == true){
		//window.location = history.go(-1);
		window.location = '/';
	}else{
	// get user info
	jq.ajax({
		type: "GET",
		url: whoAmI,
		data: "additional_info",
		success:function(info){	
			if(jq('access',info).text()=='full'){	
				sAccount.id 	= jq('username',info).text();
			}else{
//				window.location = 'account-error.html';
			}
		},
		error: function(msg){	
			window.location = 'account-error.html';
		}
	});	
	}
}

function callCommerce(){
	alert(commerce+"lookupSubscriptions");
	var data = "<xml>";
	data += "<url>"+commerce+"lookupSubscriptions</url>";
	data += "<method>post</method>";
	data += "<params>product=cars</params>";
	data += "<jscall>loadSubscription</jscall>";
	data += "</xml>";
//	console.log(data);

	sendToActionScript('getData',data);
}

function loadSubscription(data){
//	console.log(data);
	var s = toXML(data);

	if( jq('subscription',s).length < 1 ) {
		window.location = 'account-error.html';
		return false;
	}

	jq('subscription',s).each(function(i){
		var rtp = jq('rightsToPlay',this);
		var oSWID = jq('ownerSwid',rtp).text();
		var orderStatus = rtp.find( 'orderStatus' ).text();

		if( orderStatus == 'Future' ) {
			window.location = 'cancel-preorder.html';
			return false;
		}

		if(userSWID === oSWID){
			sAccount.est 		= jq('startDate',this).text();
			sAccount.expi 	= jq('nextPaymentDate',this).text();
			sAccount.type	= jq('nextPaymentAmount',this).text();
			sAccount.swid 	= userSWID;
			sAccount.oswid 	= oSWID;
			sAccount.prod 	= jq('product',rtp).text();
		}
		
	});
	if(sAccount.expi == 'null' || sAccount.expi == 'undefined')
		window.location = 'account-error.html';
	else
		displayAccount();
}

function displayAccount(){	
	jq('#account_info span').fadeOut(function(){
		var account = sAccount['id'];

		if( account.length > 32 ) {
			account = account.substr( 0, 32 ) +'<br />'+ account.substr( 32 );
		}

		jq('#account_id').html(account).css({'font-weight':'bold','color':'#d31117'});
		jq('#sponsor_type').html('$'+sAccount.type);
		jq('#sponsor_est').html(formatDate(sAccount.est));
		jq('#renew_date').html(formatDate(sAccount.expi));	
		jq(this).fadeIn();		
	});
}

function cancelSponsorship(){
	jq('#account_info span').html('Loading...').css({'color':'#000','font-weight':'normal'});
	call = 'cancel';
	var pass = '?ownerSwid='+sAccount.oswid+'&swid='+sAccount.swid+'&product='+sAccount.prod+'&cancelReason=Not Given&testMode=false';
	var cancelURL = commerce+'disableAutoRenew'+pass;
	document.getElementById( 'crossDomainSWF' ).call( cancelURL, { success : 'checkCancel', fail : 'checkCancel' } );
}

function checkCancel(data){
	var s = toXML(data);
	if(jq('errors',s).length > 0)
		window.location = 'cancellation-error.html';
	else
		window.location = 'canceled.html';
}

function getCookie(name){			
	var cookies 		= document.cookie.split(';');
	var tempCookie 	= '';
	var cookieName 	= '';
	var cookieValue = '';
	var foundCookie = false;
	for (i = 0; i < cookies.length; i++){
		tempCookie = cookies[i].split('=');
		cookieName = tempCookie[0].replace(/^\s+|\s+$/g, '');
		if (cookieName == name){
			foundCookie = true;
			if (tempCookie.length > 1){
				cookieValue = unescape(tempCookie[1].replace(/^\s+|\s+$/g, ''));
			}
			return cookieValue;
			break;
		}
		tempCookie = null;
		cookieName = '';
		}
	if (!foundCookie)
		return null;
}

function formatDate(string){
	var sArray = string.split('-');
	var y = sArray[0];
	var m = sArray[1];
	var d = sArray[2];
	return m+'/'+d+'/'+y;
}
			
function isReady() {
	return jsReady;
}

function pageInit() {
	jsReady = true;				
	jq( document.body ).append( '<div id="crossDomainSWF"></div>' );
	swfobject.embedSWF(
		PATH.swfSecure +'/cross_domain.swf',
		'crossDomainSWF',
		1,
		1,
		'9.0.0',
		false,
		{ ready : 'onDataServiceReady' },
		{ allowScriptAccess : 'always' },
		{}
	);
}

function onDataServiceReady() {
	document.getElementById( 'crossDomainSWF' ).call( commerce +'lookupSubscriptions?product=cars', { success : 'loadSubscription', fail : 'fail' } );
}

function thisMovie(movieName) {
	if (navigator.appName.indexOf("Microsoft") != -1)
		return window[movieName];
	else
		return document[movieName];
}

function sendToActionScript(action,data) {
	console.debug(thisMovie("dataservice"));
	thisMovie("dataservice").callFlash(action,data);
}

function listenFlash(data) {
//	console.debug(data);
	if(data != '')
		callCommerce();
	else
		window.location = 'account-error.html';
}