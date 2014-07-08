'use strict';

angular.module('meetuplehApp')
  .directive('listing', function () {
    return {
      templateUrl: 'app/listing/listing.html',
      restrict: 'A',
      link: function (scope, element, attrs) {
      }
    };
  });