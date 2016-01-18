var coffeeshops = require('./coffeeshops.json');
var fs = require('fs');

coffeeshops.forEach(function(shop, i){
	var str = shop.iframe_url;

	// parse lat and long from iframe_url
	var latlong = str.substring(str.lastIndexOf("loc:")+4,str.lastIndexOf("&z="));

	latlong = latlong.split(',');

	shop.lat = latlong[0];
	shop.long = latlong[1];

	coffeeshops[i] = shop;
});


// write entire array to file
var file = fs.createWriteStream('./web_scraper/coffeeshops.json');

file.write('[');
coffeeshops.forEach(function(shop){
	file.write(JSON.stringify(shop, null, 4) + ',\n');
});
file.write(']');

file.end();