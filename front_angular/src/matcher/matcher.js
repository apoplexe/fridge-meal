import getterSvc       from './js/services/getterSvc.js';

import matcherCtrl     from './js/controllers/matcherCtrl.js';
import recipeCtrl      from './js/controllers/recipeCtrl.js';

import productsDtv     from './js/directives/productsDtv.js';
import recipesDtv      from './js/directives/recipesDtv.js';
import matcherDtv      from './js/directives/matcherDtv.js';
import stepActiveDtv   from './js/directives/stepActiveDtv.js';

export default angular.module('matcher', []);

angular
.module('matcher')
.factory('getterSvc',       ($http) => new getterSvc($http))

.controller('matcherCtrl',   matcherCtrl)
.controller('recipeCtrl',    recipeCtrl)

.directive('productsDtv',    () => new productsDtv())
.directive('recipesDtv',     () => new recipesDtv())
.directive('matcherDtv',     () => new matcherDtv())
.directive('stepActiveDtv',  () => new stepActiveDtv());
