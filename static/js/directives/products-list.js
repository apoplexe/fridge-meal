(function() {
    'use strict';

    angular
        .module('fridgeMeal')
        .directive('productsList', productsList);

    function productsList() {
        var productList = {
            restrict: 'EA',
						templateUrl: 'partials/products-list.html',
						replace: true,
            scope: {
            },
            link: linkFunc,
            controller: 'productsCtrl',
            bindToController: true
        };

        return productList;

        function linkFunc(scope, el, attr, ctrl) {

        }
    };

})();
