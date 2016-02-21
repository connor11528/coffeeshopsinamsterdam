
app.controller('CoffeeshopCtrl', function ($scope, $stateParams, $http, Coffeeshop, $uibModal) {

	var coffeeshopName = $stateParams.coffeeshopName;

    Coffeeshop.getByName(coffeeshopName)
    	.then(function(res){
    		$scope.coffeeshop = res.data;
    	})
    	.catch(function(res){
    		console.error('Failed to get coffeeshop by name');
    	});

    $scope.updated = {};
    $scope.updateCoffeeshop = function(){
    	Coffeeshop.update($scope.coffeeshop._id, $scope.coffeeshop)
    		.then(function(res){
    			console.log('In response from update Coffeeshop');
    			console.log(res);
    		});
    };

    $scope.openWriteReviewModal = function(){
        var modalInstance = $uibModal.open({
            animation: false,
            templateUrl: 'templates/writeReviewModal.html',
            // controller: 'ModalInstanceCtrl',
            size: 'lg',
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });
    };
});