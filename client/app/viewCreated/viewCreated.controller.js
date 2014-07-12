'use strict';

angular.module('meetuplehApp')
  .controller('ViewcreatedCtrl', function ($scope, Event, $rootScope, Pledge, Comment, $q) {
    $scope.events = Event.userEvents({ userId: $rootScope.currentUser._id });

    $scope.deleteEvent = function(event, index){
      var id = event._id;
      var query = { eventId: id };
      var promises = [];

      promises.push(Pledge.destroyEvent(query).$promise);
      promises.push(Comment.destroyEvent(query).$promise);
      promises.push(Event.delete({ id: id }).$promise);

      $q
        .all(promises)
        .then(function(){
          $scope.events.splice(index, 1);
        });
    };
  });
