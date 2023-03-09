var ttJSON = '';
var items = [];
var currentCat = '';
var catTotal = '';
jq(function(){
	getJ();
	
	jq('.tips_wrap div').live("click",getCategory);
	jq('.video_link').live( 'click', function(){
		jq( 'body' ).append( '<div id="tipVideo"><div id="videoPlayer"></div></div><div id="blk_alpha"></div>' );
		jq( '#tipVideo' ).css({
			"position":"absolute",
			"left":"0",
			"top":"0",
			"width":"370px",
			"height":"300px",
			"z-index":"999999"
		});
		centerPopup( 'tipVideo' );
		loadPopup( 'tipVideo' );

		swfobject.embedSWF(  PATH.swf +'/carsPlayer.swf', 'videoPlayer', 370, 300, '9.0.0', '', {
			'videoSource'		: jq( this ).attr( 'rel' )
		}, {}, {
			'id'				: 'tipVideo',
			'wmode'				: 'transparent',
			'allowscriptaccess'	: 'always'
		} );
	} );
});
function getJ(){
	jq.getJSON('/js/tips-tricks.json',jsonLoaded);
	//jq.getJSON('/js/tips_tricks_JSON_pack.json',jsonLoaded);
}
function jsonLoaded(data){
	ttJSON = data;	
	initCategory();
}

function initCategory(){
	buildThumbs();
	jq('.tips_wrap div:first').addClass('selected');
	var i = jq('.tips_wrap div').index(this);	
	catTotal = ttJSON[0].items.length;
	//jq('.tips_header h3').html(jq('.tips_wrap div:first').text());
	jq('.tips_header h3').html(ttJSON[0].category);
	jq('.tip_count').html(catTotal+' tip'+ ( catTotal > 1 ? 's' : ''));
	currentCat = 0;
	loadTips(0);
	var totalPages = catTotal/8;
	buildPaginator(totalPages)
}

function buildThumbs(){
	var total = ttJSON.length;
	var output = '';
	jq(ttJSON).each(function(i){
		var category = ttJSON[i].category;
		output +="<div id=\"tips_"+formatString(category)+"\">"+category+"</div>\n";
	});
	
	jq('.tips_wrap').html(output);
}

function formatString(string){
	return string.replace(" ","_").toLowerCase();//
}

function getCategory(){
	jq('.tips_wrap div').removeClass('selected');
	
	jq(this).addClass('selected');
	var i = jq('.tips_wrap div').index(this);	
	catTotal = ttJSON[i].items.length;
	//jq('.tips_header h3').html(jq(this).text());
	jq('.tips_header h3').html(ttJSON[i].category);
	jq('.tip_count').html(catTotal+' tip'+ ( catTotal > 1 ? 's' : ''));
	currentCat = i;
	loadTips(0);
	var totalPages = catTotal/8;
	buildPaginator(totalPages)
}

function loadTips(s){
	var e = (s)+(7);
	if(e > catTotal)
		end = catTotal-1;
	else
		end = e;
	var html='';
	var i = s;	
	var items = ttJSON[currentCat].items;
	
	for(i;i<=end;i++){
		html += '<li>';
			html += '<a href="'+items[i].url+'">'+items[i].topic+'</a>';
			if( items[i].videoUrl )
				html += '<img class="video_link" src="'+ PATH.img +'/icons/video_icon.gif" rel="'+ items[i].videoUrl +'" />';
		html += '</li>';	
	}
	
	jq('.tips_list').html(html);
}

function buildPaginator(total){
	var t = Math.ceil(total);
	var bWidth = 22;
	var lWidth = bWidth*t;
	jq('#paginator ul').css({'width':lWidth+'px'});
	var html = '';
	if(t > 1){
		for(var i=0;i<t;i++){			
			html += '<li class="page_num">'+(i+1)+'</li>';			
		}
	}
	jq('#paginator ul').html(html);
	jq('.page_num:first').addClass('page_select').css('cursor','default');
	jq('.page_num').hover(function(){
		jq(this).addClass('over');
	},function(){
		jq(this).removeClass('over');
	});
	jq('.page_num').click(function(){
		jq('.page_num').removeClass('page_select').css('cursor','default');
		jq(this).addClass('page_select');
		var id = jq(this).html();
		id = (id-1)*8;
		loadTips(id);
	});
}
