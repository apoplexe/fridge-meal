export default class getProducts{
	constructor(){}
	async($http){
			let promise = $http.get('/products').then(
				response => {
					return response.data;
				}
			);

			return promise;
	}
}

getProducts.$inject = ['$http'];
