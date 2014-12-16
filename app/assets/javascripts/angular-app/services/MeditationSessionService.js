angular.module('app')
  .service('MeditationSessionServ', function () {

    // window.MeditationSessionServ = this;
    var _self = this;

    this.setGuide = function(guide) {
      _self.guideOn = guide;
    };

    this.getGuide = function() {
      return _self.guideOn;
    };

    this.setMusic = function(music) {
      _self.musicOn = music;
    };

    this.getMusic = function() {
      return _self.musicOn;
    };

    this.setTime = function(time){
      _self.medTime = time;
    };

    this.getTime = function(){
      return _self.medTime;
    };

    return this;
  });