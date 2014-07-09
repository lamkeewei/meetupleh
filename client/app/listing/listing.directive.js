'use strict';

angular.module('meetuplehApp')
  .directive('listing', function ($window) {
    return {
      templateUrl: 'app/listing/listing.html',
      restrict: 'A',
      scope: {
        listing: '=listing'
      },
      link: function (scope, element, attrs) {
        scope.getPercentage = function(listing){
          var percentage = listing.pledged / listing.target;
          return Number(percentage).toFixed(0) + '%';
        };
      }
    };
  });