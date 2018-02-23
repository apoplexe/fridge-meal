import 'expose-loader?angular!angular';
import 'babel-polyfill';

import style from './scss/base.scss';

import baseDtv      from './js/directives/baseDtv.js';
import mainDtv      from './js/directives/mainDtv.js';
import headerDtv    from './js/directives/headerDtv.js';
import footerDtv    from './js/directives/footerDtv.js';

import adder        from '../adder/adder.js';
import matcher      from '../matcher/matcher.js';
import dragger      from '../dragger/dragger.js';
// import opening      from '../opening/opening.js';

angular.module('fridgeMeal', ['matcher', 'dragger', 'adder']);

angular.element(
    ()=> {
        angular.bootstrap(document, ['fridgeMeal']);
    }
);

angular
.module('fridgeMeal')

.directive('baseDtv',        () => new baseDtv())
.directive('mainDtv',        () => new mainDtv())
.directive('headerDtv',      () => new headerDtv())
.directive('footerDtv',      () => new footerDtv());
