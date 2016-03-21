// js/controllers/main.js
angular.module('analyzeController', [])

    // register the analysis controller
    .controller('analysisCtrlr', function($scope, $http, Experiments) {
        $scope.formData = {};
        $scope.selected_data = null;

        // GET experiments from RESTful API
        Experiments.get()
            .success(function(data) {
                $scope.experiments = data;
            });

        $scope.selUser=function(dataset){
            $scope.selected_data=dataset;
        }

        $scope.isSelected=function(dataset){
            return $scope.selected_data===dataset;
        }
    });


    });
