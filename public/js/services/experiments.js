
angular.module('experimentService', [])

    // super simple service
    // each function returns a promise object
    .factory('Experiments', function($http) {
        return {
            get : function() {
                return $http.get('/api/experiments');
            },
            create : function(experimentData) {
                return $http.post('/api/experiments', experimentData);
            },
            delete : function(id) {
                return $http.delete('/api/experiments/' + id);
            }
        }
    });
