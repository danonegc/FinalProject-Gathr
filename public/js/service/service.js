var app = angular.module('gathrApp');

app.factory('gathrFactory', function($http){

// get request

=======
  var protein = [{'item': 'Hamburgers', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Hotdogs', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Chicken Breast', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Steak', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Pork', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Ribs', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Chicken Wings', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Turkey', 'val': 'Unfulfilled', 'user': null}];
  var carbs = [{'item': 'Chips', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Cornbread', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Hotdog Buns', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Hamburger Buns', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Potatoes', 'val': 'Unfulfilled', 'user': null}];
  var fruit = [{'item': 'Bananas', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Strawberries', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Cherries', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Orange Slices', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Apple Sliced', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Pineapple', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Kiwi', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Blueberries', 'val': 'Unfulfilled', 'user': null}];
  var vegetables = [{'item': 'Green Beans', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Corn on the Cob', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Sweet Potatoes', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Veggie Platter', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Salad', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Spinach', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Cabbage', 'val': 'Unfulfilled', 'user': null}];
  var desserts = [{'item': 'Ice Cream', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Oreos', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Cake', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Pudding', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Cake Pops', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Brownies', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Lemon Bars', 'val': 'Unfulfilled', 'user': null}];
  var condiments = [{'item': 'Ketchup', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Mustard', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Sweet Relish', 'val': 'Unfulfilled', 'user': null},
      {'item': 'BBQ Sauce', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Minced Onions', 'val': 'Unfulfilled', 'user': null}];
  var beverages = [{'item': 'Lemonade', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Kool-aid', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Pop', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Water', 'val': 'Unfulfilled', 'user': null}];
  var misc = [{'item': 'Cups', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Plates', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Napkins', 'val': 'Unfulfilled', 'user': null},
      {'item': 'Plastic Utensils', 'val': 'Unfulfilled', 'user': null}];


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
    'date': {'month': 'Aug', 'day': 18},
    'time': {'start': 'Noon', 'end': '5:00 PM'},
    'items': [protein, carbs, fruit, vegetables, desserts, condiments, beverages, misc]
    };

  var dataObj = [];

  return {
    getData: getData,
    returnData: returnData,
    // commitSearch: commitSearch,
    selectUpdate: selectUpdate
  };

  function selectUpdate(outerIndex, innerIndex){
    if (partyDetails.items[outerIndex][innerIndex].val === 'Unfulfilled') {
      partyDetails.items[outerIndex][innerIndex].val = 'Selected';
    } else if (partyDetails.items[outerIndex][innerIndex].val === 'Selected') {
      partyDetails.items[outerIndex][innerIndex].val = 'Unfulfilled';
    }
    returnData()
  };

  function getData(){
    var p = $http({
      method: 'GET',
      url: '/languages'
    }).then(function(response) {
      console.log(response);
      dataObj = response.data;
    });
    return p;
  };
  function returnData(){
    return partyDetails;
  };



})

// login validation functionality
  var userObj = {};

  return {
    // These are your two methods.
    checkLogin: checkLogin,
    getProfile: getProfile
  }

  function checkLogin(userInfo) {
    var userList = [
      {
        username: 'indianajones',
        password: 'coolPassword',
        name: 'Indiana Jones',
        email: 'indianajones@gmail.com',
        img: '/images/indianajones.jpg',
        location: 'Portland, OR',
        phone: '333-333-5555'
      },
      {
        username: 'taylorswift',
        password: 'awesomePassword',
        name: 'Taylor Swift',
        email: 'tswift@gmail.com',
        img: '/images/taylorswift.jpg',
        location: 'Detroit, MI',
        phone: '222-444-6666'
      },
      {
        username: 'grantchirpus',
        password: 'greatPassword',
        name: 'Grant Chirpus',
        email: 'grantChirpus@gmail.com',
        img: '/images/grantchirpus.png',
        location: 'Detroit, MI',
        phone: '111-777-3333'
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
