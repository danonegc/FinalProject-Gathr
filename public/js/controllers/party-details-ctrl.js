var app = angular.module('gathrApp');

app.controller('party-details-ctrl', function($scope, gathrFactory) {

// update current username data
    $scope.currentUser = gathrFactory.currentUser();

// commmit selected items and update to scope using promise
    $scope.saveItem = function() {
      gathrFactory.saveItem().then(function(){
          $scope.data = gathrFactory.returnList();
      });
    };

// uncommit items and update to scope using promise
    $scope.uncommit = function(value) {
      gathrFactory.uncommit(value).then(function(response) {
        $scope.data = gathrFactory.returnList();
      });
    }

// Drop down filter to sort status of items
    $scope.options = [{status: 'All', val: ""},{status: 'Committed', val: 'committed'},{status: 'Unfulfilled', val: 'unfulfilled'}];
    $scope.myOptions = $scope.options[0].val;

// Upon click selected item data equal value
    $scope.change = function(value){
      gathrFactory.selectUpdate(value);
// Select Items Button toggle
      $scope.showButton = gathrFactory.showButton();
      $scope.selectedItemsList = gathrFactory.getSelectedItems();
    };

// hard coded data for party details
  $scope.partyData = gathrFactory.returnData();

// get data from data dase and update to scope using promise
  $scope.displayItems = gathrFactory.getList().then(function(response) {
    $scope.data = gathrFactory.returnList();
  })

//Update View when Adding new Item to Category
    $scope.addItemtoCategory = function(newItem, category) {
      gathrFactory.addItem(newItem, category).then(function(){
        $scope.data = gathrFactory.returnList();
      });
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
    $scope.meatVisible = true;
    $scope.showHideMeat = function () {
      $scope.meatVisible = $scope.meatVisible ? false: true;
    }
//Show/Hide items in veg category
    $scope.vegVisible = true;
    $scope.showHideVeg = function () {
      $scope.vegVisible = $scope.vegVisible ? false: true;
    }
//Show/Hide items in fruit category
    $scope.fruitVisible = true;
    $scope.showHideFruit = function () {
      $scope.fruitVisible = $scope.fruitVisible ? false: true;
    }
//Show/Hide items in carb category
    $scope.carbVisible = true;
    $scope.showHideCarb = function () {
      $scope.carbVisible = $scope.carbVisible ? false: true;
    }
//Show/Hide items in dessert category
    $scope.dessertVisible = true;
    $scope.showHideDessert = function () {
      $scope.dessertVisible = $scope.dessertVisible ? false: true;
    }
//Show/Hide items in condiments category
    $scope.condVisible = true;
    $scope.showHideCond = function () {
      $scope.condVisible = $scope.condVisible ? false: true;
    }
//Show/Hide items in beverages category
    $scope.bevVisible = true;
    $scope.showHideBev = function () {
      $scope.bevVisible = $scope.bevVisible ? false: true;
    }
//Show/Hide items in Misc. category
    $scope.miscVisible = true;
    $scope.showHideMisc = function () {
      $scope.miscVisible = $scope.miscVisible ? false: true;

    }

//closure for app.controller
});
