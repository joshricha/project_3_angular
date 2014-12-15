angular.module('app')
  .service('MeditationSessionServ', function () {

    // window.MeditationSessionServ = this;
    var _self = this;

    this.setGuide = function(guide) {
      _self.guideOn = guide;
      console.log(_self.guideOn);
    };

    this.getGuide = function() {
      console.log(_self.guideOn);
    };

    this.setMusic = function(music) {
      _self.musicOn = music;
      console.log(_self.musicOn);
    };

    this.getMusic = function() {
      return _self.musicOn;
    };

    this.setTime = function(time){
      _self.medTime = time;
      console.log(_self.medTime);
    };

    this.getTime = function(){
      return _self.medTime;
    };

    return this;
  });