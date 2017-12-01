class getterSvc{
	constructor($http){
		this.$http = $http;
	}
	getSteps(){
		return this.$http.get('/steps');
	}
	getProducts(){
		return this.$http.get('/products');
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
				'products': recipe.products,
				'steps' : recipe.steps
			}
		});
	}
}

getterSvc.$inject = ['$http'];

export default getterSvc;
