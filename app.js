
var app = angular.module("myApp", []);

app.controller('firstCtrl', function($scope){

  //name var
  $scope.myName = 'Brian';

  //change name function
  $scope.logChanges = function(x){
    console.log(x);
  }

  $scope.nameArr = ['brian', 'chris', 'nick', 'matt', 'sam', 'isaac'];

})
