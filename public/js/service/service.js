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
    unselectAllItems: unselectAllItems,
    checkoutList: checkoutList,
    uncommit: uncommit // uncommit item for current user
  };

  function checkoutList(){
    var sendCheckoutList = checkoutItems;
    checkoutItems = []
    return sendCheckoutList;
  };

  function unselectAllItems() {
    console.log(selectedItems, "before");
    selectedItems = [];
    console.log(selectedItems, "after");
    return returnList();
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

// uncommit item for current user
  function uncommit(value) {
    var id = value.id;
     return putItem(id, uncommittedItem);
  };

// commit selected items to be saved into the database
  function saveItem() {
    selectedItems = [];
    showSelectedItemsModal.forEach(function(e){
      e.username = addUsername;
      e.status = "committed";
      checkoutItems.push(e);
      console.log(checkoutItems, "saveItem");
      putItem(e.id, e);
    });
    return putItem(showSelectedItemsModal[showSelectedItemsModal.length-1].id, showSelectedItemsModal[showSelectedItemsModal.length-1]);
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


  function showButton() {
    var buttonStatus = false;
    if (selectedItems.length > 0){
      buttonStatus = true;
    };
    return buttonStatus; // true or false
  };

  function getSelectedItems() {
    showSelectedItemsModal = [];
    var categoryIcon = [];
    selectedItems.forEach(function(obj){
      var imgSrc = httpFactory.categoryIconMatch(obj.category);
      showSelectedItemsModal.push({item: obj.item, category: imgSrc, id: obj.id, quantity: obj.quantity});
    });
    return showSelectedItemsModal;
  };

//select toggle status
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

});
