// Facebook API ID
var fbApiId = '154413984605338';

// Open FB Like
function openFBLike (page) {
  if (page) {
    document.getElementById("fblikeContainer").innerHTML = '<iframe src="fblike/dynamic.html?page='+page+'" scrolling="no" frameborder="0" allowTransparency="true" style="border:none;overflow:hidden; width:350px; height:130px;"></iframe>';
  } else {
    document.getElementById("fblikeContainer").innerHTML = '<iframe src="fblike/index.html" scrolling="no" frameborder="0" allowTransparency="true" style="border:none;overflow:hidden; width:350px; height:130px;"></iframe>'
  }

	var x = (document.width - 360)/2;
 	if (navigator.appName.indexOf("Microsoft")!=-1) {
  		x = (document.body.offsetWidth - 360)/2;
 	}
	document.getElementById("RES_ID_fb_pop_dialog_table").style.left = x + "px";
	document.getElementById("RES_ID_fb_pop_dialog_table").style.top  = "250px";
	document.getElementById("fb-like").style.display = "block";
}

//Close FB Like
function closeFBLike() {
	document.getElementById("fb-like").style.display = "none";
}