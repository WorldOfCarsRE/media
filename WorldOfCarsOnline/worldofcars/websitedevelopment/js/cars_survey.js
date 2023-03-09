// Simple Validation ---------------------------------------
var validation = function(data) {
	
	// Vars ----------------------------------------------------
	this.error_message	= data['error_message'];
	this.required		= data['required'];
	this.errors			= [];
	//----------------------------------------------------------

	// Check required ------------------------------------------
	for (var type in this.required) {
		switch (type) {
			case 'radio':
				for (var element in this.required[type]) {
					if (!jQuery(':radio[name=' + element + ']:checked').length) {
						this.errors.push(element);
					}
				}
			break;
		}
	}
	//----------------------------------------------------------

	// Show Errors ---------------------------------------------
	jQuery('.form-error').removeClass('form-error');
	for (var i = 0; i < this.errors.length; i++) {
		jQuery('.' + this.errors[i]).addClass('form-error');
	}
	//----------------------------------------------------------

	// Show Error Message --------------------------------------
	jQuery(this.error_message).css('display', (this.errors.length == 0) ? 'none' : 'block' );
	//----------------------------------------------------------
	
	// Return status -------------------------------------------
	return (this.errors.length == 0);
	//----------------------------------------------------------
};
//----------------------------------------------------------