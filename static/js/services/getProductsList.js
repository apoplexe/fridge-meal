(function() {
	'use strict';

	angular
	.module('fridgeMeal')
	.factory('products', products);

	function products($http) {
		var products = {
			async: async
		};

		return products;

		function async(){
			var promise = $http.get('/products').then(function(response){
				return response.data;
			});
			return promise;
		}
	}
})();
