

// Pages where ads should display.
var validLocations = [ "/games", "/activities",  "/tickets", "/downloads", "/products", "/videos", "/products/videogames", "products/home" ];

function load() {
	//$("#inner").animate({ top: '-110px' }, 600);
	//	$("#games-adWrapSmall, #activities-adWrapSmall, #downloads-adWrapSmall, #characters-adWrapSmall, #products-adWrapSmall, #videos-adWrapSmall, #products-videogames-adWrapSmall, #products-home-adWrapSmall").fadeOut("fast");
}
function callbackFn(e) {
	//console.info("flash callback");
}


function alertStatus(e) {
        //console.info("e.success = " + e.success +"\ne.id = "+ e.id +"\ne.ref = "+ e.ref);
}

 
function setDefault(){	
		//$("#games-adWrapSmall, #activities-adWrapSmall, #downloads-adWrapSmall, #characters-adWrapSmall, #products-adWrapSmall, #videos-adWrapSmall, #products-videogames-adWrapSmall").hide();
}


window.onbeforeunload = function() {
  //return "Are you sure you wish to leave the page?";
 	//$("#games-adWrapSmall, #activities-adWrapSmall, #downloads-adWrapSmall, #characters-adWrapSmall, #products-adWrapSmall, #videos-adWrapSmall, #products-videogames-adWrapSmall").hide();

}

window.onload = function() {
   //load();
   
};

