app.factory('Account', function($http, $rootScope) {
	return {
		setUser: function(){
			return $http.get('/api/me')
		        .then(function(response) {
		        	$rootScope.user = response.data;
		        });
		},
		getProfile: function() {
			return $http.get('/api/me');
		},
		updateProfile: function(profileData) {
			return $http.put('/api/me', profileData);
		}
	};
});