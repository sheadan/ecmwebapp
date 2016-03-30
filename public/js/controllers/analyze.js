// js/controllers/main.js
angular.module('analyzeCtrlr', [])

    // register the analysis controller
    .controller('analysisCtrlr', function($scope, $http, $filter, Experiments) {

        // initialize the selected data file to nothing
        $scope.selected_data = [];
        $scope.plotData = [];

        var selectedExpt = null;
        var selectedVars = ["V", "t"];


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

          if( selectedExpt === null ) { return; }

          var index = $scope.selected_data.indexOf(selectedExpt);

          if( index > -1) {
              $scope.selected_data.splice(index, 1);
              console.log(selectedExpt.name + "was removed to array");
            }

          else {
              $scope.selected_data.push(selectedExpt)
              console.log(selectedExpt.name + "was added to array");
            }

          if ( $scope.selected_data.length > 0 ) {
            datifySelected();
            console.log( $scope.plotData )
          }
        };

        // check if an entry is selected
        $scope.checkSelected = function(exptToCheck) {
          var index = $scope.selected_data.indexOf(exptToCheck);

          if( index > -1) { return true; }
          else { return false; }
        };

        // i don't remember the utility of this?
        $scope.onClick = function (points, evt) {
          console.log(points, evt);
        };


        $scope.options = {
            chart: {
                type: 'lineChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function(d){ return d.x; },
                y: function(d){ return d.y; },
                useInteractiveGuideline: true,
                dispatch: {
                    stateChange: function(e){ console.log("stateChange"); },
                    changeState: function(e){ console.log("changeState"); },
                    tooltipShow: function(e){ console.log("tooltipShow"); },
                    tooltipHide: function(e){ console.log("tooltipHide"); }
                },
                xAxis: {
                    axisLabel: 'Time (ms)'
                },
                yAxis: {
                    axisLabel: 'Voltage (v)',
                    tickFormat: function(d){
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -10
                },
                callback: function(chart){
                    console.log("!!! lineChart callback !!!");
                }
            },
            title: {
                enable: true,
                text: 'Time (ms) vs Voltage (V)'
            }
        };


        /*Random Data Generator */
        function datifySelected() {
            // set plotData to empty
            $scope.plotData = [];

          // assign length to length of selected data array (indicates number of selected experiments)
            var dataLength = $scope.selected_data.length;

            // define function to transform experiment data into format for plotting
            var datify = function(expt) {
              // minimum length of all of the measured variable arrays
              // CHANGE FOR RE-WRITE**
                var minLength = Math.min(
                    expt.data.V.length,
                    expt.data.I.length,
                    expt.data.t.length
                  );
                // set variables for key, color, values for d3 plotting format
                var data_key = expt.name;
                var data_color = '#2ca02c';
                var data_vals = [];
                // fill data_Vals with selected
                // CHANGE FOR REWRITE***
                for (var i = 0; i < minLength; i++) {
                    data_vals.push( {x : expt.data.t[i] , y : expt.data.V[i] } )
                };

                $scope.plotData.push({
                  'values' : data_vals,
                  'key' : data_key
                });
            };

            //run each experiment through datification (reformatting for d3)
            for (var i = 0; i < dataLength; i++) {
                var object = datify($scope.selected_data[i]);
            };

        };


});





/*
fessmodule.$inject = ['$scope', '$filter'];



 */
