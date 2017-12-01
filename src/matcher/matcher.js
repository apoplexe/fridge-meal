import getterSvc   from './js/services/getterSvc.js';

import matcherCtrl  from './js/controllers/matcherCtrl.js';

import productsDtv  from './js/directives/productsDtv.js';
import recipesDtv   from './js/directives/recipesDtv.js';
import adderDtv     from './js/directives/adderDtv.js';
import matcherDtv   from './js/directives/matcherDtv.js';

export default angular.module('matcher', []);

angular
.module('matcher')
.factory('getterSvc',       ($http) => new getterSvc($http))

.controller('matcherCtrl',   matcherCtrl)

.directive('productsDtv',    () => new productsDtv())
.directive('recipesDtv',     () => new recipesDtv())
.directive('adderDtv',       () => new adderDtv())
.directive('matcherDtv',     () => new matcherDtv());
