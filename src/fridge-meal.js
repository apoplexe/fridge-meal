import 'expose-loader?angular!angular';
import 'babel-polyfill';

import style from './scss/fridgemeal.scss';

import matcher from './matcher/matcher.js';
import dragger from './dragger/dragger.js';

angular.module('fridgeMeal', ['matcher', 'dragger']);

angular.element(
  ()=> {
    angular.bootstrap(document, ['fridgeMeal']);
  }
);
