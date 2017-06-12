'use strict';

/**
 * @ngdoc overview
 * @name testFrontApp
 * @description
 * # testFrontApp
 *
 * Main module of the application.
 */
angular
  .module('testFrontApp', ['ngMaterial', 'highcharts-ng'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('blue-grey')
      .dark();
  });
