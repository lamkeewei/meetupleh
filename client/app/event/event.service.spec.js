'use strict';

describe('Service: Event', function () {

  // load the service's module
  beforeEach(module('meetuplehApp'));

  // instantiate service
  var event;
  beforeEach(inject(function (_Event_) {
    event = _Event_;
  }));

  it('should do something', function () {
    expect(!!event).toBe(true);
  });

});
