angular
  .module('app')
  .controller('MainCtrl', ['Statistic', '$scope', function(Statistic, $scope) {

    $scope.statistics = Statistic.query();
  }]);