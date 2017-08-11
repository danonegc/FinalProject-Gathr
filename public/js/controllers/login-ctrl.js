var app = angular.module('gathrApp');

app.controller('login-ctrl', function($scope, $location, gathrFactory) {
console.log('login controller');
$scope.submitLogin = function(userInfo) {
    gathrFactory.checkLogin(userInfo);
    $location.path('/party');
    console.log(userInfo);
  };


//closure for app.controller
});
