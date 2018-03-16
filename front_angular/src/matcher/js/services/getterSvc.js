class getterSvc{
	constructor($http){
		this.$http = $http;
	}
    get(url, params){
        url = 'http://localhost:5000/' + url;
        params = params !== undefined && params !== ''  ? '?' + params : '';

        return this.$http.get(url + params)
    }
}

getterSvc.$inject = ['$http'];

export default getterSvc;
