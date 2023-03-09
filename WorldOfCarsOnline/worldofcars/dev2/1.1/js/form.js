function clearErrors() {
	jQuery('.sys-formErrorContainer').remove();
}

function displayError(inputName, errors) {
	if(!jQuery.isArray(errors)) {
		errors = [errors];
	}

	jQuery('input[name='+ inputName +']').closest('td').append('<div class="sys-formErrorContainer"><ul><li>'+ errors.join('</li><li>') +'</li></ul></div>');
}