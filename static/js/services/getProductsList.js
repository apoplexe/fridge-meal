angular
	.module("mealMaker")
	.factory('products', function($http){
		var products = {
			async: function(){
				var promise = $http.get('/products').then(function(response){
					return response.data;
				});
				return promise;
			}
		};
		return products;
	});
