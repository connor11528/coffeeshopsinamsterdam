
app.controller('ProfileCtrl', function($scope, $auth, Account) {

    $scope.updateProfile = function() {
      Account.updateProfile($scope.user)
        .then(function() {
          console.log('Profile has been updated');
        })
        .catch(function(response) {
          console.error(response.data.message, response.status);
        });
    };
});