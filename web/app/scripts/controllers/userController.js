'use strict';

/**
 * @ngdoc function
 * @name appTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appTestApp
 */
angular.module('appTestApp')
  .controller('userController', function ($scope, $routeParams, $location) {
	
	$scope.login = function(user){
		
		//Predifned user credentials
		var userCredentials = {
			username : "test",
			password : "test"
		};

		//to check user entered proper credentials.
		if(userCredentials.username == user.username && userCredentials.password == user.password) {
			$location.path('/home');
		} else {
			$location.path('/');
			$scope.error = "Login Failed, Tray again"
		}
	}
  });
