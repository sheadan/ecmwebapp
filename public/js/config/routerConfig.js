// js/controllers/routerConfig.js
angular.module('routerConfig', ['ngAnimate', 'ui.router'] )

    // inject the route provider factory into our controller
    .config( function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html'
        })

        .state('info', {
            url: '/info',
            templateUrl: 'partials/info.html'
        })

        .state('collect', {
            url: '/collect',
            templateUrl: 'partials/collect.html'
        })

        .state('collect.device', {
            url: '/device',
            templateUrl: 'partials/collect/selectDevice.html'
        })

        .state('collect.protocol', {
            url: '/protocol',
            templateUrl: 'partials/collect/selectExperiment.html'
        })

        .state('collect.submit', {
            url: '/submit',
            templateUrl: 'partials/collect/chooseSaveName.html'
        })

        .state('collect.complete', {
            url: '/submit',
            templateUrl: 'partials/collect/complete.html'
        })

        .state('analyze', {
            url: '/analyze',
            templateUrl: 'partials/analyze.html'
        })

        .state('analyze.select', {
            url : '/select',
            templateUrl: '/partials/analyze/selectData.html'
        })

        .state('analyze.plot', {
            url : '/plot',
            templateUrl: '/partials/analyze/analyzeData.html'
        });


    // catch all route
    // send users to the front page
    $urlRouterProvider.otherwise('/home');


})
