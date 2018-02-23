class adderSvc{
    constructor($http, $sce){
        this.$http = $http;
        this.$sce = $sce;
    }
    add(url, data){
        let baseUrl = 'http://localhost:5000/';
        let trustedUrl = this.$sce.trustAsResourceUrl(baseUrl + url);

        return this.$http({
            method: 'POST',
            url:  trustedUrl,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        });
    }
}

adderSvc.$inject = ['$http', '$sce'];

export default adderSvc;
