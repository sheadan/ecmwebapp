// js/controllers/plot.js
angular.module('PlotController', ['nvd3ChartDirectives'] )

    // register the plotting controller
    .controller('plotCtrlr', function($scope) {

        $scope.selected_data = null;

        defLabels = ["January", "February", "March", "April", "May", "June", "July"];
        defSeries = ['Series A', 'Series B'];
        defData = [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ];


        $scope.labels = defLabels;
        $scope.series = defSeries;
        $scope.data = defData;

        // GET experiments from RESTful API
        Experiments.get()
            .success(function(data) {
                $scope.experiments = data;
                console.log("success getting experiments from DB");
            })
            .error(function(data) {
                console.log("error acquiring data from DB");
            }) ;

        $scope.selectDataSet = function(selectedExpt) {
          if( $scope.selected_data === selectedExpt) {
            $scope.selected_data = null;
            $scope.labels = defLabels;
            $scope.data = defData;
            $scope.series = defSeries;
            console.log("selected expt set to null");
          }
          else {
            $scope.selected_data = selectedExpt;
            $scope.labels = selectedExpt.data.V;
            $scope.data = [selectedExpt.data.I];
            $scope.series = ['Series A'];
            console.log("selected expt set to " + $scope.selected_data.name);
          }
        };

        $scope.checkSelected = function(exptToCheck) {
          if( $scope.selected_data === exptToCheck ) { return true; }
          else { return false; }
        };

        $scope.onClick = function (points, evt) {
          console.log(points, evt);
        };

    });
