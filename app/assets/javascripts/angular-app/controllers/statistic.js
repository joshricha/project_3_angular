app.controller('StatisticCtrl', function($http, $scope){
  $scope.statistic = [];

  var getUserId = function(){
    $http.get('api/v1/current_user')
      .success(function(data){
        $scope.user = data;
        window.user = $scope.user;

        getStatistics(data);
  })
      .error(function(data){
        console.log('error', data);
        return data;
      });
  };

  var getStatistics = function (data) {

    userId = data.id;

    $http.get('api/v1/statistics/' + userId + '.json')
      .success(function(data){
        console.log(data.seconds_meditated);
        $scope.statistic = data;
        window.statistic = $scope.statistic;
      })
      .error(function(data){
        console.log('error', data);
        return data;
      });
  };
  getUserId();
})