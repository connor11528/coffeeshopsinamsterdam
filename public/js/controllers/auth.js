
app.controller('AuthCtrl', function($scope, $auth, $location, Account){

	// For facebook login
	// $scope.authenticate = function(provider) {
	// 	$auth.authenticate(provider);
	// 	$location.path('/');
	// };

	// register new user
	$scope.newUser = {};
	$scope.errorMessage = false;
	$scope.register = function(){
		// send signup POST request to /auth/signup
		$auth.signup($scope.newUser)
			.then(function(res){
				// set localstorage token
				$auth.setToken(res);
				Account.setUser()
			        .then(function(response) {
			          $location.path('/');
			        });
			})
			.catch(function(res){
				console.log(res);
				$scope.errorMessage = res.data.message;
			});
	};

	$scope.loginUser = {};
	$scope.login = function() {
      $auth.login($scope.loginUser)
        .then(function() {
        	Account.setUser()
		        .then(function(response) {
		          $location.path('/');
		        });
        })
        .catch(function(res) {
        	console.log(res);
			$scope.errorMessage = res.data.message;
        });
    };
});