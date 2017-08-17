var app = angular.module('gathrApp');

app.controller('login-ctrl', function($scope, $location, gathrFactory, $interval) {

$scope.submitLogin = function(userInfo) {
    gathrFactory.checkLogin(userInfo);
  };


  $scope.logoTransition = true;
$interval(function(){
  $scope.logoTransition = false
}, 1000);



//closure for app.controller
});
