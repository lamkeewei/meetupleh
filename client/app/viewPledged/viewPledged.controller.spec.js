'use strict';

describe('Controller: ViewpledgedCtrl', function () {

  // load the controller's module
  beforeEach(module('meetuplehApp'));

  var ViewpledgedCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewpledgedCtrl = $controller('ViewpledgedCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
