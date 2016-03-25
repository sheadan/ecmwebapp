// js/controllers/main.js
angular.module('routeConfig', ['ngRoute'])

    // inject the route provider factory into our controller
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
          // Home
          .when("/", {
            templateUrl : "partials/home.html"
          })
          // Pages
          .when("/info", {
            templateUrl : "partials/info.html"
          })
          .when("/collect", {
            templateUrl: "partials/collect.html"
          })
          .when("/analyze", {
            templateUrl: "partials/analyze.html"
          })
          // else 404
          .otherwise("/404", {
            templateUrl: "partials/404.html"
          });
      }]);
