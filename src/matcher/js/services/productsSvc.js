class productsSvc{
	constructor($http){
		this.$http = $http;
	}
	productsFinder(){
		return this.$http.get('/products');
	}
}

productsSvc.$inject = ['$http'];

export default productsSvc;
