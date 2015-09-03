'use strict';

/**
 * @ngdoc overview
 * @name appTestApp
 * @description
 * # appTestApp
 *
 * Main module of the application.
 */
angular
  .module('appTestApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'userController'
      })
      .when('/home', {
        templateUrl: 'views/landing-page.html',
        controller: 'mainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
