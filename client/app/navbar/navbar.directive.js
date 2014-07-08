'use strict';

angular.module('meetuplehApp')
  .directive('navbar', function (Auth, $rootScope, $location) {
    return {
      templateUrl: 'app/navbar/navbar.html',
      restrict: 'A',
      link: function (scope, element, attrs) {
        scope.logout = function(){
          Auth.logout();
          $location.path('/');
        };
      }
    };
  });