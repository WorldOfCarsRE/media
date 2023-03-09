var mySettings={
	styleBackground:	'000000',
	footerDisplayMode:	'featuredAndLegal',
	footerStyleSet:		'dark'
}

var legalFooterColor = "#FFFFFF";
var footerCustomHeader = "Disney/Pixar Cars";
var footerCustomLinks = '<a href="http://transfer.go.com/cgi/transfer.dll?srvc=dis&goto=http://worldofcars.go.com/" class="dolFooterLnk" target="self" style="font-size:10pt !important;">Create a Car</a>  |  <a href="http://disney.go.com/cars/sitemap.html" class="dolFooterLnk" target="self" style="font-size:10pt !important;">Cars Site Map</a>';

var footerCustomSytle = "<style>a.dolFooterLnk,a.dolFooterLnk:visited,a.dolFooterLnk:hover,a.dolFooterLnk:active,a.dolFooterSmallLnk,a.dolFooterSmallLnk:visited,a.dolFooterSmallLnk:hover,a.dolFooterSmallLnk:active{color:"+legalFooterColor+" !important;background-color:transparent !important;text-decoration:underline;}a.dolFooterLnkRed,a.dolFooterLnkRed:visited,a.dolFooterLnkRed:hover,a.dolFooterLnkRed:active{color:#FF0000 !important;background-color:transparent !important;text-decoration:underline;}</style>";
var footerCustom = '<div id="legalFooterCustomDiv" align="center"><table width="996" cellspacing="0" cellpadding="0" align="center" style="text-align:center; padding:0px; margin:10px 0px; background:transparent none; border:none;"><tbody><tr width="996"><td style="font-family:arial,verdana,helvetica; color:'+legalFooterColor+'; background-color:transparent; text-align:center; font-size:10pt; border:none;" colspan="3"><strong>'+footerCustomHeader+'</strong></td></tr>';
try{if(footerCustomLinks){footerCustom+='<tr width="996"><td style="color:'+legalFooterColor+';">'+footerCustomLinks+'</td></tr>';}}catch(e){}
footerCustom+='</table></div>';
try{if(footerCustomCopyrights){footerCustomCopyrights='<div id="legalFooterCustomCopyrightsDiv" align="center"><table width="996" cellspacing="0" cellpadding="0" align="center" style="text-align:center; padding:0px; margin:10px 0px; background:transparent none; border:none;"><tbody><tr width="100%"><td style="font-family:arial,verdana,helvetica; color:'+legalFooterColor+'; background-color:transparent; text-align:center; font-size:7pt; border:none;" colspan="3">'+footerCustomCopyrights+'</td></tr></table></div>'}}catch(e){};

//Chrome and Footer hacks
var chromeOverride = '<style type="text/css">.gde_chromeExploreButtons {text-align:center;}</style>';
var footerOverride = '<style type="text/css">#gde_footerLegalContainer{text-align:center;}.gde_footerLegalLinks{width:996px !important;margin-left:auto;margin-right:auto;}.gde_footerCopyText{width:996px !important;margin-left:auto;margin-right:auto;}</style>';
