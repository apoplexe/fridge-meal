class recipesSvc{
	constructor($http){
		this.$http = $http;
	}
	getRecipes(productList){
		return this.$http.get('/recipes?products='+ productList);
	}
	postRecipes(recipe){
		return this.$http.post('/add'+ recipe);
	}
}

recipesSvc.$inject = ['$http'];

export default recipesSvc;
