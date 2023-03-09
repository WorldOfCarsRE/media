
function do_hidef(url) {
	if (typeof(url) != 'undefined' && url != "") {
		var currentAddress = url;
		document.write('<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" width="100" height="100">\
		<param name="src" value="'+currentAddress+'">\
		<param name="autohref" value="true">\
		<param name="href" value="'+currentAddress+'">\
		<param name="autoplay" value="false">\
		<param name="Target" value="QuickTimePlayer">\
		<param name="pluginspace" value="http://www.apple.com/quicktime/download/">\
		<param name="width" value="100">\
		<param name="height" value="100">\
		<embed src="'+currentAddress+'" width="100" height="100" autohref="true" autoplay="false" href="'+currentAddress+'" target="QuickTimePlayer" pluginspace="http://www.apple.com/quicktime/download/" name="bottom_08"></embed></object>');
	}
}

function params(qp){
	try{
		r=unescape(location.search.match(new RegExp(qp+"=+([^&]*)"))[1]);
	} catch(e) {
		r='';
	}
	return r;
}

function getQuicktime(url, width, height) {
	return '<div align="center"><object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=6,0,2,0" width="'+width+'" height="'+height+'"><param name="controller" value="TRUE"><param name="type" value="video/quicktime"><param name="autoplay" value="true"><param name="target" value="myself"><param name="src" value="'+url+'"><param name="pluginspage" value="http://www.apple.com/quicktime/download/indext.html"><embed src="'+url+'" width="'+width+'" height="'+height+'" autostart="true" CONTROLLER="TRUE" TARGET="myself" type="video/quicktime" BGCOLOR="#000000" BORDER="0" PLUGINSPAGE="http://www.apple.com/quicktime/download/indext.html"></EMBED></object></div>';
}
function getWMP(url, width, height) {
	return '<div align="center"><OBJECT ID="MediaPlayer" classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95" CODEBASE="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701"  standby="Loading Microsoft Windows Media Player components..." TYPE="application/x-oleobject" width="'+width+'" height="'+height+'"><PARAM NAME="FileName" VALUE="'+url+'"><PARAM NAME="autostart" VALUE="true"><EMBED TYPE="application/x-mplayer2" pluginspage="http://www.microsoft.com/windows95/downloads/contents/wurecommended/s_wufeatured/mediaplayer/default.asp" SRC="'+url+'" Name=MediaPlayer ShowControls=1 ShowDisplay=0 ShowStatusBar=0 width='+width+' height='+height+' AUTOPLAY="true"></EMBED></OBJECT></div>';
}