app.controller('MedSessionCtrl', ['$scope', '$http', 'MeditationSessionServ', function($scope, $http,  MeditationSessionServ){

  // for testing don't delete
  window.medservice = MeditationSessionServ

  console.log("Guide on is: " + MeditationSessionServ.getGuide());
  console.log("Music on is: " + MeditationSessionServ.getMusic());
  console.log("Time is: " + MeditationSessionServ.getTime());


  var initMeditation = function(){

    // quick starts
    if (MeditationSessionServ.getQuickStart() == 10) {
      playTrack('http://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg');
      $scope.time = 10;

    } else if (MeditationSessionServ.getQuickStart() == 20) {
      console.log("starting 20")

    };

    // Should put this in a function which takes params such as voiceOn, music on, length etc then provides the mp3 for those params

    // checks which track to play according to the chosen options
    if (MeditationSessionServ.getGuide() && MeditationSessionServ.getMusic() && (MeditationSessionServ.getTime() ==  10)) {
      console.log("music and voice on and 10 mins");
      playTrack('http://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg');
      $scope.time = 10;

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

  var getUser = function(){
    $http.get('http://localhost:3000/api/v1/current_user')
  .success(function(data){
    $scope.user = data;
    window.user = $scope.user;
    setStats(data);
    return data
  })
  .error(function(data){
    console.log('error', data);
    return data;
    });
  };

  var setStats = function(userInfo) {
    userId = userInfo.id;
    console.log("You med for " + $scope.time)
    time = $scope.time * 60
    console.log("Time is: " + time)

    $http.post('http://localhost:3000/api/v1/statistics', {user_id: userId, seconds_meditated: time}).
      success(function(data, status, headers, config) {
      console.log("data sent!!!")
    }).
      error(function(data, status, headers, config) {
      console.log("narrrrrr")
  });
    // put or patch
  }

  var playTrack = function(mp3){

    $scope.playing = false;
    $scope.audio = document.createElement('audio');
    $scope.audio.addEventListener("ended", getUser);
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