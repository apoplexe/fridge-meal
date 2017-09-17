import productsCtrl from './js/controllers/productsCtrl.js';
import recipesCtrl  from './js/controllers/recipesCtrl.js';

import header       from './js/directives/header.js';
import footer       from './js/directives/footer.js';
import productsDtv  from './js/directives/productsDtv.js';
import recipesDtv   from './js/directives/recipesDtv.js';

import getRecipes   from './js/services/getRecipes.js';
import getProducts  from './js/services/getProducts.js';

export default angular
.module('matcher', [])
.controller('recipesCtrl', recipesCtrl)
.controller('productsCtrl', productsCtrl)

.directive('header', header)
.directive('footer', footer)
.directive('productsDtv', productsDtv)
.directive('recipesDtv', recipesDtv)


.service('getRecipes', getRecipes)
.service('getProducts', getProducts);
