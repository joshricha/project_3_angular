angular
  .module('app')
  .factory('Statistic', function($resource) {

    var Statistic = $resource('http://localhost:3000/api/v1/statistics/:id.json', {id: '@id'}, {
      update: {
        method: 'PUT'
      }
    });

    return Statistic;
  });