
app.controller('MainCtrl', function($scope, $http){
	$http.get('/api/coffeeshops')
		.then(function(res){
			$scope.coffeeshops = res.data;
		});
});