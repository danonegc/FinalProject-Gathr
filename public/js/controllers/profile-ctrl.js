var app = angular.module('gathrApp');

app.controller('profileCtrl', function($scope, $location, gathrFactory) {

// $scope.userDetails = gathrFactory.getProfile();
// console.log($scope.userDetails);


//hide individual event details upon click of
$(function(){
  $('.glyphicon').click(function(){
    $(this).toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
  });
});

// $scope.hideDetail = function() {
//   $('.glyphicon').click(function(){
//     $(this).toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
//   });
// };



//closure for app.controller
});
