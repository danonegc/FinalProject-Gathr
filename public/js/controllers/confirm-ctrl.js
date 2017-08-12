var app = angular.module('gathrApp');

app.controller('confirm-ctrl', function($scope, gathrFactory) {

  // hard coded data for party details
    $scope.partyData = gathrFactory.returnData();

  // commmit selected items and update to scope using promise
        $scope.saveItem = function() {
          gathrFactory.saveItem().then(function(){
              $scope.data = gathrFactory.returnList();
          });
        };

//closure for app.controller
});
