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
			scope: {},
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
					if (e.stopPropagation) e.stopPropagation();

					this.classList.remove('over');

					var item = document.getElementById(e.dataTransfer.getData('Text'));
					this.appendChild(item);

					scope.pList = reciper.data;

					if (this.classList.contains('dropzone')) {
						if (scope.pList.productList.indexOf(item.id) == -1) {
							scope.pList.productList.push(item.id);
						}
					}else{
						scope.pList.productList.splice(scope.pList.productList.indexOf(item.id), 1);
					};

					console.log(scope.pList);
					return false;
				},
				false
			);
		};
	};

})();
