export default class getRecipes{
	constructor(productList){
		this.productList = productList;
	}
	async($http){
		let promise = $http.get('/recipes?products='+ productList).then(
			response => {
				return response.data;
			}
		);

		return promise;
	}
}

getRecipes.$inject = ['$http'];
