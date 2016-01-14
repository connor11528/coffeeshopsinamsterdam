
app.controller('NavCtrl', function($scope, $auth){
	$scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
})