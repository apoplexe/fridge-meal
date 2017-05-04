(function() {
  'use strict';

  angular
  .module('fridgeMeal')
  .directive('recipesList', recipesList);

  function recipesList(reciper) {
    var recipesList = {
      restrict: 'EA',
      templateUrl: 'partials/recipes-list.html',
      replace: true,
      scope: {
      },
      link: linkFunc,
      controller: 'recipesCtrl',
      bindToController: true
    };

    return recipesList;

    function linkFunc(scope, el, attr, ctrl) {
    
    }
  };

})();
