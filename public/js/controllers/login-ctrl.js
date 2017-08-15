var app = angular.module('gathrApp');

app.controller('login-ctrl', function($scope, gathrFactory) {

$scope.submitLogin = function(userInfo) {
    return gathrFactory.checkLogin(userInfo);
  };


//closure for app.controller
});
