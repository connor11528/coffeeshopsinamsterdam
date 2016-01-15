
app.controller('CoffeeshopCtrl', function ($scope, $stateParams, $http) {

    // get coffeeshop by name
    $http.get('/api/coffeeshops/' + $stateParams.coffeeshopName)
    	.then(function(res){
    		$scope.coffeeshop = res.data;

    	});

});