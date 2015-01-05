app.controller('MedSessionCtrl', ['$scope', '$http', 'MeditationSessionServ', function($scope, $http,  MeditationSessionServ){

  // for testing don't delete
  window.medservice = MeditationSessionServ

  var initMeditation = function(){

    var guide = MeditationSessionServ.getGuide();
    var music = MeditationSessionServ.getMusic();
    var time = MeditationSessionServ.getTime();


    // quick starts
    if (MeditationSessionServ.getQuickStart() == 10) {
      playTrack('https://s3.amazonaws.com/uploads.hipchat.com/39979/1250606/kxuxNl335K00g56/10%20Minute%20TRANSCENDENT%20GUIDED%20MEDITATION.mp3');
      $scope.time = 10;

    } else if (MeditationSessionServ.getQuickStart() == 20) {
      playTrack('https://s3.amazonaws.com/uploads.hipchat.com/39979/1250606/NruhUzs05rmkqLJ/20%20minute%20Guided%20Mindfulness%20Exercise.mp3');
      $scope.time = 20;
    };

    // Should put this in a function which takes params such as voiceOn, music on, length etc then provides the mp3 for those params


    // checks which track to play according to the chosen options
    if (MeditationSessionServ.getGuide() && MeditationSessionServ.getMusic() && (MeditationSessionServ.getTime() ==  10)) {
      // playTrack('http://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg');
      playTrack('https://s3.amazonaws.com/uploads.hipchat.com/39979/1250606/kxuxNl335K00g56/10%20Minute%20TRANSCENDENT%20GUIDED%20MEDITATION.mp3');
      $scope.time = 10;

    } else if (MeditationSessionServ.getGuide() && MeditationSessionServ.getMusic() && (MeditationSessionServ.getTime() ==  20)) {
      playTrack('https://s3.amazonaws.com/uploads.hipchat.com/39979/1250606/jlEN1Gw4uSsN6SK/Guided%20Meditation%20-%20Blissful%20Deep%20Relaxation.mp3');
      $scope.time = 20;

    } else if (MeditationSessionServ.getGuide() == false && MeditationSessionServ.getMusic() && (MeditationSessionServ.getTime() ==  10)) {
      playTrack('https://s3.amazonaws.com/uploads.hipchat.com/39979/1250606/ycAhj7gYB5AmsLV/10%20Minutes%20Meditation%20Music%20Ambient%20%28Deep%20Meditation%2010%20Min%20mysoftmusic%29.mp3');
      $scope.time = 10;

    } else if (MeditationSessionServ.getGuide() == false && MeditationSessionServ.getMusic() && (MeditationSessionServ.getTime() ==  20)) {
      playTrack('https://s3.amazonaws.com/uploads.hipchat.com/39979/1250606/k5sB1jQ8Q6OCBrZ/Meditation%20and%20Healing%20Music%20-%2020%20min%20of%20Deep%20Meditation%20-%20Clouds%2C%20Peace%20and%20Serenity.mp3');
      $scope.time = 20;

    } else if (MeditationSessionServ.getGuide() && MeditationSessionServ.getMusic() == false && MeditationSessionServ.getTime() ==  10) {
      playTrack('https://s3.amazonaws.com/uploads.hipchat.com/39979/1250606/k5sB1jQ8Q6OCBrZ/Meditation%20and%20Healing%20Music%20-%2020%20min%20of%20Deep%20Meditation%20-%20Clouds%2C%20Peace%20and%20Serenity.mp3');
      $scope.time = 10;

    } else if (MeditationSessionServ.getGuide() && MeditationSessionServ.getMusic() == false && (MeditationSessionServ.getTime() ==  20)) {
      playTrack('https://s3.amazonaws.com/uploads.hipchat.com/39979/1250606/NruhUzs05rmkqLJ/20%20minute%20Guided%20Mindfulness%20Exercise.mp3');
       $scope.time = 10;

    } else if (MeditationSessionServ.getGuide() == false && MeditationSessionServ.getMusic() == false && (MeditationSessionServ.getTime() ==  10)) {
      playTrack('https://s3.amazonaws.com/uploads.hipchat.com/39979/1250606/NruhUzs05rmkqLJ/20%20minute%20Guided%20Mindfulness%20Exercise.mp3');
      $scope.time = 20;

    } else if (MeditationSessionServ.getGuide() == false && MeditationSessionServ.getMusic() == false && (MeditationSessionServ.getTime() ==  20)) {
      playTrack('https://s3.amazonaws.com/uploads.hipchat.com/39979/1250606/k5sB1jQ8Q6OCBrZ/Meditation%20and%20Healing%20Music%20-%2020%20min%20of%20Deep%20Meditation%20-%20Clouds%2C%20Peace%20and%20Serenity.mp3');
      $scope.time = 20;

    } else {
      console.log("not chosen.")
    };
  };

  var getUser = function(){
    $http.get('api/v1/current_user')
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

    $http.post('api/v1/statistics', {user_id: userId, seconds_meditated: time}).
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