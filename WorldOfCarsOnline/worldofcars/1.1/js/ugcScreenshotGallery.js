function onUgcIndexResponse(ugc) {
	var HTML = '';
	for(i in ugc) {
		HTML += '<a class="ugc-thumbContainer" title="'+ ugc[i].caption +'" rel="screenshot" href="'+ PATH.cdnRoot + ugc[i].sizes.full.src +'"><img src="'+ PATH.cdnRoot + ugc[i].sizes.thumb.src +'" border="0" /></a>';
	}
	HTML += '<div class="sys-clear"></div>';

	jQuery('.ugc-container').html(HTML);
	jQuery('.ugc-thumbContainer').colorbox();
}