(function(){

	'use strict';

	angular
	.module('mealMaker')
	.controller('cookSomethin', cookSomethin);

	function cookSomethin($scope, products, reciper){
		$scope.productsList = reciper.productsList;

		this.products = function(){
			products.async().then(function(d){
				$scope.productsListe = d;
			});
		};

		this.products();


		this.reciper = function (productsList){
			reciper.async(productsList).then(function(d){
				$scope.recipes = d;
			});
		};

		$scope.$watch($scope.productsList, console.log("llklk"));

	};

})();
