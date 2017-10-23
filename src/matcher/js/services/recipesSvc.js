class recipesSvc{
	constructor($http){
		this.$http = $http;
	}
	getRecipes(productList){
		return this.$http.get('/recipes?products='+ productList);
	}
	postRecipes(recipe){
		return this.$http({
			method: "POST",
			url: "/recipes",
			headers: {
				'Content-Type': 'application/json',
			},
			data: {
				'name': recipe.name,
				'products': recipe.products
			}
		});
	}
}

recipesSvc.$inject = ['$http'];

export default recipesSvc;
