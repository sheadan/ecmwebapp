// js/controllers/main.js
angular.module('experimentController', [])

    // inject the experiment service factory into controller
    .controller('expController', function($scope, $http, Experiments) {
        $scope.formData = {};

        // GET =====================================================================
        // when landing on the page, get all experiments and show them
        // use the service to get all the experiments
        Experiments.get()
            .success(function(data) {
                $scope.experiments = data;
            });

        // CREATE ==================================================================
        // when submitting the add form, send the text to the node API
        $scope.createExp = function() {

            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            // people can't just hold enter to keep adding the same to-do anymore
            if (!$.isEmptyObject($scope.formData)) {

                // call the create function from our service (returns a promise object)
                Experiments.create($scope.formData)

                    // if successful creation, call our get function to get all the new experiments
                    .success(function(data) {
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.experiments = data; // assign our new list of experiments
                    });
            }
        };

        // DELETE ==================================================================
        // delete experiment after checking it
        $scope.deleteExp = function(id) {
            Experiments.delete(id)
                // if successful creation, call our get function to get all the new experiments
                .success(function(data) {
                    $scope.experiments = data; // assign our new list of experiments
                });
        };
    });
