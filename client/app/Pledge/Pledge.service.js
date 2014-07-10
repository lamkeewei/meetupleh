'use strict';

angular.module('meetuplehApp')
  .factory('Pledge', function ($resource) {
    return $resource('/api/pledges/:id:action/:userId', {}, {
      getUserPledge: {
        method: 'GET',
        isArray: true,
        params: {
          action: 'user'
        }
      }
    });
  });
