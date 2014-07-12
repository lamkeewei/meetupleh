'use strict';

angular.module('meetuplehApp')
  .factory('Pledge', function ($resource) {
    return $resource('/api/pledges/:id:action/:userId:eventId', {}, {
      getUserPledge: {
        method: 'GET',
        isArray: true,
        params: {
          action: 'user'
        }
      },

      destroyEvent: {
        method: 'DELETE',
        params: {
          action: 'event'
        }
      }
    });
  });
