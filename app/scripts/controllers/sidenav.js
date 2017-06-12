'use strict';

/**
 * @ngdoc function
 * @name testFrontApp.controller:SidenavCtrl
 * @description
 * # SidenavCtrl
 * Controller of the testFrontApp
 */
angular.module('testFrontApp')
  .controller('SidenavCtrl', function (sidenav) {
    this.toggle = () =>  sidenav.toggle();
  });
