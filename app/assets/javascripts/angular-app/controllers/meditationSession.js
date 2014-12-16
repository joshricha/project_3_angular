app.controller('MedSessionCtrl', ['$scope', 'MeditationSessionServ', function($scope, MeditationSessionServ){

  console.log("Guide on is: " + MeditationSessionServ.getGuide());
  console.log("Music on is: " + MeditationSessionServ.getMusic());
  console.log("Time is: " + MeditationSessionServ.getTime());

  if ()

  $scope.playing = false;
  $scope.audio = document.createElement('audio');
  $scope.audio.src = 'http://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg';
  $scope.audio.src = 'http://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg';
  $scope.play = function() {
    $scope.audio.play();
    $scope.playing = true;
  };
  $scope.stop = function() {
    $scope.audio.pause();
    $scope.playing = false;
  };
  $scope.audio.addEventListener('ended', function() {
    $scope.$apply(function() {
      $scope.stop()
    });
  });
}]);