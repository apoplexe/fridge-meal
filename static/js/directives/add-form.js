(function() {
    'use strict';

    angular
        .module('fridgeMeal')
        .directive('addForm', addForm);

    function addForm() {
        var addForm = {
            restrict: 'EA',
            templateUrl: 'partials/add-form.html',
            scope: {
            },
            link: linkFunc,
						replace: true,
        };

        return addForm;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

})();
