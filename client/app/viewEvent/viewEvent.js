'use strict';

angular.module('meetuplehApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/events/:id', {
        templateUrl: 'app/viewEvent/viewEvent.html',
        controller: 'VieweventCtrl',
        resolve: {
          event: ['$route', 'Event', function($route, Event){
            return Event.get({id: $route.current.params.id}).$promise;
          }]
        }
      });
  });
