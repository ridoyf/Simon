var app = angular.module('app', []);

app.factory('colour', function(){
    var play = [];
    var colours = ['green','red', 'blue', 'yellow'];
});

app.controller('main', function($scope, colour){
    $scope.test = colour.colours;
});