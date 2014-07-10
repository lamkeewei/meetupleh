'use strict';

angular.module('meetuplehApp')
  .filter('shorten', function () {
    return function (input) {
      var str = input.substring(0,60);
      if (input.length > 60) {
        str += '...(Read More)';
      }

      return str;
    };
  });
