var app = angular.module('gathrApp');

app.directive('partyDetails', function() {
  return {
    replace: false,
    restrict: 'E',
    templateUrl: "partials/party-details.html"
    // template: "<div>{{ data.partyName }}</div>"
  };
});

app.directive('', function() {
  return {
    replace: false,
    restrict: 'E',
    templateUrl: "partials/party-details.html"
    // template: "<div>{{ data.partyName }}</div>"
  };
});
