'use strict';

angular.module('meetuplehApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/analyze', {
        templateUrl: 'app/analyze/analyze.html',
        controller: 'AnalyzeCtrl'
      });
  });
