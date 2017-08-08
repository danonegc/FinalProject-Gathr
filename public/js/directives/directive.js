var app = angular.module('gathrApp');

app.directive('showEventDetail', function() {
  return {
    restrict: 'E',
    replace: false,
    templateUrl: "../partials/event-details.html"
  }
});
