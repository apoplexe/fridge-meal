(function() {
    'use strict';

    angular
        .module('fridgeMeal')
        .directive('header', header);

    function header() {
        var header = {
            restrict: 'A',
            templateUrl: 'partials/header.html',
            scope: {
            },
            link: linkFunc,
						replace: true,
        };

        return header;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

})();
