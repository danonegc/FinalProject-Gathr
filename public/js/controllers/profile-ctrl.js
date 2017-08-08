var app = angular.module('gathrApp');

app.controller('profileCtrl', function($scope, $location, loginService) {

// $scope.userDetails = loginService.getProfile();
// console.log($scope.userDetails);


//hide individual event details upon click of
$(function(){
  $('.event-overview').click(function(){
    $(this).children('.col-lg-10').children('.glyphicon').toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
    $(this).next().toggle();
  });
});

// $scope.hideDetail = function() {
//   $('.glyphicon').click(function(){
//     $(this).toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
//   });
// };



//closure for app.controller
});
