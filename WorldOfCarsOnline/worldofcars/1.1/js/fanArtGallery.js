jQuery(document).ready(function() {
	$.getJSON('/js/fan-art.json', false, onIndexResponse);
});

function onIndexResponse(fanArt) {
	var HTML = '';
	for(i in fanArt) {
		HTML += '<a class="fanart-thumbContainer" title="'+ fanArt[i].title +'" rel="fanArt" href="'+ PATH.cdnRoot + fanArt[i].sizes.full.src +'"><img src="'+ PATH.cdnRoot + fanArt[i].sizes.thumb.src +'" border="0" /></a>';
	}
	HTML += '<div class="sys-clear"></div>';

	jQuery('.fanart-container').html(HTML);
	jQuery('.fanart-thumbContainer').colorbox();
}