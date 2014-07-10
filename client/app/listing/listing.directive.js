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
        var getDaysToEvent = function(){          
          var now = new Date();
          var listingDate = new Date(scope.listing.date);
          var timeDiff = listingDate.getTime() - now.getTime();

          if (timeDiff > 0) {
            return Math.ceil(timeDiff / (1000 * 3600 * 24));
          } else {
            return 0;
          }
        };

        scope.listing.daysToEvent = getDaysToEvent();

        scope.getPercentage = function(listing){
          var percentage = listing.pledged / listing.target;
          percentage *= 100;
          return Number(percentage).toFixed(0) + '%';
        };
      }
    };
  });