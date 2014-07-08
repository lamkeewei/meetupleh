'use strict';

describe('Controller: AddeventCtrl', function () {

  // load the controller's module
  beforeEach(module('meetuplehApp'));

  var AddeventCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddeventCtrl = $controller('AddeventCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
