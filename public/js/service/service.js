var app = angular.module('gathrApp');
app.factory('gathrFactory', function($http, $location){

//array used to pull JSON database: contains all items in our database
  var itemList = [];

// array of all currently selected items on party page
  var selectedItems = [];

//used for party details and and repeating categories through item-list custom directive
  var partyDetails = {
    'partyId': 'gc1234',
    'partyName': 'Grand Circus Demo Day',
    'host': {
      'fName': 'Grant',
      'lName': 'Chirpus',
      'phone': 5555555555,
      'email': 'gc@gc.com'
    },
    'location': "1570 Woodward Ave, Detroit, MI 48226",
    'date': {'month': 'August', 'date': 18, 'day': 'Friday'},
    'time': {'start': 'Noon', 'end': '5:00 PM'},
    'items': [
      {'category': 'protein', 'isVisible': 'meatVisible', 'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Twemoji_1f357.svg/2000px-Twemoji_1f357.svg.png' },
      {'category': 'carbs', 'isVisible': 'carbVisible', 'img': 'https://www.shareicon.net/download/2016/08/18/808791_food_512x512.png' },
      {'category': 'fruit', 'isVisible': 'fruitVisible', 'img': 'https://www.shareicon.net/download/2016/10/11/841503_food_512x512.png' },
      {'category': 'vegetables', 'isVisible': 'vegVisible', 'img': 'https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/carrot-512.png' },
      {'category': 'desserts', 'isVisible': 'dessertVisible', 'img': 'http://www.clker.com/cliparts/2/F/k/8/j/A/ice-cream-silhouette.svg' },
      {'category': 'condiments', 'isVisible': 'condVisible', 'img': 'https://image.flaticon.com/icons/png/512/168/168323.png' },
      {'category': 'beverages', 'isVisible': 'bevVisible', 'img': 'https://www.shareicon.net/download/2016/10/18/844991_food_512x512.png' },
      {'category': 'misc', 'isVisible': 'miscVisible', 'img': 'https://image.flaticon.com/icons/png/512/194/194366.png' }]
    };

    var committedItem = {status: 'committed', username:'grantchirpus'};
    var uncommittedItem = {status: 'unfulfilled', username: null}

  return {
    getList: getList, //get JSON from database
    addItem: addItem, //create item in database
    saveItem: saveItem, // commit selected items
    returnList: returnList, // updates database object to $scope.data
    selectUpdate: selectUpdate, // click status toggle and push array
    returnData: returnData, // return hardcoded data for party details and category calaspe toggle
    currentUser: currentUser, // returns current user for commit
    checkLogin: checkLogin, // login validation
    showButton: showButton,
    getSelectedItems: getSelectedItems,
    uncommit: uncommit // uncommit item for current user
  };

// current user used to commit item
  function currentUser(){
    return committedItem.username;
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
    var savedItems = [];
    savedItems = selectedItems;
    selectedItems = [];
    savedItems.forEach(function(id){
      putItem(id, committedItem);
    });
    return putItem(savedItems[savedItems.length-1], committedItem);
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

// return hardcoded data for party details and category calaspe toggle
  function returnList() {
    return itemList;
  };

  function showButton() {
    var buttonStatus = false;
    if (selectedItems.length > 0){
      buttonStatus = true;
    } else {
      buttonStatus = false;
    }
    return buttonStatus; // true or false
  };

  function categoryIconMatch(x){
    var categoryName = x.toLowerCase();
    var categoryInfo = partyDetails.items;
    var categoryIcon = null;
    categoryInfo.forEach(function(item){
      console.log(item.img);
      if (categoryName === item.category) {
        categoryIcon = item.img;
      };
    });
    return categoryIcon;
  };

  function getSelectedItems() {
    var showSelectedItemsModal = [];
    var categoryIcon = [];
    selectedItems.forEach(function(id){
      itemList.forEach(function(obj){
          if (id === obj.id) {
            var imgSrc = categoryIconMatch(obj.category);
            console.log(obj.category);
            showSelectedItemsModal.push({item: obj.item, category: imgSrc, id: obj.id});
          };
      });
    });
    console.log(showSelectedItemsModal);
    return showSelectedItemsModal;
  };

//select toggle status
  function selectUpdate(value){
    if (value.status === "unfulfilled") {
      value.status = "selected";
      selectedItems.push(value.id);
    } else if (value.status === "selected"){
      value.status = "unfulfilled";
      var index = 0;
      selectedItems.forEach(function(e){
        if (value.id == e) {
          selectedItems.splice(index,1);
        };
        index += 1;
      });
    };
    showButton();
    returnList();
  };


// return hardcoded data for party details and category calaspe toggle
  function returnData() {
    return partyDetails;
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

 // var userList = [
 //      {
 //        username: 'grantchirpus',
 //        password: 'greatPassword',
 //        name: 'Grant Chirpus',
 //        email: 'grantChirpus@gmail.com',
 //        img: '/images/grantchirpus.png',
 //        location: 'Detroit, MI',
 //        phone: '313-867-5309',
 //        partyname:'Grand Circus Demo Day'
 //      }
 //    ];
 //    var p = new Promise(function(resolve, reject) {
 //      for(var i = 0; i < userList.length; i++) {
 //        if(userInfo.username === userList[i].username && userInfo.password === userList[i].password) {
 //          resolve(userList[i]);
 //          break;
 //        };
 //      };
 //    });
 //    p.then(function(user) {
 //      userObj = user;
 //    });
 //    $location.path('/party');
 //    return p;
 //  };

// // login data
//   function getProfile() {
//     return userObj;
//   };



});
