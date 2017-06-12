'use strict';

/**
 * @ngdoc directive
 * @name testFrontApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('testFrontApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'views/navbar.html',
      controller: 'NavbarCtrl',
      controllerAs: 'navbar',
      restrict: 'E'
    };
  });
