'use strict';

angular.module('meetuplehApp')
  .factory('Event', function ($resource) {
    return $resource('/api/events/:type:id/:userId', {}, {
      update: {
        method: 'PUT'
      },

      userEvents: {
        method: 'GET',
        isArray: true,
        params: {
          type: 'user'
        }
      }
    });
  });
