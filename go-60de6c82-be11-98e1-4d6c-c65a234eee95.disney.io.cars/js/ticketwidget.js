// 
// JavaScript's functions for Disney Ticket Widget
//
// Trapeze Media Ltd., Toronto, Ontario, Canada
//

function tw_ValidateForm()
{
	if (TW_findObj("ZIPCode").value != "") {
                checkZip(TW_findObj("ZIPCode"));
		return true;
	}
	if (TW_findObj("City").value == "") {
		alert("You have to enter ZIP/Postal Code or City.");
		TW_findObj("ZIPCode").focus();
		return false;
	}
        if (checkCity(TW_findObj("City"))) {
		TW_findObj("City").focus();
		return false;
	}
	if (TW_findObj("State").value == "--") {
		alert("You have to select State/Province.");
		TW_findObj("State").focus();
		return false;
	}  
        return true;
}	

function TW_findObj(n, d) 
{
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=TW_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function checkZip(field) {field.value=field.value.replace(/\ /g, '');}/*REMOVING ANY SPACES FROM THE ZIP/POSTAL CODE*/

function checkCity(field) {
 field.value=field.value.replace(/^ +/mg,'');// REPLACING ANY LEADING SPACES
 field.value=field.value.replace(/ +/mg,' ');// REPLACING EXTRA SPACES BETWEEN TWO WORDS SO THERE'S ONLY ONE SPACE
 city = /^[a-z,A-Z, ]*$/;//CHECKING TO MAKE SURE THERE ARE NO NUMBERS IN THE CITY NAME
 if(city.test(field.value)==false) {
  alert("Please enter a city.");//IF NUMBERS, ALERT THE USER
  field.value = '';
  return true;
 }
 return false;
}
