'use strict';

angular.module('meetuplehApp')
  .directive('responsiveHeight', function ($window) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var resize = function(){
          var height = $window.innerHeight;
          var width = $window.innerWidth;
          if (attrs.heightOffset) {
            height = height - Number(attrs.heightOffset);
          }
          if (width > 768 && attrs.responsiveHeight) {
            var el = document.querySelector(attrs.responsiveHeight);
            angular.element(el).css('height', height + 'px');
          } else {
            element.css('height', height + 'px');
          }
        };

        resize();

        angular.element($window).bind('resize', function(){
          resize();
        });
      }
    };
  });