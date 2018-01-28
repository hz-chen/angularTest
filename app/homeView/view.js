'use strict';

angular.module('myApp.homeView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/homeView', {
    templateUrl: 'homeView/view.html',
    controller: 'HomeViewCtrl'
  });
}])

.controller('HomeViewCtrl', [function() {

}]);