/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('ecmDataAnalyzer', [
  'ngRoute','chart.js'
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


app.controller("LineCtrl", function ($scope) {

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  });

app.controller("FileScanner", function ($scope) {

  $scope.files = [
    {'name':'file_1', 'date':'03-Feb-2016'},
    {'name':'file_2', 'date':'04-Feb-2016'},
    {'name':'file_3', 'date':'07-Feb-2016'},
    {'name':'file_4', 'date':'10-Mar-2016'}
    ];

  $scope.selected = null;

  $scope.setSelected = function($index) {
    $scope.selected = $index;
    console.log($scope.selected);
};

});
