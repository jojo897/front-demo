'use strict';

/**
 * @ngdoc directive
 * @name testFrontApp.directive:chart
 * @description
 * # chart
 */
angular.module('testFrontApp')
  .directive('chart', function () {
    return {
      templateUrl: 'views/chart.html',
      restrict: 'E',
      controller: "ChartCtrl",
      controllerAs: "chart"
    };
  });
