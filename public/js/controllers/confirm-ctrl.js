var app = angular.module('gathrApp');

app.controller('confirm-ctrl', function($scope, gathrFactory, $interval) {

  // hard coded data for party details
    $scope.partyData = gathrFactory.returnData();
    $scope.checkedOutItems = gathrFactory.checkoutList();
    console.log($scope.checkedOutItems, "items array");

//closure for app.controller
});
