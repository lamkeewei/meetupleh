'use strict';

angular.module('meetuplehApp')
  .controller('AddeventCtrl', function ($scope, $rootScope) {
    $scope.map = {
      center: {
        latitude: 1.3,
        longitude: 103.8
      },
      zoom: 13
    }
  });
