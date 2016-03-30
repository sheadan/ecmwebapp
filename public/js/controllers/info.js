// js/controllers/main.js
angular.module('InfoController', [])

    // register the info controller
    .controller('infoCtrlr', function( $scope ) {

        $scope.hardware = {
                name : "EC Meeseeks Demo Hardware",
                version : "0.5.2s",
                date: "28-March-2016",
                experiments : "Cyclic Voltammetry, Chronoamperometry"
              };

        $scope.software = {
                name : "EC Meeseeks Demo Software",
                version : "0.1.2",
                authors : "Dan Shea",
                date: "28-March-2016"
              };

    });
