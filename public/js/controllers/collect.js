// js/controllers/main.js
angular.module('collectFormController', [])

    // inject the experiment service factory into controller
    .controller('collectController', function($scope, $http, Experiments) {
        $scope.ShowStep2 = false;
        $scope.ShowStep3 = false;
        $scope.ShowSubmit = false;

        $scope.formData = {
          device : "",
          protocol : "",
          dataName : "",
          params : {
            startV : 0,
            maxV : 0.5,
            minV :  -0.5,
            sweepRate :  0.1,
            cycles : 1,
            sampleRate: 1
          }
        };

        $scope.checkDevice = function() {
          if ($scope.formData.device  === "dev1" ) {
              $scope.ShowStep2 = true;
          }
          else {
            $scope.ShowStep2 = false;
            $scope.ShowStep3 = false;
            $scope.ShowSubmit = false;
          }
        };


        $scope.checkProtocol = function() {
          if ( $scope.formData.protocol  === "cv" ) {
              $scope.ShowStep3=true;
            }
          else {
            $scope.ShowStep3 = false;
            $scope.ShowSubmit = false;
          }
        };

        $scope.checkSaveName = function() {
          if ( $scope.formData.dataName  !== "" ) {
              $scope.ShowSubmit=true;
            }
          else {
              $scope.ShowSubmit = false;
          }
        };

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
                        $scope.formData = {
                          device : "",
                          protocol : "",
                          dataName : "",
                          params : {
                            startV : 0,
                            maxV : 0.5,
                            minV :  -0.5,
                            sweepRate :  0.1,
                            cycles : 1,
                            sampleRate: 1
                          }
                        } // clear the form so our user is ready to enter another
                        $scope.experiments = data; // assign our new list of experiments

                        //hide all the steps
                        $scope.ShowStep2 = false;
                        $scope.ShowStep3 = false;
                        $scope.ShowSubmit = false;

                    });
            }
        };

    });
