// Nav Class -------------------------------------------[MN]
var nav = function( config ) {
	var This = function() {
		
		// Public Vars
		This._config = {
			pages:	{}
		};

		// Constructor
		( function() {
			This._config = jQuery.extend( This._config, config );
		} )();
		
		// Public Functions
		This.goTo = function( page ) {
			if( !This._config.pages[page] )
				return false;

			jq( 'body' ).append( '<div id="navDiv"></div><div id="blk_alpha"></div>');
			jq( '#navDiv' ).css({
				"position":"absolute",
				"left":"0",
				"top":"0",
				"width": ( page == 'trailer' ? '485px' : '320px' ),
				"height":"452px",
				"z-index":"999999"
			}).addClass( page );
			centerPopup('navDiv');

			jq( '#navDiv' ).load( This._config.pages[page], false, function() {
				// hax
				switch( page ) {
					case 'about':
						cto=new CTO();
						cto.account='worldofcars';   
						cto.category='dgame';   
						cto.site='woc';
						cto.siteSection='website:about';   
						cto.pageName='about';  
						cto.contentType='regular';   
						cto.property='car';
						cto.track();
					break;

					case 'help':
						jQuery(".question").toggle(
							function(){
								jQuery(this).addClass("highlight");
								jQuery(this).removeClass("off");
								jQuery(this).addClass("on");
								jQuery(this).next(".answer").css("display", "block");
							},
							function(){
								jQuery(this).removeClass("highlight");
								jQuery(this).removeClass("on");
								jQuery(this).addClass("off");
								jQuery(this).next(".answer").css("display", "none");
						});

						cto=new CTO();
						cto.account='worldofcars';   
						cto.category='dgame';   
						cto.site='woc';
						cto.siteSection='website:help';   
						cto.pageName='help';  
						cto.contentType='regular';   
						cto.property='car';
						cto.track();
					break;

					case 'trailer':
						if( !swfobject.hasFlashPlayerVersion( '10' ) ) {
							jq( window ).attr( 'location', PATH.siteRoot +'/flash-upgrade/' );
							return false;
						}

							var flashvars = {};
							flashvars.videoSource = PATH.cdn +"/video/Cars_Online_Trailer_cut_12_Create_a_Car_FINAL.flv";

							var params = {};
							params.wmode = "transparent";
							params.allowScriptAccess = "always";
							params.allowFullScreen = "true";

							var attributes = {};
							attributes.id = "flashContent1";

							swfobject.embedSWF(PATH.swf +"/carsPlayer.swf", "flashContent1", "370", "300", "10.0.0", false, flashvars, params, attributes);
					break;
				}
			} );
		}

		return This;
	};
	return This();
};
//------------------------------------------------------[MN]