'use strict';

describe('Service: Pledge', function () {

  // load the service's module
  beforeEach(module('meetuplehApp'));

  // instantiate service
  var Pledge;
  beforeEach(inject(function (_Pledge_) {
    Pledge = _Pledge_;
  }));

  it('should do something', function () {
    expect(!!Pledge).toBe(true);
  });

});
