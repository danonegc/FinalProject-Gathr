var app = angular.module('gathrApp');

app.directive('partyDetails', function() {
  return {
    replace: false,
    restrict: 'E',
    templateUrl: "partials/party-details.html"
  };
});

app.directive('itemList', function() {
    return {
      replace: false,
      restrict: 'E',
      templateUrl: "partials/item-list.html"
  };
});

app.directive('itemByCategory', function() {
    return {
      replace: false,
      restrict: 'E',
      templateUrl: "partials/item-by-category.html"
  };
});

app.directive('showProfileDetail', function() {
  return {
    restrict: 'E',
    replace: false,
    templateUrl: "../partials/party-details.html"
  };
});

app.directive('guestList', function() {
    return {
      restrict: 'E',
      replace: false,
      templateUrl: '../partials/guest-list-template.html'
    };
});
