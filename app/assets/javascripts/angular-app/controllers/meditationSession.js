app.controller('MedSessionCtrl', ['$scope', 'MeditationSessionServ', function($scope, MeditationSessionServ){

  window.medservice = MeditationSessionServ

  console.log("Guide on is: " + MeditationSessionServ.getGuide());
  console.log("Music on is: " + MeditationSessionServ.getMusic());
  console.log("Time is: " + MeditationSessionServ.getTime());


  var initMeditation = function(){

    // checks which track to play according to the chosen options

    if (MeditationSessionServ.getGuide() && MeditationSessionServ.getMusic() && (MeditationSessionServ.getTime() ==  10)) {
      console.log("music and voice on and 10 mins");
      playTrack('http://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg')

    } else if (MeditationSessionServ.getGuide() && MeditationSessionServ.getMusic() && (MeditationSessionServ.getTime() ==  20)) {
      console.log("Guide on, voice on - 20mins")

    } else if (MeditationSessionServ.getGuide(false) && MeditationSessionServ.getMusic() && (MeditationSessionServ.getTime() ==  10)) {
      console.log("guide off, music on, time 10")

    } else if (MeditationSessionServ.getGuide(false) && MeditationSessionServ.getMusic() && (MeditationSessionServ.getTime() ==  20)) {
      console.log("guide off, music on, time 20")

    } else if (MeditationSessionServ.getGuide() && MeditationSessionServ.getMusic(false) && (MeditationSessionServ.getTime() ==  10)) {
      console.log("guide on, music off, time 10")

    } else if (MeditationSessionServ.getGuide() && MeditationSessionServ.getMusic(false) && (MeditationSessionServ.getTime() ==  20)) {
      console.log("guide on, music off, time 20")

    } else {
      console.log("not chosen.")
    };

  };

  var playTrack = function(mp3){

    $scope.playing = false;
    $scope.audio = document.createElement('audio');
    $scope.audio.src = mp3;
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
  };

  initMeditation();

}]);