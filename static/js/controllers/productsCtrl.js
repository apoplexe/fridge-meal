(function(){

	'use strict';

	angular
	.module('fridgeMeal')
	.controller('productsCtrl', productsCtrl);

	function productsCtrl($scope, products){
		this.products = function(){
			products.async().then(function(d){
				$scope.productsListe = d;
			});
		};
		console.log("lklk");
		this.products();
	};

})();
