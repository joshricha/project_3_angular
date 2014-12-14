app
  .controller('StatisticCtrl', function($http, $scope){
    $scope.title = "Statistic";
    $scope.statistic = [];
    var getStatistics = function () {
      $http.get('http://localhost:3000/api/v1/statistics')
        .success(function(data){
          console.log(data);
          $scope.statistic = data;
          window.statistic = $scope.statistic;
        })
        .error(function(data){
          console.log('error', data);
          return data;
        });
    };
    getStatistics();
  })