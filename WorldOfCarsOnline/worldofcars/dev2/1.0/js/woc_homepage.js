var HomepageSlideshow = function( config ) {
	var This = function() {
		// Public Vars -----------------------------------------[MN]
		var slideTimer		= null;
		var $slideContainer	= null;
		var currentIndex	= null;
		var fadeDuration	= null;
		var slides			= [];
		// -----------------------------------------------------[MN]

		// Public Vars -----------------------------------------[MN]
		This._config = {
			slides		: [],
			selectors	: {
				'hotLink'			: '.link_scrn',
				'fadeDuration'		: 3000,
				'slideContainer'	: '.mainslide_container'
			}
		};
		//------------------------------------------------------[MN]

		// Constructor -----------------------------------------[MN]
		( function() {
			This._config	= jq.extend( This._config, config );
			fadeDuration	= This._config.fadeDuration;
			$slideContainer	= jq( This._config.selectors.slideContainer );
			slides			= This._config.slides;

			jq( This._config.selectors.hotLink ).hover( function(){ This.hoverOn(); }, function() { This.hoverOff(); } );
		} ) ();
		//------------------------------------------------------[MN]
		
		// Public Functions ------------------------------------[MN]
		This.hoverOff = function() {
			$slideContainer.find( '.slide_off' ).css( 'display', 'inline' );
			$slideContainer.find( '.slide_on' ).css( 'display', 'none' );
		};

		This.hoverOn = function() {
			$slideContainer.find( '.slide_off' ).css( 'display', 'none' );
			$slideContainer.find( '.slide_on' ).css( 'display', 'inline' );
		};

		This.init = function() {
			currentIndex = 0;

			var HTML = '';
			for( i in slides )	{
				HTML += '<div class="slide_group" rel="'+ i +'" style="display: '+ ( i == 0 ? 'block' : 'none' ) +';">';
				HTML	+= '<img class="slide_off" src="'+ slides[i].imageOff +'" />';
				HTML	+= '<img class="slide_on" src="'+ slides[i].imageOn +'" style="display: none;" >';
				HTML += '</div>';
			}
			$slideContainer.html( HTML );

			jq( This._config.selectors.hotLink ).click( This.onSlideClick );

			if( This._config.slides.length > 1 ) {
				This.startTimer();
			}

			$slideContainer.css( 'zoom', 1 ); // ie6 hax
		};

		This.onSlideClick = function() {
			cto=new CTO();
			cto.account='worldofcars';   
			cto.category='dgame';   
			cto.site='woc';
			cto.pageName=slides[currentIndex].tracking;  
			cto.contentType='regular';
			cto.property='car';
			cto.track();

			window.location = slides[currentIndex].link;
		};

		This.loadNextSlide = function() {
			var newIndex	= currentIndex == slides.length - 1 ? 0 : currentIndex + 1;
			var $newGroup	= $slideContainer.find( '.slide_group[rel='+ newIndex +']' );
			
			$newGroup.css( 'z-index', 1).siblings().css( 'z-index', 0 );
			$newGroup.fadeIn( fadeDuration, function() {
				jq( This._config.selectors.hotLink ).attr( 'href', slides[newIndex].link );
				jq( this ).siblings().css( 'display', 'none' );
			} );
			
			currentIndex = newIndex;

			This.startTimer();
		};

		This.startTimer = function() {
			slideTimer = setTimeout( This.loadNextSlide, slides[currentIndex].duration * 1000 );
		};
		//------------------------------------------------------[MN]

		return This;
	};
	return This();
};