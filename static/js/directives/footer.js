(function() {
    'use strict';

    angular
        .module('fridgeMeal')
        .directive('footer', footer);

    function footer() {
        var footer = {
            restrict: 'A',
            templateUrl: 'partials/footer.html',
            scope: {
            },
            link: linkFunc,
						replace: true,
        };

        return footer;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

})();
