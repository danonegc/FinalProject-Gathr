var app = angular.module('gathrApp');
app.factory('gathrFactory', function($http, $location, httpFactory){

  var partyDetails = httpFactory.returnPartyDetails();
  var addUsername = null;
  var checkoutItems = [];
  var showSelectedItemsModal = [];
  var itemList = [];//array used to pull JSON database: contains all items in our database
  var selectedItems = []; // array of all currently selected items on party page
  var committedItem = {status: 'committed', username: 'grantchirpus'};
  var uncommittedItem = {status: 'unfulfilled', username: null, quantity: null}

  return {
    getList: getList, //get JSON from database
    addItem: addItem, //create item in database
    saveItem: saveItem, // commit selected items
    returnList: returnList, // updates database object to $scope.data
    selectUpdate: selectUpdate, // click status toggle and push array
    returnData: returnData, // return hardcoded data for party details and category calaspe toggle
    checkLogin: checkLogin, // login validation
    showButton: showButton,
    getSelectedItems: getSelectedItems,
    addUser: addUser,
    selectedItemsGet: selectedItemsGet,
    // unselectAllItems: unselectAllItems,
    checkoutList: checkoutList,
    uncommit: uncommit // uncommit item for current user
  };

  function checkoutList(){
    var sendCheckoutList = checkoutItems;
    checkoutItems = []
    return sendCheckoutList; // Clears checkoutItems array so that previously committed items are not reassinged to new users on the confirmation page.
  };

    function uncommit(value) {
      var id = value.id;
       return putItem(id, uncommittedItem); //allows any user to uncommit from a single item, no matter to whom it is assigned.
    };

  // after committing to an item in the commit modal, the selected items are assigned to a single user and their status is updated to "committed" in the database.
    function saveItem() {
      selectedItems = [];
      showSelectedItemsModal.forEach(function(e){
        e.username = addUsername;
        e.status = "committed";
        checkoutItems.push(e);
        putItem(e.id, e);
      });
      return putItem(showSelectedItemsModal[showSelectedItemsModal.length-1].id, showSelectedItemsModal[showSelectedItemsModal.length-1]);
    };

  function getSelectedItems() {
    showSelectedItemsModal = []; //clears selected array to prevent previously selected items from being committed to a new user
    selectedItems.forEach(function(obj){
      var imgSrc = httpFactory.categoryIconMatch(obj.category);
      showSelectedItemsModal.push({item: obj.item, category: imgSrc, id: obj.id, quantity: obj.quantity});
    });
  //makes the commit modal show each item's icon, the quantity reserved, and its name
    return showSelectedItemsModal;
  };

//toggles item's status between 'selected' and 'uncommitted' upon mouse-click.
//selected items get pushed into the selectedItems array; unselected items are removed from the selectedItems array.
//also displays and hides commit button dynamically
  function selectUpdate(value){
    if (value.status === "unfulfilled") {
      value.status = "selected";
      selectedItems.push(value);
    } else if (value.status === "selected"){
      value.status = "unfulfilled";
      var index = 0;
      selectedItems.forEach(function(e){
        if (value.id == e.id) {
          selectedItems.splice(index,1);
        };
        index += 1;
      });
    };
    showButton();
  };

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

  //makes commit button appear once an item has been selected
    function showButton() {
      var buttonStatus = false;
      if (selectedItems.length > 0){
        buttonStatus = true;
      };
      return buttonStatus; // true or false
    };

  function selectedItemsGet() {
    return selectedItems;
  }

  function returnData() {
    return partyDetails; // return hardcoded data for party details and category calaspe toggle
  };

  function returnList() {
    return itemList;   // return hardcoded data for party details and category calaspe toggle
  };

  function addUser(username) {
    addUsername = username;
  };

// login validation functionality
function checkLogin(userInfo) {
  var p = new Promise(function(resolve, reject) {
    for (var i=0; i<partyDetails.length; i++) {
      if(userInfo.partyId === partyDetails[i].partyId) {
        resolve (partyDetails[i]);
        break;
      };
    };
  });
    p.then(function (){
      $location.path('/party');
      return p;
    });
  };





//database querries below

  // Added item to individual category in item-by-category directive.html
    function addItem(newItem, category) {
      var item = {item: newItem, category: category, status: "unfulfilled", username: null}
      var p = $http ({
        method: 'POST',
        url: '/items',
        data: item
      }).then(function(response) {
        itemList = response.data;
      });
      return p;
    };

  // called to PUT item's' to be committed or uncommitted
    function putItem(id, item) {
        var p = $http ({
          url: '/items/' + id,
          method: 'PUT',
          data: item
        }).then(function(response) {
          itemList = response.data;
        });
      return p;
    };

    // get JSON from database --> adds
      function getList() {
        var p = $http ({
          method: 'GET',
          url: '/items'
        }).then(function(response) {
          itemList = response.data;
        });
        return p;
      };


});



// function unselectAllItems() {
//   selectedItems = [];
//   return returnList();
// };
