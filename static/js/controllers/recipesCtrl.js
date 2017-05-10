(function() {
  'use strict';

  angular
  .module('fridgeMeal')
  .controller('recipesCtrl', recipesCtrl);

  function recipesCtrl($scope, reciper) {
    $scope.productListVariation = reciper.data.productList;

    this.reciper = function (productList){
      reciper.async(productList).then(function(d){
        $scope.recipes = d;
      });
    };
    $scope.$watch('productListVariation', function(){
      console.log($scope.productListVariation);
    }, true);
    // this.reciper($scope.productListVariation);

  };

})();
