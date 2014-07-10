'use strict';

angular.module('meetuplehApp')
  .factory('Comment', function ($resource) {
    return $resource('/api/comments/:type:id/:eventId', {}, {
      eventComments: {
        method: 'GET',
        isArray: true,
        params: {
          type: 'event'
        }
      }
    });
  });
