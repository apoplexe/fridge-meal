'use strict';

	angular
	.module('mealMaker')
	.controller('cookSomethin', cookSomethin);

function cookSomethin($scope, $http){
	$http.get('js/products.js').then(function(res){
		$scope.module = res.data;
	});
};

