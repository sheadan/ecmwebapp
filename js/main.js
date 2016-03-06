/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('ecmWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/info", {templateUrl: "partials/info.html", controller: "PageCtrl"})
    .when("/collect", {templateUrl: "partials/collect.html", controller: "PageCtrl"})
    .when("/analyze", {templateUrl: "partials/analyze.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls Pages
* I currently do not use this controller for the routing.
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

app.controller('TabController', function(){
  this.tab = 0;

  this.setTab = function(newValue){
    if(this.tab === newValue) {
      this.tab = 0;
    }
    else{
      this.tab = newValue;
    }
  };

  this.isSet = function(tabName){
    return this.tab === tabName;
  };



});
