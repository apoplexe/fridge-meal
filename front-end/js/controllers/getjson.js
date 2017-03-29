(function(){

	'use strict';

	angular
		.module('mealMaker')
		.controller('cookSomethin', cookSomethin);


	function cookSomethin($scope, reciper){
		$scope.reciper = reciper
	};

})();
