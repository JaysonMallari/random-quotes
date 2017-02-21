$(document).ready(function(){
		var url="http://quotes.rest/quote/random.json";
	$.getJSON(url,function(data){
		console.log(data);
	});
});