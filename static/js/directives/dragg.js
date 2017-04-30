'use strict';

var productListArray = [];

angular
.module('mealMaker')
.directive('draggable', function() {
	return function(scope, element) {
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
});

angular
.module('mealMaker')
.directive('droppable', function() {
	return {
		scope: {},
		link: function(scope, element, attrs, controller) {
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
					console.log(el);
					this.appendChild(item);

					if(this.classList.contains('dropzone')){
						productListArray.push(item.innerText);
					}else{
						var elemName = item.innerText;
						var elementToRemove = productListArray.indexOf(elemName);

						productListArray.splice(elementToRemove, 1);
					};


					return false;
				},
				false
			);

		},
	}
});
