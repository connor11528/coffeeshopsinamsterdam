app.factory('Coffeeshop', function($http) {
	return {
		getByName: function(name){
			return $http.get('/api/coffeeshops/' + name);

		},
		update: function(name, updatedData) {
			return $http.put('/api/coffeeshops/' + name, updatedData);
		}
	};
});