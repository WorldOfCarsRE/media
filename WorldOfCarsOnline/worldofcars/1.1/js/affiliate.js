var OMN = new CTO();
OMN.account = 'worldofcars';
OMN.category = 'dgame';
OMN.site = 'woc';
OMN.siteSection = 'website:affiliate';
OMN.pageName = 'splash';
OMN.contentType = 'home';
OMN.property = 'car';
OMN.track();

jQuery( document ).ready( function () {
	function omnitureTrack( pageName ) {
		var OMN = new CTO();
		OMN.account = 'worldofcars';   
		OMN.category = 'dgame';   
		OMN.site = 'woc';
		OMN.siteSection = 'website:affiliate';
		OMN.pageName = pageName;
		OMN.contentType = 'regular';   
		OMN.property = 'car';
		OMN.track();
	}

	if( jQuery.colorbox ) {
		jQuery('.spl-galleryLink').colorbox( {
			'current'		: false,
			'opacity'		: 0.6
		} ).each(function (i) {
			jQuery(this).click(function () { omnitureTrack('affiliate_screenshot-'+ parseInt(i+1)); });
		});
	}

	jQuery( '.spl-navAbout' ).click(function () { omnitureTrack('affiliate_splash_nav_about'); });
	jQuery( '.spl-navWhatsNew' ).click(function () { omnitureTrack('affiliate_splash_nav_whatsNew'); });
	jQuery( '.spl-navParents' ).click(function () { omnitureTrack('affiliate_splash_nav_parents'); });
} );