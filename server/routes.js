var express = require('express'),
	path = require('path'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	jwt = require('jwt-simple'),
	moment = require('moment'),
	rootPath = path.normalize(__dirname + '/../'),
	router = express.Router();

var config = { TOKEN_SECRET: process.env.TOKEN_SECRET || 'YOUR_UNIQUE_JWT_TOKEN_SECRET' };

/*
 |--------------------------------------------------------------------------
 | Generate JSON Web Token
 |--------------------------------------------------------------------------
 */
function createJWT(user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
}


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
		  res.send({ token: createJWT(result) });
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
      res.send({ token: createJWT(user) });
    });
  });
});

// angularjs catch all route
router.get('/*', function(req, res) {
	res.sendFile(rootPath + 'public/index.html', { user: req.user });
});


module.exports = router;