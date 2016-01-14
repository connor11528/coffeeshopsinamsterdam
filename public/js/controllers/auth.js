
app.controller('AuthCtrl', function($scope, $auth, $location){

	$scope.authenticate = function(provider) {
		$auth.authenticate(provider);
	};

	// register new user
	$scope.newUser = {};
	$scope.errorMessage = false;
	$scope.register = function(){
		// send signup POST request to /auth/signup
		$auth.signup($scope.newUser)
			.then(function(res){
				// set localstorage token
				$auth.setToken(res);
				$location.path('/');
			})
			.catch(function(res){
				console.log(res);
				$scope.errorMessage = res.data.message;
			});
	};
});