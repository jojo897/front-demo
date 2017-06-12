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
  .module('testFrontApp', ['ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('blue-grey')
      .dark();
  });
