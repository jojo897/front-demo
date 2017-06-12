'use strict';

describe('Directive: sidena', function () {

  // load the directive's module
  beforeEach(module('testFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sidena></sidena>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sidena directive');
  }));
});
