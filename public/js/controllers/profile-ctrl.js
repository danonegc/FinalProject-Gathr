var app = angular.module('gathrApp');

app.controller('profileCtrl', function($scope, $location, gathrFactory) {

// $scope.userDetails = gathrFactory.getProfile();
// console.log($scope.userDetails);


//toggle visibility of event details on click
$(function(){
  $('.event-overview').click(function(){
    $(this).children('.col-lg-10').children('.glyphicon').toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
    $(this).next().toggle();
  });
});
//closure for app.controller
});
