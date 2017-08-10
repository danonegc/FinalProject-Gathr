var app = angular.module('gathrApp');

app.directive('partyDetails', function() {
  return {
    replace: false,
    restrict: 'E',
    templateUrl: "partials/party-details.html"
    // template: "<div>{{ data.partyName }}</div>"
  };
});

app.directive('itemList', function() {
    return {
      replace: false,
      restrict: 'E',
      templateUrl: "partials/item-list.html"
      // template: "<div>{{ data.partyName }}</div>"
  };
});

app.directive('itemByCategory', function() {
    return {
      replace: false,
      restrict: 'E',
      templateUrl: "partials/item-by-category.html"
      // template: "<div>{{ data.partyName }}</div>"
  };
});
