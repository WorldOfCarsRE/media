document.write('<scr' + 'ipt language="javascript"  src="//'+ ( window.location.protocol.toString() === 'http:' ? 'ahome' : 'home' ) +'.disney.go.com/globalelements/footer.js?footerStyleBackgroundColor=000000&footerStyleBodyTextColor=363636&footerStyleLegalTextColor=363636&footerStyleTitleLineColor=363636&footerStyleBodyLineColor=363636&footerStyleFeaturedTextColor=000000&footerStyleFeaturedBackgroundColor=363636&footerDisplayMode=legalOnly&footerLegalSiteMapTarget=_blank&footerLegalSafetyTarget=_blank&footerLegalPrivacyPolicyTarget=_blank&footerLegalIBATarget=_blank"></s' + 'cript>');
jQuery( document ).ready( function() {
	jQuery( '#gde_comScoreLogo a, #gde_footerLegalContainer a' ).live( 'click', function() {
		$( this ).attr( 'target', '_blank' );
	} );
} );