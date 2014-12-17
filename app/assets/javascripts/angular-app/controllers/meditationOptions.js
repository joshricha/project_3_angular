app.controller('MedOptionsCtrl', ['$scope','MeditationSessionServ', function($scope, MeditationSessionServ){

  $scope.quickStart = function(number) {
     MeditationSessionServ.setQuickStart(number);
  };

  $scope.setGuide = function(guideOn) {
    MeditationSessionServ.setGuide(guideOn);
  };

  $scope.setMusic = function(musicOn) {
    MeditationSessionServ.setMusic(musicOn);
  };

  $scope.medTime = function(time) {
    MeditationSessionServ.setTime(time);
  };

}]);
