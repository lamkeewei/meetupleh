'use strict';

angular.module('meetuplehApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/created', {
        templateUrl: 'app/viewCreated/viewCreated.html',
        controller: 'ViewcreatedCtrl'
      });
  });
