angular
	.module("mealMaker")
	.factory('reciper', function($http){

		var reciper = {
			productList: [],
			async: function(productsList){
				var promise = $http.get('/recipes?products='+ productsList).then(function(response){
					return response.data;
				});
				return promise;
			}
		};
		return reciper;
	});
