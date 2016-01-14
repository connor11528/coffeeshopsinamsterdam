
var app = angular.module('mean-auth-starter', [
	'ui.router',
	'satellizer'
]);

app.config(function($stateProvider, $urlRouterProvider, $authProvider){
	// satellizer config
	$authProvider.facebook({
      clientId: 'Facebook App ID'
    });

    // define routes
	$stateProvider
		.state('home', {
			url: "/",
			templateUrl: "templates/main.html",
			controller: 'MainCtrl'
		})
		.state('register', {
			url: "/register",
			templateUrl: "templates/register.html",
			controller: 'AuthCtrl',
			resolve: {
	          skipIfLoggedIn: skipIfLoggedIn
	        }
		})
		.state('login', {
			url: "/login",
			templateUrl: "templates/login.html",
			controller: 'AuthCtrl'
		})
		.state('logout', {
			url: '/logout',
			template: null,
			controller: 'LogoutCtrl'
		});

	$urlRouterProvider.otherwise("/");

	function skipIfLoggedIn($q, $auth) {
      var dfd = $q.defer();
      if ($auth.isAuthenticated()) {
        dfd.reject();
      } else {
        dfd.resolve();
      }
      return dfd.promise;
    }
});