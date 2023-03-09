var RightClick = {
	init: function () {
		this.FlashObjectID = "DVC_OS";
		this.FlashContainerID = "flashDivContent";
		this.Cache = this.FlashObjectID;
		if(window.addEventListener){
			 window.addEventListener("mousedown", this.onGeckoMouse(), true);
			 document.oncontextmenu = function() { document.getElementById("DVC_OS").rightClick(); }
		} else {
 
			document.getElementById(this.FlashContainerID).onmouseup = function() { document.getElementById(RightClick.FlashContainerID).releaseCapture(); }
			document.oncontextmenu = function(){ if(window.event.srcElement.id == RightClick.FlashObjectID) { return false; } else { RightClick.Cache = "nan"; }}
			document.getElementById(this.FlashContainerID).onmousedown = RightClick.onIEMouse;
		}
	},
	killEvents: function(eventObject) {
		if(eventObject) {
			if (eventObject.stopPropagation) { eventObject.stopPropagation(); }
			if (eventObject.preventDefault) { eventObject.preventDefault(); }
			if (eventObject.preventCapture) { eventObject.preventCapture(); }
		    if (eventObject.preventBubble) { eventObject.preventBubble(); }
		}
	},
	onGeckoMouse: function(ev) {
		return function(ev) {
		if (ev.button != 0) {
			RightClick.killEvents(ev);
			if(ev.target.id == RightClick.FlashObjectID && RightClick.Cache == RightClick.FlashObjectID) {
                document.getElementById(RightClick.FlashObjectID).rightClick();
			}
			RightClick.Cache = ev.target.id;
		}
	  }
	},
	onIEMouse: function() {
        // stupid ie fix
        if (document.getElementById(RightClick.FlashObjectID + 'x'))
            document.getElementById(RightClick.FlashObjectID + 'x').id =  RightClick.FlashObjectID;
 
		if (event.button> 1) {
			if(window.event.srcElement.id == RightClick.FlashObjectID && RightClick.Cache == RightClick.FlashObjectID) {
				RightClick.call();
			}
			document.getElementById(RightClick.FlashContainerID).setCapture();
			if(window.event.srcElement.id)
			RightClick.Cache = window.event.srcElement.id;
		}
	},
	call: function() {
		document.getElementById(RightClick.FlashObjectID).rightClick();
	}
}