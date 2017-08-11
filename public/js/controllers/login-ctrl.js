var app = angular.module('gathrApp');

app.controller('login-ctrl', function($scope, $location, gathrFactory) {

$scope.submitLogin = function(userInfo) {
    gathrFactory.checkLogin(userInfo);
    $location.path('/party');
  };


//closure for app.controller
});
