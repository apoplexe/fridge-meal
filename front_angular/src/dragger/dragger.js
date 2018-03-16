import draggableDtv   from './js/directives/draggableDtv.js';
import droppableDtv   from './js/directives/droppableDtv.js';

export default angular.module('dragger', []);

angular
.module('dragger')
.directive('draggableDtv', () => new draggableDtv())
.directive('droppableDtv', () => new droppableDtv());
