'use strict';

angular.module('wendlerCalculator', ['ui.bootstrap']);

var WendlerCtrl;

WendlerCtrl = function($scope, $http) {
  $scope.waves = [
    {name: "Wave 1", value: 0 },
    {name: "Wave 2", value: 1 },
    {name: "Wave 3", value: 2 },
    {name: "Wave 4", value: 3 }
  ];  

  $scope.maxweight = 100;
  $scope.hundreds = { value: 0 };
  $scope.tens = { value: 0 };
  $scope.singles = { value: 0 };
  $scope.wave = {value: $scope.waves[0] };
  $scope.hundredValues = [0, 100, 200, 300];
  $scope.tenValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  $scope.singleValues = [0, 2.5, 5, 7.5];

  $scope.sets = [{reps: 0, weight: 0}, {reps: 0, weight: 0}, {reps: 0, weight: 0}];

  $scope.$watch('hundreds.value + tens.value + singles.value', function(newValue, oldValue) {
    $scope.countMax();
  });

  $scope.countWeights = function() {
    var curWave = $scope.wave.value.value;
    var max = $scope.maxweight?$scope.maxweight.toString().replace(/,/, "."):0;    
    var sets = [[5, 5, "5+"], [3, 3, "3+"], [5, 3, "1+"], [5, 5, 5]];
    var pct = [[0.65, 0.75, 0.85], [0.70, 0.80, 0.90], [0.75, 0.85, 0.95], [0.45, 0.55, 0.65]];
    var i = 0;
    for (i = 0; i < pct[curWave].length; i++) {
      $scope.sets[i].weight = Math.ceil((pct[curWave][i] * (max * 0.9)) / 2.5) * 2.5;
      $scope.sets[i].reps = sets[curWave][i];
    }    
  };  

  $scope.countMax = function() {
    $scope.maxweight = $scope.hundreds.value + $scope.tens.value + $scope.singles.value;
  };
};
