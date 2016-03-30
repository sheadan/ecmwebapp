/**
 * Main AngularJS Web Application
 */
angular.module('ecmWebApp', [
  'ui.router',
  'routerConfig',
  'tabsController',
  'collectFormController',
  'analyzeCtrlr',
  'InfoController',
  'experimentService',
  'ngTable',
  'sorterDirective',
  'nvd3',
  'ngAnimate',
  'ui.bootstrap'
]);
