// Authors: Jackson Dunstan and Mark Thrall

// Array of windows listening for javascript messages
var listeners = [];

/**
* Registers a window to receive messages from JavaScript
* @param window The window
* @param name Name to associate with the window (used as source/destination)
*/
function registerListener(window, name)
{
	// Make sure that the window is not a duplicate before pushing it
	for (var i = 0; i < listeners.length; ++i)
	{
		if (listeners[i].name == name)
		{
			return;
		}
	}
	
	listeners.push({window:window, name:name});
}


/**
* Sends a message to the destination window
* @param destination Destination to send the message
* @param source Source of the message
* @param command Command of the message
* @param data Any data associated with the message
*/
function sendMessage(destination, source, command, data)
{
	for (var i = 0; i < listeners.length; ++i)
	{
		if (listeners[i].name == destination)
		{
			try{
				listeners[i].window.receiveMessage(destination, source, command, data);
			}
			catch(err){
				// TODO log this somehow
			}
		}
	}
}

/**
* Sends a message to all listeners
* @param destination Destination to send the message
* @param source Source of the message
* @param command Command of the message
* @param data Any data associated with the message
*/
function broadcastMessage(destination, source, command, data)
{
	for (var i = 0; i < listeners.length; ++i)
	{
		if (listeners[i].name != source)
		{
			try{
				listeners[i].window.receiveMessage(destination, source, command, data);
			}
			catch(err){
				// TODO log this somehow
			}
		}
	}
}


/**
* Gets the main flash object associated with the window
* @param movieName Name/ID of the movie
*/
function thisMovie(movieName) {
	var isIE = navigator.appName.indexOf("Microsoft") != -1;
	return (isIE) ? window[movieName] : document[movieName];
}


/**
* Registers the framework as a javascript listener
*/
function registerFramework()
{
	registerListener(thisMovie("dxd"), "FRAMEWORK");
}

