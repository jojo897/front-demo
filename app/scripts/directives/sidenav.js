'use strict';

/**
 * @ngdoc directive
 * @name testFrontApp.directive:sidena
 * @description
 * # sidena
 */

angular.module('testFrontApp')
  .directive('sidenav', function () {
    return {
      templateUrl: 'views/sidenav.html',
      controller: 'SidenavCtrl',
      controllerAs: 'sidenav',
      restrict: 'E'
    };
  });
