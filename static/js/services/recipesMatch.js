(function() {
	'use strict';

	angular
	.module('fridgeMeal')
	.factory('reciper', reciper);

	function reciper($http) {
		var reciper = {
			data: {
				productList: [2]
			},
			async: async
		};
		return reciper;

		function async(productList){
			var promise = $http.get('/recipes?products='+ productList).then(function(response){
				return response.data;
			});
			return promise;
		}
	}
})();
