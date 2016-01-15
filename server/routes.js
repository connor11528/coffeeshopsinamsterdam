var express = require('express'),
	path = require('path'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	rootPath = path.normalize(__dirname + '/../'),
	router = express.Router();

var utils = require('./utils');

/*
 |--------------------------------------------------------------------------
 | Create Email and Password Account
 |--------------------------------------------------------------------------
 */
router.post('/auth/signup', function(req, res) {

	User.findOne({ email: req.body.email }, function(err, existingUser) {
		if (existingUser) {
			console.error('User exists already!');
			res.status(409);
			return res.send({ message: 'Email is already taken' });
		}

		var user = new User({
		  displayName: req.body.displayName,
		  email: req.body.email,
		  password: req.body.password
		});

		user.save(function(err, result) {
		  if (err) {
		  	console.error('Error saving the user!');
		    res.status(500).send({ message: err.message });
		  }
		  res.send({ token: utils.createJWT(result) });
		});
	});
});

/*
 |--------------------------------------------------------------------------
 | Log in with Email
 |--------------------------------------------------------------------------
 */
router.post('/auth/login', function(req, res) {
  User.findOne({ email: req.body.email }, '+password', function(err, user) {
	if (!user) {
    	console.log('user not found');
    	return res.status(401).send({ message: 'Invalid email and/or password' });
    }
    user.comparePassword(req.body.password, function(err, isMatch) {
      if (!isMatch) {
      	console.log('wrong password');
        return res.status(401).send({ message: 'Invalid email and/or password' });
      }
      res.send({ token: utils.createJWT(user) });
    });
  });
});

/*
 |--------------------------------------------------------------------------
 | GET /api/me
 |--------------------------------------------------------------------------
 */
router.get('/api/me', utils.ensureAuthenticated, function(req, res) {
  User.findById(req.user, function(err, user) {
    res.send(user);
  });
});

/*
 |--------------------------------------------------------------------------
 | PUT /api/me
 |--------------------------------------------------------------------------
 */
router.put('/api/me', utils.ensureAuthenticated, function(req, res) {
  User.findById(req.user, function(err, user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found' });
    }
    user.displayName = req.body.displayName || user.displayName;
    user.email = req.body.email || user.email;
    user.save(function(err) {
      res.status(200).end();
    });
  });
});

// angularjs catch all route
router.get('/*', function(req, res) {
	res.sendFile(rootPath + 'public/index.html', { user: req.user });
});


module.exports = router;