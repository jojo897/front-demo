'use strict';

/**
 * @ngdoc function
 * @name testFrontApp.controller:ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the testFrontApp
 */
angular.module('testFrontApp')
  .controller('ChartCtrl', function () {
    this.chartConfig = {
      chart: {
        type: 'line'
      },
      series: [{
        data: [10, 15, 12, 8, 7],
        id: 'series1'
      }],
      title: {
        text: 'Hello'
      },
      xAxis: [{
        type: 'datetime'
      }],
      yAxis: [{ // Primary yAxis
        title: {
          text: 'number of notification',
        }
      }]
    };
  });
