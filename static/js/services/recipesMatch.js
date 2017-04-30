angular
	.module("mealMaker")
	.factory('reciper', function($http){

		var reciper = {
			async: function(){
				var promise = $http.get('/recipes?products=').then(function(response){
					return response.data;
				});
				return promise;
			}
		};
		return reciper;
	});
