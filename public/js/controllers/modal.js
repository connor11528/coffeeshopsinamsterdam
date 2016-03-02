app.controller('ModalInstanceCtrl', function($scope){
	$scope.rating = 0;
    $scope.ratings = [{
        current: 3,
        max: 5
    }];

    $scope.getSelectedRating = function (rating) {
        console.log(rating);
    }
});