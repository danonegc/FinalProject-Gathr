var app = angular.module('gathrApp');

app.controller('profile-ctrl', function($scope, gathrFactory) {

$scope.showProfile = gathrFactory.getProfile();
console.log('profile controller');


//hide individual event details upon click of
// $(function(){
//   $('.glyphicon').click(function(){
//     $(this).toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
//   });
// });

// $scope.hideDetail = function() {
//   $('.glyphicon').click(function(){
//     $(this).toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
//   });
// };


//closure for app.controller
});