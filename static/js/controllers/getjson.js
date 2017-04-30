(function(){

	'use strict';

	angular
		.module('mealMaker')
		.controller('cookSomethin', cookSomethin);


	function cookSomethin($scope, products, reciper){
		products.async().then(function(d){
			$scope.productsList = d;
		});
		reciper.async().then(function(d){
			$scope.recipes = d;
		});
	};

})();
