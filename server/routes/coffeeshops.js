var express = require('express'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Coffeeshop = mongoose.model('Coffeeshop'),
	router = express.Router();




/*
|--------------------------------------------------------------------------
| GET /api/coffeeshops/:coffeeshopName
|--------------------------------------------------------------------------
*/
router.get('/:coffeeshopName', function(req, res){
	Coffeeshop.findOne({ name: req.params.coffeeshopName }, function(err, coffeeshop){
		if (err)
            return res.send(err);

        res.json(coffeeshop);
	});
});

/*
|--------------------------------------------------------------------------
| GET /api/coffeeshops
|--------------------------------------------------------------------------
*/
router.get('/', function(req, res){
	Coffeeshop.find({}, function(err, coffeeshops){
		if (err)
            return res.send(err);

        res.json(coffeeshops);
	})
});

module.exports = router;