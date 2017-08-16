var app = angular.module('gathrApp');

app.controller('party-details-ctrl', function($scope, $location, gathrFactory, validationFactory, $interval, $window) {



  $scope.selectedItems = function(){
    validationFactory.selectedItemsGet();
  };

  $scope.nameValid = function(username){
    $scope.validation = validationFactory.nameValidation(username);
  };
  $scope.qtyValid = function(itemQty, index){
    $scope.validation = validationFactory.quantityValidation(itemQty, index);
  };

  $scope.addUsername = '';
  $scope.validation = true;

  $scope.suggestToHost = function() {
    $scope.messageSent = "The host has been notified"
  }

  $scope.revealCheckoutButton = false;

// commmit selected items and update to scope using promise
    $scope.saveItem = function(pass, name) {
      gathrFactory.addUser($scope.addUsername);
      $scope.revealCheckoutButton = true;
      gathrFactory.saveItem().then(function successfullCallback(reponse){
        $scope.data = gathrFactory.returnList();
        if (pass === true) {
          $location.path('/confirmation');
        };
      });
    };

// Uncommits a single item, reseting its status to 'unfulfilled' and unassigns the user, and updates the view to reflect these changes.
  $scope.uncommit = function(itemObj) {
    gathrFactory.uncommit(itemObj).then(function(response) {
      $scope.data = gathrFactory.returnList();
    });
  };

// Drop down filter to sort status of items
  $scope.options = [{status: 'All', val: ""},{status: 'Committed', val: 'committed'},{status: 'Unfulfilled', val: 'unfulfilled'}];
  $scope.myOptions = $scope.options[0].val;

// Upon click selected item data equal value
  $scope.change = function(value){
    gathrFactory.selectUpdate(value);// Select Items Button toggle
    $scope.showButton = gathrFactory.showButton();
    console.log($scope.showButton);
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
      $scope.sugVisible = false;
    }
//Show/Hide items in meat category
    $scope.meatVisible = true;
    $scope.showHideMeat = function () {
      $scope.clearItems();
      $scope.meatVisible = $scope.meatVisible ? false: true;
    }
//Show/Hide items in veg category
    $scope.vegVisible = true;
    $scope.showHideVeg = function () {
      $scope.clearItems();
      $scope.vegVisible = $scope.vegVisible ? false: true;
    }
//Show/Hide items in fruit category
    $scope.fruitVisible = true;
    $scope.showHideFruit = function () {
      $scope.clearItems();
      $scope.fruitVisible = $scope.fruitVisible ? false: true;
    }
//Show/Hide items in carb category
    $scope.carbVisible = true;
    $scope.showHideCarb = function () {
      $scope.clearItems();
      $scope.carbVisible = $scope.carbVisible ? false: true;
    }
//Show/Hide items in dessert category
    $scope.dessertVisible = true;
    $scope.showHideDessert = function () {
      $scope.clearItems();
      $scope.dessertVisible = $scope.dessertVisible ? false: true;
    }
//Show/Hide items in condiments category
    $scope.condVisible = true;
    $scope.showHideCond = function () {
      $scope.clearItems();
      $scope.condVisible = $scope.condVisible ? false: true;
    }
//Show/Hide items in beverages category
    $scope.bevVisible = true;
    $scope.showHideBev = function () {
      $scope.clearItems();
      $scope.bevVisible = $scope.bevVisible ? false: true;
    }
//Show/Hide items in Misc. category
    $scope.miscVisible = true;
    $scope.showHideMisc = function () {
      $scope.clearItems();
      $scope.miscVisible = $scope.miscVisible ? false: true;
    }

//Show/Hide items in Misc. category
    $scope.sugVisible = false;
    $scope.showHideSug = function () {
      $scope.clearItems();
      $scope.sugVisible = $scope.sugVisible ? false: true;
    }

//slide show for mobile view
$scope.touchDetailsValue = false;
  $scope.touchDetails = function() {
    $scope.touchDetailsValue = !$scope.touchDetailsValue;
  };


var below = false;
var above = false;
$interval(function () {
  if ($window.innerWidth < 1024 && below === false) {
    $scope.clearItems();
    below = true;
    above = false;
  } else if ($window.innerWidth >= 1024 && above === false) {
    $scope.showItems();
    below = false;
    above = true;
  }
}, 10);


//closure for app.controller
});
