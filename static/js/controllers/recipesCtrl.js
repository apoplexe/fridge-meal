(function() {
  'use strict';

  angular
  .module('fridgeMeal')
  .controller('recipesCtrl', recipesCtrl);

  function recipesCtrl($scope, reciper) {
    $scope.pList = reciper.data;

    console.log($scope.pList.productList);


    // this.reciper = function (productList){
    //   reciper.async(productList).then(function(d){
    //     $scope.recipes = d;
    //   });
    // };
    // this.reciper();
  };
})();
