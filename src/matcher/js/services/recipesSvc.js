class recipesSvc{
	constructor($http){
		this.$http = $http;
	}
	recipesMatcher(productList){
		return this.$http.get('/recipes?products='+ productList);
	}
}

recipesSvc.$inject = ['$http'];

export default recipesSvc;
