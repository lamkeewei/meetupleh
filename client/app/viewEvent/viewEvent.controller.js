'use strict';

angular.module('meetuplehApp')
  .controller('VieweventCtrl', function ($rootScope, $scope, event, $routeParams, Event, Pledge, _, Comment) {
    $scope.event = event;

    $scope.map = {
      center: {
        latitude: 1.3,
        longitude: 103.8
      },
      zoom: 17
    };

    var getDaysToEvent = function(){          
      var now = new Date();
      var eventDate = new Date(event.date);
      var timeDiff = eventDate.getTime() - now.getTime();

      if (timeDiff > 0) {
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
      } else {
        return 0;
      }
    };
    
    $scope.event.daysToEvent = getDaysToEvent();    

    $scope.hasPledged = false;    
    if ($rootScope.currentUser && $rootScope.currentUser._id) {
      Pledge.getUserPledge({ userId: $rootScope.currentUser._id }, function(pledges){
        var match = _.findIndex(pledges, function(p){
          return p.eventId._id === event._id;
        });
        
        if (match > -1) {
          $scope.hasPledged = true;
          $scope.pledge = pledges[match];
        }
      });
    }

    $scope.comments = Comment.eventComments({eventId: event._id});

    $scope.map.center.latitude = event.position.lat;
    $scope.map.center.longitude = event.position.lng;

    $scope.pledge = function(){      
      var pledge = {
        userId: $rootScope.currentUser._id,
        eventId: event._id
      };

      Pledge.save(pledge, function(){
        event.pledged += 1;
        event.creator = event.creator._id;
        Event.update({id: event._id}, event);
        $scope.hasPledged = true;
      });
    };

    $scope.unpledge = function(){
      Pledge.delete({id: $scope.pledge._id}, function(){
        event.pledged -= 1;
        event.creator = event.creator._id;
        Event.update({id: event._id}, event);
        $scope.hasPledged = false;
      });
    };

    $scope.commentSubmitted = false;
    $scope.addComment = function(form){
      $scope.commentSubmitted = true;
      if (form.$valid) {
        var comment = {
          eventId: event._id,
          userId: $rootScope.currentUser._id,
          text: $scope.comment
        };

        Comment.save(comment, function(newComment){
          newComment.userId = $rootScope.currentUser;
          $scope.comments.push(newComment);
          $scope.commentSubmitted = false;
          $scope.comment = '';
        });
      }
    };

    $scope.removeComment = function(comment, index) {
      Comment.delete({id: comment._id}, function(){
        $scope.comments.splice(index, 1);
      });
    };
  });
