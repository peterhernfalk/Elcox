/*
Elcox - Javascript functions.

Copyright Elcox, 2010
All rights reserved.
 
Last Modified: 2010-09-11
*/
function dayAndTime() {
	 var monthWord	= new Array("January","February","March","April","May","June", "July","August","September","October","November","December");
	 var monthWordShort=new Array("Jan","Feb","Mar","Apr","May","Jun", "Jul","Aug","Sep","Oct","Nov","Dec");
	
	 var dayWord	= new Array("Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday");
	 var dayWordShort=new Array("Sun","Mon","Tue","Wed","Thu", "Fri","Sat");
	
	 var now 	= new Date();
	
	 var dayofWeek	= now.getDay();
	 var day	= now.getDate();
	 var month	= now.getMonth();
	 var year	= now.getFullYear()
	 var hours 	= now.getHours()
	 var minutes 	= now.getMinutes()
	 if (minutes < 10){ minutes = "0" + minutes }
	
	 var timestampShort	= day+" "+monthWordShort[month]+" "+year + " " + hours + ":" + minutes
	 document.getElementById('tod').innerHTML = "<br><br><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + timestampShort + "</b>";
}
function today() {
	dayAndTime();
	setTimeout("today()", 1000);
}
function get_radio_value() {
	for (var i=0; i < document.searchform.searchengine.length; i++) {
		if (document.searchform.searchengine[i].checked) {
			var rad_val = document.searchform.searchengine[i].value;
		}
	}
	return rad_val;
}
function Search(){
	var searchString = document.searchform.searchfor.value;
	var searchURL="";
	var googleOxfordTutorsSearch = "+site%3Awww.oxford-tutors.org.uk"
	var googleElcoxSearch = "+site%3Awww.elcox.co.uk";

	searchURL="http://www.google.com/search?rls=ig&hl=en&source=hp&q="+searchString+googleElcoxSearch+"&aq=f&oq=&aqi=";
	window.open(searchURL);
}

