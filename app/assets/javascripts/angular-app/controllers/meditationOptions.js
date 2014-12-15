app.controller('MedOptionsCtrl', ['$scope','MeditationSessionServ', function($scope){

  $scope.quickStart10 = function() {
    // quick start 10 with no music or guide
  };

  $scope.quickStart20 = function() {
    // quick start 20 with no music or guide
  };

  $scope.setGuide = function(guideOn) {
    MeditationSessionServ.setGuide(guideOn);
  };

  $scope.setMusic = function(musicOn) {
    // MeditationSessionServ.setMusic(musicOn);
  };

  $scope.medTime = function(time) {
    // MeditationSessionServ.setTime(time);
  };



}]);
