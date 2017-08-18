var app = angular.module('gathrApp');

app.controller('confirm-ctrl', function($scope, gathrFactory, $location) {

  // hard coded data for party details
    $scope.partyData = gathrFactory.returnData();
    $scope.checkedOutItems = gathrFactory.checkoutList();
    console.log($scope.checkedOutItems, "items array");

    $scope.confirm = 'confirmDetails';

    $scope.toMain = function() {
      $location.path('/login');
    };

//closure for app.controller
});
