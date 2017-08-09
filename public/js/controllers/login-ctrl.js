var app = angular.module('gathrApp');

app.controller('loginCtrl', function($scope, $location, gathrFactory) {

$scope.submitLogin = function(userInfo) {
    gathrFactory.checkLogin(userInfo);

app.controller('login-ctrl', function($scope, $location, gathrFactory) {

  $scope.successfulLogin = function(userDetails) {
    gathrFactory.checkLogin(userDetails);
    $location.path('/profile');
    // console.log(userInfo);
  };


//closure for app.controller
});
