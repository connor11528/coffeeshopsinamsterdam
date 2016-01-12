
var app = angular.module('coffeeshopsinamsterdam', [
	'ui.router',
	'mm.foundation'
]);

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: "/",
			templateUrl: "templates/main.html",
			controller: 'MainCtrl'
		});

	$urlRouterProvider.otherwise("/");
});