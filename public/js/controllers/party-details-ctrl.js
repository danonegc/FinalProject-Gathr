var app = angular.module('gathrApp');

app.controller('party-details-ctrl', function($scope, gathrFactory) {


    $scope.data = gathrFactory.returnData();

    $scope.options = [{status: 'All', val: ""},{status: 'Fulfilled', val: 'Fulfilled'},{status: 'Unfulfilled', val: 'Unfulfilled'}];
    $scope.myOptions = $scope.options[0].val;

    $scope.change = function(outerIndex, innerIndex){
      gathrFactory.selectUpdate(outerIndex, innerIndex);
    }
//closure for app.controller
});
