angular.module('app')
  .service('MeditationSessionServ', function MeditationSessionServ() {

    window.addressService = this;
    var _self = this;

    // this.getAddressString = function () {
    //   return _self.addressString;
    // };

    this.setGuide = function (guide) {
      _self.guideOn = guide;
      console.log(_self.guideOn);
    };

    // this.getAddressParts = function() {
    //   return _self.addressParts;
    // };

    // this.setAddressParts = function (address) {
    //   _self.addressObject = {};
    //   _self.addressParts = address;
    //   var addressParts = _self.addressParts;

    //   for (var i = 0; i < addressParts.length; i++) {
    //     _self.addressObject[address[i].types[0]] = addressParts[i].short_name;
    //   };
    // };

    // this.getAddressObject = function () {
    //   return _self.addressObject;
    // };

    // this.getState = function () {
    //   if (_self.addressObject) {
    //     return _self.addressObject.administrative_area_level_1
    //   } else {
    //     return 'VIC'
    //   }
    // };

    // this.getStreetNumber = function () {
    //   return _self.addressObject.street_number;
    // };

    // this.getStreetName = function () {
    //   return _self.addressObject.route;
    // };

    // this.getCity = function () {
    //   return _self.addressObject.locality;
    // };

    // this.getCountry = function () {
    //   return _self.addressObject.country;
    // };

    // this.getPostCode = function () {
    //   return _self.addressObject.postal_code;
    // };

    // this.getCoords = function () {
    //   return _self.coords;
    // };

    // this.setCoords = function (coords) {
    //   _self.coords = {lat: coords.lat, lng: coords.lng};
    // };

    return this;
  });