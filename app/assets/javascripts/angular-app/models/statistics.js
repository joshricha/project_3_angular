var app = angular.module('app')
  .factory('Statistic', function($resource) {

    var Statistic = $resource('http://rightmind.herokuapp.com/api/v1/statistics/:id.json', {id: '@id'}, {
      update: {
        method: 'PUT'
      }
    });

    return Statistic;
  });

