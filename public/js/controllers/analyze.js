// js/controllers/main.js
angular.module('analyzeCtrlr', [])

    // register the analysis controller
    .controller('analysisCtrlr', function($scope, $http, $filter, Experiments) {

        // initialize the selected data file to nothing
        $scope.selected_data = null;



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
            console.log("selected expt set to null");
          }
          else {
            $scope.selected_data = selectedExpt;
            console.log("selected expt set to " + $scope.selected_data.name);
            console.log("V is " + $scope.selected_data.data.V.length + "long")
            console.log("I is " + $scope.selected_data.data.I.length + "long")
            console.log("t is " + $scope.selected_data.data.t.length + "long")
          }
        };

        // check if an entry is selected
        $scope.checkSelected = function(exptToCheck) {
          if( $scope.selected_data === exptToCheck ) { return true; }
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
                text: 'Title for Line Chart'
            },
            subtitle: {
                enable: true,
                text: 'Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.',
                css: {
                    'text-align': 'center',
                    'margin': '10px 13px 0px 7px'
                }
            },
            caption: {
                enable: true,
                html: '<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style="text-decoration: underline;">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style="color: darkred;">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href="https://github.com/krispo/angular-nvd3" target="_blank">2</a>, 3]</sup>.',
                css: {
                    'text-align': 'justify',
                    'margin': '10px 13px 0px 7px'
                }
            }
        };


        $scope.exampledata = sinAndCos();

         /*Random Data Generator */
         function sinAndCos() {
             var sin = [],sin2 = [],
                 cos = [];

             //Data is represented as an array of {x,y} pairs.
             for (var i = 0; i < 100; i++) {
                 sin.push( {x: i, y: Math.sin(i/10)} );
                 sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) *0.25 + 0.5});
                 cos.push({x: i, y: .5 * Math.cos(i/10+ 2) + Math.random() / 10});
             }

             //Line chart data should be sent as an array of series objects.
             return [
                 {
                     values: sin,      //values - represents the array of {x,y} data points
                     key: 'Sine Wave', //key  - the name of the series.
                     color: '#ff7f0e'  //color - optional: choose your own line color.
                 },
                 {
                     values: cos,
                     key: 'Cosine Wave',
                     color: '#2ca02c'
                 },
                 {
                     values: sin2,
                     key: 'Another sine wave',
                     color: '#7777ff',
                     area: true      //area - set to true if you want this line to turn into a filled area chart.
                 }
             ];
         };


});





/*
fessmodule.$inject = ['$scope', '$filter'];



 */
