app.controller('MedSessionCtrl', ['$scope', 'MeditationSessionServ', function($scope, MeditationSessionServ){

  // for testing don't delete
  window.medservice = MeditationSessionServ

  console.log("Guide on is: " + MeditationSessionServ.getGuide());
  console.log("Music on is: " + MeditationSessionServ.getMusic());
  console.log("Time is: " + MeditationSessionServ.getTime());


  var initMeditation = function(){

    // quick starts
    if (MeditationSessionServ.getQuickStart() == 10) {
      console.log("starting 10")

    } else if (MeditationSessionServ.getQuickStart() == 20) {
      console.log("starting 20")

    };

    // refactoring the if else. Should put this in a function which takes params such as voiceOn, music on, length etc then provides the mp3 for those params

    // if (MeditationSessionServ.getTime() ==  10)) {
    //   if (MeditationSessionServ.getGuide()) {
    //     // 10 minute timer and guide on
    //     if (MeditationSessionServ.getMusic()) {
    //       // 10 min timer guide on and music on
    //     } else {
    //       // 10 min timer guide on and music off
    //     };
    //   } else {
    //     // 10 minute timer and guide off
    //       if (MeditationSessionServ.getMusic()) {
    //       // 10 minute timer and guide off music off
    //     } else {
    //        // 10 minute timer and guide off music on
    //     }
    //   }

    // } else if (MeditationSessionServ.getTime() ==  20)) {
    //     if (MeditationSessionServ.getGuide()) {
    //     // 20 minute timer and guide on
    //       if (MeditationSessionServ.getMusic()) {
    //       // 20 min timer guide on and music on
    //       } else {
    //       // 20 min timer guide on and music off
    //       };
    //     } else {
    //       // 20 minute timer and guide off
    //       if (MeditationSessionServ.getMusic()) {
    //       // 20 minute timer and guide off music off
    //     } else {
    //        // 20 minute timer and guide off music on
    //     }
    //   }
    // }


    // checks which track to play according to the chosen options
    if (MeditationSessionServ.getGuide() && MeditationSessionServ.getMusic() && (MeditationSessionServ.getTime() ==  10)) {
      console.log("music and voice on and 10 mins");
      playTrack('http://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg')

    } else if (MeditationSessionServ.getGuide() && MeditationSessionServ.getMusic() && (MeditationSessionServ.getTime() ==  20)) {
      console.log("Guide on, voice on - 20mins")

    } else if (MeditationSessionServ.getGuide() == false && MeditationSessionServ.getMusic() && (MeditationSessionServ.getTime() ==  10)) {
      console.log("guide off, music on, time 10")

    } else if (MeditationSessionServ.getGuide() == false && MeditationSessionServ.getMusic() && (MeditationSessionServ.getTime() ==  20)) {
      console.log("guide off, music on, time 20")

    } else if (MeditationSessionServ.getGuide() && MeditationSessionServ.getMusic() == false && MeditationSessionServ.getTime() ==  10) {
      console.log("guide on, music off, time 10")

    } else if (MeditationSessionServ.getGuide() && MeditationSessionServ.getMusic() == false && (MeditationSessionServ.getTime() ==  20)) {
      console.log("guide on, music off, time 20")
    } else if (MeditationSessionServ.getGuide() == false && MeditationSessionServ.getMusic() == false && (MeditationSessionServ.getTime() ==  10)) {
      console.log("guide on, music off, time 20")
    } else if (MeditationSessionServ.getGuide() == false && MeditationSessionServ.getMusic() == false && (MeditationSessionServ.getTime() ==  20)) {
      console.log("guide on, music off, time 20")
    } else {
      console.log("not chosen.")
    };

  };

  // var quickStart = function(time){
  //   if (time == 10) {
  //     console.log("starting quick 10")
  //   } else {
  //     console.log("starting quick 20")
  //   };
  // };

  var myFunction = function(){
    console.log("in my func");
  };

  var playTrack = function(mp3){

    $scope.playing = false;
    $scope.audio = document.createElement('audio');
    $scope.audio.addEventListener("ended", myFunction);
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