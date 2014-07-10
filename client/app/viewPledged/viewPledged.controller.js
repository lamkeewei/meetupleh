'use strict';

angular.module('meetuplehApp')
  .controller('ViewpledgedCtrl', function ($scope, Pledge, $rootScope) {
    $scope.pledges = [];
    if($rootScope.currentUser && $rootScope.currentUser._id) {
      $scope.pledges = Pledge.getUserPledge({ userId: $rootScope.currentUser._id });
    }
  });
