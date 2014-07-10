'use strict';

angular.module('meetuplehApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pledged', {
        templateUrl: 'app/viewPledged/viewPledged.html',
        controller: 'ViewpledgedCtrl'
      });
  });
