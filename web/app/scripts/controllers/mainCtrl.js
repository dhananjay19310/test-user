'use strict';

/**
 * @ngdoc function
 * @name appTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appTestApp
 */
angular.module('appTestApp')
  .controller('mainCtrl', function ($scope) {
  	$scope.formData = true;
  	$scope.image1 = true;

  	//TO hide and show form
  	$scope.toggleForm = function() {
        $scope.formData = $scope.formData === false ? true: false;
    };
    //toggle image on click of button
    $scope.imageToggle = function() {
		$scope.image1 = !$scope.image1;
	}
  });
