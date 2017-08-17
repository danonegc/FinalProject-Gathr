var app = angular.module('gathrApp');

app.factory('httpFactory', function($http){

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
   {'category': 'protein', 'isVisible': 'meatVisible', 'img': 'images/meat.png' },
   {'category': 'carbs', 'isVisible': 'carbVisible', 'img': 'images/carb.png' },
   {'category': 'fruit', 'isVisible': 'fruitVisible', 'img': 'images/fruit.png' },
   {'category': 'vegetables', 'isVisible': 'vegVisible', 'img': 'images/veg.png' },
   {'category': 'desserts', 'isVisible': 'dessertVisible', 'img': 'images/icecream.svg' },
   {'category': 'condiments', 'isVisible': 'condVisible', 'img': 'images/cond.png' },
   {'category': 'beverages', 'isVisible': 'bevVisible', 'img': 'images/bev.png' },
   {'category': 'misc', 'isVisible': 'miscVisible', 'img': 'images/fork.png' }],
  //  {'category': 'suggestion', 'isVisible': 'sugVisible', 'img': 'http://icon-icons.com/icons2/625/PNG/512/speech-bubbles_icon-icons.com_57392.png' }],
 'invited': [// attending status values will be stored in variable for sake of neatness. still not sure this works, though.
   {'name':'Elyse', 'attending':'attending'},
   {'name':'Danone', 'attending':'attending'},
   {'name':'Reid', 'attending':'attending'},
   {'name':'Phil', 'attending':'attending'},
   {'name':'Stephanie', 'attending':'attending'},
   {'name': 'Desmond', 'attending':'attending'},
   {'name':'Kevin', 'attending':'attending'},
   {'name':'John', 'attending':'attending'},
   {'name':'Mike E.', 'attending':'attending'},
   {'name':'Mike M.', 'attending':'attending'},
   {'name':'Segi', 'attending':'attending'},
   {'name':'Emily', 'attending':'attending'},
   {'name':'Matt', 'attending':'attending'},
   {'name':'Dan', 'attending':'attending'},
   {'name':'Jefferson', 'attending':'attending'},
   {'name':'Chris', 'attending':'attending'},
   {'name':'Jeremy', 'attending':'attending'},
   {'name':'Adam', 'attending':'undecided'},
   {'name':'Yasmine', 'attending':'attending'},
   {'name':'Kanye W.', 'attending':'not-attending'},
   {'name':'Ringo "the dog"', 'attending':'not-attending'},
   {'name':'JC', 'attending':'attending'}
 ]};


return {
  // getList: getList,
  // jsonObject: jsonObject,
  returnPartyDetails: returnPartyDetails,
  categoryIconMatch: categoryIconMatch
};

    function returnPartyDetails(){
      return partyDetails;
    };



    function categoryIconMatch(x){
      var categoryName = x.toLowerCase();
      var categoryInfo = partyDetails.items;
      var categoryIcon = null;
      categoryInfo.forEach(function(item){
        if (categoryName === item.category) {
          categoryIcon = item.img;
        };
      });
      return categoryIcon;
    };
});
