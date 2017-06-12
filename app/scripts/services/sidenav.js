'use strict';

/**
 * @ngdoc service
 * @name testFrontApp.sidenav
 * @description
 * # sidenav
 * Factory in the testFrontApp.
 */
angular.module('testFrontApp')
  .factory('sidenav', function ($mdSidenav) {
    // Service logic

    // Public API here
    return {
      toggle: function () {
        $mdSidenav('left').toggle();
      }
    };
  });
