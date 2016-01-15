
app.controller('NavCtrl', function($scope, $auth, Account){
	Account.setUser();
	
	$scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
})