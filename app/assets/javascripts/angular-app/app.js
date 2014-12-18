var app = angular.module('app', [
        'ui.router', 'ngResource']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/assets/angular-app/partials/home.html',
        controller: 'MedOptionsCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: '/assets/angular-app/partials/about.html',
        controller: 'AboutContrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: '/assets/angular-app/partials/contact.html',
        controller: 'ContactCtrl'
      })
      .state('guide', {
        url: '/guide',
        templateUrl: '/assets/angular-app/partials/guide.html',
        controller: 'MedOptionsCtrl'
      })
      .state('music', {
        url: '/music',
        templateUrl: '/assets/angular-app/partials/music.html',
        controller: 'MedOptionsCtrl'
      })
      .state('time', {
        url: '/time',
        templateUrl: '/assets/angular-app/partials/time.html',
        controller: 'MedOptionsCtrl'
      })
      .state('meditation', {
        url: '/meditation',
        templateUrl: '/assets/angular-app/partials/meditation.html',
        controller: 'MedSessionCtrl'
      })
      .state('courses', {
        url: '/courses',
        templateUrl: '/assets/angular-app/partials/courses.html',
        controller: 'MainCtrl'
      })
    // default fall back route
    $urlRouterProvider.otherwise('/');

});

