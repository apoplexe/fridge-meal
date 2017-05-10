(function(){

	'use strict';

	angular
	.module('fridgeMeal')
	.directive('draggable', draggable)
	.directive('droppable', ['reciper', droppable]);

	function draggable() {
		var draggable = {
			link: linkFunc
		}
		return draggable;

		function linkFunc(scope, element){
			var el = element[0];
			el.draggable = true;

			el.addEventListener(
				'dragstart',
				function(e) {
					e.dataTransfer.effectAllowed = 'move';
					e.dataTransfer.setData('Text', this.id);
					this.classList.add('drag');
					return false;
				},
				false
			);

			el.addEventListener(
				'dragend',
				function(e) {
					this.classList.remove('drag');
					return false;
				},
				false
			);
		}
	};

	function droppable(reciper) {
		var droppable = {
			restrict: 'EA',
			scope: {
				productsMatchList : '=matchList',
			},
			// controller: 'recipesCtrl',
			// bindToController: true,
			link: linkFunc
		}

		return droppable;

		function linkFunc(scope, element, attrs, controller) {
			var el = element[0];
			el.addEventListener(
				'dragover',
				function(e) {
					e.dataTransfer.dropEffect = 'move';
					e.preventDefault();
					this.classList.add('over');
					return false;
				},
				false
			);
			el.addEventListener(
				'dragenter',
				function(e) {
					this.classList.add('over');
					return false;
				},
				false
			);

			el.addEventListener(
				'dragleave',
				function(e) {
					this.classList.remove('over');
					return false;
				},
				false
			);

			el.addEventListener(
				'drop',
				function(e) {
					if (e.stopPropagation) {
						e.stopPropagation();
					};

					this.classList.remove('over');

					var item = document.getElementById(e.dataTransfer.getData('Text'));
					this.appendChild(item);


					if (this.classList.contains('dropzone')) {
						if (scope.productsMatchList.indexOf(item.id) === -1) {
							scope.productsMatchList.push(item.id);
						}
					}else{
						scope.productsMatchList.splice(scope.productsMatchList.indexOf(item.id), 1);
					}

					scope.$watch('productsMatchList', function(){
						if(scope.productsMatchList > 0){
							scope.productsMatchList = "lklkl";
						};
					}, true);

					return false;
				},
				false
			);
		};
	};

})();
