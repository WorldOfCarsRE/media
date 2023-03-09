jq( document ).ready( function() {
		jq('.com-poll').poll( { container : '.com-poll' } );
//	loadSlideXML();

	 var params = {
		bgcolor: "#0c171b",
		quality: "high",
		allowscriptaccess : "always",
		base: PATH.swf +'/carpreview/',
		wmode:'transparent'
	}

	var attributes = {
		id:"CarPreview"
	};

	swfobject.embedSWF( PATH.swf +'/carpreview/DVC_OS.swf', "com-carPreview", 152, 158, '10.0.0', false, flashvars, params, attributes);
} );
jq( document ).ready( loadFanArt );

function loadFanArt() {
	jq.getJSON( '/js/fan-art.json', false, onFanArtLoad )
}

function onFanArtLoad( data ) {
	fanArt = data.slice( 0, 4 );

	var HTML = '';
	for( i in fanArt ) {
		HTML += '<a href="'+ PATH.siteRoot +'/community/fan-art/" class="com-downloadThumb"><img src="'+ fanArt[i].ImagePath_Promo +'" alt="'+ fanArt[i].Name +'"/></a>';
	}

	HTML += '<div class="clear">&nbsp;</div>';
	HTML += '<a href="'+ PATH.siteRoot +'/community/fan-art/" class="see_more">See More</a>';

	jq( '.com-fanArt' ).html( HTML );
}