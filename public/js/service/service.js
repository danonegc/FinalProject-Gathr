var app = angular.module('gathrApp');
app.factory('gathrFactory', function($http, $location){
  var selectedItems = [];
  var itemList = [];
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
    var committedItem = {status: 'committed', username:'indiana'};
    var uncommittedItem = {status: 'unfulfilled', username: null}

  return {
    getList: getList,
    addItem: addItem,
    saveItem: saveItem,
    returnList: returnList,
    selectUpdate: selectUpdate,
    returnData: returnData,
    currentUser: currentUser,
    checkLogin: checkLogin,
    getProfile: getProfile,
    uncommit: uncommit
  }

  function currentUser(){
    return committedItem.username;
  }
  function getList() {
    var p = $http ({
      method: 'GET',
      url: '/items'
    }).then(function(response) {
      itemList = response.data;
      // console.log(itemList);
    });
    return p;
  };
  function addItem(newItem, category) {
    var item = {item: newItem, category: category, status: "unfulfilled", username: null}
    var p = $http ({
      method: 'POST',
      url: '/items',
      data: item
    }).then(function(response) {
      itemList = response.data;
      console.log(itemList);
    });
    return p;
  };

  function uncommit(value) {
    var id = value.id;
     return putItem(id, uncommittedItem);
  };


  function saveItem() {
    selectedItems.forEach(function(id){
       putItem(id, committedItem)
    });
    return getList();
  };


  function putItem(id, item) {
      var p = $http ({
        url: '/items/' + id,
        method: 'PUT',
        data: item
      }).then(function(response) {
        itemList = response.data;
        console.log(itemList);
      });
    return p;
  };

  function returnList() {
    return itemList;
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
    returnList()
  };

  function returnData() {
    return partyDetails;
  };
  // login validation functionality
  var userObj = {};




  function checkLogin(userInfo) {
    var userList = [
      {
        username: 'indianajones',
        password: 'coolPassword',
        name: 'Indiana Jones',
        email: 'indianajones@gmail.com',
        img: '/images/indianajones.jpg',
        location: 'Portland, OR',
        phone: '333-333-5555',
        partyname:'Grand Circus Demo Day'
      }
    ];

    var p = new Promise(function(resolve, reject) {
      for(var i = 0; i < userList.length; i++) {
        console.log('loop');
        if(userInfo.username === userList[i].username && userInfo.password === userList[i].password) {
          resolve(userList[i]);
          break;
          console.log('true');
        }
      }
    });

    p.then(function(user) {
      userObj = user;

    });
    $location.path('/profile');
    return p;
  }

  function getProfile() {
    return userObj;
  }



});
