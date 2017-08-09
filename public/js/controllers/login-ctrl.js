var app = angular.module('gathrApp');

app.controller('loginCtrl', function($scope, $location, gathrFactory) {


  $scope.submitLogin = function(userInfo) {
    gathrFactory.checkLogin(userInfo);
    $location.path('/profile');
    // console.log(userInfo);
  };


//closure for app.controller
});
