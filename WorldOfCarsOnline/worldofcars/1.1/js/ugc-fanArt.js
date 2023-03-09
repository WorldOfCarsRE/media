function ugcUploadCallback(response) {
	if(response.status == 'success') {
		window.location = '/community/fan-art/upload/thank-you/'; // go to response.redirectURL?
	}

	clearErrors();

	for(i in response.messages) {
		displayError(i, response.messages[i]);
	}
};

jQuery(document).ready(function() {
	jQuery('#fanart-upload').submit( function() {
		jQuery(this).ajaxPostIframe({}, ugcUploadCallback);
	});
});	