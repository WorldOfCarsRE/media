var fbApiID = '31159065182';
 
// Open FB Like
function openFBLike () {
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