(function($){
	
	$.fn.faq = function(o){
		return this.each(function(){
			new $.faq(this,o);
		});
	};
			
	var defaults = {
		active: 		false,
		container: 	'.faq_mod',
		animate: 		true,
		transition:	'slide',
		delay: 			3000,
		loading:		'/images/ajax-loader.gif',
		images:			'/images/backgrounds/faq/',
		triggerEvent: 'click'
	}
	
	$.faq = function(e,o){
		this.options = $.extend({}, defaults, o || {});
		
		$this = this;
		
		this.toggle = function(){$this.toggle();};
		this.close 	= function(){$this.close();};
		
		this.init();
		
		/*function _init(){
			//this.active = options.active;
			
			this.container = options.container;
			this.trigger = $(this.container).find('.faq_trigger');			
			
			$(this.trigger).live('click',toggleFAQ);
			$(this.container).find('.faq_close').live('click',closeFAQ);
		}*/
		
	};
	
	var $faq = $.faq;
	
	$faq.fn = $faq.prototype = {
		faq: '0.1.0'
	};
	
	$faq.fn.extend = $faq.extend = $.extend;

	$faq.fn.extend({
		init: function(){
			this.active = false;
		},
		toggle: function(){
			/*if(options.transition == 'slide')
				$(this).parent().next('.faq_mod_copy').slideToggle('fast');
			else if(options.transition == 'none')
				$(this).parent().next('.faq_mod_copy').show('fast');*/
			if(this.active == false)
				this.active = true;
			else
				this.active = false;
		},
		close: function(){
			if(this.active == true)
				this.toggle();
		},
		callback: function(cb,evt,state,i1,i2,i3,i4){
			if(this.options[cb] == undefined || (typeof this.options[cb] != 'object' && evt != 'onAfterAnimation'))
				return;
			var callback = typeof this.options[cb] == 'object' ? this.options[cb][evt] : this.options[cb];
			
			if(!$.isFunction(callback))
				return;
			
			$this = this;
			
			if(i1 === undefined)
				callback($this,state,evt);
			else if(i2 === undefined)
				this.get(i1).each(function(){callback(self,this,i1,state,evt);});
		}
	});
	
	$faq.extend({
		defaults: function(d){
			return $.extend(defaults, d || {});
		}
	});
	
	// utilities
	$.log = function(s){// s = string
		if($.browser.mozilla)
			console.log(s)
		else
			alert(s)
	}
		
		//_init();
	//}; // end
})(jQuery);