class productsSvc{
	constructor($http){
		this.$http = $http;
	}
	getProducts(){
		return this.$http.get('/products');
	}
}

productsSvc.$inject = ['$http'];

export default productsSvc;
