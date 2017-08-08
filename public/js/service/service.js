var app = angular.module('gathrApp');

app.factory('gathrFactory', function($http){

  var dataObj = [];

  return {
    getData: getData,
    returnData: returnData
  };

  function getData(){
    var p = $http({
      method: 'GET',
      url: 'https://gathr-app.herokuapp.com/'
    }).then(function(response) {
      console.log(response);
      dataObj = response.data;
    });
    return p;
  };
  function returnData(){
    return dataObj;
  };
})
