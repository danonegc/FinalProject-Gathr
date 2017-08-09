var app = angular.module('gathrApp');

app.factory('gathrFactory', function($http){

  var protein = [{'category': 'protein', 'item': 'Hamburgers', 'status': false, 'user': null},
      {'category': 'protein','item': 'Hotdogs', 'status': false, 'user': null},
      {'category': 'protein','item': 'Chicken Breast', 'status': false, 'user': null},
      {'category': 'protein','item': 'Steak', 'status': false, 'user': null},
      {'category': 'protein','item': 'Pork', 'status': false, 'user': null},
      {'category': 'protein','item': 'Ribs', 'status': false, 'user': null},
      {'category': 'protein','item': 'Chicken Wings', 'status': false, 'user': null},
      {'category': 'protein','item': 'Turkey', 'status': false, 'user': null}];
  var carbs = [{'category': 'carbs', 'item': 'Chips', 'val': 'Unfulfilled', 'user': null},
      {'category': 'carbs', 'item': 'Cornbread', 'val': 'Unfulfilled', 'user': null},
      {'category': 'carbs','item': 'Hotdog Buns', 'val': 'Unfulfilled', 'user': null},
      {'category': 'carbs','item': 'Hamburger Buns', 'val': 'Unfulfilled', 'user': null},
      {'category': 'carbs','item': 'Potatoes', 'val': 'Unfulfilled', 'user': null}];
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
    'items': [
      {'category': protein, 'isVisible': 'meatVisible', 'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Twemoji_1f357.svg/2000px-Twemoji_1f357.svg.png' },
      {'category': carbs, 'isVisible': 'carbVisible', 'img': 'https://www.shareicon.net/download/2016/08/18/808791_food_512x512.png' },
      {'category': fruit, 'isVisible': 'fruitVisible', 'img': 'https://www.shareicon.net/download/2016/10/11/841503_food_512x512.png' },
      {'category': vegetables, 'isVisible': 'vegVisible', 'img': 'https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/carrot-512.png' },
      {'category': desserts, 'isVisible': 'dessertVisible', 'img': 'http://www.clker.com/cliparts/2/F/k/8/j/A/ice-cream-silhouette.svg' },
      {'category': condiments, 'isVisible': 'condVisible', 'img': 'https://image.flaticon.com/icons/png/512/168/168323.png' },
      {'category': beverages, 'isVisible': 'bevVisible', 'img': 'https://www.shareicon.net/download/2016/10/18/844991_food_512x512.png' },
      {'category': misc, 'isVisible': 'miscVisible', 'img': 'https://image.flaticon.com/icons/png/512/194/194366.png' }]
    };

  return {
    returnData: returnData,
    // commitSearch: commitSearch,
    selectUpdate: selectUpdate
  };

//   function postItem() {
//   var p = $http({
//     url: '/',
//     method: 'POST',
//     data: protein
//   }).then(function(response){
//     productList = response.data;
//   });
//   return p;
// };

  function selectUpdate(outerIndex, innerIndex){
    if (partyDetails.items[outerIndex].category[innerIndex].val === 'Unfulfilled') {
      partyDetails.items[outerIndex].category[innerIndex].val = 'Selected';
    } else if (partyDetails.items[outerIndex].category[innerIndex].val === 'Selected') {
      partyDetails.items[outerIndex].category[innerIndex].val = 'Unfulfilled';
    }
    returnData()
  };

  function returnData(){
    return partyDetails;
  };



})
