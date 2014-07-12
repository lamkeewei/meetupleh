'use strict';

describe('Controller: ViewcreatedCtrl', function () {

  // load the controller's module
  beforeEach(module('meetuplehApp'));

  var ViewcreatedCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewcreatedCtrl = $controller('ViewcreatedCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
