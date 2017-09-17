import 'expose-loader?angular!angular';
import 'babel-polyfill';

import matcher from './matcher/matcher.js';

angular.module('fridgeMeal', ['matcher']);

angular.element(
  ()=> {
    angular.bootstrap(document, ['fridgeMeal']);
  }
);
