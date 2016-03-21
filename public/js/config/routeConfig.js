// js/controllers/main.js
angular.module('routeConfig', ['ngRoute'])

    // inject the route provider factory into our controller
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
          // Home
          .when("/", {
            templateUrl : "partials/home.html",
            controller : "PageCtrl"
          })
          // Pages
          .when("/info", {
            templateUrl : "partials/info.html",
            controller : "PageCtrl"})
          .when("/collect", {
            templateUrl: "partials/collect.html",
            controller: "collectController"
          })
          .when("/analyze", {
            templateUrl: "partials/analyze.html",
            controller: "PageCtrl"
          })
          // else 404
          .otherwise("/404", {
            templateUrl: "partials/404.html",
            controller: "PageCtrl"});
      }]);
