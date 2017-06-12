'use strict';

/**
 * @ngdoc function
 * @name testFrontApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the testFrontApp
 */
angular.module('testFrontApp')
  .controller('NavbarCtrl', function (sidenav) {
    this.toggle = () => sidenav.toggle();
  });
