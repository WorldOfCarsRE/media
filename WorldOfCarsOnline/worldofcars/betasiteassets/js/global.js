$( document ).ready( function() {
	checkGate();
	gateTimer = setInterval(checkGate,15000);
} );

var gate = false;
var errorInt = 0;
var gateResponse = true;



function checkGate() {
	if( !gateResponse ) {
		gateUnavailable();
	}

	gateResponse = false;
	$.getScript( gateCheck, onGateResponse );
}

function onGateResponse() {
	gateResponse = true;
	if( ACD ) {
		processGate( ACD.responseText );
	}
}

function gateUnavailable() {
	var defaultMessage = '<gameClosed>The World of Cars Online is currently unavailable. We apologize for the inconvenience and are working quickly to resolve the problem. Please try again soon and thank you for your patience!</gameClosed>';
	processGate( defaultMessage );
}

function processGate(xmlString) {
	if (window.DOMParser){
		var parser = new DOMParser();
		xml = parser.parseFromString(xmlString,"text/xml");
	} else { // Internet Explorer
		xml = new ActiveXObject("Microsoft.XMLDOM");
		xml.async="false";
		xml.loadXML(xmlString);
	}

	if($('testUser',xml).length > 0){
		showGate($('testUser',xml).text());
		gateMsg = $('testUser',xml).text();
	}
	if($('notification',xml).length > 0){
		showGate($('notification',xml).text());
		gateMsg = $('notification',xml).text();
	}
	if($('gameClosed',xml).length > 0){
		showGate($('gameClosed',xml).text());
		disableContinue();
		gate = true;
		gateMsg = $('gameClosed',xml).text();
	}
	if($('notification',xml).length == 0 && $('gameClosed',xml).length == 0){
		removeGate();
	}
}

function showGate(msg){
	if(msg != 'true' && msg != 'false'){
		if($('#gate').length == 0){
			$('#chrome').after('<div id="gate"><div class="l_gate"><p>'+msg+'</p></div></div>');
			$('#gate').slideDown();
		}
		if($('#gate p').html() != msg)
			$('#gate p').html(msg);
	}
}

function removeGate(){
	gate = false;
	$('#gate').slideDown(function(){$(this).remove();});
	enableContinue();
}

function disableContinue() {
	$( '#hpg-loginForm' ).find( 'button[type=submit]' ).attr( 'disabled', true );
}

function enableContinue() {
	$( '#hpg-loginForm' ).find( 'button[type=submit]' ).attr( 'disabled', false );
}