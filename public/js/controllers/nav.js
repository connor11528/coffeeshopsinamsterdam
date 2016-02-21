
app.controller('NavCtrl', function($rootScope, $auth, Account){
	Account.setUser();
	
	$rootScope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
})