var app = angular.module('gathrApp');

app.controller('party-details-ctrl', function($scope, gathrFactory) {

    gathrFactory.getData().then(function()  {
      $scope.data = gathrFactory.returnData();
    });

//closure for app.controller
});
