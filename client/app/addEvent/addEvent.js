'use strict';

angular.module('meetuplehApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/events/add', {
        templateUrl: 'app/addEvent/addEvent.html',
        controller: 'AddeventCtrl',
        // authenticate: true
      });
  });
