var app = angular.module('app');

app.controller('MainCtrl', ['Statistic', '$scope', function(Statistic, $scope) {

    $scope.message = "Woooo works!"
    $scope.statistics = Statistic.query();
}]);



