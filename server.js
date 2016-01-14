
var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'),
	cors = require('cors'),
	app = express();

// ENVIRONMENT CONFIG
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	envConfig = require('./server/env')[env];

// DATABASE CONFIG
require('./server/models/user');
mongoose.connect(envConfig.db);

// EXPRESS CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

// ROUTES
var indexRoutes = require('./server/routes');
app.use('/', indexRoutes);

// Start server
app.listen(envConfig.port, function(){
  console.log('Server listening on port ' + envConfig.port)
});