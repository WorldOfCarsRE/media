var returnURL = gateReturn;// set in the environment.js

var varGameIsClosed=false;
var t;
var bodyTimer;
var bodydivcount=0;
function initGating(){
	 
	var head = document.getElementsByTagName("head")[0];
	script = document.createElement('script');
	script.id = 'gateScript';
	script.type = 'text/javascript';
	var url = gateCheck; // set in the environment.js
	script.src = url
	head.appendChild(script);
	
	t=setInterval(checkForGateLoad, 1000); 
}



function checkForGateLoad(){

	var gate = document.getElementById('gateScript');
	var bodydiv = document.getElementById('blogbody');
	if (gate != null){ // already exists - good to go
		clearTimeout(t);
		var varGate = false
		if (typeof ACD != 'undefined') 
		{
			varGate = checkforGate(ACD.responseText);
		
		}
		if (!varGate){
			//alert("would have gated");
			top.window.location=returnURL;
			//  -- FOR TESTING ONLY
			//initCheckForBodyDiv();
			return;
		}
		initCheckForBodyDiv();
		
		checkforGameClosed()
	 }else{
	
		varTimerCounter++
		if (varTimerCounter>5){
			top.window.location=returnURL;
		
		}
	 }
}

function initCheckForBodyDiv(){
	if (document.getElementById('blogbody')== undefined){
		bodyTimer=setInterval(checkForBodyDiv, 1000); 
	}else{
		(document.getElementById('blogbody')).style.visibility = "visible";
	}

}

function checkForBodyDiv(){
	if (bodydivcount < 10){
		if (document.getElementById('blogbody')!= undefined){
			(document.getElementById('blogbody')).style.visibility = "visible";
			clearTimeout(bodyTimer);
		}else{
			bodydivcount++;
		}
	}else{
		clearTimeout(bodyTimer);
	}
}


initGating();


function checkforGameClosed(){
	xResponse = ACD.responseText

	
	if (checkforGate(xResponse)){

		xmlDoc=createXMLParser(xResponse);

	        if(xmlDoc.getElementsByTagName("success").length > 0){
			var statusValue=xmlDoc.getElementsByTagName("success")[0].childNodes[0].nodeValue;
			if(statusValue == "true"){
				  if(xmlDoc.getElementsByTagName("gameClosed").length > 0){
				    var varGameClosed=xmlDoc.getElementsByTagName("gameClosed")[0].childNodes[0].nodeValue;
					    if(varGameClosed != undefined && varGameClosed.toString() != ""){
						varGameIsClosed = true;
						setBanner(varGameClosed.toString());
						setGameClosedButton();
						
					    }
				}else{
			}
		      } 
		}
	}
}
function callAlert(xtext){
	alert("callAlert="+xtext);

}


function setGate(xStatus){
	//alert("setGate="+xStatus);
	if (xStatus!= "true"){
		if (top.window.location != returnURL){
		alert("would have gated site")
			//top.window.location=returnURL;
			return false;
		}
	}

}

function setGameClosedButton(){
	var varPlayButtonDiv = document.getElementById("playbutton");
	if (varPlayButtonDiv != undefined){
		if (varGameIsClosed){
			varPlayButtonDiv.innerHTML = "<img src=\"http://a.dolimg.com/worldofcars/betasiteassets/images/button/btn_play_inactive.gif\" width=\"161\" height=\"55\" border=\"0\" alt=\"Play\" />"
		}
	}
}


function setBanner(xText){
	//document.getElementById("emsg")

	var varWrapperDiv = document.getElementById("warningwrapper");
	var varMessageDiv =document.getElementById("warningmessage");
	
	if (varWrapperDiv != undefined){
		varWrapperDiv.style.visibility = "visible";
		varWrapperDiv.style.display = "block";
		//varWrapperDiv.className = "DisplayBlock";
		//alert("varMessageDiv="+varMessageDiv);
		varMessageDiv.innerHTML = xText;
	}

}
  function getPageElement(id)
  {
      if (document.getElementById) {
          return document.getElementById(id);
      } else if (document.all) {
          return document.all[id];
      }
}


function checkforGate(xResponse){
	//alert("xResponse="+xResponse);
	 xmlDoc=createXMLParser(xResponse);
	if (top.window.location == returnURL){
		return true;
	}
	
       if(xmlDoc.getElementsByTagName("success").length > 0){
                statusValue=xmlDoc.getElementsByTagName("success")[0].childNodes[0].nodeValue;
		
		if(statusValue == "true"){
			  if(xmlDoc.getElementsByTagName("testUser").length > 0){
			    testuser=xmlDoc.getElementsByTagName("testUser")[0].childNodes[0].nodeValue;
				//alert("testuser="+testuser)
				    if(testuser == undefined || testuser.toString() != "true"){
					    if (top.window.location != returnURL){
					    //alert("testuser="+testuser)
						//top.window.location=returnURL;
						return false;
					    }
				    }else{
				    
				    return true;
				    
				    }
			}else{
			//top.window.location=returnURL;
			return false;
		}
	      } 
	      
	}else{
		//top.window.location=returnURL;
		return false;
	}
	return false;
}


function createXMLParser(xText){
  if(typeof DOMParser != "undefined"){
    var parseX=new DOMParser();
    return parseX.parseFromString(xText, "text/xml");
  } else if(typeof ActiveXObject != "undefined"){
    var XMLobj=new ActiveXObject("Microsoft.XMLDOM");
    if(XMLobj){
      XMLobj.async=false;
      XMLobj.loadXML(xText);
      return XMLobj;
    } else {
      //alert("Could not parse XML in IE");
      return false;
    }
  } else {
    //alert("Failed");
    return false;
  }
}


