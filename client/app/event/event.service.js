'use strict';

angular.module('meetuplehApp')
  .factory('Event', function ($resource) {
    return $resource('/api/events/:id', {}, {
      update: {
        method: 'PUT'
      }
    });
  });
