var app = angular.module('gathrApp');
app.factory('validationFactory', function($http, $location, gathrFactory){

  var selectedItems = [];

  return {
    selectedItemsGet: selectedItemsGet,
    quantityValidation: quantityValidation,
    nameValidation: nameValidation
  };

  function selectedItemsGet(){
    selectedItems = gathrFactory.selectedItemsGet();
  }

  function nameValidation(username){
    var valid = false;
    console.log(username);
    if (username.length <= 1){
      valid = true;
    }
    return validate(valid);
  };

  function quantityValidation(itemObj, index){
    selectedItems[index].quantity = itemObj.quantity;
    return validate(false);
  };

  function validate(valid){
    var parseIndex = 0;
    var validate = false;
    validate = valid;
    selectedItems.forEach(function(e){
      if (e.quantity === null){
        validate = true;
      };
      parseIndex += 1;
    });
    console.log(validate);
    return validate;
  }

});
