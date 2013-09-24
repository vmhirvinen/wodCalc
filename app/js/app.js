'use strict';

angular.module('wendlerCalculator', ['ui.bootstrap']);

var WendlerCtrl;

WendlerCtrl = function($scope, $http) {
  $scope.maxweight = 100;
  $scope.waves = [
    {name: "Wave 1", value: 0 },
    {name: "Wave 2", value: 1 },
    {name: "Wave 3", value: 2 },
    {name: "Wave 4", value: 3 }
  ];
  $scope.wave = $scope.waves[0];

  $scope.sets = [{reps: 0, weight: 0}, {reps: 0, weight: 0}, {reps: 0, weight: 0}];

  $scope.countWeights = function() {
    var max = $scope.maxweight?$scope.maxweight.toString().replace(/,/, "."):0;    
    var sets = [[5, 5, "5+"], [3, 3, "3+"], [5, 3, "1+"], [5, 5, 5]];
    var pct = [[0.65, 0.75, 0.85], [0.70, 0.80, 0.90], [0.75, 0.85, 0.95], [0.45, 0.55, 0.65]];
    var i = 0;
    for (i = 0; i < pct[$scope.wave.value].length; i++) {
      $scope.sets[i].weight = Math.ceil((pct[$scope.wave.value][i] * (max * 0.9)) / 2.5) * 2.5;
      $scope.sets[i].reps = sets[$scope.wave.value][i];
    }

    $scope.counted_max = "";    
  };  
};
