
var fs = require('fs'),
	path = require('path'),
	mongoose = require('mongoose'),
	Coffeeshop = mongoose.model('Coffeeshop');

var coffeeshopsPath = path.normalize(__dirname + '/../web_scraper/coffeeshops.json');
var coffeeshops = require(coffeeshopsPath); // runs synchronously (blocking)

Coffeeshop.find({}).exec(function(err, collection){

	// if there are no coffeeshops in the database
	if(collection.length === 0){
		console.log('Populating the Coffeeshop collection');
		
		coffeeshops.forEach(function(shop, i){
			// data is a bit messy. Make sure title is not undefined
			if(shop.title){
				Coffeeshop.create({
					name: shop.title,
					iframe_url: shop.iframe_url,
					latitude: shop.lat,
					longitude: shop.long
				});
			}
		});
	}

});

