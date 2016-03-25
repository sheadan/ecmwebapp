// js/controllers/main.js
angular.module('InfoController', ['ngTable'])

    // register the info controller
    .controller('infoCtrlr', function( $scope, hardware_info, software_info, NgTableParams ) {

        $scope.hardware = hardware_info;
        $scope.hardware = software_info;

        var self = this;
        $scope.data = [
          {name: "Moroni", age: 50},
          {name: "Bromono", age: 14},
          {name: "LOLOLO", age: 123}
          ];

        self.tableParams = new NgTableParams({}, { dataset: $scope.data});
    });
