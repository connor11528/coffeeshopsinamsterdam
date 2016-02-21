var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({
	stars: { type: Number },
	review: { type: String },
	author: [ {type : mongoose.Schema.ObjectId, ref : 'User' } ],
	coffeeshop: [ {type : mongoose.Schema.ObjectId, ref : 'Coffeeshop' } ]
});

mongoose.model('Review', reviewSchema);