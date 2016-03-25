
angular.module('software_info_serv', [])

    // super simple service
    // returns a promise object
    .factory('software_info', function($http) {

      //hard-supply of all software information
      software = {
        name : "EC Meeseeks Demo Software",
        version : "0.1.0",
        authors : "Dan Shea",
        date: "20-March-2016"
      };

      return software;
    });
