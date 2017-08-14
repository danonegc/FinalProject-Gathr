var app = angular.module('gathrApp');

app.controller('confirm-ctrl', function($scope, gathrFactory) {

  // hard coded data for party details
    $scope.partyData = gathrFactory.returnData();

    // commmit selected items and update to scope using promise
        $scope.saveItem = function() {
          var username = $scope.addUsername;
          gathrFactory.addUser(username);
          gathrFactory.saveItem().then(function(){
              $scope.data = gathrFactory.returnList();
              console.log($scope.data);
          });
        };

//closure for app.controller
});
