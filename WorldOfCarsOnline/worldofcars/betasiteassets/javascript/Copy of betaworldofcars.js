var gameWindow;

function playWorldOfCars(){
	gameWindow = window.open(worldofcarsURL,'mywindow','width=1005,height=750, toolbar=yes,location=yes,menubar=yes');
	if(gameWindow!=null){
		gameWindow.focus();
	}
}
function parentRedirect(xPage, xClose){
	top.window.location = this[xPage];
	top.window.focus();
	
	if (xClose == "true"){
		gameWindow.close();
	}
}