function writeFlash(swf, width, height, bgColor, flashVars)
{
	var questionMark = window.location.href.indexOf("?");
	var flashVars = questionMark < 0 ? flashVars : window.location.href.substr(questionMark+1);
	
	document.write(
		'<div id="flashDiv" style="position:absolute;">'
		+ '<object id="flash" type="application/x-shockwave-flash" data="' + swf + '" width="' + width + '" height="' + height + '">'
		+ '	<param name="movie" value="' + swf + '" />'
		+ '	<param name="bgcolor" value="' + bgColor + '" />'
		+ '	<param name="quality" value="high" />'
		+ '	<param name="allowScriptAccess" value="always" />'
		+ ' <param name="FlashVars" value="' + flashVars + '" />'
		+ '</object>'
		+ '</div>'
	);
    function centerDiv()
    {
        var container = document.getElementById("flashDiv");
        container.style.left = (document.body.clientWidth - width)/2 + "px";
        container.style.top = (document.body.clientHeight - height)/2 + "px";
    }
    centerDiv();
    window.onresize = centerDiv;
}
