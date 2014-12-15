var app = angular.module('app', [
        'ui.router', 'ngResource']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/assets/angular-app/partials/home.html',
        controller: 'AboutContrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: '/assets/angular-app/partials/about.html',
        controller: 'AboutContrl'
      })

    // default fall back route
    $urlRouterProvider.otherwise('/');


});

