'use strict';

angular.module('myApp.banner', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/banner', {
            templateUrl: 'banner/banner.html',
            controller: 'bannerCtrl'
        });
    }])

    .controller('banner', [function() {
        alert("This is the banner controller!");
    }]);