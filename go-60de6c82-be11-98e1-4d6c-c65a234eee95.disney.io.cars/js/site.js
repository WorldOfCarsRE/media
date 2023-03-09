
$(document).ready(function(){
	 
	//createContent(); 
	var clicked = false
	var i = document.getElementById("inner");
	var j = document.getElementById("adWrapper-Small");
	
	// Global
	wasOpen = 0;	
});




	//	Utility Functions
	// ======================================
	var onHashChange = function(event) {
		//get hash function
		var getHashValue = function() {
			var arr = window.location.hash.split("#");
			var hasValue = arr[1];

			//sets default
			if (typeof hasValue == "undefined") {
				return false;
			}
			var hashLen = hasValue.indexOf("?");
			if (hashLen > 0) {
				hasValue = hasValue.substring(0, hashLen);
			}
			return hasValue;
		}
		//last hash
		var lastHash = getHashValue();
		//checker
		(function watchHash() {
			var hash = getHashValue();
			if (hash !== lastHash) {
				event();
				lastHash = hash;
			}
			var t = setTimeout(watchHash, 100);
		})();
	}
	onHashChange(function() {
		//your on-change code here
	});




function createContent() { 
	var url   = decodeURIComponent(window.location);  
	var array = url.split('/');
    var lastsegment; 
	lastsegment = array[array.length-1]; 
	
	var content_string;
	   switch(String(lastsegment)) {
		case "acer.html":
		  content_string = "<div class='info'><h1>ACER</h1><p>Acer has always felt like an outcast in the car world. The beat-up green AMC Pacer joined forces with fellow &#8220;lemon&#8221; cars as henchmen for the devious Professor Z, whose clandestine mission is to wreak havoc at the highly visible World Grand Prix. Acer must hunt down the American and British secret agents who've stolen crucial information about Professor Z's underhanded plot—his primary target just happens to be Mater, who's been mistaken for a spy. Acer tries very hard to be a tough guy, but he's over-eager compared to his no-nonsense accomplice Grem.</p></div> "
		  break;
		case "carla.html":
		  
		  break;
		default:
		   
	} 
  	document.getElementById("sitemap").innerHTML = "<div id='sitemap_characters'> <div class='header'><a href='characters.html'>CHARACTERS</a></div> <div class='sitemap_column'> <br> <a href='mater.html'>MATER</a> <br> <a href='lightning.html'>LIGHTNING McQUEEN</a> <br> <a href='professor.html'>PROFESSOR Z</a> <br> <a href='tomber.html'>TOMBER</a> <br> <a href='rod.html'>ROD TORQUE REDLINE</a> <br> <a href='nigel.html'>NIGEL GEARSLEY</a> <br> <a href='miles.html'>MILES AXLEROD</a> <br> <a href='francesco.html'>FRANCESCO BERNOULLI</a> <br> <a href='mama.html'>MAMA TOPOLINO</a> </div> <div class='sitemap_column'> <br> <a href='uncle.html'>UNCLE TOPOLINO</a> <br> <a href='acer.html'>ACER</a> <br> <a href='grem.html'>GREM</a> <br> <a href='carla.html'>CARLA VELOSO</a> <br> <a href='shu.html'>SHU TODOROKI</a> <br> <a href='raoul.html'>RAOUL &#199;AROULE</a> <br> <a href='finn.html'>FINN McMISSILE</a> <br> <a href='holley.html'>HOLLEY SHIFTWELL</a> <br> <a href='siddeley.html'>SIDDELEY</a> </div> <div class='sitemap_column'><br> <a href='luigi.html'>LUIGI</a> <br> <a href='guido.html'>GUIDO</a> <br> <a href='sarge.html'>SARGE</a> <br> <a href='fillmore.html'>FILLMORE</a> <br> <a href='mack.html'>MACK</a> <br> <a href='sally.html'>SALLY</a> <br> <a href='sheriff.html'>SHERIFF</a> <br> <a href='lizzie.html'>LIZZIE</a> <br> <a href='flo.html'>FLO</a> </div> <div class='sitemap_column'> <br> <a href='ramone.html'>RAMONE</a> <br> <a href='miguel.html'>MIGUEL CAMINO</a> <br> <a href='max.html'>MAX SCHNELL</a> <br> <a href='david.html'>DAVID HOBBSCAP</a> <br> <a href='lewis.html'>LEWIS HAMILTON</a><br> <a href='okuni.html'>OKUNI</a> <br> <a href='kingpin.html'>KINGPIN NOBUNAGA</a> <br> <a href='pinion.html'>PINION TANAKA</a> <br> <a href='zen.html'>ZEN MASTER</a> </div> <div class='sitemap_column'> <br> <a href='queen.html'>THE QUEEN</a> <br> <a href='topper.html'>TOPPER DECKINGTON III</a> <br> <a href='chauncy.html'>CHAUNCY FARES</a> <br> <a href='highgear.html'>SGT. HIGHGEAR</a> <br> <a href='prince.html'>PRINCE WHEELIAM</a> </div> </div> <div id='sitemap_pages'> <div class='sitemap_column'> <a href='splash.html'>SPLASH</a> </div> <div class='sitemap_column'> <a href='videos.html'>VIDEOS</a> </div> <div class='sitemap_column'> <a href='games.html'>GAMES</a> </div> <div class='sitemap_column'> <a href='activities.html'>ACTIVITIES</a> </div> <div class='sitemap_column'> <a href='downloads.html'>DOWNLOADS</a><br> <a href='downloads-wallpapers.html'>WALLPAPERS</a><br> <a href='downloads-icons.html'>ICONS</a> </div> <div class='sitemap_column'><br> <a href='movies.html'>MOVIES</a><br> <a href='movies-cars2.html'>MOVIES - CARS 2</a><br> <a href='movies-cars_toons.html'>MOVIES - CARS TOONS</a><br> <a href='movies-cars.html'>MOVIES - CARS</a> </div> <div class='sitemap_column'><br> <a href='products.html'>PRODUCTS</a><br> <a href='products-home.html'>PRODUCTS - HOME</a><br> <a href='products-disney_store.html'>PRODUCTS - DISNEY STORE</a><br> <a href='products-books.html'>PRODUCTS - BOOKS</a><br> <a href='products-homevideos.html'>PRODUCTS - HOME VIDEOS</a><br> <a href='products-videogames.html'>PRODUCTS - VIDEOGAMES</a> </div> <div class='sitemap_column'><br> <a href='sweepstakes.html'>SWEEPSTAKES</a><br> <a href='sweepstakes-briefing.html'>SWEEPSTAKES - BRIEFING</a><br> <a href='sweepstakes-prizes.html'>SWEEPSTAKES - PRIZES</a><br> <a href='sweepstakes-rules.html'>SWEEPSTAKES - RULES</a><br> </div> <div class='sitemap_column'><br> <a href='events.html'>EVENTS</a><br> </div> <div class='sitemap_column'><br> <a href='parks.html'>PARKS & TRAVEL</a><br> <a href='parks-disney-world.html'>PARKS & TRAVEL - DISNEY WORLD</a><br> <a href='parks-disneyland.html'>PARKS & TRAVEL - DISNEYLAND</a><br> </div> <div class='sitemap_column'><br> <a href='http://disney.go.com/disneyjunior/cars/?cmp=SYN_Dcom_Cars_LeftNav_DJR' target='_blank'>DISNEY JUNIOR</a><br> </div></div>"   

};
    
 
function openFacebookLike(like_url) {    
	var url  = decodeURIComponent(like_url); 
	document.getElementById("like_content").innerHTML = '<iframe src="facebook_like.html?page='+url+'" scrolling="no" frameborder="0" allowTransparency="true" style="border:none;overflow:hidden; width:420px; height:250px;"></iframe>';
	document.getElementById('facebook_like').style.display='block';
	document.getElementById("facebook_like_ie").style.width = width + "px";
	   
    
} 

function closeFacebookLike() { 
	//alert(like_url)   
	document.getElementById('facebook_like').style.display='none';   
} 



function moveFooter() {
	
	/* Note:
		moveFooter as called from Flash appears to call moveFooter & moveFooterAds in sequence.
	*/
	document["main_swf"].height = 900;
	document.getElementById("content").style.height = 920 + "px";
	//console.log("JS: move footer");
	
	
	document.getElementById('#adWrapper').style.display='block';
	
	var z = callAD();
}



function callAD() {
	if (wasOpen == 0 ) {
		$("#inner").animate({ top: "20px" }, 500);
		++wasOpen;  // set the "we already opened this flag"
	} else {
		
		// Close AD, Open AD
		$("#inner").animate({ top: "-100px" }, 500).animate({ top: "20px" }, 500);
	}
	console.log("call AD -  Was Open: " +wasOpen);
	return false;
}



function noFlashMoveFooter() {
	if (!swfobject.hasFlashPlayerVersion("10")) { 
		document.getElementById("content").style.height = 790 + "px";
		console.log("JS: no flash move footer");
	}
}

function moveFooterAds(targetHeight) {
	//function moveFooterAds(targetHeight) {
	document["main_swf"].height = targetHeight;
	document.getElementById("content").style.height = targetHeight + "px";
	
	// Start the AD transitions
	if (targetHeight > 1025 ) {
		$("#inner").animate({ top: '0px' }, 600);	// Display AD
	} else {	
		$("#inner").animate({ top: '-128px' }, 600);	// Hide AD
	}
		
//}
	return false;
}



function showMPU() {
	
}
function showDisclaimer() {
   var d = document.getElementById("disclaimer");
   d.style.display = "block";
}
function hideDisclaimer() {
   var d = document.getElementById("disclaimer");
   d.style.display = "none";
}

function openUnity() {
	alert("openUnity")
	document.getElementById('games').style.display='block';
	document.getElementById("gameie").style.width = width + "px";
	
}   


function openGame(gameName, swfUrl, assetPath, gameConfigUrl, apiUrl, apiConfigUrl, gameW, gameH, locale) {
	var width = gameW + 40;
	document.getElementById('games').style.display='block';
	document.getElementById("gameie").style.width = width + "px";
	var fn = function() {
        var att = { data:swfUrl, width:gameW, height:gameH };   
        var par = { flashvars:"gameConfigUrl="+gameConfigUrl+"&assetPath="+assetPath+"&apiUrl="+apiUrl+"&apiConfigUrl="+apiConfigUrl+"&locale="+locale, allowScriptAccess: "always", wmode:"transparent", allowFullScreen:"true"};
        var id = "game_content";
        swfobject.createSWF(att, par, id);
	};

	swfobject.addDomLoadEvent(fn);
}                                                	

function closeGame(newHref,newTarget) {      	    

 	var el = document.getElementById("game_content");
	   if(el){
	      var div = document.createElement("div");
	      el.parentNode.insertBefore(div, el);

	      //Remove the SWF
	      swfobject.removeSWF("game_content");
	      //Give the new DIV the old element's ID
	      div.setAttribute("id", "game_content");
	   }  
	document.getElementById('games').style.display='none';      
	
	var flashMovie=document["main_swf"];
    flashMovie.closedGame(newHref,newTarget); 
	//swfobject.removeSWF("game_content");
}
     



function trackFloodlight(floodLightUrl) {
	//alert(floodLightUrl);
	floodlightTag = floodLightUrl+Math.floor(Math.random()*100000000)+"?";
	
	if(document.getElementById("DCLK_FLDiv")){
		var flDiv=document.getElementById("DCLK_FLDiv");
	}else{
		var flDiv=document.body.appendChild(document.createElement("div"));
		void(flDiv.setAttribute("id","DCLK_FLDiv"));
		void(flDiv.style.position="absolute");
		void(flDiv.style.visibility="hidden");
		void(flDiv.style.top="0px");
	}
	void(flDiv.innerHTML='<iframe id="DCLK_FLIframe" src="'+floodlightTag+'"></iframe>');
}