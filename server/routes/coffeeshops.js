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
 | PUT /api/coffeeshops/:coffeeshopName
 |--------------------------------------------------------------------------
 */
router.put('/:coffeeshopName', function(req, res) {
	console.log('Put request received!');
	console.log(req.query);
	console.log(req.body);

	Coffeeshop.findById(req.user, function(err, coffeeshop) {
		if (!user) {
		  return res.status(400).send({ message: 'Coffeeshop not found' });
		}

		// do the updating
		coffeeshop.name = req.body.displayName || coffeeshop.name;

		user.save(function(err) {
		  res.status(200).end();
		});
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