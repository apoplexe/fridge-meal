import productsSvc  from './js/services/productsSvc.js';
import recipesSvc   from './js/services/recipesSvc.js';

import matcherCtrl  from './js/controllers/matcherCtrl.js';
import recipesCtrl  from './js/controllers/recipesCtrl.js';

import headerDtv    from './js/directives/headerDtv.js';
import footerDtv    from './js/directives/footerDtv.js';
import productsDtv  from './js/directives/productsDtv.js';
import recipesDtv   from './js/directives/recipesDtv.js';
import matcherDtv   from './js/directives/matcherDtv.js';

export default angular.module('matcher', []);

angular
.module('matcher')
.factory('productsSvc',      ($http) => new productsSvc($http))
.factory('recipesSvc',       ($http) => new recipesSvc($http))

.controller('matcherCtrl',   matcherCtrl)
.controller('recipesCtrl',   recipesCtrl)

.directive('headerDtv',      () => new headerDtv())
.directive('footerDtv',      () => new footerDtv())
.directive('productsDtv',    () => new productsDtv())
.directive('recipesDtv',     () => new recipesDtv())
.directive('matcherDtv',     () => new matcherDtv());
