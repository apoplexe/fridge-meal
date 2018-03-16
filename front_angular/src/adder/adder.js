import adderSvc     from './js/services/adderSvc.js';
import adderCtrl    from './js/controllers/adderCtrl.js';
import adderDtv     from './js/directives/adderDtv.js';

export default angular.module('adder', []);

angular
.module('adder')
.factory('adderSvc',         ($http, $sce) => new adderSvc($http, $sce))
.controller('adderCtrl',     adderCtrl)
.directive('adderDtv',       () => new adderDtv());
