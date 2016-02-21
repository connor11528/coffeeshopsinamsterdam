
var mongoose = require('mongoose');

var coffeeshopSchema = mongoose.Schema({
	name: { type: String, unique: true, lowercase: true },
	iframe_url: String,
	latitude: String,
	longitude: String,
	reviews: [ {type : mongoose.Schema.ObjectId, ref : 'Review' } ]
});

mongoose.model('Coffeeshop', coffeeshopSchema);