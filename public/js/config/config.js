var app = angular.module('gathrApp');

app.config(function($routeProvider){
  $routeProvider
    .when('/join-party', {
        controller: 'joinparty-ctrl',
        templateUrl: 'partials/join-party.html'
    })
    .when('/login', {
      controller: 'login-ctrl',
      templateUrl: 'partials/login.html'
    })
    .when('/profile', {
        controller: 'profile-ctrl',
        templateUrl: 'partials/profile.html'
    })
    .when('/party', {
      controller: 'party-details-ctrl',
      templateUrl: 'partials/party.html'
    })
    .when('/confirmation', {
        controller: 'confirm-ctrl',
        templateUrl: 'partials/confirmation.html'
    })
    .otherwise({redirectTo: '/login'});


//closure for app.config
});
