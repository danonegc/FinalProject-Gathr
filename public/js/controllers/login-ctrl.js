var app = angular.module('gathrApp');

app.controller('login-ctrl', function($scope, $location, gathrFactory) {

  $scope.successfulLogin = function(userDetails) {
    gathrFactory.checkLogin(userDetails);
    $location.path('/profile');
    console.log(userDetails);
  };


//closure for app.controller
});
