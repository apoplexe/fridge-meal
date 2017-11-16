import openingCtrl  from './js/controllers/openingCtrl.js';
import openingDtv   from './js/directives/openingDtv.js';

export default angular.module('opening', []);

angular
.module('opening')
.controller('openingCtrl',   openingCtrl)
.directive('openingDtv',     ($timeout) => new openingDtv($timeout));
