//var button1;
//var result;
var country; 
var all;
var httprequest;

window.onload =function() {

	var button1 = document.getElementById('lookup');
	country = document.getElementsByTagName('input')[0];
	all =document.getElementsByTagName('input')[1];

	button1.onclick =function() {
		ajaxFunction(); 
	  findCountry();
	};
};

function ajaxFunction() {
// Old compatibility code, no longer needed.
  if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
    httprequest = new XMLHttpRequest();
  }
}

function findCountry() {
	
	if(all) 
		all.setAttribute('value','true');
	
	var url = "world.php?country="+country.value+"&all="+all.value;

	httprequest.onreadystatechange = displayResults;
	httprequest.open("GET", url);
	httprequest.send();

}

function displayResults() {
	
	var print = document.getElementById('result');

	if (httprequest.readyState === XMLHttpRequest.DONE) 
	{
		if (httprequest.status === 200) {
		 	var Information = httprequest.responseText;

		 	if (Information[8] !== '<') 
		 	{
		 		alert(Information);
		 		print.innerHTML += '<h3> Result </h3>' + Information;
			}
			else 
			{
				alert(Information);
				Information = 'no result found';
				print.innerHTML = '<h2><strong> Result </strong></h2>' + Information;
			}
			
		}
	}
}

