'use strict';

angular.module('meetuplehApp')
  .directive('bgImg', function () {
    return {
      restrict: 'A',
      scope: {
        bgImg: '=bgImg'
      },
      link: function (scope, element, attrs) {
        if (scope.bgImg) {
          var imageUrl = 'http://res.cloudinary.com/hccyz6kvw/image/upload/' + scope.bgImg + '.jpg'
          element.css('background-image', 'url(' + imageUrl + ')');
        }

        scope.$watch('bgImg', function(newVal, oldVal){
          if (newVal) {
            var imageUrl = 'http://res.cloudinary.com/hccyz6kvw/image/upload/' + newVal + '.jpg'
            element.css('background-image', 'url(' + imageUrl + ')');
          }
        });
      }
    };
  });