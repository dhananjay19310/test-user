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
	console.log('user ctrl loaded');

	$scope.login = function(user){
		
		//Predifned user credentials
		var userCredentials = {
			username : "test",
			password : "test"
		};

		//to check user entered proper credentials.
		if(userCredentials.username === user.username && userCredentials.password === user.password) {
			$location.path('/home');
			console.log('login-sucess');
		} else {
			$location.path('/');
			$scope.error = "Login Failed, Tray again"
			console.log('login-failed');
		}
	};
  });
