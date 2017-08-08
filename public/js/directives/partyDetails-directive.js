<<<<<<< HEAD
// var app = angular.module('gathrApp');
//
// app.directive('', function() {
//   return {
//     restrict: 'E',
//     replace: false,
//     templateUrl: ""
//   }
// });
=======
var app = angular.module('gathrApp');

app.directive('partyDetails', function() {
  return {
    replace: false,
    restrict: 'E',
    templateUrl: "partials/party-details.html"
    // template: "<div>{{ data.partyName }}</div>"
  };
});
>>>>>>> 0da900437fcaa415ab30198b7748987bc80663ae
