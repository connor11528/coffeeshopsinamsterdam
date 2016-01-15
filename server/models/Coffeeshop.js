
var mongoose = require('mongoose');

var coffeeshopSchema = mongoose.Schema({
	name: { type: String, unique: true, lowercase: true },
	iframe_url: String
});

mongoose.model('Coffeeshop', coffeeshopSchema);