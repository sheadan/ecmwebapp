/**
 * Main AngularJS Web Application
 */
angular.module('ecmWebApp', [
  'routeConfig',
  'tabsController',
  'collectFormController',
  'analyzeCtrlr',
  'InfoController',
  'hardware_info_serv',
  'software_info_serv',
  'experimentService',
  'ngRoute',
  'ngTable',
  'sorterDirective',
  'nvd3'
]);
