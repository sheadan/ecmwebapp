
angular.module('hardware_info_serv', [])

    // super simple service
    // each function returns a promise object
    .factory('hardware_info', function($http) {

      //hard-supply of all hardware information

      hardware = {
        name : "EC Meeseeks Demo Hardware",
        version : "0.1.0",
        date: "20-March-2016",
        experiments : ["Cyclic Voltammetry"]
      };

      return hardware;
    });
