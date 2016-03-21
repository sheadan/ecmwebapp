// js/controllers/fileScanner.js
angular.module('fileScannerController', [])

  .controller("FileScanner", function ($scope) {

    $scope.files = [
      {'name':'file_1', 'date':'03-Feb-2016'},
      {'name':'file_2', 'date':'04-Feb-2016'},
      {'name':'file_3', 'date':'07-Feb-2016'},
      {'name':'file_4', 'date':'10-Mar-2016'}
      ];

    $scope.selected = null;

    $scope.setSelected = function($index) {
      $scope.selected = $index;
      console.log($scope.selected);
  };
});
