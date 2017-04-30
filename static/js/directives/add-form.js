'use strict';

angular
  .module('mealMaker')
  .directive('addForm', function(){
    return{
      restrict: 'A',
      templateUrl: 'partials/add-form.html',
      replace: true
    };
  });
