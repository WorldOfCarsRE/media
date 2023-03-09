if (typeof(_) == 'undefined') _ = top._;
  	
function fbShare(title, summary, thumb) {
  	window.open('http://www.facebook.com/sharer.php?s=100&p[title]='+title+'&p[summary]='+summary+'&p[url]='+location.href.substring(0,location.href.lastIndexOf('/'))+'&p[images][0]='+thumb+'&t='+title, 'sharer', 'toolbar=0,status=0,width=626,height=436');
  	}

function twTweet() {
  window.open('https://twitter.com/intent/tweet?url='+location.href.substring(0,location.href.lastIndexOf('/'))+'&text='+_.twTweet)
}