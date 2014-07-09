'use strict';

angular.module('meetuplehApp')
  .controller('MainCtrl', function ($scope, $http, $window, Event) {
    $scope.map = {
      center: {
        latitude: 1.3,
        longitude: 103.8
      },
      zoom: 12
    }
    $scope.search = {};
    $scope.events = Event.query();
  });