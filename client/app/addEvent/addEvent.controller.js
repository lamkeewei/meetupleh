'use strict';

angular.module('meetuplehApp')
  .controller('AddeventCtrl', function ($scope, $rootScope, $window, _, $q, Event, $location) {
    $scope.map = {
      center: {
        latitude: 1.3,
        longitude: 103.8
      },
      zoom: 13
    }

    var capitalize = function(str) {
      var words = str.split(' ');
      words.forEach(function(w, i){
        words[i] = w[0].toUpperCase() + w.substring(1).toLowerCase();
      });

      return words.join(' ');
    };

    $scope.GMap = {};

    $scope.event = {};
    $scope.event.position = {};

    $scope.results = [];
    var idCount = 0;

    var offset = new $window.google.maps.Size(0, -25);
    $scope.windowOptions = {
      pixelOffset: offset
    };

    $scope.clickMarker = function($markerModel){
      $scope.$apply(function(){
        var model = $markerModel;
        $scope.event.location = model.SEARCHVAL;
        $scope.event.position.lat = Number(model.latitude).toFixed(4);
        $scope.event.position.lng = Number(model.longitude).toFixed(4);
      });
    };

    $scope.click = function(){
      console.log('hello bun bun');
    };

    $scope.search = function(){
      $scope.results = [];
      var basicSearch = new $window.BasicSearch();
      var themeSearch = new $window.ThemeSearch();
      basicSearch.searchVal = $scope.searchVal;
      basicSearch.returnGeom = 1;  
      themeSearch.searchVal = $scope.searchVal;
      themeSearch.rset = 1;
      themeSearch.returnGeom = 1;
      themeSearch.otptFlds = "SEARCHVAL,CATEGORY,THEME";

      var convert = function(r){
        var str = r.X + ',' + r.Y;
        var convertor = new $window.CoordConvertor();
        var defer = $q.defer();

        convertor.ConvertCoordinate(str, 3414, 4326, function(output){          
          var output = output.split(',');
          r.longitude = output[0];
          r.latitude = output[1];
          r.id = Number(r.X) + Number(r.Y);
          r.id = Math.floor(r.id);

          r.content = {
            title: r.SEARCHVAL,
          };

          defer.resolve(r);
        });

        return defer.promise;
      };

      basicSearch.GetSearchResults(function(result){
        themeSearch.GetThemeSearchResults(function(themeResults){
          var promises = [];
          var setOne = [];
          var setTwo = [];

          if (result.results !== 'No results') {
            setOne = result.results;
          }

          if (themeResults.results !== 'No results') {
            setTwo = themeResults.results;
          }

          var resultCombined = setOne.concat(setTwo);
          angular.forEach(resultCombined, function(r){
            promises.push(convert(r));
          });

          if (resultCombined.length < 1) {
            $scope.$apply(function(){
              $scope.searchVal = 'No results found';
            });
            return;
          }

          $q.all(promises).then(function(data){
            $scope.results = data;
          });
        });
      });
    };

    $scope.submitted = false;
    $scope.addEvent = function(form){
      $scope.submitted = true;
      var otherValid = $scope.event.date && $scope.event.imgId && $scope.event.location;

      if (form.$valid && otherValid) {
        $scope.event.creator = $rootScope.currentUser._id;
        Event.save($scope.event, function(){
          $location.path('/');
        });
      }
    };

    $scope.widget = $("#imageUpload")
      .unsigned_cloudinary_upload($.cloudinary.config().upload_preset, {}, { 
        // Uncomment the following lines to enable client side image resizing and valiation.
        // Make sure cloudinary/processing is included the js file
        //disableImageResize: false,
        //imageMaxWidth: 800,
        //imageMaxHeight: 600,
        //acceptFileTypes: /(\.|\/)(gif|jpe?g|png|bmp|ico)$/i,
        //maxFileSize: 20000000, // 20MB
        dropZone: "#direct_upload",
        start: function (e) {
          $scope.status = "Starting upload...";
          $scope.$apply();
        },
        fail: function (e, data) {
          $scope.status = "Upload failed";
          $scope.$apply();
        }
      })
      .on("cloudinaryprogressall", function (e, data) {
        $scope.progress = Math.round((data.loaded * 100.0) / data.total);
        $scope.status = "Uploading... " + $scope.progress + "%";
        $scope.$apply();
      })
      .on("cloudinarydone", function (e, data) {
        $scope.event.imgId = data.result.public_id;
        $scope.previewUrl = data.result.url;
        $scope.status = '';
        $scope.$apply();
      });
  });
