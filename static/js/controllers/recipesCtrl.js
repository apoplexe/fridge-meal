(function() {
  'use strict';

  angular
  .module('fridgeMeal')
  .controller('recipesCtrl', recipesCtrl);

  function recipesCtrl($scope, reciper) {
    $scope.productListVariation = [];

    this.reciper = function (productList){
      reciper.async(productList).then(function(d){
        $scope.recipes = d;
      });
    };

    $scope.$watch('productListVariation', console.log("test"), true);

  };

})();
