var app = angular.module('gathrApp');

app.controller('party-details-ctrl', function($scope, gathrFactory) {
    // $scope.post= function
    $scope.currentUser = gathrFactory.currentUser();
    // $scope.data = gathrFactory.returnData();

    $scope.saveItem = function() {
      gathrFactory.saveItem();
      // $scope.$apply(function() {
      gathrFactory.getList().then(function(response) {
        $scope.data = gathrFactory.returnList();
      });
      // })
    };

    $scope.uncommit = function(value) {
      gathrFactory.uncommit(value).then(function(response) {
        $scope.data = gathrFactory.returnList();
      });
    }

// Drop down filter
    $scope.options = [{status: 'All', val: ""},{status: 'Fulfilled', val: 'Fulfilled'},{status: 'Unfulfilled', val: 'Unfulfilled'}];
    $scope.myOptions = $scope.options[0].val;

// Upon click selected item data equal value
    $scope.change = function(value){
      gathrFactory.selectUpdate(value);
    };

// hard data
  $scope.partyData = gathrFactory.returnData();

// get data
  $scope.displayItems = gathrFactory.getList().then(function(response) {
    $scope.data = gathrFactory.returnList();
  })

//Update View when Adding new Item to Category
    $scope.addItemtoCategory = function(newItem) {
      gathrFactory.addItem(newItem);
    };

//Show items in ALL categories
    $scope.showItems = function () {
      $scope.meatVisible = true;
      $scope.vegVisible = true;
      $scope.fruitVisible = true;
      $scope.carbVisible = true;
      $scope.dessertVisible = true;
      $scope.condVisible = true;
      $scope.bevVisible = true;
      $scope.miscVisible = true;
    }
//Hide items in ALL categories
    $scope.clearItems = function () {
      $scope.meatVisible = false;
      $scope.vegVisible = false;
      $scope.fruitVisible = false;
      $scope.carbVisible = false;
      $scope.dessertVisible = false;
      $scope.condVisible = false;
      $scope.bevVisible = false;
      $scope.miscVisible = false;
    }
//Show/Hide items in meat category
    $scope.meatVisible = false;
    $scope.showHideMeat = function () {
      $scope.meatVisible = $scope.meatVisible ? false: true;
    }
//Show/Hide items in veg category
    $scope.vegVisible = false;
    $scope.showHideVeg = function () {
      $scope.vegVisible = $scope.vegVisible ? false: true;
    }
//Show/Hide items in fruit category
    $scope.fruitVisible = false;
    $scope.showHideFruit = function () {
      $scope.fruitVisible = $scope.fruitVisible ? false: true;
    }
//Show/Hide items in carb category
    $scope.carbVisible = false;
    $scope.showHideCarb = function () {
      $scope.carbVisible = $scope.carbVisible ? false: true;
    }
//Show/Hide items in dessert category
    $scope.dessertVisible = false;
    $scope.showHideDessert = function () {
      $scope.dessertVisible = $scope.dessertVisible ? false: true;
    }
//Show/Hide items in condiments category
    $scope.condVisible = false;
    $scope.showHideCond = function () {
      $scope.condVisible = $scope.condVisible ? false: true;
    }
//Show/Hide items in beverages category
    $scope.bevVisible = false;
    $scope.showHideBev = function () {
      $scope.bevVisible = $scope.bevVisible ? false: true;
    }
//Show/Hide items in Misc. category
    $scope.miscVisible = false;
    $scope.showHideMisc = function () {
      $scope.miscVisible = $scope.miscVisible ? false: true;

    }
//closure for app.controller
});
