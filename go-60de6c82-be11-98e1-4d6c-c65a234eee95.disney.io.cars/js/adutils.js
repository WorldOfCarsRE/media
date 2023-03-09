// Declare Vars //
// SWFAddress
var address;


// Pages where ads should display.
var validLocations = [ "/games", "/downloads", "/videos", "/activities",  "/tickets", "/products",  "/products/videogames", "/products/home", "/products/homevideos" ];
var useAd = true;	// Use Ad Flag
var result = false;	// initialize	

$elem = "#adWraper-Small";

// Add Events
// ===================================================
function addEvent(obj, evType, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evType, fn, false);
        return true;
    } else if (obj.attachEvent) {
        var r = obj.attachEvent("on" + evType, fn);
        return r;
    } else {
        return false;
    }
}

// 	    Utility SHOW / HIDE Definitions
// ===================================================
function showElement(element){
    //element[0].style.display = "block";
    $("#adWraper-Small").css( { "display":"block" } );
    moveAD();
}
function hideElement(element){
      //element[0].style.display = "none";
      $("#adWraper-Small").css( { "display":"none" } );
}


   


// Listen For SWFAddress Change
// ===================================================
function handleSwfAddressChange(e) {
    //console.log("inside handleSwfAddressChange");
    $("#adWraper-Small").css({
	"display": "none"
    });

    // Get Address From SWFAddress
    address = SWFAddress.getValue();
    //console.log("hash : " + address);
    
    for (i=0; i<validLocations.length; i++) {
	var index = address.indexOf(validLocations[i]);
	//console.log("address: " + address + "    index val: " + index);
    }
    
    var result = (index > -1);
	if (result != true) {
	    var t = hideElement($elem);
	} else { }
	if (address == "/products/home") {
	    var z = showElement($elem);
	}
	if (address == "/products/homevideos") {
	    var z = showElement($elem);
	}
	if (address == "/videos") {
	    var z = showElement($elem);
	}
	
	var arr = address.split('/');
	var   index2 = $.inArray("videos", arr);
 
    if (index2 > -1) {
	    var t = showElement($elem);
	}
}

function moveAD() {
    var scope = this;
    SWFAddress.setStrict(false);
    SWFAddress.onChange = function() {
    var value = SWFAddress.getValue();
    var path = SWFAddress.getPath();
    var index = $.inArray(path, validLocations);

	 //console.log("path: " + path);
	 //console.log("ad index: " + index);

	 // Position elements
	 var mTop = "-3000px";
	 var mLeft = "-4000px";
	    
	     // Handle Video Sub-pages
	    var urlVideoPages = "/videos";			
	    if (window.location.href.indexOf(urlVideoPages) > -1){
		mLeft = "350px";
		mTop = "-986px";
	    } else {}
	    
	    if (path==validLocations[0]) {		
		mLeft = "-165px";
		mTop = "-776px";
	    } else {}
	    
		if(path=="/games"){
			mLeft = "-165px";
			mTop = "-776px";
		}else {}
		if(path=="/downloads"){
			 mLeft = "-175px";
			 mTop = "-746px";
		}else {}
		if(path=="/videos"){
		    mLeft =  "348px";
		    mTop =  "-986px";
		}else {}
		if(path=="/activities"){
		    mLeft = "-165px";
		    mTop = "-776px";
		}else {}
		if(path=="/products"){
			 mLeft = "-165px";
			mTop = "-766px";
		}else {}
		if(path=="/products/videogames"){
			mLeft = "379px";
			mTop = "-849px";
		}else {}
		if(path=="/products/homevideos"){
			mLeft = "-3000px";
			mTop = "-3000px";
			
			showElement();
		}else {}
		if(path=="/products/home"){
			mLeft = "-165px";
			mTop = "-766px";
		} else {
					    
		}		    
		
		$("#adWraper-Small").css( { top : mTop, left: mLeft, display: 'block' });	    
		//console.log("mTop: " + mTop);
		//console.log("mLeft: " + mLeft);
	}
}

// Listen for Events
if (useAd) {
  //addEvent(window,     'load');
  //addEvent(SWFAddress, SWFAddressEvent.INTERNAL_CHANGE, handleSwfAddressChange);
   addEvent(SWFAddress, SWFAddressEvent.INTERNAL_CHANGE);
}