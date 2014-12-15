var app = angular.module('app', ['ngAnimate',
        'ui.router', 'ngResource']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('about', {
        url: '/#about',
        templateUrl: 'partials/about.html'
      });

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
});

