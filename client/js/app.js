console.log('app.js is locked and loaded...');

angular.module('PhotoPage', []);

angular.module('PhotoPage', [])
  .controller('PhotosController', ['$scope', '$http', function($scope, $http){

    $scope.photos = [];
    $scope.newPhoto = {};
    $scope.searchQuery = "";

    $scope.orderByField = 'title';

    $scope.getPhoto = function(){
      $http.get('/api/photos').then(function(response){
        $scope.photos = response.data;
      });
    };

    $scope.createPhoto = function(){
      $http.post('/api/photos', $scope.newPhoto).then(function(response){
        $scope.photos.push(response.data);
      });
    };

    $scope.removePhoto = function(photo){
      var url = '/api/photos/' + photo._id
      $http.delete(url).then(function(){
        $scope.getPhoto();
      });
    };

    $scope.getPhoto();

  }]);



$(document).ready(function(){


});
