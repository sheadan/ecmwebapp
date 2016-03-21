/**
 * Main AngularJS Web Application
 */
angular.module('ecmWebApp', [
  'routeConfig',
  'fileScannerController',
  'lineCtrlr',
  'pageCtrlr',
  'tabsController',
  'collectFormController',
  'analyzeController',
  'experimentService',
  'ngRoute',
  'chart.js'
]);
