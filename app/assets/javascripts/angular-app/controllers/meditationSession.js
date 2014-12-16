app.controller('MedSessionCtrl', ['$scope', 'MeditationSessionServ', function($scope, MeditationSessionServ){

  console.log("Guide on is: " + MeditationSessionServ.getGuide());
  console.log("Music on is: " + MeditationSessionServ.getMusic());
  console.log("Time is: " + MeditationSessionServ.getTime());

  if (MeditationSessionServ.getGuide() && MeditationSessionServ.getMusic()) {
    console.log("music and voice on");
  };

  $scope.playing = false;
  $scope.audio = document.createElement('audio');
  $scope.audio2 = document.createElement('audio');
  $scope.audio.src = 'http://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg';
  $scope.audio2.src = 'https://s3.amazonaws.com/uploads.hipchat.com/39979/1250606/xIoFUbbxvxQnWYm/01%20Love%20%26%20Devotion.mp3';
  $scope.play = function() {
    $scope.audio.play();
    $scope.audio2.play();
    $scope.playing = true;
  };
  $scope.stop = function() {
    $scope.audio.pause();
    $scope.audio2.pause();
    $scope.playing = false;
  };
  $scope.audio.addEventListener('ended', function() {
    $scope.$apply(function() {
      $scope.stop()
    });
  });
}]);