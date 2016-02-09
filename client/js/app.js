console.log('app.js is locked and loaded...');

var photoApp = angular.module('PhotoPage', ['ngRoute']);

photoApp.controller('AdminController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){

  $rootScope.page = "blogs"

  $scope.toggleSection = function($event){
    $rootScope.page = $event.currentTarget.id;
  };

}])


.controller('PhotosController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){

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

  }])

  .controller('BlogsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

    $scope.blogs = [];


    $scope.newBlog = {};
    $scope.currentBlog = {};

    $scope.searchQuery = "";

    $scope.orderByField = 'title';

    $scope.getBlog = function(){
      $http.get('/api/blogs').then(function(response){
        $scope.blogs = response.data;
      });
    };

    $scope.createBlog = function(){
      $http.post('/api/blogs', $scope.newBlog).then(function(response){
        $scope.blogs.push(response.data);
      });
    };

    $scope.removeBlog = function(blog){
      var url = '/api/blogs/' + blog._id;
      $http.delete(url).then(function(){
        $scope.getBlog();
      });
    };

    $scope.showBlog = function(){
      var id = $routeParams.id;
      $http.get('/api/blogs/', id).then(function(response){
        $scope.currentBlog = response.data;
        console.log($scope.currentBlog);
      });
    };

    $scope.updateBlog = function($index){
      var blog = $scope.blogs[$index];
      var url = '/api/blogs/' + blog._id;
      $http.patch(url, blog).then(function(response){
          $scope.blogs[$index] = response.data;
      });
    };

    $scope.getBlog();

    console.log($routeParams);
    if ($routeParams.id) {
      $scope.showBlog();
    }


  }]);



$(document).ready(function(){


});
